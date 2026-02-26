import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle2, MessageSquare, Calendar, User, AlertCircle } from "lucide-react";

const mentees = [
  { 
    id: 1, 
    name: "Léa Dubois", 
    role: "Junior Designer", 
    progress: 75, 
    status: "En bonne voie", 
    nextTask: "Validation maquette",
    lastCheckin: "Hier" 
  },
  { 
    id: 2, 
    name: "Marc Alibert", 
    role: "Sales Associate", 
    progress: 30, 
    status: "Besoin d'aide", 
    nextTask: "Formation CRM",
    lastCheckin: "Il y a 3 jours" 
  },
];

export function TuteurDashboard() {
  return (
    <DashboardLayout role="tuteur">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-slate-900">Espace Tuteur</h1>
        <p className="text-slate-500">Suivez l'intégration de vos nouvelles recrues.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Mentees List */}
        <div className="lg:col-span-2 space-y-6">
          <h2 className="text-lg font-semibold text-slate-900">Vos Mentorés Actifs</h2>
          
          {mentees.map((mentee) => (
            <Card key={mentee.id} className="overflow-hidden">
              <div className="p-6">
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center gap-4">
                    <div className="h-12 w-12 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700 font-bold text-lg">
                      {mentee.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-slate-900">{mentee.name}</h3>
                      <p className="text-slate-500">{mentee.role}</p>
                    </div>
                  </div>
                  <div className={`px-3 py-1 rounded-full text-sm font-medium flex items-center gap-2
                    ${mentee.status === 'En bonne voie' ? 'bg-green-50 text-green-700' : 'bg-orange-50 text-orange-700'}`}>
                    {mentee.status === 'En bonne voie' ? <CheckCircle2 className="h-4 w-4" /> : <AlertCircle className="h-4 w-4" />}
                    {mentee.status}
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-slate-600 font-medium">Progression Onboarding</span>
                      <span className="text-slate-900 font-bold">{mentee.progress}%</span>
                    </div>
                    <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-emerald-500 rounded-full" 
                        style={{ width: `${mentee.progress}%` }}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 pt-4 border-t border-slate-100">
                    <div>
                      <p className="text-xs text-slate-400 uppercase tracking-wider font-semibold">Prochaine étape</p>
                      <p className="text-sm font-medium text-slate-900 mt-1">{mentee.nextTask}</p>
                    </div>
                    <div>
                      <p className="text-xs text-slate-400 uppercase tracking-wider font-semibold">Dernier point</p>
                      <p className="text-sm font-medium text-slate-900 mt-1">{mentee.lastCheckin}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-slate-50 px-6 py-4 flex items-center justify-between border-t border-slate-100">
                <Button variant="outline" size="sm" className="text-slate-600">
                  <Calendar className="mr-2 h-4 w-4" />
                  Planifier un point
                </Button>
                <Button size="sm" className="bg-emerald-600 hover:bg-emerald-700 text-white">
                  <MessageSquare className="mr-2 h-4 w-4" />
                  Envoyer un feedback
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {/* Sidebar Actions */}
        <div className="space-y-6">
          <Card className="bg-indigo-900 text-white border-none">
            <CardContent className="p-6">
              <h3 className="text-lg font-bold mb-2">Besoin d'aide ?</h3>
              <p className="text-indigo-200 text-sm mb-4">
                Consultez le guide du tuteur pour réussir l'intégration de vos collaborateurs.
              </p>
              <Button variant="secondary" className="w-full bg-white text-indigo-900 hover:bg-indigo-50">
                Voir le guide
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-base">Rappels</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="h-2 w-2 rounded-full bg-red-500 mt-2 shrink-0" />
                <p className="text-sm text-slate-600">Valider la période d'essai de <span className="font-semibold text-slate-900">Marc</span> avant vendredi.</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="h-2 w-2 rounded-full bg-blue-500 mt-2 shrink-0" />
                <p className="text-sm text-slate-600">Préparer le bilan mensuel pour <span className="font-semibold text-slate-900">Léa</span>.</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
}
