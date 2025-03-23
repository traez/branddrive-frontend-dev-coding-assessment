// components/MetricsSummary.tsx
import React from "react";
import MetricCard from "./MetricCard";
import { FaUsers } from "react-icons/fa";
import { MdOutlineTimer } from "react-icons/md";
import { GiCash } from "react-icons/gi";
import { metricsData } from "@/lib/dashboard/dashboardData";

export default function MetricsSummary() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
      <MetricCard
        title="Total Users"
        value={metricsData.totalUsers.toLocaleString()}
        icon={<FaUsers size={24} />}
        change={`+${metricsData.userChange}%`}
        changeType="increase"
      />

      <MetricCard
        title="Active Sessions"
        value={metricsData.activeSessions.toLocaleString()}
        icon={<MdOutlineTimer size={24} />}
        change={`+${metricsData.sessionChange}%`}
        changeType="increase"
      />

      <MetricCard
        title="Sales Revenue"
        value={`$${metricsData.salesRevenue.toLocaleString()}`}
        icon={<GiCash size={24} />}
        change={`+${metricsData.revenueChange}%`}
        changeType="increase"
      />
    </div>
  );
}
