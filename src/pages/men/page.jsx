import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { CategoryHero } from "@/components/category-hero";
import { CategoryFilters } from "@/components/category-filters";
import { ProductGrid } from "@/components/product-grid";
const menProducts = [{
  id: 1,
  name: "Pro Performance Tee",
  price: 45.0,
  originalPrice: 60.0,
  rating: 4.9,
  reviews: 128,
  image: "/black-athletic-performance-t-shirt-men-gym.jpg",
  badge: "Best Seller",
  colors: ["black", "white", "gray"],
  category: "T-Shirts"
}, {
  id: 2,
  name: "Elite Training Shorts",
  price: 55.0,
  rating: 4.8,
  reviews: 89,
  image: "/black-gym-training-shorts-men-athletic.jpg",
  colors: ["black", "navy"],
  category: "Shorts"
}, {
  id: 3,
  name: "Compression Tank Top",
  price: 42.0,
  originalPrice: 55.0,
  rating: 4.7,
  reviews: 156,
  image: "/black-compression-tank-top-men-gym.jpg",
  badge: "Sale",
  colors: ["black", "white"],
  category: "Tank Tops"
}, {
  id: 4,
  name: "Training Joggers",
  price: 75.0,
  rating: 4.9,
  reviews: 203,
  image: "/black-athletic-joggers-men-gym-training.jpg",
  colors: ["black", "gray", "navy"],
  category: "Pants"
}, {
  id: 5,
  name: "Muscle Fit Hoodie",
  price: 89.0,
  rating: 4.8,
  reviews: 167,
  image: "/black-athletic-hoodie-men-gym-muscle-fit.jpg",
  badge: "New",
  colors: ["black", "gray"],
  category: "Hoodies"
}, {
  id: 6,
  name: "Dry-Fit Long Sleeve",
  price: 52.0,
  rating: 4.6,
  reviews: 94,
  image: "/black-long-sleeve-athletic-shirt-men-gym.jpg",
  colors: ["black", "white", "navy"],
  category: "Long Sleeves"
}, {
  id: 7,
  name: "Stringer Tank",
  price: 35.0,
  rating: 4.7,
  reviews: 212,
  image: "/black-stringer-tank-top-men-bodybuilding-gym.jpg",
  colors: ["black", "white", "red"],
  category: "Tank Tops"
}, {
  id: 8,
  name: "Athletic Compression Pants",
  price: 65.0,
  rating: 4.8,
  reviews: 178,
  image: "/black-compression-pants-men-gym-athletic.jpg",
  colors: ["black"],
  category: "Pants"
}, {
  id: 9,
  name: "Gym Sleeveless Tee",
  price: 38.0,
  originalPrice: 48.0,
  rating: 4.5,
  reviews: 134,
  image: "/black-sleeveless-gym-tee-men-athletic.jpg",
  badge: "Sale",
  colors: ["black", "white", "gray"],
  category: "Tank Tops"
}, {
  id: 10,
  name: "Performance Polo",
  price: 58.0,
  rating: 4.6,
  reviews: 76,
  image: "/black-athletic-polo-shirt-men-gym.jpg",
  colors: ["black", "white", "navy"],
  category: "Polos"
}, {
  id: 11,
  name: "Training Track Jacket",
  price: 95.0,
  rating: 4.9,
  reviews: 145,
  image: "/black-track-jacket-men-gym-athletic.jpg",
  badge: "Top Rated",
  colors: ["black", "navy"],
  category: "Jackets"
}, {
  id: 12,
  name: "Flex Fit Shorts",
  price: 48.0,
  rating: 4.7,
  reviews: 189,
  image: "/gray-athletic-shorts-men-gym-training.jpg",
  colors: ["black", "gray", "navy"],
  category: "Shorts"
}];
const filters = [{
  name: "Category",
  options: [{
    id: "tshirts",
    label: "T-Shirts",
    count: 24
  }, {
    id: "tanks",
    label: "Tank Tops",
    count: 18
  }, {
    id: "shorts",
    label: "Shorts",
    count: 15
  }, {
    id: "pants",
    label: "Pants & Joggers",
    count: 12
  }, {
    id: "hoodies",
    label: "Hoodies",
    count: 9
  }, {
    id: "jackets",
    label: "Jackets",
    count: 6
  }]
}, {
  name: "Size",
  options: [{
    id: "xs",
    label: "XS",
    count: 45
  }, {
    id: "s",
    label: "S",
    count: 52
  }, {
    id: "m",
    label: "M",
    count: 58
  }, {
    id: "l",
    label: "L",
    count: 54
  }, {
    id: "xl",
    label: "XL",
    count: 48
  }, {
    id: "xxl",
    label: "XXL",
    count: 32
  }]
}, {
  name: "Color",
  options: [{
    id: "black",
    label: "Black",
    count: 42
  }, {
    id: "white",
    label: "White",
    count: 28
  }, {
    id: "gray",
    label: "Gray",
    count: 24
  }, {
    id: "navy",
    label: "Navy",
    count: 18
  }, {
    id: "red",
    label: "Red",
    count: 12
  }]
}, {
  name: "Price",
  options: [{
    id: "under25",
    label: "Under $25",
    count: 8
  }, {
    id: "25-50",
    label: "$25 - $50",
    count: 32
  }, {
    id: "50-100",
    label: "$50 - $100",
    count: 28
  }, {
    id: "over100",
    label: "Over $100",
    count: 12
  }]
}];
export default function MenPage() {
  return <div className="min-h-screen bg-background">
      <Header />
      <CategoryHero title="Men's Collection" description="Engineered for peak performance. From training essentials to competition-ready gear, find everything you need to crush your goals." image="/athletic-men-gym-dark-background-workout.jpg" />
      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <CategoryFilters filters={filters} productCount={menProducts.length} />
        <ProductGrid products={menProducts} />
      </main>
      <Footer />
    </div>;
}