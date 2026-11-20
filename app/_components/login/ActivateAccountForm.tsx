import type { ActivateAccountScreenProps } from "@/app/_data/login";
import { ActivateAccountConsent } from "./ActivateAccountConsent";

type ActivateAccountFormProps = {
  screen: ActivateAccountScreenProps;
  intro: string;
};

export function ActivateAccountForm({
  screen,
  intro,
}: ActivateAccountFormProps) {
  const childInitial = screen.invitedChildName.charAt(0);

  return (
    <div className="w-full max-w-[440px]">
      <div className="mb-[22px] flex h-[58px] w-[58px] items-center justify-center rounded-[18px] bg-[linear-gradient(155deg,#F8C3A8,#F2937A)] shadow-[0_12px_26px_-10px_rgba(238,129,100,0.65)]">
        <svg
          width="30"
          height="30"
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

      <h1 className="mb-[8px] font-display text-[32px] font-semibold leading-[1.15] text-[#3F362E]">
        {screen.title}
      </h1>
      <p className="mb-[26px] text-[15.5px] leading-[1.55] text-[#94887B]">{intro}</p>

      <div className="mb-[22px] flex items-center gap-[14px] rounded-[16px] border border-[#EADFD0] bg-white p-[14px_16px]">
        <div className="flex h-[44px] w-[44px] shrink-0 items-center justify-center rounded-full bg-[#A9D9E8] text-[19px] font-display font-semibold text-[#1F7A93]">
          {childInitial}
        </div>
        <div>
          <div className="text-[13px] text-[#94887B]">{screen.invitedChildLabel}</div>
          <div className="font-display text-[17px] font-semibold text-[#3F362E]">
            {screen.invitedChildName}, {screen.invitedChildRoom}
          </div>
        </div>
      </div>

      <div className="mb-[8px] text-[12px] font-bold tracking-[0.7px] text-[#94887B]">
        {screen.codeLabel}
      </div>
      <input
        type="text"
        readOnly
        value={screen.code}
        className="mb-[18px] w-full rounded-[14px] border-[1.5px] border-[#EADFD0] bg-white px-[16px] py-[14px] text-[18px] font-bold tracking-[3px] text-[#3F362E] outline-none"
      />

      <div className="mb-[8px] text-[12px] font-bold tracking-[0.7px] text-[#94887B]">
        {screen.emailLabel}
      </div>
      <input
        type="email"
        readOnly
        value={screen.email}
        className="mb-[18px] w-full rounded-[14px] border-[1.5px] border-[#EADFD0] bg-white px-[16px] py-[14px] text-[15px] text-[#3F362E] outline-none"
      />

      <div className="mb-[8px] text-[12px] font-bold tracking-[0.7px] text-[#94887B]">
        {screen.passwordLabel}
      </div>
      <input
        type="password"
        readOnly
        value={screen.password}
        className="mb-[18px] w-full rounded-[14px] border-[1.5px] border-[#F2A78E] bg-white px-[16px] py-[14px] text-[15px] text-[#3F362E] outline-none"
      />

      <ActivateAccountConsent consentLabel={screen.consentLabel} />

      <button
        type="button"
        className="block w-full rounded-[15px] bg-[linear-gradient(180deg,#F4977E,#EE8164)] py-[15px] text-center text-[16px] font-extrabold text-white shadow-[0_10px_22px_-8px_rgba(238,129,100,0.7)]"
      >
        {screen.submitLabel}
      </button>

      <p className="mt-[22px] text-center text-[14.5px] text-[#94887B]">
        <a href={screen.loginCtaHref} className="font-bold text-[#C5503A]">
          {screen.loginCtaLabel}
        </a>
      </p>
    </div>
  );
}
