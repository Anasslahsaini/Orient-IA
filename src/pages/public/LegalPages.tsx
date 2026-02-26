import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

export function MentionsLegales() {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 antialiased">
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 md:px-6 max-w-3xl">
          <h1 className="text-3xl font-bold mb-8">Mentions Légales</h1>
          <div className="prose prose-slate max-w-none">
            <h3>1. Éditeur du site</h3>
            <p>Le site Orient'IA est édité par la société OrientIA SAS, au capital de 10 000 euros, immatriculée au RCS de Paris sous le numéro 123 456 789.</p>
            <p>Siège social : 123 Avenue de l'IA, 75000 Paris.</p>
            
            <h3>2. Directeur de la publication</h3>
            <p>Monsieur le Directeur, CEO de OrientIA SAS.</p>

            <h3>3. Hébergement</h3>
            <p>Le site est hébergé par Amazon Web Services (AWS) EMEA SARL, 38 Avenue John F. Kennedy, L-1855 Luxembourg.</p>
            
            <h3>4. Propriété intellectuelle</h3>
            <p>L'ensemble de ce site relève de la législation française et internationale sur le droit d'auteur et la propriété intellectuelle. Tous les droits de reproduction sont réservés.</p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export function Confidentialite() {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 antialiased">
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 md:px-6 max-w-3xl">
          <h1 className="text-3xl font-bold mb-8">Politique de Confidentialité</h1>
          <div className="prose prose-slate max-w-none">
            <p>Chez Orient'IA, la confidentialité de vos données est notre priorité.</p>
            
            <h3>1. Collecte des données</h3>
            <p>Nous collectons les données que vous nous fournissez lors de votre inscription (nom, email, CV) et lors de l'utilisation de nos services (vidéos d'entretien).</p>

            <h3>2. Utilisation des données</h3>
            <p>Vos données sont utilisées pour :</p>
            <ul>
              <li>Fournir nos services de recrutement et d'accompagnement.</li>
              <li>Améliorer nos algorithmes d'IA (uniquement avec votre consentement explicite).</li>
            </ul>

            <h3>3. Partage des données</h3>
            <p>Vos données ne sont partagées qu'avec les recruteurs auxquels vous postulez.</p>

            <h3>4. Vos droits</h3>
            <p>Conformément au RGPD, vous disposez d'un droit d'accès, de rectification et de suppression de vos données.</p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export function CGU() {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 antialiased">
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 md:px-6 max-w-3xl">
          <h1 className="text-3xl font-bold mb-8">Conditions Générales d'Utilisation</h1>
          <div className="prose prose-slate max-w-none">
            <h3>1. Objet</h3>
            <p>Les présentes CGU ont pour objet de définir les modalités de mise à disposition des services du site Orient'IA.</p>

            <h3>2. Accès au service</h3>
            <p>Le service est accessible gratuitement aux candidats et sur abonnement pour les entreprises.</p>

            <h3>3. Responsabilité</h3>
            <p>Orient'IA ne saurait être tenu responsable des contenus publiés par les utilisateurs (CV, offres d'emploi).</p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
