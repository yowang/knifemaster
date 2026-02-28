import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://knifemaster.org"),
  title: "Knife Master - Play Free Online Knife Throwing Game",
  description:
    "Play Knife Master online for free! Master the art of knife throwing, hit targets with precision, unlock weapons and conquer challenging levels. No download required!",
  keywords:
    "knife master, knife throwing game, knife master online, free knife game, skill game, arcade game, knife master unblocked",
  openGraph: {
    title: "Knife Master - Play Free Online Knife Throwing Game",
    description:
      "Play Knife Master online for free! Master the art of knife throwing, hit targets with precision, unlock weapons and conquer challenging levels.",
    url: "https://knifemaster.org",
    siteName: "Knife Master",
    images: [{ url: "/og-image.svg", width: 1200, height: 630 }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Knife Master - Play Free Online Knife Throwing Game",
    description:
      "Master the art of knife throwing! Play Knife Master free online.",
  },
  robots: { index: true, follow: true },
  alternates: { canonical: "https://knifemaster.org" },
};

const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {GA_ID && (
          <>
            <script
              async
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
            />
            <script
              dangerouslySetInnerHTML={{
                __html: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${GA_ID}');`,
              }}
            />
          </>
        )}
      </head>
      <body className="bg-[#111111] text-white min-h-screen">{children}</body>
    </html>
  );
}
