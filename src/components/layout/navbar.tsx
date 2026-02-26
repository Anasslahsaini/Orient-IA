import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { Link, useNavigate } from "react-router-dom";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [demoMenuOpen, setDemoMenuOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleDemoClick = (path: string) => {
    setDemoMenuOpen(false);
    setIsOpen(false);
    navigate(path);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/80 backdrop-blur-md border-b border-slate-200 py-4" : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="h-8 w-8 bg-indigo-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-xl">O</span>
          </div>
          <span className="text-xl font-bold text-slate-900 tracking-tight">Orient'IA</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <Link to="/solutions" className="text-sm font-medium text-slate-600 hover:text-indigo-600 transition-colors">
            Solutions
          </Link>
          <Link to="/entreprise" className="text-sm font-medium text-slate-600 hover:text-indigo-600 transition-colors">
            Entreprise
          </Link>
          <Link to="/candidats" className="text-sm font-medium text-slate-600 hover:text-indigo-600 transition-colors">
            Candidats
          </Link>
          <Link to="/accompagnateurs" className="text-sm font-medium text-slate-600 hover:text-indigo-600 transition-colors">
            Accompagnateurs
          </Link>
          <Link to="/comment-ca-marche" className="text-sm font-medium text-slate-600 hover:text-indigo-600 transition-colors">
            Comment ça marche
          </Link>
          <Link to="/tarifs" className="text-sm font-medium text-slate-600 hover:text-indigo-600 transition-colors">
            Tarifs
          </Link>
          
          <div className="relative">
            <Button 
              variant="primary" 
              size="sm" 
              onClick={() => setDemoMenuOpen(!demoMenuOpen)}
              className="flex items-center gap-2"
            >
              Connexion / Démo
              <ChevronDown className={`h-4 w-4 transition-transform ${demoMenuOpen ? 'rotate-180' : ''}`} />
            </Button>
            
            <AnimatePresence>
              {demoMenuOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute right-0 top-full mt-2 w-56 bg-white rounded-xl shadow-xl border border-slate-100 overflow-hidden p-1"
                >
                  <button onClick={() => handleDemoClick('/login')} className="flex w-full items-center gap-3 px-4 py-3 text-sm font-medium text-indigo-600 bg-indigo-50 hover:bg-indigo-100 rounded-lg transition-colors text-left mb-1">
                    🔐 Se connecter
                  </button>
                  <div className="px-4 py-2 text-xs font-semibold text-slate-400 uppercase tracking-wider">
                    Démos Rapides
                  </div>
                  <button onClick={() => handleDemoClick('/rh')} className="flex w-full items-center gap-3 px-4 py-3 text-sm text-slate-700 hover:bg-slate-50 rounded-lg transition-colors text-left">
                    <div className="h-2 w-2 rounded-full bg-indigo-600" />
                    Espace RH
                  </button>
                  <button onClick={() => handleDemoClick('/tuteur')} className="flex w-full items-center gap-3 px-4 py-3 text-sm text-slate-700 hover:bg-slate-50 rounded-lg transition-colors text-left">
                    <div className="h-2 w-2 rounded-full bg-emerald-600" />
                    Espace Tuteur
                  </button>
                  <button onClick={() => handleDemoClick('/candidat')} className="flex w-full items-center gap-3 px-4 py-3 text-sm text-slate-700 hover:bg-slate-50 rounded-lg transition-colors text-left">
                    <div className="h-2 w-2 rounded-full bg-blue-600" />
                    Espace Candidat
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-slate-900" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-slate-200 overflow-hidden"
          >
            <div className="flex flex-col p-4 gap-4">
              <Link to="/solutions" className="text-sm font-medium text-slate-600" onClick={() => setIsOpen(false)}>
                Solutions
              </Link>
              <Link to="/entreprise" className="text-sm font-medium text-slate-600" onClick={() => setIsOpen(false)}>
                Entreprise
              </Link>
              <Link to="/candidats" className="text-sm font-medium text-slate-600" onClick={() => setIsOpen(false)}>
                Candidats
              </Link>
              <Link to="/accompagnateurs" className="text-sm font-medium text-slate-600" onClick={() => setIsOpen(false)}>
                Accompagnateurs
              </Link>
              <Link to="/comment-ca-marche" className="text-sm font-medium text-slate-600" onClick={() => setIsOpen(false)}>
                Comment ça marche
              </Link>
              <Link to="/tarifs" className="text-sm font-medium text-slate-600" onClick={() => setIsOpen(false)}>
                Tarifs
              </Link>
              <div className="border-t border-slate-100 pt-4 space-y-2">
                <Button className="w-full justify-center bg-indigo-600 text-white" onClick={() => handleDemoClick('/login')}>
                  Se connecter
                </Button>
                <p className="text-xs font-semibold text-slate-400 uppercase px-2 mt-4">Accès Démo Rapide</p>
                <Button variant="ghost" className="w-full justify-start" onClick={() => handleDemoClick('/rh')}>
                  Espace RH
                </Button>
                <Button variant="ghost" className="w-full justify-start" onClick={() => handleDemoClick('/tuteur')}>
                  Espace Tuteur
                </Button>
                <Button variant="ghost" className="w-full justify-start" onClick={() => handleDemoClick('/candidat')}>
                  Espace Candidat
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
