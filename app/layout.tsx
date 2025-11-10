import type { Metadata } from "next";
import "~/globals.css";

export const metadata: Metadata = {
  title: {
    default: "Mint",
    template: "%s | Mint"
  },
  description: "MINT har lång erfarenhet av drama- och filmproduktion. Med berättelsen i fokus skapar vi upplevelser för barn och unga.",
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || ''),
  alternates: {
    canonical: '/',
    languages: {
      'sv': '/',
      'en': '/en'
    }
  },
  openGraph: {
    type: 'website',
    locale: 'sv_SE',
    url: '/',
    siteName: 'Mint',
    title: 'Mint',
    description: 'MINT har lång erfarenhet av drama- och filmproduktion. Med berättelsen i fokus skapar vi upplevelser för barn och unga.'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mint',
    description: 'MINT har lång erfarenhet av drama- och filmproduktion. Med berättelsen i fokus skapar vi upplevelser för barn och unga.'
  }
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html data-scroll-behavior="smooth">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={`antialiased flex flex-col min-h-screen`}>
        {children}
      </body>
    </html>
  );
}
