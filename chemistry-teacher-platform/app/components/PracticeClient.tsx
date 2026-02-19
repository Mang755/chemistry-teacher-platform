"use client";

import { useMemo, useState } from "react";

type PracticeItem = {
  prompt: string;
  answers: string[]; // қабылданатын дұрыс жауаптар
};

function normalize(s: string) {
  return s
    .toLowerCase()
    .replaceAll("ё", "е")
    .replace(/[.,!?;:()"“”'’]/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

export default function PracticeClient({
  title,
  items,
}: {
  title: string;
  items: PracticeItem[];
}) {
  const [inputs, setInputs] = useState<string[]>(() => items.map(() => ""));
  const [checked, setChecked] = useState(false);

  const results = useMemo(() => {
    return items.map((it, idx) => {
      const user = normalize(inputs[idx] ?? "");
      const ok = it.answers.some((a) => normalize(a) === user);
      return ok;
    });
  }, [items, inputs]);

  const score = results.filter(Boolean).length;
  const total = items.length;

  return (
    <div>
      <h2 className="text-xl font-semibold">{title}</h2>
      <p className="text-sm text-gray-500 mt-1">
        Жауапты жазыңыз да, соңында “Тексеру” басыңыз.
      </p>

      <div className="mt-5 space-y-4">
        {items.map((it, idx) => {
          const isOk = results[idx];
          return (
            <div key={idx} className="border rounded-xl p-4">
              <div className="font-medium">{it.prompt}</div>

              <input
                value={inputs[idx]}
                onChange={(e) => {
                  const copy = [...inputs];
                  copy[idx] = e.target.value;
                  setInputs(copy);
                  setChecked(false);
                }}
                className="mt-3 w-full border rounded-lg px-3 py-2"
                placeholder="Жауапты осы жерге жаз..."
              />

              {checked && (
                <div className="mt-2 text-sm">
                  {isOk ? (
                    <span className="text-green-700">✅ Дұрыс</span>
                  ) : (
                    <span className="text-red-700">
                      ❌ Қате. Үлгі жауап:{" "}
                      <b className="text-gray-800">{it.answers[0]}</b>
                    </span>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>

      <div className="mt-5 flex items-center gap-3">
        <button
          type="button"
          onClick={() => setChecked(true)}
          className="px-4 py-2 rounded-lg bg-black text-white"
        >
          Тексеру
        </button>

        <button
          type="button"
          onClick={() => {
            setInputs(items.map(() => ""));
            setChecked(false);
          }}
          className="px-4 py-2 rounded-lg border"
        >
          Тазалау
        </button>

        {checked && (
          <div className="ml-auto text-sm text-gray-700">
            Нәтиже: <b>{score}</b> / {total}
          </div>
        )}
      </div>
    </div>
  );
}
