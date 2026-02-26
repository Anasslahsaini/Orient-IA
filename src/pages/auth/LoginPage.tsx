import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Building2, User, Users, Linkedin } from "lucide-react";

export function LoginPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (role: string) => {
    // Simulate login
    switch (role) {
      case "rh":
        navigate("/rh");
        break;
      case "candidat":
        navigate("/candidat");
        break;
      case "tuteur":
        navigate("/tuteur");
        break;
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <div className="mx-auto h-12 w-12 bg-indigo-600 rounded-xl flex items-center justify-center mb-4">
            <span className="text-white font-bold text-2xl">O</span>
          </div>
          <CardTitle className="text-2xl">Bienvenue sur Orient'IA</CardTitle>
          <CardDescription>Connectez-vous à votre espace</CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="candidat" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="candidat">Candidat</TabsTrigger>
              <TabsTrigger value="rh">RH</TabsTrigger>
              <TabsTrigger value="tuteur">Tuteur</TabsTrigger>
            </TabsList>

            <TabsContent value="candidat">
              <div className="space-y-4">
                <Button 
                  variant="outline" 
                  className="w-full bg-[#0077b5] text-white hover:bg-[#00669c] border-none"
                  onClick={() => handleLogin("candidat")}
                >
                  <Linkedin className="mr-2 h-4 w-4" />
                  Continuer avec LinkedIn
                </Button>
                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <span className="w-full border-t border-slate-200" />
                  </div>
                  <div className="relative flex justify-center text-xs uppercase">
                    <span className="bg-white px-2 text-slate-500">Ou par email</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email-candidat">Email</Label>
                  <Input id="email-candidat" placeholder="jean.dupont@example.com" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="password-candidat">Mot de passe</Label>
                  <Input id="password-candidat" type="password" />
                </div>
                <Button className="w-full" onClick={() => handleLogin("candidat")}>
                  Se connecter
                </Button>
              </div>
            </TabsContent>

            <TabsContent value="rh">
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email-rh">Email professionnel</Label>
                  <Input id="email-rh" placeholder="rh@entreprise.com" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="password-rh">Mot de passe</Label>
                  <Input id="password-rh" type="password" />
                </div>
                <Button className="w-full" onClick={() => handleLogin("rh")}>
                  Accéder à l'espace Entreprise
                </Button>
              </div>
            </TabsContent>

            <TabsContent value="tuteur">
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email-tuteur">Email institutionnel</Label>
                  <Input id="email-tuteur" placeholder="conseiller@mission-locale.fr" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="password-tuteur">Mot de passe</Label>
                  <Input id="password-tuteur" type="password" />
                </div>
                <Button className="w-full" onClick={() => handleLogin("tuteur")}>
                  Accéder à l'espace Accompagnateur
                </Button>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
}
