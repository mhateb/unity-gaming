"use client";

import { Tabs as TabsPrimitive } from "@base-ui/react/tabs";
import type { ComponentProps } from "react";

import { cn } from "@/lib/utils";

/** Корень: макет `tab/style 02/full-bar` (Figma 0:9324) */
export function Tabs({ className, ...props }: ComponentProps<typeof TabsPrimitive.Root>) {
  return <TabsPrimitive.Root data-slot="tabs" className={cn(className)} {...props} />;
}

export function TabsList({ className, ...props }: ComponentProps<typeof TabsPrimitive.List>) {
  return (
    <TabsPrimitive.List
      data-slot="tabs-list"
      className={cn(
        "flex flex-wrap items-center gap-1 bg-transparent font-sans",
        className
      )}
      {...props}
    />
  );
}

export function TabsTrigger({ className, ...props }: ComponentProps<typeof TabsPrimitive.Tab>) {
  return (
    <TabsPrimitive.Tab
      data-slot="tabs-trigger"
      className={cn(
        "inline-flex h-9 shrink-0 cursor-pointer items-center justify-center rounded-xl border border-transparent px-[18px] py-2 font-sans text-sm font-semibold leading-5 text-gaming-neutral-deactive transition-colors",
        "outline-none focus-visible:ring-2 focus-visible:ring-gaming-primary/40 focus-visible:ring-offset-2 focus-visible:ring-offset-gaming-surface",
        "data-[active]:bg-gaming-primary data-[active]:text-gaming-white",
        "hover:text-gaming-white/75 data-[active]:hover:bg-gaming-primary/90 data-[active]:hover:text-gaming-white",
        "disabled:pointer-events-none disabled:text-gaming-control-disabled-fg data-[disabled]:text-gaming-control-disabled-fg",
        className
      )}
      {...props}
    />
  );
}

export function TabsContent({ className, ...props }: ComponentProps<typeof TabsPrimitive.Panel>) {
  return (
    <TabsPrimitive.Panel
      data-slot="tabs-content"
      className={cn(
        "mt-4 font-sans text-sm text-gaming-white outline-none focus-visible:ring-2 focus-visible:ring-gaming-primary/40",
        className
      )}
      {...props}
    />
  );
}
