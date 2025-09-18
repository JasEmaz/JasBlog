"use client";

import { useState } from "react";
import { Badge } from "@/components/ui/badge";

export function TagFilter({ tags, onChange }: { tags: string[]; onChange?: (vals: string[]) => void }) {
  const [active, setActive] = useState<string[]>([]);

  function toggle(tag: string) {
    const next = active.includes(tag) ? active.filter((t) => t !== tag) : [...active, tag];
    setActive(next);
    onChange?.(next);
  }

  return (
    <div className="flex flex-wrap gap-2">
      {tags.map((tag) => (
        <button key={tag} type="button" onClick={() => toggle(tag)} aria-pressed={active.includes(tag)}>
          <Badge variant={active.includes(tag) ? "default" : "secondary"}>#{tag}</Badge>
        </button>
      ))}
    </div>
  );
}


