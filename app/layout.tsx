import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Providers from "./providers";
import Footer from "@/components/Footer";

const montserrat = localFont({
  src: [
    {
      path: "./fonts/Montserrat-Black.ttf",
      weight: "900",
      style: "normal",
    },
    {
      path: "./fonts/Montserrat-BlackItalic.ttf",
      weight: "900",
      style: "italic",
    },
    {
      path: "./fonts/Montserrat-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "./fonts/Montserrat-BoldItalic.ttf",
      weight: "700",
      style: "italic",
    },
    {
      path: "./fonts/Montserrat-ExtraBold.ttf",
      weight: "800",
      style: "normal",
    },
    {
      path: "./fonts/Montserrat-ExtraBoldItalic.ttf",
      weight: "800",
      style: "italic",
    },
    {
      path: "./fonts/Montserrat-ExtraLight.ttf",
      weight: "200",
      style: "normal",
    },
    {
      path: "./fonts/Montserrat-ExtraLightItalic.ttf",
      weight: "200",
      style: "italic",
    },
    {
      path: "./fonts/Montserrat-Italic.ttf",
      weight: "400",
      style: "italic",
    },
    {
      path: "./fonts/Montserrat-Light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "./fonts/Montserrat-LightItalic.ttf",
      weight: "300",
      style: "italic",
    },
    {
      path: "./fonts/Montserrat-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/Montserrat-MediumItalic.ttf",
      weight: "500",
      style: "italic",
    },
    {
      path: "./fonts/Montserrat-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/Montserrat-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "./fonts/Montserrat-SemiBoldItalic.ttf",
      weight: "600",
      style: "italic",
    },
    {
      path: "./fonts/Montserrat-Thin.ttf",
      weight: "100",
      style: "normal",
    },
    {
      path: "./fonts/Montserrat-ThinItalic.ttf",
      weight: "100",
      style: "italic",
    },
  ],
  variable: "--font-montserrat", //creates a CSS variable for easier use
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
      <body className={montserrat.variable}>
        <Providers>
          <Navbar />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
