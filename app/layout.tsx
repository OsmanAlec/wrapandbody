import Navigation from "./components/navigation";
import Footer from "./components/navigation/footer";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Body Wraps, Massages & Fat Reduction | Ashbourne Co. Meath",
  description:
    "Discover Cryogenic Wraps, Detox Wraps, Vibro Massage, Pressotherapy, EMS Sculpting, and more at our Ashbourne, Co. Meath clinic. Relax, rejuvenate, and achieve your goals with non-invasive treatments.",
  keywords: [
    "Body Wraps",
    "Cryogenic Wrap",
    "Detox Wrap",
    "Anti Cellulite",
    "Massage Ashbourne",
    "Vibro Massage",
    "Cupping",
    "Pressotherapy",
    "Fat Reduction",
    "EMS Sculpting",
    "Endospheres Therapy",
    "LPG Treatment",
    "Cavitation",
    "RF Lifting",
    "Lipo Laser",
    "Ashbourne Spa",
    "Meath Wellness",
  ],
  openGraph: {
    title: "Wrap and Shape Treatments in Ashbourne",
    description:
      "Professional body wraps, massages, and fat reduction treatments in Ashbourne, Co. Meath. Book your session today.",
    url: "https://www.wrapandshape.ie",
    siteName: "Wrap and Shape",
    locale: "en_IE",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navigation></Navigation>
        <br className="my-2"></br>
        {children}
        <Footer></Footer>
      </body>
    </html>
  );
}
