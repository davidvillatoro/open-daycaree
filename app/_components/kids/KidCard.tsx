import Link from "next/link";
import type { Kid } from "@/app/_data/kids";import { ChevronIcon } from "./icons";
import { KidAvatar } from "./KidAvatar";
import { KidBadge } from "./KidBadge";

type KidCardProps = {
  kid: Kid;
};

export function KidCard({ kid }: KidCardProps) {
  const trailing =
    "badge" in kid.trailing ? (
      <KidBadge badge={kid.trailing.badge} />
    ) : (
      <ChevronIcon stroke="#CBB89F" strokeWidth={2.2} className="h-[18px] w-[18px]" />
    );

  return (
    <Link
      href={`/kids/${kid.id}`}      className="flex min-w-0 items-center gap-[14px] rounded-[18px] border border-[#ECE0D0] bg-[#FFFDF9] p-[16px] shadow-[0_4px_14px_-12px_rgba(120,90,60,.5)] hover:translate-y-[-2px] hover:border-[#F2A78E]"
    >
      <KidAvatar
        avatarColor={kid.avatarColor}
        initials={kid.initials}
        initialsColor={kid.initialsColor}
      />
      <div className="flex min-w-0 flex-1 flex-col">
        <span className="truncate font-display font-semibold text-[16px] text-[#3F362E]">
          {kid.name}
        </span>
        <span className="truncate text-[13px] text-[#A89A8B]">{kid.line}</span>
      </div>
      {trailing}
    </Link>
  );
}
