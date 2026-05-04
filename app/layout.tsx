import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  title: "FastAuth — Sign up with email. Own a real wallet.",
  description:
    "FastAuth onboards users in seconds with any Auth0 method — email, social, passkey, or enterprise SSO — no seed phrases, no extensions, no wallet popups. One Auth0-backed identity, shared across every wallet and dApp in the NEAR ecosystem.",
  icons: {
    icon: "/brand/fastauth-mark.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-9HVGE9PZ10"
        strategy="afterInteractive"
      />
      <Script id="gtag-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-9HVGE9PZ10');
        `}
      </Script>
    </html>
  );
}
