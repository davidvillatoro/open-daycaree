# SPEC 02 — Pantallas Niños y perfil del niño (UI)

> **Estado:** Aprobado
> **Depende de:** SPEC 01
> **Fecha:** 2026-11-20
> **Objetivo:** Implementar en `/kids` la pantalla de Niños y en `/kids/[id]` la pantalla de perfil del niño, replicando las interfaces de `references/pantallas/ninos.dc.html` y `references/pantallas/perfil-nino.dc.html` con Tailwind y componentes React, solo interfaces (sin lógica funcional).

## Alcance

**Incluye:**

- **Pantalla Niños (`/kids`)** — componentes en `app/_components/kids/`: `KidsPage` (ensamblaje con `Sidebar` de SPEC 01), `KidsHeader` ("GESTIÓN" + h1 "Niños" + CTA "Agregar niño"), `KidsSearch` (buscador con icono), `SalaLabel` ("SALA SOLES" + "8 niños"), `KidsGrid` (grid 2 columnas), `KidCard` (avatar, nombre, línea, badge o chevron, hover), `KidBadge`, `KidAvatar`.
- **Pantalla de perfil del niño (`/kids/[id]`)** — `KidProfilePage` (ensamblaje), `KidProfileHeader` (avatar 84px, h1, meta, botón "Editar"), `AlergiesCard`, `FamilyMembersList` + `FamilyMemberRow`, `DaySummaryButton`, `KidProfileDetails` (tabla Fecha/Sala/Ingreso).
- **Iconos** en `app/_components/kids/icons.tsx`: `SearchIcon`, `ChevronIcon`, `AlertIcon`, `DaySummaryIcon`.
- **Datos ficticios tipados** en `app/_data/kids.ts`: `kids` (los 8 de la referencia), `kidProfiles` (Mateo), `kidsScreen`, `familyStatusStyles`, `kidsNavItems`.
- Estilo con Tailwind con valores arbitrarios (`[...]`) para igualar colores, sombras, radii, espaciados. Datos ficticios en `app/_data/kids.ts`, sin hardcodear contenido en JSX de presentación. Navegación/acciones solo visuales (`href="#"`/`type="button"` sin handlers). Visual paridad frente a `references/pantallas/ninos.dc.html` y `references/pantallas/perfil-nino.dc.html`.
- **Ajuste en la especificación anterior:** `app/_data/feed.ts` — `NavItem.href?: string` (opcional); `app/_components/feed/SidebarNav.tsx` — usa `item.href ?? "#"` (el ítem "Niños" se vuelve real).

**Fuera de alcance (futuras specs):**

- Autenticación, sesiones/login real, API, persistencia, datos reales/dinámicos.
- Lógica funcional: filtro activo del buscador, validación, enviar datos, comentarios, likes.
- Eventos reales: rutas reales de Feed/Avisos/Mi cuenta.
- Cambios a pantallas de referencia, iconografía de otras pantallas.

## Modelo de datos — `app/_data/kids.ts`

```ts
import type { NavItem } from "@/app/_data/feed";
import { navItems } from "@/app/_data/feed";

export type KidBadge = {
  label: string;      // "MANÍ"
  background: string; // "#FBD8CC"
  color: string;      // "#D9684A"
};

export type KidTrailing = { badge: KidBadge } | { chevron: true };

export type Kid = {
  id: string;            // "mateo-fernandez"
  initials: string;      // "M"
  initialsColor: string; // "#1F7A93"
  avatarColor: string;   // "#A9D9E8"
  name: string;          // "Mateo Fernández"
  line: string;          // "3 años · 2 padres vinculados"
  trailing: KidTrailing;
};

export type FamilyStatus = "activa" | "pendiente";

export type FamilyStatusStyles = Record<
  FamilyStatus,
  { label: string; background: string; color: string }
>;

export type FamilyMember = {
  name: string;        // "Lucía Fernández"
  initials: string;    // "L"
  avatarColor: string; // "#C9B6E8"
  subtitle: string;    // "Mamá · activa"
  status: FamilyStatus;
};

export type KidProfileStatsRow = { label: string; value: string };

export type KidProfile = {
  id: string;
  initials: string;
  initialsColor: string;
  avatarColor: string;
  name: string;                       // "Mateo Fernández"
  meta: string;                       // "3 años · Sala Soles"
  editLabel: string;                  // "Editar"
  backLabel: string;                  // "Volver a Niños"
  alergiesTitle: string;              // "Alergias y notas"
  alergiesText: string;               // "Alergia al maní. Evitar frutos secos. Lleva inhalador en la mochila."
  familyTitle: string;                // "PADRES VINCULADOS"
  familyMembers: FamilyMember[];
  linkParentLabel: string;            // "Vincular otro padre"
  daySummaryLabel: string;            // "Resumen del día"
  statsRows: KidProfileStatsRow[];    // Fecha de nacimiento / Sala / Ingreso
};

export type KidsScreen = {
  pageTitle: string;        // "Niños"
  orgLabel: string;         // "GESTIÓN"
  salaTitle: string;        // "SALA SOLES"
  kidsCountLabel: string;   // "8 niños"
  searchPlaceholder: string; // "Buscar niño…"
  addLabel: string;         // "Agregar niño"
};
```

