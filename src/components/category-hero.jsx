export function CategoryHero({
  title,
  description,
  image
}) {
  return <section className="relative h-64 overflow-hidden sm:h-80">
      <div className="absolute inset-0">
        <img src={image || "/placeholder.svg"} alt={title} className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent" />
      </div>
      <div className="relative mx-auto flex h-full max-w-7xl items-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-xl">
          <h1 className="text-4xl font-black uppercase tracking-tight text-foreground sm:text-5xl">{title}</h1>
          <p className="mt-4 text-lg text-muted-foreground">{description}</p>
        </div>
      </div>
    </section>;
}