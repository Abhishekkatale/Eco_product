import { useState, useEffect } from "react";
import Navbar from "@/components/navbar";
import HeroSection from "@/components/hero-section";
import FilterBar from "@/components/filter-bar";
import ProductCard from "@/components/product-card";
import StatsSection from "@/components/stats-section";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import productsData from "@/data/products.json";

export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  rating: number;
  sustainabilityScore: number;
  category: string;
  image: string;
  tags: string[];
  link: string;
}

export default function Home() {
  const [products, setProducts] = useState<Product[]>(productsData.products);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(productsData.products);
  const [activeFilter, setActiveFilter] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");

  useEffect(() => {
    let filtered = products;

    // Apply category filter
    if (activeFilter !== "all") {
      filtered = filtered.filter(product => product.category === activeFilter);
    }

    // Apply search filter
    if (searchQuery) {
      filtered = filtered.filter(product =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
      );
    }

    setFilteredProducts(filtered);
  }, [activeFilter, searchQuery, products]);

  const handleFilterChange = (filter: string) => {
    setActiveFilter(filter);
  };

  const handleSearchChange = (query: string) => {
    setSearchQuery(query);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar onSearchChange={handleSearchChange} />
      <HeroSection />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <FilterBar 
          activeFilter={activeFilter} 
          onFilterChange={handleFilterChange}
          resultCount={filteredProducts.length}
        />
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8" id="products-grid">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">🌱</div>
            <h3 className="text-2xl font-bold text-eco-text mb-2">No products found</h3>
            <p className="text-gray-600">Try adjusting your search or filter criteria</p>
          </div>
        )}

        {filteredProducts.length > 0 && (
          <div className="text-center mt-12">
            <Button className="bg-primary text-primary-foreground px-8 py-3 rounded-lg hover:bg-secondary transition-colors text-lg font-semibold">
              <Plus className="mr-2 h-5 w-5" />
              Load More Products
            </Button>
          </div>
        )}
      </main>

      <StatsSection />
      <Footer />
    </div>
  );
}
