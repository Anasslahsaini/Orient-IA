import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export function NotFoundPage() {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 antialiased flex flex-col">
      <Navbar />
      <main className="flex-1 flex items-center justify-center pt-24 pb-16">
        <div className="text-center px-4">
          <h1 className="text-9xl font-bold text-indigo-100 mb-4">404</h1>
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Page introuvable</h2>
          <p className="text-xl text-slate-600 mb-8 max-w-md mx-auto">
            Désolé, la page que vous recherchez n'existe pas ou a été déplacée.
          </p>
          <Button size="lg" asChild className="bg-indigo-600 hover:bg-indigo-700 text-white">
            <Link to="/">Retour à l'accueil</Link>
          </Button>
        </div>
      </main>
      <Footer />
    </div>
  );
}
