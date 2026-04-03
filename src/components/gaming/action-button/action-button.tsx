import type { ComponentProps } from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

/** Стили по символам Figma: `button/primary`, `button/white/*`, `button/deactive` */
export const actionButtonVariants = cva(
  "h-auto min-h-14 rounded-2xl border px-[43px] py-[18px] text-sm font-bold leading-5 shadow-none transition-colors",
  {
    variants: {
      variant: {
        primary:
          "border-transparent bg-gaming-primary text-gaming-white hover:bg-gaming-primary/90 focus-visible:ring-gaming-white/30",
        white:
          "border-transparent bg-gaming-white text-gaming-surface hover:bg-gaming-on-white-hover focus-visible:ring-gaming-white/40",
        deactive:
          "pointer-events-none border-transparent bg-gaming-control-disabled-bg text-gaming-control-disabled-fg",
      },
    },
    defaultVariants: {
      variant: "primary",
    },
  }
);

export type ActionButtonProps = Omit<ComponentProps<typeof Button>, "variant"> &
  VariantProps<typeof actionButtonVariants>;

export function ActionButton({
  className,
  variant = "primary",
  disabled,
  ...props
}: ActionButtonProps) {
  const isDeactive = variant === "deactive";
  return (
    <Button
      variant="default"
      size="lg"
      type="button"
      disabled={disabled || isDeactive}
      className={cn(
        actionButtonVariants({ variant }),
        isDeactive && "disabled:pointer-events-none disabled:!opacity-100",
        className
      )}
      {...props}
    />
  );
}
