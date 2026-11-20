import { SunIcon } from "./icons";

type BrandProps = {
  name: string;
  roomLabel: string;
};

export function Brand({ name, roomLabel }: BrandProps) {
  return (
    <a href="#" className="flex items-center gap-[11px] px-2 md:pb-[22px] md:pt-1">
      <div className="flex h-[38px] w-[38px] shrink-0 items-center justify-center rounded-[12px] bg-[linear-gradient(155deg,#F8C3A8,#F2937A)] text-white">
        <SunIcon className="h-[21px] w-[21px]" strokeWidth={2.2} />
      </div>
      <div>
        <div className="font-display text-[17px] font-semibold leading-none text-[#3F362E]">
          {name}
        </div>
        <div className="mt-[2px] text-[11.5px] text-[#A89A8B]">{roomLabel}</div>
      </div>
    </a>
  );
}
