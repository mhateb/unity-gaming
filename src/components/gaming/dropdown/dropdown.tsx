"use client";

import { Select } from "@base-ui/react/select";
import { ChevronDown, ChevronRight } from "lucide-react";
import type { ComponentProps } from "react";

import { cn } from "@/lib/utils";

export type DropdownOption = {
  value: string;
  /** Текст в закрытом триггере при выбранном пункте */
  label: string;
  title: string;
  subtitle: string;
  disabled?: boolean;
};

export type DropdownProps = Omit<
  ComponentProps<typeof Select.Root<string, false>>,
  "children" | "items" | "multiple"
> & {
  options: DropdownOption[];
  /** Плейсхолдер, если значение не выбрано */
  placeholder?: string;
  className?: string;
  /** Обёртка триггера (ширина и т.п.) */
  triggerClassName?: string;
};

/** Dropdown из Figma `0:4482` — триггер normal / open, панель и строки title + subtitle */
export function Dropdown({
  options,
  placeholder = "Выберите…",
  className,
  triggerClassName,
  disabled,
  defaultValue,
  value,
  onValueChange,
  ...rootProps
}: DropdownProps) {
  const items = Object.fromEntries(options.map((o) => [o.value, o.label])) as Record<
    string,
    string
  >;

  return (
    <Select.Root<string, false>
      items={items}
      disabled={disabled}
      defaultValue={defaultValue ?? undefined}
      value={value ?? undefined}
      onValueChange={onValueChange}
      modal={false}
      {...rootProps}
    >
      <div className={cn("relative inline-block min-w-[14.6875rem] font-sans", className)}>
        <Select.Trigger
          className={cn(
            "group/trigger flex h-14 w-full min-w-0 items-center justify-between gap-2 rounded-2xl border-2 border-transparent px-[23px] py-2 text-left text-sm font-semibold leading-5 outline-none transition-colors",
            "bg-[rgb(228_228_228)]/10 text-gaming-neutral-deactive",
            "hover:bg-gaming-white/10",
            "focus-visible:ring-2 focus-visible:ring-gaming-secondary-light/50 focus-visible:ring-offset-2 focus-visible:ring-offset-gaming-surface",
            "data-[popup-open]:border-gaming-secondary-light data-[popup-open]:bg-[#242731] data-[popup-open]:text-gaming-white",
            "disabled:pointer-events-none disabled:opacity-50",
            triggerClassName
          )}
        >
          <Select.Value placeholder={placeholder} className="min-w-0 flex-1 truncate" />
          <Select.Icon className="flex size-6 shrink-0 items-center justify-center text-current">
            <ChevronDown
              aria-hidden
              className="size-3 transition-transform duration-200 group-data-[popup-open]/trigger:rotate-180"
              strokeWidth={2.5}
            />
          </Select.Icon>
        </Select.Trigger>

        <Select.Portal>
          <Select.Positioner
            className="z-50 outline-none"
            sideOffset={8}
            align="start"
            alignItemWithTrigger={false}
          >
            <Select.Popup
              className={cn(
                "font-sans origin-[var(--transform-origin)] rounded-3xl border border-gaming-neutral-light-a10 bg-[#242731] p-8 shadow-[0_12px_36px_rgb(0_0_0/0.35)]",
                "min-w-[20.9375rem] max-w-[min(100vw-2rem,21rem)]",
                "data-[starting-style]:scale-95 data-[starting-style]:opacity-0",
                "data-[ending-style]:scale-95 data-[ending-style]:opacity-0"
              )}
            >
              <Select.List className="flex flex-col gap-6 font-sans outline-none">
                {options.map((opt) => (
                  <Select.Item
                    key={opt.value}
                    value={opt.value}
                    disabled={opt.disabled}
                    className={cn(
                      "flex min-h-11 w-full cursor-pointer items-center gap-4 rounded-xl font-sans outline-none",
                      "data-[highlighted]:bg-gaming-white/5",
                      "data-[disabled]:pointer-events-none data-[disabled]:opacity-40"
                    )}
                  >
                    <div className="flex min-w-0 flex-1 flex-col pt-1">
                      <span className="text-base font-semibold leading-[22px] text-gaming-white">
                        {opt.title}
                      </span>
                      <span className="text-[13px] font-medium leading-[18px] text-gaming-neutral-deactive">
                        {opt.subtitle}
                      </span>
                    </div>
                    <span className="flex size-6 shrink-0 items-center justify-center text-gaming-white">
                      <ChevronRight aria-hidden className="size-4" strokeWidth={2} />
                    </span>
                  </Select.Item>
                ))}
              </Select.List>
            </Select.Popup>
          </Select.Positioner>
        </Select.Portal>
      </div>
    </Select.Root>
  );
}
