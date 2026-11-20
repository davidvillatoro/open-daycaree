import type { KidProfileStatsRow } from "@/app/_data/kids";

type KidProfileDetailsProps = {
  rows: KidProfileStatsRow[];
};

export function KidProfileDetails({ rows }: KidProfileDetailsProps) {
  return (
    <div className="overflow-hidden rounded-[16px] border border-[#ECE0D0] bg-[#FFFDF9]">
      {rows.map((row, index) => (
        <div
          key={row.label}
          className={`flex justify-between px-[18px] py-[15px] ${
            index < rows.length - 1 ? "border-b border-[#F0E6D8]" : ""
          }`}
        >
          <span className="text-[14.5px] text-[#94887B]">{row.label}</span>
          <span className="text-[14.5px] font-extrabold text-[#3F362E]">
            {row.value}
          </span>
        </div>
      ))}
    </div>
  );
}
