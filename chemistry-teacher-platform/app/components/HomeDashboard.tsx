"use client";
// app/components/HomeDashboard.tsx
import Link from "next/link";

const RESOURCES = [
  {
    title: "PhET Симуляциялар",
    desc: "Интерактив симуляциялар (физика/химия)",
    href: "https://phet.colorado.edu/",
    tag: "Simulation",
  },
  {
    title: "ChemCollective Virtual Lab",
    desc: "Виртуалды зертхана (ерітінділер, тәжірибе)",
    href: "https://chemcollective.org/vlabs",
    tag: "Virtual Lab",
  },
  {
    title: "MolView",
    desc: "Молекула/құрылымдарды 3D көру",
    href: "https://molview.org/",
    tag: "3D",
  },
  {
    title: "PubChem",
    desc: "Заттар туралы үлкен база",
    href: "https://pubchem.ncbi.nlm.nih.gov/",
    tag: "Database",
  },
  {
    title: "Periodic Videos",
    desc: "Элементтер туралы қысқа видеолар",
    href: "https://www.periodicvideos.com/",
    tag: "Video",
  },
];

export default function HomeDashboard() {
  return (
    <div className="space-y-6">
      {/* Quick actions */}
      <section className="rounded-2xl p-6 shadow-lg border border-cyan-100 bg-gradient-to-r from-cyan-50 via-sky-50 to-emerald-50">
        <h2 className="text-xl font-bold mb-1">Жылдам әрекеттер</h2>
        <p className="text-sm text-slate-600 mb-4">
          Мұғалімге ең керектісі — 1 басып бастау
        </p>

        <div className="flex flex-wrap gap-3">
          <Link
            href="/builder"
            className="px-4 py-2 rounded-lg text-white bg-gradient-to-r from-blue-600 to-cyan-500 hover:brightness-105"
          >
            Тапсырма жасау
          </Link>
          <Link
            href="/classes"
            className="px-4 py-2 rounded-lg border border-blue-200 bg-white/80 hover:bg-white"
          >
            Сыныптар
          </Link>
          <Link
            href="/games"
            className="px-4 py-2 rounded-lg border border-emerald-200 bg-white/80 hover:bg-white"
          >
            Ойындар
          </Link>
        </div>
      </section>

      <section className="rounded-2xl shadow-lg p-6 border border-sky-100 bg-white/90 backdrop-blur">
        <div className="flex items-center justify-between gap-3">
          <div>
            <h2 className="text-xl font-bold text-slate-900">Симуляциялар және онлайн зертхана</h2>
            <p className="text-sm text-slate-600">
              Сабақта бірден қолдануға болатын ресурстар
            </p>
          </div>
        </div>

        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
          {RESOURCES.map((r) => (
            <a
              key={r.href}
              href={r.href}
              target="_blank"
              rel="noreferrer"
              className="block rounded-xl p-4 border border-slate-200 bg-gradient-to-b from-white to-cyan-50/40 hover:shadow-md hover:border-cyan-300 transition"
            >
              <div className="flex items-start justify-between gap-2">
                <div>
                  <div className="font-semibold text-slate-900">{r.title}</div>
                  <div className="text-sm text-slate-600 mt-1">{r.desc}</div>
                </div>
                <span className="text-xs px-2 py-1 rounded-full border border-cyan-300 text-cyan-700 bg-cyan-50">
                  {r.tag}
                </span>
              </div>
            </a>
          ))}
        </div>
      </section>
    </div>
  );
}
