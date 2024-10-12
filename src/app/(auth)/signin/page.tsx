import Link from "next/link";
import SignInForm from "./signInForm";


export default function SignIn() {
  return (
    <div className="mx-auto grid w-[350px] gap-6">
      <div className="grid gap-2 text-center">
        <h1 className="text-3xl font-bold">Iniciar sesión</h1>
        <p className="text-balance text-muted-foreground">
          Ingresa tu correo electrónico para acceder a tu cuenta
        </p>
      </div>
      <SignInForm />
      <div className="mt-4 text-center text-sm">
        ¿No tienes una cuenta?{" "}
        <Link href="/signup" className="underline">
          Regístrate
        </Link>
      </div>
    </div>
  );
}
