import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import type { ComponentType } from "react";

import { Typography } from "@/components/gaming/typography";
import { Checkbox } from "./checkbox";

const onDark = [
  (Story: ComponentType) => (
    <div className="flex min-h-[200px] items-center justify-center bg-gaming-surface p-8">
      <Story />
    </div>
  ),
];

const meta = {
  title: "Gaming/Checkbox",
  component: Checkbox,
  parameters: { layout: "fullscreen" },
  tags: ["autodocs"],
  decorators: onDark,
  argTypes: {
    disabled: { control: "boolean" },
    defaultChecked: { control: "boolean" },
  },
  args: {
    disabled: false,
    defaultChecked: false,
  },
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {};

export const Checked: Story = {
  args: { defaultChecked: true },
};

export const Disabled: Story = {
  args: { disabled: true },
};

export const DisabledChecked: Story = {
  args: { disabled: true, defaultChecked: true },
};

/** Секции как в макете Figma `0:4498`. */
export const FigmaNode4498: Story = {
  name: "Макет 0:4498",
  render: () => (
    <div className="flex flex-col gap-10 font-sans">
      <header className="flex flex-col gap-2">
        <Typography variant="h3">Checkbox</Typography>
        <div className="h-2 w-10 rounded bg-gaming-secondary-pale" aria-hidden />
      </header>
      <div className="flex flex-col gap-12 sm:flex-row sm:gap-24">
        <section className="flex flex-col gap-4">
          <div className="flex flex-col gap-1 border-b border-gaming-neutral-light-a10 pb-2">
            <Typography variant="menu" as="span">
              Uncheck
            </Typography>
          </div>
          <Checkbox aria-label="Unchecked example" />
        </section>
        <section className="flex flex-col gap-4">
          <div className="flex flex-col gap-1 border-b border-gaming-neutral-light-a10 pb-2">
            <Typography variant="menu" as="span">
              Checked
            </Typography>
          </div>
          <Checkbox defaultChecked aria-label="Checked example" />
        </section>
      </div>
    </div>
  ),
};
