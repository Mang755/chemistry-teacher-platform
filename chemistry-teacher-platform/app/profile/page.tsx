"use client";

import { FormEvent, useMemo, useState } from "react";

type Mode = "login" | "register";

export default function ProfilePage() {
  const [mode, setMode] = useState<Mode>("register");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const title = useMemo(
    () => (mode === "register" ? "Тіркелу" : "Кіру"),
    [mode]
  );

  function onSubmit(e: FormEvent) {
    e.preventDefault();

    if (!email.trim() || !password.trim() || (mode === "register" && !name.trim())) {
      setMessage("Барлық міндетті жолды толтырыңыз.");
      return;
    }

    const payload = {
      name: name.trim(),
      email: email.trim(),
      password,
      updatedAt: new Date().toISOString(),
    };

    if (typeof window !== "undefined") {
      localStorage.setItem("chemteach_user", JSON.stringify(payload));
    }

    setMessage(
      mode === "register"
        ? "Тіркелу сәтті орындалды (local режим)."
        : "Кіру сәтті орындалды (local режим)."
    );
  }

  return (
    <div className="max-w-xl mx-auto">
      <div className="rounded-2xl border border-cyan-100 bg-white/90 shadow-lg p-6">
        <h1 className="text-2xl font-bold text-slate-900">{title}</h1>
        <p className="mt-1 text-sm text-slate-600">
          Бұл уақытша local нұсқа. Кейін backend/auth қосамыз.
        </p>

        <div className="mt-4 inline-flex rounded-lg border border-cyan-200 p-1 bg-cyan-50">
          <button
            type="button"
            onClick={() => setMode("register")}
            className={`px-3 py-1.5 rounded-md text-sm ${
              mode === "register" ? "bg-white text-slate-900 shadow" : "text-slate-600"
            }`}
          >
            Тіркелу
          </button>
          <button
            type="button"
            onClick={() => setMode("login")}
            className={`px-3 py-1.5 rounded-md text-sm ${
              mode === "login" ? "bg-white text-slate-900 shadow" : "text-slate-600"
            }`}
          >
            Кіру
          </button>
        </div>

        <form onSubmit={onSubmit} className="mt-5 space-y-4">
          {mode === "register" && (
            <div>
              <label className="text-sm text-slate-700">Аты-жөні</label>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2"
                placeholder="Мысалы: Айдана Жанатқызы"
              />
            </div>
          )}

          <div>
            <label className="text-sm text-slate-700">Email</label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2"
              placeholder="you@example.com"
              type="email"
            />
          </div>

          <div>
            <label className="text-sm text-slate-700">Құпия сөз</label>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2"
              placeholder="********"
              type="password"
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-lg px-4 py-2 text-white bg-gradient-to-r from-indigo-600 to-blue-500 hover:brightness-105"
          >
            {title}
          </button>
        </form>

        {message && (
          <div className="mt-4 rounded-lg border border-cyan-200 bg-cyan-50 px-3 py-2 text-sm text-slate-700">
            {message}
          </div>
        )}
      </div>
    </div>
  );
}
