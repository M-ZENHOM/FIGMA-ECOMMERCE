import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layouts/Header";
import { inter } from "@/lib/fonts";
import Navbar from "@/components/layouts/Navbar";
import Footer from "@/components/layouts/Footer";
import { ClerkProvider } from "@clerk/nextjs";
import { CartContextProvider } from "@/context/CartContext";
import MobileNav from "@/components/layouts/MobileNav";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <CartContextProvider>
        <html lang="en">
          <body className={inter.className}>
            <Navbar />
            <Header />
            <MobileNav />
            {children}
            <Footer />
          </body>
        </html>
      </CartContextProvider>
    </ClerkProvider>
  );
}
