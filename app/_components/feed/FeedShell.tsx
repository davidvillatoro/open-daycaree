import {
  brandName,
  feedCopy,
  feedSummary,
  feedUser,
  navItems,
  posts,
} from "@/app/_data/feed";
import { ComposerPrompt } from "./ComposerPrompt";
import { FeedHeader } from "./FeedHeader";
import { PostsSection } from "./PostsSection";
import { Sidebar } from "./Sidebar";

export function FeedShell() {
  return (
    <div className="flex min-h-screen flex-col bg-[#F6ECDF] md:flex-row">
      <Sidebar
        brandName={brandName}
        user={feedUser}
        items={navItems}
        newPostLabel={feedCopy.newPostLabel}
        logoutLabel={feedCopy.closeSessionLabel}
      />
      <main className="min-w-0 flex-1 md:h-screen md:overflow-y-auto">
        <div className="mx-auto w-full max-w-[760px] px-5 pb-12 pt-6 sm:px-8 md:px-10 md:pb-20 md:pt-[34px]">
          <FeedHeader summary={feedSummary} />
          <ComposerPrompt
            initials={feedUser.initials}
            prompt={feedCopy.composerPrompt}
          />
          <PostsSection
            posts={posts}
            sectionLabel={feedCopy.publishedTodayLabel}
            editLabel={feedCopy.editLabel}
          />
        </div>
      </main>
    </div>
  );
}
