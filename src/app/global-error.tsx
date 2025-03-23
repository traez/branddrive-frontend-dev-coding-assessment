"use client";

export default function GlobalError({
  error,
}: {
  error: Error & { digest?: string };
}) {
  return (
    <html>
      <body className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
        <h2 className="text-2xl font-semibold text-red-600 mb-4">
          Something went wrong!
        </h2>
        {error?.message && (
          <p className="text-gray-700 text-sm mb-4">{error.message}</p>
        )}
        <button
          onClick={() => window.location.reload()}
          className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
        >
          Reload Page
        </button>
      </body>
    </html>
  );
}
