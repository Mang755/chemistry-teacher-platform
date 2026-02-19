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

const MINI_TABLE = [
  { s: "H", name: "Сутек", n: 1 },
  { s: "He", name: "Гелий", n: 2 },
  { s: "Li", name: "Литий", n: 3 },
  { s: "Be", name: "Бериллий", n: 4 },
  { s: "B", name: "Бор", n: 5 },
  { s: "C", name: "Көміртек", n: 6 },
  { s: "N", name: "Азот", n: 7 },
  { s: "O", name: "Оттек", n: 8 },
  { s: "F", name: "Фтор", n: 9 },
  { s: "Ne", name: "Неон", n: 10 },
];

export default function HomeDashboard() {
  return (
    <div className="space-y-6">
      {/* Quick actions */}
      <section className="bg-white rounded-2xl shadow p-6">
        <h2 className="text-xl font-bold mb-1">Жылдам әрекеттер</h2>
        <p className="text-sm text-gray-600 mb-4">
          Мұғалімге ең керектісі — 1 басып бастау
        </p>

        <div className="flex flex-wrap gap-3">
          <Link
            href="/builder"
            className="px-4 py-2 rounded-lg bg-black text-white hover:opacity-90"
          >
            Тапсырма жасау
          </Link>
          <Link
            href="/classes"
            className="px-4 py-2 rounded-lg border hover:bg-gray-50"
          >
            Сыныптар
          </Link>
          <Link
            href="/games"
            className="px-4 py-2 rounded-lg border hover:bg-gray-50"
          >
            Ойындар
          </Link>
        </div>
      </section>

      {/* Resources + Periodic mini */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Resources */}
        <section className="lg:col-span-2 bg-white rounded-2xl shadow p-6">
          <div className="flex items-center justify-between gap-3">
            <div>
              <h2 className="text-xl font-bold">Симуляциялар және онлайн зертхана</h2>
              <p className="text-sm text-gray-600">
                Сабақта бірден қолдануға болатын ресурстар
              </p>
            </div>
          </div>

          <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
            {RESOURCES.map((r) => (
              <a
                key={r.href}
                href={r.href}
                target="_blank"
                rel="noreferrer"
                className="block border rounded-xl p-4 hover:bg-gray-50"
              >
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <div className="font-semibold">{r.title}</div>
                    <div className="text-sm text-gray-600 mt-1">{r.desc}</div>
                  </div>
                  <span className="text-xs px-2 py-1 rounded-full border text-gray-700">
                    {r.tag}
                  </span>
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* Mini periodic */}
        <section className="bg-white rounded-2xl shadow p-6">
          <h2 className="text-xl font-bold">Периодтық кесте (мини)</h2>
          <p className="text-sm text-gray-600">
            Элементті бас — атауы шығады
          </p>

          <div className="mt-4 grid grid-cols-5 gap-2">
            {MINI_TABLE.map((el) => (
              <button
                key={el.s}
                type="button"
                className="border rounded-lg p-2 hover:bg-gray-50"
                onClick={() => alert(`${el.s} — ${el.name} (Z=${el.n})`)}
                title={`${el.name}`}
              >
                <div className="text-xs text-gray-500">{el.n}</div>
                <div className="text-lg font-bold leading-none">{el.s}</div>
              </button>
            ))}
          </div>

          <div className="mt-4 text-sm text-gray-600">
            Толық кестені кейін жеке бет қылып жасаймыз.
          </div>
        </section>
      </div>
    </div>
  );
}
