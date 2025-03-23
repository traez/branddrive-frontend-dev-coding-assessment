"use client";
import { useEffect, useState } from "react";
import "@/lib/dashboard/chartConfig";
import { data } from "@/lib/dashboard/barData";
import { Bar } from "react-chartjs-2";
import { ChartData } from "chart.js/auto";

interface BarChartProps {
  chartData: ChartData<"bar">;
}

const BarChartSub = ({ chartData }: BarChartProps) => {
  return (
    <div className="chart-container h-96 w-full">
      <div className="h-full">
        <Bar
          data={chartData}
          options={{
            plugins: {
              title: {
                display: true,
                text: "Net User Growth 2016-2020",
              },
              legend: {
                display: true,
                position: "top",
              },
              tooltip: {
                callbacks: {
                  label: (context) => {
                    const value = context.raw as number;
                    return `Net Growth: ${value.toLocaleString()}`;
                  },
                },
              },
            },
            maintainAspectRatio: false,
            scales: {
              y: {
                beginAtZero: true,
                title: {
                  display: true,
                  text: "Number of Users",
                },
              },
              x: {
                title: {
                  display: true,
                  text: "Year",
                },
              },
            },
          }}
        />
      </div>
    </div>
  );
};

const BarChart = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Create a color function that assigns different colors based on growth value
  const getBarColor = (value: number) => {
    return value > 0 ? "#4CAF50" : "#F44336"; // Green for positive, red for negative
  };

  // Make sure we handle potentially undefined userGrowth values
  const growthValues = data.map((item) => item.userGrowth ?? 0); // Use nullish coalescing to default to 0

  // Define chartData with proper typing
  const chartData: ChartData<"bar"> = {
    labels: data.map((item) => item.year.toString()),
    datasets: [
      {
        label: "Net User Growth",
        data: growthValues,
        backgroundColor: growthValues.map((value) => getBarColor(value)),
        borderColor: growthValues.map((value) => {
          const bgColor = getBarColor(value);
          return bgColor === "#4CAF50" ? "#3D8B3D" : "#D32F2F"; // Darker border
        }),
        borderWidth: 1,
      },
    ],
  };

  if (!mounted) {
    return (
      <div className="h-96 w-full flex items-center justify-center">
        Loading chart...
      </div>
    );
  }

  return (
    <div className="w-full py-4 flex flex-col justify-center items-center">
      <h2 className="text-center text-xl font-bold mb-6">
        User Growth Analysis (2016-2020)
      </h2>
      <div className="w-full max-w-2xl mx-auto">
        <BarChartSub chartData={chartData} />
      </div>
      <div className="mt-4 text-sm text-gray-600">
        <p>
          Green bars indicate positive growth, red bars indicate negative growth
        </p>
      </div>
    </div>
  );
};

export default BarChart;
