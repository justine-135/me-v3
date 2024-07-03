import React from "react";
import { TextType } from "@/app/types/text";
import clsx from "clsx";

interface Props {
  children: React.ReactNode;
  type?: TextType;
}

export default function Text({ children, type = "default" }: Props) {
  const textStyle = type === "default" ? "opacity-70" : "opacity-50";

  return <p className={clsx("text-sm", textStyle)}>{children}</p>;
}
