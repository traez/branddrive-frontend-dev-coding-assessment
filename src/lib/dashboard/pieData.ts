export interface CategoryData {
  id: number;
  category: string;
  count: number;
  color: string;
}

export const categoryData: CategoryData[] = [
  { id: 1, category: "Technology", count: 120, color: "#FF6384" },
  { id: 2, category: "Finance", count: 85, color: "#36A2EB" },
  { id: 3, category: "Healthcare", count: 65, color: "#FFCE56" },
  { id: 4, category: "Education", count: 42, color: "#4BC0C0" },
  { id: 5, category: "Entertainment", count: 73, color: "#9966FF" },
];
