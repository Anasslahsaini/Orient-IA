import { content } from "@/data/content";
import { Check, X } from "lucide-react";

export function Comparison() {
  return (
    <section id="comparison" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            {content.comparison.title}
          </h2>
          <p className="text-lg text-slate-600">
            {content.comparison.subtitle}
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full min-w-[600px] border-collapse">
            <thead>
              <tr>
                <th className="p-4 text-left w-1/3"></th>
                <th className="p-6 text-left w-1/3 bg-indigo-50/50 rounded-t-xl border-t border-x border-indigo-100">
                  <div className="flex items-center gap-2">
                    <div className="h-6 w-6 bg-indigo-600 rounded flex items-center justify-center text-white font-bold text-xs">O</div>
                    <span className="font-bold text-indigo-900">Orient'IA</span>
                  </div>
                </th>
                <th className="p-6 text-left w-1/3 text-slate-500 font-medium">
                  ATS Classique
                </th>
              </tr>
            </thead>
            <tbody>
              {content.comparison.items.map((item, idx) => (
                <tr key={idx} className="border-b border-slate-100 last:border-0">
                  <td className="p-4 font-medium text-slate-900">
                    {item.feature}
                  </td>
                  <td className="p-6 bg-indigo-50/30 border-x border-indigo-100">
                    <div className="flex items-center gap-3">
                      <div className="h-6 w-6 rounded-full bg-green-100 flex items-center justify-center shrink-0">
                        <Check className="h-4 w-4 text-green-600" />
                      </div>
                      <span className="font-medium text-slate-900">{item.us}</span>
                    </div>
                  </td>
                  <td className="p-6 text-slate-500">
                    <div className="flex items-center gap-3">
                      <div className="h-6 w-6 rounded-full bg-slate-100 flex items-center justify-center shrink-0">
                        <X className="h-4 w-4 text-slate-400" />
                      </div>
                      <span>{item.them}</span>
                    </div>
                  </td>
                </tr>
              ))}
              {/* Bottom rounded corners for the highlight column */}
              <tr>
                <td></td>
                <td className="h-4 bg-indigo-50/30 border-x border-b border-indigo-100 rounded-b-xl"></td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
