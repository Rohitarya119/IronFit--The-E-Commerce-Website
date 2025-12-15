import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { CategoryHero } from "@/components/category-hero";
import { CategoryFilters } from "@/components/category-filters";
import { ProductGrid } from "@/components/product-grid";
const equipmentProducts = [{
  id: 1,
  name: "Adjustable Dumbbell Set",
  price: 349.0,
  rating: 4.9,
  reviews: 234,
  image: "/placeholder.svg?height=400&width=400",
  badge: "Best Seller",
  colors: ["black"],
  category: "Dumbbells"
}, {
  id: 2,
  name: "Olympic Barbell",
  price: 289.0,
  rating: 5.0,
  reviews: 178,
  image: "/placeholder.svg?height=400&width=400",
  badge: "Top Rated",
  colors: ["black"],
  category: "Barbells"
}, {
  id: 3,
  name: "Kettlebell Set (5-35lb)",
  price: 199.0,
  originalPrice: 249.0,
  rating: 4.8,
  reviews: 312,
  image: "/placeholder.svg?height=400&width=400",
  badge: "Sale",
  colors: ["black"],
  category: "Kettlebells"
}, {
  id: 4,
  name: "Flat Weight Bench",
  price: 179.0,
  rating: 4.7,
  reviews: 145,
  image: "/placeholder.svg?height=400&width=400",
  colors: ["black"],
  category: "Benches"
}, {
  id: 5,
  name: "Pull-Up Bar Doorway",
  price: 45.0,
  rating: 4.6,
  reviews: 456,
  image: "/placeholder.svg?height=400&width=400",
  colors: ["black"],
  category: "Bars"
}, {
  id: 6,
  name: "Bumper Plates Set",
  price: 399.0,
  rating: 4.9,
  reviews: 167,
  image: "/placeholder.svg?height=400&width=400",
  badge: "Premium",
  colors: ["black"],
  category: "Plates"
}, {
  id: 7,
  name: "Power Rack Cage",
  price: 599.0,
  rating: 4.9,
  reviews: 89,
  image: "/placeholder.svg?height=400&width=400",
  badge: "New",
  colors: ["black"],
  category: "Racks"
}, {
  id: 8,
  name: "Exercise Mat Pro",
  price: 65.0,
  rating: 4.7,
  reviews: 534,
  image: "/placeholder.svg?height=400&width=400",
  colors: ["black", "gray"],
  category: "Mats"
}, {
  id: 9,
  name: "Ab Roller Wheel",
  price: 28.0,
  rating: 4.5,
  reviews: 312,
  image: "/placeholder.svg?height=400&width=400",
  colors: ["black"],
  category: "Core"
}, {
  id: 10,
  name: "Battle Ropes 40ft",
  price: 89.0,
  rating: 4.8,
  reviews: 198,
  image: "/placeholder.svg?height=400&width=400",
  colors: ["black"],
  category: "Cardio"
}, {
  id: 11,
  name: "Plyo Box Set",
  price: 159.0,
  rating: 4.7,
  reviews: 123,
  image: "/placeholder.svg?height=400&width=400",
  colors: ["black"],
  category: "Plyometrics"
}, {
  id: 12,
  name: "Medicine Ball Set",
  price: 129.0,
  originalPrice: 159.0,
  rating: 4.6,
  reviews: 167,
  image: "/placeholder.svg?height=400&width=400",
  badge: "Sale",
  colors: ["black"],
  category: "Balls"
}];
const filters = [{
  name: "Category",
  options: [{
    id: "dumbbells",
    label: "Dumbbells",
    count: 15
  }, {
    id: "barbells",
    label: "Barbells",
    count: 8
  }, {
    id: "kettlebells",
    label: "Kettlebells",
    count: 12
  }, {
    id: "benches",
    label: "Benches",
    count: 10
  }, {
    id: "racks",
    label: "Racks & Cages",
    count: 6
  }, {
    id: "plates",
    label: "Weight Plates",
    count: 18
  }]
}, {
  name: "Price",
  options: [{
    id: "under50",
    label: "Under $50",
    count: 12
  }, {
    id: "50-100",
    label: "$50 - $100",
    count: 18
  }, {
    id: "100-300",
    label: "$100 - $300",
    count: 24
  }, {
    id: "over300",
    label: "Over $300",
    count: 16
  }]
}, {
  name: "Space",
  options: [{
    id: "compact",
    label: "Compact",
    count: 28
  }, {
    id: "medium",
    label: "Medium Space",
    count: 22
  }, {
    id: "large",
    label: "Full Gym",
    count: 12
  }]
}, {
  name: "Rating",
  options: [{
    id: "4plus",
    label: "4 Stars & Up",
    count: 58
  }, {
    id: "3plus",
    label: "3 Stars & Up",
    count: 64
  }]
}];
export default function EquipmentPage() {
  return <div className="min-h-screen bg-background">
      <Header />
      <CategoryHero title="Equipment" description="Build your dream home gym. Professional-grade equipment designed to last and help you achieve your fitness goals." image="/home-gym-equipment-setup.jpg" />
      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <CategoryFilters filters={filters} productCount={equipmentProducts.length} />
        <ProductGrid products={equipmentProducts} />
      </main>
      <Footer />
    </div>;
}