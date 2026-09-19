import type { Metadata } from "next";
import { Sansita } from "next/font/google";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./globals.css";

const headFont = Sansita({
  variable: "--font-head",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "700", "800", "900"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://docs.nexment.in"),

  title: {
    default: "Nexment Docs",
    template: "%s | Nexment Docs",
  },

  description:
    "Official documentation for The Nexment Project, including guides, references, tools, and project documentation.",

  keywords: [
    "Nexment",
    "Nexment Docs",
    "Nexment Documentation",
    "The Nexment Project",
    "Nexment Project",
    "Nexment CLI",
    "software documentation",
    "developer documentation",
    "open source",
    "developer tools",
  ],

  authors: [
    {
      name: "The Nexment Project",
      url: "https://github.com/theNexmentProject",
    },
  ],

  creator: "The Nexment Project",
  publisher: "The Nexment Project",

  applicationName: "Nexment Docs",

  alternates: {
    canonical: "https://docs.nexment.in",
  },

  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },

  manifest: "/manifest.json",

  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://docs.nexment.in",
    siteName: "Nexment Docs",
    title: "Nexment Docs",
    description:
      "Official documentation for The Nexment Project.",
    images: [
      {
        url: "/banner.png",
        width: 1200,
        height: 630,
        alt: "Nexment Documentation",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Nexment Docs",
    description:
      "Official documentation for The Nexment Project.",
    images: ["/banner.png"],
    creator: "@NexmentOfficial",
    site: "@NexmentOfficial",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  category: "documentation",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={headFont.variable}>
        {children}
      </body>
    </html>
  );
}