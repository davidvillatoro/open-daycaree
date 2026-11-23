import { createPublicationScreen } from "@/app/_data/feed";

export function CreatePublicationPage() {
  const screen = createPublicationScreen;

  return (
    <div className="flex min-h-screen items-start justify-center bg-[#F6ECDF] p-[40px_24px]">
      <div className="w-full max-w-[580px] overflow-hidden rounded-[24px] border border-[#ECE0D0] bg-[#FBF4EC] shadow-[0_20px_50px_-24px_rgba(63,54,46,.35)]">
        <div className="flex items-center justify-between border-b border-[#ECE0D0] px-[26px] py-5">
          <a href="#" className="text-[15px] font-bold text-[#94887B]">
            {screen.cancelLabel}
          </a>
          <span className="font-display text-[18px] font-semibold text-[#3F362E]">
            {screen.title}
          </span>
          <a href="#" className="text-[15px] font-extrabold text-[#D9583C]">
            {screen.publishLabel}
          </a>
        </div>
        <div className="px-[26px] py-6">
          <div className="mb-[10px] text-[12px] font-extrabold tracking-[0.7px] text-[#94887B]">
            {screen.recipientsLabel}
          </div>
          <div className="mb-[22px] flex flex-wrap gap-[9px]">
            {screen.recipients.map((recipient) => {
              const selected = recipient.selected === true;
              return (
                <button
                  key={recipient.label}
                  type="button"
                  className={`flex items-center gap-2 rounded-full border-[1.5px] py-[6px] pl-[6px] pr-[14px] text-[14px] font-bold ${
                    selected
                      ? "border-[#3F362E] bg-[#3F362E] text-white"
                      : "border-[#ECE0D0] bg-[#FFFDF9] text-[#6E6359]"
                  }`}
                >
                  <span
                    className="flex h-[26px] w-[26px] items-center justify-center rounded-full font-display text-[13px] font-semibold"
                    style={{
                      backgroundColor: recipient.avatarColor,
                      color: recipient.initialsColor,
                    }}
                  >
                    {recipient.initials}
                  </span>
                  {recipient.label}
                </button>
              );
            })}
            <button
              type="button"
              className="rounded-full border-[1.5px] border-[#ECE0D0] bg-[#FFFDF9] px-4 py-[6px] text-[14px] font-bold text-[#6E6359]"
            >
              {screen.allAudienceLabel}
            </button>
          </div>

          <div className="mb-[10px] text-[12px] font-extrabold tracking-[0.7px] text-[#94887B]">
            {screen.typesLabel}
          </div>
          <div className="mb-[22px] flex flex-wrap gap-[9px]">
            {screen.types.map((type) => (
              <button
                key={type.label}
                type="button"
                className="rounded-full border-0 px-4 py-2 text-[13.5px] font-extrabold"
                style={{ backgroundColor: type.background, color: type.color }}
              >
                {type.label}
              </button>
            ))}
          </div>

          <div className="mb-[10px] text-[12px] font-extrabold tracking-[0.7px] text-[#94887B]">
            {screen.descriptionLabel}
          </div>
          <textarea
            placeholder={screen.descriptionPlaceholder}
            defaultValue={screen.descriptionValue}
            className="mb-[22px] min-h-[120px] w-full resize-y rounded-[14px] border-[1.5px] border-[#EADFD0] bg-white px-4 py-[14px] text-[15px] leading-[1.5] text-[#3F362E] placeholder:text-[#B6A99B]"
          />

          <div className="mb-[10px] text-[12px] font-extrabold tracking-[0.7px] text-[#94887B]">
            {screen.photosLabel}
          </div>
          <div className="flex gap-3">
            <div className="flex h-[96px] w-[96px] items-center justify-center rounded-[14px] border border-[#ECE0D0] bg-[#F4ECE1] text-[#CBB89F]">
              <svg
                width="26"
                height="26"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.7"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="3" y="3" width="18" height="18" rx="2" />
                <circle cx="9" cy="9" r="2" />
                <path d="m21 15-3.6-3.6a2 2 0 0 0-2.8 0L6 21" />
              </svg>
            </div>
            <div className="flex h-[96px] w-[96px] cursor-pointer flex-col items-center justify-center gap-[6px] rounded-[14px] border-[1.5px] border-dashed border-[#DBCDBA] bg-[#F4ECE1] text-[#B0A290]">
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#C5503A"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 5v14M5 12h14" />
              </svg>
              <span className="text-[12px]">{screen.addPhotoLabel}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}