import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { Check, Shield, Zap, Users, BarChart } from "lucide-react";

export function EnterprisePage() {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 antialiased">
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 md:px-6">
          {/* Hero */}
          <div className="text-center max-w-4xl mx-auto mb-20">
            <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6 tracking-tight">
              Optimisez vos recrutements et réduisez le turnover
            </h1>
            <p className="text-xl text-slate-600 mb-8">
              Une suite d'outils IA pour les équipes RH qui veulent se concentrer sur l'humain, pas sur l'administratif.
            </p>
            <div className="flex justify-center gap-4">
              <Button size="lg" className="bg-indigo-600 hover:bg-indigo-700 text-white">
                Demander une démo
              </Button>
              <Button variant="outline" size="lg">
                Voir les tarifs
              </Button>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
            {[
              {
                title: "Candidathèque Vidéo",
                desc: "Accédez aux pitchs vidéo de 2 minutes des candidats. Filtrez par compétences et soft skills.",
                icon: Users
              },
              {
                title: "Résumé IA Automatique",
                desc: "Obtenez une synthèse instantanée des entretiens et des CVs. Gagnez 70% de temps de lecture.",
                icon: Zap
              },
              {
                title: "Dashboard de Rétention",
                desc: "Suivez le moral des équipes et identifiez les risques de départ avant qu'il ne soit trop tard.",
                icon: BarChart
              },
              {
                title: "Alertes Signaux Faibles",
                desc: "Soyez notifié dès qu'un collaborateur montre des signes de désengagement ou de difficulté.",
                icon: Shield
              },
              {
                title: "Pilotage Performance",
                desc: "Analysez vos KPIs de recrutement : temps d'embauche, coût, qualité des profils.",
                icon: BarChart
              },
              {
                title: "Réduction Turnover",
                desc: "Améliorez l'intégration pour fidéliser vos talents dès les premiers mois.",
                icon: Users
              }
            ].map((feature, i) => (
              <div key={i} className="p-6 rounded-2xl border border-slate-200 hover:shadow-lg transition-shadow">
                <div className="h-12 w-12 bg-indigo-50 rounded-xl flex items-center justify-center mb-4 text-indigo-600">
                  <feature.icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-slate-600">{feature.desc}</p>
              </div>
            ))}
          </div>

          {/* Social Proof / Stats */}
          <div className="bg-slate-900 rounded-3xl p-12 text-white text-center mb-24">
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <div className="text-4xl font-bold text-indigo-400 mb-2">-40%</div>
                <div className="text-slate-300">de turnover en période d'essai</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-indigo-400 mb-2">x2</div>
                <div className="text-slate-300">vitesse de qualification</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-indigo-400 mb-2">95%</div>
                <div className="text-slate-300">de satisfaction candidats</div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
