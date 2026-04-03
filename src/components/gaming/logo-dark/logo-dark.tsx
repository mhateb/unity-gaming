import Image from "next/image";
import Link from "next/link";

import { cn } from "@/lib/utils";

/** Figma MCP assets — при необходимости замени на файлы в `/public` (URL истекают). */
const GAME_MARK = "https://www.figma.com/api/mcp/asset/1e141129-f340-4728-ba57-a2628b3e4be8";
const WORDMARK = "https://www.figma.com/api/mcp/asset/a998928b-2cb6-46cb-a6b6-fea89c48479f";

export type LogoDarkProps = {
  className?: string;
  /** Ссылка; если не задана — логотип без `<a>` */
  href?: string;
};

/** Тёмный вариант логотипа — 176×40 */
export function LogoDark({ className, href }: LogoDarkProps) {
  const content = (
    <span
      className={cn("relative inline-flex h-10 w-[176px] shrink-0 items-center", className)}
      data-name="Logo/Dark"
    >
      <Image
        src={GAME_MARK}
        alt=""
        width={40}
        height={40}
        className="size-10 shrink-0 object-contain"
        unoptimized
      />
      <span className="relative ml-1 flex min-w-0 flex-1 items-center justify-center px-1">
        <Image
          src={WORDMARK}
          alt="Unity."
          width={120}
          height={24}
          className="h-6 w-auto max-w-full object-contain object-left"
          unoptimized
        />
      </span>
    </span>
  );

  if (href !== undefined) {
    return (
      <Link
        href={href}
        aria-label="Unity Gaming"
        className="inline-flex outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
      >
        {content}
      </Link>
    );
  }

  return content;
}
