import React from "react";
import { TextType } from "@/app/lib/types/text";

interface Props {
  children: React.ReactNode;
  type?: TextType;
  className?: string;
}

export default function Text({ children, type = "default", className }: Props) {
  const commonStyle = "text-xs md:text-sm";

  if (type === "tag") {
    return (
      <p className={`${className} opacity-40 ${commonStyle}`}>{children}</p>
    );
  }

  return <p className={`${className} opacity-70 ${commonStyle}`}>{children}</p>;
}
