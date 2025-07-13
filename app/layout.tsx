import Navigation from "./components/navigation";
import Footer from "./components/navigation/footer";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Wrap & Shape",
  description: "Wrap & Shape where you meet your dream self.",
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
