import React from "react";
import UserProfile from "./UserProfile";
import { Card } from "@/components/ui-utils/Card";
import { Button } from "@/components/ui/button";
import { BellIcon, CalendarIcon, HomeIcon, Settings, Users } from "lucide-react";
import Link from "next/link";

const LeftSide = () => {
  return (
    <div className="flex flex-col gap-6">
      <UserProfile />
      <Card>
        <div className="flex flex-col gap-4">
          <Link href="/feed">
            <Button variant="default" className="w-full flex items-center justify-start">
              <HomeIcon className="h-4 w-4 mr-2" />
              Feed
            </Button>
          </Link>
          <Link href="/friends">
            <Button variant="ghost" className="w-full flex items-center justify-start">
              <Users className="h-4 w-4 mr-2" />
              Amigos
            </Button>
          </Link>
          <Button variant="ghost" className="w-full flex items-center justify-start ">
            <BellIcon className="h-4 w-4 mr-2" />
            Notificaciones
          </Button>
          <Button variant="ghost" className="w-full flex items-center justify-start">
            <CalendarIcon className="h-4 w-4 mr-2" />
            Eventos
          </Button>
          <Button variant="ghost" className="w-full flex items-center justify-start">
            <Users className="h-4 w-4 mr-2" />
            Grupos
          </Button>
          <Button variant="ghost" className="w-full flex items-center justify-start">
            <Settings className="h-4 w-4 mr-2" />
            Configuraciones
          </Button>
        </div>
      </Card>
      <div className="flex gap-4 text-xs text-gray-400">
        <p>Terminos</p>
        <p>Cookies</p>
        <p>Privacidad</p>
        <p>Soporte</p>
      </div>
    </div>
  );
};

export default LeftSide;
