"use client";

import { signOut } from "@/app/(auth)/signin/action";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { LoadingOverlay } from "@/components/ui/LoadingOverlay";
import { useState } from "react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";
import { UserData } from "@/actions/user-actions";

export default function UserMenu({ user }: { user: UserData }) {
  const [isLoading, setIsLoading] = useState(false);


  const handleSignOut = async () => {
    setIsLoading(true);
    try {
      await signOut();
    } catch (error) {
      console.error("Error durante el cierre de sesión:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {isLoading && <LoadingOverlay />}
      <DropdownMenu>
        <DropdownMenuTrigger>
          <div className="flex items-center">
            <Avatar className="w-8 h-8 mr-2">
              <AvatarImage src={user?.photoUrl} />
              <AvatarFallback>{user?.firstName.charAt(0)}{user?.lastName.charAt(0)}</AvatarFallback>
            </Avatar>
            <div className="hidden md:block font-semibold text-gray-600">{user?.firstName} {user?.lastName}</div>
            <ChevronDown className="w-4 h-4 hidden md:block" />
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56">
          <DropdownMenuLabel>Mi Cuenta</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            <DropdownMenuItem>
              Perfil
              <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
            </DropdownMenuItem>
            <DropdownMenuItem>
              Facturación
              <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
            </DropdownMenuItem>
            <DropdownMenuItem>
              Configuración
              <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
            </DropdownMenuItem>
            <DropdownMenuItem>
              Atajos de teclado
              <DropdownMenuShortcut>⌘K</DropdownMenuShortcut>
            </DropdownMenuItem>
          </DropdownMenuGroup>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            <DropdownMenuItem>Equipo</DropdownMenuItem>
            <DropdownMenuSub>
              <DropdownMenuSubTrigger>Invitar usuarios</DropdownMenuSubTrigger>
              <DropdownMenuPortal>
                <DropdownMenuSubContent>
                  <DropdownMenuItem>Correo electrónico</DropdownMenuItem>
                  <DropdownMenuItem>Mensaje</DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>Más...</DropdownMenuItem>
                </DropdownMenuSubContent>
              </DropdownMenuPortal>
            </DropdownMenuSub>
            <DropdownMenuItem>
              Nuevo Equipo
              <DropdownMenuShortcut>⌘+T</DropdownMenuShortcut>
            </DropdownMenuItem>
          </DropdownMenuGroup>
          <DropdownMenuSeparator />
          <DropdownMenuItem>Soporte</DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem onClick={handleSignOut} className="cursor-pointer">
            Cerrar sesión
            <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
}
