import type { Metadata } from "next";
import DashboardNav from "@/components/dashboard/DashboardNav";

export const metadata: Metadata = {
  title: "BrandDrive Dashboard",
  description: "Created by Trae Zeeofor",
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <section className="flex flex-col justify-between items-center">
        <DashboardNav />
        <div className="py-[2rem]">{children}</div>
      </section>
    </>
  );
}
