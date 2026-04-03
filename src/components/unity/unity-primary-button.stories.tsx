import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { UnityPrimaryButton } from "./unity-primary-button";

const meta = {
  title: "Unity/UnityPrimaryButton",
  component: UnityPrimaryButton,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    disabled: { control: "boolean" },
    children: { control: "text" },
  },
  args: {
    children: "Get Started",
    disabled: false,
  },
} satisfies Meta<typeof UnityPrimaryButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {};

export const Default: Story = {
  args: { children: "Get Started" },
};

export const CustomLabel: Story = {
  args: { children: "Играть сейчас" },
};

export const Disabled: Story = {
  args: { disabled: true, children: "Get Started" },
};

export const LongText: Story = {
  args: {
    children: "Очень длинная подпись на кнопке",
  },
};
