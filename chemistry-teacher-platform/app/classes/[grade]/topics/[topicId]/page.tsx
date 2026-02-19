import Link from "next/link";
import { TOPIC_TITLES, TOPIC_TASKS } from "@/app/data/curriculum";

export default async function TopicPage({
  params,
}: {
  params: Promise<{ grade: string; topicId: string }>;
}) {
  const { grade, topicId } = await params;

  const topicTitle = TOPIC_TITLES?.[grade]?.[topicId] ?? `Тақырып ${topicId}`;
  const tasks = TOPIC_TASKS?.[grade]?.[topicId] ?? [];

  return (
    <div>
      <div className="flex items-start justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold">
            {grade}-сынып • {topicTitle}
          </h1>
          <p className="text-sm text-gray-500 mt-1">
            Деңгейді таңдаңыз (алдымен тест, кейін күрделірек тапсырмалар).
          </p>
        </div>

        <Link
          href={`/classes/${grade}`}
          className="px-4 py-2 border rounded-lg hover:bg-gray-50"
        >
          ← Сыныпқа қайту
        </Link>
      </div>

      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
        {tasks.map((t) => (
          <Link
            key={t.id}
            href={`/classes/${grade}/topics/${topicId}/tasks/${t.id}`}
            className="bg-white p-5 rounded-xl shadow hover:shadow-lg transition"
          >
            <div className="text-xs text-gray-500">Тапсырма</div>
            <div className="mt-1 text-lg font-semibold">{t.title}</div>
            <div className="mt-2 text-sm text-gray-600">{t.desc}</div>
            <div className="mt-3 text-xs text-gray-500">
              Түрі: {t.type}
            </div>
          </Link>
        ))}
      </div>

      {tasks.length === 0 && (
        <div className="mt-6 bg-white p-6 rounded-xl shadow text-gray-600">
          Бұл тақырыпқа тапсырмалар әлі қосылмаған.
        </div>
      )}
    </div>
  );
}
