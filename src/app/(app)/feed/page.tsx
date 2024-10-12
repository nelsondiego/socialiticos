import { Separator } from "@/components/ui-utils/Separator";
import NewPostForm from "./NewPostForm";
import { ChevronDown } from "lucide-react";
import { posts } from "@/mock/mockdata";
import { Post } from "./Post";

const Feed = () => {
  return (
    <div className="flex flex-col gap-6">
      <NewPostForm />
      <div className="flex items-center gap-2 text-xs text-gray-500">
        <Separator className="flex-1 border-gray-300" />
        <div>Ordenar por:</div>
        <div className="flex items-center gap-1">
          Más recientes
          <ChevronDown className="w-4 h-4" />
        </div>
      </div>

      {/* Posts */}
      <div className="flex flex-col gap-4">
        {posts
        .map((post) => (
          <Post key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default Feed;
