import { Button } from "@/components/ui/button";
import { Grid, RotateCcw, Sprout, Ban } from "lucide-react";

interface FilterBarProps {
  activeFilter: string;
  onFilterChange: (filter: string) => void;
  resultCount: number;
}

export default function FilterBar({ activeFilter, onFilterChange, resultCount }: FilterBarProps) {
  const filters = [
    { id: "all", label: "All Products", icon: Grid },
    { id: "reusable", label: "Reusable", icon: RotateCcw },
    { id: "organic", label: "Organic", icon: Sprout },
    { id: "plastic-free", label: "Plastic-Free", icon: Ban },
  ];

  return (
    <div className="mb-8">
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
        <div>
          <h2 className="text-3xl font-bold text-eco-text mb-2">Sustainable Products</h2>
          <p className="text-gray-600">
            Discover our curated collection of eco-friendly items ({resultCount} products)
          </p>
        </div>
        
        <div className="flex flex-wrap gap-3">
          {filters.map(({ id, label, icon: Icon }) => (
            <Button
              key={id}
              onClick={() => onFilterChange(id)}
              variant={activeFilter === id ? "default" : "outline"}
              className={`px-6 py-2 rounded-full transition-colors ${
                activeFilter === id
                  ? "bg-primary text-primary-foreground hover:bg-secondary"
                  : "bg-white border-2 border-primary text-primary hover:bg-primary hover:text-white"
              }`}
            >
              <Icon className="mr-2 h-4 w-4" />
              {label}
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
}
