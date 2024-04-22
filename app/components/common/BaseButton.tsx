"use client";
import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { FC, MouseEvent, ReactNode } from "react";

interface BaseButtonProps {
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
  children: ReactNode;
  customIcon?: ReactNode;
  icon?: IconDefinition;
  className?: string;
  showIcon?: boolean;
  href?: string;
  type?: "button" | "submit" | "reset";
  color?: "blue" | "orange";
}

const BaseButton: FC<BaseButtonProps> = ({
  onClick,
  children,
  icon,
  customIcon,
  className,
  showIcon,
  href,
  type = "button",
  color = "blue",
}) => {
  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    onClick && onClick(event);
  };

  return (
    <button
      type={type}
      className={`btn-${color} relative overflow-hidden rounded-lg text-white h-[36px] py-[5px] px-[16px] gap-2 inline-flex items-center justify-center ${
        className || ""
      }`}
      onClick={handleClick}
    >
      {href ? (
        <Link href={href} className="w-full h-full">
          <a>{children}</a>
        </Link>
      ) : (
        children
      )}
    </button>
  );
};

export default BaseButton;
