import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
export function HeroSection() {
  return <section className="relative overflow-hidden bg-background">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/20 via-background to-background" />

      <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8 lg:py-36">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
              <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
              New Collection Available
            </div>

            <h1 className="text-4xl font-black uppercase leading-tight tracking-tight text-foreground sm:text-5xl lg:text-7xl">
              Gear Up.
              <br />
              <span className="text-primary">Train Hard.</span>
              <br />
              Win More.
            </h1>

            <p className="max-w-md text-lg text-muted-foreground">
              Premium gym apparel and accessories designed for athletes who demand performance, durability, and style.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <Button size="lg" className="group bg-primary text-primary-foreground hover:bg-primary/90">
                Shop Now
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button size="lg" variant="outline" className="border-border text-foreground hover:bg-secondary bg-transparent">
                <Play className="mr-2 h-4 w-4" />
                Watch Video
              </Button>
            </div>

            <div className="flex items-center gap-8 pt-4">
              <div>
                <p className="text-3xl font-bold text-foreground">50K+</p>
                <p className="text-sm text-muted-foreground">Active Athletes</p>
              </div>
              <div className="h-12 w-px bg-border" />
              <div>
                <p className="text-3xl font-bold text-foreground">4.9★</p>
                <p className="text-sm text-muted-foreground">Customer Rating</p>
              </div>
              <div className="h-12 w-px bg-border" />
              <div>
                <p className="text-3xl font-bold text-foreground">200+</p>
                <p className="text-sm text-muted-foreground">Products</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-card">
              <img src="/athletic-muscular-person-in-black-gym-clothes-trai.jpg" alt="Athlete training with dumbbells" className="h-full w-full object-cover" />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-background/90 to-transparent p-6">
                <p className="text-sm font-medium text-primary">FEATURED</p>
                <p className="text-xl font-bold text-foreground">Pro Training Collection</p>
              </div>
            </div>

            {/* Floating product card */}
            <div className="absolute -left-4 bottom-20 rounded-xl bg-card p-4 shadow-xl sm:-left-8">
              <div className="flex items-center gap-3">
                <div className="h-16 w-16 overflow-hidden rounded-lg bg-secondary">
                  <img src="/black-gym-tank-top-product.jpg" alt="Tank top" className="h-full w-full object-cover" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">Pro Tank</p>
                  <p className="text-sm text-muted-foreground">$49.99</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
}