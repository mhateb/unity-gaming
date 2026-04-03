import type { Preview } from "@storybook/nextjs-vite";
import { Geist_Mono } from "next/font/google";

import "../src/app/globals.css";
import { unitySans } from "../src/lib/unity-fonts";

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const preview: Preview = {
  decorators: [
    (Story) => (
      <div
        className={`${unitySans.variable} ${geistMono.variable} min-h-full antialiased`}
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
