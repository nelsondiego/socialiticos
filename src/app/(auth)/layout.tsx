import Brand from "@/components/Brand";
import { ThemeToggle } from "@/components/ThemeToggle";
import Image from "next/image";
import React, { PropsWithChildren } from "react";

const AuthLayout = ({children}: PropsWithChildren) => {
  return (
    <div className="w-full lg:grid h-screen lg:grid-cols-2 relative bg-white dark:invert">
      <div className="absolute top-0 left-0 w-full flex justify-between p-8 z-10">
        <Brand />
        <ThemeToggle />
      </div>
      <div className="flex items-center justify-center py-12 min-h-screen relative ">
        {children}
      </div>
      <div className="hidden lg:block h-screen relative">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-pink-500 dark:from-pink-800 dark:to-blue-700"></div>
        <Image
          src="/people2.jpg"
          alt="Gente en la calle"
          width="1000"
          height="1000"
          priority
          className="h-full w-full object-cover opacity-50"
        />
      </div>
    </div>
  );
};

export default AuthLayout;
