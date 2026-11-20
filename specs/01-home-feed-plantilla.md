# SPEC 01 — Home feed desde plantilla

> **Estado:** Implementado
> **Depende de:** —  
> **Fecha:** 2026-11-18  
> **Objetivo:** Implementar en `/` la pantalla de feed de OpenDayCare replicando el estilo de `references/pantallas/feed.dc.html` con Tailwind y componentes React, usando datos ficticios desacoplados y navegación solo visual y responsiva, sin autenticación ni base de datos.

## Alcance

**Incluye:**

- Reemplazar el contenido de `/` (`app/page.tsx`) para mostrar el home como el feed de la referencia (sidebar, saludo/resumen, compositor “Compartí un momento…”, separador “PUBLICADO HOY” y los 3 posts: logro, actividad con foto y anuncio) con paridad visual respecto a `references/pantallas/feed.dc.html`.
- Implementación **100% por componentes** en `app/_components/feed/` (p. ej. `Sidebar`, `SidebarNav`, `SidebarUser`, `FeedPage`/`FeedShell`, `FeedHeader`, `ComposerPrompt`, `PostsSection`, `PostCard`, `PostTag`, `Avatar`, `PhotoPlaceholder`, etc., según convenga), dejando `app/page.tsx` como ensamblador/composición.
- Estilos con **Tailwind CSS**; se permiten valores arbitrarios (`[...]`) cuando sean necesarios para igualar colores, tamaños, sombras, radios o espaciados de la plantilla.
- Datos ficticios en un módulo tipado `app/_data/feed.ts` (usuario/sala, resumen, ítems de navegación y lista de posts con tipo, textos, audiencia, contadores e imagen placeholder) con el **mismo contenido visible** de la referencia, consumidos por los componentes sin hardcodear contenido de negocio en el JSX de presentación.
- Tipografía **Fredoka** y **Nunito** cargadas con `next/font/google` y aplicadas globalmente vía `app/layout.tsx` y `app/globals.css`, ajustando la base visual (fondo, color, suavizado) para paridad; se elimina el uso de Geist en la UI.
- Navegación y acciones **solo de diseño**: enlaces/botones (marca, ítems de menú, “Nueva publicación”, “Cerrar sesión”, foto, detalle, “Editar”, like/comentarios, etc.) conservan el estilo pero **no realizan navegación ni lógica** (sin rutas reales, sin handlers, sin envío). Se implementan con elementos no funcionales adecuados (`<a href="#">` o `<button type="button">`) que no disparen comportamiento.
- Diseño **responsivo** e intuitivo:
  - **Móvil (`< md`)**: la barra lateral se transforma en un bloque superior de ancho completo con marca/identidad de sala, CTA “Nueva publicación” y navegación accesible (disposición horizontal clara, con desplazamiento horizontal si hiciera falta), seguido del contenido principal; sin superposiciones ni desbordes horizontales no deseados.
  - **Escritorio (`>= md`)**: layout equivalente a la plantilla (barra lateral ~248px fija/sticky a la altura del viewport, contenido principal con scroll independiente y ancho máximo centrado).

**Fuera de alcance (para futuras specs):**

- Autenticación, sesiones, roles reales ni pantalla/flujo de login funcional.
- Base de datos, API, persistencia, carga remota o mutaciones de datos.
- Rutas/páginas reales para `ninos`, `avisos`, `mi-cuenta`, `crear-publicacion`, `detalle-publicacion`, `foto` o `login` (ni placeholders navegables).
- Funcionalidad de crear/editar publicaciones, likes, comentarios, abrir detalle/foto, cerrar sesión o cualquier interacción con estado/lógica.
- Adaptaciones de contenido dinámico más allá de renderizar los datos ficticios definidos (p. ej. fecha real del sistema, i18n, temas).
- Cambios en `references/` (archivos de referencia/generados) ni configuración fuera de lo necesario para esta vista.

## Modelo de datos

Estructuras concretas en `app/_data/feed.ts` (nombres orientativos; mantener estos campos):

