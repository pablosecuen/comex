import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "./components/Nabvar/Navbar";
import WhatsappNav from "./components/WhatsappNav/WhatsappNav";
import Footer from "./components/Footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Parana Comex",
  description: "International Comex Compañy",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        <WhatsappNav />
        <Footer />
      </body>
    </html>
  );
}
