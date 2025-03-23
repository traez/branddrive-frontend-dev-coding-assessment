import type { Metadata } from "next";
import LineChart from "@/components/dashboard/LineChart";

export const metadata: Metadata = {
  title: "BrandDrive Dashboard Linechart",
  description: "Created by Trae Zeeofor",
};

const pageLinechart = () => {
   return (
     <>
       <LineChart />
     </>
   );
};

export default pageLinechart;
