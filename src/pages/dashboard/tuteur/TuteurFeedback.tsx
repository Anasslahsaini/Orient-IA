import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { MessageSquare, Send } from "lucide-react";

export function TuteurFeedback() {
  return (
    <DashboardLayout role="tuteur">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-slate-900">Feedbacks & Suivi</h1>
        <p className="text-slate-500">Échangez avec vos mentorés et notez leur progression.</p>
      </div>

      <div className="grid md:grid-cols-3 gap-6 h-[600px]">
        {/* List of Mentees */}
        <Card className="col-span-1 overflow-hidden flex flex-col">
          <CardHeader className="pb-2 border-b border-slate-100">
            <CardTitle className="text-lg">Mentorés</CardTitle>
          </CardHeader>
          <div className="flex-1 overflow-y-auto p-2 space-y-1">
            {["Thomas Dubreuil", "Alice Martin", "Lucas Bernard", "Sophie Petit"].map((name, i) => (
              <button key={i} className={`w-full text-left p-3 rounded-lg flex items-center gap-3 transition-colors ${i === 0 ? 'bg-emerald-50 border border-emerald-100' : 'hover:bg-slate-50'}`}>
                <div className="h-8 w-8 rounded-full bg-slate-200 flex items-center justify-center text-xs font-bold text-slate-600">
                  {name.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <p className="text-sm font-medium text-slate-900">{name}</p>
                  <p className="text-xs text-slate-500">Dernier msg: 2j</p>
                </div>
              </button>
            ))}
          </div>
        </Card>

        {/* Chat / Feedback Area */}
        <Card className="col-span-2 flex flex-col">
          <CardHeader className="border-b border-slate-100 flex flex-row items-center justify-between py-3">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700 font-bold">
                TD
              </div>
              <div>
                <CardTitle className="text-base">Thomas Dubreuil</CardTitle>
                <p className="text-xs text-slate-500">En recherche active</p>
              </div>
            </div>
            <Button variant="outline" size="sm">Voir Profil</Button>
          </CardHeader>
          
          <div className="flex-1 bg-slate-50 p-4 overflow-y-auto space-y-4">
            <div className="flex justify-start">
              <div className="bg-white p-3 rounded-lg rounded-tl-none shadow-sm max-w-[80%]">
                <p className="text-sm text-slate-800">Bonjour, j'ai passé l'entretien vidéo hier. Je n'étais pas très à l'aise sur la question des défauts.</p>
                <span className="text-xs text-slate-400 mt-1 block">10:30</span>
              </div>
            </div>
            <div className="flex justify-end">
              <div className="bg-emerald-600 p-3 rounded-lg rounded-tr-none shadow-sm max-w-[80%]">
                <p className="text-sm text-white">C'est normal ! L'important est de montrer que tu en as conscience et que tu travailles dessus. On peut refaire une simulation si tu veux.</p>
                <span className="text-xs text-emerald-200 mt-1 block">10:45</span>
              </div>
            </div>
          </div>

          <div className="p-4 border-t border-slate-100 bg-white">
            <div className="flex gap-2">
              <Textarea placeholder="Écrivez votre message..." className="min-h-[50px] resize-none" />
              <Button className="bg-emerald-600 hover:bg-emerald-700 text-white h-auto">
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </DashboardLayout>
  );
}
