import { Star, ShoppingCart, ExternalLink, Heart } from "lucide-react";
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
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`h-4 w-4 ${
          i < rating ? "text-yellow-500 fill-current" : "text-gray-300"
        }`}
      />
    ));
  };

  const handleAddToCart = async () => {
    setIsAddingToCart(true);
    await new Promise((resolve) => setTimeout(resolve, 500));
    toast({
      title: "Added to cart!",
      description: `${product.name} has been added to your cart.`,
    });
    setIsAddingToCart(false);
  };

  const handleBuyNow = () => {
    window.open(product.link, "_blank", "noopener,noreferrer");
  };

  const handleLike = () => {
    setIsLiked(!isLiked);
    toast({
      title: isLiked ? "Removed from wishlist" : "Added to wishlist",
      description: isLiked ? "Removed from your wishlist" : "Saved to wishlist",
    });
  };

  return (
    <Card className="rounded-xl overflow-hidden shadow hover:shadow-lg transition-all bg-white border border-gray-100">
      <div className="relative">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-52 object-cover"
        />
        <Button
          onClick={handleLike}
          size="icon"
          variant="ghost"
          className="absolute top-2 right-2 rounded-full bg-white/90 text-red-500 shadow-sm"
        >
          <Heart className={`h-4 w-4 ${isLiked ? "fill-current" : ""}`} />
        </Button>
      </div>

      <CardContent className="p-4 space-y-2">
        <div className="flex items-center justify-between text-sm text-gray-600">
          <div className="flex items-center gap-1">{renderStars(product.rating)}</div>
          <span className="bg-gray-100 px-2 py-0.5 rounded-full text-xs capitalize">
            {product.category}
          </span>
        </div>

        <h3 className="text-lg font-semibold text-gray-900 line-clamp-1">{product.name}</h3>
        <p className="text-sm text-gray-600 line-clamp-2">{product.description}</p>

        <div className="flex flex-wrap gap-1">
          {product.tags.slice(0, 2).map((tag, index) => (
            <Badge key={index} className="bg-green-50 text-green-700 text-xs px-2 py-1 rounded-full border border-green-200">
              {tag}
            </Badge>
          ))}
          {product.tags.length > 2 && (
            <Badge className="bg-gray-50 text-gray-600 text-xs px-2 py-1 rounded-full border">
              +{product.tags.length - 2} more
            </Badge>
          )}
        </div>

        <div className="flex items-center justify-between pt-2">
          <div>
            <p className="text-xl font-bold text-primary">₹{product.price}</p>
            <p className="text-xs text-gray-500">Eco shipping included</p>
          </div>

          <div className="flex gap-2">
            <Button
              onClick={handleAddToCart}
              size="icon"
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-white"
              disabled={isAddingToCart}
            >
              {isAddingToCart ? (
                <div className="animate-spin rounded-full h-4 w-4 border-2 border-primary border-t-transparent" />
              ) : (
                <ShoppingCart className="h-4 w-4" />
              )}
            </Button>
            <Button
              onClick={handleBuyNow}
              size="icon"
              className="bg-primary text-white hover:bg-secondary"
            >
              <ExternalLink className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
