import { PropsWithChildren } from "react";
import LeftSide from "@/components/layout/LeftSide/LeftSide";
import { NavBar } from "@/components/layout/NavBar/NavBar";
import { RightSide } from "@/components/layout/RightSide/RightSide";
import { initializeUserData } from "@/actions/user-actions";

const AppLayout = async ({ children }: PropsWithChildren) => {
  await initializeUserData();

  return (
    <div className="min-h-screen w-full flex relative flex-col bg-gray">
      <NavBar />
      <div className="flex-1 container mx-auto max-w-7xl ">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* Left Side */}
          <div className="hidden md:block md:sticky md:top-[80px] md:h-[calc(100vh-80px)] md:overflow-y-auto">
            <LeftSide />
          </div>
          {/* Feed */}
          <div className="md:col-span-2 md:mt-4">{children}</div>
          {/* Right Side */}
          <RightSide />
        </div>
      </div>
    </div>
  );
};

export default AppLayout;
