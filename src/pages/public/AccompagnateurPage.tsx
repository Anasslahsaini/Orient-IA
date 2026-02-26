import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { Users, BarChart, Target, Award } from "lucide-react";

export function AccompagnateurPage() {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 antialiased">
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="text-4xl font-bold text-slate-900 mb-6">
              Donnez des super-pouvoirs à vos accompagnements
            </h1>
            <p className="text-xl text-slate-600 mb-8">
              Missions Locales, Écoles, Associations : Pilotez l'insertion de vos jeunes avec des données réelles et des outils modernes.
            </p>
            <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-white">
              Découvrir la console Tuteur
            </Button>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
            <div className="order-2 md:order-1">
              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="h-12 w-12 bg-emerald-100 rounded-xl flex items-center justify-center shrink-0 text-emerald-600">
                    <Users className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Suivi des affiliés</h3>
                    <p className="text-slate-600">
                      Visualisez en un coup d'œil l'avancement de tous vos jeunes. Qui postule ? Qui s'entraîne ? Qui a besoin d'aide ?
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="h-12 w-12 bg-blue-100 rounded-xl flex items-center justify-center shrink-0 text-blue-600">
                    <BarChart className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Statistiques de réussite</h3>
                    <p className="text-slate-600">
                      Mesurez l'impact de vos actions. Taux d'embauche, progression des soft skills, assiduité sur la plateforme.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="h-12 w-12 bg-purple-100 rounded-xl flex items-center justify-center shrink-0 text-purple-600">
                    <Target className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Console de pilotage</h3>
                    <p className="text-slate-600">
                      Gérez vos cohortes, assignez des parcours spécifiques et exportez vos rapports d'activité en un clic.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="order-1 md:order-2">
               <div className="aspect-square bg-emerald-50 rounded-2xl flex items-center justify-center p-8 border border-emerald-100">
                  <Award className="h-32 w-32 text-emerald-200" />
               </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
