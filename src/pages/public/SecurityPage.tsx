import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Shield, Lock, Server, FileCheck } from "lucide-react";

export function SecurityPage() {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 antialiased">
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-slate-900 mb-6">
              Sécurité et Confidentialité
            </h1>
            <p className="text-xl text-slate-600">
              La protection de vos données est notre priorité absolue.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="p-6 rounded-xl border border-slate-200">
              <Server className="h-8 w-8 text-indigo-600 mb-4" />
              <h3 className="text-xl font-bold mb-2">Hébergement AWS Europe</h3>
              <p className="text-slate-600">
                Toutes les données sont hébergées sur des serveurs sécurisés en Europe (AWS Paris/Francfort), garantissant la souveraineté de vos données.
              </p>
            </div>
            <div className="p-6 rounded-xl border border-slate-200">
              <Lock className="h-8 w-8 text-indigo-600 mb-4" />
              <h3 className="text-xl font-bold mb-2">Chiffrement de bout en bout</h3>
              <p className="text-slate-600">
                Vos données sont chiffrées au repos (AES-256) et en transit (TLS 1.3). Personne d'autre que vous n'y a accès.
              </p>
            </div>
            <div className="p-6 rounded-xl border border-slate-200">
              <FileCheck className="h-8 w-8 text-indigo-600 mb-4" />
              <h3 className="text-xl font-bold mb-2">Conformité RGPD</h3>
              <p className="text-slate-600">
                Nous respectons strictement le RGPD. Gestion fine des consentements candidats, droit à l'oubli et portabilité des données.
              </p>
            </div>
            <div className="p-6 rounded-xl border border-slate-200">
              <Shield className="h-8 w-8 text-indigo-600 mb-4" />
              <h3 className="text-xl font-bold mb-2">Suppression Automatique</h3>
              <p className="text-slate-600">
                Les vidéos des candidats sont stockées temporairement et supprimées automatiquement selon vos règles de rétention.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
