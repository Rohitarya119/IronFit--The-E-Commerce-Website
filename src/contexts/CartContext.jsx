import { createContext, useContext, useState, useEffect } from 'react';
import api from '@/lib/api';
import { useAuth } from './AuthContext';

const CartContext = createContext({});

export function CartProvider({ children }) {
    const { user } = useAuth();
    const [cart, setCart] = useState({ items: [], total: 0 });
    const [isOpen, setIsOpen] = useState(false);

    // Load cart from local storage on mount (for guest/offline demo)
    useEffect(() => {
        const savedCart = localStorage.getItem('guest_cart');
        if (savedCart && !user) {
            setCart(JSON.parse(savedCart));
        }
    }, [user]);

    // Save cart to local storage when updated (only for guests)
    useEffect(() => {
        if (!user) {
            localStorage.setItem('guest_cart', JSON.stringify(cart));
        }
    }, [cart, user]);

    // Sync guest cart to backend on login and fetch remote cart
    useEffect(() => {
        const syncAndFetchCart = async () => {
            if (user) {
                // 1. Sync guest items if any exist
                const guestCartStr = localStorage.getItem('guest_cart');
                if (guestCartStr) {
                    const guestCart = JSON.parse(guestCartStr);
                    if (guestCart.items && guestCart.items.length > 0) {
                        for (const item of guestCart.items) {
                            try {
                                await api.post('/cart/add', { productId: item.id, quantity: item.quantity });
                            } catch (err) {
                                console.error("Error syncing item", item, err);
                            }
                        }
                    }
                    // Clear guest cart after syncing
                    localStorage.removeItem('guest_cart');
                }

                // 2. Fetch latest cart from server
                try {
                    const res = await api.get('/cart');
                    if (res.data && res.data.items) {
                        // Transform backend cart (nested product) to frontend structure (flat)
                        const mappedItems = res.data.items.map(item => ({
                            ...item.product,
                            quantity: item.quantity
                        }));

                        const total = mappedItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);

                        setCart({ items: mappedItems, total });
                    }
                } catch (error) {
                    console.error("Failed to fetch cart", error);
                }
            }
        };

        syncAndFetchCart();
    }, [user]);

    const addToCart = async (product) => {
        // Optimistic UI update
        setCart((prev) => {
            const existingItem = prev.items.find((item) => item.id === product.id);
            let newItems;
            if (existingItem) {
                newItems = prev.items.map((item) =>
                    item.id === product.id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                );
            } else {
                newItems = [...prev.items, { ...product, quantity: 1 }];
            }
            return {
                items: newItems,
                total: prev.total + product.price,
            };
        });
        setIsOpen(true);

        if (user) {
            try {
                // Ensure the token is in localStorage before calling
                if (localStorage.getItem('token')) {
                    await api.post('/cart/add', { productId: product.id, quantity: 1 });
                }
            } catch (error) {
                console.error('Failed to sync cart with backend', error);
                // If 403, it might be due to race condition or invalid token, simple console error is fine as interceptor handles redirect.
            }
        }
    };

    const removeFromCart = (productId) => {
        setCart(prev => {
            const item = prev.items.find(i => i.id === productId);
            if (!item) return prev;
            return {
                items: prev.items.filter(i => i.id !== productId),
                total: prev.total - (item.price * item.quantity)
            }
        })
    }

    const updateQuantity = async (productId, newQuantity) => {
        if (newQuantity < 1) {
            removeFromCart(productId);
            return;
        }

        setCart((prev) => {
            const item = prev.items.find((i) => i.id === productId);
            if (!item) return prev;

            const quantityDiff = newQuantity - item.quantity;

            return {
                items: prev.items.map((i) =>
                    i.id === productId ? { ...i, quantity: newQuantity } : i
                ),
                total: prev.total + (item.price * quantityDiff)
            };
        });

        if (user) {
            try {
                await api.put('/cart/update', { productId: productId, quantity: newQuantity });
            } catch (error) {
                console.error('Failed to sync cart with backend', error);
            }
        }
    };

    const checkout = async () => {
        if (user) {
            try {
                if (localStorage.getItem('token')) {
                    const response = await api.post('/cart/checkout');
                    setCart({ items: [], total: 0 });
                    return { success: true, orderId: response.data.id || response.data.orderId };
                } else {
                    console.error("Token missing during checkout");
                    window.location.href = '/login'; // Force redirect since logout() might not be available directly if we don't destructure it
                    return { success: false, error: "Authentication missing. Redirecting to login..." };
                }
            } catch (err) {
                console.error("Checkout failed:", err);
                return { success: false, error: err.response?.data?.message || err.message || "Checkout failed" };
            }
        } else {
            // Guest checkout mock
            setCart({ items: [], total: 0 });
            return { success: true };
        }
    }

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart, updateQuantity, checkout, isOpen, setIsOpen }}>
            {children}
        </CartContext.Provider>
    );
}

export const useCart = () => useContext(CartContext);
