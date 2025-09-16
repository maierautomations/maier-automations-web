import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { GradientButton } from "@/components/ui/gradient-button";
import { Badge } from "@/components/ui/badge";
import { AnimatedGradient } from "@/components/ui/animated-gradient";
import { AnimatedCounter } from "@/components/ui/animated-counter";
import { motion } from "framer-motion";
import { Shield, Zap, Users, Globe, FileCheck, Lock, Eye, ArrowRight, Star, Clock } from "lucide-react";

export function HeroSection() {

  return (
    <AnimatedGradient variant="mesh" className="relative py-20 lg:py-32 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-5xl mx-auto">
          {/* Trust Badges - Enhanced */}
          <motion.div 
            className="flex flex-wrap justify-center gap-3 mb-8"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            {[
              { icon: Globe, text: "EU-Hosting (Frankfurt)", color: "green" },
              { icon: FileCheck, text: "DPA/SCCs verfügbar", color: "blue" },
              { icon: Lock, text: "RBAC-Sicherheit", color: "purple" },
              { icon: Eye, text: "Keine Tracker ohne Einwilligung", color: "orange" }
            ].map((badge, index) => (
              <motion.div
                key={badge.text}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <Badge 
                  variant="secondary" 
                  className="px-4 py-2 text-sm font-medium bg-white/80 hover:bg-white/90 transition-all duration-300 hover:scale-105"
                >
                  <badge.icon className="w-4 h-4 mr-2" />
                  {badge.text}
                </Badge>
              </motion.div>
            ))}
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            className="text-5xl lg:text-7xl font-bold text-foreground mb-6 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            KI-Automatisierungen für<br />
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-700 bg-clip-text text-transparent">
              intelligente Unternehmen
            </span>
          </motion.h1>

          {/* Subline */}
          <motion.p 
            className="text-xl lg:text-2xl text-muted-foreground mb-12 leading-relaxed max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Steigern Sie Ihre Effizienz mit maßgeschneiderten KI-Agenten und Automatisierungen auf n8n-Basis. 
            Speziell für DACH-Unternehmen entwickelt – sicher, DSGVO-konform und sofort einsatzbereit.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center mb-20"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Link to="/analyse">
              <GradientButton size="lg" className="min-w-[240px] h-14" glow animate>
                <Zap className="w-5 h-5 mr-2" />
                Analyse starten
                <ArrowRight className="w-4 h-4 ml-2" />
              </GradientButton>
            </Link>
            <Link to="/pakete">
              <Button variant="outline" size="lg" className="min-w-[240px] h-14 bg-white/80 backdrop-blur-sm hover:bg-white/90">
                <Users className="w-5 h-5 mr-2" />
                Pakete entdecken
              </Button>
            </Link>
          </motion.div>

          {/* Enhanced Trust Indicators with Animation */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-5xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <motion.div 
              className="text-center group"
              whileHover={{ y: -4 }}
              transition={{ duration: 0.3 }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-green-500/10 to-emerald-500/20 rounded-xl mb-4 group-hover:shadow-lg group-hover:shadow-green-500/25 transition-all duration-300">
                <Shield className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="font-bold text-foreground mb-2 text-lg">60% weniger Routinearbeit</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                durch KI-Agenten & Workflows
              </p>
            </motion.div>
            
            <motion.div 
              className="text-center group"
              whileHover={{ y: -4 }}
              transition={{ duration: 0.3 }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500/10 to-cyan-500/20 rounded-xl mb-4 group-hover:shadow-lg group-hover:shadow-blue-500/25 transition-all duration-300">
                <Clock className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="font-bold text-foreground mb-2 text-lg">Kickoff in 48h</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Go-Live nach 3 Wochen*
              </p>
            </motion.div>

            <motion.div 
              className="text-center group"
              whileHover={{ y: -4 }}
              transition={{ duration: 0.3 }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-purple-500/10 to-pink-500/20 rounded-xl mb-4 group-hover:shadow-lg group-hover:shadow-purple-500/25 transition-all duration-300">
                <Users className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="font-bold text-foreground mb-2 text-lg">DACH-Fokus</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Speziell für deutsche Compliance entwickelt
              </p>
            </motion.div>

            <motion.div 
              className="text-center group"
              whileHover={{ y: -4 }}
              transition={{ duration: 0.3 }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-orange-500/10 to-red-500/20 rounded-xl mb-4 group-hover:shadow-lg group-hover:shadow-orange-500/25 transition-all duration-300">
                <Globe className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="font-bold text-foreground mb-2 text-lg">500+ Integrationen</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                über n8n-Cloud
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </AnimatedGradient>
  );
}