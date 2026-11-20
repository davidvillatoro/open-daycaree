import { Avatar } from "./Avatar";
import { CameraIcon } from "./icons";

type ComposerPromptProps = {
  initials: string;
  prompt: string;
};

export function ComposerPrompt({ initials, prompt }: ComposerPromptProps) {
  return (
    <a
      href="#"
      className="mb-5 flex items-center gap-3 rounded-[18px] border border-[#ECE0D0] bg-[#FFFDF9] p-[14px] shadow-[0_4px_14px_-10px_rgba(120,90,60,.4)] sm:mb-6 sm:gap-[14px] sm:p-[14px_18px]"
    >
      <Avatar
        tone="user"
        initials={initials}
        className="h-[36px] w-[36px] sm:h-[40px] sm:w-[40px]"
      />
      <span className="flex-1 text-[14px] text-[#A89A8B] sm:text-[15px]">
        {prompt}
      </span>
      <span className="flex h-[34px] w-[34px] shrink-0 items-center justify-center rounded-xl bg-[#FBE3D8] text-[#E0654A] sm:h-[38px] sm:w-[38px]">
        <CameraIcon className="h-[19px] w-[19px]" />
      </span>
    </a>
  );
}
