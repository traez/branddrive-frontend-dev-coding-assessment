import { ReactNode } from "react";

interface MetricCardProps {
  title: string;
  value: string;
  icon?: ReactNode;
  change?: string;
  changeType?: "increase" | "decrease" | "neutral";
}

export default function MetricCard({
  title,
  value,
  icon,
  change,
  changeType = "neutral",
}: MetricCardProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="flex justify-between items-start">
        <div>
          <p className="text-sm text-gray-500 font-medium">{title}</p>
          <h3 className="text-3xl font-bold mt-1">{value}</h3>

          {change && (
            <div
              className={`flex items-center mt-2 ${
                changeType === "increase"
                  ? "text-green-500"
                  : changeType === "decrease"
                  ? "text-red-500"
                  : "text-gray-500"
              }`}
            >
              <span className="text-sm font-medium">{change}</span>
            </div>
          )}
        </div>
        {icon && <div className="text-gray-400">{icon}</div>}
      </div>
    </div>
  );
}
