"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

type StoredUser = {
  name?: string;
};

function readUserName() {
  if (typeof window === "undefined") return "";
  const raw = localStorage.getItem("chemteach_user");
  if (!raw) return "";
  try {
    const parsed = JSON.parse(raw) as StoredUser;
    return (parsed?.name ?? "").trim();
  } catch {
    return "";
  }
}

export default function ProfileButton() {
  const [name, setName] = useState("");

  useEffect(() => {
    const refresh = () => setName(readUserName());
    refresh();

    window.addEventListener("storage", refresh);
    window.addEventListener("focus", refresh);
    window.addEventListener("chemteach-user-updated", refresh as EventListener);

    return () => {
      window.removeEventListener("storage", refresh);
      window.removeEventListener("focus", refresh);
      window.removeEventListener("chemteach-user-updated", refresh as EventListener);
    };
  }, []);

  return (
    <Link
      href="/profile"
      className="px-4 py-2 rounded-lg text-white bg-gradient-to-r from-indigo-600 to-blue-500 hover:brightness-105"
    >
      {name ? name : "Профиль"}
    </Link>
  );
}
