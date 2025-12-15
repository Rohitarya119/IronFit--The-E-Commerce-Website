import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { CategoryFilters } from "@/components/category-filters";
import { ProductGrid } from "@/components/product-grid";
import { Badge } from "@/components/ui/badge";
import { Timer } from "lucide-react";
const saleProducts = [{
  id: 1,
  name: "Pro Performance Tee",
  price: 45.0,
  originalPrice: 60.0,
  rating: 4.9,
  reviews: 128,
  image: "/black-athletic-performance-t-shirt-men-gym.jpg",
  badge: "25% OFF",
  colors: ["black", "white", "gray"],
  category: "Men"
}, {
  id: 2,
  name: "Compression Tank",
  price: 42.0,
  originalPrice: 55.0,
  rating: 4.7,
  reviews: 156,
  image: "/black-compression-tank-top-men-gym.jpg",
  badge: "24% OFF",
  colors: ["black", "white"],
  category: "Men"
}, {
  id: 3,
  name: "Cropped Tank Top",
  price: 35.0,
  originalPrice: 45.0,
  rating: 4.7,
  reviews: 189,
  image: "/pink-cropped-tank-top-women-gym.jpg",
  badge: "22% OFF",
  colors: ["black", "white", "pink"],
  category: "Women"
}, {
  id: 4,
  name: "Kettlebell Set",
  price: 199.0,
  originalPrice: 249.0,
  rating: 4.8,
  reviews: 312,
  image: "/placeholder.svg?height=400&width=400",
  badge: "20% OFF",
  colors: ["black"],
  category: "Equipment"
}, {
  id: 5,
  name: "Lifting Straps",
  price: 19.0,
  originalPrice: 25.0,
  rating: 4.7,
  reviews: 312,
  image: "/placeholder.svg?height=400&width=400",
  badge: "24% OFF",
  colors: ["black", "red"],
  category: "Accessories"
}, {
  id: 6,
  name: "Biker Shorts",
  price: 40.0,
  originalPrice: 50.0,
  rating: 4.8,
  reviews: 198,
  image: "/black-biker-shorts-women-gym.jpg",
  badge: "20% OFF",
  colors: ["black", "gray"],
  category: "Women"
}, {
  id: 7,
  name: "Medicine Ball Set",
  price: 129.0,
  originalPrice: 159.0,
  rating: 4.6,
  reviews: 167,
  image: "/placeholder.svg?height=400&width=400",
  badge: "19% OFF",
  colors: ["black"],
  category: "Equipment"
}, {
  id: 8,
  name: "Gym Sleeveless Tee",
  price: 38.0,
  originalPrice: 48.0,
  rating: 4.5,
  reviews: 134,
  image: "/black-sleeveless-gym-tee-men-athletic.jpg",
  badge: "21% OFF",
  colors: ["black", "white", "gray"],
  category: "Men"
}, {
  id: 9,
  name: "Seamless Leggings",
  price: 52.0,
  originalPrice: 68.0,
  rating: 4.8,
  reviews: 287,
  image: "/black-seamless-leggings-women-gym.jpg",
  badge: "24% OFF",
  colors: ["black", "gray"],
  category: "Women"
}, {
  id: 10,
  name: "Training Joggers",
  price: 59.0,
  originalPrice: 75.0,
  rating: 4.9,
  reviews: 203,
  image: "/black-athletic-joggers-men-gym-training.jpg",
  badge: "21% OFF",
  colors: ["black", "gray", "navy"],
  category: "Men"
}, {
  id: 11,
  name: "Resistance Band Set",
  price: 22.0,
  originalPrice: 29.0,
  rating: 4.8,
  reviews: 456,
  image: "/colorful-resistance-bands-set-product.jpg",
  badge: "24% OFF",
  colors: ["multi"],
  category: "Accessories"
}, {
  id: 12,
  name: "Sports Bra Classic",
  price: 36.0,
  originalPrice: 48.0,
  rating: 4.7,
  reviews: 213,
  image: "/classic-black-sports-bra-women.jpg",
  badge: "25% OFF",
  colors: ["black", "white"],
  category: "Women"
}];
const filters = [{
  name: "Category",
  options: [{
    id: "men",
    label: "Men",
    count: 24
  }, {
    id: "women",
    label: "Women",
    count: 28
  }, {
    id: "accessories",
    label: "Accessories",
    count: 18
  }, {
    id: "equipment",
    label: "Equipment",
    count: 12
  }]
}, {
  name: "Discount",
  options: [{
    id: "10plus",
    label: "10% Off & More",
    count: 82
  }, {
    id: "20plus",
    label: "20% Off & More",
    count: 56
  }, {
    id: "30plus",
    label: "30% Off & More",
    count: 24
  }, {
    id: "50plus",
    label: "50% Off & More",
    count: 8
  }]
}, {
  name: "Size",
  options: [{
    id: "xs",
    label: "XS",
    count: 38
  }, {
    id: "s",
    label: "S",
    count: 45
  }, {
    id: "m",
    label: "M",
    count: 52
  }, {
    id: "l",
    label: "L",
    count: 48
  }, {
    id: "xl",
    label: "XL",
    count: 42
  }]
}, {
  name: "Price",
  options: [{
    id: "under25",
    label: "Under $25",
    count: 18
  }, {
    id: "25-50",
    label: "$25 - $50",
    count: 34
  }, {
    id: "50-100",
    label: "$50 - $100",
    count: 22
  }, {
    id: "over100",
    label: "Over $100",
    count: 8
  }]
}];
export default function SalePage() {
  return <div className="min-h-screen bg-background">
      <Header />

      {/* Sale Hero Banner */}
      <section className="relative overflow-hidden bg-gradient-to-r from-primary/20 via-primary/10 to-transparent py-12 sm:py-16">
        <div className="absolute inset-0 bg-[url('/sale-banner-gym-equipment.jpg')] opacity-10" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center text-center">
            <Badge className="mb-4 bg-primary/20 text-primary border border-primary/30">
              <Timer className="mr-1 h-3 w-3" />
              Limited Time Only
            </Badge>
            <h1 className="text-4xl font-black uppercase tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              Mega <span className="text-primary">Sale</span>
            </h1>
            <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
              Up to 50% off on selected items. Don't miss out on these incredible deals on premium gym gear and apparel.
            </p>
            <div className="mt-8 flex items-center gap-8">
              <div className="text-center">
                <div className="text-3xl font-black text-primary">82</div>
                <div className="text-sm text-muted-foreground">Items on Sale</div>
              </div>
              <div className="h-12 w-px bg-border" />
              <div className="text-center">
                <div className="text-3xl font-black text-primary">50%</div>
                <div className="text-sm text-muted-foreground">Max Discount</div>
              </div>
              <div className="h-12 w-px bg-border" />
              <div className="text-center">
                <div className="text-3xl font-black text-primary">3</div>
                <div className="text-sm text-muted-foreground">Days Left</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <CategoryFilters filters={filters} productCount={saleProducts.length} />
        <ProductGrid products={saleProducts} />
      </main>
      <Footer />
    </div>;
}