```ts
export type NavIcon = "home" | "children" | "notices" | "account";

export type FeedUser = {
  name: string;       // "Caro Giménez"
  initials: string;   // "C"
  roleLabel: string;  // "Maestra · Soles"
  roomLabel: string;  // "Sala Soles"
};

export type FeedSummary = {
  orgLabel: string;   // "GUARDERÍA · SALA SOLES"
  greeting: string;   // "Buenas, Caro"
  meta: string;       // "12 niños · martes 17 jun"
};

export type NavItem = {
  id: string;
  label: string;      // "Feed" | "Niños" | "Avisos" | "Mi cuenta"
  icon: NavIcon;
  active?: boolean;
};

export type PostKind = "achievement" | "activity" | "announcement";

export type FeedPost = {
  id: string;
  kind: PostKind;
  authorName: string;        // "Mateo" | "Anuncio general"
  authorInitials?: string;   // "M" (omitted for the announcement icon)
  authorAccent: "child" | "general";
  timeLabel: string;         // "14:20" | "09:40" | "07:50"
  publishedByLabel: string;  // "publicado por vos"
  audienceLabel: string;     // "Para: familia de Mateo" | "Para: toda la sala"
  body: string;
  image?: { caption: string } | null; // ej. { caption: "Foto · pintando con témperas" }
  likes: number;
  comments: number;
};
```

Convenciones y contenido inicial (idéntico a la referencia):

- `navItems`: Feed (activo, `home`), Niños (`children`), Avisos (`notices`), Mi cuenta (`account`).
- Metadatos visuales por tipo definidos como constante/mapeo por `PostKind` (clave interna en inglés, etiqueta visible en español y colores): `achievement` → `LOGRO` (`#CFEBD8`/`#3E9B6C`), `activity` → `ACTIVIDAD` (`#C7E7F1`/`#2E89A6`), `announcement` → `ANUNCIO` (`#CCD8F4`/`#4E72C8`).
- Posts (3), en este orden:
  - **Logro:** Mateo (“M”, acento `child`), 14:20, familia de Mateo, “¡Usó el orinal solito por primera vez! Estaba feliz de contárselo a todos. Un gran paso.”, sin imagen, likes 3, comentarios 1.
  - **Actividad:** Mateo (“M”, acento `child`), 09:40, familia de Mateo, “Pintamos con témperas esta mañana. Mateo eligió el azul para todo y se concentró un montón mezclando colores.”, imagen `{ caption: "Foto · pintando con témperas" }`, likes 5, comentarios 2.
  - **Anuncio:** “Anuncio general” (acento `general`, ícono megáfono), 07:50, toda la sala, “El viernes salimos al parque por la mañana. Recuerden mandar gorra y una botellita de agua.”, sin imagen, likes 8, comentarios 0.
- Exportaciones: datos del usuario/sala, resumen, `navItems`, `posts` y constante de estilos/etiquetas por `PostKind`.

No se definen esquemas de BBDD ni contratos de API; el módulo es la única fuente de datos ficticios de esta vista y debe poder sustituirse en el futuro.

## Plan de implementación

1. **Datos y tipos** — Crear `app/_data/feed.ts` con las interfaces/tipos y los datos ficticios exportados (usuario, resumen, navegación, posts con el contenido exacto de la referencia). Prueba manual: el módulo compila y exporta las estructuras consumibles.
2. **Tipografía y base visual global** — Integrar Fredoka y Nunito con `next/font/google` en `app/layout.tsx` (exponiendo variables para Tailwind), actualizar `app/globals.css` (fondo `#F6ECDF`, color base, tipografía por defecto Nunito, fuente de display Fredoka) y ajustar el layout para la nueva base manteniendo `LayoutProps<"/">`. Prueba manual: la app renderiza sin errores con la nueva tipografía/base.
3. **Componentes del feed** — Crear los componentes en `app/_components/feed/` (sidebar/marca/nav/usuario/CTA, cabecera, prompt de compositor, sección y tarjetas de post con variantes y placeholder de foto), estilados con Tailwind (valores arbitrarios donde aplique) y consumiendo `app/_data/feed.ts`; toda navegación/acción como elementos no funcionales que conservan el estilo. Prueba manual: los componentes renderizan el contenido de los datos y no contienen handlers ni enlaces a rutas reales.
4. **Composición de la home** — Reescribir `app/page.tsx` para ensamblar los componentes y mostrar el feed en `/`. Prueba manual: al abrir `/` se ve la pantalla completa con los tres posts y la estructura de la referencia.
5. **Responsivo y ajuste de paridad** — Implementar el comportamiento responsivo (sidebar como bloque superior en `< md`, layout de plantilla en `>= md`), revisar espaciados/colores/sombras/iconografía frente a `references/pantallas/feed.dc.html` y corregir desviaciones visibles. Prueba manual: vista correcta en móvil y escritorio sin scroll horizontal indeseado; `npx tsc --noEmit` y `npm run build` finalizan sin errores.

## Criterios de aceptación

