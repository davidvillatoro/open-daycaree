import { brandName, feedCopy, feedUser } from "@/app/_data/feed";
import { kidsNavItems } from "@/app/_data/kids";
import type { KidProfile } from "@/app/_data/kids";
import { Sidebar } from "../feed/Sidebar";
import { AlergiesCard } from "./AlergiesCard";
import { ChevronIcon } from "./icons";
import { DaySummaryButton } from "./DaySummaryButton";
import { FamilyMembersList } from "./FamilyMembersList";
import { KidProfileDetails } from "./KidProfileDetails";
import { KidProfileHeader } from "./KidProfileHeader";

type KidProfilePageProps = {
  profile: KidProfile;
};

export function KidProfilePage({ profile }: KidProfilePageProps) {
  return (
    <div className="flex min-h-screen flex-col bg-[#F6ECDF] md:flex-row">
      <Sidebar
        brandName={brandName}
        user={feedUser}
        items={kidsNavItems}
        newPostLabel={feedCopy.newPostLabel}
        logoutLabel={feedCopy.closeSessionLabel}
      />
      <main className="min-w-0 flex-1 md:h-screen md:overflow-y-auto">
        <div className="mx-auto w-full max-w-[820px] px-[40px] pt-[34px] pb-[80px]">
          <a
            href="#"
            className="mb-[20px] flex items-center gap-[7px] text-[14px] font-bold text-[#94887B]"
          >
            <ChevronIcon
              className="h-[18px] w-[18px] rotate-180"
              strokeWidth={2.2}
            />
            {profile.backLabel}
          </a>
          <div className="flex flex-col gap-[18px] md:flex-row md:items-start md:gap-[26px]">
            <div className="flex min-w-0 flex-1 flex-col gap-[18px] md:min-w-[300px]">
              <KidProfileHeader profile={profile} />
              <AlergiesCard profile={profile} />
              <KidProfileDetails rows={profile.statsRows} />
            </div>
            <div className="flex w-full flex-col gap-[14px] md:w-[300px] md:shrink-0">
              <DaySummaryButton profile={profile} />
              <FamilyMembersList profile={profile} />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
