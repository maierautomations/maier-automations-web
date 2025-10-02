import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface TestimonialCarouselProps {
  testimonials: {
    text: string;
    company: string;
    industry: string;
    result: string;
    cp: string;
  }[];
  autoPlay?: boolean;
  interval?: number;
}

export function TestimonialCarousel({ 
  testimonials, 
  autoPlay = true, 
  interval = 5000 
}: TestimonialCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(autoPlay);

  useEffect(() => {
    if (!isPlaying) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, interval);

    return () => clearInterval(timer);
  }, [isPlaying, interval, testimonials.length]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const goToPrevious = () => {
    setCurrentIndex((prev) => 
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  return (
    <div className="relative max-w-4xl mx-auto">
      {/* Main testimonial display */}
      <div 
        className="overflow-hidden"
        onMouseEnter={() => setIsPlaying(false)}
        onMouseLeave={() => setIsPlaying(autoPlay)}
      >
        <div 
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {testimonials.map((testimonial, index) => (
            <div key={index} className="w-full flex-shrink-0 px-4">
              <Card className="glass-card">
                <CardContent className="p-8 text-center">
                  <div className="flex justify-center mb-6">
                    <div className="p-3 rounded-full bg-gradient-to-br from-emerald-500/20 to-cyan-500/20">
                      <Quote className="w-8 h-8 text-emerald-500" />
                    </div>
                  </div>

                  <div className="flex justify-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-amber-500 text-amber-500" />
                    ))}
                  </div>

                  <p className="text-lg text-slate-300 mb-8 leading-relaxed italic">
                    "{testimonial.text}"
                  </p>

                  <div className="flex items-center justify-center gap-6">
                    <div className="text-center">
                      <div className="font-bold text-slate-50">{testimonial.company}</div>
                      <div className="text-sm text-slate-400">{testimonial.industry}</div>
                    </div>
                    <div className="h-8 w-px bg-slate-700"></div>
                    <div className="text-center">
                      <Badge className="bg-emerald-500/10 text-emerald-500 border-emerald-500/20">
                        {testimonial.cp}
                      </Badge>
                      <div className="text-sm font-semibold text-emerald-500 mt-1">
                        {testimonial.result}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation buttons */}
      <div className="flex items-center justify-center gap-4 mt-6">
        <Button
          variant="outline"
          size="icon"
          onClick={goToPrevious}
          className="rounded-full bg-slate-800/50 border-slate-700 text-slate-300 hover:bg-slate-700 hover:border-emerald-500/50"
        >
          <ChevronLeft className="w-4 h-4" />
        </Button>

        {/* Dots indicator */}
        <div className="flex gap-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={cn(
                "w-3 h-3 rounded-full transition-all duration-300",
                currentIndex === index
                  ? "bg-emerald-500 scale-110"
                  : "bg-slate-700 hover:bg-slate-600"
              )}
            />
          ))}
        </div>

        <Button
          variant="outline"
          size="icon"
          onClick={goToNext}
          className="rounded-full bg-slate-800/50 border-slate-700 text-slate-300 hover:bg-slate-700 hover:border-emerald-500/50"
        >
          <ChevronRight className="w-4 h-4" />
        </Button>
      </div>
    </div>
  );
}