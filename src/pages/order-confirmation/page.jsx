import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { CheckCircle2, Package, MapPin } from 'lucide-react';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';

export default function OrderConfirmationPage() {
    const location = useLocation();
    const navigate = useNavigate();
    const { orderId, address } = location.state || {};

    // Generate a random order ID if not provided (fallback)
    const finalOrderId = orderId || `ORD-${Math.floor(Math.random() * 1000000)}`;

    useEffect(() => {
        if (!location.state) {
            // Optional: redirect home if accessed directly without state
            // navigate('/'); 
        }
    }, [location, navigate]);

    return (
        <div className="min-h-screen flex flex-col bg-background">
            <Header />
            <div className="flex-1 container mx-auto px-4 py-12 max-w-3xl">
                <Card className="border-green-100 shadow-lg">
                    <CardHeader className="text-center pb-2">
                        <div className="mx-auto h-24 w-24 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6">
                            <CheckCircle2 className="h-12 w-12" />
                        </div>
                        <CardTitle className="text-3xl font-bold text-green-700">Order Confirmed!</CardTitle>
                        <p className="text-muted-foreground mt-2">
                            Thank you for your purchase. Your order has been placed successfully.
                        </p>
                    </CardHeader>
                    <CardContent className="space-y-8 pt-6">
                        <div className="bg-muted/30 p-6 rounded-lg border flex flex-col items-center justify-center text-center">
                            <span className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Order ID</span>
                            <span className="text-2xl font-bold mt-1">{finalOrderId}</span>
                        </div>

                        {address && (
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="space-y-3">
                                    <div className="flex items-center gap-2 text-primary font-semibold">
                                        <Package className="h-5 w-5" />
                                        <h3>Shipping Details</h3>
                                    </div>
                                    <div className="text-sm text-muted-foreground pl-7 space-y-1">
                                        <p className="font-medium text-foreground">{address.name}</p>
                                        <p>{address.email}</p>
                                    </div>
                                </div>
                                <div className="space-y-3">
                                    <div className="flex items-center gap-2 text-primary font-semibold">
                                        <MapPin className="h-5 w-5" />
                                        <h3>Delivery Address</h3>
                                    </div>
                                    <div className="text-sm text-muted-foreground pl-7 space-y-1">
                                        <p>{address.address}</p>
                                        <p>{address.city}, {address.zip}</p>
                                        <p>{address.country}</p>
                                    </div>
                                </div>
                            </div>
                        )}

                        <div className="text-center text-sm text-muted-foreground">
                            An email confirmation has been sent to {address?.email || 'your email'}.
                        </div>
                    </CardContent>
                    <CardFooter className="flex justify-center pt-4 pb-8">
                        <Button size="lg" className="px-8" onClick={() => navigate('/')}>
                            Continue Shopping
                        </Button>
                    </CardFooter>
                </Card>
            </div>
            <Footer />
        </div>
    );
}
