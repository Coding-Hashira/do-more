import { Providers } from "../utils/providers";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Global/Navbar";
import AuthProviders from "@/components/Signin/AuthProviders";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "DoMore",
  description: "An All-in-one Solution To Help You DoMore",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-theme="dark">
      <head>
        <link rel="icon" href="/Logo(1).svg" />
      </head>
      <body className={inter.className}>
        <AuthProviders>
          <Providers>
            <Navbar />
            {children}
          </Providers>
        </AuthProviders>
      </body>
    </html>
  );
}
