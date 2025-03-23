import SignUp from "@/components/SignUp";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "BrandDrive Registration",
  description: "Created by Trae Zeeofor",
};

const pageRegistration = () => {
  return (
    <>
      <SignUp />
    </>
  );
};

export default pageRegistration;
