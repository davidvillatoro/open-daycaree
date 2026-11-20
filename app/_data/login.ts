export type LoginScreenProps = {
  title: string;
  subtitle: string;
  emailLabel: string;
  passwordLabel: string;
  forgotPasswordLabel: string;
  submitLabel: string;
  inviteCtaLabel: string;
  inviteCtaHref: string;
};

export type ActivateAccountScreenProps = {
  title: string;
  invitedChildLabel: string;
  invitedChildName: string;
  invitedChildRoom: string;
  code: string;
  email: string;
  password: string;
  codeLabel: string;
  emailLabel: string;
  passwordLabel: string;
  consentLabel: string;
  submitLabel: string;
  loginCtaLabel: string;
  loginCtaHref: string;
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
  code: "7K4P9",
  email: "lucia.fernandez@gmail.com",
  password: "contraseña",
  codeLabel: "CÓDIGO DE INVITACIÓN",
  emailLabel: "EMAIL",
  passwordLabel: "CREAR CONTRASEÑA",
  consentLabel: "Autorizo a la guardería a tomar y compartir fotos de mi hijo dentro de la app.",
  submitLabel: "Activar mi cuenta",
  loginCtaLabel: "¿Ya tenés cuenta?",
  loginCtaHref: "/login",
};
