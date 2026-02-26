import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Upload, Save } from "lucide-react";

export function RHSettings() {
  return (
    <DashboardLayout role="rh">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-slate-900">Paramètres RH</h1>
        <p className="text-slate-500">Configurez votre espace et vos préférences IA.</p>
      </div>

      <div className="grid gap-8 max-w-4xl">
        <Card>
          <CardHeader>
            <CardTitle>Base de Connaissance RAG</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-sm text-slate-600">
              Importez vos documents d'entreprise (PDF, DOCX) pour que l'IA puisse répondre aux questions des candidats sur votre culture, vos avantages, etc.
            </p>
            <div className="border-2 border-dashed border-slate-200 rounded-lg p-8 text-center hover:bg-slate-50 transition-colors cursor-pointer">
              <Upload className="h-8 w-8 text-slate-400 mx-auto mb-2" />
              <p className="text-sm font-medium text-slate-900">Glissez vos documents ici</p>
              <p className="text-xs text-slate-500">Livret d'accueil, Charte éthique, Grille de salaires...</p>
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between text-sm p-2 bg-slate-50 rounded">
                <span>Livret_Accueil_2024.pdf</span>
                <span className="text-green-600 text-xs font-medium">Indexé</span>
              </div>
              <div className="flex items-center justify-between text-sm p-2 bg-slate-50 rounded">
                <span>Politique_Teletravail.pdf</span>
                <span className="text-green-600 text-xs font-medium">Indexé</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Préférences de Recrutement</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label>Anonymisation des CVs</Label>
                <p className="text-sm text-slate-500">Masquer les noms et photos lors de la pré-sélection</p>
              </div>
              <Switch />
            </div>
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label>Réponse automatique IA</Label>
                <p className="text-sm text-slate-500">Envoyer un accusé de réception personnalisé par l'IA</p>
              </div>
              <Switch defaultChecked />
            </div>
            <div className="space-y-2">
              <Label>Signature des emails automatiques</Label>
              <Input defaultValue="L'équipe Recrutement Orient'IA" />
            </div>
            <Button className="bg-indigo-600 text-white">
              <Save className="mr-2 h-4 w-4" />
              Enregistrer les modifications
            </Button>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
}
