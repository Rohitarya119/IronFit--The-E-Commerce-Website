;

import { useState } from "react";
import { Heart, ShoppingBag, Star, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
const products = [{
  id: 1,
  name: "Pro Performance Tee",
  price: 45.0,
  originalPrice: 60.0,
  rating: 4.9,
  reviews: 128,
  image: "/black-athletic-performance-t-shirt-product.jpg",
  badge: "Best Seller",
  colors: ["black", "white", "gray"]
}, {
  id: 2,
  name: "Elite Training Shorts",
  price: 55.0,
  rating: 4.8,
  reviews: 89,
  image: "/black-gym-training-shorts-product.jpg",
  colors: ["black", "navy"]
}, {
  id: 3,
  name: "Power Lifting Belt",
  price: 89.0,
  rating: 5.0,
  reviews: 234,
  image: "/leather-weightlifting-belt-product-dark.jpg",
  badge: "Top Rated",
  colors: ["black", "brown"]
}, {
  id: 4,
  name: "Compression Tank",
  price: 42.0,
  originalPrice: 55.0,
  rating: 4.7,
  reviews: 156,
  image: "/black-compression-tank-top-gym-product.jpg",
  badge: "Sale",
  colors: ["black", "white"]
}, {
  id: 5,
  name: "Training Gloves Pro",
  price: 35.0,
  rating: 4.6,
  reviews: 67,
  image: "/black-gym-workout-gloves-product.jpg",
  colors: ["black"]
}, {
  id: 6,
  name: "Resistance Band Set",
  price: 29.0,
  rating: 4.8,
  reviews: 312,
  image: "/colorful-resistance-bands-set-product.jpg",
  colors: ["multi"]
}];
export function FeaturedProducts() {
  const [favorites, setFavorites] = useState([]);
  const toggleFavorite = id => {
    setFavorites(prev => prev.includes(id) ? prev.filter(fav => fav !== id) : [...prev, id]);
  };
  return <section className="bg-secondary/30 py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <h2 className="text-3xl font-black uppercase tracking-tight text-foreground sm:text-4xl">Featured Gear</h2>
            <p className="mt-2 text-muted-foreground">Top picks from our collection</p>
          </div>
          <div className="hidden gap-2 sm:flex">
            <Button variant="outline" size="icon" className="rounded-full bg-transparent">
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="icon" className="rounded-full bg-transparent">
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map(product => <div key={product.id} className="group relative overflow-hidden rounded-xl bg-card transition-all hover:shadow-xl">
              <div className="relative aspect-square overflow-hidden bg-secondary">
                <img src={product.image || "/placeholder.svg"} alt={product.name} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                {product.badge && <Badge className="absolute left-3 top-3 bg-primary text-primary-foreground">{product.badge}</Badge>}
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
                <div className="flex items-center gap-1 text-sm">
                  <Star className="h-4 w-4 fill-primary text-primary" />
                  <span className="font-medium text-foreground">{product.rating}</span>
                  <span className="text-muted-foreground">({product.reviews})</span>
                </div>
                <h3 className="mt-2 font-semibold text-foreground">{product.name}</h3>
                <div className="mt-2 flex items-center gap-2">
                  <span className="text-lg font-bold text-foreground">${product.price.toFixed(2)}</span>
                  {product.originalPrice && <span className="text-sm text-muted-foreground line-through">
                      ${product.originalPrice.toFixed(2)}
                    </span>}
                </div>
                <div className="mt-3 flex gap-1">
                  {product.colors.map(color => <div key={color} className="h-4 w-4 rounded-full border border-border" style={{
                backgroundColor: color === "multi" ? "linear-gradient(45deg, red, blue, green)" : color === "navy" ? "#1e3a5f" : color
              }} />)}
                </div>
              </div>
            </div>)}
        </div>

        <div className="mt-10 text-center">
          <Button variant="outline" size="lg" className="border-border text-foreground hover:bg-secondary bg-transparent">
            View All Products
          </Button>
        </div>
      </div>
    </section>;
}