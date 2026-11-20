type ActivateAccountConsentProps = {
  consentLabel: string;
};

export function ActivateAccountConsent({
  consentLabel,
}: ActivateAccountConsentProps) {
  return (
    <label className="mb-[24px] flex cursor-pointer items-start gap-12 rounded-[14px] bg-[#FBF1D6] p-[14px_16px]">
      <span className="mt-[1px] flex h-[24px] w-[24px] shrink-0 items-center justify-center rounded-[8px] bg-[#5FB97E]">
        <svg
          width="15"
          height="15"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#fff"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="20 6 9 17 4 12" />
        </svg>
      </span>
      <span className="text-[14px] leading-[1.45] text-[#8A7234]">{consentLabel}</span>
    </label>
  );
}
