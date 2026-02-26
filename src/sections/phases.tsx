import { useState } from "react";
import { content } from "@/data/content";
import { motion, AnimatePresence } from "motion/react";
import { CheckCircle2, Video, UserCheck, BarChart3 } from "lucide-react";
import { cn } from "@/lib/utils";

const icons = {
  "pre-embauche": Video,
  "embauche": UserCheck,
  "post-embauche": BarChart3,
};

export function Phases() {
  const [activeTab, setActiveTab] = useState(content.phases.steps[0].id);

  return (
    <section id="phases" className="py-24 bg-slate-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            {content.phases.title}
          </h2>
          <p className="text-lg text-slate-600">
            {content.phases.subtitle}
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 items-start">
          {/* Tabs Navigation */}
          <div className="w-full lg:w-1/3 flex flex-col gap-4">
            {content.phases.steps.map((step) => {
              const Icon = icons[step.id as keyof typeof icons];
              const isActive = activeTab === step.id;
              
              return (
                <button
                  key={step.id}
                  onClick={() => setActiveTab(step.id)}
                  className={cn(
                    "text-left p-6 rounded-xl border transition-all duration-300 group relative overflow-hidden",
                    isActive
                      ? "bg-white border-indigo-200 shadow-md ring-1 ring-indigo-50"
                      : "bg-white border-slate-200 hover:border-indigo-200 hover:bg-slate-50"
                  )}
                >
                  <div className="flex items-center gap-4 mb-2">
                    <div className={cn(
                      "p-2 rounded-lg transition-colors",
                      isActive ? "bg-indigo-100 text-indigo-600" : "bg-slate-100 text-slate-500 group-hover:text-indigo-600"
                    )}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className={cn("font-semibold text-lg", isActive ? "text-indigo-900" : "text-slate-700")}>
                      {step.title}
                    </h3>
                  </div>
                  <p className="text-slate-600 text-sm pl-[3.25rem]">
                    {step.description}
                  </p>
                  {isActive && (
                    <motion.div
                      layoutId="active-pill"
                      className="absolute left-0 top-0 bottom-0 w-1 bg-indigo-600"
                    />
                  )}
                </button>
              );
            })}
          </div>

          {/* Content Display */}
          <div className="w-full lg:w-2/3 bg-white rounded-2xl border border-slate-200 shadow-xl p-8 md:p-12 min-h-[500px] relative overflow-hidden flex flex-col">
            <AnimatePresence mode="wait">
              {content.phases.steps.map((step) => (
                activeTab === step.id ? (
                  <motion.div
                    key={step.id}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                    className="h-full flex flex-col justify-between"
                  >
                    <div>
                      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 text-indigo-700 text-sm font-medium mb-6">
                        Phase {step.title}
                      </div>
                      <h3 className="text-2xl font-bold text-slate-900 mb-6">
                        {step.description}
                      </h3>
                      
                      <div className="grid md:grid-cols-2 gap-6 mb-8">
                        {step.features.map((feature, idx) => (
                          <div key={idx} className="flex items-start gap-3">
                            <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                            <span className="text-slate-700">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="mt-auto p-6 bg-slate-50 rounded-xl border border-slate-100">
                      <h4 className="font-semibold text-slate-900 mb-2 flex items-center gap-2">
                        <span className="text-xl">🚀</span> Impact immédiat
                      </h4>
                      <p className="text-slate-600 font-medium">
                        {step.benefit}
                      </p>
                    </div>
                  </motion.div>
                ) : null
              ))}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