- [x] Al acceder a `/` se muestra el feed con barra lateral (marca OpenDayCare/Sala Soles, CTA “Nueva publicación”, ítems Feed activo/Niños/Avisos/Mi cuenta y bloque de usuario), cabecera (“GUARDERÍA · SALA SOLES”, “Buenas, Caro”, “12 niños · martes 17 jun”), compositor, separador “PUBLICADO HOY” y los 3 posts (LOGRO, ACTIVIDAD con placeholder de foto, ANUNCIO) con los textos, audiencias y contadores de la referencia.
- [x] La UI está construida con componentes en `app/_components/feed/` y `app/page.tsx` actúa como ensamblador; el contenido visible proviene de `app/_data/feed.ts` (sin hardcodear datos de negocio en los componentes de presentación).
- [x] Todos los elementos interactivos aparentes (navegación, “Nueva publicación”, “Cerrar sesión”, ver foto, ver detalle, “Editar”, like, comentarios) son solo visuales, conservan el estilo y no ejecutan navegación real ni lógica.
- [x] Se usan Fredoka y Nunito (vía `next/font/google`) y Tailwind para los estilos, con apariencia visual equivalente a `references/pantallas/feed.dc.html` en escritorio.
- [x] En viewport `< md` la interfaz es usable e intuitiva (navegación/CTA accesibles, sin solapamiento ni scroll horizontal no deseado) y en `>= md` se respeta el layout de la plantilla (sidebar ~248px y área principal).
- [x] No se agrega autenticación, base de datos ni rutas/páginas funcionales adicionales; no se modifican archivos en `references/`.
- [x] `npx tsc --noEmit` y `npm run build` se ejecutan sin errores.

## Decisiones

- **Sí:** Tailwind con utilidades y valores arbitrarios (`[...]`) para igualar la plantilla, priorizando paridad visual. **No:** trasladar estilos inline literales del HTML a JSX o reimplementar de forma solo aproximada.
- **Sí:** componentización completa en `app/_components/feed/` con `app/page.tsx` como composición. **No:** página monolítica.
- **Sí:** datos ficticios desacoplados y tipados en `app/_data/feed.ts` con el contenido de la referencia, sustituibles por BBDD futura. **No:** hardcodear textos/contadores en el JSX de presentación ni definir esquema/modelo de base de datos en esta spec.
- **Sí:** navegación/acciones solo visuales con elementos no funcionales (`href="#"`/`button` sin handlers ni rutas reales). **No:** crear rutas placeholder o wiring de navegación real.
- **Sí:** Fredoka y Nunito globales en `app/layout.tsx`/`app/globals.css` reemplazando Geist para paridad. **No:** limitar fuentes solo a la página o mantener Geist.
- **Sí:** responsivo intuitivo — en `< md` la sidebar pasa a bloque superior con marca, CTA y navegación horizontal accesible; en `>= md` layout de la plantilla (sidebar ~248px). **No:** forzar layout desktop fijo en móvil u ocultar navegación sin alternativa.
- **Sí:** identificadores internos de código y tipos en inglés (p. ej. `PostKind = "achievement" | "activity" | "announcement"`), con etiquetas y contenido visible en español según la plantilla. **No:** usar nombres en español para tipos, variables o estructuras internas.

## Riesgos

| Riesgo | Mitigación |
| --- | --- |
| Desviación visual al traducir HTML inline a Tailwind/JSX (píxeles, iconos, sombras) | Comparar contra `references/pantallas/feed.dc.html` y `references/screenshots/` y ajustar valores arbitrarios. |
| Adaptación móvil sin diseño de referencia explícito | Aplicar criterio “fácil e intuitivo”: bloque superior accesible en `< md` y verificar manualmente en anchos pequeños. |
| Diferencias de renderizado entre `next/font/google` y el `<link>` del HTML | Configurar pesos/subsets equivalentes (Fredoka 400–700, Nunito 400–800, itálica si aplica). |
| SVGs inline portados a JSX con atributos incorrectos | Revisar atributos JSX (`strokeWidth`, `strokeLinecap`, etc.) y validar con `npx tsc --noEmit`/`npm run build`. |
| Cambios globales en `app/layout.tsx`/`app/globals.css` afectan a toda la app | Impacto intencional para esta vista (hoy solo boilerplate); validar con build/typecheck. |

## Qué **no** incluye esta spec

- Autenticación, sesiones o login funcional.
- Base de datos, API, persistencia o datos reales/dinámicos.
- Rutas/páginas reales para las secciones enlazadas en la plantilla (`ninos`, `avisos`, `mi-cuenta`, `crear-publicacion`, `detalle-publicacion`, `foto`, `login`).
- Cualquier acción funcional (publicar, editar, like, comentar, abrir detalle/foto, cerrar sesión).
- Modificaciones en `references/`.

Cada uno de esos puntos, si se aborda, irá en su propia spec.
