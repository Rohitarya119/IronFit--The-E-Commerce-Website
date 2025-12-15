import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, Search, ShoppingBag, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { useAuth } from "@/contexts/AuthContext";
import { useCart } from "@/contexts/CartContext";
import { CartSheet } from "./cart-sheet";

const navigation = [{
  name: "Men",
  href: "/men"
}, {
  name: "Women",
  href: "/women"
}, {
  name: "Accessories",
  href: "/accessories"
}, {
  name: "Equipment",
  href: "/equipment"
}, {
  name: "Sale",
  href: "/sale"
}];

export function Header() {
  const { user, logout } = useAuth();
  const { cart, setIsOpen } = useCart();
  const cartCount = cart.items.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          {/* Logo */}
          <Link to="/shop" className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
              <span className="text-lg font-black text-primary-foreground">IF</span>
            </div>
            <span className="hidden text-xl font-black tracking-tight text-foreground sm:block">IRONFIT</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-8 lg:flex">
            {navigation.map(item => <Link key={item.name} to={item.href} className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
              {item.name}
            </Link>)}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-foreground">
              <Search className="h-5 w-5" />
              <span className="sr-only">Search</span>
            </Button>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-foreground">
                  <User className="h-5 w-5" />
                  <span className="sr-only">Account</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-48">
                {user ? (
                  <>
                    <DropdownMenuItem className="font-medium">{user.email}</DropdownMenuItem>
                    <DropdownMenuItem>
                      <Link to="/orders" className="w-full">Orders</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={logout}>Sign Out</DropdownMenuItem>
                  </>
                ) : (
                  <>
                    <DropdownMenuItem>
                      <Link to="/login" className="w-full">Sign In</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Link to="/register" className="w-full">Create Account</Link>
                    </DropdownMenuItem>
                  </>
                )}
              </DropdownMenuContent>
            </DropdownMenu>

            <Button variant="ghost" size="icon" className="relative text-muted-foreground hover:text-foreground" onClick={() => setIsOpen(true)}>
              <ShoppingBag className="h-5 w-5" />
              {cartCount > 0 && <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
                {cartCount}
              </span>}
              <span className="sr-only">Cart</span>
            </Button>

            {/* Mobile Menu */}
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="lg:hidden">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-80 bg-background">
                <nav className="mt-8 flex flex-col gap-4">
                  {navigation.map(item => <Link key={item.name} to={item.href} className="text-lg font-medium text-foreground transition-colors hover:text-primary">
                    {item.name}
                  </Link>)}
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>
      <CartSheet />
    </>
  );
}