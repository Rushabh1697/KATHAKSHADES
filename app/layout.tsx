import type { Metadata } from "next";
import "./globals.css";
import RootLayoutClient from "@/components/RootLayoutClient";

export const metadata: Metadata = {
  title: "Kathak Shades - Classical Dance Academy",
  description: "The School of Kathak — Where tradition dances on. Learn classical Kathak dance at our studios in Dombivli East, Thane West, and Online.",
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="theme-color" content="#5C0612" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className="bg-brand-cream">
        <RootLayoutClient>
          {children}
        </RootLayoutClient>
      </body>
    </html>
  );
}
