export type SalesAgent = {
  id: string;
  agentName: string;
  email: string;
  hireDate: string;
  salesTarget: number;
  salesAchieved: number;
  commissionDue: number;
};

export const mySalesAgentData: SalesAgent[] = [
  {
    id: "1",
    agentName: "Chukwuemeka Okafor",
    email: "chukwuemeka@example.com",
    hireDate: "2023-05-15",
    salesTarget: 15000,
    salesAchieved: 16499.99,
    commissionDue: 824.99,
  },
  {
    id: "2",
    agentName: "Aisha Bello",
    email: "aisha@example.com",
    hireDate: "2024-01-10",
    salesTarget: 12000,
    salesAchieved: 10899.5,
    commissionDue: 0,
  },
  {
    id: "3",
    agentName: "Tunde Balogun",
    email: "tunde@example.com",
    hireDate: "2022-11-22",
    salesTarget: 18000,
    salesAchieved: 19550.75,
    commissionDue: 977.53,
  },
  {
    id: "4",
    agentName: "Ngozi Uche",
    email: "ngozi@example.com",
    hireDate: "2023-08-05",
    salesTarget: 10000,
    salesAchieved: 8720.25,
    commissionDue: 0,
  },
  {
    id: "5",
    agentName: "Ibrahim Yusuf",
    email: "ibrahim@example.com",
    hireDate: "2024-02-18",
    salesTarget: 14000,
    salesAchieved: 13349.99,
    commissionDue: 0,
  },
  {
    id: "6",
    agentName: "Fatima Danjuma",
    email: "fatima@example.com",
    hireDate: "2022-06-30",
    salesTarget: 16000,
    salesAchieved: 15100.0,
    commissionDue: 0,
  },
  {
    id: "7",
    agentName: "Oluwaseun Adeyemi",
    email: "oluwaseun@example.com",
    hireDate: "2023-09-12",
    salesTarget: 12000,
    salesAchieved: 11975.5,
    commissionDue: 0,
  },
  {
    id: "8",
    agentName: "Amaka Nwosu",
    email: "amaka@example.com",
    hireDate: "2021-11-08",
    salesTarget: 20000,
    salesAchieved: 21600.45,
    commissionDue: 1080.02,
  },
  {
    id: "9",
    agentName: "Babatunde Ojo",
    email: "babatunde@example.com",
    hireDate: "2022-03-25",
    salesTarget: 17000,
    salesAchieved: 17450.0,
    commissionDue: 872.5,
  },
  {
    id: "10",
    agentName: "Chinaza Obi",
    email: "chinaza@example.com",
    hireDate: "2024-01-05",
    salesTarget: 11000,
    salesAchieved: 9890.75,
    commissionDue: 0,
  },
];
