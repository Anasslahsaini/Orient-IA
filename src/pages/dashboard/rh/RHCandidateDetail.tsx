import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Video, FileText, CheckCircle, XCircle, MessageSquare, Download, ArrowLeft } from "lucide-react";
import { Link, useParams } from "react-router-dom";

export function RHCandidateDetail() {
  const { id } = useParams();
  
  // Mock data - in a real app, fetch based on ID
  const candidate = {
    id: id,
    name: "Alice Martin",
    role: "Product Designer",
    score: 85,
    status: "Entretien Vidéo",
    email: "alice.martin@email.com",
    phone: "+33 6 12 34 56 78",
    experience: "5 ans",
    skills: ["Figma", "UX Research", "Prototyping", "Design System"],
    summary: "Alice présente un profil très solide pour le poste. Son expérience en Design System est un atout majeur. Elle s'exprime clairement et montre une grande motivation.",
    strengths: ["Communication claire", "Expertise technique", "Esprit d'équipe"],
    weaknesses: ["Anglais à perfectionner", "Peu d'expérience en management"],
  };

  return (
    <DashboardLayout role="rh">
      <div className="mb-6">
        <Link to="/rh/candidats" className="text-sm text-slate-500 hover:text-indigo-600 flex items-center gap-1 mb-4">
          <ArrowLeft className="h-4 w-4" />
          Retour à la liste
        </Link>
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="h-16 w-16 rounded-full bg-slate-200 flex items-center justify-center text-slate-600 font-bold text-2xl">
              {candidate.name.split(' ').map(n => n[0]).join('')}
            </div>
            <div>
              <h1 className="text-2xl font-bold text-slate-900">{candidate.name}</h1>
              <p className="text-slate-500">{candidate.role} • {candidate.experience}</p>
            </div>
          </div>
          <div className="flex gap-3">
            <Button variant="outline" className="text-red-600 hover:text-red-700 hover:bg-red-50 border-red-200">
              <XCircle className="mr-2 h-4 w-4" />
              Refuser
            </Button>
            <Button className="bg-green-600 hover:bg-green-700 text-white">
              <CheckCircle className="mr-2 h-4 w-4" />
              Valider pour entretien
            </Button>
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-6">
          {/* Video Pitch */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Video className="h-5 w-5 text-indigo-600" />
                Pitch Vidéo
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="aspect-video bg-slate-900 rounded-lg flex items-center justify-center relative group cursor-pointer">
                <div className="h-16 w-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform">
                  <div className="h-0 w-0 border-t-[10px] border-t-transparent border-l-[20px] border-l-white border-b-[10px] border-b-transparent ml-1"></div>
                </div>
                <span className="absolute bottom-4 right-4 text-white text-sm font-medium bg-black/50 px-2 py-1 rounded">02:15</span>
              </div>
              <div className="mt-4 p-4 bg-slate-50 rounded-lg border border-slate-100">
                <h4 className="font-semibold text-slate-900 mb-2">Transcription IA</h4>
                <p className="text-sm text-slate-600 italic">
                  "Bonjour, je m'appelle Alice et je suis passionnée par le design produit depuis 5 ans. J'ai travaillé chez..."
                </p>
              </div>
            </CardContent>
          </Card>

          {/* AI Analysis */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="h-5 w-5 text-indigo-600" />
                Analyse IA
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h4 className="font-semibold text-slate-900 mb-2">Résumé</h4>
                <p className="text-slate-600 text-sm leading-relaxed">{candidate.summary}</p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-green-700 mb-2 flex items-center gap-2">
                    <CheckCircle className="h-4 w-4" /> Points Forts
                  </h4>
                  <ul className="space-y-1">
                    {candidate.strengths.map((s, i) => (
                      <li key={i} className="text-sm text-slate-600 flex items-start gap-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-green-500 mt-1.5 shrink-0"></span>
                        {s}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-amber-700 mb-2 flex items-center gap-2">
                    <XCircle className="h-4 w-4" /> Points de Vigilance
                  </h4>
                  <ul className="space-y-1">
                    {candidate.weaknesses.map((w, i) => (
                      <li key={i} className="text-sm text-slate-600 flex items-start gap-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-amber-500 mt-1.5 shrink-0"></span>
                        {w}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Score de Compatibilité</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <div className="relative h-32 w-32 mx-auto mb-4 flex items-center justify-center">
                <svg className="h-full w-full transform -rotate-90">
                  <circle cx="64" cy="64" r="60" stroke="#e2e8f0" strokeWidth="8" fill="none" />
                  <circle cx="64" cy="64" r="60" stroke="#4f46e5" strokeWidth="8" fill="none" strokeDasharray="377" strokeDashoffset={377 - (377 * candidate.score) / 100} strokeLinecap="round" />
                </svg>
                <span className="absolute text-3xl font-bold text-indigo-600">{candidate.score}%</span>
              </div>
              <p className="text-sm text-slate-500">Basé sur l'analyse du CV et de l'entretien vidéo par rapport à la fiche de poste.</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Documents</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg border border-slate-100">
                <div className="flex items-center gap-3">
                  <FileText className="h-5 w-5 text-slate-400" />
                  <span className="text-sm font-medium text-slate-700">CV_Alice_Martin.pdf</span>
                </div>
                <Button variant="ghost" size="icon" className="h-8 w-8">
                  <Download className="h-4 w-4" />
                </Button>
              </div>
              <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg border border-slate-100">
                <div className="flex items-center gap-3">
                  <FileText className="h-5 w-5 text-slate-400" />
                  <span className="text-sm font-medium text-slate-700">Lettre_Motivation.pdf</span>
                </div>
                <Button variant="ghost" size="icon" className="h-8 w-8">
                  <Download className="h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Contact</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <p className="text-xs text-slate-500 uppercase font-semibold">Email</p>
                <a href={`mailto:${candidate.email}`} className="text-sm text-indigo-600 hover:underline">{candidate.email}</a>
              </div>
              <div>
                <p className="text-xs text-slate-500 uppercase font-semibold">Téléphone</p>
                <a href={`tel:${candidate.phone}`} className="text-sm text-slate-900">{candidate.phone}</a>
              </div>
              <Button className="w-full" variant="outline">
                <MessageSquare className="mr-2 h-4 w-4" />
                Envoyer un message
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
}
