import { Star, ShoppingCart, ExternalLink, Heart, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import type { Product } from "@/pages/home";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const [isLiked, setIsLiked] = useState(false);
  const [isAddingToCart, setIsAddingToCart] = useState(false);
  const { toast } = useToast();

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

  const handleAddToCart = async () => {
    setIsAddingToCart(true);
    
    // Simulate adding to cart
    await new Promise(resolve => setTimeout(resolve, 500));
    
    toast({
      title: "Added to cart!",
      description: `${product.name} has been added to your cart.`,
    });
    
    setIsAddingToCart(false);
  };

  const handleLike = () => {
    setIsLiked(!isLiked);
    toast({
      title: isLiked ? "Removed from wishlist" : "Added to wishlist",
      description: isLiked ? "Item removed from your wishlist" : "Item saved to your wishlist",
    });
  };

  return (
    <Card className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden product-card-hover animate-fade-in group border-0">
      <div className="relative overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Top badges and heart */}
        <div className="absolute top-4 left-4 right-4 flex justify-between items-start">
          <Badge className="bg-eco-success text-white px-3 py-1.5 rounded-full text-sm font-semibold shadow-lg">
            🌱 {product.sustainabilityScore}%
          </Badge>
          <Button
            variant="ghost"
            size="sm"
            onClick={handleLike}
            className={`rounded-full p-2 shadow-lg transition-all duration-200 ${
              isLiked 
                ? 'bg-red-500 text-white hover:bg-red-600' 
                : 'bg-white/90 text-gray-600 hover:bg-white hover:text-red-500'
            }`}
          >
            <Heart className={`h-4 w-4 ${isLiked ? 'fill-current' : ''}`} />
          </Button>
        </div>

        {/* Quick add to cart overlay */}
        <div className="absolute inset-x-4 bottom-4 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
          <Button 
            onClick={handleAddToCart}
            disabled={isAddingToCart}
            className="w-full bg-primary text-primary-foreground hover:bg-secondary transition-colors shadow-lg backdrop-blur-sm"
          >
            {isAddingToCart ? (
              <>
                <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent mr-2" />
                Adding...
              </>
            ) : (
              <>
                <Plus className="mr-2 h-4 w-4" />
                Quick Add to Cart
              </>
            )}
          </Button>
        </div>
      </div>
      
      <CardContent className="p-6 space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-1">
            {renderStars(product.rating)}
            <span className="text-sm text-gray-600 ml-2 font-medium">({product.rating})</span>
          </div>
          <span className="text-xs text-gray-500 bg-gray-50 px-2 py-1 rounded-full capitalize">
            {product.category.replace('-', ' ')}
          </span>
        </div>
        
        <div>
          <h3 className="text-xl font-bold text-eco-text mb-2 line-clamp-1">{product.name}</h3>
          <p className="text-gray-600 text-sm line-clamp-2 leading-relaxed">{product.description}</p>
        </div>
        
        <div className="flex flex-wrap gap-2">
          {product.tags.slice(0, 3).map((tag, index) => (
            <Badge
              key={index}
              variant="secondary"
              className="bg-green-50 text-green-700 px-3 py-1 rounded-full text-xs border border-green-200"
            >
              {tag}
            </Badge>
          ))}
          {product.tags.length > 3 && (
            <Badge variant="secondary" className="bg-gray-50 text-gray-600 px-3 py-1 rounded-full text-xs">
              +{product.tags.length - 3} more
            </Badge>
          )}
        </div>

        <div className="flex items-center justify-between pt-2 border-t border-gray-100">
          <div className="flex flex-col">
            <span className="text-2xl font-bold text-primary">${product.price}</span>
            <span className="text-xs text-gray-500">Free eco shipping</span>
          </div>
          <div className="flex gap-2">
            <Button 
              onClick={handleAddToCart}
              disabled={isAddingToCart}
              variant="outline"
              size="sm"
              className="border-primary text-primary hover:bg-primary hover:text-white transition-colors"
            >
              {isAddingToCart ? (
                <div className="animate-spin rounded-full h-4 w-4 border-2 border-primary border-t-transparent" />
              ) : (
                <ShoppingCart className="h-4 w-4" />
              )}
            </Button>
            <Button 
              onClick={handleBuyNow}
              size="sm"
              className="bg-primary text-primary-foreground hover:bg-secondary transition-colors"
            >
              Buy Now
              <ExternalLink className="ml-2 h-3 w-3" />
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
