import { Card } from "@/components/ui-utils/Card";
import { Separator } from "@/components/ui-utils/Separator";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { userProfile } from "@/mock/mockdata";
import { AtSign, Hash, Images, SmilePlus } from "lucide-react";

const NewPostForm = () => {
  return (
    <Card className="flex flex-col gap-4">
      {/* Header */}
      <div className="flex items-center justify-between gap-2">
        <Avatar>
          <AvatarImage src={userProfile.avatar} />
          <AvatarFallback>{userProfile.username.charAt(0)}</AvatarFallback>
        </Avatar>
        <div className="flex items-center gap-2 w-full bg-gray rounded-xl cursor-pointer p-2 text-gray-400 dark:text-gray-500">
          <div className="flex-1">¿Que estas pensando?</div>
          <SmilePlus className="w-4 h-4 text-gray-400 dark:text-gray-500 " />
        </div>
        <Button>Publicar</Button>
      </div>

      <Separator />

      {/* Actions */}
      <div className="flex items-center text-gray-500 dark:text-gray-400 text-sm gap-4">
        <div className="flex items-center gap-1">
          <Images className="w-4 h-4 text-blue-500" /> <span>Imagen</span>
        </div>
        <div className="flex items-center gap-1">
          <Hash className="w-4 h-4 text-orange-500" /> <span>Hashtag</span>
        </div>
        <div className="flex items-center gap-1">
          <AtSign className="w-4 h-4 text-gray-500" /> <span>Mencionar</span>
        </div>
      </div>
    </Card>
  );
};

export default NewPostForm;
