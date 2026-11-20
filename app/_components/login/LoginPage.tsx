import { loginScreen } from "@/app/_data/login";
import { LoginAside } from "./LoginAside";
import { LoginForm } from "./LoginForm";
import { LoginShell } from "./LoginShell";

export function LoginPage() {
  return (
    <LoginShell>
      <LoginAside
        title="El día de cada niño,"
        titleRest="compartido con su familia."
        subtitle="Publicamos momentos, gestionamos las salas y mantenemos a las familias cerca, desde un solo lugar."
        orgLabel="OpenDayCare Guardería Sala Soles"
      />
      <LoginForm screen={loginScreen} />
    </LoginShell>
  );
}
