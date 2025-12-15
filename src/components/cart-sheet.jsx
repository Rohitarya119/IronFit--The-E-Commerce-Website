import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetDescription, SheetFooter } from "@/components/ui/sheet";
import { useAuth } from "@/contexts/AuthContext";
import { useCart } from "@/contexts/CartContext";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Loader2, ShoppingBag, X, Minus, Plus } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export function CartSheet() {
    const { user } = useAuth();
    const { cart, removeFromCart, updateQuantity, isOpen, setIsOpen } = useCart();
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleCheckout = () => {
        setIsOpen(false);
        navigate('/checkout');
    };

    return (
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetContent className="flex w-full flex-col sm:max-w-lg">
                <SheetHeader>
                    <SheetTitle>Shopping Cart ({cart.items.length})</SheetTitle>
                    <SheetDescription>
                        Review your items and checkout.
                    </SheetDescription>
                </SheetHeader>

                {cart.items.length > 0 ? (
                    <>
                        <ScrollArea className="flex-1 -mx-6 px-6">
                            <div className="flex flex-col gap-4 py-4">
                                {cart.items.map((item) => (
                                    <div key={item.id} className="flex gap-4">
                                        <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-border">
                                            <img
                                                src={item.image}
                                                alt={item.name}
                                                className="h-full w-full object-cover"
                                            />
                                        </div>
                                        <div className="flex flex-1 flex-col">
                                            <div className="flex justify-between text-base font-medium text-foreground">
                                                <h3>{item.name}</h3>
                                                <p className="ml-4">${(item.price * item.quantity).toFixed(2)}</p>
                                            </div>
                                            <p className="mt-1 text-sm text-muted-foreground">{item.color}</p>
                                            <div className="flex flex-1 items-end justify-between text-sm">
                                                <div className="flex items-center gap-2">
                                                    <Button
                                                        variant="outline"
                                                        size="icon"
                                                        className="h-8 w-8"
                                                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                                    >
                                                        <Minus className="h-3 w-3" />
                                                    </Button>
                                                    <span className="w-8 text-center">{item.quantity}</span>
                                                    <Button
                                                        variant="outline"
                                                        size="icon"
                                                        className="h-8 w-8"
                                                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                                    >
                                                        <Plus className="h-3 w-3" />
                                                    </Button>
                                                </div>
                                                <Button variant="ghost" size="sm" onClick={() => removeFromCart(item.id)} className="text-primary hover:text-primary/80">Remove</Button>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </ScrollArea>
                        <div className="space-y-4 pt-4">
                            <div className="flex justify-between text-base font-medium text-foreground">
                                <p>Subtotal</p>
                                <p>${cart.total.toFixed(2)}</p>
                            </div>
                            <p className="text-xs text-muted-foreground mt-0">Shipping and taxes calculated at checkout.</p>
                            <Button className="w-full" onClick={handleCheckout} disabled={loading}>
                                {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                                Checkout
                            </Button>
                            <div className="mt-2 flex justify-center text-center text-sm text-muted-foreground">
                                <p>
                                    or{" "}
                                    <button
                                        type="button"
                                        className="font-medium text-primary hover:text-primary/80"
                                        onClick={() => setIsOpen(false)}
                                    >
                                        Continue Shopping
                                        <span aria-hidden="true"> &rarr;</span>
                                    </button>
                                </p>
                            </div>
                        </div>
                    </>
                ) : (
                    <div className="flex h-full flex-col items-center justify-center space-y-4">
                        <ShoppingBag className="h-16 w-16 text-muted-foreground" />
                        <div className="text-xl font-medium text-muted-foreground">Your cart is empty</div>
                        <Button variant="link" onClick={() => setIsOpen(false)} className="text-primary">
                            Start Shopping
                        </Button>
                    </div>
                )}
            </SheetContent>
        </Sheet>
    );
}
