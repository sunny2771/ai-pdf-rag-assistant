import { Bricolage_Grotesque, Source_Serif_4 } from "next/font/google";

// UI and headings
export const uiFont = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-ui",
  display: "swap",
});

// The sample document in the demo, so it reads like a real page
export const docFont = Source_Serif_4({
  subsets: ["latin"],
  variable: "--font-doc",
  display: "swap",
});
