// src/styles/fonts.ts
import { Montserrat } from "next/font/google";

export const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["100", "400", "700"], // Personnalise les poids nécessaires
  style: ["normal", "italic"],
  display: "swap",
});
