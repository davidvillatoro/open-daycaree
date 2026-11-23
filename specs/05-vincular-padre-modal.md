# SPEC 05 - Modal to link parent for a kid (UI)

> **Status:** Implimentado
> **Depends on:** SPEC 02
> **Date:** 2026-11-22
> **Objective:** Implement in `/kids/[id]` a parent-linking modal that replicates `references/pantallas/vincular-padre.dc.html`, opened from the "Vincular otro padre" button of the kid profile.

## Scope

**In:**

- The "Vincular otro padre" CTA (`linkParentLabel`) in the kid profile (`/kids/[id]`), which opens the modal through local state (today it is a dead link rendered by `FamilyMembersList`).
- The `LinkParentModal` component in `app/_components/kids/`: header with title and subtitle, close button, info box, fields, invitation code box and submit action.
- Replicate `references/pantallas/vincular-padre.dc.html` with identical copy: info box ("Le enviaremos un correo con un código para que active su cuenta. Solo verá el feed de Mateo."), fields "NOMBRE DEL PADRE/MADRE" (placeholder "Ej. Diego Fernández"), "EMAIL" (placeholder "correo@ejemplo.com"), "PARENTESCO" (options "Mamá" / "Papá" / "Tutor/a"), code box ("CÓDIGO DE InvitaciÓN" / "7K4P9" / "Vence en 7 días") and "Enviar invitación" button (gradient).

**Out of scope (for future specs):**

- Sending the invitation, backend, API, persistence, auth, real data.
- Changes in `references/`.

## Data model - `app/_data/kids.ts`

```ts
export type LinkParentModalScreenProps = {
  title: string;                 // "Vincular padre"
  subtitle: string;              // "a Mateo Fernández"
  infoText: string;              // "Le enviaremos un correo con un código para que active su cuenta. Solo verá el feed de Mateo."
  parentNameLabel: string;      // "NOMBRE DEL PADRE/MADRE"
  parentNamePlaceholder: string; // "Ej. Diego Fernández"
  emailLabel: string;            // "EMAIL"
  emailPlaceholder: string;     // "correo@ejemplo.com"
  relationshipLabel: string;    // "PARENTESCO"
  relationships: string[];      // ["Mamá", "Papá, "Tutor/a"]
  codeLabel: string;             // "CÓDIGO DE InvitaciÓN"
  codeValue: string;             // "7K4P9"
  codeExpiry: string;            // "Vence en 7 días"
  submitLabel: string;          // "Enviar invitación"
};

export const parentRelationships: string[] = ["Mamá", "Papá, "Tutor/a"];

export const linkParentModalScreen: LinkParentModalScreenProps = {
  title: "Vincular padre",
  subtitle: "a Mateo Fernández",
  infoText: "Le enviaremos un correo con un código para que active su cuenta. Solo verá el feed de Mateo.",
  parentNameLabel: "NOMBRE DEL PADRE/MADRE",
  parentNamePlaceholder: "Ej. Diego Fernández",
  emailLabel: "EMAIL",
  emailPlaceholder: "correo@ejemplo.com",
  relationshipLabel: "PARENTESCO",
  relationships: parentRelationships,
  codeLabel: "CÓDIGO DE InvitaciÓN",
  codeValue: "7K4P9",
  codeExpiry: "Vence en 7 días",
  submitLabel: "Enviar invitación",
};
```

## Implementation plan

1. **Data and types** - add `LinkParentModalScreenProps`, `linkParentModalScreen` and `parentRelationships` in `app/_data/kids.ts`. Verification: `npx tsc --noEmit`.
2. **Modal component** - create `app/_components/kids/LinkParentModal.tsx` with the header, body, code box and actions of the reference, receiving the screen props. Verification: manual render in `/kids/[id]`.
3. **Integration** - connect the "Vincular otro padre" CTA with local state (open/close) and assemble the modal. Verification: manual navigation.
4. **Responsive and parity** - responsive adjustments and visual review against `references/pantallas/vincular-padre.dc.html`. Final verification: `npx tsc --noEmit` and `npm run build`.

**First step:** `app/_data/kids.ts`. **Last step:** final verification (tsc + build + visual review).

## Acceptance criteria

- [ ] The "Vincular otro padre" CTA in `/kids/[id]` opens the modal with local state.
- [ ] The modal replicates `references/pantallas/vincular-padre.dc.html` (colors, typography, radii, shadows, copy, layout).
- [ ] The subtitle shows the kid name (e.g. "a Mateo Fernández").
- [ ] The info box and fields render as in the reference.
- [ ] The relationship selector shows the three options.
- [ ] The code box shows "7K4P9" and "Vence en 7 días".
- [ ] The "Enviar invitación" button is visual only (no handler, no navigation).
- [ ] No persistence, backend, auth or real data.
- [ ] `npx tsc --noEmit` and `npm run build` pass.

## Decisions taken and discarded

- **Yes:** specific `LinkParentModal` in `app/_components/kids/`. **No:** generic `Modal`.
- **Yes:** strings in `app/_data/kids.ts`. **No:** new file.
- **Yes:** open with local state from the profile CTA. **No:** drawer or new route.
- **Yes:** UI only, no send handler. **No:** functional flow.
- **Yes:** kid name as subtitle from `KidProfile`. **No:** fixed.
- **Yes:** fixed relationship list. **No:** free input.
- **Yes:** fixed invitation code "7K4P9". **No:** generated dynamically.

## Risks

| Risk | Mitigation |
| --- | --- |
| Visual deviation when passing inline HTML to Tailwind/JSX | Compare against `references/pantallas/vincular-padre.dc.html` with arbitrary values. |

## What is **not** in this spec

- Sending the invitation, backend, persistence, auth or real data.
- Changes in `references/`.