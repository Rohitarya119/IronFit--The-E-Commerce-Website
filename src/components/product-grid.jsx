;

import { useState } from "react";
import { Heart, ShoppingBag, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useCart } from "@/contexts/CartContext";

export function ProductGrid({
  products
}) {
  const [favorites, setFavorites] = useState([]);
  const { addToCart } = useCart();

  const toggleFavorite = id => {
    setFavorites(prev => prev.includes(id) ? prev.filter(fav => fav !== id) : [...prev, id]);
  };
  return <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
    {products.map(product => <div key={product.id} className="group relative overflow-hidden rounded-xl bg-card transition-all hover:shadow-xl">
      <div className="relative aspect-square overflow-hidden bg-secondary">
        <img src={product.image || "/placeholder.svg"} alt={product.name} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
        {product.badge && <Badge className="absolute left-3 top-3 bg-primary text-primary-foreground">{product.badge}</Badge>}
        <Button variant="ghost" size="icon" className={`absolute right-3 top-3 rounded-full bg-background/80 backdrop-blur-sm ${favorites.includes(product.id) ? "text-red-500" : "text-muted-foreground"}`} onClick={() => toggleFavorite(product.id)}>
          <Heart className={`h-5 w-5 ${favorites.includes(product.id) ? "fill-current" : ""}`} />
        </Button>
        <div className="absolute bottom-0 left-0 right-0 translate-y-full bg-background/95 p-4 backdrop-blur-sm transition-transform duration-300 group-hover:translate-y-0">
          <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90" onClick={() => addToCart(product)}>
            <ShoppingBag className="mr-2 h-4 w-4" />
            Add to Cart
          </Button>
        </div>
      </div>

      <div className="p-4">
        <div className="flex items-center gap-1 text-sm">
          <Star className="h-4 w-4 fill-primary text-primary" />
          <span className="font-medium text-foreground">{product.rating}</span>
          <span className="text-muted-foreground">({product.reviews})</span>
        </div>
        <h3 className="mt-2 font-semibold text-foreground">{product.name}</h3>
        <div className="mt-2 flex items-center gap-2">
          <span className="text-lg font-bold text-foreground">${product.price.toFixed(2)}</span>
          {product.originalPrice && <span className="text-sm text-muted-foreground line-through">${product.originalPrice.toFixed(2)}</span>}
        </div>
        <div className="mt-3 flex gap-1">
          {product.colors.map(color => <div key={color} className="h-4 w-4 rounded-full border border-border" style={{
            backgroundColor: color === "multi" ? "linear-gradient(45deg, red, blue, green)" : color === "navy" ? "#1e3a5f" : color
          }} />)}
        </div>
      </div>
    </div>)}
  </div>;
}