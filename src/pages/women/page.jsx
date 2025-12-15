import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { CategoryHero } from "@/components/category-hero";
import { CategoryFilters } from "@/components/category-filters";
import { ProductGrid } from "@/components/product-grid";
const womenProducts = [{
  id: 1,
  name: "Seamless Sports Bra",
  price: 48.0,
  rating: 4.9,
  reviews: 324,
  image: "/black-sports-bra-women-gym-seamless.jpg",
  badge: "Best Seller",
  colors: ["black", "white", "pink"],
  category: "Sports Bras"
}, {
  id: 2,
  name: "High-Waist Leggings",
  price: 68.0,
  rating: 4.9,
  reviews: 456,
  image: "/black-high-waist-leggings-women-gym-athletic.jpg",
  badge: "Top Rated",
  colors: ["black", "gray", "navy"],
  category: "Leggings"
}, {
  id: 3,
  name: "Cropped Tank Top",
  price: 35.0,
  originalPrice: 45.0,
  rating: 4.7,
  reviews: 189,
  image: "/pink-cropped-tank-top-women-gym.jpg",
  badge: "Sale",
  colors: ["black", "white", "pink"],
  category: "Tank Tops"
}, {
  id: 4,
  name: "Training Shorts",
  price: 45.0,
  rating: 4.8,
  reviews: 167,
  image: "/gray-training-shorts-women-gym.jpg",
  colors: ["black", "gray"],
  category: "Shorts"
}, {
  id: 5,
  name: "Zip-Up Sports Jacket",
  price: 85.0,
  rating: 4.8,
  reviews: 98,
  image: "/black-zip-up-jacket-women-gym.jpg",
  badge: "New",
  colors: ["black", "pink"],
  category: "Jackets"
}, {
  id: 6,
  name: "Ribbed Long Sleeve",
  price: 52.0,
  rating: 4.6,
  reviews: 134,
  image: "/white-ribbed-long-sleeve-women-gym.jpg",
  colors: ["black", "white", "gray"],
  category: "Long Sleeves"
}, {
  id: 7,
  name: "Scrunch Butt Leggings",
  price: 72.0,
  rating: 4.9,
  reviews: 287,
  image: "/pink-scrunch-leggings-women-gym.jpg",
  badge: "Trending",
  colors: ["black", "gray", "pink"],
  category: "Leggings"
}, {
  id: 8,
  name: "Racerback Sports Bra",
  price: 42.0,
  rating: 4.7,
  reviews: 213,
  image: "/white-racerback-sports-bra-women.jpg",
  colors: ["black", "white"],
  category: "Sports Bras"
}, {
  id: 9,
  name: "Oversized Gym Tee",
  price: 38.0,
  rating: 4.5,
  reviews: 156,
  image: "/gray-oversized-gym-tee-women.jpg",
  colors: ["black", "white", "gray"],
  category: "T-Shirts"
}, {
  id: 10,
  name: "Biker Shorts",
  price: 40.0,
  originalPrice: 50.0,
  rating: 4.8,
  reviews: 198,
  image: "/black-biker-shorts-women-gym.jpg",
  badge: "Sale",
  colors: ["black", "gray"],
  category: "Shorts"
}, {
  id: 11,
  name: "Cropped Hoodie",
  price: 75.0,
  rating: 4.7,
  reviews: 145,
  image: "/pink-cropped-hoodie-women-gym.jpg",
  colors: ["black", "pink", "gray"],
  category: "Hoodies"
}, {
  id: 12,
  name: "Flare Yoga Pants",
  price: 65.0,
  rating: 4.6,
  reviews: 123,
  image: "/navy-flare-yoga-pants-women.jpg",
  colors: ["black", "navy"],
  category: "Pants"
}];
const filters = [{
  name: "Category",
  options: [{
    id: "leggings",
    label: "Leggings",
    count: 32
  }, {
    id: "sports-bras",
    label: "Sports Bras",
    count: 24
  }, {
    id: "shorts",
    label: "Shorts",
    count: 18
  }, {
    id: "tanks",
    label: "Tank Tops",
    count: 16
  }, {
    id: "hoodies",
    label: "Hoodies",
    count: 10
  }, {
    id: "jackets",
    label: "Jackets",
    count: 8
  }]
}, {
  name: "Size",
  options: [{
    id: "xs",
    label: "XS",
    count: 48
  }, {
    id: "s",
    label: "S",
    count: 56
  }, {
    id: "m",
    label: "M",
    count: 62
  }, {
    id: "l",
    label: "L",
    count: 52
  }, {
    id: "xl",
    label: "XL",
    count: 38
  }]
}, {
  name: "Color",
  options: [{
    id: "black",
    label: "Black",
    count: 48
  }, {
    id: "white",
    label: "White",
    count: 32
  }, {
    id: "pink",
    label: "Pink",
    count: 24
  }, {
    id: "gray",
    label: "Gray",
    count: 28
  }, {
    id: "navy",
    label: "Navy",
    count: 16
  }]
}, {
  name: "Price",
  options: [{
    id: "under25",
    label: "Under $25",
    count: 6
  }, {
    id: "25-50",
    label: "$25 - $50",
    count: 38
  }, {
    id: "50-100",
    label: "$50 - $100",
    count: 34
  }, {
    id: "over100",
    label: "Over $100",
    count: 8
  }]
}];
export default function WomenPage() {
  return <div className="min-h-screen bg-background">
      <Header />
      <CategoryHero title="Women's Collection" description="Designed for movement and style. Discover activewear that empowers you to push limits and look incredible doing it." image="/women-gym-fitness-model-workout.jpg" />
      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <CategoryFilters filters={filters} productCount={womenProducts.length} />
        <ProductGrid products={womenProducts} />
      </main>
      <Footer />
    </div>;
}