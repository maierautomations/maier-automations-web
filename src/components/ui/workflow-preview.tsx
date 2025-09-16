import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { 
  Mail, 
  Database, 
  Bot, 
  CheckCircle, 
  ArrowRight, 
  Play, 
  Pause,
  Clock,
  Users,
  FileText,
  Zap,
  Globe
} from "lucide-react";
import { Button } from "@/components/ui/button";

interface WorkflowStep {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  type: "trigger" | "action" | "decision" | "output";
  delay?: number;
  position: { x: number; y: number };
  connections?: string[];
}

interface WorkflowPreviewProps {
  workflow: WorkflowStep[];
  className?: string;
  autoPlay?: boolean;
  title?: string;
  description?: string;
}

const sampleWorkflows = {
  leadQualification: {
    title: "Lead-Qualifizierung Workflow",
    description: "Automatische Bewertung und Weiterleitung von Leads basierend auf definierten Kriterien",
    steps: [
      {
        id: "trigger",
        title: "Neue Anfrage",
        description: "Lead kommt über Website ein",
        icon: <Mail className="w-5 h-5" />,
        type: "trigger" as const,
        position: { x: 0, y: 0 },
        connections: ["extract"],
        delay: 0
      },
      {
        id: "extract",
        title: "Daten extrahieren",
        description: "Kontaktdaten und Anfrage-Details erfassen",
        icon: <Database className="w-5 h-5" />,
        type: "action" as const,
        position: { x: 200, y: 0 },
        connections: ["qualify"],
        delay: 1000
      },
      {
        id: "qualify",
        title: "KI-Bewertung",
        description: "Lead-Qualität mit KI-Agent bewerten",
        icon: <Bot className="w-5 h-5" />,
        type: "decision" as const,
        position: { x: 400, y: 0 },
        connections: ["highvalue", "lowvalue"],
        delay: 2000
      },
      {
        id: "highvalue",
        title: "High-Value Lead",
        description: "Direktweiterleitung an Vertrieb",
        icon: <Users className="w-5 h-5" />,
        type: "output" as const,
        position: { x: 600, y: -80 },
        delay: 3500
      },
      {
        id: "lowvalue",
        title: "Standard-Prozess",
        description: "Automatische E-Mail-Sequenz starten",
        icon: <Mail className="w-5 h-5" />,
        type: "output" as const,
        position: { x: 600, y: 80 },
        delay: 3500
      }
    ]
  },
  
  documentProcessing: {
    title: "Dokumenten-Verarbeitung",
    description: "Intelligente Verarbeitung und Klassifizierung eingehender Dokumente",
    steps: [
      {
        id: "upload",
        title: "Dokument Upload",
        description: "PDF wird hochgeladen",
        icon: <FileText className="w-5 h-5" />,
        type: "trigger" as const,
        position: { x: 0, y: 0 },
        connections: ["ocr"],
        delay: 0
      },
      {
        id: "ocr",
        title: "Text-Extraktion",
        description: "OCR-Verarbeitung",
        icon: <Zap className="w-5 h-5" />,
        type: "action" as const,
        position: { x: 200, y: 0 },
        connections: ["classify"],
        delay: 1500
      },
      {
        id: "classify",
        title: "KI-Klassifizierung",
        description: "Dokumententyp erkennen",
        icon: <Bot className="w-5 h-5" />,
        type: "decision" as const,
        position: { x: 400, y: 0 },
        connections: ["invoice", "contract"],
        delay: 3000
      },
      {
        id: "invoice",
        title: "Rechnung",
        description: "An Buchhaltung weiterleiten",
        icon: <Database className="w-5 h-5" />,
        type: "output" as const,
        position: { x: 600, y: -80 },
        delay: 4500
      },
      {
        id: "contract",
        title: "Vertrag",
        description: "An Rechtsabteilung senden",
        icon: <CheckCircle className="w-5 h-5" />,
        type: "output" as const,
        position: { x: 600, y: 80 },
        delay: 4500
      }
    ]
  }
};

