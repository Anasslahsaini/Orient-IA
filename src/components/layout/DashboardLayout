import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import React from "react";
import { 
  LayoutDashboard, 
  Users, 
  FileText, 
  Settings, 
  LogOut, 
  Bell,
  Search,
  Menu,
  X,
  Map
} from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

interface DashboardLayoutProps {
  children: React.ReactNode;
  role: "rh" | "tuteur" | "candidat";
}

const roleConfig = {
  rh: {
    title: "Espace RH",
    links: [
      { href: "/rh", label: "Vue d'ensemble", icon: LayoutDashboard },
      { href: "/rh/candidats", label: "Candidats", icon: Users },
      { href: "/rh/offres", label: "Offres", icon: FileText },
      { href: "/rh/parametres", label: "Paramètres", icon: Settings },
    ],
    color: "bg-indigo-600",
  },
  tuteur: {
    title: "Espace Tuteur",
    links: [
      { href: "/tuteur", label: "Mes Mentorés", icon: Users },
      { href: "/tuteur/feedback", label: "Feedbacks", icon: FileText },
      { href: "/tuteur/planning", label: "Planning", icon: LayoutDashboard },
    ],
    color: "bg-emerald-600",
  },
  candidat: {
    title: "Espace Candidat",
    links: [
      { href: "/candidat", label: "Ma Candidature", icon: LayoutDashboard },
      { href: "/candidat/map", label: "Carte Opportunités", icon: Map },
      { href: "/candidat/entrainement", label: "Entraînement Vidéo", icon: Users },
      { href: "/candidat/documents", label: "Mes Documents", icon: FileText },
      { href: "/candidat/notifications", label: "Notifications", icon: Bell },
    ],
    color: "bg-blue-600",
  },
};

export function DashboardLayout({ children, role }: DashboardLayoutProps) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const location = useLocation();
  const config = roleConfig[role];

  return (
    <div className="min-h-screen bg-slate-50 flex font-sans">
      {/* Sidebar */}
      <aside
        className={cn(
          "fixed inset-y-0 left-0 z-50 w-64 bg-white border-r border-slate-200 transform transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-0",
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div className="h-full flex flex-col">
          <div className="h-16 flex items-center px-6 border-b border-slate-100">
            <Link to="/" className="flex items-center gap-2">
              <div className={cn("h-8 w-8 rounded-lg flex items-center justify-center", config.color)}>
                <span className="text-white font-bold text-xl">O</span>
              </div>
              <span className="text-lg font-bold text-slate-900">Orient'IA</span>
            </Link>
          </div>

          <div className="px-4 py-6">
            <div className="mb-2 px-2 text-xs font-semibold text-slate-400 uppercase tracking-wider">
              {config.title}
            </div>
            <nav className="space-y-1">
              {config.links.map((link) => {
                const Icon = link.icon;
                const isActive = location.pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    to={link.href}
                    className={cn(
                      "flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium transition-colors",
                      isActive
                        ? "bg-slate-100 text-indigo-600"
                        : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                    )}
                  >
                    <Icon className="h-5 w-5" />
                    {link.label}
                  </Link>
                );
              })}
            </nav>
          </div>

          <div className="mt-auto p-4 border-t border-slate-100">
            <Link
              to="/"
              className="flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium text-slate-600 hover:bg-slate-50 hover:text-red-600 transition-colors"
            >
              <LogOut className="h-5 w-5" />
              Déconnexion
            </Link>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        {/* Top Header */}
        <header className="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-4 lg:px-8">
          <button
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="lg:hidden p-2 text-slate-500 hover:bg-slate-100 rounded-md"
          >
            {isSidebarOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>

          <div className="flex-1 max-w-xl ml-4 lg:ml-0">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
              <input
                type="text"
                placeholder="Rechercher..."
                className="w-full pl-10 pr-4 py-2 rounded-full bg-slate-100 border-transparent focus:bg-white focus:border-indigo-300 focus:ring-0 text-sm transition-all"
              />
            </div>
          </div>

          <div className="flex items-center gap-4">
            <Link to="/candidat/notifications" className="p-2 text-slate-400 hover:text-slate-600 relative">
              <Bell className="h-5 w-5" />
              <span className="absolute top-1.5 right-1.5 h-2 w-2 bg-red-500 rounded-full border-2 border-white"></span>
            </Link>
            <div className="h-8 w-8 rounded-full bg-slate-200 border border-slate-300 overflow-hidden">
              <img src="https://picsum.photos/seed/user/200/200" alt="User" className="h-full w-full object-cover" />
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 overflow-y-auto p-4 lg:p-8">
          {children}
        </main>
      </div>

      {/* Mobile Overlay */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 z-40 bg-slate-900/50 lg:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}
    </div>
  );
}
