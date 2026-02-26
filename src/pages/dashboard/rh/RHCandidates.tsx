import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Filter, Play, FileText, MoreHorizontal } from "lucide-react";
import { Link } from "react-router-dom";

const candidates = [
  { id: 1, name: "Alice Martin", role: "Product Designer", score: 85, status: "Entretien Vidéo", tags: ["Figma", "UX Research", "Prototyping"] },
  { id: 2, name: "Thomas Dubreuil", role: "Dev Frontend", score: 92, status: "À revérifier", tags: ["React", "TypeScript", "Tailwind"] },
  { id: 3, name: "Sarah Connor", role: "Chef de Projet", score: 78, status: "Nouveau", tags: ["Agile", "Jira", "Communication"] },
  { id: 4, name: "Jean Dupont", role: "Dev Backend", score: 45, status: "Rejeté", tags: ["Node.js", "SQL", "API"] },
  { id: 5, name: "Emma Watson", role: "Marketing Manager", score: 88, status: "Entretien Vidéo", tags: ["SEO", "Content", "Analytics"] },
];

export function RHCandidates() {
  return (
    <DashboardLayout role="rh">
      <div className="mb-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Candidathèque</h1>
          <p className="text-slate-500">Gérez et analysez vos viviers de talents.</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">Exporter</Button>
          <Button>Ajouter un candidat</Button>
        </div>
      </div>

      <div className="mb-6 flex gap-4">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
          <Input placeholder="Rechercher par nom, compétence..." className="pl-10" />
        </div>
        <Button variant="outline" className="flex items-center gap-2">
          <Filter className="h-4 w-4" />
          Filtres
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {candidates.map((candidate) => (
          <Card key={candidate.id} className="hover:shadow-md transition-shadow">
            <CardHeader className="flex flex-row items-start justify-between pb-2">
              <div className="flex items-center gap-3">
                <div className="h-12 w-12 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 font-bold text-lg">
                  {candidate.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <CardTitle className="text-base">{candidate.name}</CardTitle>
                  <p className="text-sm text-slate-500">{candidate.role}</p>
                </div>
              </div>
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2 mb-4">
                {candidate.tags.map((tag, i) => (
                  <span key={i} className="px-2 py-1 bg-slate-100 text-slate-600 text-xs rounded-md">
                    {tag}
                  </span>
                ))}
              </div>
              
              <div className="flex items-center justify-between mb-4">
                <div className="text-sm">
                  <span className="text-slate-500">Score IA:</span>
                  <span className={`ml-2 font-bold ${candidate.score >= 80 ? 'text-green-600' : candidate.score >= 50 ? 'text-orange-600' : 'text-red-600'}`}>
                    {candidate.score}%
                  </span>
                </div>
                <div className={`text-xs font-medium px-2 py-1 rounded-full
                  ${candidate.status === 'Entretien Vidéo' ? 'bg-blue-50 text-blue-700' : 
                    candidate.status === 'À revérifier' ? 'bg-yellow-50 text-yellow-700' :
                    candidate.status === 'Rejeté' ? 'bg-red-50 text-red-700' : 'bg-green-50 text-green-700'
                  }`}>
                  {candidate.status}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2">
                <Button variant="outline" className="w-full text-xs" asChild>
                  <Link to={`/rh/candidats/${candidate.id}`}>
                    <FileText className="mr-2 h-3 w-3" />
                    CV & Analyse
                  </Link>
                </Button>
                <Button className="w-full text-xs bg-indigo-600 hover:bg-indigo-700 text-white" asChild>
                  <Link to={`/rh/candidats/${candidate.id}`}>
                    <Play className="mr-2 h-3 w-3" />
                    Voir Pitch
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </DashboardLayout>
  );
}
