"use client";
import { ExternalLink, Wand2, Gamepad2, LayoutTemplate, FlaskConical, Video, Brain } from "lucide-react";
import Link from "next/link";

const TOOLS = [
  { title: "EduCandy", desc: "Интерактив тапсырмалар (сәйкестендіру, тест т.б.)", href: "https://educandy.com/", tag: "Game" },
  { title: "Wordwall", desc: "Дидактикалық ойындар мен жаттығулар", href: "https://wordwall.net/", tag: "Game" },
  { title: "LearningApps", desc: "Интерактив жаттығулар құрастыру", href: "https://learningapps.org/", tag: "Task" },
  { title: "Quizizz", desc: "Квиз/үй жұмысы, live режим", href: "https://quizizz.com/", tag: "Quiz" },
  { title: "Kahoot!", desc: "Ойын түрінде тест", href: "https://kahoot.com/", tag: "Quiz" },
  { title: "Quizlet", desc: "Флешкарт, жаттау, тест", href: "https://quizlet.com/", tag: "Flashcards" },
  { title: "Google Forms", desc: "Тест/сауалнама жасау", href: "https://forms.google.com/", tag: "Form" },
  { title: "Canva", desc: "Жұмыс парағы, постер, дизайн", href: "https://www.canva.com/", tag: "Design" },
  { title: "Genially", desc: "Интерактив презентация/ойын", href: "https://genial.ly/", tag: "Interactive" },
  { title: "Nearpod", desc: "Сабаққа интерактив қосу", href: "https://nearpod.com/", tag: "Lesson" },
  { title: "Liveworksheets", desc: "Интерактив жұмыс парағы", href: "https://www.liveworksheets.com/", tag: "Worksheet" },
  { title: "PhET", desc: "Физика/химия симуляциялар", href: "https://phet.colorado.edu/", tag: "Lab" },
  { title: "ChemCollective", desc: "Виртуалды зертхана", href: "https://chemcollective.org/vlabs", tag: "Lab" },
  { title: "MolView", desc: "Молекула 3D көру", href: "https://molview.org/", tag: "3D" },
  { title: "PubChem", desc: "Заттар базасы", href: "https://pubchem.ncbi.nlm.nih.gov/", tag: "Database" },
];

function TagIcon({ tag }: { tag: string }) {
  if (tag === "Lab") return <FlaskConical className="w-4 h-4" />;
  if (tag === "Quiz") return <Brain className="w-4 h-4" />;
  if (tag === "Game") return <Gamepad2 className="w-4 h-4" />;
  if (tag === "Interactive") return <Wand2 className="w-4 h-4" />;
  if (tag === "Worksheet") return <LayoutTemplate className="w-4 h-4" />;
  if (tag === "Video") return <Video className="w-4 h-4" />;
  return <ExternalLink className="w-4 h-4" />;
}

export default function TaskBuilderDashboard() {
  return (
    <div className="space-y-6">
      <div className="rounded-2xl border bg-white p-6">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold">Тапсырма жасау орталығы</h1>
            <p className="text-gray-600 mt-1">
              Мұнда ең керек заманауи құралдар тұр — бірден ашып тапсырма құрастыра бересің.
            </p>
          </div>

          <Link
            href="/"
            className="px-4 py-2 rounded-lg border hover:bg-gray-50"
          >
            ← Басты бет
          </Link>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* tools list */}
        <div className="lg:col-span-2 rounded-2xl border bg-white p-6">
          <h2 className="text-lg font-semibold">Құралдар (15)</h2>
          <p className="text-sm text-gray-500 mt-1">Сілтемені бассаң жаңа бетте ашылады</p>

          <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
            {TOOLS.map((t) => (
              <a
                key={t.title}
                href={t.href}
                target="_blank"
                rel="noreferrer"
                className="group rounded-xl border p-4 hover:shadow-sm transition"
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <div className="font-semibold">{t.title}</div>
                    <div className="text-sm text-gray-600 mt-1">{t.desc}</div>
                  </div>

                  <span className="text-xs px-2 py-1 rounded-full border flex items-center gap-1 text-gray-700">
                    <TagIcon tag={t.tag} />
                    {t.tag}
                  </span>
                </div>

                <div className="mt-3 text-sm text-gray-500 flex items-center gap-2">
                  <ExternalLink className="w-4 h-4" />
                  Ашып көру
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* right panel */}
        <div className="rounded-2xl border bg-white p-6">
          <h2 className="text-lg font-semibold">Жылдам сценарий</h2>
          <ol className="mt-3 space-y-3 text-sm text-gray-700 list-decimal list-inside">
            <li>Тақырыпты таңда (мысалы: “Қоспа және таза зат”).</li>
            <li>EduCandy/Wordwall → ойын немесе сәйкестендіру жаса.</li>
            <li>Google Forms/Quizizz → қысқа тест қос.</li>
            <li>PhET/ChemCollective → зертханалық модель көрсет.</li>
            <li>Canva → жұмыс парағын шығарып бер.</li>
          </ol>

          <div className="mt-6 p-4 rounded-xl bg-gray-50 border">
            <div className="font-medium">Келесі қадам (қаласаң):</div>
            <div className="text-sm text-gray-600 mt-1">
              Осы бетке “Шаблон құрастыру” батырмасын қосып, сен бір кликте тапсырма құрылымын жасай алатындай етеміз.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
