import { Roboto } from "next/font/google";

const robotoWeighed = Roboto({
  subsets: ["latin"],

  display: "swap",

  variable: "--font-roboto",
  weight: "500",
});

const robotoLight = Roboto({
  subsets: ["latin"],

  display: "swap",

  variable: "--font-roboto",
  weight: "100",
});

export { robotoWeighed, robotoLight };
