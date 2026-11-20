import type { ReactNode } from "react";

export function ActivateAccountShell({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#FBF4EC] px-5 py-10 md:px-10">
      {children}
    </div>
  );
}
