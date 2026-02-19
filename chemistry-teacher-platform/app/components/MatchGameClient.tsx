"use client";

import { useMemo, useState } from "react";

type Pair = { left: string; right: string };

function shuffle<T>(arr: T[]) {
  return [...arr].sort(() => Math.random() - 0.5);
}

export default function MatchGameClient({
  title,
  pairs,
}: {
  title: string;
  pairs: Pair[];
}) {
  const leftItems = useMemo(() => pairs.map((p) => p.left), [pairs]);
  const rightItems = useMemo(() => shuffle(pairs.map((p) => p.right)), [pairs]);

  const [selectedLeft, setSelectedLeft] = useState<string | null>(null);
  const [selectedRight, setSelectedRight] = useState<string | null>(null);

  // matched: left -> right
  const [matched, setMatched] = useState<Record<string, string>>({});
  const [wrong, setWrong] = useState<string>("");

  const total = pairs.length;
  const done = Object.keys(matched).length === total;

  const correctMap = useMemo(() => {
    const m: Record<string, string> = {};
    for (const p of pairs) m[p.left] = p.right;
    return m;
  }, [pairs]);

  const score = useMemo(() => Object.keys(matched).length, [matched]);

  function tryMatch(l: string, r: string) {
    const correct = correctMap[l] === r;
    if (!correct) {
      setWrong("Қате жұп. Қайта таңдаңыз 🙂");
      setSelectedLeft(null);
      setSelectedRight(null);
      return;
    }

    setWrong("");
    setMatched((prev) => ({ ...prev, [l]: r }));
    setSelectedLeft(null);
    setSelectedRight(null);
  }

  function onPickLeft(l: string) {
    if (matched[l]) return;
    setWrong("");
    setSelectedLeft(l);
    if (selectedRight) tryMatch(l, selectedRight);
  }

  function onPickRight(r: string) {
    // already used?
    if (Object.values(matched).includes(r)) return;
    setWrong("");
    setSelectedRight(r);
    if (selectedLeft) tryMatch(selectedLeft, r);
  }

  function reset() {
    setMatched({});
    setSelectedLeft(null);
    setSelectedRight(null);
    setWrong("");
  }

  return (
    <div>
      <h2 className="text-xl font-semibold mb-2">{title}</h2>
      <div className="text-sm text-gray-500 mb-4">
        Дұрыс жұптар: <b>{score}</b> / {total}
      </div>

      {wrong && (
        <div className="mb-4 text-sm text-red-600 border border-red-200 bg-red-50 rounded-lg p-3">
          {wrong}
        </div>
      )}

      {done && (
        <div className="mb-4 border bg-gray-50 rounded-xl p-4">
          <div className="font-semibold mb-1">Жарайсың! 🎉</div>
          <div className="text-gray-700 text-sm">
            Барлық жұп дұрыс сәйкестендірілді.
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Left */}
        <div className="border rounded-xl p-4">
          <div className="text-sm text-gray-500 mb-3">Қасиеттер</div>
          <div className="space-y-2">
            {leftItems.map((l) => {
              const isMatched = !!matched[l];
              const isSelected = selectedLeft === l;
              return (
                <button
                  key={l}
                  type="button"
                  disabled={isMatched}
                  onClick={() => onPickLeft(l)}
                  className={`w-full text-left px-4 py-3 rounded-lg border hover:bg-gray-50 disabled:opacity-50 ${
                    isSelected ? "ring-2 ring-black" : ""
                  }`}
                >
                  {l}
                  {isMatched && (
                    <span className="text-xs text-gray-500 ml-2">
                      ✓ ({matched[l]})
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Right */}
        <div className="border rounded-xl p-4">
          <div className="text-sm text-gray-500 mb-3">Мысалдар</div>
          <div className="space-y-2">
            {rightItems.map((r) => {
              const used = Object.values(matched).includes(r);
              const isSelected = selectedRight === r;
              return (
                <button
                  key={r}
                  type="button"
                  disabled={used}
                  onClick={() => onPickRight(r)}
                  className={`w-full text-left px-4 py-3 rounded-lg border hover:bg-gray-50 disabled:opacity-50 ${
                    isSelected ? "ring-2 ring-black" : ""
                  }`}
                >
                  {r}
                  {used && <span className="text-xs text-gray-500 ml-2">✓</span>}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      <div className="mt-5">
        <button
          type="button"
          onClick={reset}
          className="px-4 py-2 rounded-lg border hover:bg-gray-50"
        >
          Қайта бастау
        </button>
      </div>
    </div>
  );
}
