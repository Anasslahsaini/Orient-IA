import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Plus, Users, Eye, MoreHorizontal } from "lucide-react";
import { Link } from "react-router-dom";

const offers = [
  { id: 1, title: "Product Designer Senior", department: "Design", candidates: 12, views: 145, status: "Active" },
  { id: 2, title: "Frontend Developer React", department: "Tech", candidates: 8, views: 98, status: "Active" },
  { id: 3, title: "Marketing Manager", department: "Marketing", candidates: 24, views: 310, status: "Clôturée" },
  { id: 4, title: "Sales Representative", department: "Sales", candidates: 5, views: 45, status: "Draft" },
];

export function RHJobOffers() {
  return (
    <DashboardLayout role="rh">
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Offres d'emploi</h1>
          <p className="text-slate-500">Gérez vos recrutements en cours.</p>
        </div>
        <Button className="bg-indigo-600 hover:bg-indigo-700 text-white">
          <Plus className="mr-2 h-4 w-4" />
          Créer une offre
        </Button>
      </div>

      <div className="grid gap-4">
        {offers.map((offer) => (
          <Card key={offer.id} className="hover:shadow-md transition-shadow">
            <CardContent className="p-6 flex items-center justify-between">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-1">
                  <h3 className="text-lg font-bold text-slate-900">{offer.title}</h3>
                  <span className={`text-xs px-2 py-0.5 rounded-full font-medium
                    ${offer.status === 'Active' ? 'bg-green-100 text-green-700' : 
                      offer.status === 'Clôturée' ? 'bg-slate-100 text-slate-600' : 'bg-yellow-100 text-yellow-700'}`}>
                    {offer.status}
                  </span>
                </div>
                <p className="text-slate-500 text-sm">{offer.department}</p>
              </div>

              <div className="flex items-center gap-8 mr-8">
                <div className="text-center">
                  <div className="flex items-center gap-1 text-slate-500 text-sm mb-1">
                    <Users className="h-4 w-4" />
                    <span>Candidats</span>
                  </div>
                  <span className="font-bold text-slate-900">{offer.candidates}</span>
                </div>
                <div className="text-center">
                  <div className="flex items-center gap-1 text-slate-500 text-sm mb-1">
                    <Eye className="h-4 w-4" />
                    <span>Vues</span>
                  </div>
                  <span className="font-bold text-slate-900">{offer.views}</span>
                </div>
              </div>

              <div className="flex gap-2">
                <Button variant="outline" size="sm" asChild>
                  <Link to={`/rh/offres/${offer.id}`}>Gérer</Link>
                </Button>
                <Button variant="ghost" size="icon">
                  <MoreHorizontal className="h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </DashboardLayout>
  );
}
