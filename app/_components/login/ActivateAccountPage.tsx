import { activateAccountScreen } from "@/app/_data/login";
import { ActivateAccountForm } from "./ActivateAccountForm";
import { ActivateAccountShell } from "./ActivateAccountShell";

export function ActivateAccountPage() {
  return (
    <ActivateAccountShell>
      <ActivateAccountForm
        screen={activateAccountScreen}
        intro="Te invitaron a seguir el día de tu hijo. Creá tu contraseña para activar la cuenta."
      />
    </ActivateAccountShell>
  );
}
