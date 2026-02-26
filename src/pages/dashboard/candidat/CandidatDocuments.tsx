import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, Upload, Download, Trash2, CheckCircle } from "lucide-react";

export function CandidatDocuments() {
  return (
    <DashboardLayout role="candidat">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-slate-900">Mes Documents</h1>
        <p className="text-slate-500">Gérez vos CVs et lettres de motivation.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle>CVs</CardTitle>
            <Button size="sm" variant="outline">
              <Upload className="mr-2 h-4 w-4" />
              Importer
            </Button>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between p-4 border border-slate-100 rounded-lg bg-slate-50">
              <div className="flex items-center gap-3">
                <FileText className="h-8 w-8 text-indigo-600" />
                <div>
                  <p className="font-medium text-slate-900">CV_2024_Final.pdf</p>
                  <p className="text-xs text-slate-500">Ajouté le 12 Oct 2024</p>
                </div>
              </div>
              <div className="flex gap-2">
                <Button variant="ghost" size="icon" className="text-slate-400 hover:text-slate-600">
                  <Download className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="icon" className="text-slate-400 hover:text-red-600">
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            </div>
            
            <div className="p-4 border-2 border-dashed border-slate-200 rounded-lg flex flex-col items-center justify-center text-center py-8 hover:bg-slate-50 transition-colors cursor-pointer">
              <Upload className="h-8 w-8 text-slate-400 mb-2" />
              <p className="text-sm font-medium text-slate-600">Glissez votre CV ici</p>
              <p className="text-xs text-slate-400">PDF, DOCX jusqu'à 5Mo</p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Lettres de Motivation IA</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="bg-indigo-50 p-4 rounded-lg border border-indigo-100 mb-4">
              <h4 className="font-bold text-indigo-900 mb-2 flex items-center gap-2">
                <CheckCircle className="h-4 w-4" />
                Générateur IA
              </h4>
              <p className="text-sm text-indigo-700 mb-4">
                Créez une lettre de motivation sur-mesure en collant simplement l'offre d'emploi.
              </p>
              <Button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white">
                Générer une nouvelle lettre
              </Button>
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between p-3 hover:bg-slate-50 rounded-lg transition-colors">
                <div className="flex items-center gap-3">
                  <FileText className="h-5 w-5 text-slate-400" />
                  <span className="text-sm font-medium">Lettre_ProductDesigner.pdf</span>
                </div>
                <Button variant="ghost" size="sm">Voir</Button>
              </div>
              <div className="flex items-center justify-between p-3 hover:bg-slate-50 rounded-lg transition-colors">
                <div className="flex items-center gap-3">
                  <FileText className="h-5 w-5 text-slate-400" />
                  <span className="text-sm font-medium">Lettre_UXResearcher.pdf</span>
                </div>
                <Button variant="ghost" size="sm">Voir</Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
}
