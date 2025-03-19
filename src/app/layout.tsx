import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Toaster } from "sonner";
import BprogressProvider from "@/lib/BprogressProvider";
import StateProvider from "@/lib/StateProvider";

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
    <StateProvider>
      <html lang="en">
        <body className="antialiased flex flex-col justify-center items-center min-h-screen w-full font-trebuchetMs bg-[#F2EFE9]">
          <BprogressProvider>
            <Header />
            <main className="flex-grow h-full w-full max-w-[1440px] bg-white">
              {children}
            </main>
            <Footer />
          </BprogressProvider>
          <Toaster position="top-center" />
        </body>
      </html>
    </StateProvider>
  );
}
