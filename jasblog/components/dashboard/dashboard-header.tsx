"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Bell, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { UserNav } from "@/components/user-nav";

export function DashboardHeader() {
  const pathname = usePathname();
  const isPosts = pathname?.startsWith("/dashboard") || pathname?.startsWith("/posts");

  return (
    <header className="sticky top-0 z-40 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between gap-3">
        <div className="flex flex-1 items-center gap-3">
          <Link href="/dashboard" className="font-semibold">Dashboard</Link>
          <div className="hidden flex-1 items-center md:flex">
            <Input placeholder="Search posts, tags, analytics..." className="max-w-md" aria-label="Search dashboard" />
          </div>
        </div>
        <div className="flex items-center gap-2">
          {isPosts && (
            <Link href="/posts/create">
              <Button size="sm" className="gap-2" aria-label="Create post">
                <Plus className="h-4 w-4" /> New Post
              </Button>
            </Link>
          )}
          <Button variant="ghost" size="icon" aria-label="Notifications">
            <Bell className="h-5 w-5" />
          </Button>
          <UserNav />
        </div>
      </div>
    </header>
  );
}


