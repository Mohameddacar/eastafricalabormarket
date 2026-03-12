import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";

import "./globals.css";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

const headingFont = Poppins({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-heading",
});

const bodyFont = Inter({
  subsets: ["latin"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: "East Africa Labor Market",
  description:
    "Advancing labor market intelligence, training, and partnerships across East Africa.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${headingFont.variable} ${bodyFont.variable} antialiased`}
      >
        <div className="flex min-h-screen flex-col bg-background font-sans [--font-sans:var(--font-body)]">
          <Navbar />
          <main className="flex flex-1 flex-col">
            <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 mx-auto h-72 max-w-6xl bg-[radial-gradient(circle_at_top,_var(--tw-gradient-from)_0,_transparent_70%)] from-primary/18" />
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
