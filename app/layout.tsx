import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "YPrep Academy",
  description:
    "Bangkok top boutique test prep school for SAT, ACT, TOELF, IELTS, and more",
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
