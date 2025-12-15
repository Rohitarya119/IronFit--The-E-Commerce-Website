;

import { useState } from "react";
import { Heart, ShoppingBag, Star, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
const newProducts = [{
  id: 7,
  name: "Velocity Running Shoes",
  price: 129.0,
  rating: 4.9,
  reviews: 45,
  image: "/black-running-training-shoes-product.jpg",
  badge: "New",
  category: "Footwear"
}, {
  id: 8,
  name: "Ultra Compression Leggings",
  price: 75.0,
  rating: 4.8,
  reviews: 23,
  image: "/black-compression-leggings-gym-product.jpg",
  badge: "New",
  category: "Apparel"
}, {
  id: 9,
  name: "Pro Gym Backpack",
  price: 95.0,
  rating: 5.0,
  reviews: 18,
  image: "/placeholder.svg?height=400&width=400",
  badge: "New",
  category: "Accessories"
}, {
  id: 10,
  name: "Adjustable Dumbbell Set",
  price: 299.0,
  rating: 4.9,
  reviews: 67,
  image: "/placeholder.svg?height=400&width=400",
  badge: "New",
  category: "Equipment"
}];
export function NewArrivals() {
  const [favorites, setFavorites] = useState([]);
  const toggleFavorite = id => {
    setFavorites(prev => prev.includes(id) ? prev.filter(fav => fav !== id) : [...prev, id]);
  };
  return <section className="bg-background py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <h2 className="text-3xl font-black uppercase tracking-tight text-foreground sm:text-4xl">New Arrivals</h2>
            <p className="mt-2 text-muted-foreground">Fresh gear just dropped</p>
          </div>
          <Link to="/new-arrivals" className="hidden items-center gap-1 text-sm font-medium text-primary hover:underline sm:flex">
            View All <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {newProducts.map(product => <div key={product.id} className="group relative overflow-hidden rounded-xl bg-card transition-all hover:shadow-xl">
              <div className="relative aspect-square overflow-hidden bg-secondary">
                <img src={product.image || "/placeholder.svg"} alt={product.name} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                <Badge className="absolute left-3 top-3 bg-primary text-primary-foreground">{product.badge}</Badge>
                <Button variant="ghost" size="icon" className={`absolute right-3 top-3 rounded-full bg-background/80 backdrop-blur-sm ${favorites.includes(product.id) ? "text-red-500" : "text-muted-foreground"}`} onClick={() => toggleFavorite(product.id)}>
                  <Heart className={`h-5 w-5 ${favorites.includes(product.id) ? "fill-current" : ""}`} />
                </Button>
                <div className="absolute bottom-0 left-0 right-0 translate-y-full bg-background/95 p-4 backdrop-blur-sm transition-transform duration-300 group-hover:translate-y-0">
                  <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                    <ShoppingBag className="mr-2 h-4 w-4" />
                    Add to Cart
                  </Button>
                </div>
              </div>

              <div className="p-4">
                <p className="text-xs font-medium uppercase tracking-wider text-primary">{product.category}</p>
                <h3 className="mt-1 font-semibold text-foreground">{product.name}</h3>
                <div className="mt-2 flex items-center justify-between">
                  <span className="text-lg font-bold text-foreground">${product.price.toFixed(2)}</span>
                  <div className="flex items-center gap-1 text-sm">
                    <Star className="h-4 w-4 fill-primary text-primary" />
                    <span className="font-medium text-foreground">{product.rating}</span>
                  </div>
                </div>
              </div>
            </div>)}
        </div>
      </div>
    </section>;
}