"use client";

import { useState, type FormEvent } from "react";
import { addKidModalScreen } from "@/app/_data/kids";

type AddKidModalProps = {
  isOpen: boolean;
};

type AddKidFormErrors = {
  fullName?: string;
  birthDate?: string;
  room?: string;
};

const labelClassName =
  "mb-[8px] block text-[12px] font-extrabold tracking-[0.7px] text-[#94887B]";

const controlClassName =
  "w-full rounded-[14px] border-[1.5px] border-[#EADFD0] bg-white px-4 py-[13px] text-[15px] text-[#3F362E] placeholder:text-[#B6A99B]";

function isValidBirthDate(value: string): boolean {
  const match = /^(\d{2})\/(\d{2})\/(\d{4})$/.exec(value);
  if (!match) {
    return false;
  }

  const day = Number(match[1]);
  const month = Number(match[2]);
  const year = Number(match[3]);
  const date = new Date(year, month - 1, day);

  return (
    date.getFullYear() === year &&
    date.getMonth() === month - 1 &&
    date.getDate() === day
  );
}

function FieldError({ id, message }: { id: string; message?: string }) {
  if (!message) {
    return null;
  }

  return (
    <p id={id} role="alert" className="mt-[6px] text-[12px] font-bold text-[#D9583C]">
      {message}
    </p>
  );
}

export function AddKidModal({ isOpen }: AddKidModalProps) {
  const [fullName, setFullName] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [room, setRoom] = useState(addKidModalScreen.rooms[0] ?? "");
  const [allergies, setAllergies] = useState("");
  const [notes, setNotes] = useState("");
  const [errors, setErrors] = useState<AddKidFormErrors>({});
  const [isValid, setIsValid] = useState(false);

  if (!isOpen) {
    return null;
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const nextErrors: AddKidFormErrors = {};
    if (!fullName.trim()) {
      nextErrors.fullName = addKidModalScreen.requiredMessage;
    }

    const trimmedBirthDate = birthDate.trim();
    if (!trimmedBirthDate) {
      nextErrors.birthDate = addKidModalScreen.requiredMessage;
    } else if (!isValidBirthDate(trimmedBirthDate)) {
      nextErrors.birthDate = addKidModalScreen.invalidDateMessage;
    }

    if (!room) {
      nextErrors.room = addKidModalScreen.requiredMessage;
    }

    setErrors(nextErrors);
    setIsValid(Object.keys(nextErrors).length === 0);
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto bg-[#F6ECDF] px-6 py-10"
      role="dialog"
      aria-modal="true"
      aria-labelledby="add-kid-modal-title"
    >
      <div className="w-full max-w-[520px] overflow-hidden rounded-[24px] border border-[#ECE0D0] bg-[#FBF4EC] shadow-[0_20px_50px_-24px_rgba(63,54,46,.35)]">
        <div className="flex items-center justify-between border-b border-[#ECE0D0] px-[26px] py-5">
          <button type="button" className="text-[15px] font-bold text-[#94887B]">
            {addKidModalScreen.cancelLabel}
          </button>
          <h2
            id="add-kid-modal-title"
            className="font-display text-[18px] font-semibold text-[#3F362E]"
          >
            {addKidModalScreen.title}
          </h2>
          <button
            type="submit"
            form="add-kid-form"
            className="cursor-pointer text-[15px] font-extrabold text-[#D9583C]"
          >
            {addKidModalScreen.saveLabel}
          </button>
        </div>

        <form id="add-kid-form" onSubmit={handleSubmit} noValidate className="px-[26px] py-6">
          <div className="mb-[18px]">
            <label className={labelClassName} htmlFor="add-kid-full-name">
              {addKidModalScreen.fullNameLabel}
            </label>
            <input
              id="add-kid-full-name"
              type="text"
              value={fullName}
              onChange={(event) => {
                setFullName(event.target.value);
                setIsValid(false);
              }}
              placeholder={addKidModalScreen.fullNamePlaceholder}
              aria-invalid={Boolean(errors.fullName)}
              aria-describedby={errors.fullName ? "add-kid-full-name-error" : undefined}
              className={`${controlClassName} ${errors.fullName ? "border-[#D9583C]" : ""}`}
            />
            <FieldError id="add-kid-full-name-error" message={errors.fullName} />
          </div>

          <div className="mb-[18px] flex gap-[14px]">
            <div className="flex-1">
              <label className={labelClassName} htmlFor="add-kid-birth-date">
                {addKidModalScreen.birthDateLabel}
              </label>
              <input
                id="add-kid-birth-date"
                type="text"
                value={birthDate}
                onChange={(event) => {
                  setBirthDate(event.target.value);
                  setIsValid(false);
                }}
                placeholder={addKidModalScreen.birthDatePlaceholder}
                aria-invalid={Boolean(errors.birthDate)}
                aria-describedby={errors.birthDate ? "add-kid-birth-date-error" : undefined}
                className={`${controlClassName} ${errors.birthDate ? "border-[#D9583C]" : ""}`}
              />
              <FieldError id="add-kid-birth-date-error" message={errors.birthDate} />
            </div>

            <div className="flex-1">
              <label className={labelClassName} htmlFor="add-kid-room">
                {addKidModalScreen.roomLabel}
              </label>
              <div className="relative">
                <select
                  id="add-kid-room"
                  value={room}
                  onChange={(event) => {
                    setRoom(event.target.value);
                    setIsValid(false);
                  }}
                  aria-invalid={Boolean(errors.room)}
                  aria-describedby={errors.room ? "add-kid-room-error" : undefined}
                  className={`${controlClassName} cursor-pointer appearance-none pr-9 font-bold ${errors.room ? "border-[#D9583C]" : ""}`}
                >
                  {addKidModalScreen.rooms.map((item) => (
                    <option key={item} value={item}>
                      {item}
                    </option>
                  ))}
                </select>
                <svg
                  className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#B0A290"
                  strokeWidth={2.2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </div>
              <FieldError id="add-kid-room-error" message={errors.room} />
            </div>
          </div>

          <div className="mb-[18px]">
            <label className={labelClassName} htmlFor="add-kid-allergies">
              {addKidModalScreen.allergiesLabel}
            </label>
            <input
              id="add-kid-allergies"
              type="text"
              value={allergies}
              onChange={(event) => setAllergies(event.target.value)}
              placeholder={addKidModalScreen.allergiesPlaceholder}
              className={controlClassName}
            />
          </div>

          <div>
            <label className={labelClassName} htmlFor="add-kid-notes">
              {addKidModalScreen.notesLabel}
            </label>
            <textarea
              id="add-kid-notes"
              value={notes}
              onChange={(event) => setNotes(event.target.value)}
              placeholder={addKidModalScreen.notesPlaceholder}
              className={`${controlClassName} min-h-[90px] resize-y leading-[1.5]`}
            />
          </div>

          {isValid && (
            <p role="status" className="mt-3 text-[13px] font-bold text-[#3E8B62]">
              {addKidModalScreen.validMessage}
            </p>
          )}
        </form>
      </div>
    </div>
  );
}
