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
    <section className="relative bg-slate-950 py-20 lg:py-32 overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-800 opacity-50" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Trust Badges - Enhanced */}
        <motion.div
          className="flex flex-wrap justify-center gap-3 mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          {[
            { icon: Globe, text: "EU-Hosting (Frankfurt)" },
            { icon: FileCheck, text: "DPA/SCCs verfügbar" },
            { icon: Lock, text: "RBAC-Sicherheit" },
            { icon: Eye, text: "Keine Tracker ohne Einwilligung" }
          ].map((badge, index) => (
            <motion.div
              key={badge.text}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <Badge
                variant="secondary"
                className="px-4 py-2 text-sm font-medium bg-slate-800/30 backdrop-blur-xl border-slate-700/50 text-emerald-500 hover:bg-slate-800/50 transition-all duration-300 hover:scale-105"
              >
                <badge.icon className="w-4 h-4 mr-2" />
                {badge.text}
              </Badge>
            </motion.div>
          ))}
        </motion.div>

        {/* 50/50 Grid Layout */}
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">

          {/* Left Column: Text Content */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {/* Main Headline */}
            <h1 className="text-5xl lg:text-6xl font-bold text-slate-50 leading-tight">
              KI-Automatisierungen für{" "}
              <span className="gradient-emerald-cyan bg-clip-text text-transparent">
                intelligente Unternehmen
              </span>
            </h1>

            {/* Subline */}
            <p className="text-xl text-slate-300 leading-relaxed">
              Steigern Sie Ihre Effizienz mit maßgeschneiderten KI-Agenten und Automatisierungen auf n8n-Basis.
              Speziell für DACH-Unternehmen entwickelt – sicher, DSGVO-konform und sofort einsatzbereit.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/analyse">
                <Button variant="gradient-primary" size="lg" className="min-w-[240px]">
                  <Zap className="w-5 h-5 mr-2" />
                  Analyse starten
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
              <Link to="/pakete">
                <Button variant="outline" size="lg" className="min-w-[240px]">
                  <Users className="w-5 h-5 mr-2" />
                  Pakete entdecken
                </Button>
              </Link>
            </div>
          </motion.div>

          {/* Right Column: Illustration Placeholder */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            {/* TODO: Replace with custom illustration - Isometric AI Agent 3D style */}
            <img
              src="https://placehold.co/800x600/0F172A/10B981?text=AI+Automation+Hero"
              alt="Isometric AI Agent with workflow nodes and data streams - 3D tech aesthetic"
              className="w-full h-auto rounded-xl shadow-2xl shadow-emerald-500/10"
            />
          </motion.div>
        </div>

        {/* Trust Indicators Below */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-6xl mx-auto mt-20"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
        >
          <motion.div
            className="text-center group"
            whileHover={{ y: -4 }}
            transition={{ duration: 0.3 }}
          >
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-emerald-500/10 to-emerald-500/20 rounded-xl mb-4 group-hover:shadow-lg group-hover:shadow-emerald-500/25 transition-all duration-300">
              <Shield className="w-8 h-8 text-emerald-500" />
            </div>
            <h3 className="font-bold text-slate-50 mb-2 text-lg">60% weniger Routinearbeit</h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              durch KI-Agenten & Workflows
            </p>
          </motion.div>

          <motion.div
            className="text-center group"
            whileHover={{ y: -4 }}
            transition={{ duration: 0.3 }}
          >
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-cyan-500/10 to-cyan-500/20 rounded-xl mb-4 group-hover:shadow-lg group-hover:shadow-cyan-500/25 transition-all duration-300">
              <Clock className="w-8 h-8 text-cyan-500" />
            </div>
            <h3 className="font-bold text-slate-50 mb-2 text-lg">Kickoff in 48h</h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              Go-Live nach 3 Wochen*
            </p>
          </motion.div>

          <motion.div
            className="text-center group"
            whileHover={{ y: -4 }}
            transition={{ duration: 0.3 }}
          >
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-amber-500/10 to-amber-500/20 rounded-xl mb-4 group-hover:shadow-lg group-hover:shadow-amber-500/25 transition-all duration-300">
              <Users className="w-8 h-8 text-amber-500" />
            </div>
            <h3 className="font-bold text-slate-50 mb-2 text-lg">DACH-Fokus</h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              Speziell für deutsche Compliance entwickelt
            </p>
          </motion.div>

          <motion.div
            className="text-center group"
            whileHover={{ y: -4 }}
            transition={{ duration: 0.3 }}
          >
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-emerald-500/10 to-cyan-500/20 rounded-xl mb-4 group-hover:shadow-lg group-hover:shadow-emerald-500/25 transition-all duration-300">
              <Globe className="w-8 h-8 text-emerald-500" />
            </div>
            <h3 className="font-bold text-slate-50 mb-2 text-lg">500+ Integrationen</h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              über n8n-Cloud
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}