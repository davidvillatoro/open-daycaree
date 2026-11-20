import type { KidProfile } from "@/app/_data/kids";
import { DaySummaryIcon } from "./icons";

type DaySummaryButtonProps = {
  profile: KidProfile;
};

export function DaySummaryButton({ profile }: DaySummaryButtonProps) {
  return (
    <a
      href="#"
      className="flex w-full items-center justify-center gap-[9px] rounded-[14px] bg-[#3F362E] px-[13px] py-[13px] text-[15px] font-extrabold text-white"
    >
      <DaySummaryIcon stroke="#fff" strokeWidth={2} className="h-[18px] w-[18px]" />
      {profile.daySummaryLabel}
    </a>
  );
}
