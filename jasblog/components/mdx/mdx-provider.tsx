"use client";

import type { ComponentProps } from "react";

// Placeholder MDXProvider. Replace with real provider from next-mdx-remote or @mdx-js/react
export function MDXProvider({ children }: { children: React.ReactNode }) {
  return <div className="mdx-content">{children}</div>;
}

// Example shortcodes/components to be used inside MDX
export function Callout({ children, type = "info" }: { children: React.ReactNode; type?: "info" | "warn" | "success" }) {
  const styles: Record<string, string> = {
    info: "bg-blue-50 text-blue-800 dark:bg-blue-950/40 dark:text-blue-200",
    warn: "bg-yellow-50 text-yellow-800 dark:bg-yellow-950/40 dark:text-yellow-200",
    success: "bg-green-50 text-green-800 dark:bg-green-950/40 dark:text-green-200",
  };
  return <div className={`rounded-md p-4 text-sm ${styles[type]}`}>{children}</div>;
}

export function MDXImage(props: ComponentProps<'img'>) {
  // TODO: replace with next/image if desired
  return <img {...props} alt={props.alt} className="rounded-md" />;
}


