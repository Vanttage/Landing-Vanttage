import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/app/components/layout/Navbar";
import Footer from "@/app/components/layout/Footer";

export const metadata: Metadata = {
  title: "Vanttage",
  description: "Boutique de Ingeniería de Software",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className="bg-black text-white">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
