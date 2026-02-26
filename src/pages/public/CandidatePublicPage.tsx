import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { Video, FileText, MessageSquare, Briefcase, Share2 } from "lucide-react";

export function CandidatePublicPage() {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 antialiased">
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row items-center gap-12 mb-24">
            <div className="flex-1">
              <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6 tracking-tight">
                Décrochez le job de vos rêves avec votre <span className="text-indigo-600">Copilote IA</span>
              </h1>
              <p className="text-xl text-slate-600 mb-8">
                Préparez-vous, entraînez-vous et postulez avec des outils de pro. 100% Gratuit pour les candidats.
              </p>
              <div className="flex gap-4">
                <Button size="lg" className="bg-indigo-600 hover:bg-indigo-700 text-white">
                  Créer mon compte gratuit
                </Button>
              </div>
            </div>
            <div className="flex-1 w-full">
              <div className="aspect-video bg-slate-100 rounded-2xl shadow-2xl overflow-hidden relative">
                 {/* Placeholder for Candidate Dashboard UI */}
                 <div className="absolute inset-0 flex items-center justify-center bg-slate-50">
                    <span className="text-slate-400 font-medium">Interface Candidat</span>
                 </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-24">
            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="h-12 w-12 bg-blue-100 rounded-xl flex items-center justify-center shrink-0 text-blue-600">
                  <FileText className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Candidature Assistée</h3>
                  <p className="text-slate-600">
                    Analysez la cohérence entre votre CV et l'offre. Générez une lettre de motivation sur-mesure en un clic.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="h-12 w-12 bg-purple-100 rounded-xl flex items-center justify-center shrink-0 text-purple-600">
                  <Video className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Studio Pitch & Simulateur</h3>
                  <p className="text-slate-600">
                    Entraînez-vous face à la caméra. Notre IA analyse votre débit, vos mots-clés et votre posture pour vous améliorer.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="h-12 w-12 bg-green-100 rounded-xl flex items-center justify-center shrink-0 text-green-600">
                  <MessageSquare className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Suivi d'Intégration</h3>
                  <p className="text-slate-600">
                    Une fois en poste, bénéficiez d'un suivi personnalisé pour réussir votre période d'essai sans stress.
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-slate-50 rounded-3xl p-8 border border-slate-100">
              <h3 className="text-2xl font-bold mb-6">Fonctionnalités Premium</h3>
              <ul className="space-y-4">
                <li className="flex items-center gap-3 p-4 bg-white rounded-xl shadow-sm">
                  <Share2 className="h-5 w-5 text-indigo-600" />
                  <span className="font-medium">Génération de lien Profil Orient'IA (partage LinkedIn)</span>
                </li>
                <li className="flex items-center gap-3 p-4 bg-white rounded-xl shadow-sm">
                  <Briefcase className="h-5 w-5 text-indigo-600" />
                  <span className="font-medium">Accès aux offres exclusives partenaires</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
