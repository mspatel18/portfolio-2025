import type { Metadata } from "next";
import { Poppins, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import gradientimage from "../../public/gradient.webp";
import localFont from "next/font/local";
import { Analytics } from "@vercel/analytics/react";
const myFont = localFont({
  variable: "--font-cal",
  src: "../../public/CalSans-Regular.woff2",
});
const geistmono = Geist_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});
const poppinsSans = Poppins({
  subsets: ["latin"], // Or other desired subsets
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"], // Or specific weights
  variable: "--font-poppins", // CSS variable name
  display: "swap", // Or 'block', 'fallback'
});

export const metadata: Metadata = {
  title: "Mann Patel Portfolio",
  icons: "./m-bg.png",
  description:
    "Mann Patel's personal website. A place to showcase my projects and skills.",
  keywords:
    "Mann Patel, Mann, Patel, Mann Patel's website, Mann Patel's personal website, Mann Patel's portfolio, Mann Patel's projects, Mann Patel's skills",
  openGraph: {
    title: "Mann Patel's portfolio website",
    type: "website",
    url: "https://mannpatel.vercel.app",
    images: ["./m-bg.png"],
    description: "Software Developer, India",
    siteName: "Mann Patel",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${poppinsSans.className} ${geistmono.variable} ${myFont.variable}  `}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          disableTransitionOnChange
        >
          <div className="container max-w-4xl mx-auto min-h-screen flex flex-col px-4 pt-5">
            <Image
              src={gradientimage}
              alt="gradient"
              className="absolute left-0 sm:left-1/2 top-0 -z-10 -translate-x-1/2 lg:scale-100 object-cover "
            />
            <Navbar />

            <section className="md:mt-8 lg:mt-10 pt-8 pb-8">{children}</section>
            <footer className="border-t p-2 text-sm italic">
              Made by{" "}
              <a href="https://github.com/mspatel18" className="font-bold">
                @mspatel18
              </a>
              {" </>"}
            </footer>
          </div>
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
