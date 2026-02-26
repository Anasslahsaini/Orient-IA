import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Bell, CheckCircle, Clock, MessageSquare, Briefcase } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const notifications = [
  {
    id: 1,
    type: "offer",
    title: "Nouvelle offre correspondante",
    message: "TechCorp recherche un Product Designer. Cela correspond à 95% de votre profil !",
    time: "Il y a 2h",
    read: false,
  },
  {
    id: 2,
    type: "message",
    title: "Message de votre Tuteur",
    message: "Bravo pour ton dernier entraînement, tu as fait de gros progrès sur la posture.",
    time: "Il y a 1 jour",
    read: true,
  },
  {
    id: 3,
    type: "system",
    title: "Profil complété",
    message: "Votre CV a été analysé avec succès. Vous pouvez maintenant postuler en un clic.",
    time: "Il y a 2 jours",
    read: true,
  },
];

export function CandidatNotifications() {
  return (
    <DashboardLayout role="candidat">
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Notifications</h1>
          <p className="text-slate-500">Restez informé de votre activité et des opportunités.</p>
        </div>
        <Button variant="outline">Tout marquer comme lu</Button>
      </div>

      <div className="max-w-3xl mx-auto space-y-4">
        {notifications.map((notif) => (
          <Card key={notif.id} className={`transition-colors ${notif.read ? 'bg-white' : 'bg-indigo-50 border-indigo-100'}`}>
            <CardContent className="p-4 flex items-start gap-4">
              <div className={`h-10 w-10 rounded-full flex items-center justify-center shrink-0
                ${notif.type === 'offer' ? 'bg-green-100 text-green-600' : 
                  notif.type === 'message' ? 'bg-blue-100 text-blue-600' : 'bg-slate-100 text-slate-600'}`}>
                {notif.type === 'offer' && <Briefcase className="h-5 w-5" />}
                {notif.type === 'message' && <MessageSquare className="h-5 w-5" />}
                {notif.type === 'system' && <CheckCircle className="h-5 w-5" />}
              </div>
              
              <div className="flex-1">
                <div className="flex items-center justify-between mb-1">
                  <h3 className="font-semibold text-slate-900">{notif.title}</h3>
                  <span className="text-xs text-slate-500 flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    {notif.time}
                  </span>
                </div>
                <p className="text-sm text-slate-600 mb-2">{notif.message}</p>
                {!notif.read && (
                  <Badge variant="default" className="bg-indigo-600 hover:bg-indigo-700">Non lu</Badge>
                )}
              </div>
            </CardContent>
          </Card>
        ))}

        {notifications.length === 0 && (
          <div className="text-center py-12">
            <Bell className="h-12 w-12 text-slate-300 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-slate-900">Aucune notification</h3>
            <p className="text-slate-500">Vous êtes à jour !</p>
          </div>
        )}
      </div>
    </DashboardLayout>
  );
}
