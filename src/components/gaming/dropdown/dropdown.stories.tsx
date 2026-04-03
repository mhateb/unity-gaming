import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import type { ComponentType } from "react";
import { useState } from "react";

import { Dropdown, type DropdownOption } from "./dropdown";

const figmaOptions: DropdownOption[] = [
  {
    value: "bento",
    label: "Last 30 days",
    title: "Bento 3D Kit",
    subtitle: "Illustration",
  },
  {
    value: "bento2",
    label: "Last 30 days",
    title: "Bento 3D Kit",
    subtitle: "Illustration",
  },
  {
    value: "collab",
    label: "Last 30 days",
    title: "Collab UI Kit",
    subtitle: "Coded Template",
  },
];

const onDark = [
  (Story: ComponentType) => (
    <div className="flex min-h-[320px] items-start justify-center bg-gaming-surface p-10 pt-24">
      <Story />
    </div>
  ),
];

const meta = {
  title: "Gaming/Dropdown",
  component: Dropdown,
  parameters: { layout: "fullscreen" },
  tags: ["autodocs"],
  decorators: onDark,
  argTypes: {
    disabled: { control: "boolean" },
    placeholder: { control: "text" },
  },
  args: {
    options: figmaOptions,
    defaultValue: "bento",
    placeholder: "Выберите…",
    disabled: false,
  },
} satisfies Meta<typeof Dropdown>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {};

export const Controlled: Story = {
  args: { defaultValue: undefined },
  render: function ControlledStory(args) {
    const [value, setValue] = useState("bento");
    return (
      <div className="flex flex-col items-center gap-4">
        <Dropdown
          {...args}
          value={value}
          onValueChange={(v) => setValue(v ?? "bento")}
        />
        <p className="text-sm text-gaming-neutral-deactive">value: {value}</p>
      </div>
    );
  },
};

export const InitiallyOpen: Story = {
  args: {
    defaultOpen: true,
    defaultValue: "collab",
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    defaultValue: "bento",
  },
};

export const PlaceholderOnly: Story = {
  args: {
    defaultValue: undefined,
    value: undefined,
    placeholder: "Период",
  },
};

export const LongLabels: Story = {
  args: {
    options: [
      {
        value: "a",
        label: "Очень длинный текст в триггере для проверки обрезки",
        title: "Длинное название набора компонентов",
        subtitle: "Подзаголовок тоже может быть длинным",
      },
      {
        value: "b",
        label: "Коротко",
        title: "Короткий title",
        subtitle: "Subtitle",
      },
    ],
    defaultValue: "a",
  },
};
