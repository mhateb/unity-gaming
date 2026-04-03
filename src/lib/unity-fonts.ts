import { Inter } from "next/font/google";

/** Inter — единый UI-шрифт проекта (как у кнопок, body, меню в макете Figma). */
export const unitySans = Inter({
  subsets: ["latin", "cyrillic"],
  variable: "--font-unity-body",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});
