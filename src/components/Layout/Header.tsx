import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { HoverLift, Magnetic, PulseHover } from "@/components/ui/micro-interactions";
import { motion, AnimatePresence } from "framer-motion";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: "Startseite", href: "/" },
    {
      name: "Pakete",
      href: "/pakete",
      dropdown: [
        { name: "Alle Pakete", href: "/pakete", description: "Übersicht aller Automatisierungspakete" },
        { name: "CP-System", href: "/cp-system", description: "Transparente Preisgestaltung erklärt" },
      ]
    },
    {
      name: "Produkte",
      href: "#",
      dropdown: [
        { name: "KI-Agenten", href: "/produkte/ki-agenten", description: "Intelligente Automatisierungsagenten" },
        { name: "n8n-Workflows", href: "/produkte/workflows", description: "Professionelle Workflow-Automatisierung" },
        { name: "Wissensassistent (RAG Pro)", href: "/rag-pro", description: "KI-gestützte Wissensdatenbank" },
      ]
    },
    {
      name: "Ressourcen",
      href: "#",
      dropdown: [
        { name: "Blog", href: "/blog", description: "Neueste Artikel und Updates" },
        { name: "Newsletter", href: "/newsletter", description: "Bleiben Sie informiert" },
        { name: "FAQ", href: "/faq", description: "Häufig gestellte Fragen" },
      ]
    },
    { name: "Kontakt", href: "/kontakt" },
  ];

  const isActive = (href: string) => location.pathname === href;

  return (
    <header className="sticky top-0 z-50 w-full glass-card border-b border-slate-700/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Magnetic strength={0.2}>
            <Link to="/" className="flex items-center space-x-2">
              <HoverLift scale={1.05}>
                <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-emerald-500 to-cyan-500 flex items-center justify-center transition-all duration-200 glow-emerald">
                  <span className="text-slate-900 font-bold text-sm">M</span>
                </div>
              </HoverLift>
              <span className="font-semibold text-xl text-slate-50 transition-colors hover:text-emerald-500">
                Maier Automations
              </span>
            </Link>
          </Magnetic>

          {/* Desktop Navigation */}
          <NavigationMenu className="hidden md:flex">
            <NavigationMenuList>
              {navigation.map((item) => (
                <NavigationMenuItem key={item.name}>
                  {item.dropdown ? (
                    <>
                      <NavigationMenuTrigger className="h-auto">
                        <span className={cn(
                          "text-sm font-medium text-slate-300 hover:text-emerald-500 transition-colors",
                          item.dropdown.some(sub => isActive(sub.href))
                            ? "text-emerald-500"
                            : ""
                        )}>
                          {item.name}
                        </span>
                      </NavigationMenuTrigger>
                      <NavigationMenuContent>
                        <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-1">
                          {item.dropdown.map((subItem) => (
                            <li key={subItem.name}>
                              <NavigationMenuLink asChild>
                                <Link
                                  to={subItem.href}
                                  className={cn(
                                    "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                                    isActive(subItem.href) ? "bg-accent" : ""
                                  )}
                                >
                                  <div className="text-sm font-medium leading-none">{subItem.name}</div>
                                  <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                    {subItem.description}
                                  </p>
                                </Link>
                              </NavigationMenuLink>
                            </li>
                          ))}
                        </ul>
                      </NavigationMenuContent>
                    </>
                  ) : (
                    <Link to={item.href}>
                      <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                        <span className={cn(
                          "text-sm font-medium text-slate-300 hover:text-emerald-500 transition-colors",
                          isActive(item.href) ? "text-emerald-500" : ""
                        )}>
                          {item.name}
                        </span>
                      </NavigationMenuLink>
                    </Link>
                  )}
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>

          {/* CTA Button */}
          <div className="hidden md:flex">
            <HoverLift scale={1.03} lift={-2}>
              <Link to="/analyse">
                <Button variant="gradient-primary" size="default">
                  Analyse starten
                </Button>
              </Link>
            </HoverLift>
          </div>

          {/* Mobile menu button */}
          <PulseHover>
            <button
              type="button"
              className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-slate-400 hover:text-emerald-500 hover:bg-slate-800/50 transition-all duration-200"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-expanded={isMenuOpen}
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
                {navigation.map((item) => (
                  <motion.div
                    key={item.name}
                    variants={{
                      closed: { x: -20, opacity: 0 },
                      open: { x: 0, opacity: 1 }
                    }}
                  >
                    {item.dropdown ? (
                      <div className="space-y-1">
                        <div className="px-3 py-2 text-base font-medium text-muted-foreground">
                          {item.name}
                        </div>
                        <div className="pl-6 space-y-1">
                          {item.dropdown.map((subItem) => (
                            <HoverLift key={subItem.name} scale={1.01} lift={-1}>
                              <Link
                                to={subItem.href}
                                className={cn(
                                  "block px-3 py-2 text-sm font-medium rounded-md transition-all duration-200",
                                  isActive(subItem.href)
                                    ? "text-primary bg-accent"
                                    : "text-muted-foreground hover:text-primary hover:bg-accent"
                                )}
                                onClick={() => setIsMenuOpen(false)}
                              >
                                {subItem.name}
                              </Link>
                            </HoverLift>
                          ))}
                        </div>
                      </div>
                    ) : (
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
                    )}
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
                      <Button variant="gradient-primary" size="default" className="w-full">
                        Analyse starten
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