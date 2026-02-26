import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Users, Eye, MoreHorizontal, Edit, Trash2, CheckCircle } from "lucide-react";
import { Link, useParams } from "react-router-dom";

export function RHOfferDetail() {
  const { id } = useParams();

  const offer = {
    id: id,
    title: "Product Designer Senior",
    department: "Design",
    location: "Paris (Hybride)",
    type: "CDI",
    salary: "55k - 65k",
    description: "Nous recherchons un Product Designer expérimenté pour rejoindre notre équipe...",
    requirements: ["5+ ans d'expérience", "Maîtrise de Figma", "Expérience en SaaS B2B"],
    candidates: [
      { id: 1, name: "Alice Martin", status: "Entretien Vidéo", score: 85 },
      { id: 2, name: "Thomas Dubreuil", status: "À revérifier", score: 92 },
      { id: 5, name: "Emma Watson", status: "Nouveau", score: 88 },
    ]
  };

  return (
    <DashboardLayout role="rh">
      <div className="mb-6">
        <Link to="/rh/offres" className="text-sm text-slate-500 hover:text-indigo-600 flex items-center gap-1 mb-4">
          <ArrowLeft className="h-4 w-4" />
          Retour aux offres
        </Link>
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold text-slate-900 flex items-center gap-3">
              {offer.title}
              <span className="text-sm font-medium px-2 py-1 bg-green-100 text-green-700 rounded-full">Active</span>
            </h1>
            <p className="text-slate-500">{offer.department} • {offer.location} • {offer.type}</p>
          </div>
          <div className="flex gap-3">
            <Button variant="outline">
              <Edit className="mr-2 h-4 w-4" />
              Modifier
            </Button>
            <Button variant="destructive" className="bg-red-50 text-red-600 hover:bg-red-100 border-red-100">
              <Trash2 className="mr-2 h-4 w-4" />
              Clôturer
            </Button>
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Candidats ({offer.candidates.length})</CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <div className="divide-y divide-slate-100">
                {offer.candidates.map((candidate) => (
                  <div key={candidate.id} className="p-4 flex items-center justify-between hover:bg-slate-50 transition-colors">
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 font-bold text-sm">
                        {candidate.name.split(' ').map(n => n[0]).join('')}
                      </div>
                      <div>
                        <p className="font-medium text-slate-900">{candidate.name}</p>
                        <p className="text-xs text-slate-500">Score IA: <span className="font-bold text-indigo-600">{candidate.score}%</span></p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <span className={`text-xs px-2 py-1 rounded-full font-medium
                        ${candidate.status === 'Entretien Vidéo' ? 'bg-blue-50 text-blue-700' : 
                          candidate.status === 'À revérifier' ? 'bg-yellow-50 text-yellow-700' : 'bg-green-50 text-green-700'}`}>
                        {candidate.status}
                      </span>
                      <Button variant="ghost" size="sm" asChild>
                        <Link to={`/rh/candidats/${candidate.id}`}>Voir</Link>
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Détails de l'offre</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h4 className="font-semibold text-slate-900 mb-2">Description</h4>
                <p className="text-slate-600 text-sm leading-relaxed">{offer.description}</p>
              </div>
              <div>
                <h4 className="font-semibold text-slate-900 mb-2">Pré-requis</h4>
                <ul className="list-disc list-inside text-sm text-slate-600 space-y-1">
                  {offer.requirements.map((req, i) => (
                    <li key={i}>{req}</li>
                  ))}
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Statistiques</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-between items-center p-3 bg-slate-50 rounded-lg">
                <span className="text-sm text-slate-600">Vues</span>
                <span className="font-bold text-slate-900">145</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-slate-50 rounded-lg">
                <span className="text-sm text-slate-600">Candidatures</span>
                <span className="font-bold text-slate-900">12</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-slate-50 rounded-lg">
                <span className="text-sm text-slate-600">Taux de conversion</span>
                <span className="font-bold text-green-600">8.2%</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
}
