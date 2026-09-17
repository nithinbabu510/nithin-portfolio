import type { Metadata } from "next";
import localFont from "next/font/local";
import { Inter } from "next/font/google";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Nithin Babu — QA Engineer | Healthcare Systems",
  description:
    "QA Engineer specializing in HMS and LIS platforms. Portfolio of real bugs found in billing, laboratory information systems, and clinical workflows — with root cause analysis and real-world impact.",
  keywords: [
    "QA Engineer",
    "Quality Analyst",
    "Healthcare QA",
    "HMS Testing",
    "LIS Testing",
    "Manual Testing",
    "Bug Reports",
    "Portfolio",
  ],
  authors: [{ name: "Nithin Babu" }],
  openGraph: {
    title: "Nithin Babu — QA Engineer | Healthcare Systems",
    description:
      "I don't just run test cases — I find the bugs that slip through them. Real case studies from HMS/LIS platforms.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${inter.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
