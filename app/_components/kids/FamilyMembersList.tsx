"use client";

import { useState } from "react";
import type { KidProfile } from "@/app/_data/kids";
import { PlusIcon } from "../feed/icons";
import { FamilyMemberRow } from "./FamilyMemberRow";
import { LinkParentModal } from "./LinkParentModal";

type FamilyMembersListProps = {
  profile: KidProfile;
};

export function FamilyMembersList({ profile }: FamilyMembersListProps) {
  const [isLinkParentModalOpen, setIsLinkParentModalOpen] = useState(false);

  return (
    <>
      <div className="rounded-[16px] border border-[#ECE0D0] bg-[#FFFDF9] p-[16px_18px]">
        <div className="mb-[14px] text-[12.5px] font-extrabold tracking-[0.8px] text-[#8A7C6D]">
          {profile.familyTitle}
        </div>
        <div className="flex flex-col gap-[14px]">
          {profile.familyMembers.map((member, index) => (
            <FamilyMemberRow key={index} member={member} />
          ))}
          <button
            type="button"
            onClick={() => setIsLinkParentModalOpen(true)}
            className="flex w-full items-center gap-[12px] pt-[8px] text-left"
          >
            <span className="flex h-[40px] w-[40px] shrink-0 items-center justify-center rounded-full border-[1.5px] border-dashed border-[#D8CBBA] text-[#B0A290]">
              <PlusIcon className="h-[18px] w-[18px]" strokeWidth={2.2} />
            </span>
            <span className="text-[14.5px] font-extrabold text-[#C5503A]">
              {profile.linkParentLabel}
            </span>
          </button>
        </div>
      </div>
      <LinkParentModal
        isOpen={isLinkParentModalOpen}
        subtitle={`a ${profile.name}`}
        onClose={() => setIsLinkParentModalOpen(false)}
      />
    </>
  );
}

