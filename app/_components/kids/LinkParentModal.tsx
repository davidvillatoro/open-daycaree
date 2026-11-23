"use client";

import { useState } from "react";
import { linkParentModalScreen } from "@/app/_data/kids";

type LinkParentModalProps = {
  isOpen: boolean;
  subtitle: string;
  onClose: () => void;
};

const labelClassName =
  "mb-[8px] block text-[12px] font-extrabold tracking-[0.7px] text-[#94887B]";

const controlClassName =
  "w-full rounded-[14px] border-[1.5px] border-[#EADFD0] bg-white px-4 py-[13px] text-[15px] text-[#3F362E] placeholder:text-[#B6A99B]";

export function LinkParentModal({
  isOpen,
  subtitle,
  onClose,
}: LinkParentModalProps) {
  const [relationship, setRelationship] = useState(
    linkParentModalScreen.relationships[0] ?? "",
  );

  if (!isOpen) {
    return null;
  }

  const screen = { ...linkParentModalScreen, subtitle };

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto bg-[#F6ECDF] px-6 py-10"
      role="dialog"
      aria-modal="true"
      aria-labelledby="link-parent-modal-title"
    >
      <div className="w-full max-w-[480px] overflow-hidden rounded-[24px] border border-[#ECE0D0] bg-[#FBF4EC] shadow-[0_20px_50px_-24px_rgba(63,54,46,.35)]">
        <div className="flex items-center justify-between border-b border-[#ECE0D0] px-[26px] py-5">
          <div>
            <h2
              id="link-parent-modal-title"
              className="font-display text-[18px] font-semibold text-[#3F362E]"
            >
              {screen.title}
            </h2>
            <div className="text-[13px] text-[#A89A8B]">{screen.subtitle}</div>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Cerrar"
            className="flex h-[34px] w-[34px] items-center justify-center rounded-[10px] bg-[#F0E6D8] text-[#94887B]"
          >
            <svg
              className="h-[18px] w-[18px]"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M18 6 6 18M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="px-[26px] py-[22px]">
          <div className="mb-[20px] flex gap-[11px] rounded-[14px] bg-[#E3ECFB] p-[13px_16px]">
            <svg
              className="h-[20px] w-[20px] shrink-0"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#4E72C8"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <circle cx="12" cy="12" r="10" />
              <path d="M12 16v-4M12 8h.01" />
            </svg>
            <span className="text-[13.5px] leading-[1.45] text-[#3F5694]">
              {screen.infoText}
            </span>
          </div>

          <div className="mb-[18px]">
            <label htmlFor="link-parent-name" className={labelClassName}>
              {screen.parentNameLabel}
            </label>
            <input
              id="link-parent-name"
              type="text"
              placeholder={screen.parentNamePlaceholder}
              className={`${controlClassName} mb-[18px]`}
            />
          </div>

          <div className="mb-[18px]">
            <label htmlFor="link-parent-email" className={labelClassName}>
              {screen.emailLabel}
            </label>
            <input
              id="link-parent-email"
              type="email"
              placeholder={screen.emailPlaceholder}
              className={controlClassName}
            />
          </div>

          <div className="mb-[10px]">
            <div className={labelClassName}>{screen.relationshipLabel}</div>
          </div>
          <div className="mb-[20px] flex gap-[9px]">
            {screen.relationships.map((relationshipOption) => (
              <button
                key={relationshipOption}
                type="button"
                onClick={() => setRelationship(relationshipOption)}
                className={`flex-1 py-[11px] rounded-[999px] border-[1.5px] font-extrabold text-[14px] ${
                  relationshipOption === relationship
                    ? "border-[#9FB8EC] bg-[#CCD8F4] text-[#4E72C8]"
                    : "border-[#ECE0D0] bg-[#FFFDF9] text-[#6E6359]"
                }`}
              >
                {relationshipOption}
              </button>
            ))}
          </div>

          <div className="mb-[20px] rounded-[16px] border-[1.5px] border-dashed border-[#E6D08A] bg-[#FBF1D6] p-[18px] text-center">
            <div className="mb-[8px] text-[12px] font-extrabold tracking-[0.7px] text-[#A88526]">
              {screen.codeLabel}
            </div>
            <div className="font-display text-[34px] font-semibold tracking-[7px] text-[#8A7234]">
              {screen.codeValue}
            </div>
            <div className="mt-[6px] text-[13px] text-[#A88526]">{screen.codeExpiry}</div>
          </div>

          <button
            type="button"
            className="flex w-full items-center justify-center gap-[9px] rounded-[14px] bg-[linear-gradient(180deg,#F4977E,#EE8164)] py-[14px] font-extrabold text-[15.5px] text-white shadow-[0_10px_22px_-8px_rgba(238,129,100,.7)]"
          >
            <svg
              className="h-[19px] w-[19px]"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#fff"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="m22 2-7 20-4-9-9-4z" />
              <path d="M22 2 11 13" />
            </svg>
            {screen.submitLabel}
          </button>
        </div>
      </div>
    </div>
  );
}
