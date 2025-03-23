import SignIn from "@/components/SignIn";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "BrandDrive SignIn",
  description: "Created by Trae Zeeofor",
};

const pageSignIn = () => {
  return (
    <>
      <SignIn/>
    </>
  );
};

export default pageSignIn;
