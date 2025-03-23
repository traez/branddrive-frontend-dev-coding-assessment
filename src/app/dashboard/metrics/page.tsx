import type { Metadata } from "next";
import MetricsSummary from "@/components/dashboard/MetricsSummary";

export const metadata: Metadata = {
  title: "BrandDrive Dashboard Metrics",
  description: "Created by Trae Zeeofor",
};

const pageMetrics = () => {
   return (
       <>
         <MetricsSummary />
       </>
     );
};

export default pageMetrics;
