import { Geist, Geist_Mono, Montserrat } from "next/font/google";
import "./globals.css";
import { AuthProvider, useAuth } from "@/components/AuthProvider";
import { redirect } from "next/navigation";
import Head from "next/head";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});


const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Trademo",
  description: "Your trading companion",
  icons: {
    icon: [
      // Include multiple formats and sizes
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon.svg", type: "image/svg+xml" }, // SVG version
      // { url: "/icon-16x16.png", sizes: "16x16", type: "image/png" },
      // { url: "/icon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    // apple: "/apple-icon.png",
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={` antialiased`}
      >
        <Head>
          <title>My page title</title>
          <meta property="og:title" content="My page title" key="title" />
        </Head>
        <AuthProvider>
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}
