import type { Metadata } from "next";
import BarChart from "@/components/dashboard/BarChart";

export const metadata: Metadata = {
  title: "BrandDrive Dashboard Barchart",
  description: "Created by Trae Zeeofor",
};

const pageBarchart = () => {
  return (
    <>
      <BarChart />
    </>
  );
};

export default pageBarchart;