import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import type { ComponentType } from "react";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "./tabs";

const onDark = [
  (Story: ComponentType) => (
    <div className="min-h-[240px] bg-gaming-surface p-8">
      <Story />
    </div>
  ),
];

const meta = {
  title: "Gaming/Tabs",
  component: Tabs,
  parameters: { layout: "fullscreen" },
  tags: ["autodocs"],
  decorators: onDark,
} satisfies Meta<typeof Tabs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  render: () => (
    <Tabs defaultValue="creative">
      <TabsList aria-label="Категории">
        <TabsTrigger value="creative">Creative</TabsTrigger>
        <TabsTrigger value="photoshop">Photoshop</TabsTrigger>
        <TabsTrigger value="animation">Animation</TabsTrigger>
      </TabsList>
      <TabsContent value="creative">Контент вкладки Creative</TabsContent>
      <TabsContent value="photoshop">Контент вкладки Photoshop</TabsContent>
      <TabsContent value="animation">Контент вкладки Animation</TabsContent>
    </Tabs>
  ),
};

/** Как в макете Figma: одна активная «капсула», остальные — серый текст */
export const FullBarLikeFigma: Story = {
  name: "Полоса как в Figma",
  render: () => (
    <Tabs defaultValue="creative">
      <TabsList aria-label="Навыки">
        <TabsTrigger value="creative">Creative</TabsTrigger>
        <TabsTrigger value="photoshop">Photoshop</TabsTrigger>
        <TabsTrigger value="animation">Animation</TabsTrigger>
        <TabsTrigger value="illustration">Illustration</TabsTrigger>
        <TabsTrigger value="after">After Effect</TabsTrigger>
      </TabsList>
      <TabsContent value="creative">Creative</TabsContent>
      <TabsContent value="photoshop">Photoshop</TabsContent>
      <TabsContent value="animation">Animation</TabsContent>
      <TabsContent value="illustration">Illustration</TabsContent>
      <TabsContent value="after">After Effect</TabsContent>
    </Tabs>
  ),
};

export const WithDisabled: Story = {
  name: "С отключённой вкладкой",
  render: () => (
    <Tabs defaultValue="a">
      <TabsList aria-label="Пример">
        <TabsTrigger value="a">Активна</TabsTrigger>
        <TabsTrigger value="b" disabled>
          Недоступна
        </TabsTrigger>
        <TabsTrigger value="c">Ещё одна</TabsTrigger>
      </TabsList>
      <TabsContent value="a">Панель A</TabsContent>
      <TabsContent value="c">Панель C</TabsContent>
    </Tabs>
  ),
};
