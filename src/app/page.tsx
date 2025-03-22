import ContextSandbox from "@/components/ContextSandbox";

export default async function Home() {

  return (
    <div className="flex flex-col items-center justify-center h-full gap-8">
      <ContextSandbox />
    </div>
  );
}
