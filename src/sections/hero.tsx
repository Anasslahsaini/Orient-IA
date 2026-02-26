import { content } from "@/data/content";
import { Button } from "@/components/ui/button";
import { motion } from "motion/react";
import { ArrowRight, Play } from "lucide-react";
import { Link } from "react-router-dom";

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none z-[-1]">
        <div className="absolute top-20 left-10 w-72 h-72 bg-indigo-100 rounded-full blur-3xl opacity-50 mix-blend-multiply animate-blob" />
        <div className="absolute top-20 right-10 w-72 h-72 bg-purple-100 rounded-full blur-3xl opacity-50 mix-blend-multiply animate-blob animation-delay-2000" />
        <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-blue-100 rounded-full blur-3xl opacity-50 mix-blend-multiply animate-blob animation-delay-4000" />
      </div>

      <div className="container mx-auto px-4 md:px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-flex items-center rounded-full border border-indigo-200 bg-indigo-50 px-3 py-1 text-sm font-medium text-indigo-800 mb-6">
            {content.hero.badge}
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-slate-900 mb-6 max-w-4xl mx-auto"
        >
          {content.hero.title}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg md:text-xl text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed"
        >
          {content.hero.subtitle}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Button size="lg" className="group" asChild>
            <Link to="/contact">
              {content.hero.ctaPrimary}
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
          <Button variant="outline" size="lg" className="group" asChild>
            <Link to="/comment-ca-marche">
              <Play className="mr-2 h-4 w-4 fill-slate-900 group-hover:fill-indigo-600 transition-colors" />
              {content.hero.ctaSecondary}
            </Link>
          </Button>
        </motion.div>

        {/* Dashboard Preview Mockup */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-20 relative mx-auto max-w-5xl"
        >
          <div className="rounded-xl border border-slate-200 bg-white/50 backdrop-blur-sm shadow-2xl overflow-hidden p-2">
            <div className="rounded-lg bg-slate-50 border border-slate-100 aspect-[16/9] flex items-center justify-center relative overflow-hidden">
               {/* Abstract UI Representation */}
               <div className="absolute inset-0 bg-gradient-to-br from-white to-slate-50">
                  <div className="absolute top-4 left-4 right-4 h-12 bg-white rounded-md shadow-sm border border-slate-100 flex items-center px-4 gap-4">
                     <div className="w-3 h-3 rounded-full bg-red-400" />
                     <div className="w-3 h-3 rounded-full bg-yellow-400" />
                     <div className="w-3 h-3 rounded-full bg-green-400" />
                  </div>
                  <div className="absolute top-20 left-4 bottom-4 w-64 bg-white rounded-md shadow-sm border border-slate-100 p-4 space-y-3">
                     <div className="h-4 w-3/4 bg-slate-100 rounded" />
                     <div className="h-4 w-1/2 bg-slate-100 rounded" />
                     <div className="h-32 w-full bg-indigo-50/50 rounded-lg mt-4 border border-indigo-100" />
                  </div>
                  <div className="absolute top-20 right-4 bottom-4 left-72 bg-white rounded-md shadow-sm border border-slate-100 p-6 grid grid-cols-2 gap-6">
                     <div className="col-span-2 h-32 bg-slate-50 rounded-lg border border-slate-100 flex items-center justify-center">
                        <span className="text-slate-400 font-medium">Analyse Vidéo IA</span>
                     </div>
                     <div className="h-32 bg-slate-50 rounded-lg border border-slate-100" />
                     <div className="h-32 bg-slate-50 rounded-lg border border-slate-100" />
                  </div>
               </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
