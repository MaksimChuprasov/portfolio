import "./globals.css";
import { Inter } from "next/font/google";
import Header from "@/components/layout/Header";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata = {
  title: "Maksim Chuprasov",
  description: "Frontend Developer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="relative flex min-h-screen w-full flex-col items-center overflow-x-hidden antialiased">
        {/* Жидкий глубокий свет на фоне */}
        <div className="pointer-events-none fixed inset-0 -z-10 h-full w-full overflow-hidden select-none">
          <div className="bg-accent/15 absolute top-[-25%] left-1/2 h-[600px] w-[1200px] max-w-full -translate-x-1/2 rounded-full blur-[160px]" />
        </div>

        {/* Строго центрированный контентный контейнер */}
        <div className="flex min-h-screen w-full max-w-[1200px] flex-col px-6 sm:px-8 lg:px-12">
          <Header />
          <main className="w-full flex-1 pt-24">{children}</main>
        </div>
      </body>
    </html>
  );
}
