import type { Metadata } from "next";
import { Montserrat, Open_Sans } from "next/font/google";
import "./globals.css";
import { options } from "#site/content";
import { ThemeProvider } from "@/components/theme-provider"; 
import { Footer } from "@/components/layout/footer/footer"; 
import MainMenu from "@/components/layout/navbar/main-menu";

const montserrat = Montserrat({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});

const open_sans = Open_Sans({
  weight: ["300", "400", "500", "600", "700", "800"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-open_sans",
  display: "swap",
});

export const metadata: Metadata = {
  icons: {
    icon: "/images/icon.ico",
  },
  title: `Home | ${options.name}`,
  description: options.description,
  generator: "Next.js",
  referrer: "origin-when-cross-origin",
  keywords: options.keywords,
  authors: [{ name: "Rajat Bangia" }],
  creator: "Rajat Bangia",
  publisher: "Rajat Bangia",
  // metadataBase: options.basepath,
  metadataBase: new URL(options.basepath),
  alternates: {
    canonical: "/",
  },
  twitter: {
    card: "summary_large_image",
    title: options.name,
    description: options.description,
    siteId: "1467726470533754880",
    creator: "@rbangia",
    creatorId: "1467726470533754880",
    images: `${options.basepath}/og-logo.png`,
  },
  openGraph: {
    title: options.name,
    description: options.description,
    url: `${options.basepath}`,
    siteName: options.name,
    images: [
      {
        url: `${options.basepath}/og-logo.png`,
        width: 800,
        height: 600,
        alt: "Toadlabs",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: options.name,
  description: options.description,
  image: `localhost:3000/og-logo.png`,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${montserrat.variable} ${open_sans.variable}`}>
    <body className="overflow-x-hidden">
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        <MainMenu/> 
        <div className="w-screen dark:bg-black bg-white dark:bg-grid-small-white/[0.2] bg-grid-small-black/[0.2] relative flex items-center justify-center">
          <main>{children}</main>
        </div>
        <Footer />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </ThemeProvider>
    </body>
  </html>
  );
}
