import { Link } from "react-router-dom";
import { Product } from "@/types/product";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Star } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { motion } from "framer-motion";

interface ProductCardProps {
  product: Product;
  index?: number;
}

const ProductCard = ({ product, index = 0 }: ProductCardProps) => {
  const { addToCart } = useCart();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    addToCart(product, product.sizes[0]);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
    >
      <Link to={`/product/${product.id}`}>
        <div className="group relative overflow-hidden rounded-lg bg-card border border-border transition-all hover:shadow-lg hover:border-accent/50">
          <div className="aspect-square overflow-hidden bg-secondary">
            <img
              src={product.image}
              alt={product.name}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
              loading="lazy"
            />
          </div>
          
          <div className="p-4">
            <div className="mb-2 flex items-center justify-between">
              <span className="text-xs font-medium text-accent">{product.category}</span>
              <div className="flex items-center gap-1">
                <Star className="h-3 w-3 fill-accent text-accent" />
                <span className="text-xs font-medium">{product.rating}</span>
              </div>
            </div>
            
            <h3 className="mb-2 font-semibold text-foreground group-hover:text-accent transition-colors">
              {product.name}
            </h3>
            
            <p className="mb-4 text-sm text-muted-foreground line-clamp-2">
              {product.description}
            </p>
            
            <div className="flex items-center justify-between">
              <span className="text-lg font-bold text-foreground">${product.price}</span>
              
              <Button
                size="sm"
                onClick={handleAddToCart}
                className="bg-accent text-accent-foreground hover:bg-accent/90"
              >
                <ShoppingCart className="h-4 w-4 mr-1" />
                Add
              </Button>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default ProductCard;
