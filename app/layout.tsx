import type { Metadata } from "next";
import { Schibsted_Grotesk, Martian_Mono, Geist } from "next/font/google";
import "./globals.css";
import BackgroundEffects from "@/components/BackgroundEffects";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

const schibstedGrotesk = Schibsted_Grotesk({
  variable: "--font-schibsted-grotesk",
  subsets: ["latin"],
});

const martianMono = Martian_Mono({
  variable: "--font-martian-mono",
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: "Eventra",
  description: "The modern hub for dev events—don’t miss what matters.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
  <html
    lang="en"
    className={cn(
      "min-h-screen",
      "antialiased",
      schibstedGrotesk.variable,
      martianMono.variable,
      geist.variable,
      "font-sans"
    )}
  >
    <body className="min-h-full flex flex-col relative">
      
    <BackgroundEffects />
    
      {/* Main Content */}
      <main className="flex-1">
        {children}
      </main>

    </body>
  </html>
);
}
