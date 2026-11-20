import type { KidProfile } from "@/app/_data/kids";
import { KidAvatar } from "./KidAvatar";

type KidProfileHeaderProps = {
  profile: KidProfile;
};

export function KidProfileHeader({ profile }: KidProfileHeaderProps) {
  return (
    <div className="flex items-center gap-[18px]">
      <KidAvatar
        avatarColor={profile.avatarColor}
        initials={profile.initials}
        initialsColor={profile.initialsColor}
        className="h-[84px] w-[84px] text-[34px]"
      />
      <div className="flex-1">
        <h1 className="font-display text-[28px] font-semibold text-[#3F362E]">
          {profile.name}
        </h1>
        <p className="mt-[3px] text-[15px] text-[#94887B]">{profile.meta}</p>
      </div>
      <a
        href="#"
        className="rounded-[12px] border border-[#ECE0D0] bg-[#FFFDF9] px-[16px] py-[9px] text-[14px] font-bold text-[#6E6359]"
      >
        {profile.editLabel}
      </a>
    </div>
  );
}
