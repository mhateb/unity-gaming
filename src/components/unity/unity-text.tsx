import { cva, type VariantProps } from "class-variance-authority";
import { createElement, type ComponentPropsWithoutRef, type ElementType, type ReactNode } from "react";

import { cn } from "@/lib/utils";

const unityTextVariants = cva("not-italic", {
  variants: {
    variant: {
      d1: "font-sans text-[96px] font-semibold leading-[120px] tracking-[-1px] text-foreground",
      d2: "font-sans text-[72px] font-semibold leading-[88px] tracking-[-1px] text-foreground",
      d3: "font-sans text-[64px] font-semibold leading-[72px] tracking-[-1px] text-foreground",
      h1: "font-sans text-[56px] font-semibold leading-[64px] tracking-[-1px] text-foreground",
      h2: "font-sans text-[48px] font-semibold leading-none tracking-[-1px] text-foreground",
      h3: "font-sans text-[40px] font-semibold leading-none tracking-[-1px] text-foreground",
      h4: "font-sans text-[32px] font-medium leading-none tracking-[-0.5px] text-foreground",
      h5: "font-sans text-[24px] font-medium leading-[32px] text-foreground",
      h6: "font-sans text-[18px] font-medium leading-[24px] text-foreground",
      menu: "font-sans text-[14px] font-semibold leading-5 text-foreground",
      title: "font-sans text-base font-semibold leading-none text-foreground",
      caption1: "font-sans text-[13px] font-medium leading-[18px] text-unity-muted",
      caption2: "font-sans text-xs font-medium leading-4 text-unity-muted",
      body: "font-sans text-sm font-normal leading-6 text-unity-muted",
      bodySmall: "font-sans text-[13px] font-normal leading-6 text-unity-muted",
      button: "font-sans text-sm font-bold leading-5 text-foreground",
      buttonSmall: "font-sans text-[13px] font-bold leading-5 text-foreground",
    },
  },
  defaultVariants: {
    variant: "body",
  },
});

export type UnityTextVariant = NonNullable<VariantProps<typeof unityTextVariants>["variant"]>;

const defaultElement: Record<UnityTextVariant, ElementType> = {
  d1: "div",
  d2: "div",
  d3: "div",
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  h5: "h5",
  h6: "h6",
  menu: "span",
  title: "span",
  caption1: "span",
  caption2: "span",
  body: "p",
  bodySmall: "p",
  button: "span",
  buttonSmall: "span",
};

export type UnityTextProps<T extends ElementType = "p"> = {
  variant: UnityTextVariant;
  as?: T;
  className?: string;
  children?: ReactNode;
} & Omit<ComponentPropsWithoutRef<T>, "as" | "children" | "className">;

export function UnityText<T extends ElementType = "p">({
  variant,
  as,
  className,
  children,
  ...props
}: UnityTextProps<T>) {
  const Comp = as ?? defaultElement[variant];
  return createElement(Comp, {
    className: cn(unityTextVariants({ variant }), className),
    "data-unity-text": variant,
    ...props,
    children,
  } as ComponentPropsWithoutRef<typeof Comp>);
}

export { unityTextVariants };