Valores concretos (idénticos a la referencia):

```ts
export const familyStatusStyles: FamilyStatusStyles = {
  activa: { label: "ACTIVA", background: "#CFEBD8", color: "#3E9B6C" },
  pendiente: { label: "PENDIENTE", background: "#F7E7A6", color: "#9A7B1E" },
};

export const kidsScreen: KidsScreen = {
  pageTitle: "Niños",
  orgLabel: "GESTIÓN",
  salaTitle: "SALA SOLES",
  kidsCountLabel: "8 niños",
  searchPlaceholder: "Buscar niño…",
  addLabel: "Agregar niño",
};

export const kids: Kid[] = [
  { id: "mateo-fernandez", initials: "M", initialsColor: "#1F7A93", avatarColor: "#A9D9E8", name: "Mateo Fernández", line: "3 años · 2 padres vinculados", trailing: { badge: { label: "MANÍ", background: "#FBD8CC", color: "#D9684A" } } },
  { id: "sofia-mendez", initials: "S", initialsColor: "#C44A7A", avatarColor: "#F4B8CC", name: "Sofía Méndez", line: "2 años · 1 padre vinculado", trailing: { chevron: true } },
  { id: "benjamin-ruiz", initials: "B", initialsColor: "#3E8B62", avatarColor: "#B9DEC4", name: "Benjamín Ruiz", line: "3 años · 2 padres vinculados", trailing: { chevron: true } },
  { id: "valentina-soto", initials: "V", initialsColor: "#9A7B1E", avatarColor: "#F4DC8E", name: "Valentina Soto", line: "2 años · sin padres vinculados", trailing: { badge: { label: "VINCULAR", background: "#F9D2DE", color: "#C56486" } } },
  { id: "tomas-diaz", initials: "T", initialsColor: "#7B5FC0", avatarColor: "#C9B6E8", name: "Tomás Díaz", line: "3 años · 1 padre vinculado", trailing: { badge: { label: "LACTOSA", background: "#FBD8CC", color: "#D9684A" } } },
  { id: "emma-castro", initials: "E", initialsColor: "#C44A7A", avatarColor: "#F4B8CC", name: "Emma Castro", line: "2 años · 1 padre vinculado", trailing: { chevron: true } },
  { id: "lucas-romero", initials: "L", initialsColor: "#1F7A93", avatarColor: "#A9D9E8", name: "Lucas Romero", line: "3 años · 1 padre vinculado", trailing: { chevron: true } },
  { id: "olivia-vega", initials: "O", initialsColor: "#3E8B62", avatarColor: "#B9DEC4", name: "Olivia Vega", line: "2 años · 1 padre vinculado", trailing: { chevron: true } },
];

export const kidProfiles: Record<string, KidProfile> = {
  "mateo-fernandez": {
    id: "mateo-fernandez",
    initials: "M",
    initialsColor: "#1F7A93",
    avatarColor: "#A9D9E8",
    name: "Mateo Fernández",
    meta: "3 años · Sala Soles",
    editLabel: "Editar",
    backLabel: "Volver a Niños",
    alergiesTitle: "Alergias y notas",
    alergiesText: "Alergia al maní. Evitar frutos secos. Lleva inhalador en la mochila.",
    familyTitle: "PADRES VINCULADOS",
    familyMembers: [
      { name: "Lucía Fernández", initials: "L", avatarColor: "#C9B6E8", subtitle: "Mamá · activa", status: "activa" },
      { name: "Diego Fernández", initials: "D", avatarColor: "#A9C7E8", subtitle: "Papá · invitación enviada", status: "pendiente" },
    ],
    linkParentLabel: "Vincular otro padre",
    daySummaryLabel: "Resumen del día",
    statsRows: [
      { label: "Fecha de nacimiento", value: "12 mar 2022" },
      { label: "Sala", value: "Soles" },
      { label: "Ingreso", value: "feb 2025" },
    ],
  },
};

export const kidsNavItems: NavItem[] = navItems.map((item) =>
  item.id === "ninos"
    ? { ...item, active: true, href: "/kids" }
    : item,
);
```

## Plan de implementación

1. **Datos y tipos:** crear `app/_data/kids.ts`; modificar `app/_data/feed.ts` (`NavItem.href?: string`). Verificación: `npx tsc --noEmit`.
2. **Componentes de `/kids`:** `app/_components/kids/` — `icons.tsx` (`SearchIcon`, `ChevronIcon`, `AlertIcon`, `DaySummaryIcon`), `KidAvatar.tsx`, `KidBadge.tsx`, `KidCard.tsx`, `KidsHeader.tsx`, `KidsSearch.tsx`, `SalaLabel.tsx`, `KidsGrid.tsx`, `KidsPage.tsx`. Verificación: renderizar visualmente en `/kids`.
3. **Componentes de `/kids/[id]`:** `KidProfileHeader.tsx`, `AlergiesCard.tsx`, `FamilyMemberRow.tsx`, `FamilyMembersList.tsx`, `DaySummaryButton.tsx`, `KidProfileDetails.tsx`, `KidProfilePage.tsx`. Verificación: renderizar visualmente en `/kids/mateo-fernandez`.
4. **Rutas:** `app/kids/page.tsx`; `app/kids/[id]/page.tsx` — `PageProps<"/kids/[id]">`, `generateStaticParams` devolviendo `[{ id: "mateo-fernandez" }]`, `notFound()` si falta dato; `SidebarNav.tsx` usa `item.href ?? "#"`. Verificación: navegación manual en `/kids` y `/kids/mateo-fernandez`.
5. **Responsivo y paridad:** ajustes (`grid-cols-1 md:grid-cols-2`; perfil `flex-col md:flex-row`); comparar colores/tamaños/radios/sombras vs `references/pantallas/ninos.dc.html` y `perfil-nino.dc.html`; final: `npx tsc --noEmit` y `npm run build` sin errores.

