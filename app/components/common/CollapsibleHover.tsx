import React, { FC, ReactNode, useState } from "react";

interface CollapsibleHoverProps {
  title: string;
  children: ReactNode;
  index: number;
}

const CollapsibleHover: FC<CollapsibleHoverProps> = ({
  title,
  children,
  index,
}: CollapsibleHoverProps) => {
  return (
    <div className="group overflow-hidden hover:text-orange-10 transition-all transition-max-height duration-300">
      <div className="p-4">
        <div className="flex gap-5 items-center">
          <div className="size-10 min-w-[2.5rem] min-h-[2.5rem] rounded-full bg-blue-10 group-hover:bg-orange-10 text-white flex items-center justify-center">
            {index + 1}
          </div>
          <h2 className="font-semibold">{title}</h2>
        </div>
        <div className="border-l border-orange-5 ml-5 p-5 border-dashed group-hover:inline-block duration-300 h-fit hidden">
          {children}
        </div>
      </div>
    </div>
  );
};

export default CollapsibleHover;
