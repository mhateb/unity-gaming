import type { ComponentProps } from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

/** Стили по символам Figma: `button/primary`, `button/white/*`, `button/deactive` */
const unityButtonVariants = cva(
  "h-auto min-h-14 rounded-2xl border px-[43px] py-[18px] text-sm font-bold leading-5 shadow-none transition-colors",
  {
    variants: {
      variant: {
        primary:
          "border-transparent bg-[#6c5dd3] text-white hover:bg-[#6c5dd3]/90 focus-visible:ring-white/30",
        white:
          "border-transparent bg-white text-[#1f2128] hover:bg-[#e8e9ef] focus-visible:ring-white/40",
        deactive:
          "pointer-events-none border-transparent bg-[#2f323a] text-[#6e7179]",
      },
    },
    defaultVariants: {
      variant: "primary",
    },
  }
);

export type UnityButtonProps = Omit<ComponentProps<typeof Button>, "variant"> &
  VariantProps<typeof unityButtonVariants>;

export function UnityButton({
  className,
  variant = "primary",
  disabled,
  ...props
}: UnityButtonProps) {
  const isDeactive = variant === "deactive";
  return (
    <Button
      variant="default"
      size="lg"
      type="button"
      disabled={disabled || isDeactive}
      className={cn(
        unityButtonVariants({ variant }),
        isDeactive && "disabled:pointer-events-none disabled:!opacity-100",
        className
      )}
      {...props}
    />
  );
}
