"use client";
import { useEffect, useState } from "react";
import "@/lib/dashboard/chartConfig";
import { salesData } from "@/lib/dashboard/salesData";
import { Line } from "react-chartjs-2";
import { ChartData } from "chart.js/auto"; // TypeScript types

interface LineChartProps {
  chartData: ChartData<"line">;
}

const LineChartSub = ({ chartData }: LineChartProps) => {
  return (
    <div className="chart-container h-96 w-full">
      <div className="h-full">
        <Line
          data={chartData}
          options={{
            plugins: {
              title: {
                display: true,
                text: "Sales Revenue vs Units Sold (2016-2021)",
              },
              legend: {
                display: true,
                position: "top",
              },
            },
            maintainAspectRatio: false,
            scales: {
              y: {
                beginAtZero: true,
                type: "linear",
                display: true,
                position: "left",
                title: {
                  display: true,
                  text: "Revenue ($)",
                },
              },
              y1: {
                type: "linear",
                display: true,
                position: "right",
                title: {
                  display: true,
                  text: "Units Sold",
                },
                grid: {
                  drawOnChartArea: false,
                },
              },
            },
          }}
        />
      </div>
    </div>
  );
};

const LineChart = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Define chartData as a constant
  const chartData = {
    labels: salesData.map((item) => item.year.toString()),
    datasets: [
      {
        label: "Revenue ($)",
        data: salesData.map((item) => item.revenue),
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        borderColor: "#4BC0C0",
        borderWidth: 2,
        tension: 0.3,
        pointBackgroundColor: "#4BC0C0",
        pointBorderColor: "#fff",
        pointHoverBackgroundColor: "#fff",
        pointHoverBorderColor: "#4BC0C0",
        yAxisID: "y",
      },
      {
        label: "Units Sold",
        data: salesData.map((item) => item.unitsSold),
        backgroundColor: "rgba(255, 159, 64, 0.2)",
        borderColor: "#FF9F40",
        borderWidth: 2,
        tension: 0.3,
        pointBackgroundColor: "#FF9F40",
        pointBorderColor: "#fff",
        pointHoverBackgroundColor: "#fff",
        pointHoverBorderColor: "#FF9F40",
        yAxisID: "y1",
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
        Sales Performance Analysis (2016-2021)
      </h2>
      <div className="w-full max-w-2xl mx-auto">
        <LineChartSub chartData={chartData} />
      </div>
    </div>
  );
};

export default LineChart;
