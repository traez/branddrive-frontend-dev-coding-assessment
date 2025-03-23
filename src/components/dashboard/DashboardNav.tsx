"use client"; 
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function DashboardNav() {
  const pathname = usePathname();

  return (
    <nav className="flex flex-row justify-center items-center gap-4 bg-white p-4 shadow-md">
      <Link
        href="/dashboard/metrics"
        className={`transition duration-200 ${
          pathname === "/dashboard/metrics"
            ? "font-bold text-blue-500 underline"
            : "hover:text-blue-500 hover:underline"
        }`}
      >
        Metrics
      </Link>
      <Link
        href="/dashboard/linechart"
        className={`transition duration-200 ${
          pathname === "/dashboard/linechart"
            ? "font-bold text-blue-500 underline"
            : "hover:text-blue-500 hover:underline"
        }`}
      >
        Line Chart
      </Link>
      <Link
        href="/dashboard/barchart"
        className={`transition duration-200 ${
          pathname === "/dashboard/barchart"
            ? "font-bold text-blue-500 underline"
            : "hover:text-blue-500 hover:underline"
        }`}
      >
        Bar Chart
      </Link>
      <Link
        href="/dashboard/piechart"
        className={`transition duration-200 ${
          pathname === "/dashboard/piechart"
            ? "font-bold text-blue-500 underline"
            : "hover:text-blue-500 hover:underline"
        }`}
      >
        Pie Chart
      </Link>
      <Link
        href="/dashboard/table"
        className={`transition duration-200 ${
          pathname === "/dashboard/table"
            ? "font-bold text-blue-500 underline"
            : "hover:text-blue-500 hover:underline"
        }`}
      >
        Table
      </Link>
    </nav>
  );
}
