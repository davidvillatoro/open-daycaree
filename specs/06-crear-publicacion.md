# SPEC 06 — Pantalla de nueva publicación (UI)

> **Status:** Aprobado
> **Depends on:** SPEC 01
> **Date:** 2026-11-22
> **Objective:** Implementar en `/crear-publicacion` la pantalla de nueva publicación replicando `references/pantallas/crear-publicacion.dc.html` con Tailwind y componentes React, con datos ficticios desacoplados y acciones solo visuales (sin persistencia, backend ni lógica funcional).

## Scope

**In:**

- Ruta `/crear-publicacion` con un componente ensamblador `CreatePublicationPage` en `app/_components/feed/`.
- Replicar `references/pantallas/crear-publicacion.dc.html`: barra superior ("Cancelar" / "Nueva publicación" / "Publicar"), sección "PARA" con chips de destinatarios (Mateo, Sofía, Benjamín, "Toda la sala"), sección "TIPO" con chips de tipo (Comida, Siesta, Actividad, Logro, Ánimo, Foto, Anuncio), textarea de descripción con texto precargado, sección "FOTOS" con miniatura placeholder y botón "Agregar".
- Datos tipados en `app/_data/feed.ts`: `CreatePublicationScreenProps`, `PublicationRecipient`, `PublicationType` y constante `createPublicationScreen` con el contenido exacto de la referencia.
- Integración: los CTAs "Nueva publicación" del feed (`NewPostButton`) y el compositor (`ComposerPrompt`) pasan de `href="#"` a `href="/crear-publicacion"`.
- Estilo con Tailwind y valores arbitrarios para igualar la referencia; selección de destinatario y tipo estática (visual, sin estado).

**Out of scope (future specs):**

- Publicar, persistir, backend, API, auth, datos reales.
- Subida/selección real de fotos.
- Validación de formulario, estados intermedios o feedback de envío.
- Cambios en `references/`.

## Data model - `app/_data/feed.ts`

```ts
export type PublicationRecipient = {
  label: string;          // "Mateo"
  initials?: string;      // "M"
  avatarColor?: string;   // "#A9D9E8"
  initialsColor?: string; // "#1F7A93"
  selected?: boolean;     // true para Mateo
};

export type PublicationType = {
  label: string;         // "Comida"
  background: string;    // "#9A7B1E"
  color: string;         // "#fff"
  selected?: boolean;    // true para Comida
};

export type CreatePublicationScreenProps = {
  cancelLabel: string;            // "Cancelar"
  title: string;                  // "Nueva publicación"
  publishLabel: string;           // "Publicar"
  recipientsLabel: string;        // "PARA"
  recipients: PublicationRecipient[]; // Mateo, Sofía, Benjamín
  allAudienceLabel: string;       // "Toda la sala"
  typesLabel: string;            // "TIPO"
  types: PublicationType[];      // Comida, Siesta, Actividad, Logro, Ánimo, Foto, Anuncio
  descriptionLabel: string;      // "DESCRIPCIÓN"
  descriptionPlaceholder: string; // "Contá cómo le fue hoy…"
  descriptionValue: string;       // texto precargado de la referencia
  photosLabel: string;           // "FOTOS"
  addPhotoLabel: string;         // "Agregar"
};

export const createPublicationScreen: CreatePublicationScreenProps = {
  cancelLabel: "Cancelar",
  title: "Nueva publicación",
  publishLabel: "Publicar",
  recipientsLabel: "PARA",
  recipients: [
    { label: "Mateo", initials: "M", avatarColor: "#A9D9E8", initialsColor: "#1F7A93", selected: true },
    { label: "Sofía", initials: "S", avatarColor: "#F4B8CC", initialsColor: "#C44A7A", selected: false },
    { label: "Benjamín", initials: "B", avatarColor: "#B9DEC4", initialsColor: "#3E8B62", selected: false },
  ],
  allAudienceLabel: "Toda la sala",
  typesLabel: "TIPO",
  types: [
    { label: "Comida", background: "#9A7B1E", color: "#fff", selected: true },
    { label: "Siesta", background: "#E7DCF6", color: "#7B5FC0", selected: false },
    { label: "Actividad", background: "#2E89A6", color: "#fff", selected: false },
    { label: "Logro", background: "#CFEBD8", color: "#3E9B6C", selected: false },
    { label: "Ánimo", background: "#F9D2DE", color: "#C56486", selected: false },
    { label: "Foto", background: "#FBD8CC", color: "#D9684A", selected: false },
    { label: "Anuncio", background: "#CCD8F4", color: "#4E72C8", selected: false },
  ],
  descriptionLabel: "DESCRIPCIÓN",
  descriptionPlaceholder: "Contá cómo le fue hoy…",
  descriptionValue: "Pintamos con témperas esta mañana. Mateo eligió el azul para todo y se concentró un montón.",
  photosLabel: "FOTOS",
  addPhotoLabel: "Agregar",
};
```

