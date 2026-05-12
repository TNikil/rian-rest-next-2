import type { Metadata } from "next";
import { Geist, Playfair_Display, Raleway } from "next/font/google"; // Added Raleway
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "700", "900"],
});

// Added Raleway configuration
const railway = Raleway({
  variable: "--font-railway",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Rian Rest | Comfortable Stay",
  description: "A clean, cozy apartment in Dehiwala",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      // Added railway.variable here
      className={`${geistSans.variable} ${playfair.variable} ${railway.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
