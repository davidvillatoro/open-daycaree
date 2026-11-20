import { PhotoIcon } from "./icons";

export function PhotoPlaceholder({ caption }: { caption: string }) {
  return (
    <a
      href="#"
      className="mt-[14px] flex h-[200px] flex-col items-center justify-center gap-2 rounded-[16px] border-[1.5px] border-dashed border-[#DBCDBA] bg-[#F4ECE1] text-[#B0A290]"
    >
      <PhotoIcon className="h-[30px] w-[30px]" strokeWidth={1.7} />
      <span className="text-[13.5px]">{caption}</span>
    </a>
  );
}
