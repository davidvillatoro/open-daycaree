import { brandName } from "@/app/_data/feed";

type LoginAsideProps = {
  title: string;
  titleRest: string;
  subtitle: string;
  orgLabel: string;
};

export function LoginAside({
  title,
  titleRest,
  subtitle,
  orgLabel,
}: LoginAsideProps) {
  return (
    <div className="relative hidden overflow-hidden bg-[linear-gradient(155deg,#F6A98E_0%,#F2937A_45%,#EC7E62_100%)] flex flex-col justify-between px-[56px] py-[56px] text-white md:flex">
      <div
        aria-hidden="true"
        className="absolute right-[-120px] top-[-140px] h-[420px] w-[420px] rounded-full bg-[rgba(255,255,255,0.12)]"
      />
      <div
        aria-hidden="true"
        className="absolute bottom-[-110px] left-[-80px] h-[300px] w-[300px] rounded-full bg-[rgba(255,255,255,0.1)]"
      />

      <div className="relative flex items-center gap-[13px]">
        <div className="flex h-[46px] w-[46px] items-center justify-center rounded-[14px] bg-[rgba(255,255,255,0.22)]">
          <svg
            width="26"
            height="26"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#fff"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="4" />
            <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
          </svg>
        </div>
        <span className="font-display text-[21px] font-semibold tracking-[0.5px] text-white">
          {brandName}
        </span>
      </div>

      <div className="relative">
        <h1 className="mb-[18px] font-display text-[42px] font-semibold leading-[1.12] text-white">
          {title}
          <br />
          {titleRest}
        </h1>
        <p className="max-w-[430px] text-[17px] leading-[1.6] text-[rgba(255,255,255,0.92)]">
          {subtitle}
        </p>
      </div>

      <div className="relative text-[14px] text-[rgba(255,255,255,0.9)]">{orgLabel}</div>
    </div>
  );
}
