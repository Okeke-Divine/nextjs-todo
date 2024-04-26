import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "NextJs-Todo - Divine-Vessel O.",
  description:
    "A CRUD todo app built with next.js, prisma, server actions and mysql",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} container mx-auto p-4 bg-slate-800 text-slate-100`}
      >
        <div className="py-2 text-center">
          Built by{" "}
          <a
            href="https://okekedivine.vercel.app/"
            target={"_blank"}
            className="text-green-300"
          >
            Dev Divine
          </a>
        </div>
        {/* children */}
        <div>{children}</div>
      </body>
    </html>
  );
}
