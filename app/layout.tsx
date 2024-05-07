import type { Metadata } from "next";
import localFont from 'next/font/local'
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/ui/Navbar";
import { Toaster } from "@/components/ui/toaster"

const inter = Inter(
  { 
    subsets: ["latin"],
    variable: '--font-sans'
  });

const serita = localFont({
  src: [
    {
      path: '../public/fonts/serita.otf',
      weight: '400'
    }
  ],
  variable: '--font-heading'
})

export const metadata: Metadata = {
  title: "Faminity | Rustic Elegance, Rooted in the Land",
  description: "Rustic Elegance, Rooted in the Land",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${serita.variable} font-sans antialiased `}>
         <Navbar />
        {children}
        <Toaster />
        </body>
    </html>
  );
}
