import type React from "react";
import type { Metadata, Viewport } from "next";
import { Playfair_Display, Raleway } from "next/font/google";
import "./globals.css";
import { GoogleAnalytics } from "@next/third-parties/google"
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { GoogleTagManager } from "@next/third-parties/google";
import { CookieConsent } from "@/components/cookie-consent";
import Script from "next/script"

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

const raleway = Raleway({
  subsets: ["latin"],
  variable: "--font-raleway",
});

export const viewport: Viewport = {
  themeColor: "#000000",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export async function generateMetadata(): Promise < Metadata > {
  return {
    title: {
      template: "%s || Kimhab Ork Fashion & Art Gallery",
      default: "Kimhab Ork Fashion & Art Gallery",
    },
    description: "Kimhab Ork Fashion & Art Gallery is a digital resources for Art and Runway Collections from around the world.",
    authors: [{ name: "Kimhab Ork Fashion & Art Gallery - PPFI" }],
    referrer: "origin-when-cross-origin",
    applicationName: "Kimhab Ork Fashion & Art Gallery",
    keywords: [
      "fashion",
      "fashion institute", 
      "fashion design", 
      "fashion marketing", 
      "Cambodia fashion", 
      "fashion education", 
      "short courses",
      "fashion business",
      "fashion design education",
      "design and art",
    ],
    openGraph: {
      title: "Kimhab Ork Fashion & Art Gallery",
      siteName: "Kimhab Ork Fashion & Art Gallery",
      description: "Kimhab Ork Fashion & Art Gallery is a digital resources for Art and Runway Collections from around the world.",
      video: "https://gallery.kimhabork.site/og-video.mp4",
      images: {
        url: "https://ik.imagekit.io/digiv3rse/assets/og.png",
        width: 3780,
        height: 1890,
      },
      url: "https://gallery.kimhabork.site",
      locale: "en_US",
      type: "website"
    },
    twitter: {
      title: "Kimhab Ork Fashion & Art Gallery",
      card: "summary_large_image",
      creator: "@ppfi",
      description: "Kimhab Ork Fashion & Art Gallery is a digital resources for Art and Runway Collections from around the world.",
      images: ["https://ik.imagekit.io/digiv3rse/assets/og.png"],
    },
    alternates: {
      canonical: "https://gallery.kimhabork.site",
    },
    creator: "Kimhab Ork Fashion & Art Gallery",
    publisher: "Kimhab Ork Fashion & Art Gallery",
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    manifest: "https://gallery.kimhabork.site/manifest.json",
    icons: {
      shortcut: { url: "/favicon.ico", type: "image/x-icon" },
      icon: [
        { url: "/favicon/favicon.ico", type: "image/x-icon" },
        new URL("/favicon/favicon.ico", "https://kimhabork.site/favicon.ico"),
        {
          url: "/favicon.svg",
          type: "image/svg",
          sizes: "1000x1000",
        },
        {
          url: "/favicon/favicon-16x16.png",
          type: "image/png",
          sizes: "16x16",
        },
        {
          url: "/favicon/favicon-32x32.png",
          type: "image/png",
          sizes: "32x32",
        },
        {
          url: "/favicon/favicon-96x96.png",
          type: "image/png",
          sizes: "96x96",
        },
        {
          url: "/favicon/andriod-icon-36x36.png",
          type: "image/png",
          sizes: "36x36",
        },
        {
          url: "/favicon/andriod-icon-38x38.png",
          type: "image/png",
          sizes: "38x38",
        },
        {
          url: "/favicon/andriod-icon-96x96.png",
          type: "image/png",
          sizes: "96x96",
        },
        {
          url: "/favicon/andriod-icon-114x114.png",
          type: "image/png",
          sizes: "114x114",
        },
        {
          url: "/favicon/andriod-icon-192x192.png",
          type: "image/png",
          sizes: "192x192",
        },
        {
          url: "/favicon/andriod-icon-512x512.png",
          type: "image/png",
          sizes: "192x192",
        },
      ],
      apple: [
      {
        url: "/favicon/apple-icon.png",
        type: "image/png",
      },
      {
        url: "/favicon/apple-icon-57x57.png",
        sizes: "57x57",
        type: "image/png",
      },
      {
        url: "/favicon/apple-icon-60x60.png",
        sizes: "60x60",
        type: "image/png",
      },
      {
        url: "/favicon/apple-icon-72x72.png",
        sizes: "72x72",
        type: "image/png",
      },
      {
        url: "/favicon/apple-icon-76x76.png",
        sizes: "76x76",
        type: "image/png",
      },
      {
        url: "/favicon/apple-icon-114x114.png",
        sizes: "114x114",
        type: "image/png",
      },
      {
        url: "/favicon/apple-icon-120x120.png",
        sizes: "120x120",
        type: "image/png",
      },
      {
        url: "/favicon/apple-icon-144x144.png",
        sizes: "144x144",
        type: "image/png",
      },
      {
        url: "/favicon/apple-icon-152x152.png",
        sizes: "152x152",
        type: "image/png",
      },
      {
        url: "/favicon/apple-icon-180x180.png",
        sizes: "180x180",
        type: "image/png",
      }, ],
    },
    robots: {
      index: true,
      nocache: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        noimageindex: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    sitemap: [
      "https://gallery.kimhabork.site/sitemap.xml",
      "https://gallery.kimhabork.site/sitemap-0.xml",
     ],
  };
}
export default function RootLayout({
  children,
}: Readonly < {
  children: React.ReactNode;
} > ) {
  return (
    <html lang="en">
        <GoogleTagManager gtmId="GTM-KBF4JHBS" />
        <Script
          id="yandex-metrika"
          dangerouslySetInnerHTML={{
            __html: `
              (function(m,e,t,r,i,k,a){
              m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
              m[i].l=1*new Date();
              for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
              k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
              (window, document,'script','https://mc.yandex.ru/metrika/tag.js?id=103742603', 'ym');
              
              ym(103742603, "init", {
                defer: true,
                ssr:true,
                webvisor:true,
                clickmap:true,
                trackLinks:true,
                accurateTrackBounce:true
              });
            `,
           }}
           strategy="afterInteractive"
         />
        <body className={`${playfair.variable} ${raleway.variable} font-raleway bg-black text-white`}>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "CollegeOrUniversity",
                "name": "Kimhab Ork Fashion & Art Gallery",
                "url": "https://gallery.kimhabork.site",
                "logo": "https://gallery.kimhabork.site/ppfi-nav.png", 
                "description": "Kimhab Ork Fashion & Art Gallery is a digital resources for Art and Runway Collections from around the world.",
                "address": {
                  "@type": "PostalAddress",
                  "streetAddress": "St 420, Beoung Trabek",
                  "addressLocality": "Phnom Penh",
                  "addressRegion": "Phnom Penh",
                  "postalCode": "120110", 
                  "addressCountry": "KH"
                },
                "contactPoint": {
                  "@type": "ContactPoint",
                  "telephone": "+855-23-456-789",
                  "contactType": "Admissions Office",
                  "email": "info@kimhabork.site"
                },
                "sameAs": [
                  "https://www.facebook.com/PPFashionInstitute", 
                  "https://www.instagram.com/ppfi_kh",
                  "https://www.linkedin.com/in/ppfi"
                 ]
               })
            }}
          />
          <Navbar />
          {children}
          <Footer />
          <CookieConsent />
        </body>
        <GoogleAnalytics gaId="" />
    </html>
  );
}
