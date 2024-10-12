import { getUserData } from "@/actions/user-actions";
import { Card } from "@/components/ui-utils/Card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { userProfile } from "@/mock/mockdata";

const UserProfile = async () => {
  const userData = await getUserData();

  return (
    <Card>
      <div className="bg-gray rounded-lg flex flex-col gap-6 p-4">
        <div className="flex items-center gap-2 w-full">
          <Avatar className="w-12 h-12">
            <AvatarImage src={userData?.photoUrl} />
            <AvatarFallback>{userData?.firstName.charAt(0)}{userData?.lastName.charAt(0)}</AvatarFallback>
          </Avatar>
          <div className="flex flex-col">
            <p className="font-semibold">{userData?.firstName} {userData?.lastName}</p>
            <p className="text-sm text-gray-500 dark:text-gray-400">{userData?.email}</p>
          </div>
        </div>
        {/* Followers and following */}
        <div className="flex justify-between gap-2 ">
          <div className="flex flex-col items-center">
            <p className="font-semibold">{userProfile.followers}</p>
            <p className="text-sm text-gray-500 dark:text-gray-400">Seguidos</p>
          </div>
            <div className="flex flex-col items-center">
            <p className="font-semibold">{userProfile.following}</p>
            <p className="text-sm text-gray-500 dark:text-gray-400">Siguiendo</p>
          </div>
          <div className="flex flex-col items-center">
            <p className="font-semibold">{userProfile.posts}</p>
            <p className="text-sm text-gray-500 dark:text-gray-400">Posts</p>
          </div>
        </div>
        {/* Edit profile button */}
        <Button  size="sm" className="w-full">Editar perfil</Button>
      </div>
    </Card>
  );
};

export default UserProfile;
