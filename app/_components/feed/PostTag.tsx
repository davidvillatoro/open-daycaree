import { postKindStyles, type PostKind } from "@/app/_data/feed";

export function PostTag({ kind }: { kind: PostKind }) {
  const style = postKindStyles[kind];

  return (
    <span
      className="inline-flex items-center gap-[7px] rounded-full px-3 py-[6px]"
      style={{ backgroundColor: style.backgroundColor, color: style.color }}
    >
      <span
        className="h-2 w-2 rounded-full"
        style={{ backgroundColor: style.color }}
      />
      <span className="text-[12px] font-extrabold tracking-[0.5px]">
        {style.label}
      </span>
    </span>
  );
}
