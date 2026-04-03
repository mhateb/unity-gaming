import { Inter, Poppins } from "next/font/google";

/** Inter — UI: body, меню, кнопки, подписи (макет Unity Gaming / Figma). */
export const unitySans = Inter({
  subsets: ["latin", "cyrillic"],
  variable: "--font-unity-body",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

/** Poppins — дисплей и крупные заголовки (Figma: headline/h3 и линейка display). */
export const unityHeading = Poppins({
  subsets: ["latin", "latin-ext"],
  variable: "--font-unity-heading",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});
