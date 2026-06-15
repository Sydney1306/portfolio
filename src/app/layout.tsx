import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nitya Vyas — Product Designer, AI Healthcare",
  description:
    "Product designer at Suki.ai. M.Des Interaction Design, IDC IIT Bombay. Designing AI-powered experiences at the intersection of healthcare and UX research.",
  metadataBase: new URL("https://sydney1306.github.io/portfolio"),
  openGraph: {
    title: "Nitya Vyas",
    description: "Product Designer — AI Healthcare · UX Research",
    url: "https://sydney1306.github.io/portfolio",
    siteName: "Nitya Vyas",
    images: [{ url: "/og.png", width: 1200, height: 630 }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="min-h-dvh bg-background text-foreground font-sans antialiased flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
