import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Video, Mic, PlayCircle, AlertCircle, ArrowLeft } from "lucide-react";
import { Link, useParams } from "react-router-dom";

export function CandidatInterview() {
  const { id } = useParams();

  return (
    <DashboardLayout role="candidat">
      <div className="mb-6">
        <Link to="/candidat" className="text-sm text-slate-500 hover:text-indigo-600 flex items-center gap-1 mb-4">
          <ArrowLeft className="h-4 w-4" />
          Retour au tableau de bord
        </Link>
        <h1 className="text-2xl font-bold text-slate-900">Entretien Vidéo Différé</h1>
        <p className="text-slate-500">Poste : Product Designer</p>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          <Card className="bg-slate-900 text-white overflow-hidden">
            <div className="aspect-video bg-slate-800 relative flex items-center justify-center">
              <div className="text-center">
                <div className="h-20 w-20 rounded-full bg-red-600 flex items-center justify-center mx-auto mb-6 cursor-pointer hover:bg-red-500 transition-colors shadow-lg animate-pulse">
                  <div className="h-8 w-8 bg-white rounded-sm"></div>
                </div>
                <p className="font-medium text-lg">Question 1/3</p>
                <p className="text-slate-400 mt-2 max-w-md mx-auto">"Pouvez-vous nous présenter votre parcours et ce qui vous motive pour ce poste ?"</p>
              </div>
              <div className="absolute top-4 right-4 bg-black/50 px-3 py-1 rounded-full text-sm font-mono text-red-400 flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-red-500 animate-pulse"></div>
                REC 00:45 / 02:00
              </div>
            </div>
            <CardContent className="p-6 flex justify-between items-center">
              <div className="text-sm text-slate-400">
                <p>Assurez-vous d'être dans un endroit calme.</p>
              </div>
              <div className="flex gap-4">
                <Button variant="outline" className="border-slate-700 text-white hover:bg-slate-800">
                  Recommencer
                </Button>
                <Button className="bg-green-600 hover:bg-green-700 text-white">
                  Valider et passer à la suivante
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6">
          <Card className="bg-indigo-50 border-indigo-100">
            <CardHeader>
              <CardTitle className="text-indigo-900 flex items-center gap-2">
                <AlertCircle className="h-5 w-5" />
                Conseils en direct
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="bg-white p-3 rounded-lg shadow-sm border-l-4 border-green-500">
                <p className="text-sm font-medium text-slate-900 mb-1">Bonne posture !</p>
                <p className="text-xs text-slate-600">Vous êtes bien centré et la lumière est bonne.</p>
              </div>
              <div className="bg-white p-3 rounded-lg shadow-sm border-l-4 border-amber-500">
                <p className="text-sm font-medium text-slate-900 mb-1">Attention au débit</p>
                <p className="text-xs text-slate-600">Prenez le temps de respirer entre vos phrases.</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Progression</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="h-8 w-8 rounded-full bg-indigo-600 text-white flex items-center justify-center font-bold text-sm">1</div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-slate-900">Présentation</p>
                  <p className="text-xs text-indigo-600 font-medium">En cours...</p>
                </div>
              </div>
              <div className="flex items-center gap-3 opacity-50">
                <div className="h-8 w-8 rounded-full bg-slate-200 text-slate-600 flex items-center justify-center font-bold text-sm">2</div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-slate-900">Expérience technique</p>
                  <p className="text-xs text-slate-500">À venir</p>
                </div>
              </div>
              <div className="flex items-center gap-3 opacity-50">
                <div className="h-8 w-8 rounded-full bg-slate-200 text-slate-600 flex items-center justify-center font-bold text-sm">3</div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-slate-900">Mise en situation</p>
                  <p className="text-xs text-slate-500">À venir</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
}
