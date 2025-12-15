;

import { useState } from "react";
import { ChevronDown, SlidersHorizontal, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
export function CategoryFilters({
  filters,
  sortOptions = ["Newest", "Price: Low to High", "Price: High to Low", "Best Selling", "Top Rated"],
  productCount
}) {
  const [selectedFilters, setSelectedFilters] = useState({});
  const [sortBy, setSortBy] = useState("Newest");
  const toggleFilter = (group, optionId) => {
    setSelectedFilters(prev => {
      const current = prev[group] || [];
      if (current.includes(optionId)) {
        return {
          ...prev,
          [group]: current.filter(id => id !== optionId)
        };
      }
      return {
        ...prev,
        [group]: [...current, optionId]
      };
    });
  };
  const clearFilters = () => {
    setSelectedFilters({});
  };
  const activeFilterCount = Object.values(selectedFilters).flat().length;
  const FilterContent = () => <div className="space-y-6">
      {filters.map(group => <div key={group.name}>
          <h4 className="mb-3 font-semibold text-foreground">{group.name}</h4>
          <div className="space-y-2">
            {group.options.map(option => <label key={option.id} className="flex cursor-pointer items-center gap-3">
                <Checkbox checked={(selectedFilters[group.name] || []).includes(option.id)} onCheckedChange={() => toggleFilter(group.name, option.id)} />
                <span className="text-sm text-muted-foreground">{option.label}</span>
                {option.count && <span className="ml-auto text-xs text-muted-foreground">({option.count})</span>}
              </label>)}
          </div>
        </div>)}
    </div>;
  return <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
      <div className="flex items-center gap-4">
        {/* Mobile Filter Button */}
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" className="lg:hidden bg-transparent">
              <SlidersHorizontal className="mr-2 h-4 w-4" />
              Filters
              {activeFilterCount > 0 && <span className="ml-2 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-xs text-primary-foreground">
                  {activeFilterCount}
                </span>}
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-80 overflow-y-auto bg-background">
            <SheetHeader>
              <SheetTitle>Filters</SheetTitle>
            </SheetHeader>
            <div className="mt-6">
              <FilterContent />
            </div>
          </SheetContent>
        </Sheet>

        {/* Desktop Filters */}
        <div className="hidden items-center gap-2 lg:flex">
          {filters.slice(0, 4).map(group => <DropdownMenu key={group.name}>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="bg-transparent">
                  {group.name}
                  <ChevronDown className="ml-2 h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56">
                {group.options.map(option => <DropdownMenuItem key={option.id} onClick={() => toggleFilter(group.name, option.id)} className="cursor-pointer">
                    <Checkbox checked={(selectedFilters[group.name] || []).includes(option.id)} className="mr-2" />
                    {option.label}
                    {option.count && <span className="ml-auto text-xs text-muted-foreground">({option.count})</span>}
                  </DropdownMenuItem>)}
              </DropdownMenuContent>
            </DropdownMenu>)}
        </div>

        {activeFilterCount > 0 && <Button variant="ghost" size="sm" onClick={clearFilters} className="text-muted-foreground">
            Clear all
            <X className="ml-1 h-4 w-4" />
          </Button>}
      </div>

      <div className="flex items-center gap-4">
        <span className="text-sm text-muted-foreground">{productCount} products</span>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="bg-transparent">
              Sort: {sortBy}
              <ChevronDown className="ml-2 h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            {sortOptions.map(option => <DropdownMenuItem key={option} onClick={() => setSortBy(option)}>
                {option}
              </DropdownMenuItem>)}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>;
}