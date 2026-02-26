import { content } from "@/data/content";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export function CTA() {
  return (
    <section className="py-24 bg-indigo-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-soft-light"></div>
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-indigo-900 to-slate-900 opacity-90"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">
          {content.cta.title}
        </h2>
        <p className="text-indigo-200 text-lg md:text-xl max-w-2xl mx-auto mb-10">
          {content.cta.subtitle}
        </p>
        <Button size="lg" className="bg-white text-indigo-900 hover:bg-indigo-50 shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-1" asChild>
          <Link to="/contact">
            {content.cta.button}
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </Button>
      </div>
    </section>
  );
}
