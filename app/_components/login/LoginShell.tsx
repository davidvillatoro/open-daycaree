import type { ReactNode } from "react";

export function LoginShell({ children }: { children: ReactNode }) {
  return (
    <div className="grid min-h-screen grid-cols-1 bg-[#FBF4EC] md:grid-cols-[1.05fr_1fr]">
      {children}
    </div>
  );
}
