import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import Navbar from "@/components/navigation/Navbar";
import Footer from "@/components/navigation/Footer";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Smirkyea - Portfolio",
  description: "A portfolio for Smirkyea.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} antialiased`}>
        <ThemeProvider attribute="class" enableSystem={false} defaultTheme="dark">
          <Navbar />

          {children}

          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
