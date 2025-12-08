// cn() = "className"
// Combines classes safely:
// • clsx → removes false/undefined values (e.g. isActive && "active")
// • twMerge → fixes duplicate/conflicting Tailwind classes (p-4 + p-8 → only p-8)
// Use cn(...) instead of className="..."

import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export const cn = (...inputs) => {
  return twMerge(clsx(inputs));
};
