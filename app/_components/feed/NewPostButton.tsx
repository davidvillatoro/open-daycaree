import { PlusIcon } from "./icons";

export function NewPostButton({ label }: { label: string }) {
  return (
    <a
      href="#"
      className="flex w-full items-center justify-center gap-2 rounded-[14px] bg-[linear-gradient(180deg,#F4977E,#EE8164)] p-[10px] text-[13.5px] font-extrabold text-white shadow-[0_8px_18px_-8px_rgba(238,129,100,.75)] sm:w-auto md:mb-[18px] md:w-full md:p-3 md:text-[14.5px]"
    >
      <PlusIcon className="h-[17px] w-[17px]" strokeWidth={2.4} />
      {label}
    </a>
  );
}
