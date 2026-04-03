import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import type { ComponentType } from "react";

import { ActionButton } from "./action-button";

const onDark = [
  (Story: ComponentType) => (
    <div className="flex min-h-[200px] items-center justify-center bg-gaming-surface p-8">
      <Story />
    </div>
  ),
];

const meta = {
  title: "Gaming/ActionButton",
  component: ActionButton,
  parameters: { layout: "fullscreen" },
  tags: ["autodocs"],
  decorators: onDark,
  argTypes: {
    variant: {
      control: "select",
      options: ["primary", "white", "deactive"],
    },
    disabled: { control: "boolean" },
    children: { control: "text" },
  },
  args: {
    variant: "primary" as const,
    children: "Get Started",
    disabled: false,
  },
} satisfies Meta<typeof ActionButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {};

export const Primary: Story = {
  args: { variant: "primary", children: "Get Started" },
};

export const White: Story = {
  args: { variant: "white", children: "Get Started" },
};

export const Deactive: Story = {
  args: { variant: "deactive", children: "Get Started" },
};

export const PrimaryDisabled: Story = {
  args: { variant: "primary", disabled: true, children: "Get Started" },
};

export const WhiteDisabled: Story = {
  args: { variant: "white", disabled: true, children: "Get Started" },
};

export const RowAllVariants: Story = {
  name: "Все варианты",
  render: () => (
    <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
      <ActionButton variant="primary">Primary</ActionButton>
      <ActionButton variant="white">White</ActionButton>
      <ActionButton variant="deactive">Deactive</ActionButton>
    </div>
  ),
};
