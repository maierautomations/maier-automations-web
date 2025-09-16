import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Check, Star } from "lucide-react";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";

interface PricingCardProps {
  name: string;
  cp: string;
  price: string;
  description: string;
  features: string[];
  useCases: string[];
  isPopular?: boolean;
  href?: string;
  className?: string;
}

export function PricingCard({ 
  name, 
  cp, 
  price, 
  description, 
  features, 
  useCases,
  isPopular = false,
  href = "/analyse",
  className 
}: PricingCardProps) {
  return (
    <motion.div
      className={cn(
        "relative h-full",
        className
      )}
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      {/* Popular badge */}
      {isPopular && (
        <motion.div 
          className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-20"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <Badge className="bg-gradient-to-r from-orange-500 to-pink-500 text-white px-4 py-1 text-sm font-medium">
            <Star className="w-3 h-3 mr-1" />
            Beliebteste Wahl
          </Badge>
        </motion.div>
      )}

      <div className={cn(
        "relative h-full rounded-2xl p-8 transition-all duration-300",
        "bg-white border border-gray-200/60 shadow-lg hover:shadow-xl",
        isPopular && "ring-2 ring-blue-500/20 border-blue-200 shadow-blue-500/10"
      )}>
        {/* Gradient overlay for popular card */}
        {isPopular && (
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-purple-50/30 rounded-2xl pointer-events-none" />
        )}
        
        <div className="relative z-10">
          {/* Header */}
          <div className="mb-6">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-2xl font-bold text-foreground">{name}</h3>
              <div className="text-right">
                <div className="text-lg font-bold text-blue-600">{cp}</div>
                <div className="text-sm text-muted-foreground">Complexity Points</div>
              </div>
            </div>
            
            <div className="mb-3">
              <div className="text-sm text-muted-foreground bg-gray-50 px-3 py-1 rounded-full inline-block">
                {price}
              </div>
            </div>
            
            <p className="text-muted-foreground text-sm leading-relaxed">
              {description}
            </p>
          </div>

          {/* Features */}
          <div className="mb-8">
            <h4 className="font-semibold text-foreground mb-3 text-sm uppercase tracking-wider">
              Enthalten:
            </h4>
            <ul className="space-y-2">
              {features.map((feature, index) => (
                <motion.li 
                  key={index}
                  className="flex items-start gap-2 text-sm"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Check className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">{feature}</span>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Use Cases */}
          <div className="mb-8">
            <h4 className="font-semibold text-foreground mb-3 text-sm uppercase tracking-wider">
              Typische Anwendungsfälle:
            </h4>
            <div className="flex flex-wrap gap-2">
              {useCases.map((useCase, index) => (
                <Badge 
                  key={index}
                  variant="outline" 
                  className="text-xs bg-gray-50/80 hover:bg-gray-100 transition-colors"
                >
                  {useCase}
                </Badge>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="mt-auto">
            <Link to={href}>
              <Button 
                className={cn(
                  "w-full group transition-all duration-300",
                  isPopular && "bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                )}
                variant={isPopular ? "default" : "outline"}
              >
                {isPopular ? "Kostenlose Analyse" : "Kostenlose Analyse"}
                <motion.div
                  className="ml-2"
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.2 }}
                >
                  →
                </motion.div>
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
}