import { content } from "@/data/content";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Heart, TrendingUp } from "lucide-react";

const icons = {
  Users: Users,
  Heart: Heart,
  TrendingUp: TrendingUp,
};

export function WhyUs() {
  return (
    <section id="why-us" className="py-24 bg-slate-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            {content.whyUs.title}
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {content.whyUs.cards.map((card, idx) => {
            const Icon = icons[card.icon as keyof typeof icons];
            return (
              <Card key={idx} className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center mb-4 text-indigo-600">
                    <Icon className="w-6 h-6" />
                  </div>
                  <CardTitle className="text-xl">{card.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 leading-relaxed">
                    {card.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
