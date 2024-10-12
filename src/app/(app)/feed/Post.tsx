import { Card } from "@/components/ui-utils/Card";
import { Separator } from "@/components/ui-utils/Separator";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Post as PostType } from "@/mock/mockdata";
import {
  Bookmark,
  EllipsisVertical,
  Forward,
  Heart,
  MessageSquare,
} from "lucide-react";
import Image from "next/image";
import React from "react";

export const Post = ({ post }: { post: PostType }) => {
  return (
    <Card className="flex flex-col gap-4">
      {/* Header */}
      <div className="flex items-center justify-between gap-2 text-gray-600 dark:text-gray-400">
        <div className="flex items-center gap-2">
          <Avatar>
            <AvatarImage src={post.avatar} />
            <AvatarFallback>{post.username.charAt(0)}</AvatarFallback>
          </Avatar>
          <div className="flex flex-col">
            <div className="text-sm font-bold">{post.displayName}</div>
            <div className="text-xs text-gray-500 dark:text-gray-400">{post.timestamp}</div>
          </div>
        </div>

        <Button variant="ghost" size="icon">
          <EllipsisVertical className="w-4 h-4 text-gray-400" />
        </Button>
      </div>

      {/* Content */}
      <div className="text-sm text-gray-600 dark:text-gray-400">{post.content}</div>
      {post.image && (
        <Image
          src={post.image}
          alt="Post"
          width={500}
          height={500}
          className="w-full aspect-video object-cover rounded-lg"
        />
      )}
      {!post.image && <Separator />}

      {/* Actions */}
      <div className="flex items-center justify-between gap-2 text-gray-600 dark:text-gray-400">
        <div className="flex items-center gap-6 text-xs text-gray-500 dark:text-gray-400">
          <div className="flex items-center gap-1">
            <MessageSquare className="w-4 h-4 text-gray-400" />
            <span>{post.comments} comentarios</span>
          </div>
          <div className="flex items-center gap-1">
            <Heart className="w-4 h-4 text-gray-400" />
            <span>{post.likes} Me gusta</span>
          </div>
          <div className="flex items-center gap-1">
            <Forward className="w-4 h-4 text-gray-400" />
            <span>{post.shares} compartido</span>
          </div>
        </div>
        <Button variant="ghost" size="icon">
          <Bookmark className="w-4 h-4 text-gray-400 dark:text-gray-400" />
        </Button>
      </div>
    </Card>
  );
};
