import React from "react";
import { TextType } from "@/app/lib/types/text";
import clsx from "clsx";

interface Props {
  children: React.ReactNode;
  type?: TextType;
  className?: string;
}

export default function Text({ children, type = "default", className }: Props) {
  const textStyle = type === "default" ? "opacity-70" : "opacity-50";

  return <p className={clsx(`text-sm ${className}`, textStyle)}>{children}</p>;
}
