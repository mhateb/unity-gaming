import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import type { ComponentType } from "react";

import { TextField } from "./text-field";

const onDark = [
  (Story: ComponentType) => (
    <div className="flex min-h-[200px] items-start justify-center bg-gaming-surface p-8">
      <Story />
    </div>
  ),
];

const meta = {
  title: "Gaming/TextField",
  component: TextField,
  parameters: { layout: "fullscreen" },
  tags: ["autodocs"],
  decorators: onDark,
  argTypes: {
    disabled: { control: "boolean" },
    label: { control: "text" },
    placeholder: { control: "text" },
  },
  args: {
    label: "Your Full Name",
    placeholder: "Name",
    disabled: false,
  },
} satisfies Meta<typeof TextField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {};

export const Empty: Story = {
  args: { placeholder: "Name", defaultValue: "" },
};

export const Filled: Story = {
  args: { defaultValue: "Tran Mau Tri Tam", placeholder: "" },
};

export const Disabled: Story = {
  args: { disabled: true, defaultValue: "Name" },
};

export const RowStates: Story = {
  name: "Normal и заполненное",
  render: () => (
    <div className="flex flex-col gap-10 sm:flex-row sm:items-start sm:gap-14">
      <TextField label="Your Full Name" placeholder="Name" />
      <TextField label="Your Full Name" defaultValue="Tran Mau Tri Tam" />
    </div>
  ),
};
