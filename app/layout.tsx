import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Providers from "./providers";
import Footer from "@/components/Footer";

const HarmoniaSansProCyr = localFont({
  src: [
    {
      path: "./fonts/HarmoniaSansProCyr-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "./fonts/HarmoniaSansProCyr-SemiBd.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "./fonts/HarmoniaSansProCyr-Regular.ttf",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-harmoniasansprocyr", //creates a CSS variable for easier use
});

export const metadata: Metadata = {
  title: "GitBlaze",
  description: "GitHub skills, GOAT-proof",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={HarmoniaSansProCyr.variable}>
        <Providers>
          <Navbar />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
