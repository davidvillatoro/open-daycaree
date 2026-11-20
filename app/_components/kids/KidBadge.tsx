import type { KidBadge } from "@/app/_data/kids";

type KidBadgeProps = {
  badge: KidBadge;
};

export function KidBadge({ badge }: KidBadgeProps) {
  return (
    <span
      className="rounded-[999px] px-[9px] py-[5px] text-[11px] font-extrabold"
      style={{ backgroundColor: badge.background, color: badge.color }}
    >
      {badge.label}
    </span>
  );
}
