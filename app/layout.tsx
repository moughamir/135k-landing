import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Bouskoura Shop",
  description: "Bouskoura Shop landing page",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={` antialiased`}>{children}</body>
    </html>
  );
}
