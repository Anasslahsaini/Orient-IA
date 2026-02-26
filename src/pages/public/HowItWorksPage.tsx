import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { ArrowRight, UserPlus, Search, UserCheck, ShieldCheck } from "lucide-react";

export function HowItWorksPage() {
  const steps = [
    {
      id: 1,
      title: "Le candidat prépare sa candidature",
      desc: "Il utilise le simulateur d'entretien et l'assistant CV pour maximiser ses chances.",
      icon: UserPlus,
      color: "bg-blue-100 text-blue-600"
    },
    {
      id: 2,
      title: "Le RH sélectionne avec l'IA",
      desc: "L'IA analyse les profils, les vidéos et les soft skills pour faire remonter les meilleurs talents.",
      icon: Search,
      color: "bg-purple-100 text-purple-600"
    },
    {
      id: 3,
      title: "L'intégration est suivie",
      desc: "Un parcours d'onboarding personnalisé guide la nouvelle recrue jour après jour.",
      icon: UserCheck,
      color: "bg-emerald-100 text-emerald-600"
    },
    {
      id: 4,
      title: "Alertes en cas de risque",
      desc: "Le système détecte les signaux faibles de désengagement et prévient les RH.",
      icon: ShieldCheck,
      color: "bg-red-100 text-red-600"
    }
  ];

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 antialiased">
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h1 className="text-4xl font-bold text-slate-900 mb-6">
              Comment ça marche ?
            </h1>
            <p className="text-xl text-slate-600">
              Un flux simple et efficace pour connecter les talents aux entreprises.
            </p>
          </div>

          <div className="relative max-w-4xl mx-auto">
            {/* Connecting Line */}
            <div className="absolute left-8 top-8 bottom-8 w-0.5 bg-slate-200 md:left-1/2 md:-translate-x-1/2"></div>

            <div className="space-y-12">
              {steps.map((step, index) => (
                <div key={index} className={`relative flex items-center md:justify-between ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  {/* Icon */}
                  <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 w-16 h-16 rounded-full bg-white border-4 border-white shadow-lg flex items-center justify-center z-10">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center ${step.color}`}>
                      <step.icon className="h-6 w-6" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className={`ml-24 md:ml-0 md:w-[45%] p-6 bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                    <div className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-2">Étape {step.id}</div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">{step.title}</h3>
                    <p className="text-slate-600">{step.desc}</p>
                  </div>
                  
                  {/* Spacer for the other side */}
                  <div className="hidden md:block md:w-[45%]"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
