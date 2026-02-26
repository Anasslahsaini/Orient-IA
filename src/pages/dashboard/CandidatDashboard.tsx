import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Video, FileText, CheckCircle, Play, ArrowRight, Bot } from "lucide-react";
import { Link } from "react-router-dom";

export function CandidatDashboard() {
  return (
    <DashboardLayout role="candidat">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-slate-900">Bonjour, Alex ! 👋</h1>
        <p className="text-slate-500">Votre candidature pour le poste de <span className="font-medium text-slate-900">Product Designer</span> avance bien.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Status */}
        <div className="lg:col-span-2 space-y-6">
          {/* Next Step Card */}
          <Card className="border-indigo-100 bg-indigo-50/50">
            <CardContent className="p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center gap-6">
              <div className="h-16 w-16 rounded-full bg-indigo-100 flex items-center justify-center shrink-0 border-4 border-white shadow-sm">
                <Video className="h-8 w-8 text-indigo-600" />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xs font-bold uppercase tracking-wider text-indigo-600 bg-indigo-100 px-2 py-0.5 rounded">Prochaine étape</span>
                  <span className="text-xs text-slate-500">À faire avant le 24 Oct</span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Entretien Vidéo Différé</h3>
                <p className="text-slate-600 text-sm mb-4">
                  Présentez-vous en vidéo et répondez à 3 questions clés pour le poste.
                  Vous pouvez vous entraîner autant de fois que vous voulez avant d'enregistrer.
                </p>
                <div className="flex gap-3">
                  <Button className="bg-indigo-600 hover:bg-indigo-700 text-white" asChild>
                    <Link to="/candidat/entretien/1">
                      <Play className="mr-2 h-4 w-4" />
                      Commencer l'entretien
                    </Link>
                  </Button>
                  <Button variant="outline" className="bg-white" asChild>
                    <Link to="/candidat/entrainement">
                      M'entraîner d'abord
                    </Link>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Timeline */}
          <Card>
            <CardHeader>
              <CardTitle>Votre Parcours</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="relative pl-8 space-y-8 before:absolute before:left-3 before:top-2 before:bottom-2 before:w-0.5 before:bg-slate-100">
                <div className="relative">
                  <div className="absolute -left-[2.15rem] top-1 h-6 w-6 rounded-full bg-green-500 border-4 border-white shadow-sm flex items-center justify-center">
                    <CheckCircle className="h-3 w-3 text-white" />
                  </div>
                  <h4 className="font-semibold text-slate-900">Candidature envoyée</h4>
                  <p className="text-sm text-slate-500">Le 12 Octobre 2024</p>
                </div>
                
                <div className="relative">
                  <div className="absolute -left-[2.15rem] top-1 h-6 w-6 rounded-full bg-indigo-600 border-4 border-white shadow-sm flex items-center justify-center animate-pulse">
                    <div className="h-2 w-2 bg-white rounded-full" />
                  </div>
                  <h4 className="font-semibold text-indigo-900">Entretien Vidéo</h4>
                  <p className="text-sm text-indigo-600 font-medium">En attente de votre réponse</p>
                </div>

                <div className="relative opacity-50">
                  <div className="absolute -left-[2.15rem] top-1 h-6 w-6 rounded-full bg-slate-200 border-4 border-white shadow-sm" />
                  <h4 className="font-semibold text-slate-900">Entretien Manager</h4>
                  <p className="text-sm text-slate-500">À venir</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Sidebar Resources */}
        <div className="space-y-6">
          <Card className="bg-gradient-to-br from-slate-900 to-slate-800 text-white border-none">
            <CardContent className="p-6">
              <div className="h-10 w-10 bg-white/10 rounded-lg flex items-center justify-center mb-4">
                <Bot className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-lg font-bold mb-2">Coach IA Orient'IA</h3>
              <p className="text-slate-300 text-sm mb-4">
                "Je peux t'aider à préparer tes réponses pour l'entretien ou t'en dire plus sur la culture de l'entreprise."
              </p>
              <div className="bg-white/10 rounded-lg p-3 mb-4 text-xs text-slate-300 italic">
                "Quelles sont les valeurs de l'entreprise ?"
              </div>
              <Button variant="secondary" className="w-full bg-white text-slate-900 hover:bg-slate-100">
                Discuter avec l'IA
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-base">Documents utiles</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <a href="#" className="flex items-center p-3 rounded-lg hover:bg-slate-50 transition-colors group border border-transparent hover:border-slate-100">
                <FileText className="h-5 w-5 text-slate-400 group-hover:text-indigo-600 mr-3" />
                <span className="text-sm font-medium text-slate-700 group-hover:text-slate-900">Fiche de poste.pdf</span>
              </a>
              <a href="#" className="flex items-center p-3 rounded-lg hover:bg-slate-50 transition-colors group border border-transparent hover:border-slate-100">
                <FileText className="h-5 w-5 text-slate-400 group-hover:text-indigo-600 mr-3" />
                <span className="text-sm font-medium text-slate-700 group-hover:text-slate-900">Guide Culture.pdf</span>
              </a>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
}
