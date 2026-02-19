import Link from "next/link";
import QuizClient from "../../../../../../components/QuizClient";
import MatchGameClient from "../../../../../../components/MatchGameClient";
import PracticeClient from "../../../../../../components/PracticeClient";
import {
  TOPIC_TITLES,
  TOPIC_TASKS,
  QUIZZES,
  GAMES,
   PRACTICES,
  type Task,
} from "../../../../../../data/curriculum";

export default async function TaskPage({
  params,
}: {
  params: Promise<{ grade: string; topicId: string; taskId: string }>;
}) {
  const { grade, topicId, taskId } = await params;

  const topicTitle = TOPIC_TITLES?.[grade]?.[topicId] ?? `Тақырып ${topicId}`;
  const tasks: Task[] = TOPIC_TASKS?.[grade]?.[topicId] ?? [];
  const task = tasks.find((t) => t.id === taskId);

  // Кілттер: "7-1-t1-quiz", "7-1-t1-game-match" сияқты
  const key = `${grade}-${topicId}-${taskId}`;
  const quizData = QUIZZES?.[key];
  const gameData = GAMES?.[key];
  const practiceData = PRACTICES?.[key];

  if (!task) {
    return (
      <div className="p-8">
        <h1 className="text-2xl font-bold mb-2">
          {grade}-сынып • {topicTitle}
        </h1>
        <p className="text-gray-600 mb-6">Бұл тапсырма табылмады: {taskId}</p>

        <Link
          href={`/classes/${grade}/topics/${topicId}`}
          className="px-4 py-2 border rounded-lg hover:bg-gray-50 inline-block"
        >
          ← Тақырыпқа қайту
        </Link>
      </div>
    );
  }

  // Контентті task.type бойынша бөлек дайындап аламыз
  let content: React.ReactNode = null;

  if (task.type === "quiz") {
    content = quizData ? (
      <QuizClient title={quizData.title} questions={quizData.questions} />
    ) : (
      <div className="text-gray-700">
        Бұл quiz үшін сұрақ табылмады.
        <div className="text-sm text-gray-500 mt-2">
          Кілт (key): <b>{key}</b>
        </div>
      </div>
    );
  } else if (task.type === "game") {
    content = gameData ? (
      <MatchGameClient title={gameData.title} pairs={gameData.pairs} />
    ) : (
      <div className="text-gray-700">
        Бұл ойын үшін дерек табылмады.
        <div className="text-sm text-gray-500 mt-2">
          Кілт (key): <b>{key}</b>
        </div>
      </div>
    );
  } else if (task.type === "practice") {
  content = practiceData ? (
    <PracticeClient title={practiceData.title} items={practiceData.items} />
  ) : (
    <div className="text-gray-700">
      Practice табылмады.
      <div className="text-sm text-gray-500 mt-2">
        Кілт (key): <b>{key}</b>
      </div>
    </div>
  );
} else {
  // hard немесе басқа типтер
  content = (
    <div>
      <h2 className="text-lg font-semibold mb-2">{task.title}</h2>
      <p className="text-gray-700">{task.desc}</p>

      <div className="mt-4 text-sm text-gray-500">
        Келесі қадам: осы <b>task.type={task.type}</b> түріне жеке интерфейс қосамыз.
      </div>
    </div>
  );
}

  return (
    <div className="p-8">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold">
            {grade}-сынып • {topicTitle}
          </h1>
          <p className="text-sm text-gray-500 mt-1">
            Тапсырма: <span className="font-medium">{task.title}</span> • Түрі:{" "}
            <span className="font-medium">{task.type}</span>
          </p>
        </div>

        <Link
          href={`/classes/${grade}/topics/${topicId}`}
          className="px-4 py-2 border rounded-lg hover:bg-gray-50"
        >
          ← Тақырыпқа қайту
        </Link>
      </div>

      <div className="mt-6 bg-white p-6 rounded-xl shadow">{content}</div>
    </div>
  );
}
