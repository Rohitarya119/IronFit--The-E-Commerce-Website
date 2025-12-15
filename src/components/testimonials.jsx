import { Star, Quote } from "lucide-react";
const testimonials = [{
  id: 1,
  name: "Marcus Johnson",
  role: "Professional Athlete",
  image: "/placeholder.svg?height=80&width=80",
  content: "The quality of IRONFIT gear is unmatched. I've been using their equipment for over 2 years and it still performs like day one.",
  rating: 5
}, {
  id: 2,
  name: "Sarah Chen",
  role: "Fitness Coach",
  image: "/placeholder.svg?height=80&width=80",
  content: "My clients always ask about my workout gear. IRONFIT apparel is comfortable, durable, and looks amazing during intense sessions.",
  rating: 5
}, {
  id: 3,
  name: "David Miller",
  role: "CrossFit Champion",
  image: "/placeholder.svg?height=80&width=80",
  content: "From their resistance bands to lifting belts, every product exceeds expectations. Customer service is top-notch too!",
  rating: 5
}];
export function Testimonials() {
  return <section className="bg-secondary/30 py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-black uppercase tracking-tight text-foreground sm:text-4xl">
            What Athletes Say
          </h2>
          <p className="mt-2 text-muted-foreground">Trusted by thousands of athletes worldwide</p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map(testimonial => <div key={testimonial.id} className="relative rounded-xl bg-card p-6 shadow-lg">
              <Quote className="absolute right-6 top-6 h-8 w-8 text-primary/20" />
              <div className="flex gap-1 text-primary">
                {[...Array(testimonial.rating)].map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}
              </div>
              <p className="mt-4 text-muted-foreground">{testimonial.content}</p>
              <div className="mt-6 flex items-center gap-3">
                <img src={testimonial.image || "/placeholder.svg"} alt={testimonial.name} className="h-12 w-12 rounded-full object-cover" />
                <div>
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </div>)}
        </div>
      </div>
    </section>;
}