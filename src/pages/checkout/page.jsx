import { useState } from 'react';
import { useCart } from '@/contexts/CartContext';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Loader2, CheckCircle2 } from 'lucide-react';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';

export default function CheckoutPage() {
    const { cart, checkout } = useCart();
    const navigate = useNavigate();
    const [step, setStep] = useState(1); // 1: Address, 2: Confirm, 3: Success
    const [loading, setLoading] = useState(false);
    const [address, setAddress] = useState({
        name: '',
        email: '',
        address: '',
        city: '',
        zip: '',
        country: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setAddress(prev => ({ ...prev, [name]: value }));
    };

    const handleAddressSubmit = (e) => {
        e.preventDefault();
        setStep(2);
    };

    const handlePlaceOrder = async () => {
        setLoading(true);
        // Simulate API call delay
        await new Promise(resolve => setTimeout(resolve, 1000));

        // Use the checkout function from context
        const result = await checkout();
        setLoading(false);

        if (result.success) {
            navigate('/order-confirmation', {
                state: {
                    orderId: result.orderId,
                    address: address
                }
            });
        } else {
            alert(`Order failed: ${result.error}`);
        }
    };

    // If cart is empty and not on success page, redirect/show empty state
    if (cart.items.length === 0 && step !== 3) {
        return (
            <div className="min-h-screen flex flex-col bg-background">
                <Header />
                <div className="flex-1 flex flex-col items-center justify-center p-8 space-y-4">
                    <h1 className="text-2xl font-bold">Your cart is empty</h1>
                    <p className="text-muted-foreground">Add some items before checking out.</p>
                    <Button onClick={() => navigate('/')}>Continue Shopping</Button>
                </div>
                <Footer />
            </div>
        )
    }

    return (
        <div className="min-h-screen flex flex-col bg-background">
            <Header />
            <div className="flex-1 container mx-auto px-4 py-8 max-w-4xl">
                <h1 className="text-3xl font-bold mb-8 text-center">Checkout</h1>

                {/* Progress Steps */}
                <div className="flex justify-center mb-8">
                    <div className={`flex items-center ${step >= 1 ? 'text-primary' : 'text-muted-foreground'}`}>
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center border-2 ${step >= 1 ? 'border-primary bg-primary text-primary-foreground' : 'border-current'}`}>1</div>
                        <span className="ml-2 font-medium">Address</span>
                    </div>
                    <div className={`w-16 h-1 mx-4 ${step >= 2 ? 'bg-primary' : 'bg-muted'}`} />
                    <div className={`flex items-center ${step >= 2 ? 'text-primary' : 'text-muted-foreground'}`}>
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center border-2 ${step >= 2 ? 'border-primary bg-primary text-primary-foreground' : 'border-current'}`}>2</div>
                        <span className="ml-2 font-medium">Confirm</span>
                    </div>
                    <div className={`w-16 h-1 mx-4 ${step >= 3 ? 'bg-primary' : 'bg-muted'}`} />
                    <div className={`flex items-center ${step >= 3 ? 'text-primary' : 'text-muted-foreground'}`}>
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center border-2 ${step >= 3 ? 'border-primary bg-primary text-primary-foreground' : 'border-current'}`}>3</div>
                        <span className="ml-2 font-medium">Done</span>
                    </div>
                </div>

                {step === 1 && (
                    <Card>
                        <CardHeader>
                            <CardTitle>Shipping Address</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <form id="address-form" onSubmit={handleAddressSubmit} className="space-y-4">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <Label htmlFor="name">Full Name</Label>
                                        <Input id="name" name="name" required value={address.name} onChange={handleInputChange} placeholder="John Doe" />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="email">Email</Label>
                                        <Input id="email" name="email" type="email" required value={address.email} onChange={handleInputChange} placeholder="john@example.com" />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="address">Address</Label>
                                    <Input id="address" name="address" required value={address.address} onChange={handleInputChange} placeholder="123 Main St" />
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                    <div className="space-y-2">
                                        <Label htmlFor="city">City</Label>
                                        <Input id="city" name="city" required value={address.city} onChange={handleInputChange} placeholder="New York" />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="zip">ZIP Code</Label>
                                        <Input id="zip" name="zip" required value={address.zip} onChange={handleInputChange} placeholder="10001" />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="country">Country</Label>
                                        <Input id="country" name="country" required value={address.country} onChange={handleInputChange} placeholder="USA" />
                                    </div>
                                </div>
                            </form>
                        </CardContent>
                        <CardFooter className="flex justify-end">
                            <Button type="submit" form="address-form">Continue to Confirmation</Button>
                        </CardFooter>
                    </Card>
                )}

                {step === 2 && (
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="md:col-span-2 space-y-6">
                            <Card>
                                <CardHeader>
                                    <CardTitle>Review Items</CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    {cart.items.map((item) => (
                                        <div key={item.id} className="flex gap-4">
                                            <div className="h-20 w-20 flex-shrink-0 overflow-hidden rounded-md border text-muted-foreground">
                                                <img src={item.image} alt={item.name} className="h-full w-full object-cover" />
                                            </div>
                                            <div className="flex flex-1 flex-col justify-between">
                                                <div className="flex justify-between">
                                                    <h3 className="font-medium">{item.name}</h3>
                                                    <p className="font-medium">${(item.price * item.quantity).toFixed(2)}</p>
                                                </div>
                                                <div className="flex justify-between text-sm text-muted-foreground">
                                                    <p>{item.color}</p>
                                                    <p>Qty: {item.quantity}</p>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </CardContent>
                            </Card>
                            <Card>
                                <CardHeader>
                                    <CardTitle>Shipping To</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="font-medium">{address.name}</p>
                                    <p>{address.address}</p>
                                    <p>{address.city}, {address.zip}</p>
                                    <p>{address.country}</p>
                                    <p className="text-sm text-muted-foreground mt-2">{address.email}</p>
                                </CardContent>
                            </Card>
                        </div>
                        <div>
                            <Card>
                                <CardHeader>
                                    <CardTitle>Order Summary</CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-2">
                                    <div className="flex justify-between">
                                        <span className="text-muted-foreground">Subtotal</span>
                                        <span>${cart.total.toFixed(2)}</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-muted-foreground">Shipping</span>
                                        <span>Free</span>
                                    </div>
                                    <Separator className="my-2" />
                                    <div className="flex justify-between font-bold text-lg">
                                        <span>Total</span>
                                        <span>${cart.total.toFixed(2)}</span>
                                    </div>
                                </CardContent>
                                <CardFooter className="flex-col gap-2">
                                    <Button className="w-full" size="lg" onClick={handlePlaceOrder} disabled={loading}>
                                        {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                                        Place Order
                                    </Button>
                                    <Button variant="outline" className="w-full" onClick={() => setStep(1)} disabled={loading}>
                                        Back to Address
                                    </Button>
                                </CardFooter>
                            </Card>
                        </div>
                    </div>
                )}

                {step === 3 && (
                    <div className="flex flex-col items-center justify-center text-center py-12">
                        <div className="h-20 w-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6">
                            <CheckCircle2 className="h-10 w-10" />
                        </div>
                        <h2 className="text-3xl font-bold mb-2">Order Placed Successfully!</h2>
                        <p className="text-muted-foreground max-w-md mb-8">
                            Thank you for your purchase. We have sent a confirmation email to <span className="font-medium text-foreground">{address.email}</span>.
                        </p>
                        <Button size="lg" onClick={() => navigate('/')}>
                            Continue Shopping
                        </Button>
                    </div>
                )}
            </div>
            <Footer />
        </div>
    );
}
