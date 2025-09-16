import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { HoverLift, Magnetic, PulseHover } from "@/components/ui/micro-interactions";
import { motion, AnimatePresence } from "framer-motion";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: "Startseite", href: "/" },
    { name: "Pakete", href: "/pakete" },
    { name: "RAG Pro", href: "/rag-pro" },
    { name: "Blog", href: "/blog" },
    { name: "Kontakt", href: "/kontakt" },
  ];

  const isActive = (href: string) => location.pathname === href;

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Magnetic strength={0.2}>
            <Link to="/" className="flex items-center space-x-2">
              <HoverLift scale={1.05}>
                <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center transition-all duration-200 hover:shadow-lg hover:shadow-primary/20">
                  <span className="text-primary-foreground font-bold text-sm">M</span>
                </div>
              </HoverLift>
              <span className="font-semibold text-xl text-foreground transition-colors hover:text-primary">
                Maier Automations
              </span>
            </Link>
          </Magnetic>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <PulseHover key={item.name} className="relative">
                <Link
                  to={item.href}
                  className={cn(
                    "text-sm font-medium transition-all duration-200 hover:text-primary relative",
                    isActive(item.href)
                      ? "text-primary"
                      : "text-muted-foreground"
                  )}
                >
                  {item.name}
                  {/* Active indicator */}
                  {isActive(item.href) && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              </PulseHover>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex">
            <HoverLift scale={1.03} lift={-2}>
              <Link to="/analyse">
                <Button variant="cta" size="default" className="shadow-soft hover:shadow-elevated transition-all duration-200">
                  Kostenlose Analyse
                </Button>
              </Link>
            </HoverLift>
          </div>

          {/* Mobile menu button */}
          <PulseHover>
            <button
              type="button"
              className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-muted-foreground hover:text-primary hover:bg-accent transition-all duration-200"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-expanded="false"
            >
              <span className="sr-only">Hauptmenü öffnen</span>
              <motion.div
                animate={{ rotate: isMenuOpen ? 90 : 0 }}
                transition={{ duration: 0.2 }}
              >
                {isMenuOpen ? (
                  <X className="block h-6 w-6" />
                ) : (
                  <Menu className="block h-6 w-6" />
                )}
              </motion.div>
            </button>
          </PulseHover>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              className="md:hidden overflow-hidden"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <motion.div 
                className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t"
                initial="closed"
                animate="open"
                exit="closed"
                variants={{
                  closed: { opacity: 0 },
                  open: {
                    opacity: 1,
                    transition: {
                      staggerChildren: 0.05,
                      delayChildren: 0.1
                    }
                  }
                }}
              >
                {navigation.map((item, index) => (
                  <motion.div
                    key={item.name}
                    variants={{
                      closed: { x: -20, opacity: 0 },
                      open: { x: 0, opacity: 1 }
                    }}
                  >
                    <HoverLift scale={1.01} lift={-1}>
                      <Link
                        to={item.href}
                        className={cn(
                          "block px-3 py-2 text-base font-medium rounded-md transition-all duration-200",
                          isActive(item.href)
                            ? "text-primary bg-accent"
                            : "text-muted-foreground hover:text-primary hover:bg-accent"
                        )}
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                    </HoverLift>
                  </motion.div>
                ))}
                <motion.div 
                  className="px-3 py-2"
                  variants={{
                    closed: { x: -20, opacity: 0 },
                    open: { x: 0, opacity: 1 }
                  }}
                >
                  <HoverLift scale={1.02} lift={-2}>
                    <Link to="/analyse" onClick={() => setIsMenuOpen(false)}>
                      <Button variant="cta" size="default" className="w-full shadow-soft hover:shadow-elevated transition-all duration-200">
                        Kostenlose Analyse
                      </Button>
                    </Link>
                  </HoverLift>
                </motion.div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}