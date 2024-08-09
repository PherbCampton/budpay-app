import { proxy } from "valtio";

export const mailCreditsStore = proxy({
  inAppCredits: { balance: 0 },
  packages: [
    { id: 1, name: "Basic", credits: 5000, price: 5000 },
    { id: 2, name: "Star", credits: 10000, price: 10000 },
    { id: 3, name: "Gold", credits: 20000, price: 20000 },
    { id: 4, name: "Premium", credits: 50000, price: 50000 },
  ],
  user: {
    firstName: "Samuel",
    lastName: "Tuinperi",
    email: "tuinperisamuel@gmail.com",
  },
});