export function WorkflowPreview({ 
  workflow, 
  className, 
  autoPlay = true, 
  title,
  description 
}: WorkflowPreviewProps) {
  const [currentStep, setCurrentStep] = useState(-1);
  const [isPlaying, setIsPlaying] = useState(autoPlay);
  const [playCount, setPlayCount] = useState(0);

  useEffect(() => {
    if (!isPlaying) return;

    const timer = setTimeout(() => {
      if (currentStep < workflow.length - 1) {
        setCurrentStep(prev => prev + 1);
      } else {
        // Reset and replay
        setCurrentStep(-1);
        setPlayCount(prev => prev + 1);
        
        // Stop after 3 cycles unless manually controlled
        if (playCount >= 2 && autoPlay) {
          setIsPlaying(false);
        }
      }
    }, currentStep === -1 ? 500 : (workflow[currentStep]?.delay || 1000));

    return () => clearTimeout(timer);
  }, [currentStep, isPlaying, workflow.length, playCount, autoPlay]);

  const getStepStatus = (index: number) => {
    if (index < currentStep) return "completed";
    if (index === currentStep) return "active";
    return "pending";
  };

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
    if (!isPlaying && currentStep >= workflow.length - 1) {
      setCurrentStep(-1);
      setPlayCount(0);
    }
  };

  const resetWorkflow = () => {
    setCurrentStep(-1);
    setPlayCount(0);
    setIsPlaying(autoPlay);
  };

  const typeColors = {
    trigger: "bg-blue-500",
    action: "bg-green-500", 
    decision: "bg-amber-500",
    output: "bg-purple-500"
  };

  return (
    <div className={cn("p-8 bg-gradient-to-br from-slate-50 to-white rounded-xl border", className)}>
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h3 className="text-2xl font-bold text-foreground mb-2">
            {title || "Workflow Preview"}
          </h3>
          {description && (
            <p className="text-muted-foreground">
              {description}
            </p>
          )}
        </div>
        
        <div className="flex gap-2">
          <Button
            variant="outline"
            size="sm"
            onClick={togglePlay}
            className="flex items-center gap-2"
          >
            {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
            {isPlaying ? "Pause" : "Play"}
          </Button>
          <Button
            variant="ghost"
            size="sm"
            onClick={resetWorkflow}
          >
            Reset
          </Button>
        </div>
      </div>

      {/* Workflow Visualization */}
      <div className="relative min-h-[400px] overflow-x-auto">
        <svg
          className="absolute inset-0 pointer-events-none"
          style={{
            width: Math.max(...workflow.map(s => s.position.x)) + 300,
            height: Math.max(...workflow.map(s => Math.abs(s.position.y))) * 2 + 200
          }}
        >
          {/* Connection Lines */}
          {workflow.map((step, index) => 
            step.connections?.map((connectionId, connIndex) => {
              const targetStep = workflow.find(s => s.id === connectionId);
              if (!targetStep) return null;
              
              const startX = step.position.x + 150;
              const startY = step.position.y + 200;
              const endX = targetStep.position.x + 50;
              const endY = targetStep.position.y + 200;
              
              const isActive = index < currentStep && 
                              workflow.findIndex(s => s.id === connectionId) <= currentStep;
              
              return (
                <motion.line
                  key={`${step.id}-${connectionId}-${connIndex}`}
                  x1={startX}
                  y1={startY}
                  x2={endX}
                  y2={endY}
                  stroke={isActive ? "#3b82f6" : "#e2e8f0"}
                  strokeWidth="2"
                  strokeDasharray={isActive ? "0" : "5,5"}
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: isActive ? 1 : 0.3 }}
                  transition={{ duration: 0.5, delay: isActive ? 0.2 : 0 }}
                />
              );
            })
          )}
          
          {/* Arrow markers */}
          <defs>
            <marker
              id="arrowhead"
              markerWidth="10"
              markerHeight="7"
              refX="9"
              refY="3.5"
              orient="auto"
            >
              <polygon
                points="0 0, 10 3.5, 0 7"
                fill="#3b82f6"
              />
            </marker>
          </defs>
        </svg>

        {/* Workflow Steps */}
        {workflow.map((step, index) => {
          const status = getStepStatus(index);
          const isVisible = status !== "pending";
          
          return (
            <AnimatePresence key={step.id}>
              {isVisible && (
                <motion.div
                  className="absolute"
                  style={{
                    left: step.position.x,
                    top: step.position.y + 150,
                  }}
                  initial={{ opacity: 0, scale: 0.5, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.5 }}
                  transition={{ 
                    duration: 0.4, 
                    type: "spring", 
                    stiffness: 300 
                  }}
                >
                  <div className={cn(
                    "relative bg-white rounded-lg border-2 p-4 shadow-soft min-w-[180px]",
                    status === "active" && "border-primary ring-4 ring-primary/20",
                    status === "completed" && "border-green-500 bg-green-50"
                  )}>
                    {/* Step Icon */}
                    <div className={cn(
                      "w-10 h-10 rounded-full flex items-center justify-center text-white mb-3",
                      typeColors[step.type],
                      status === "completed" && "bg-green-500"
                    )}>
                      {status === "completed" ? (
                        <CheckCircle className="w-5 h-5" />
                      ) : (
                        step.icon
                      )}
                      
                      {status === "active" && (
                        <motion.div
                          className="absolute inset-0 rounded-full border-2 border-primary"
                          animate={{ scale: [1, 1.2, 1] }}
                          transition={{ 
                            duration: 1.5, 
                            repeat: Infinity,
                            repeatType: "loop"
                          }}
                        />
                      )}
                    </div>
                    
                    {/* Step Content */}
                    <h4 className="font-semibold text-sm mb-1">
                      {step.title}
                    </h4>
                    <p className="text-xs text-muted-foreground">
                      {step.description}
                    </p>
                    
                    {/* Processing indicator */}
                    {status === "active" && (
                      <motion.div
                        className="absolute -top-2 -right-2 w-6 h-6 bg-primary rounded-full flex items-center justify-center"
                        animate={{ rotate: 360 }}
                        transition={{ 
                          duration: 2, 
                          repeat: Infinity,
                          ease: "linear"
                        }}
                      >
                        <Clock className="w-3 h-3 text-white" />
                      </motion.div>
                    )}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          );
        })}
      </div>
      
      {/* Progress Bar */}
      <div className="mt-8">
        <div className="flex justify-between text-sm text-muted-foreground mb-2">
          <span>Workflow Fortschritt</span>
          <span>{Math.max(0, currentStep + 1)} von {workflow.length} Schritten</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <motion.div
            className="bg-primary h-2 rounded-full"
            initial={{ width: "0%" }}
            animate={{ 
              width: `${((currentStep + 1) / workflow.length) * 100}%` 
            }}
            transition={{ duration: 0.3 }}
          />
        </div>
      </div>
    </div>
  );
}

// Pre-built workflow examples
export function LeadQualificationWorkflow(props: Partial<WorkflowPreviewProps>) {
  const workflow = sampleWorkflows.leadQualification;
  return (
    <WorkflowPreview
      workflow={workflow.steps}
      title={workflow.title}
      description={workflow.description}
      {...props}
    />
  );
}

export function DocumentProcessingWorkflow(props: Partial<WorkflowPreviewProps>) {
  const workflow = sampleWorkflows.documentProcessing;
  return (
    <WorkflowPreview
      workflow={workflow.steps}
      title={workflow.title}
      description={workflow.description}
      {...props}
    />
  );
}