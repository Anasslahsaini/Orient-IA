import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Mail, MapPin, Phone } from "lucide-react";

export function ContactPage() {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 antialiased">
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div>
              <h1 className="text-4xl font-bold text-slate-900 mb-6">Contactez-nous</h1>
              <p className="text-lg text-slate-600 mb-8">
                Une question sur notre solution ? Envie d'une démo ? Notre équipe est là pour vous répondre.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="h-10 w-10 bg-indigo-50 rounded-lg flex items-center justify-center text-indigo-600">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="font-medium">Email</div>
                    <div className="text-slate-600">contact@orientia.fr</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="h-10 w-10 bg-indigo-50 rounded-lg flex items-center justify-center text-indigo-600">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="font-medium">Téléphone</div>
                    <div className="text-slate-600">+33 1 23 45 67 89</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="h-10 w-10 bg-indigo-50 rounded-lg flex items-center justify-center text-indigo-600">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="font-medium">Adresse</div>
                    <div className="text-slate-600">123 Avenue de l'IA, 75000 Paris</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200">
              <form className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">Prénom</Label>
                    <Input id="firstName" placeholder="Jean" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Nom</Label>
                    <Input id="lastName" placeholder="Dupont" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email professionnel</Label>
                  <Input id="email" type="email" placeholder="jean@entreprise.com" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <textarea 
                    id="message" 
                    className="flex min-h-[120px] w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm ring-offset-white placeholder:text-slate-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    placeholder="Bonjour, je souhaiterais..."
                  />
                </div>
                <Button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white">
                  Envoyer le message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
