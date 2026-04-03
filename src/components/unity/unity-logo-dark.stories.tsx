import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { UnityLogoDark } from "./unity-logo-dark";

const meta = {
  title: "Unity/UnityLogoDark",
  component: UnityLogoDark,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    href: { control: "text" },
  },
} satisfies Meta<typeof UnityLogoDark>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  args: {
    href: "/",
  },
  decorators: [
    (Story) => (
      <div className="rounded-lg bg-[#1c1c1c] px-8 py-6">
        <Story />
      </div>
    ),
  ],
};

export const WithLink: Story = {
  args: { href: "/" },
  decorators: Playground.decorators,
};

export const Static: Story = {
  name: "Без ссылки",
  args: { href: undefined },
  decorators: Playground.decorators,
};

export const OnLightBackground: Story = {
  name: "На светлом фоне",
  args: { href: "/" },
  decorators: [
    (Story) => (
      <div className="rounded-lg border bg-white px-8 py-6">
        <Story />
      </div>
    ),
  ],
};
