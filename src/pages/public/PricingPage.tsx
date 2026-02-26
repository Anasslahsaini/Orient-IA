import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

export function PricingPage() {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 antialiased">
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="text-4xl font-bold text-slate-900 mb-6">
              Des tarifs simples et transparents
            </h1>
            <p className="text-xl text-slate-600">
              Choisissez l'offre adaptée à vos besoins de recrutement.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Candidats */}
            <div className="rounded-2xl border border-slate-200 p-8 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold text-slate-900 mb-2">Candidats</h3>
              <div className="text-4xl font-bold mb-6">Gratuit</div>
              <p className="text-slate-600 mb-8">Pour booster votre carrière.</p>
              <Button variant="outline" className="w-full mb-8">S'inscrire</Button>
              <ul className="space-y-3 text-sm">
                <li className="flex items-center gap-2"><Check className="h-4 w-4 text-green-500" /> Candidature assistée IA</li>
                <li className="flex items-center gap-2"><Check className="h-4 w-4 text-green-500" /> Simulateur d'entretien</li>
                <li className="flex items-center gap-2"><Check className="h-4 w-4 text-green-500" /> Suivi d'intégration</li>
              </ul>
            </div>

            {/* Entreprises */}
            <div className="rounded-2xl border-2 border-indigo-600 p-8 shadow-xl relative">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-indigo-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                Populaire
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Entreprises</h3>
              <div className="text-4xl font-bold mb-1">Sur devis</div>
              <p className="text-sm text-slate-500 mb-6">Abonnement mensuel + prix par recrue</p>
              <Button className="w-full mb-8 bg-indigo-600 hover:bg-indigo-700 text-white">Demander une démo</Button>
              <ul className="space-y-3 text-sm">
                <li className="flex items-center gap-2"><Check className="h-4 w-4 text-green-500" /> Tout le parcours candidat</li>
                <li className="flex items-center gap-2"><Check className="h-4 w-4 text-green-500" /> Dashboard RH & Rétention</li>
                <li className="flex items-center gap-2"><Check className="h-4 w-4 text-green-500" /> Candidathèque vidéo</li>
                <li className="flex items-center gap-2"><Check className="h-4 w-4 text-green-500" /> Chatbot RAG entreprise</li>
              </ul>
            </div>

            {/* Institutions */}
            <div className="rounded-2xl border border-slate-200 p-8 hover:shadow-lg transition-shadow bg-slate-50">
              <h3 className="text-xl font-bold text-slate-900 mb-2">Institutions</h3>
              <div className="text-4xl font-bold mb-6">Licence</div>
              <p className="text-slate-600 mb-8">Pour les écoles et missions locales.</p>
              <Button variant="outline" className="w-full mb-8 bg-white">Contacter l'équipe</Button>
              <ul className="space-y-3 text-sm">
                <li className="flex items-center gap-2"><Check className="h-4 w-4 text-green-500" /> Console de pilotage</li>
                <li className="flex items-center gap-2"><Check className="h-4 w-4 text-green-500" /> Suivi des affiliés</li>
                <li className="flex items-center gap-2"><Check className="h-4 w-4 text-green-500" /> Statistiques de réussite</li>
              </ul>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
