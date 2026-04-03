"use client";

import type { ComponentProps } from "react";
import { useId } from "react";

import { cn } from "@/lib/utils";

export type TextFieldProps = Omit<ComponentProps<"input">, "size"> & {
  /** Подпись над полем (Figma caption 12 / `0:4479`) */
  label: string;
  className?: string;
  inputClassName?: string;
};

/** Текстовое поле профиля — Figma `0:4475` (normal / focus). */
export function TextField({
  label,
  id: idProp,
  className,
  inputClassName,
  disabled,
  ...inputProps
}: TextFieldProps) {
  const uid = useId();
  const id = idProp ?? uid;

  return (
    <div className={cn("flex w-full max-w-[370px] flex-col gap-4 font-sans", className)}>
      <label
        htmlFor={id}
        className="text-xs font-medium leading-4 text-gaming-neutral-deactive"
      >
        {label}
      </label>
      <input
        id={id}
        disabled={disabled}
        className={cn(
          "h-14 w-full min-w-0 rounded-lg border-2 border-transparent bg-[rgb(228_228_228)]/10 px-[23px] text-sm font-semibold leading-5 text-gaming-white outline-none transition-[color,background-color,border-color,box-shadow] placeholder:text-gaming-white/80",
          "hover:bg-gaming-white/5",
          "focus-visible:border-gaming-primary focus-visible:bg-transparent",
          "disabled:pointer-events-none disabled:opacity-50",
          inputClassName
        )}
        {...inputProps}
      />
    </div>
  );
}
