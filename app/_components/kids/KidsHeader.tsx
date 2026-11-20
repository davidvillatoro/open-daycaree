"use client";

import { useState } from "react";
import { PlusIcon } from "../feed/icons";
import { kidsScreen } from "@/app/_data/kids";
import { AddKidModal } from "./AddKidModal";

export function KidsHeader() {
  const [isAddKidModalOpen, setIsAddKidModalOpen] = useState(false);

  return (
    <>
      <div className="mb-[22px] flex items-end justify-between gap-4">
        <div>
          <div className="mb-[4px] text-[12.5px] font-extrabold tracking-[0.8px] text-[#D9583C]">
            {kidsScreen.orgLabel}
          </div>
          <h1 className="font-display font-semibold text-[30px] text-[#3F362E]">
            {kidsScreen.pageTitle}
          </h1>
        </div>
        <button
          type="button"
          onClick={() => setIsAddKidModalOpen(true)}
          className="flex cursor-pointer items-center gap-2 rounded-[14px] bg-[linear-gradient(180deg,#F4977E,#EE8164)] p-[11px_18px] font-extrabold text-[14.5px] text-white shadow-[0_8px_18px_-8px_rgba(238,129,100,.7)]"
        >
          <PlusIcon className="h-[17px] w-[17px]" strokeWidth={2.4} />
          {kidsScreen.addLabel}
        </button>
      </div>
      <AddKidModal isOpen={isAddKidModalOpen} />
    </>
  );
}
