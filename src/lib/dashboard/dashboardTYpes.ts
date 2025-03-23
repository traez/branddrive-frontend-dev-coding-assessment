// types/dashboard.ts
export interface MetricData {
  totalUsers: number;
  userChange: number;
  activeSessions: number;
  sessionChange: number;
  salesRevenue: number;
  revenueChange: number;
}

export interface SalesData {
  month: string;
  revenue: number;
}
