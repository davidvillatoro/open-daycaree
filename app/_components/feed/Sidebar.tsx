import type { FeedUser, NavItem } from "@/app/_data/feed";
import { Brand } from "./Brand";
import { NewPostButton } from "./NewPostButton";
import { SidebarNav } from "./SidebarNav";
import { SidebarUser } from "./SidebarUser";

type SidebarProps = {
  brandName: string;
  user: FeedUser;
  items: NavItem[];
  newPostLabel: string;
  logoutLabel: string;
};

export function Sidebar({
  brandName,
  user,
  items,
  newPostLabel,
  logoutLabel,
}: SidebarProps) {
  return (
    <aside className="relative flex w-full min-w-0 shrink-0 flex-col gap-4 border-b border-[#ECE0D0] bg-[#FFFDF9] px-4 py-4 md:sticky md:top-0 md:h-screen md:w-[248px] md:gap-0 md:border-b-0 md:border-r md:py-6">
      <div className="flex flex-wrap items-center gap-3 md:block">
        <Brand name={brandName} roomLabel={user.roomLabel} />
        <NewPostButton label={newPostLabel} />
      </div>
      <SidebarNav items={items} />
      <SidebarUser user={user} logoutLabel={logoutLabel} />
    </aside>
  );
}
