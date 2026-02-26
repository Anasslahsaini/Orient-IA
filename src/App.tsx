import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { LandingPage } from "@/pages/LandingPage";
import { SolutionsPage } from "@/pages/public/SolutionsPage";
import { EnterprisePage } from "@/pages/public/EnterprisePage";
import { CandidatePublicPage } from "@/pages/public/CandidatePublicPage";
import { PricingPage } from "@/pages/public/PricingPage";
import { SecurityPage } from "@/pages/public/SecurityPage";
import { ContactPage } from "@/pages/public/ContactPage";
import { AccompagnateurPage } from "@/pages/public/AccompagnateurPage";
import { HowItWorksPage } from "@/pages/public/HowItWorksPage";
import { MentionsLegales, Confidentialite, CGU } from "@/pages/public/LegalPages";
import { LoginPage } from "@/pages/auth/LoginPage";

import { RHDashboard } from "@/pages/dashboard/RHDashboard";
import { RHCandidates } from "@/pages/dashboard/rh/RHCandidates";
import { RHCandidateDetail } from "@/pages/dashboard/rh/RHCandidateDetail";
import { RHJobOffers } from "@/pages/dashboard/rh/RHJobOffers";
import { RHOfferDetail } from "@/pages/dashboard/rh/RHOfferDetail";
import { RHSettings } from "@/pages/dashboard/rh/RHSettings";

import { TuteurDashboard } from "@/pages/dashboard/TuteurDashboard";
import { TuteurFeedback } from "@/pages/dashboard/tuteur/TuteurFeedback";
import { TuteurPlanning } from "@/pages/dashboard/tuteur/TuteurPlanning";

import { CandidatDashboard } from "@/pages/dashboard/CandidatDashboard";
import { CandidatTraining } from "@/pages/dashboard/candidat/CandidatTraining";
import { CandidatDocuments } from "@/pages/dashboard/candidat/CandidatDocuments";
import { CandidatInterview } from "@/pages/dashboard/candidat/CandidatInterview";
import { CandidatMap } from "@/pages/dashboard/candidat/CandidatMap";
import { CandidatNotifications } from "@/pages/dashboard/candidat/CandidatNotifications";

import { NotFoundPage } from "@/pages/public/NotFoundPage";

export default function App() {
  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/accueil" element={<Navigate to="/" replace />} />
        <Route path="/home" element={<Navigate to="/" replace />} />
        <Route path="/solutions" element={<SolutionsPage />} />
        <Route path="/entreprise" element={<EnterprisePage />} />
        <Route path="/candidats" element={<CandidatePublicPage />} />
        <Route path="/accompagnateurs" element={<AccompagnateurPage />} />
        <Route path="/comment-ca-marche" element={<HowItWorksPage />} />
        <Route path="/tarifs" element={<PricingPage />} />
        <Route path="/securite" element={<SecurityPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/login" element={<LoginPage />} />
        
        {/* Legal Routes */}
        <Route path="/legal/mentions-legales" element={<MentionsLegales />} />
        <Route path="/legal/confidentialite" element={<Confidentialite />} />
        <Route path="/legal/cgu" element={<CGU />} />

        {/* Dashboard Routes */}
        <Route path="/rh" element={<RHDashboard />} />
        <Route path="/rh/candidats" element={<RHCandidates />} />
        <Route path="/rh/candidats/:id" element={<RHCandidateDetail />} />
        <Route path="/rh/offres" element={<RHJobOffers />} />
        <Route path="/rh/offres/:id" element={<RHOfferDetail />} />
        <Route path="/rh/parametres" element={<RHSettings />} />
        
        <Route path="/tuteur" element={<TuteurDashboard />} />
        <Route path="/tuteur/feedback" element={<TuteurFeedback />} />
        <Route path="/tuteur/planning" element={<TuteurPlanning />} />
        
        <Route path="/candidat" element={<CandidatDashboard />} />
        <Route path="/candidat/entrainement" element={<CandidatTraining />} />
        <Route path="/candidat/documents" element={<CandidatDocuments />} />
        <Route path="/candidat/entretien/:id" element={<CandidatInterview />} />
        <Route path="/candidat/map" element={<CandidatMap />} />
        <Route path="/candidat/notifications" element={<CandidatNotifications />} />

        {/* 404 Route */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
}
