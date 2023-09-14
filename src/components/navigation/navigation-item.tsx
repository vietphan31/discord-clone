"use client";

import { Server } from "@prisma/client";
import Image from "next/image";
import { useParams, useRouter } from "next/navigation";

import { ActionTooltip } from "@/components/action-tooltip";
import { cn } from "@/lib/utils";

interface NavigationItemProps
  extends Pick<Server, "id" | "imageUrl" | "name"> {}

export const NavigationItem = ({ id, imageUrl, name }: NavigationItemProps) => {
  const router = useRouter();
  const params = useParams();

  const isActiveServer = params?.serverId === id;

  const onClick = () => {
    router.push(`/servers/${id}`);
  };

  return (
    <ActionTooltip side="right" align="center" label={name}>
      <button className="group relative flex items-center" onClick={onClick}>
        <div
          className={cn(
            "absolute left-0 bg-primary rounded-r-full transition-all w-[4px]",
            isActiveServer ? "h-[36px]" : "h-[8px] group-hover:h-[20px]"
          )}
        />
        <div
          className={cn(
            "relative group flex mx-3 h-[48px] w-[48px] rounded-[24px] group-hover:rounded-[16px] transition-all overflow-hidden"
          )}
        >
          <Image fill src={imageUrl} alt="Server" />
        </div>
      </button>
    </ActionTooltip>
  );
};
