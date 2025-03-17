// src/styles/fonts.ts
import { Montserrat } from "next/font/google";
import { Open_Sans } from "next/font/google";
import { Roboto } from "next/font/google";
import { Poppins } from 'next/font/google';
import { Inter } from "next/font/google";

export const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["100", "400", "700"], // Personnalise les poids nécessaires
  style: ["normal", "italic"],
  display: "swap",
});

export const open_sans = Open_Sans({
  subsets: ["latin"],
  weight:["300","700"],
  style:["normal","italic"],
});

export const roboto = Roboto({
  subsets:["latin",],
  weight:["100","200","300","400","500","700"],
  style:["normal","italic"],
});
export const poppins = Poppins({
  subsets: ["latin"],
  weight: [ "300","400","500" ,"600","700"], // Specify the required weight
  style: ["normal"], // Specify the required style
});
export const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"], // Specify the required weights
  style: ["normal", "italic"], // Specify the required styles
});
