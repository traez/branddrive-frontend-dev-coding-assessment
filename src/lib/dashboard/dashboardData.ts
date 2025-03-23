// data/dashboardData.ts
import { MetricData, SalesData } from "./dashboardTYpes";

export const metricsData: MetricData = {
  totalUsers: 12458,
  userChange: 12.3,
  activeSessions: 842,
  sessionChange: 8.7,
  salesRevenue: 87429,
  revenueChange: 5.2,
};

export const salesTrendData: SalesData[] = [
  { month: "Jan", revenue: 42500 },
  { month: "Feb", revenue: 47800 },
  { month: "Mar", revenue: 54200 },
  { month: "Apr", revenue: 59800 },
  { month: "May", revenue: 63400 },
  { month: "Jun", revenue: 87429 },
];
