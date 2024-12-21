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
  title: "LaughLine",
  description: "LaughLine is your go-to app for an endless" +
      " supply of laughter! Designed to tickle every funny bone," +
      " LaughLine generates a wide variety of jokes, from witty one-liners" +
      " and clever puns to groan-worthy dad jokes. Perfect for breaking the ice," +
      " lightening up your day, or sharing laughs with friends, LaughLine ensures there’s " +
      "always a reason to smile. With easy sharing options and a personalized joke experience," +
      " it's your ultimate humor companion!",
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
        {children}
      </body>
    </html>
  );
}
