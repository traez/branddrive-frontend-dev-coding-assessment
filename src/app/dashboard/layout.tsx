import Link from "next/link";
import type { Metadata } from "next";

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
        <nav className="flex flex-row justify-center items-center gap-4 bg-white p-4 shadow-md">
          <Link
            href="/dashboard/metrics"
            className="hover:text-blue-500 hover:underline transition duration-200"
          >
            Metrics
          </Link>
          <Link
            href="/dashboard/linechart"
            className="hover:text-blue-500 hover:underline transition duration-200"
          >
            Line Chart
          </Link>
          <Link
            href="/dashboard/barchart"
            className="hover:text-blue-500 hover:underline transition duration-200"
          >
            Bar Chart
          </Link>
          <Link
            href="/dashboard/piechart"
            className="hover:text-blue-500 hover:underline transition duration-200"
          >
            Pie Chart
          </Link>
          <Link
            href="/dashboard/table"
            className="hover:text-blue-500 hover:underline transition duration-200"
          >
            Table
          </Link>
        </nav>
        <div className="py-[2rem]">{children}</div>
      </section>
    </>
  );
}
