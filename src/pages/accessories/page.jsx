import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { CategoryHero } from "@/components/category-hero";
import { CategoryFilters } from "@/components/category-filters";
import { ProductGrid } from "@/components/product-grid";
const accessoriesProducts = [{
  id: 1,
  name: "Training Gloves Pro",
  price: 35.0,
  rating: 4.8,
  reviews: 234,
  image: "/black-training-gloves-gym.jpg",
  badge: "Best Seller",
  colors: ["black"],
  category: "Gloves"
}, {
  id: 2,
  name: "Power Lifting Belt",
  price: 89.0,
  rating: 5.0,
  reviews: 312,
  image: "/leather-lifting-belt-gym.jpg",
  badge: "Top Rated",
  colors: ["black", "brown"],
  category: "Belts"
}, {
  id: 3,
  name: "Resistance Band Set",
  price: 29.0,
  rating: 4.8,
  reviews: 456,
  image: "/colorful-resistance-bands-set-product.jpg",
  colors: ["multi"],
  category: "Resistance Bands"
}, {
  id: 4,
  name: "Wrist Wraps",
  price: 24.0,
  rating: 4.7,
  reviews: 189,
  image: "/red-wrist-wraps-gym.jpg",
  colors: ["black", "red"],
  category: "Support"
}, {
  id: 5,
  name: "Gym Duffle Bag",
  price: 75.0,
  rating: 4.9,
  reviews: 167,
  image: "/black-gym-duffle-bag.jpg",
  badge: "New",
  colors: ["black", "gray"],
  category: "Bags"
}, {
  id: 6,
  name: "Shaker Bottle Pro",
  price: 18.0,
  rating: 4.6,
  reviews: 543,
  image: "/placeholder.svg?height=400&width=400",
  colors: ["black", "white"],
  category: "Bottles"
}, {
  id: 7,
  name: "Knee Sleeves Pair",
  price: 45.0,
  rating: 4.8,
  reviews: 234,
  image: "/placeholder.svg?height=400&width=400",
  colors: ["black"],
  category: "Support"
}, {
  id: 8,
  name: "Lifting Straps",
  price: 19.0,
  originalPrice: 25.0,
  rating: 4.7,
  reviews: 312,
  image: "/placeholder.svg?height=400&width=400",
  badge: "Sale",
  colors: ["black", "red"],
  category: "Straps"
}, {
  id: 9,
  name: "Gym Towel Set",
  price: 22.0,
  rating: 4.5,
  reviews: 178,
  image: "/placeholder.svg?height=400&width=400",
  colors: ["black", "gray"],
  category: "Towels"
}, {
  id: 10,
  name: "Jump Rope Speed",
  price: 28.0,
  rating: 4.8,
  reviews: 267,
  image: "/placeholder.svg?height=400&width=400",
  colors: ["black"],
  category: "Cardio"
}, {
  id: 11,
  name: "Gym Backpack",
  price: 85.0,
  rating: 4.9,
  reviews: 145,
  image: "/placeholder.svg?height=400&width=400",
  badge: "Premium",
  colors: ["black"],
  category: "Bags"
}, {
  id: 12,
  name: "Elbow Sleeves Pair",
  price: 38.0,
  rating: 4.6,
  reviews: 123,
  image: "/placeholder.svg?height=400&width=400",
  colors: ["black"],
  category: "Support"
}];
const filters = [{
  name: "Category",
  options: [{
    id: "gloves",
    label: "Gloves",
    count: 12
  }, {
    id: "belts",
    label: "Belts",
    count: 8
  }, {
    id: "bands",
    label: "Resistance Bands",
    count: 15
  }, {
    id: "support",
    label: "Support Gear",
    count: 18
  }, {
    id: "bags",
    label: "Bags",
    count: 10
  }, {
    id: "bottles",
    label: "Bottles & Shakers",
    count: 14
  }]
}, {
  name: "Price",
  options: [{
    id: "under25",
    label: "Under $25",
    count: 24
  }, {
    id: "25-50",
    label: "$25 - $50",
    count: 32
  }, {
    id: "50-100",
    label: "$50 - $100",
    count: 18
  }, {
    id: "over100",
    label: "Over $100",
    count: 6
  }]
}, {
  name: "Color",
  options: [{
    id: "black",
    label: "Black",
    count: 52
  }, {
    id: "gray",
    label: "Gray",
    count: 18
  }, {
    id: "red",
    label: "Red",
    count: 12
  }, {
    id: "multi",
    label: "Multi-Color",
    count: 8
  }]
}, {
  name: "Rating",
  options: [{
    id: "4plus",
    label: "4 Stars & Up",
    count: 68
  }, {
    id: "3plus",
    label: "3 Stars & Up",
    count: 74
  }]
}];
export default function AccessoriesPage() {
  return <div className="min-h-screen bg-background">
      <Header />
      <CategoryHero title="Accessories" description="The gear that makes the difference. From lifting essentials to recovery tools, upgrade your training with premium accessories." image="/gym-accessories-equipment-setup.jpg" />
      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <CategoryFilters filters={filters} productCount={accessoriesProducts.length} />
        <ProductGrid products={accessoriesProducts} />
      </main>
      <Footer />
    </div>;
}