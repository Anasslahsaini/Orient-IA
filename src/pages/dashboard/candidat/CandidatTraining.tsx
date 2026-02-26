import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Video, Mic, PlayCircle, AlertCircle } from "lucide-react";
import { InterviewSimulator } from "@/components/interview/InterviewSimulator";

export function CandidatTraining() {
  const assistantId = "142e4321-ff3c-49e9-a87c-41faaf514437";

  return (
    <DashboardLayout role="candidat">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-slate-900">Studio d'Entraînement</h1>
        <p className="text-slate-500">Perfectionnez votre pitch et vos réponses avant le jour J.</p>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          
          {/* Interview Simulator Integration */}
          <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
            <div className="p-6 border-b border-slate-100">
              <h2 className="text-lg font-bold text-slate-900">Simulation : Entretien de Recrutement Structuré</h2>
              <p className="text-sm text-slate-500 mb-4">
                Notre recruteur IA mènera un entretien réaliste de 10-15 minutes, alternant questions techniques et comportementales, avant de vous fournir un feedback détaillé.
              </p>
              <div className="flex gap-2 text-xs text-slate-500 bg-slate-50 p-3 rounded-lg border border-slate-100 items-center">
                <span className="font-semibold text-indigo-600">Objectif :</span>
                <span className="flex-1">Évaluer vos compétences clés, votre parcours et votre capacité d'argumentation.</span>
                <span className="px-2 py-1 bg-purple-100 text-purple-700 rounded text-[10px] font-bold uppercase tracking-wide">
                  Powered by Claude Sonnet 4
                </span>
              </div>
            </div>
            <div className="p-8 bg-slate-50 flex justify-center">
              <InterviewSimulator assistantId={assistantId} />
            </div>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Vos derniers entraînements</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="flex items-center justify-between p-4 border border-slate-100 rounded-lg hover:bg-slate-50">
                    <div className="flex items-center gap-4">
                      <div className="h-10 w-10 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-600">
                        <PlayCircle className="h-6 w-6" />
                      </div>
                      <div>
                        <p className="font-medium text-slate-900">Entraînement #{i}</p>
                        <p className="text-xs text-slate-500">Il y a {i} jours • Score: {70 + i * 5}%</p>
                      </div>
                    </div>
                    <Button variant="ghost" size="sm">Voir l'analyse</Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6">
          <Card className="bg-indigo-50 border-indigo-100">
            <CardHeader>
              <CardTitle className="text-indigo-900 flex items-center gap-2">
                <AlertCircle className="h-5 w-5" />
                Conseils du Coach
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="bg-white p-3 rounded-lg shadow-sm">
                <p className="text-sm font-medium text-indigo-900 mb-1">Regardez la caméra</p>
                <p className="text-xs text-slate-600">Vous avez tendance à regarder votre écran. Fixez l'objectif pour créer du lien.</p>
              </div>
              <div className="bg-white p-3 rounded-lg shadow-sm">
                <p className="text-sm font-medium text-indigo-900 mb-1">Ralentissez le débit</p>
                <p className="text-xs text-slate-600">Vous parlez un peu vite (160 mots/min). Essayez de faire des pauses.</p>
              </div>
              <div className="bg-white p-3 rounded-lg shadow-sm">
                <p className="text-sm font-medium text-indigo-900 mb-1">Structurez votre réponse</p>
                <p className="text-xs text-slate-600">Utilisez la méthode STAR (Situation, Tâche, Action, Résultat).</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
}
