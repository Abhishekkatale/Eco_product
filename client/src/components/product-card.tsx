import { Star, ShoppingCart, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import type { Product } from "@/pages/home";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const renderStars = (rating: number) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <Star
          key={i}
          className={`h-4 w-4 ${
            i <= rating ? "text-accent fill-current" : "text-gray-300"
          }`}
        />
      );
    }
    return stars;
  };

  const handleBuyNow = () => {
    window.open(product.link, '_blank', 'noopener,noreferrer');
  };

  return (
    <Card className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden product-card-hover animate-fade-in">
      <div className="relative overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
          loading="lazy"
        />
        <div className="absolute top-4 right-4">
          <Badge className="bg-eco-success text-white px-3 py-1 rounded-full text-sm font-semibold">
            {product.sustainabilityScore}%
          </Badge>
        </div>
      </div>
      
      <CardContent className="p-6">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center space-x-1">
            {renderStars(product.rating)}
            <span className="text-sm text-gray-600 ml-2">{product.rating}</span>
          </div>
        </div>
        
        <h3 className="text-lg font-semibold text-eco-text mb-2">{product.name}</h3>
        <p className="text-gray-600 text-sm mb-4">{product.description}</p>
        
        <div className="flex items-center justify-between mb-4">
          <span className="text-2xl font-bold text-primary">${product.price}</span>
          <Button 
            onClick={handleBuyNow}
            className="bg-primary text-primary-foreground px-4 py-2 rounded-lg hover:bg-secondary transition-colors"
          >
            <ShoppingCart className="mr-2 h-4 w-4" />
            Buy Now
            <ExternalLink className="ml-2 h-3 w-3" />
          </Button>
        </div>
        
        <div className="flex flex-wrap gap-2">
          {product.tags.map((tag, index) => (
            <Badge
              key={index}
              variant="secondary"
              className="bg-eco-bg text-eco-text px-3 py-1 rounded-full text-xs"
            >
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
