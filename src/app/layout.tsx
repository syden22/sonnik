// src/app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Сонник XXI — AI",
  description: "Опиши сон — получи интерпретацию и мини-историю",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru">
      <body className="min-h-screen bg-gradient-to-br from-indigo-900 via-slate-900 to-black text-slate-100">
        {children}
      </body>
    </html>
  );
}
