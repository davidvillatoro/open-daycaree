import type { FeedSummary } from "@/app/_data/feed";

export function FeedHeader({ summary }: { summary: FeedSummary }) {
  return (
    <div className="mb-5 md:mb-6">
      <div className="mb-1 text-[12.5px] font-extrabold tracking-[0.8px] text-[#D9583C]">
        {summary.orgLabel}
      </div>
      <h1 className="m-0 font-display text-[26px] font-semibold text-[#3F362E] sm:text-[30px]">
        {summary.greeting}
      </h1>
      <p className="mt-[5px] text-[14.5px] text-[#94887B]">{summary.meta}</p>
    </div>
  );
}
