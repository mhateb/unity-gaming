import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import type { ComponentType } from "react";

import { UnityText, type UnityTextVariant } from "./unity-text";

const variants: UnityTextVariant[] = [
  "d1",
  "d2",
  "d3",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "menu",
  "title",
  "caption1",
  "caption2",
  "body",
  "bodySmall",
  "button",
  "buttonSmall",
];

const labels: Record<UnityTextVariant, string> = {
  d1: "d1",
  d2: "d2",
  d3: "d3",
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  h5: "h5",
  h6: "h6",
  menu: "Menu",
  title: "Title",
  caption1: "Caption 1",
  caption2: "Caption 2",
  body: "Body",
  bodySmall: "Body small",
  button: "Button",
  buttonSmall: "Button small",
};

const figmaDarkDecorator = [
  (Story: ComponentType) => (
    <div className="min-h-[200px] bg-unity-bg-1 p-8 text-white">
      <Story />
    </div>
  ),
];

const meta = {
  title: "Unity/UnityText",
  component: UnityText,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: variants,
    },
    children: { control: "text" },
  },
  args: {
    variant: "h1" as UnityTextVariant,
    children: "Заголовок",
  },
  decorators: figmaDarkDecorator,
} satisfies Meta<typeof UnityText>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {};

export const D1: Story = { args: { variant: "d1", children: labels.d1 } };
export const D2: Story = { args: { variant: "d2", children: labels.d2 } };
export const D3: Story = { args: { variant: "d3", children: labels.d3 } };
export const H1: Story = { args: { variant: "h1", children: labels.h1 } };
export const H2: Story = { args: { variant: "h2", children: labels.h2 } };
export const H3: Story = { args: { variant: "h3", children: labels.h3 } };
export const H4: Story = { args: { variant: "h4", children: labels.h4 } };
export const H5: Story = { args: { variant: "h5", children: labels.h5 } };
export const H6: Story = { args: { variant: "h6", children: labels.h6 } };
export const Menu: Story = { args: { variant: "menu", children: labels.menu } };
export const Title: Story = { args: { variant: "title", children: labels.title } };
export const Caption1: Story = { args: { variant: "caption1", children: labels.caption1 } };
export const Caption2: Story = { args: { variant: "caption2", children: labels.caption2 } };
export const Body: Story = { args: { variant: "body", children: labels.body } };
export const BodySmall: Story = { args: { variant: "bodySmall", children: labels.bodySmall } };
export const Button: Story = { args: { variant: "button", children: labels.button } };
export const ButtonSmall: Story = { args: { variant: "buttonSmall", children: labels.buttonSmall } };

export const AllVariants: Story = {
  render: () => (
    <div className="flex max-w-xl flex-col gap-6">
      {variants.map((v) => (
        <UnityText key={v} variant={v}>
          {labels[v]}
        </UnityText>
      ))}
    </div>
  ),
};

export const OnLightBackground: Story = {
  name: "На светлом фоне",
  args: { variant: "body", children: "Текст body на светлом фоне — цвет приглушённый." },
  decorators: [
    (Story) => (
      <div className="min-h-[120px] bg-white p-8 text-foreground">
        <Story />
      </div>
    ),
  ],
};
