import type { FamilyMember } from "@/app/_data/kids";
import { familyStatusStyles } from "@/app/_data/kids";
import { KidAvatar } from "./KidAvatar";

type FamilyMemberRowProps = {
  member: FamilyMember;
};

export function FamilyMemberRow({ member }: FamilyMemberRowProps) {
  const style = familyStatusStyles[member.status];
  return (
    <div className="flex items-center gap-[12px]">
      <KidAvatar
        avatarColor={member.avatarColor}
        initials={member.initials}
        initialsColor="#fff"
        className="h-[40px] w-[40px] text-[16px]"
      />
      <div className="min-w-0 flex-1">
        <div className="truncate text-[14.5px] font-extrabold text-[#3F362E]">
          {member.name}
        </div>
        <div className="truncate text-[12.5px] text-[#A89A8B]">
          {member.subtitle}
        </div>
      </div>
      <span
        className="shrink-0 rounded-[999px] px-[9px] py-[4px] text-[10.5px] font-extrabold"
        style={{ backgroundColor: style.background, color: style.color }}
      >
        {style.label}
      </span>
    </div>
  );
}
