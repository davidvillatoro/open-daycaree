# SPEC 04 - Modal to add child from the add child button (UI)

> **Status:** Aprobado
> **Depends on:** SPEC 02
> **Date:** 2026-11-20
> **Objective:** Implement in `/kids` a modal to add a child from the "Add child" button, replicating the screen from `references/pantallas/agregar-nino.dc.html` with the mandatory fields of full name, date of birth and room, plus client-side validation of those fields and the `dd/mm/aaaa` date format.

## Scope

**Includes:**

- **The "Add child" button** from the Children screen (`/kids`) from SPEC 02, which opens the modal via local state.
- **The `AddKidModal` modal** - new component in `app/_components/kids/`: header with "Cancel" / "Add child" / "Save", body with the form and actions.
- **The modal form:** "Full name" (mandatory), "Date of birth" (mandatory, placeholder `dd/mm/aaaa`), "Room" (mandatory, selector with the existing rooms), "Allergies (labels)" (optional) and "Medical notes" (optional).
- **Client-side validation** on Save: mandatory fields, real date in `dd/mm/aaaa` format and inline error messages, with the copy in `app/_data/kids.ts`. No persistence.
- **Data** in `app/_data/kids.ts`: types and constants of the modal (`AddKidModalScreenProps`, `addKidModalScreen`) and list of rooms (`kidRooms`).

**Out of scope (future specs):**

- Functional logic to save (submit, update of the list).
- Persistence, backend, API, auth, real data.
- Changes in `references/`.

## Data model - `app/_data/kids.ts`

```ts
export type AddKidModalScreenProps = {
  title: string;                 // "Add child"
  cancelLabel: string;           // "Cancel"
  saveLabel: string;             // "Save"
  fullNameLabel: string;         // "FULL NAME"
  fullNamePlaceholder: string;  // "Ej. Martina Lopez"
  birthDateLabel: string;       // "DATE OF BIRTH"
  birthDatePlaceholder: string; // "dd/mm/aaaa"
  roomLabel: string;             // "ROOM"
  rooms: string[];               // ["Soles"]
  allergiesLabel: string;        // "ALLERGIES (LABELS)"
  allergiesPlaceholder: string; // "Ej. Mani, Lactosa"
  notesLabel: string;            // "MEDICAL NOTES"
  notesPlaceholder: string;     // "Indications, medication, contacts..."
  requiredMessage: string;      // "Campo obligatorio"
  invalidDateMessage: string;   // "Ingresa una fecha válida (dd/mm/aaaa)"
  validMessage: string;         // "Datos válidos"
};

export const addKidModalScreen: AddKidModalScreenProps = {
  title: "Agregar niño",
  cancelLabel: "Cancelar",
  saveLabel: "Guardar",
  fullNameLabel: "NOMBRE COMPLETO",
  fullNamePlaceholder: "Ej. Martina López",
  birthDateLabel: "FECHA DE NACIMIENTO",
  birthDatePlaceholder: "dd/mm/aaaa",
  roomLabel: "SALA",
  rooms: kidRooms,
  allergiesLabel: "ALERGIAS (ETIQUETAS)",
  allergiesPlaceholder: "Ej. Maní, Lactosa",
  notesLabel: "NOTAS MÉDICAS",
  notesPlaceholder: "Indicaciones, medicación, contactos…",
  requiredMessage: "Campo obligatorio",
  invalidDateMessage: "Ingresa una fecha válida (dd/mm/aaaa)",
  validMessage: "Datos válidos",
};

export const kidRooms: string[] = ["Soles"];
```

## Implementation plan

1. **Data and types** - create/update `app/_data/kids.ts` with `AddKidModalScreenProps`, `addKidModalScreen` and `kidRooms`. Verification: `npx tsc --noEmit`.
2. **Modal component** - create `app/_components/kids/AddKidModal.tsx` with header/body/footer of the reference, render conditioned by open state. Verification: manual render in `/kids`.
3. **Integration** - connect the "Add child" CTA with `useState` local and assemble the modal. Verification: manual navigation.
4. **Responsive and parity** - responsive adjustments and visual review against `references/pantallas/agregar-nino.dc.html`. Final verification: `npx tsc --noEmit` and `npm run build`.
5. **Validation and final verification** - add client-side validation of the mandatory fields and the `dd/mm/aaaa` date format in `AddKidModal.tsx`, with inline errors and validation copy in `app/_data/kids.ts`. Verification: manual submit in `/kids`, `npx tsc --noEmit` and `npm run build`.

**First step:** `app/_data/kids.ts`. **Last step:** validation and full verification (tsc + build + visual review).

## Acceptance criteria

- [ ] The "Add child" button in `/kids` opens the modal with local state.
- [ ] The modal replicates `references/pantallas/agregar-nino.dc.html` (colors, typography, radii, shadows, copy, layout).
- [ ] The mandatory fields are "Full name", "Date of birth" and "Room".
- [ ] "Allergies (labels)" and "Medical notes" are optional.
- [ ] The room selector lists the "Soles" room.
- [ ] Cancel has no handler or navigation; Save validates the form without persisting or navigating.
- [ ] Save shows inline errors when a mandatory field is empty.
- [ ] The date of birth accepts only a real date in `dd/mm/aaaa` format (e.g. `31/02/2020` is rejected).
- [ ] `npx tsc --noEmit` and `npm run build` pass.

## Decisions taken

- **Yes:** specific `AddKidModal` in `app/_components/kids/`. **No:** generic `Modal` (for more modals).
- **Yes:** room selector with `kidRooms = ["Soles"]`. **No:** free input.
- **Yes:** open with local state (useState). **No:** drawer or new page.
- **Yes:** only the 3 mandatory fields; extras optional. **No:** make extras mandatory.
- **Yes:** client-side validation of mandatory fields and date format on Save. **No:** persistence, backend or navigation.

## Risks

| Risk | Mitigation |
| --- | --- |
| Visual deviation when passing inline HTML to Tailwind/JSX | Compare against `references/pantallas/agregar-nino.dc.html` with arbitrary values. |

## Out of scope

- Save, backend, persistence, real data.
- Changes in `references/`.

## What is not included in this spec

- Save, backend, persistence or real data.
- Changes in `references/`.
