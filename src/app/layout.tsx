import type { Metadata } from "next";
import {  Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/common/NavBar";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "sonner";
import ReactQueryProvider from "@/context/ReactQueryProvider";
import MobileNavBar from "@/components/common/MobileNavBat";
import { Analytics } from "@vercel/analytics/next"

const inter = Inter({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Urlbit — Simplify and Shorten Your URLs Instantly",
  description: "Urlbit is a fast and reliable URL shortener that turns long, messy links into short and shareable ones. Track clicks, manage links, and share smarter — all in one simple tool.",
    keywords: [
    "URL shortener",
    "shorten links",
    "link management",
    "branded links",
    "track clicks",
    "custom short links",
    "free url shortener",
    "short url tool",
    "smart link analytics",
  ],
    metadataBase:new URL("https://urlbit.space/"),
   openGraph: {
    title: "Urlbit — Simplify and Shorten Your URLs Instantly",
    description:
      "Shorten, manage, and track your links with Urlbit — the easiest way to share smarter.",
    url: "https://urlbit.space/",
    siteName: "Urlbit",
    images: [
      {
        url: "/showcard.png",
        width: 1200,
        height: 630,
        alt: "Urlbit — Simplify and Shorten Your URLs Instantly",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Urlbit — Simplify and Shorten Your URLs Instantly",
    description:
      "Turn long links into short, smart, and trackable URLs with Urlbit.",
    images: ["/showcard.png"],

  },
   icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <ReactQueryProvider>

      <html lang="en" className="light">
        <body className={`${inter.className}  antialiased`}>
          <div className=" max-sm:hidden">
            <NavBar />
          </div>
          <div className=" sm:hidden">
            <MobileNavBar />
          </div>
          {children}
          <Toaster position="top-center"/>
        </body>
      </html>
      </ReactQueryProvider>
      <Analytics/>
    </ClerkProvider>
  );
}
