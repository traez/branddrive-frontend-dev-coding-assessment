import type { Metadata } from "next";
import TableData from "@/components/dashboard/TableData";

export const metadata: Metadata = {
  title: "BrandDrive Dashboard Table",
  description: "Created by Trae Zeeofor",
};

const pageTable = () => {
   return (
     <>
       <TableData />
     </>
   );
}

export default pageTable;