import { cva, type VariantProps } from "class-variance-authority";
import {
  createElement,
  type ComponentPropsWithoutRef,
  type ElementType,
  type ReactNode,
} from "react";

import { cn } from "@/lib/utils";

/** По умолчанию белый текст. Приглушённый: `className="text-gaming-neutral-deactive"` или `text-unity-muted`. */
export const typographyVariants = cva("not-italic text-gaming-white", {
  variants: {
    variant: {
      d1: "font-heading text-[96px] font-semibold leading-[120px] tracking-[-1px]",
      d2: "font-heading text-[72px] font-semibold leading-[88px] tracking-[-1px]",
      d3: "font-heading text-[64px] font-semibold leading-[72px] tracking-[-1px]",
      h1: "font-heading text-[56px] font-semibold leading-[64px] tracking-[-1px]",
      h2: "font-heading text-[48px] font-semibold leading-none tracking-[-1px]",
      h3: "font-heading text-[40px] font-semibold leading-none tracking-[-1px]",
      h4: "font-sans text-[32px] font-medium leading-none tracking-[-0.5px]",
      h5: "font-sans text-[24px] font-medium leading-[32px]",
      h6: "font-sans text-[18px] font-medium leading-[24px]",
      menu: "font-sans text-[14px] font-semibold leading-5",
      title: "font-sans text-base font-semibold leading-none",
      caption1: "font-sans text-[13px] font-medium leading-[18px]",
      caption2: "font-sans text-xs font-medium leading-4",
      body: "font-sans text-sm font-normal leading-6",
      bodySmall: "font-sans text-[13px] font-normal leading-6",
      button: "font-sans text-sm font-bold leading-5",
      buttonSmall: "font-sans text-[13px] font-bold leading-5",
    },
  },
  defaultVariants: {
    variant: "body",
  },
});

export type TypographyVariant = NonNullable<VariantProps<typeof typographyVariants>["variant"]>;

const defaultElement: Record<TypographyVariant, ElementType> = {
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

export type TypographyProps<T extends ElementType = "p"> = {
  variant: TypographyVariant;
  as?: T;
  className?: string;
  children?: ReactNode;
} & Omit<ComponentPropsWithoutRef<T>, "as" | "children" | "className">;

export function Typography<T extends ElementType = "p">({
  variant,
  as,
  className,
  children,
  ...props
}: TypographyProps<T>) {
  const Comp = as ?? defaultElement[variant];
  return createElement(Comp, {
    className: cn(typographyVariants({ variant }), className),
    "data-typography-variant": variant,
    ...props,
    children,
  } as ComponentPropsWithoutRef<typeof Comp>);
}
