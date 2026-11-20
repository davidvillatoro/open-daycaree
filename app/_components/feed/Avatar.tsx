import { MegaphoneIcon } from "./icons";

export type AvatarTone = "user" | "child" | "general";

type AvatarProps = {
  tone: AvatarTone;
  initials?: string;
  className?: string;
};

const toneStyles: Record<AvatarTone, string> = {
  user: "bg-[#F2937A] text-white text-[16px]",
  child: "bg-[#A9D9E8] text-[#1F7A93] text-[17px]",
  general: "bg-[#CCD8F4] text-[#4E72C8]",
};

export function Avatar({ tone, initials, className }: AvatarProps) {
  const size = className ?? "h-[44px] w-[44px]";

  return (
    <div
      className={`flex ${size} shrink-0 items-center justify-center rounded-full font-display font-semibold ${toneStyles[tone]}`}
    >
      {tone === "general" ? (
        <MegaphoneIcon className="h-5 w-5" />
      ) : (
        initials
      )}
    </div>
  );
}
