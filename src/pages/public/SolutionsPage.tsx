import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { content } from "@/data/content";
import { CheckCircle2, Video, UserCheck, BarChart3, MessageSquare, FileText, Calendar, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";

export function SolutionsPage() {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 antialiased">
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Une solution 360° pour le recrutement
            </h1>
            <p className="text-xl text-slate-600">
              Découvrez comment Orient'IA transforme chaque étape du parcours candidat.
            </p>
          </div>

          {/* Phase 1 */}
          <section className="mb-24 scroll-mt-28" id="pre-embauche">
            <div className="bg-indigo-50 rounded-3xl p-8 md:p-12">
              <div className="flex flex-col md:flex-row gap-12 items-center">
                <div className="flex-1">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-100 text-indigo-700 text-sm font-medium mb-6">
                    Phase 1
                  </div>
                  <h2 className="text-3xl font-bold text-slate-900 mb-6">Pré-embauche : Préparation & Qualification</h2>
                  <p className="text-lg text-slate-600 mb-8">
                    Transformez vos candidats en profils qualifiés avant même le premier contact.
                  </p>
                  <ul className="space-y-4">
                    {[
                      "Analyse CV + Fiche de poste par IA",
                      "Génération de lettre de motivation personnalisée",
                      "Simulateur d'entretien vidéo avec feedback immédiat",
                      "Pitch vidéo de 2 minutes pour se démarquer",
                      "Planification intelligente d'entretien",
                      "Chat direct Tuteur / Candidat"
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <CheckCircle2 className="h-6 w-6 text-indigo-600 shrink-0" />
                        <span className="text-slate-700 font-medium">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex-1 w-full max-w-md">
                   <div className="aspect-square bg-white rounded-2xl shadow-xl flex items-center justify-center p-8">
                      <Video className="h-32 w-32 text-indigo-200" />
                   </div>
                </div>
              </div>
            </div>
          </section>

          {/* Phase 2 */}
          <section className="mb-24 scroll-mt-28" id="embauche">
            <div className="bg-white border border-slate-200 rounded-3xl p-8 md:p-12 shadow-lg">
              <div className="flex flex-col md:flex-row-reverse gap-12 items-center">
                <div className="flex-1">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-100 text-purple-700 text-sm font-medium mb-6">
                    Phase 2
                  </div>
                  <h2 className="text-3xl font-bold text-slate-900 mb-6">Embauche : Sélection & Analyse</h2>
                  <p className="text-lg text-slate-600 mb-8">
                    Identifiez les meilleurs talents grâce à une analyse objective et prédictive.
                  </p>
                  <ul className="space-y-4">
                    {[
                      "Entretien IA personnalisé selon le poste",
                      "Questions dynamiques générées en temps réel",
                      "Résumé automatique des entretiens",
                      "Score de compatibilité (Hard & Soft skills)",
                      "Dashboard de recrutement centralisé"
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <CheckCircle2 className="h-6 w-6 text-purple-600 shrink-0" />
                        <span className="text-slate-700 font-medium">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex-1 w-full max-w-md">
                   <div className="aspect-square bg-purple-50 rounded-2xl flex items-center justify-center p-8">
                      <UserCheck className="h-32 w-32 text-purple-200" />
                   </div>
                </div>
              </div>
            </div>
          </section>

          {/* Phase 3 */}
          <section className="mb-24 scroll-mt-28" id="post-embauche">
            <div className="bg-emerald-50 rounded-3xl p-8 md:p-12">
              <div className="flex flex-col md:flex-row gap-12 items-center">
                <div className="flex-1">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-700 text-sm font-medium mb-6">
                    Phase 3
                  </div>
                  <h2 className="text-3xl font-bold text-slate-900 mb-6">Post-embauche : Intégration & Rétention</h2>
                  <p className="text-lg text-slate-600 mb-8">
                    Assurez le succès de la période d'essai et fidélisez vos collaborateurs.
                  </p>
                  <ul className="space-y-4">
                    {[
                      "Chatbot interne RAG sur vos documents d'entreprise",
                      "Questionnaire hebdomadaire de moral (Pulse)",
                      "Alertes automatiques de risque de démission",
                      "Dashboard de rétention et KPI RH",
                      "Suivi d'intégration gamifié"
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <CheckCircle2 className="h-6 w-6 text-emerald-600 shrink-0" />
                        <span className="text-slate-700 font-medium">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex-1 w-full max-w-md">
                   <div className="aspect-square bg-white rounded-2xl shadow-xl flex items-center justify-center p-8">
                      <BarChart3 className="h-32 w-32 text-emerald-200" />
                   </div>
                </div>
              </div>
            </div>
          </section>

          <div className="text-center">
            <h2 className="text-2xl font-bold mb-6">Prêt à voir la solution en action ?</h2>
            <Button size="lg" className="bg-indigo-600 hover:bg-indigo-700 text-white">
              Réserver une démo personnalisée
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
