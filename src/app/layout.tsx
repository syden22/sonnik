// src/app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Сонник XXI — AI",
  description: "Опиши сон — получи толкование и мини-историю",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru">
      <body className="min-h-screen text-slate-100 bg-gradient-to-br from-indigo-900 via-slate-900 to-black">
        {/* мягкое свечение в углу */}
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,rgba(99,102,241,0.22),transparent_60%)]" />
        {children}
      </body>
    </html>
  );
}
