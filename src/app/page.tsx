"use client";

import { useState } from "react";

const STYLES = ["мистика", "фэнтези", "юмор"] as const;
type DreamStyle = typeof STYLES[number];

export default function Home() {
  const [text, setText] = useState("");
  const [chosen, setChosen] = useState<DreamStyle>("мистика");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<{ interp: string; story: string } | null>(null);

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!text.trim()) return;
    setLoading(true);

    // Заглушка генерации — потом подключим ИИ
    setTimeout(() => {
      setResult({
        interp:
          "Сон намекает на внутренние перемены и скрытую тревогу. Обрати внимание на мелкие детали дня — они складываются в общий знак.",
        story:
          "Туман стелился по полу, как вода. Ты шёл босиком и слышал тихий звон стекла в конце коридора. За поворотом — тёплый свет. Сердце билось ровнее: это был твой дом из будущего.",
      });
      setLoading(false);
    }, 600);
  }

  const canSubmit = text.trim().length > 0 && !loading;

  return (
    <main className="mx-auto max-w-5xl px-6 py-10">
      {/* мягкий фон сверху */}
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-64 bg-gradient-to-b from-indigo-100 to-transparent" />

      {/* Шапка */}
      <header className="mb-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-2xl bg-indigo-600 shadow-lg shadow-indigo-300/50" />
          <div>
            <h1 className="text-3xl font-extrabold tracking-tight text-slate-900">Сонник XXI</h1>
            <p className="text-sm font-medium text-slate-700">
              Опиши сон — получи толкование и мини-историю
            </p>
          </div>
        </div>

        <a
          href="#try"
          className="rounded-xl border border-indigo-600 bg-white px-4 py-2 text-sm font-semibold text-indigo-700 shadow hover:bg-indigo-50 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        >
          Попробовать
        </a>
      </header>

      {/* Карточка формы */}
      <section
        id="try"
        className="rounded-2xl border border-slate-300 bg-white p-6 shadow-xl shadow-slate-200"
      >
        {/* Чипы стиля — контрастные */}
        <div className="mb-3 flex flex-wrap items-center gap-2">
          <span className="text-sm font-semibold text-slate-800">Стиль истории:</span>
          {STYLES.map((s) => {
            const active = chosen === s;
            return (
              <button
                key={s}
                type="button"
                onClick={() => setChosen(s)}
                className={
                  "rounded-full px-3 py-1 text-sm font-semibold transition focus:outline-none focus:ring-2 " +
                  (active
                    ? "bg-indigo-600 text-white shadow focus:ring-indigo-500"
                    : "bg-white text-slate-800 border border-slate-400 hover:bg-slate-50 focus:ring-slate-400")
                }
              >
                {s}
              </button>
            );
          })}
        </div>

        <form onSubmit={onSubmit} className="space-y-4">
          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Опиши, что тебе приснилось…"
            rows={7}
            className="w-full resize-y rounded-xl border-2 border-slate-400 bg-white p-4 text-slate-900 placeholder:text-slate-500 outline-none focus:border-indigo-600"
          />

          <div className="flex items-center justify-between">
            <div className="text-sm font-medium text-slate-700">
              Подсказка: укажи место, людей и эмоции. Стиль:{" "}
              <b className="text-slate-900">{chosen}</b>.
            </div>

            {/* Кнопка всегда заметная: если disabled — остаётся индиго, но с opacity */}
            <button
              type="submit"
              disabled={!canSubmit}
              className={
                "rounded-xl px-6 py-2 text-sm font-bold text-white shadow-lg focus:outline-none focus:ring-2 " +
                (canSubmit
                  ? "bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500"
                  : "bg-indigo-600/60 cursor-not-allowed focus:ring-transparent")
              }
            >
              {loading ? "Генерирую…" : "Сгенерировать"}
            </button>
          </div>
        </form>
      </section>

      {/* Результат */}
      {result && (
        <section className="mt-8 grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-slate-300 bg-white p-5 shadow-md">
            <h3 className="mb-2 text-lg font-extrabold text-slate-900">Толкование</h3>
            <p className="leading-relaxed text-slate-900">{result.interp}</p>
            <div className="mt-3 flex gap-2">
              <span className="rounded-full border border-slate-400 bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-800">
                символы
              </span>
              <span className="rounded-full border border-slate-400 bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-800">
                эмоции
              </span>
            </div>
          </div>

          <div className="rounded-2xl border border-slate-300 bg-white p-5 shadow-md">
            <h3 className="mb-2 text-lg font-extrabold text-slate-900">История</h3>
            <p className="leading-relaxed text-slate-900">{result.story}</p>
          </div>
        </section>
      )}

      <footer className="mt-10 text-center text-xs font-semibold text-slate-700">
        © {new Date().getFullYear()} Сонник XXI — личный проект. Скоро: аккаунты, база снов и картинки.
      </footer>
    </main>
  );
}
