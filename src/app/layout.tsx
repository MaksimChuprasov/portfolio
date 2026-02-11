import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata = {
  title: "Maksim Chuprasov — Portfolio",
  description: "Frontend Developer Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="bg-background text-textPrimary">
      <body
        className={`${inter.variable} font-sans antialiased min-h-screen`}
      >
        <div className="max-w-[1200px] mx-auto px-6">{children}</div>
      </body>
    </html>
  );
}
