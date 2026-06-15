import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Finetec Engineering | Sheet Metal Fabrication Singapore",
  description:
    "Finetec Engineering provides precision sheet metal fabrication, laser cutting, welding, bending, shearing, and engineering services in Singapore.",
  metadataBase: new URL("https://www.finetecengineering.com"),
  openGraph: {
    title: "Finetec Engineering",
    description:
      "Precision sheet metal fabrication backed by 20+ years of experience in Singapore.",
    url: "https://www.finetecengineering.com",
    siteName: "Finetec Engineering",
    locale: "en_SG",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-SG" className={geistSans.variable}>
      <body>{children}</body>
    </html>
  );
}
