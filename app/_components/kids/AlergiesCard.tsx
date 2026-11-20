import type { KidProfile } from "@/app/_data/kids";
import { AlertIcon } from "./icons";

type AlergiesCardProps = {
  profile: KidProfile;
};

export function AlergiesCard({ profile }: AlergiesCardProps) {
  return (
    <div className="flex gap-[14px] rounded-[16px] bg-[#FBDAD6] p-[16px_18px]">
      <div className="flex h-[40px] w-[40px] shrink-0 items-center justify-center rounded-[11px] bg-[#F4A8A0]">
        <AlertIcon stroke="#fff" strokeWidth={2.2} className="h-[22px] w-[22px]" />
      </div>
      <div>
        <div className="mb-[2px] text-[15px] font-extrabold text-[#C5413A]">
          {profile.alergiesTitle}
        </div>
        <div className="text-[14.5px] leading-[1.5] text-[#B25249]">
          {profile.alergiesText}
        </div>
      </div>
    </div>
  );
}
