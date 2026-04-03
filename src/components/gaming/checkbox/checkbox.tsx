import { Check } from "lucide-react";
import { forwardRef, type ComponentProps } from "react";

import { cn } from "@/lib/utils";

export type CheckboxProps = Omit<ComponentProps<"input">, "type" | "size">;

/** Чекбокс — Figma `0:4498` (tab/style 02: unchecked border, checked fill + icon). */
export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(function Checkbox(
  { className, disabled, ...props },
  ref
) {
  return (
    <span className={cn("relative inline-flex size-4 shrink-0", className)}>
      <input
        ref={ref}
        type="checkbox"
        disabled={disabled}
        className="peer absolute inset-0 z-10 size-4 cursor-pointer appearance-none opacity-0 disabled:cursor-not-allowed"
        {...props}
      />
      <span
        className={cn(
          "pointer-events-none flex size-4 items-center justify-center rounded border-2 border-gaming-white/20 bg-transparent transition-[background-color,border-color,opacity]",
          "peer-checked:border-transparent peer-checked:bg-gaming-primary",
          "peer-focus-visible:ring-2 peer-focus-visible:ring-gaming-white/30 peer-focus-visible:ring-offset-2 peer-focus-visible:ring-offset-gaming-surface",
          "peer-disabled:opacity-50",
          "peer-checked:[&_svg]:opacity-100"
        )}
        aria-hidden
      >
        <Check
          aria-hidden
          strokeWidth={3}
          className="size-2.5 text-gaming-white opacity-0 transition-opacity"
        />
      </span>
    </span>
  );
});
