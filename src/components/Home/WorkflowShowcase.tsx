import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { LeadQualificationWorkflow, DocumentProcessingWorkflow } from "@/components/ui/workflow-preview";
import { 
  Users, 
  FileText, 
  Bot, 
  ArrowRight, 
  PlayCircle,
  Workflow
} from "lucide-react";
import { cn } from "@/lib/utils";

const workflowExamples = [
  {
    id: "lead-qualification",
    title: "Lead-Qualifizierung",
    description: "Intelligente Bewertung und Weiterleitung eingehender Leads",
    icon: <Users className="w-5 h-5" />,
    component: LeadQualificationWorkflow,
    stats: { timesSaved: "3 Stunden/Tag", accuracy: "95%" },
    category: "Vertrieb"
  },
  {
    id: "document-processing",
    title: "Dokumenten-Verarbeitung",
    description: "Automatische Klassifizierung und Weiterleitung von Dokumenten",
    icon: <FileText className="w-5 h-5" />,
    component: DocumentProcessingWorkflow,
    stats: { timesSaved: "5 Stunden/Tag", accuracy: "98%" },
    category: "Administration"
  }
];

export function WorkflowShowcase() {
  const [activeWorkflow, setActiveWorkflow] = useState(workflowExamples[0]);

  return (
    <section className="py-24 bg-slate-950">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <Badge className="mb-4 gradient-emerald-cyan text-slate-900 border-0">
            <Workflow className="w-4 h-4 mr-2" />
            Live-Workflow Demonstration
          </Badge>

          <h2 className="text-3xl lg:text-4xl font-bold text-slate-50 mb-6">
            Sehen Sie Ihre{" "}
            <span className="gradient-emerald-cyan bg-clip-text text-transparent">
              Automatisierung
            </span>{" "}
            in Aktion
          </h2>

          <p className="text-lg text-slate-300 leading-relaxed">
            Erleben Sie interaktiv, wie unsere KI-Workflows Ihre Geschäftsprozesse transformieren.
            Jeder Workflow ist maßgeschneidert und kann an Ihre spezifischen Anforderungen angepasst werden.
          </p>
        </div>

        {/* Workflow Selection Tabs */}
        <div className="flex flex-col lg:flex-row gap-4 mb-8 max-w-2xl mx-auto">
          {workflowExamples.map((workflow) => (
            <motion.button
              key={workflow.id}
              className={cn(
                "flex items-center gap-3 p-4 rounded-lg border-2 transition-all duration-200 text-left",
                activeWorkflow.id === workflow.id
                  ? "border-emerald-500/50 glass-card shadow-emerald-500/20 shadow-lg"
                  : "glass-card border-slate-700/50 hover:border-slate-600"
              )}
              onClick={() => setActiveWorkflow(workflow)}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className={cn(
                "p-2 rounded-lg",
                activeWorkflow.id === workflow.id
                  ? "gradient-emerald-cyan"
                  : "bg-slate-800/50 text-slate-400"
              )}>
                {workflow.icon}
              </div>

              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="font-semibold text-slate-50">
                    {workflow.title}
                  </h3>
                  <Badge className="text-xs bg-slate-800/50 text-emerald-500 border-emerald-500/30">
                    {workflow.category}
                  </Badge>
                </div>
                <p className="text-sm text-slate-300">
                  {workflow.description}
                </p>
              </div>

              {activeWorkflow.id === workflow.id && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-emerald-500"
                >
                  <PlayCircle className="w-5 h-5" />
                </motion.div>
              )}
            </motion.button>
          ))}
        </div>

        {/* Active Workflow Display */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeWorkflow.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="max-w-6xl mx-auto"
          >
            <activeWorkflow.component autoPlay={true} />
          </motion.div>
        </AnimatePresence>

        {/* Workflow Stats */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="text-center p-6 glass-card rounded-xl hover:border-emerald-500/30 transition-all duration-300">
            <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-full flex items-center justify-center text-slate-900 mx-auto mb-3">
              <Bot className="w-6 h-6" />
            </div>
            <div className="text-2xl font-bold text-emerald-500 mb-1">
              {activeWorkflow.stats.timesSaved}
            </div>
            <div className="text-sm text-slate-400">
              Durchschnittliche Zeitersparnis
            </div>
          </div>

          <div className="text-center p-6 glass-card rounded-xl hover:border-cyan-500/30 transition-all duration-300">
            <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-full flex items-center justify-center text-slate-900 mx-auto mb-3">
              <Workflow className="w-6 h-6" />
            </div>
            <div className="text-2xl font-bold text-cyan-500 mb-1">
              {activeWorkflow.stats.accuracy}
            </div>
            <div className="text-sm text-slate-400">
              Verarbeitungsgenauigkeit
            </div>
          </div>

          <div className="text-center p-6 glass-card rounded-xl hover:border-amber-500/30 transition-all duration-300">
            <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-amber-600 rounded-full flex items-center justify-center text-slate-900 mx-auto mb-3">
              <ArrowRight className="w-6 h-6" />
            </div>
            <div className="text-2xl font-bold text-amber-500 mb-1">
              3-5 Wochen
            </div>
            <div className="text-sm text-slate-400">
              Bis zur Produktivsetzung
            </div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="glass-card rounded-2xl p-8 max-w-2xl mx-auto border-emerald-500/20">
            <h3 className="text-2xl font-bold text-slate-50 mb-4">
              Bereit für Ihre eigene Automatisierung?
            </h3>
            <p className="text-slate-300 mb-6">
              Lassen Sie uns gemeinsam analysieren, welche Workflows in Ihrem Unternehmen
              automatisiert werden können. Kostenlos und unverbindlich.
            </p>
            <Button size="lg" variant="gradient-primary" className="glow-emerald">
              Analyse starten
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}