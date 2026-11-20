import { kidsScreen } from "@/app/_data/kids";

export function SalaLabel() {
  return (
    <div className="mb-[14px] flex items-center gap-[12px]">
      <span className="text-[12.5px] font-extrabold tracking-[0.8px] text-[#3F362E]">
        {kidsScreen.salaTitle}
      </span>
      <span className="text-[13px] text-[#A89A8B]">{kidsScreen.kidsCountLabel}</span>
      <span className="h-[1px] flex-1 bg-[#E7DAC8]" />
    </div>
  );
}