**Primer paso:** `app/_data/kids.ts`. **Último paso:** verificación completa (tsc + build + revisión visual).

## Criterios de aceptación

- [ ] `/kids` muestra sidebar (Brand "OpenDayCare/Sala Soles", CTA "Nueva publicación", nav Feed/Niños(activo)/Avisos/Mi cuenta, usuario Caro "Maestra · Soles", logout), h1 "Niños", CTA "Agregar niño", buscador con placeholder "Buscar niño…", etiqueta "SALA SOLES" + "8 niños", grid 2 columnas con las 8 tarjetas de `kids`.
- [ ] Tarjetas (`KidCard`): `<a href="/kids/{id}">`; avatar 48px con color/iniciales de datos; nombre Fredoka 600 16px `#3F362E`; línea 13px `#A89A8B`; badge MANÍ/LACTOSA (`#FBD8CC`/`#D9684A`), badge VINCULAR (`#F9D2DE`/`#C56486`) o chevron 18px stroke `#CBB89F`; bg `#FFFDF9` borde `#ECE0D0` radio 18px padding 16px shadow `0 4px 14px -12px rgba(120,90,60,.5)`; hover border `#F2A78E` + translateY(-2px).
- [ ] `/kids/mateo-fernandez` muestra: back "Volver a Niños", avatar 84px, h1 "Mateo Fernández" Fredoka, meta "3 años · Sala Soles", botón "Editar", alergies card (alerta `#F4A8A0` stroke #fff, título `#C5413A`, texto `#B25249`), tabla "Fecha de nacimiento" → "12 mar 2022", "Sala" → "Soles", "Ingreso" → "feb 2025", botón "Resumen del día" (bg #3F362E), card "PADRES VINCULADOS" con Lucía (badge ACTIVA `#CFEBD8`/`#3E9B6C`) y Diego (PENDIENTE `#F7E7A6`/`#9A7B1E`) + "Vincular otro padre" (dashed #D8CBBA, texto #C5503A).
- [ ] Todos los elementos interactivos aparentes son no funcionales (`href="#"` o `type="button"`, sin handlers ni rutas reales).
- [ ] Visual paridad: colores, Fredoka/Nunito, sombras, radii, espaciados equivalentes a las references.
- [ ] Responsivo intuitivo: `< md` grid 1 col y perfil apilado; `>= md` grid 2 cols.
- [ ] `npx tsc --noEmit` y `npm run build` sin errores.

## Decisiones tomadas

- **Sí:** Tailwind con valores arbitrarios para paridad visual. **No:** trasladar estilos inline literalmente; corregir mediante comparación con `references/`.
- **Sí:** rutas reales en inglés `/kids` (lista) y `/kids/[id]` (perfil). **No:** cambiar labels/títulos, rutas extra o versión de pantalla intermedias.
- **Sí:** datos ficticios tipados en `app/_data/kids.ts` con contenido de la referencia. **No:** hardcodear en JSX ni datos reales/API.
- **Sí:** solo UI; no lógica funcional. **No:** buscador activo, envío, validación.
- **Sí:** `SidebarNav` acepta `href`; "Niños" es real. **No:** alterar comportamiento de SPEC 01 fuera de lo necesario.
- **Sí:** Next 16: `params: Promise` + `PageProps` + `generateStaticParams` (según `dist/docs/01-app/03-api-reference/03-file-conventions/dynamic-routes.md`). **No:** `useSearchParams`.

## Riesgos

- **Desviación visual** en traducción inline→Tailwind: mitigar comparando con `references/pantallas/ninos.dc.html` y `perfil-nino.dc.html`.
- **Tipos Next 16** (`PageProps`, `params: Promise`): falla en `npx tsc --noEmit` → ajustar (docs consultadas en `node_modules/next/dist/docs/`).
- **IDs de perfil sin datos**: 404 interno (`notFound()`); mantiene invariante kids↔kidProfiles.
- **Breakpoints (`md`)**: verificar respuesta en viewports intermedios.

## Fuera de alcance

- Autenticación, sesiones, login real, API, persistencia, datos reales/dinámicos.
- Lógica funcional de buscador/publicar/guardar/enviar y pantallas de referencia del Feed.
- Fuente de datos desde backend ni iconografía de otras pantallas.
