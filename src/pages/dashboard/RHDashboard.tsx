import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, UserCheck, Clock, TrendingUp, MoreHorizontal, Video, FileText } from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Lun', candidatures: 4 },
  { name: 'Mar', candidatures: 7 },
  { name: 'Mer', candidatures: 5 },
  { name: 'Jeu', candidatures: 12 },
  { name: 'Ven', candidatures: 9 },
  { name: 'Sam', candidatures: 2 },
  { name: 'Dim', candidatures: 1 },
];

const candidates = [
  { id: 1, name: "Alice Martin", role: "Product Designer", status: "Entretien Vidéo", score: 85, date: "Il y a 2h" },
  { id: 2, name: "Thomas Dubreuil", role: "Dev Frontend", status: "À revérifier", score: 92, date: "Il y a 4h" },
  { id: 3, name: "Sarah Connor", role: "Chef de Projet", status: "Nouveau", score: 78, date: "Il y a 1j" },
  { id: 4, name: "Jean Dupont", role: "Dev Backend", status: "Rejeté", score: 45, date: "Il y a 2j" },
];

export function RHDashboard() {
  return (
    <DashboardLayout role="rh">
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Tableau de bord RH</h1>
          <p className="text-slate-500">Bienvenue, voici ce qu'il se passe aujourd'hui.</p>
        </div>
        <Button>
          <Users className="mr-2 h-4 w-4" />
          Nouveau Candidat
        </Button>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {[
          { title: "Candidatures", value: "124", change: "+12%", icon: Users, color: "text-blue-600 bg-blue-50" },
          { title: "Entretiens IA", value: "45", change: "+5%", icon: Video, color: "text-purple-600 bg-purple-50" },
          { title: "Recrutements", value: "12", change: "+2%", icon: UserCheck, color: "text-green-600 bg-green-50" },
          { title: "Temps Moyen", value: "14j", change: "-3j", icon: Clock, color: "text-orange-600 bg-orange-50" },
        ].map((stat, idx) => (
          <Card key={idx}>
            <CardContent className="p-6 flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-slate-500">{stat.title}</p>
                <h3 className="text-2xl font-bold text-slate-900 mt-1">{stat.value}</h3>
                <span className="text-xs font-medium text-green-600 bg-green-50 px-2 py-0.5 rounded-full mt-2 inline-block">
                  {stat.change} vs mois dernier
                </span>
              </div>
              <div className={`p-3 rounded-xl ${stat.color}`}>
                <stat.icon className="h-6 w-6" />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Chart */}
        <div className="lg:col-span-2">
          <Card className="h-full">
            <CardHeader>
              <CardTitle>Flux de candidatures</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-[300px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={data}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
                    <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#64748b'}} />
                    <YAxis axisLine={false} tickLine={false} tick={{fill: '#64748b'}} />
                    <Tooltip 
                      contentStyle={{ backgroundColor: '#fff', borderRadius: '8px', border: '1px solid #e2e8f0', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                      cursor={{ fill: '#f1f5f9' }}
                    />
                    <Bar dataKey="candidatures" fill="#4f46e5" radius={[4, 4, 0, 0]} barSize={40} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Recent Candidates List */}
        <div className="lg:col-span-1">
          <Card className="h-full">
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle>Derniers Candidats</CardTitle>
              <Button variant="ghost" size="sm" className="text-xs">Voir tout</Button>
            </CardHeader>
            <CardContent className="p-0">
              <div className="divide-y divide-slate-100">
                {candidates.map((candidate) => (
                  <div key={candidate.id} className="p-4 hover:bg-slate-50 transition-colors flex items-center justify-between group">
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-full bg-slate-200 flex items-center justify-center text-slate-600 font-medium text-sm">
                        {candidate.name.split(' ').map(n => n[0]).join('')}
                      </div>
                      <div>
                        <p className="text-sm font-medium text-slate-900">{candidate.name}</p>
                        <p className="text-xs text-slate-500">{candidate.role}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className={`text-xs font-medium px-2 py-1 rounded-full inline-block mb-1
                        ${candidate.status === 'Entretien Vidéo' ? 'bg-blue-50 text-blue-700' : 
                          candidate.status === 'À revérifier' ? 'bg-yellow-50 text-yellow-700' :
                          candidate.status === 'Rejeté' ? 'bg-red-50 text-red-700' : 'bg-slate-100 text-slate-700'
                        }`}>
                        {candidate.status}
                      </div>
                      <p className="text-xs text-slate-400">Score IA: <span className="font-bold text-slate-700">{candidate.score}%</span></p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
}
