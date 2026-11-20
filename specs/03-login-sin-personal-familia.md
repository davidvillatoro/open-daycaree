# SPEC 03 — Pantallas de login y activación de cuenta sin opción Personal/Familia (UI)

> **Estado:** Aprobado
> **Depende de:** —
> **Fecha:** 2026-11-20
> **Objetivo:** Implementar las pantallas de inicio de sesión y activación de cuenta de OpenDayCare sin la opción Personal/Familia.

## Alcance

**Incluye:**

- **Pantalla de inicio de sesión (`/login`)** — replicar `references/pantallas/login.dc.html` sin el toggle "INGRESO COMO": panel izquierdo con el copy de OpenDayCare, panel derecho con email, contraseña, "¿Olvidó tu contraseña?", botón "Iniciar sesión" y el link "¿Te invitó la guardería?" hacia la pantalla de activación.
- **Pantalla de activación de cuenta (`/login/activar-cuenta`)** — replicar `references/pantallas/activar-cuenta.dc.html`: tarjeta con el email del niño, campo de código de invitación, campo de email, campo de crear contraseña, checkbox de consentimiento para fotos, botón "Activar mi cuenta" y el link "¿Ya tenés cuenta?" hacia el login.
- Componentes en `app/_components/login/`: `LoginPage`, `LoginShell`, `LoginAside`, `LoginForm`, `ActivateAccountPage`, `ActivateAccountShell`, `ActivateAccountForm`, `ActivateAccountConsent`.
- Datos ficticios tipados en `app/_data/login.ts`.
- Estilos con Tailwind y valores arbitrarios para paridad visual con las references.
- Elementos interactivos solo visuales (no funcionales): sin handlers, sin navegación real ni envío.

**Fuera de alcance (futuras specs):**

- Autenticación, sesiones, backend, API, persistencia, datos reales/dinámicos.
- Lógica funcional: envío de email, verificación de código, recuperación de contraseña, reset de contraseña, activación real, registro normal sin invitación.
- Cambios en `references/`.

## Modelo de datos — `app/_data/login.ts`

```ts
// Tipos y datos ficticios de las pantallas de login y activación de cuenta.

export type LoginScreenProps = {
  title: string;                 // "Iniciar sesión"
  subtitle: string;              // "Ingresá para ver el día de hoy."
  emailLabel: string;            // "EMAIL"
  passwordLabel: string;         // "CONTRASEÑA"
  forgotPasswordLabel: string;  // "¿Olvidó tu contraseña?"
  submitLabel: string;           // "Iniciar sesión"
  inviteCtaLabel: string;        // "¿Te invitó la guardería?"
  inviteCtaHref: string;         // "/login/activar-cuenta"
};

export type ActivateAccountScreenProps = {
  title: string;                 // "Bienvenida a OpenDayCare"
  invitedChildLabel: string;    // "Te invitaron a seguir a"
  invitedChildName: string;     // "Mateo"
  invitedChildRoom: string;     // "Sala Soles"
  codeLabel: string;             // "CÓDIGO DE INVITACIÓN"
  emailLabel: string;            // "EMAIL"
  passwordLabel: string;         // "CREAR CONTRASEÑA"
  consentLabel: string;          // "Autorizo a la guardería a tomar y compartir fotos de mi hijo dentro de la app."
  submitLabel: string;           // "Activar mi cuenta"
  loginCtaLabel: string;         // "¿Ya tenés cuenta?"
  loginCtaHref: string;          // "/login"
};

export const loginScreen: LoginScreenProps = {
  title: "Iniciar sesión",
  subtitle: "Ingresá para ver el día de hoy.",
  emailLabel: "EMAIL",
  passwordLabel: "CONTRASEÑA",
  forgotPasswordLabel: "¿Olvidó tu contraseña?",
  submitLabel: "Iniciar sesión",
  inviteCtaLabel: "¿Te invitó la guardería?",
  inviteCtaHref: "/login/activar-cuenta",
};

export const activateAccountScreen: ActivateAccountScreenProps = {
  title: "Bienvenida a OpenDayCare",
  invitedChildLabel: "Te invitaron a seguir a",
  invitedChildName: "Mateo",
  invitedChildRoom: "Sala Soles",
  codeLabel: "CÓDIGO DE INVITACIÓN",
  emailLabel: "EMAIL",
  passwordLabel: "CREAR CONTRASEÑA",
  consentLabel: "Autorizo a la guardería a tomar y compartir fotos de mi hijo dentro de la app.",
  submitLabel: "Activar mi cuenta",
  loginCtaLabel: "¿Ya tenés cuenta?",
  loginCtaHref: "/login",
};
```

