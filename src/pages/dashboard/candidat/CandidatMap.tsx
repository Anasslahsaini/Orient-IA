import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { MapPin, Briefcase, Building, Navigation } from "lucide-react";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { Link } from "react-router-dom";

// Fix Leaflet icon issue
import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";

let DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

L.Marker.prototype.options.icon = DefaultIcon;

const companies = [
  {
    id: 1,
    name: "TechCorp",
    position: [48.8566, 2.3522],
    address: "12 Rue de Rivoli, Paris",
    hasOffer: true,
    offerTitle: "Product Designer",
    description: "Leader dans la tech, nous cherchons des talents créatifs.",
  },
  {
    id: 2,
    name: "GreenEnergy",
    position: [48.8606, 2.3376],
    address: "45 Avenue de l'Opéra, Paris",
    hasOffer: false,
    description: "Acteur majeur de la transition énergétique.",
  },
  {
    id: 3,
    name: "StartUp Nation",
    position: [48.8737, 2.2950],
    address: "10 Champs-Élysées, Paris",
    hasOffer: true,
    offerTitle: "Développeur React",
    description: "Incubateur de startups innovantes.",
  },
];

export function CandidatMap() {
  return (
    <DashboardLayout role="candidat">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-slate-900">Carte des Opportunités</h1>
        <p className="text-slate-500">Explorez les entreprises autour de vous et postulez spontanément.</p>
      </div>

      <div className="grid lg:grid-cols-3 gap-8 h-[600px]">
        {/* Map Container */}
        <div className="lg:col-span-2 rounded-xl overflow-hidden border border-slate-200 shadow-sm relative z-0">
          <MapContainer center={[48.8566, 2.3522]} zoom={13} scrollWheelZoom={false} style={{ height: "100%", width: "100%" }}>
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {companies.map((company) => (
              <Marker key={company.id} position={company.position as [number, number]}>
                <Popup>
                  <div className="p-2 min-w-[200px]">
                    <h3 className="font-bold text-slate-900 flex items-center gap-2">
                      <Building className="h-4 w-4 text-indigo-600" />
                      {company.name}
                    </h3>
                    <p className="text-xs text-slate-500 mb-2">{company.address}</p>
                    <p className="text-sm text-slate-700 mb-3">{company.description}</p>
                    
                    {company.hasOffer ? (
                      <div className="bg-green-50 p-2 rounded border border-green-100 mb-3">
                        <p className="text-xs font-bold text-green-700 uppercase">Offre disponible</p>
                        <p className="text-sm font-medium text-slate-900">{company.offerTitle}</p>
                      </div>
                    ) : (
                      <div className="bg-slate-50 p-2 rounded border border-slate-100 mb-3">
                        <p className="text-xs text-slate-500">Pas d'offre publiée actuellement</p>
                      </div>
                    )}

                    <Button size="sm" className="w-full bg-indigo-600 hover:bg-indigo-700 text-white" asChild>
                      <Link to="/candidat/entrainement">
                        <Briefcase className="mr-2 h-3 w-3" />
                        Simuler un entretien
                      </Link>
                    </Button>
                  </div>
                </Popup>
              </Marker>
            ))}
          </MapContainer>
        </div>

        {/* Sidebar List */}
        <div className="space-y-4 overflow-y-auto pr-2">
          <div className="flex items-center justify-between mb-2">
            <h3 className="font-bold text-slate-900">Entreprises à proximité</h3>
            <span className="text-xs bg-slate-100 px-2 py-1 rounded-full text-slate-600">{companies.length} résultats</span>
          </div>

          {companies.map((company) => (
            <Card key={company.id} className="hover:border-indigo-300 transition-colors cursor-pointer group">
              <CardContent className="p-4">
                <div className="flex items-start justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <div className="h-8 w-8 rounded bg-slate-100 flex items-center justify-center text-slate-600 font-bold">
                      {company.name[0]}
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 text-sm group-hover:text-indigo-600 transition-colors">{company.name}</h4>
                      <p className="text-xs text-slate-500">{company.address}</p>
                    </div>
                  </div>
                  {company.hasOffer && (
                    <span className="h-2 w-2 rounded-full bg-green-500" title="Offre disponible"></span>
                  )}
                </div>
                
                {company.hasOffer ? (
                  <div className="mb-3">
                    <span className="text-xs font-medium bg-green-100 text-green-700 px-2 py-0.5 rounded">
                      {company.offerTitle}
                    </span>
                  </div>
                ) : (
                  <p className="text-xs text-slate-400 mb-3 italic">Candidature spontanée possible</p>
                )}

                <div className="flex gap-2">
                  <Button variant="outline" size="sm" className="w-full text-xs h-8">
                    <Navigation className="mr-1 h-3 w-3" />
                    Itinéraire
                  </Button>
                  <Button size="sm" className="w-full text-xs h-8 bg-indigo-600 hover:bg-indigo-700 text-white" asChild>
                    <Link to="/candidat/entrainement">
                      Simuler
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
}
