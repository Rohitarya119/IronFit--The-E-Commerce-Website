import { Header } from "@/components/header";
import { HeroSection } from "@/components/hero-section";
import { CategoriesSection } from "@/components/categories-section";
import { FeaturedProducts } from "@/components/featured-products";
import { NewArrivals } from "@/components/new-arrivals";
import { PromoBanner } from "@/components/promo-banner";
import { Testimonials } from "@/components/testimonials";
import { Newsletter } from "@/components/newsletter";
import { Footer } from "@/components/footer";
export default function HomePage() {
  return <main className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <CategoriesSection />
      <FeaturedProducts />
      <PromoBanner />
      <NewArrivals />
      <Testimonials />
      <Newsletter />
      <Footer />
    </main>;
}