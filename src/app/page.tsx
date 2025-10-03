"use client";

import { useState } from "react";

const STYLES = ["мистика", "фэнтези", "юмор"] as const;
type DreamStyle = typeof STYLES[number];

export default function Home() {
  const [text, setText] = useState("");
  const [chosen, setChosen] = useState<DreamStyle>("мистика");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<{ interp: string; story: string } | null>(null);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!text.trim()) return;
    setLoading(true);
    // Заглушка генерации
    setTimeout(() => {
      setResult({
        interp:
          "Сон намекает на внутренние перемены и скрытую тревогу. Замечай мелочи — они складываются в знак.",
        story:
          "Туман стелился по полу, как вода. Ты шёл босиком и слышал, как звенит стекло в глубине коридора. За поворотом — тёплый свет. Сердце билось ровнее: это был твой дом из будущего.",
      });
      setLoading(false);
    }, 700);
  }

  return (
    <main className="mx-auto max-w-5xl px-6 py-10">
      {/* Шапка */}
      <header className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-2xl bg-indigo-500/90 shadow-lg shadow-indigo-500/40" />
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Сонник XXI</h1>
            <p className="text-sm text-slate-300">Опиши сон — получи толкование и мини-историю</p>
          </div>
        </div>
        <a
          href="#try"
          className="rounded-xl border border-indigo-400/30 bg-indigo-500/10 px-4 py-2 text-sm font-medium text-indigo-100 hover:bg-indigo-500/20"
        >
          Попробовать
        </a>
      </header>

      {/* Карточка формы */}
      <section
        id="try"
        className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur-md"
      >
        <div className="mb-4 flex flex-wrap items-center gap-2">
          <span className="text-sm text-slate-300">Стиль истории:</span>
          <div className="flex flex-wrap gap-2">
            {STYLES.map((s) => (
              <button
                key={s}
                onClick={() => setChosen(s)}
                type="button"
                className={
                  "rounded-full border px-3 py-1 text-sm transition " +
                  (chosen === s
                    ? "border-indigo-400 bg-indigo-500/20 text-indigo-100"
                    : "border-white/15 bg-white/5 text-slate-300 hover:bg-white/10")
                }
              >
                {s}
              </button>
            ))}
          </div>
        </div>

        <form onSubmit={onSubmit} className="space-y-3">
          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Опиши, что тебе приснилось…"
            rows={6}
            className="w-full resize-y rounded-xl border border-white/10 bg-black/30 p-3 outline-none placeholder:text-slate-500 focus:border-indigo-400"
          />
          <div className="flex items-center justify-between">
            <div className="text-xs text-slate-400">
