import Link from "next/link";

import SignUpForm from "./SignUpForm";

export default function SignIn() {
  return (
    <div className="mx-auto grid w-[350px] gap-6">
      <div className="grid gap-2 text-center">
        <h1 className="text-3xl font-bold">Registrarse</h1>
        <p className="text-balance text-muted-foreground">
          Ingresa tu información para crear una cuenta
        </p>
      </div>
      <SignUpForm />
      <div className="mt-4 text-center text-sm">
        ¿Ya tienes una cuenta?{" "}
        <Link href="/signin" className="underline">
          Iniciar sesión
        </Link>
      </div>
    </div>
  );
}
