import Link from "next/link";
import AuthButtons from "@/components/AuthButtons";
import RegistrationButton from "@/components/RegistrationButton";

export default function Header() {
  return (
    <nav className="flex flex-col justify-center items-center gap-1 md:flex-row md:justify-between py-1 px-4 border-b-2 border-gray-800 bg-[#CCC5BD] text-black w-full max-w-[1440px]">
      <menu className="flex justify-start">
        <Link
          href="/"
          className="flex items-center self-center text-2xl font-semibold whitespace-nowrap hover:text-blue-900"
        >
          BrandDrive FDCA
        </Link>
      </menu>
      <aside className="flex justify-center items-center gap-2 md:gap-4">
        <RegistrationButton />

        <AuthButtons />

        <Link
          href="/dashboard"
          className="text-base font-semibold border-2 border-blue-900 px-2 py-1 rounded-md hover:bg-yellow-300 transition duration-300"
        >
          Dashboard
        </Link>
      </aside>
    </nav>
  );
}
