import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar as CalendarIcon, Clock, MapPin, User } from "lucide-react";

export function TuteurPlanning() {
  return (
    <DashboardLayout role="tuteur">
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Planning</h1>
          <p className="text-slate-500">Gérez vos rendez-vous de suivi et ateliers.</p>
        </div>
        <Button className="bg-emerald-600 hover:bg-emerald-700 text-white">
          <CalendarIcon className="mr-2 h-4 w-4" />
          Nouveau Rendez-vous
        </Button>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Prochains événements</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {[
                { title: "Point Hebdo - Thomas", time: "10:00 - 10:30", type: "Visio", color: "bg-blue-100 text-blue-700" },
                { title: "Atelier CV Collectif", time: "14:00 - 16:00", type: "Présentiel", color: "bg-purple-100 text-purple-700" },
                { title: "Bilan mensuel - Alice", time: "16:30 - 17:30", type: "Visio", color: "bg-blue-100 text-blue-700" },
              ].map((event, i) => (
                <div key={i} className="flex items-start gap-4 p-4 border border-slate-100 rounded-lg hover:bg-slate-50 transition-colors">
                  <div className="flex flex-col items-center justify-center w-16 h-16 bg-slate-100 rounded-lg text-slate-600">
                    <span className="text-xs font-bold uppercase">Oct</span>
                    <span className="text-xl font-bold">24</span>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <h3 className="font-bold text-slate-900">{event.title}</h3>
                      <span className={`text-xs px-2 py-1 rounded-full font-medium ${event.color}`}>
                        {event.type}
                      </span>
                    </div>
                    <div className="flex items-center gap-4 text-sm text-slate-500">
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        {event.time}
                      </div>
                      <div className="flex items-center gap-1">
                        <User className="h-4 w-4" />
                        3 participants
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        <div>
          <Card>
            <CardHeader>
              <CardTitle>Calendrier</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="bg-slate-50 rounded-lg p-4 text-center text-slate-500 text-sm">
                [Composant Calendrier Interactif]
                <br />
                Intégration Google Calendar / Outlook
              </div>
              <div className="mt-6 space-y-4">
                <h4 className="font-medium text-slate-900">Demandes en attente</h4>
                <div className="p-3 border border-amber-100 bg-amber-50 rounded-lg">
                  <p className="text-sm font-medium text-amber-900">Lucas B. demande un RDV</p>
                  <p className="text-xs text-amber-700 mb-2">Pour : Préparation entretien</p>
                  <div className="flex gap-2">
                    <Button size="sm" className="w-full bg-amber-600 hover:bg-amber-700 text-white h-7 text-xs">Accepter</Button>
                    <Button size="sm" variant="outline" className="w-full h-7 text-xs bg-white">Refuser</Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
}
