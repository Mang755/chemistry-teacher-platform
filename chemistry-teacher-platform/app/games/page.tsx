import Link from "next/link";
import { TOPIC_TASKS, TOPIC_TITLES } from "@/app/data/curriculum";

type GameCard = {
  grade: string;
  topicId: string;
  taskId: string;
  topicTitle: string;
  title: string;
  desc: string;
};

function getGameCards(): GameCard[] {
  const cards: GameCard[] = [];

  for (const [grade, topics] of Object.entries(TOPIC_TASKS)) {
    for (const [topicId, tasks] of Object.entries(topics)) {
      for (const task of tasks) {
        if (task.type !== "game") continue;

        cards.push({
          grade,
          topicId,
          taskId: task.id,
          topicTitle: TOPIC_TITLES?.[grade]?.[topicId] ?? `Тақырып ${topicId}`,
          title: task.title,
          desc: task.desc,
        });
      }
    }
  }

  return cards;
}

export default function GamesPage() {
  const games = getGameCards();

  return (
    <div>
      <div className="flex items-start justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold">Химия ойындары</h1>
          <p className="text-sm text-gray-500 mt-1">
            Тақырыптар бойынша дайын интерактив ойындар.
          </p>
        </div>

        <Link
          href="/classes"
          className="px-4 py-2 rounded-lg border hover:bg-gray-50"
        >
          Сыныптарға өту
        </Link>
      </div>

      {games.length > 0 ? (
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
          {games.map((game) => (
            <Link
              key={`${game.grade}-${game.topicId}-${game.taskId}`}
              href={`/classes/${game.grade}/topics/${game.topicId}/tasks/${game.taskId}`}
              className="bg-white p-5 rounded-xl shadow hover:shadow-lg transition"
            >
              <div className="text-xs text-gray-500">{game.grade}-сынып</div>
              <div className="mt-1 text-sm text-gray-500">{game.topicTitle}</div>
              <div className="mt-2 text-lg font-semibold">{game.title}</div>
              <div className="mt-2 text-sm text-gray-600">{game.desc}</div>
              <div className="mt-4 text-sm text-indigo-600">Ойынды ашу →</div>
            </Link>
          ))}
        </div>
      ) : (
        <div className="mt-6 bg-white p-6 rounded-xl shadow text-gray-600">
          Әзірге ойындар қосылмаған.
        </div>
      )}
    </div>
  );
}
