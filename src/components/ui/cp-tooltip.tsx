import { HelpCircle, Calculator, Workflow, Bot, Database } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Badge } from "@/components/ui/badge";

export function CPTooltip() {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="ghost" size="sm" className="h-6 w-6 p-0 hover:bg-primary/10">
          <HelpCircle className="h-4 w-4 text-primary" />
          <span className="sr-only">Was sind Complexity Points?</span>
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-96 p-6" align="start">
        <div className="space-y-4">
          <div className="space-y-2">
            <h4 className="font-semibold text-lg flex items-center gap-2">
              <Calculator className="h-5 w-5 text-primary" />
              Complexity Points (CP)
            </h4>
            <p className="text-sm text-muted-foreground">
              Unser transparentes System zur fairen Preisberechnung basierend auf der tatsächlichen Komplexität Ihrer Automatisierung.
            </p>
          </div>
          
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                <Workflow className="h-4 w-4 text-blue-600" />
              </div>
              <div>
                <div className="font-medium text-sm">1 Workflow = 1 CP</div>
                <div className="text-xs text-muted-foreground">Standard-Automation mit 1-2 Integrationen</div>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                <Bot className="h-4 w-4 text-green-600" />
              </div>
              <div>
                <div className="font-medium text-sm">1 Agent = 2 CP</div>
                <div className="text-xs text-muted-foreground">KI-Agent mit Tools und Memory</div>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0">
                <Database className="h-4 w-4 text-purple-600" />
              </div>
              <div>
                <div className="font-medium text-sm">RAG Pro = 3-4 CP</div>
                <div className="text-xs text-muted-foreground">Premium-Wissensassistent mit Vektordatenbank</div>
              </div>
            </div>
          </div>
          
          <div className="pt-3 border-t border-border">
            <div className="text-xs font-medium text-foreground mb-2">Formel:</div>
            <Badge variant="secondary" className="text-xs font-mono">
              CP = Workflows + (2 × Agenten) + (RAG Pro? 3-4 : 0) + Extras
            </Badge>
          </div>
          
          <div className="pt-2">
            <div className="text-xs text-muted-foreground">
              Beispiel: 2 Workflows + 1 Agent + RAG Pro = 2 + 2 + 4 = 8 CP → Scale Paket
            </div>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
}