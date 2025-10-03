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
    // Пока заглушка. Позже подключим ИИ и/или Supabase.
    setTimeout(() => {
      setResult({
        interp:
          "Сон намекает на внутренние перемены и скрытую тревогу. Обрати внимание на мелкие детали дня — они складываются в общий знак.",
        story:
          "Туман стелился по полу, как вода. Ты шёл босиком и слышал, как тихо звенит стекло где-то в глубине коридора. За поворотом — тёплый свет, от которого сердце билось ровнее. Ты сделал шаг — и понял, что это твой собственный дом, только из будущего.",
      });
      setLoading(false);
    }, 800);
  }

  return (
    <main className="mx-auto max-w-4xl px-6 py-12">
      {/* Шапка */}
      <header className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-xl bg-indigo-500/90 shadow-lg shadow-indigo-500/40" />
          <div>
            <h1 className="text-2xl font-bold tracking-tight">Сонник XXI</h1>
            <p className="text-sm text-slate-400">Опиши сон — получи толкование и мини-историю</p>
          </div>
        </div>
        <a
          href="#try"
          className="rounded-xl border border-indigo-400/30 bg-indigo-500/10 px-4 py-2 text-sm font-medium text-indigo-200 hover:bg-indigo-500/20"
        >
          Попробовать
        </a>
      </header>

      {/* Карточка с формой */}
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
                className={
                  "rounded-full border px-3 py-1 text-sm " +
                  (chosen === s
                    ? "border-indigo-400 bg-indigo-500/20 text-indigo-100"
                    : "border-white/15 bg-white/5 text-slate-300 hover:bg-white/10")
                }
                type="button"
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
              Подсказка: укажи место, людей и эмоции. Выбранный стиль: <b>{chosen}</b>.
            </div>
            <button
              type="submit"
              disabled={loading}
              className="rounded-xl border border-indigo-400/40 bg-indigo-500/20 px-5 py-2 text-sm font-semibold text-indigo-100 hover:bg-indigo-500/30 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {loading ? "Генерирую…" : "Сгенерировать"}
            </button>
          </div>
        </form>
      </section>

      {/* Результат */}
      {result && (
        <section className="mt-8 grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
            <h3 className="mb-2 text-lg font-semibold">Толкование</h3>
            <p className="leading-relaxed text-slate-200">{result.interp}</p>
            <div className="mt-3 flex gap-2">
              <span className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-slate-300">
                символы
              </span>
              <span className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-slate-300">
                эмоции
              </span>
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
            <h3 className="mb-2 text-lg font-semibold">История</h3>
            <p className="leading-relaxed text-slate-200">{result.story}</p>
          </div>
        </section>
      )}

      {/* Низ страницы */}
      <footer className="mt-10 text-center text-xs text-slate-500">
        © {new Date().getFullYear()} Сонник XXI — личный проект. Скоро: аккаунты, база снов и картинки.
      </footer>
    </main>
  );
}