## Implementation plan

1. **Datos y tipos** - agregar `PublicationRecipient`, `PublicationType`, `CreatePublicationScreenProps` y `createPublicationScreen` en `app/_data/feed.ts`. Verificación: `npx tsc --noEmit`.
2. **Componente de pantalla** - crear `app/_components/feed/CreatePublicationPage.tsx` con la barra superior, secciones PARA/TIPO/DESCRIPCIÓN/FOTOS y chips estáticos, consumiendo `createPublicationScreen`. Verificación: render manual en `/crear-publicacion`.
3. **Ruta** - crear `app/crear-publicacion/page.tsx` que ensamble `CreatePublicationPage`. Verificación: navegación manual a `/crear-publicacion`.
4. **Integración** - actualizar `NewPostButton.tsx` y `ComposerPrompt.tsx` para usar `href="/crear-publicacion"`. Verificación: navegación desde el feed.
5. **Responsivo y paridad** - ajustes y revisión visual contra `references/pantallas/crear-publicacion.dc.html`; final: `npx tsc --noEmit` y `npm run build`.

**First step:** `app/_data/feed.ts`. **Last step:** verificación completa (tsc + build + revisión visual).

## Acceptance criteria

- [ ] `/crear-publicacion` muestra la barra superior con "Cancelar", "Nueva publicación" y "Publicar".
- [ ] La sección "PARA" muestra los chips Mateo (seleccionado), Sofía, Benjamín y "Toda la sala".
- [ ] La sección "TIPO" muestra los siete chips con sus colores; "Comida" seleccionado.
- [ ] El textarea de descripción muestra el placeholder y el texto precargado de la referencia.
- [ ] La sección "FOTOS" muestra la miniatura placeholder y el botón "Agregar".
- [ ] "Cancelar" y "Publicar" son solo visuales (`href="#"` o `type="button"` sin handlers).
- [ ] El contenido visible proviene de `app/_data/feed.ts`.
- [ ] `NewPostButton` y `ComposerPrompt` navegan a `/crear-publicacion`.
- [ ] `npx tsc --noEmit` y `npm run build` pasan.

## Decisions taken and discarded

- **Yes:** ruta `/crear-publicacion` y componente en `app/_components/feed/`. **No:** modal o nueva carpeta de dominio.
- **Yes:** datos en `app/_data/feed.ts`. **No:** archivo dedicado `posts.ts`.
- **Yes:** chips estáticos/visuales. **No:** estado local interactivo.
- **Yes:** "Publicar" solo visual. **No:** validación o persistencia.
- **Yes:** integrar CTAs del feed a la nueva ruta. **No:** dejarlos en `href="#"`.

## Risks

| Risk | Mitigation |
| --- | --- |
| Desviación visual al traducir HTML inline a Tailwind/JSX | Comparar contra `references/pantallas/crear-publicacion.dc.html` con valores arbitrarios. |
| Integración de CTAs rompe comportamiento previo del feed | Verificar que el feed siga renderizando y que los enlaces apunten a la nueva ruta. |

## What is **not** in this spec

- Publicar, backend, persistencia, auth o datos reales.
- Subida real de fotos.
- Validación de formulario.
- Cambios en `references/`.
