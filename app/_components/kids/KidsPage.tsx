import { brandName, feedCopy, feedUser } from "@/app/_data/feed";
import { kidsNavItems } from "@/app/_data/kids";
import { Sidebar } from "../feed/Sidebar";
import { KidsHeader } from "./KidsHeader";
import { KidsGrid } from "./KidsGrid";
import { KidsSearch } from "./KidsSearch";
import { SalaLabel } from "./SalaLabel";

export function KidsPage() {
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
        <div className="mx-auto w-full max-w-[880px] px-[40px] pt-[34px] pb-[80px]">
          <KidsHeader />
          <KidsSearch />
          <SalaLabel />
          <KidsGrid />
        </div>
      </main>
    </div>
  );
}
