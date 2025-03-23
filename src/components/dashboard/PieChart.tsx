"use client";
import { useEffect, useState } from "react";
import "@/lib/dashboard/chartConfig";
import { categoryData } from "@/lib/dashboard/pieData";
import { Pie } from "react-chartjs-2";
import { ChartData } from "chart.js/auto"; //TypeScript types

interface PieChartProps {
  chartData: ChartData<"pie">;
}

const PieChartSub = ({ chartData }: PieChartProps) => {
  return (
    <div className="chart-container h-96 w-full">
      <div className="h-full">
        <Pie
          data={chartData}
          options={{
            plugins: {
              title: {
                display: true,
                text: "Category Distribution",
              },
              legend: {
                position: "right",
                labels: {
                  padding: 20,
                },
              },
              tooltip: {
                callbacks: {
                  label: function (context) {
                    const label = context.label || "";
                    const value = context.raw || 0;
                    const total = context.dataset.data.reduce(
                      (acc: number, data: number) => acc + data,
                      0
                    );
                    const percentage = Math.round(
                      ((value as number) / total) * 100
                    );
                    return `${label}: ${value} (${percentage}%)`;
                  },
                },
              },
            },
            maintainAspectRatio: false,
          }}
        />
      </div>
    </div>
  );
};

const PieChart = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Define chartData as a constant
  const chartData = {
    labels: categoryData.map((item) => item.category),
    datasets: [
      {
        label: "Category Distribution",
        data: categoryData.map((item) => item.count),
        backgroundColor: categoryData.map((item) => item.color),
        hoverBackgroundColor: categoryData.map((item) => item.color),
        borderWidth: 1,
        hoverBorderWidth: 3,
        hoverBorderColor: "#ffffff",
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
    <div className="w-full py-8 flex flex-col justify-center items-center">
      <h2 className="text-center text-xl font-bold mb-6">
        Category Distribution
      </h2>
      <div className="w-full max-w-2xl mx-auto">
        <PieChartSub chartData={chartData} />
      </div>
    </div>
  );
};

export default PieChart;
