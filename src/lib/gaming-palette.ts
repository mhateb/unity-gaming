/**
 * Цвета из Figma StyleGuide (Color Palette 1 + White).
 * Дублируют `src/app/gaming-palette.css` для использования в TS (графики, canvas, темы).
 */
export const gamingPalette = {
  surface: "#1f2128",
  neutral: {
    dark: "#1b1d21",
    deactive: "#808191",
    light: "#f0f3f6",
    lightA10: "rgb(240 243 246 / 0.1)",
  },
  primary: {
    DEFAULT: "#6c5dd3",
    tint: "#cfc8ff",
    a5: "rgb(108 93 211 / 0.05)",
    a10: "rgb(108 93 211 / 0.1)",
    a50: "rgb(108 93 211 / 0.5)",
    a75: "rgb(108 93 211 / 0.75)",
  },
  secondary: {
    DEFAULT: "#0049c6",
    light: "#3f8cff",
    pale: "#a0d7e7",
    deep: "#002685",
  },
  accent1: {
    DEFAULT: "#ffa2c0",
    tint: "#ffb7f5",
    tintA50: "rgb(255 183 245 / 0.5)",
  },
  accent2: {
    DEFAULT: "#ffce73",
    mid: "#ff9a7b",
    hot: "#ff754c",
  },
  white: {
    DEFAULT: "#ffffff",
    a5: "rgb(255 255 255 / 0.05)",
    a10: "rgb(255 255 255 / 0.1)",
    a20: "rgb(255 255 255 / 0.2)",
    a40: "rgb(255 255 255 / 0.4)",
    a60: "rgb(255 255 255 / 0.6)",
    a70: "rgb(255 255 255 / 0.7)",
    a80: "rgb(255 255 255 / 0.8)",
  },
  control: {
    onWhiteHover: "#e8e9ef",
    disabledBg: "#2f323a",
    disabledFg: "#6e7179",
  },
} as const;
