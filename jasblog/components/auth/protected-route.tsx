"use client";

import { useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";

/**
 * ProtectedRoute
 * Placeholder route guard for authenticated areas (e.g., dashboard)
 * - Replace with Supabase auth session check
 * - Optionally show a loading state while verifying
 */
export function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();

  // TODO: wire up Supabase auth state (useSession or custom hook)
  const isAuthenticated = false;

  useEffect(() => {
    if (!isAuthenticated) {
      // Preserve intended destination via query param for post-login redirect
      const redirectTo = encodeURIComponent(pathname || "/");
      router.replace(`/login?redirect=${redirectTo}`);
    }
  }, [isAuthenticated, pathname, router]);

  if (!isAuthenticated) return null;

  return <>{children}</>;
}


