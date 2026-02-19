// app/classes/[grade]/page.tsx
import Link from "next/link";

type Topic = { id: string; title: string };
type Chapter = { id: string; title: string; topics: Topic[] };

const chaptersByGrade: Record<string, Chapter[]> = {
  "7": [
    {
      id: "1",
      title: "I тарау. Химия пәніне кіріспе. Таза заттар және қоспалар",
      topics: [
        { id: "1", title: "Химия пәні. Заттар және олардың қасиеттері" },
        { id: "2", title: "Таза заттар және қоспалар" },
        { id: "3", title: "Қоспаларды бөлу" },
        { id: "4", title: "Химия кабинетiндегi қауiпсiздiк ережелерi" },
        { id: "5", title: "Зертханалық құрал-жабдықтармен танысу" },
      ],
    },
    {
      id: "2",
      title: "II тарау. Заттардың агрегаттық күйінің өзгеруі",
      topics: [
        { id: "6", title: "Физикалық және химиялық құбылыстар" },
        { id: "7", title: "Заттардың агрегаттық күйлері" },
        { id: "8", title: "Булану және конденсация" },
        { id: "9", title: "Қайнау. Қату" },
        { id: "10", title: "Судың қасиеттері" },
      ],
    },
    // Қалған тарауларды кейін осылай қоса береміз
  ],
};

export default async function GradePage({
  params,
}: {
  params: Promise<{ grade: string }>;
}) {
  const { grade } = await params;

  const chapters = chaptersByGrade[String(grade)];

  // Егер басқа сыныптар әлі дайын болмаса
  if (!chapters) {
    return (
      <div>
        <h1 className="text-2xl font-bold mb-3">{grade}-сынып • Химия</h1>
        <div className="bg-white p-6 rounded-xl shadow">
          <p className="text-gray-700">
            Бұл сыныптың мазмұны әлі енгізілмеген. Қазір 7-сыныпты толтырып жатырмыз.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="flex items-start justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold">
            {grade}-сынып • Химия
          </h1>
          <p className="text-sm text-gray-500 mt-1">
            Тараулар мен тақырыптарды таңдаңыз.
          </p>
        </div>

        <Link
          href={`/builder?grade=${grade}`}
          className="px-4 py-2 bg-emerald-500 text-white rounded-lg hover:bg-emerald-600"
        >
          + Тапсырма жасау
        </Link>
      </div>

      <div className="mt-6 space-y-5">
        {chapters.map((ch) => (
          <div key={ch.id} className="bg-white rounded-xl shadow p-5">
            <h2 className="text-lg font-semibold text-indigo-700">
              {ch.title}
            </h2>

            <div className="mt-4 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
              {ch.topics.map((t) => (
                <Link
                  key={t.id}
                  href={`/classes/${grade}/topics/${t.id}`}
                  className="border rounded-xl p-4 hover:bg-gray-50"
                >
                  <div className="text-sm text-gray-500">Тақырып {t.id}</div>
                  <div className="font-medium">{t.title}</div>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
