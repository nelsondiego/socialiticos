import Brand from "@/components/Brand";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Button } from "@/components/ui/button";
import { BellIcon, SearchIcon } from "lucide-react";
import UserMenu from "./UserMenu";
import { getUserData } from "@/actions/user-actions";

export const NavBar = async () => {
  const user = await getUserData();
  return (
    <nav className="w-full sticky top-0 bg-white dark:bg-[#11121b] z-50">
      <div className="container mx-auto px-2 md:px-4 max-w-7xl">
        <div className="flex justify-between items-center h-16">
          <Brand />
          <div className="w-1/3 bg-gray rounded-lg items-center px-4 py-2 gap-2 text-gray-500 cursor-pointer hidden md:flex">
            <SearchIcon className="h-5 w-5 text-gray-500" /> Buscar...
          </div>
          <div className="flex items-center md:gap-4">
            <Button variant="ghost" size="icon" className="md:hidden">
              <SearchIcon className="h-4 w-4 text-gray-500" />
            </Button>
            <ThemeToggle />
            <Button variant="ghost" size="icon">
              <BellIcon className="h-4 w-4 md:h-5 md:w-5" />
            </Button>
            {user && <UserMenu user={user} />}
          </div>
        </div>
      </div>
    </nav>
  );
};
