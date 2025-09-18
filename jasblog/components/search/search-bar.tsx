"use client";

import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command";

export function SearchBar() {
  // TODO: wire to search index (e.g., Supabase full-text search)
  return (
    <div className="w-full max-w-xl">
      <Command className="rounded-lg border">
        <CommandInput placeholder="Search posts, tags, authors..." aria-label="Search" />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Recent Searches">
            <CommandItem>MDX</CommandItem>
            <CommandItem>AI</CommandItem>
          </CommandGroup>
        </CommandList>
      </Command>
    </div>
  );
}


