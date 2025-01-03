import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SpaceX Launches",
  description: "SpaceX Launches by CROW",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="min-h-screen bg-[#0D1117] text-[#EDEDED] flex flex-col items-center p-4">
          <header className="w-full max-w-4xl py-4 border-b border-[#30363D]">
            <h1 className="text-xl text-center">SpaceX Dashboard</h1>
          </header>
          <main className="w-full max-w-4xl">{children}</main>
          <footer className="w-full max-w-4xl py-4 border-t border-[#30363D] text-center text-sm text-[#8B949E]">
            © 2024 SpaceX Dashboard
          </footer>
        </div>
      </body>
    </html>
  );
}
