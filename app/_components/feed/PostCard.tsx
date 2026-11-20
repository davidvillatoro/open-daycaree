import type { FeedPost } from "@/app/_data/feed";
import { Avatar } from "./Avatar";
import { CommentIcon, HeartIcon } from "./icons";
import { PhotoPlaceholder } from "./PhotoPlaceholder";
import { PostTag } from "./PostTag";

type PostCardProps = {
  post: FeedPost;
  editLabel: string;
};

export function PostCard({ post, editLabel }: PostCardProps) {
  return (
    <article className="rounded-[20px] border border-[#ECE0D0] bg-[#FFFDF9] p-4 shadow-[0_4px_16px_-12px_rgba(120,90,60,.5)] sm:p-[20px_22px]">
      <div className="mb-[14px] flex flex-wrap items-center gap-3">
        <Avatar tone={post.authorAccent} initials={post.authorInitials} />
        <div className="min-w-0 flex-1">
          <div className="font-display text-[16px] font-semibold text-[#3F362E] sm:text-[16.5px]">
            {post.authorName}
          </div>
          <div className="text-[12.5px] text-[#A89A8B]">
            {post.timeLabel} · {post.publishedByLabel}
          </div>
        </div>
        <div className="ml-auto">
          <PostTag kind={post.kind} />
        </div>
      </div>

      <div className="mb-[10px] text-[12.5px] text-[#A89A8B]">
        {post.audienceLabel}
      </div>
      <p className="m-0 text-[15.5px] leading-[1.55] text-[#4A4038]">
        {post.body}
      </p>

      {post.image ? (
        <PhotoPlaceholder caption={post.image.caption} />
      ) : null}

      <div className="mt-4 flex items-center gap-3 border-t border-[#F0E6D8] pt-[14px] sm:gap-[18px]">
        <button
          type="button"
          className="flex items-center gap-[7px] text-[13.5px] font-bold text-[#E0654A] sm:text-[14px]"
        >
          <HeartIcon
            className="h-[19px] w-[19px]"
            fill="#E0654A"
            stroke="currentColor"
          />
          {post.likes}
        </button>
        <button
          type="button"
          className="flex items-center gap-[7px] text-[13.5px] font-bold text-[#94887B] sm:text-[14px]"
        >
          <CommentIcon className="h-[18px] w-[18px]" />
          {post.comments}
        </button>
        <span className="flex-1" />
        <button
          type="button"
          className="text-[13.5px] font-extrabold text-[#C5503A] sm:text-[14px]"
        >
          {editLabel}
        </button>
      </div>
    </article>
  );
}