Valores concretos (idénticos a la referencia): código de invitación "7K4P9"; email mostrado en la activación "lucia.fernandez@gmail.com".

## Plan de implementación

1. **Datos y tipos** — crear `app/_data/login.ts` con los tipos y constantes de las pantallas de login y activación. Verificación: `npx tsc --noEmit`.
2. **Componentes de login** — crear `app/_components/login/` (`LoginShell`, `LoginAside`, `LoginForm`, `LoginPage`). Verificación: render manual en `/login`.
3. **Componentes de activación** — crear `app/_components/login/` (`ActivateAccountShell`, `ActivateAccountForm`, `ActivateAccountConsent`, `ActivateAccountPage`). Verificación: render manual en `/login/activar-cuenta`.
4. **Rutas** — crear `app/login/page.tsx` y `app/login/activar-cuenta/page.tsx` con los tipos `PageProps<...>` de Next 16 y `generateStaticParams` si corresponde. Verificación: navegación manual.
5. **Responsivo y paridad** — ajustes responsive y revisión visual frente a las references; verificación final con `npx tsc --noEmit` y `npm run build`.

**Primer paso:** `app/_data/login.ts`. **Último paso:** verificación completa (tsc + build + revisión visual).

## Criterios de aceptación

- [ ] `/login` muestra email y contraseña y **no** muestra el toggle "INGRESO COMO".
- [ ] `/login` mantiene el link "¿Te invitó la guardería?" hacia la pantalla de activación.
- [ ] `/login/activar-cuenta` muestra código de invitación, email, crear contraseña, consentimiento y botón "Activar mi cuenta".
- [ ] Los elementos interactivos son no funcionales (sin handlers ni navegación real).
- [ ] Las pantallas se ven **idénticas** a los archivos de referencia (`references/pantallas/login.dc.html` y `references/pantallas/activar-cuenta.dc.html`): mismos colores, tipografía (Fredoka/Nunito), tamaños, radios, sombras, espaciados, copy y layout.
- [ ] Responsivo intuitivo.
- [ ] `npx tsc --noEmit` y `npm run build` sin errores.

## Decisiones tomadas

- **Sí:** rutas `/login` y `/login/activar-cuenta`. **No:** prefijo de rol ni ruta separada por familia.
- **Sí:** se elimina el toggle "INGRESO COMO". **No:** reemplazarlo por selector o por dos formularios.
- **Sí:** datos ficticios tipados en `app/_data/login.ts`. **No:** hardcodear contenido en JSX.
- **Sí:** solo UI; sin lógica funcional de autenticación. **No:** backend, API, persistencia o datos reales en esta spec.
- **Sí:** el link "¿Olvidó tu contraseña?" es un elemento visual no funcional.
- **Sí:** las pantallas deben verse igual que los archivos de referencia. **No:** inventar estilos ni adaptar visualmente con criterio propio.

## Riesgos

| Riesgo | Mitigación |
| --- | --- |
| Desviación visual al traducir el HTML inline a Tailwind/JSX | Comparar contra `references/pantallas/login.dc.html` y `references/pantallas/activar-cuenta.dc.html` con valores arbitrarios. |
| Tipos de Next 16 (`PageProps`, `params: Promise`) | Ajustar según `node_modules/next/dist/docs/`. |

## Fuera de alcance

- Autenticación, sesiones, backend, API, persistencia, datos reales/dinámicos.
- Lógica funcional de autenticación: envío de email, verificación de código, recuperación/reset de contraseña, activación real, registro normal sin invitación.

## Qué **no** incluye esta spec

- Autenticación, sesiones, backend, API, persistencia o datos reales.
- Lógica funcional de auth (envío, verificación, reset, activación real, registro).
- Cambios en `references/`.

Cada uno de esos puntos, si se aborda, irá en su propia spec.
