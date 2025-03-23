import Link from "next/link";

const DashboardHome = () => {
  return (
    <section className="w-full max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4 mx-auto text-center">
        Welcome to BrandDrive Dashboard
      </h1>
      <p className="text-gray-600 mb-6 mx-auto text-center">
        Get insights into your data with interactive charts and tables. Select a
        section below to explore.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white shadow-md rounded-lg p-4">
          <h2 className="text-xl font-semibold">Metrics</h2>
          <p className="text-gray-500">
            View key performance indicators and analytics.
          </p>
          <Link
            href="/dashboard/metrics"
            className="text-blue-500 hover:underline"
          >
            Go to Metrics
          </Link>
        </div>

        <div className="bg-white shadow-md rounded-lg p-4">
          <h2 className="text-xl font-semibold">Line Chart</h2>
          <p className="text-gray-500">
            Analyze trends over time with line charts.
          </p>
          <Link
            href="/dashboard/linechart"
            className="text-blue-500 hover:underline"
          >
            View Line Chart
          </Link>
        </div>

        <div className="bg-white shadow-md rounded-lg p-4">
          <h2 className="text-xl font-semibold">Bar Chart</h2>
          <p className="text-gray-500">
            Compare values with bar chart visualizations.
          </p>
          <Link
            href="/dashboard/barchart"
            className="text-blue-500 hover:underline"
          >
            Explore Bar Chart
          </Link>
        </div>

        <div className="bg-white shadow-md rounded-lg p-4">
          <h2 className="text-xl font-semibold">Pie Chart</h2>
          <p className="text-gray-500">View proportional data distributions.</p>
          <Link
            href="/dashboard/piechart"
            className="text-blue-500 hover:underline"
          >
            See Pie Chart
          </Link>
        </div>

        <div className="bg-white shadow-md rounded-lg p-4">
          <h2 className="text-xl font-semibold">Table</h2>
          <p className="text-gray-500">
            Examine structured data in a tabular format.
          </p>
          <Link
            href="/dashboard/table"
            className="text-blue-500 hover:underline"
          >
            View Table
          </Link>
        </div>
      </div>
    </section>
  );
};

export default DashboardHome;
