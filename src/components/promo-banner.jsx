import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
export function PromoBanner() {
  return <section className="bg-primary py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-16">
          <div className="space-y-6">
            <p className="text-sm font-semibold uppercase tracking-wider text-primary-foreground/80">
              Limited Time Offer
            </p>
            <h2 className="text-4xl font-black uppercase leading-tight tracking-tight text-primary-foreground sm:text-5xl">
              Get 25% Off
              <br />
              Your First Order
            </h2>
            <p className="text-lg text-primary-foreground/80">
              Sign up today and receive an exclusive discount on premium gym gear. Use code{" "}
              <span className="font-bold">IRONFIT25</span> at checkout.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90">
                Shop Sale
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <div className="flex items-center gap-4">
                <div className="text-center">
                  <p className="text-3xl font-bold text-primary-foreground">02</p>
                  <p className="text-xs text-primary-foreground/80">Days</p>
                </div>
                <span className="text-2xl font-bold text-primary-foreground">:</span>
                <div className="text-center">
                  <p className="text-3xl font-bold text-primary-foreground">14</p>
                  <p className="text-xs text-primary-foreground/80">Hours</p>
                </div>
                <span className="text-2xl font-bold text-primary-foreground">:</span>
                <div className="text-center">
                  <p className="text-3xl font-bold text-primary-foreground">38</p>
                  <p className="text-xs text-primary-foreground/80">Mins</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-[4/3] overflow-hidden rounded-2xl">
              <img src="/gym-equipment-weights-and-athletic-wear-promotiona.jpg" alt="Sale promotion" className="h-full w-full object-cover" />
            </div>
          </div>
        </div>
      </div>
    </section>;
}