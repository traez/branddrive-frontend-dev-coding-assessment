import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "sonner";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Notification from "@/components/Notification";
import BprogressProvider from "@/lib/BprogressProvider";

export const metadata: Metadata = {
  title: "BrandDrive Frontend Dev Coding Assessment",
  description: "Created by Trae Zeeofor",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased flex flex-col justify-center items-center min-h-screen w-full font-trebuchetMs bg-[#E8F1FF]">
        <BprogressProvider>
          <Header />
          <main className="flex-grow h-full w-full max-w-[1440px] bg-white">
            <Notification />
            {children}
          </main>
          <Footer />
        </BprogressProvider>
        <Toaster position="top-center" />
      </body>
    </html>
  );
}
