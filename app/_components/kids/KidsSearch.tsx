import { kidsScreen } from "@/app/_data/kids";
import { SearchIcon } from "./icons";

export function KidsSearch() {
  return (
    <div className="mb-[22px] flex items-center gap-[11px] rounded-[14px] border border-[#ECE0D0] bg-[#FFFDF9] px-4 py-3">
      <SearchIcon stroke="#B0A290" className="h-[18px] w-[18px]" />
      <input
        type="text"
        placeholder={kidsScreen.searchPlaceholder}
        className="min-w-0 flex-1 border-none bg-transparent font-sans text-[15px] text-[#3F362E]"
      />
    </div>
  );
}
