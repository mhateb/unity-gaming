import type { Preview } from "@storybook/nextjs-vite";
import { Geist_Mono } from "next/font/google";

import "../src/app/globals.css";
import { unityHeading, unitySans } from "../src/lib/unity-fonts";

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

/** Порталы (Select, Menu) монтируются в `body`; переменные next/font должны быть на `:root`. */
function registerRootFontVariables() {
  if (typeof document === "undefined") return;
  const root = document.documentElement;
  for (const token of [unitySans.variable, unityHeading.variable, geistMono.variable]) {
    for (const cls of token.split(/\s+/).filter(Boolean)) {
      root.classList.add(cls);
    }
  }
}
registerRootFontVariables();

const preview: Preview = {
  decorators: [
    (Story) => (
      <div
        className={`${unitySans.variable} ${unityHeading.variable} ${geistMono.variable} min-h-full font-sans antialiased`}
      >
        <Story />
      </div>
    ),
  ],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },

    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: "todo",
    },
  },
};

export default preview;
