import type { Metadata } from "next";
import { Inter, Krub } from "next/font/google";
import "./globals.css";

import Navbar from "@/components/navigation/navbar/Index";
import Footer from "@/components/navigation/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
})

const krub = Krub({
  subsets: ['latin'],
  variable: '--font-krub',
  weight: ['200', '300', '400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: "Smirkyea | Osobní portfolio",
  description: "Portfolio Website Developera @Smirkyea vytvořeno pomocí Next.js a TailwindCSS.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${krub.className} ${inter.variable} antialiased`}
      >
        <Navbar />
        <div className="relative">
          <div className="pb-14">
            {children}
          </div>

          <Footer />
        </div>
      </body>
    </html>
  );
}
