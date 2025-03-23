import type { Metadata } from "next";
import PieChart from "@/components/dashboard/PieChart";

export const metadata: Metadata = {
  title: "BrandDrive Dashboard Piechart",
  description: "Created by Trae Zeeofor",
};

const pagePiechart = () => {
 return (
   <>
     <PieChart />
   </>
 );
};

export default pagePiechart;
