import Image from "next/image";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center h-full w-full p-4 text-center">
      <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100">
        Mini Business Intelligence Tool
      </h1>
      <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
        Gain insights into your business with real-time metrics and data
        visualization.
      </p>
      <p className="mt-4 text-lg dark:text-gray-300 font-bold text-blue-800">
        A BrandDrive Frontend Developer Coding Assessment submission.
      </p>
      <div className="relative w-full max-w-[450px] aspect-square">
        <Image
          src="/landing-image.png"
          alt="Dashboard preview"
          fill
          sizes="(min-width: 360px) 100vw"
          className="object-contain rounded-lg"
        />
      </div>
    </section>
  );
}
