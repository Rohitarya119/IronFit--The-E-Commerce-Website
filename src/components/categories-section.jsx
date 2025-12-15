import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
const categories = [{
  name: "Apparel",
  description: "Performance wear for every workout",
  image: "/gym-clothing-athletic-wear-stack-dark-background.jpg",
  href: "/apparel"
}, {
  name: "Equipment",
  description: "Dumbbells, kettlebells & more",
  image: "/gym-dumbbells-weights-equipment-dark-background.jpg",
  href: "/equipment"
}, {
  name: "Accessories",
  description: "Bags, gloves, belts & essentials",
  image: "/gym-accessories-gloves-belt-bag-dark-background.jpg",
  href: "/accessories"
}, {
  name: "Supplements",
  description: "Fuel your performance",
  image: "/protein-powder-supplements-bottles-dark-background.jpg",
  href: "/supplements"
}];
export function CategoriesSection() {
  return <section className="bg-background py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <h2 className="text-3xl font-black uppercase tracking-tight text-foreground sm:text-4xl">
              Shop by Category
            </h2>
            <p className="mt-2 text-muted-foreground">Find exactly what you need for your training</p>
          </div>
          <Link to="/categories" className="hidden items-center gap-1 text-sm font-medium text-primary hover:underline sm:flex">
            View All <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map(category => <Link key={category.name} href={category.href} className="group relative aspect-square overflow-hidden rounded-xl bg-card">
              <img src={category.image || "/placeholder.svg"} alt={category.name} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <h3 className="text-xl font-bold text-foreground">{category.name}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{category.description}</p>
                <span className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-primary opacity-0 transition-opacity group-hover:opacity-100">
                  Shop Now <ArrowRight className="h-4 w-4" />
                </span>
              </div>
            </Link>)}
        </div>
      </div>
    </section>;
}