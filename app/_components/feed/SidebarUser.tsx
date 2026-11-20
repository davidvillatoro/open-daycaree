import type { FeedUser } from "@/app/_data/feed";
import { Avatar } from "./Avatar";
import { LogoutIcon } from "./icons";

type SidebarUserProps = {
  user: FeedUser;
  logoutLabel: string;
};

export function SidebarUser({ user, logoutLabel }: SidebarUserProps) {
  return (
    <div className="border-t border-[#ECE0D0] pt-3 md:mt-[10px] md:pt-[14px]">
      <div className="flex items-center gap-[11px] px-2 py-1 md:py-[6px]">
        <Avatar tone="user" initials={user.initials} />
        <div className="min-w-0 flex-1">
          <div className="truncate text-[14px] font-extrabold text-[#3F362E]">
            {user.name}
          </div>
          <div className="text-[12px] text-[#A89A8B]">{user.roleLabel}</div>
        </div>
        <button
          type="button"
          title={logoutLabel}
          aria-label={logoutLabel}
          className="flex h-8 w-8 shrink-0 items-center justify-center rounded-[10px] bg-[#F6ECDF] text-[#94887B]"
        >
          <LogoutIcon className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}
