import type { Metadata } from "next";
import { Kanit } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import mongodbConnect from "@/lib/mongodb";
// import NavMenu from "@/components/NavMenu";

const kanit = Kanit({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  await mongodbConnect();
  return (
    <html lang="en">
      <body className={kanit.className}>
        <Navbar />
        {/* <NavMenu /> */}
        {children}
        <Footer />
      </body>
    </html>
  );
}
