import { useState } from "react";
import { Search, ShoppingCart, Leaf, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link, useLocation } from "wouter";

interface NavbarProps {
  onSearchChange: (query: string) => void;
}

export default function Navbar({ onSearchChange }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [location] = useLocation();

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchValue(value);
    onSearchChange(value);
  };

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/">
            <div className="flex items-center space-x-2 cursor-pointer">
              <Leaf className="text-primary text-2xl" />
              <span className="text-2xl font-bold text-primary">GreenCart</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className={`transition-colors ${location === '/' ? 'text-primary font-semibold' : 'text-eco-text hover:text-primary'}`}>Home</Link>
            <Link href="/products" className={`transition-colors ${location === '/products' ? 'text-primary font-semibold' : 'text-eco-text hover:text-primary'}`}>Products</Link>
            <Link href="/about" className={`transition-colors ${location === '/about' ? 'text-primary font-semibold' : 'text-eco-text hover:text-primary'}`}>About</Link>
            <Link href="/contact" className={`transition-colors ${location === '/contact' ? 'text-primary font-semibold' : 'text-eco-text hover:text-primary'}`}>Contact</Link>
          </div>

          {/* Search and Cart */}
          <div className="flex items-center space-x-4">
            <div className="relative hidden sm:block">
              <Input
                type="text"
                placeholder="Search products..."
                value={searchValue}
                onChange={handleSearchChange}
                className="w-64 pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
              />
              <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
            </div>
            
            <Button className="bg-primary text-primary-foreground px-4 py-2 rounded-lg hover:bg-secondary transition-colors">
              <ShoppingCart className="mr-2 h-4 w-4" />
              Cart
            </Button>

            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <div className="flex flex-col space-y-4">
              <div className="sm:hidden">
                <div className="relative">
                  <Input
                    type="text"
                    placeholder="Search products..."
                    value={searchValue}
                    onChange={handleSearchChange}
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                  <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                </div>
              </div>
              <Link href="/" className={`transition-colors ${location === '/' ? 'text-primary font-semibold' : 'text-eco-text hover:text-primary'}`}>Home</Link>
              <Link href="/products" className={`transition-colors ${location === '/products' ? 'text-primary font-semibold' : 'text-eco-text hover:text-primary'}`}>Products</Link>
              <Link href="/about" className={`transition-colors ${location === '/about' ? 'text-primary font-semibold' : 'text-eco-text hover:text-primary'}`}>About</Link>
              <Link href="/contact" className={`transition-colors ${location === '/contact' ? 'text-primary font-semibold' : 'text-eco-text hover:text-primary'}`}>Contact</Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
