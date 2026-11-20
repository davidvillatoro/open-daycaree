import type { FeedPost } from "@/app/_data/feed";
import { PostCard } from "./PostCard";

type PostsSectionProps = {
  posts: FeedPost[];
  sectionLabel: string;
  editLabel: string;
};

export function PostsSection({ posts, sectionLabel, editLabel }: PostsSectionProps) {
  return (
    <section>
      <div className="mb-[14px] flex items-center gap-[14px]">
        <span className="text-[12.5px] font-extrabold tracking-[0.8px] text-[#8A7C6D]">
          {sectionLabel}
        </span>
        <span className="h-px flex-1 bg-[#E7DAC8]" />
      </div>
      <div className="flex flex-col gap-4">
        {posts.map((post) => (
          <PostCard key={post.id} post={post} editLabel={editLabel} />
        ))}
      </div>
    </section>
  );
}
