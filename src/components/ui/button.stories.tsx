import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { Button } from "./button";

const variants = ["default", "outline", "secondary", "ghost", "destructive", "link"] as const;

const sizes = ["xs", "sm", "default", "lg", "icon", "icon-xs", "icon-sm", "icon-lg"] as const;

const meta = {
  title: "UI/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: variants,
    },
    size: {
      control: "select",
      options: sizes,
    },
    disabled: { control: "boolean" },
    children: { control: "text" },
  },
  args: {
    children: "Кнопка",
    variant: "default",
    size: "default",
    disabled: false,
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {};

export const Default: Story = {
  args: { variant: "default", children: "Default" },
};

export const Outline: Story = {
  args: { variant: "outline", children: "Outline" },
};

export const Secondary: Story = {
  args: { variant: "secondary", children: "Secondary" },
};

export const Ghost: Story = {
  args: { variant: "ghost", children: "Ghost" },
};

export const Destructive: Story = {
  args: { variant: "destructive", children: "Удалить" },
};

export const Link: Story = {
  args: { variant: "link", children: "Ссылка" },
};

export const Disabled: Story = {
  args: { variant: "default", disabled: true, children: "Недоступна" },
};

export const DisabledOutline: Story = {
  args: { variant: "outline", disabled: true, children: "Недоступна" },
};

export const Invalid: Story = {
  args: {
    variant: "outline",
    children: "Ошибка",
    "aria-invalid": true,
  },
};

export const SizeXs: Story = {
  args: { size: "xs", children: "XS" },
};

export const SizeSm: Story = {
  args: { size: "sm", children: "SM" },
};

export const SizeLg: Story = {
  args: { size: "lg", children: "LG" },
};

export const SizeIcon: Story = {
  args: {
    size: "icon",
    children: (
      <span aria-hidden className="text-base leading-none">
        +
      </span>
    ),
    "aria-label": "Добавить",
  },
};

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-col gap-3">
      {variants.map((variant) => (
        <div key={variant} className="flex flex-wrap items-center gap-2">
          <span className="w-28 shrink-0 text-xs text-muted-foreground">{variant}</span>
          <Button variant={variant} size="default">
            {variant}
          </Button>
          <Button variant={variant} size="default" disabled>
            disabled
          </Button>
        </div>
      ))}
    </div>
  ),
  parameters: {
    layout: "padded",
  },
};

export const AllSizes: Story = {
  render: () => (
    <div className="flex flex-wrap items-end gap-3">
      <Button size="xs">XS</Button>
      <Button size="sm">SM</Button>
      <Button size="default">Default</Button>
      <Button size="lg">LG</Button>
      <Button size="icon-xs" aria-label="icon xs">
        +
      </Button>
      <Button size="icon-sm" aria-label="icon sm">
        +
      </Button>
      <Button size="icon" aria-label="icon">
        +
      </Button>
      <Button size="icon-lg" aria-label="icon lg">
        +
      </Button>
    </div>
  ),
  parameters: {
    layout: "padded",
  },
};
