import type { Metadata } from "next";
import { Geist, Playfair_Display } from "next/font/google"; // Added Playfair here
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "700", "900"], // Added weights for fancy/bold looks
});

export const metadata: Metadata = {
  title: "Rian Rest | Comfortable Apartment Stay in Dehiwala",
  description: "Experience a clean and cozy SLTDA approved stay at Rian Rest Apartment in Dehiwala. Perfect for families and solo travelers seeking comfort and convenience.",
  keywords: ["Rian Rest", "Apartment in Dehiwala", "Rian Rest Dehiwala", "Sri Lanka Accommodation"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${playfair.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
