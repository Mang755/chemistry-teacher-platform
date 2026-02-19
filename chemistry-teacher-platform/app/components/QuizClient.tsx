"use client";

import { useMemo, useState } from "react";

type Question = {
  q: string;
  options: string[];
  answerIndex: number;
};

export default function QuizClient({
  title,
  questions,
}: {
  title: string;
  questions: Question[];
}) {
  const total = questions?.length ?? 0;

  const [step, setStep] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [answers, setAnswers] = useState<(number | null)[]>(
    Array(total).fill(null)
  );
  const [showResult, setShowResult] = useState(false);

  const current = questions[step];

  const score = useMemo(() => {
    let s = 0;
    for (let i = 0; i < total; i++) {
      if (answers[i] === questions[i]?.answerIndex) s++;
    }
    return s;
  }, [answers, questions, total]);

  function submitCurrent() {
    const next = [...answers];
    next[step] = selected;
    setAnswers(next);

    if (step === total - 1) {
      setShowResult(true);
      return;
    }
    setStep(step + 1);
    setSelected(next[step + 1] ?? null);
  }

  function goBack() {
    if (step === 0) return;
    const prevStep = step - 1;
    setStep(prevStep);
    setSelected(answers[prevStep] ?? null);
  }

  function restart() {
    setStep(0);
    setSelected(null);
    setAnswers(Array(total).fill(null));
    setShowResult(false);
  }

  if (!current) {
    return <div className="text-gray-600">Сұрақтар табылмады.</div>;
  }

  return (
    <div>
      <h2 className="text-xl font-semibold mb-2">{title}</h2>
      <div className="text-sm text-gray-500 mb-4">
        Сұрақ {step + 1} / {total}
      </div>

      {showResult ? (
        <div className="bg-gray-50 border rounded-xl p-5">
          <div className="text-lg font-semibold mb-2">Нәтиже</div>
          <div className="text-gray-700 mb-4">
            Дұрыс жауап: <b>{score}</b> / {total}
          </div>
          <button
            type="button"
            onClick={restart}
            className="px-4 py-2 rounded-lg border hover:bg-gray-50"
          >
            Қайта бастау
          </button>
        </div>
      ) : (
        <div className="border rounded-xl p-5">
          <div className="text-lg font-semibold mb-4">{current.q}</div>

          <div className="space-y-3">
            {current.options.map((opt, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setSelected(i)}
                className={`w-full text-left px-4 py-3 rounded-lg border hover:bg-gray-50 cursor-pointer ${
                  selected === i ? "ring-2 ring-black" : ""
                }`}
              >
                {opt}
              </button>
            ))}
          </div>

          <div className="mt-5 flex items-center gap-3">
            <button
              type="button"
              onClick={goBack}
              disabled={step === 0}
              className="px-4 py-2 rounded-lg border disabled:opacity-40"
            >
              ← Артқа
            </button>

            <button
              type="button"
              onClick={submitCurrent}
              disabled={selected === null}
              className="px-4 py-2 rounded-lg bg-black text-white disabled:opacity-40"
            >
              {step === total - 1 ? "Аяқтау" : "Келесі →"}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
