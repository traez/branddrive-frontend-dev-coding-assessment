export interface SalesDataPoint {
  id: number;
  year: number;
  revenue: number;
  unitsSold: number;
}

export const salesData: SalesDataPoint[] = [
  { id: 1, year: 2016, revenue: 120000, unitsSold: 2450 },
  { id: 2, year: 2017, revenue: 156000, unitsSold: 3200 },
  { id: 3, year: 2018, revenue: 178500, unitsSold: 3800 },
  { id: 4, year: 2019, revenue: 210000, unitsSold: 4300 },
  { id: 5, year: 2020, revenue: 165000, unitsSold: 3100 },
  { id: 6, year: 2021, revenue: 195000, unitsSold: 3700 },
];
