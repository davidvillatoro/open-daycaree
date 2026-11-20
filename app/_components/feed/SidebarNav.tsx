import type { NavItem } from "@/app/_data/feed";
import { NavigationIcon } from "./icons";

export function SidebarNav({ items }: { items: NavItem[] }) {
  return (
    <nav className="flex min-w-0 gap-2 overflow-x-auto pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden md:flex-1 md:flex-col md:gap-1 md:overflow-visible md:pb-0">
      {items.map((item) => (
        <a
          key={item.id}
          href="#"
          className={`flex shrink-0 items-center gap-3 whitespace-nowrap rounded-xl px-3 py-2 text-[13.5px] md:shrink md:py-[11px] md:text-[14.5px] ${
            item.active
              ? "bg-[#FBE3D8] font-extrabold text-[#D9583C]"
              : "font-semibold text-[#6E6359]"
          }`}
        >
          <NavigationIcon name={item.icon} className="h-[19px] w-[19px]" />
          {item.label}
        </a>
      ))}
    </nav>
  );
}
