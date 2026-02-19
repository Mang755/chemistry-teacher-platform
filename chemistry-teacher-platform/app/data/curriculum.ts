// app/data/curriculum.ts
export type TaskType = "quiz" | "practice" | "hard" | "game";

export type Task = {
  id: string;           // URL-дегі taskId
  type: TaskType;
  title: string;
  desc: string;
};

export const TOPIC_TITLES: Record<string, Record<string, string>> = {
  "7": {
    "1": "Химия пәні. Заттар және олардың қасиеттері",
    "2": "Таза заттар және қоспалар",
    "3": "Қоспаларды бөлу",
    "4": "Химия кабинетінде қауіпсіздік ережелері",
    "5": "Зертханалық құрал-жабдықтармен танысу",
  },
};

export const TOPIC_TASKS: Record<string, Record<string, Task[]>> = {
  "7": {
    "1": [
      {
        id: "t1-quiz",
        type: "quiz",
        title: "Тест (жеңіл)",
        desc: "Негізгі ұғымдарды тез тексеру (5 сұрақ).",
      },
      {
        id: "t1-practice",
        type: "practice",
        title: "Жаттығу (орта)",
        desc: "Қолдану деңгейіндегі қысқа тапсырмалар.",
      },
      {
        id: "t1-hard",
        type: "hard",
        title: "Күрделі есептер",
        desc: "Ойлануды қажет ететін есептер мен талдау.",
      },
      {
        id: "t1-game-match",
        type: "game",
        title: "Ойын: Сәйкестендір",
        desc: "Қасиет ↔ мысалдарды сәйкестендіріп үйрену.",
      },
    ],
  },
};

// QUIZ сұрақтары (Topic 1)
export const QUIZZES: Record<string, any> = {
  "7-1-t1-quiz": {
    title: "Тақырып 1: Тест",
    questions: [
      {
        q: "Заттың агрегаттық күйі дегеніміз не?",
        options: [
          "Заттың түсі",
          "Заттың қатты, сұйық немесе газ күйі",
          "Заттың иісі",
          "Заттың дәмі",
        ],
        answerIndex: 1,
      },
      {
        q: "Физикалық қасиетке қайсысы жатады?",
        options: ["Жану", "Тот басу", "Ерігіштік", "Айрылу (ыдырау)"],
        answerIndex: 2,
      },
      {
        q: "Химиялық қасиетке мысал:",
        options: ["Балқу", "Булану", "Түстің өзгеруі", "Жану"],
        answerIndex: 3,
      },
      {
        q: "Таза зат дегеніміз:",
        options: [
          "Құрамында 2 немесе одан көп зат бар",
          "Құрамы тұрақты, бір ғана заттан тұрады",
          "Тек сұйық күйдегі зат",
          "Тек газ күйдегі зат",
        ],
        answerIndex: 1,
      },
      {
        q: "Қоспа дегеніміз:",
        options: [
          "Құрамы тұрақты бір зат",
          "Тек қатты зат",
          "Екі немесе одан көп заттың қоспасы",
          "Тек суда еритін зат",
        ],
        answerIndex: 2,
      },
    ],
  },
};
export const GAMES: Record<string, any> = {
  "7-1-t1-game-match": {
    title: "Ойын: Сәйкестендір (Қасиет ↔ Мысал)",
    pairs: [
      { left: "Физикалық қасиет", right: "Ерігіштік" },
      { left: "Химиялық қасиет", right: "Жану" },
      { left: "Агрегаттық күй", right: "Қатты/сұйық/газ" },
      { left: "Таза зат", right: "Құрамы тұрақты бір зат" },
      { left: "Қоспа", right: "Екі немесе одан көп зат" },
    ],
  },
};
// PRACTICE тапсырмалар
export const PRACTICES: Record<string, any> = {
  "7-1-t1-practice": {
    title: "Practice: Формулаларды толықтыр",
    items: [
      {
        prompt: "Судың химиялық формуласы:",
        answers: ["h2o"],
      },
      {
        prompt: "Ас тұзының формуласы:",
        answers: ["nacl"],
      },
      {
        prompt: "Көмірқышқыл газының формуласы:",
        answers: ["co2"],
      },
    ],
  },
};

