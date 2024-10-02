import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import { Urbanist, Poppins } from "next/font/google";

const urbanist = Urbanist({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-body",
});
const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-header",
});

export const metadata: Metadata = {
  title: "Meio",
  description:
    "Rassemblez enfin vos équipes et données, pour suivre et piloter vos projets",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={`${poppins.variable} ${urbanist.variable}`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
