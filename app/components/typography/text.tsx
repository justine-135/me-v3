import React, { ReactNode } from "react";
import { TextType } from "@/app/lib/types/text";

interface Props {
  children: string | ReactNode;
  type?: TextType;
  className?: string;
}

export default function Text({
  children,
  type = "default",
  className = "",
}: Props) {
  const commonStyle = "text-xs md:text-sm";

  if (type === "tag") {
    return (
      <p className={`opacity-50 ${commonStyle} ${className} `}>{children}</p>
    );
  }

  if (typeof children === "string")
    return (
      <p
        dangerouslySetInnerHTML={{ __html: children }}
        className={`opacity-80 ${commonStyle} ${className} `}
      />
    );

  return (
    <p className={`opacity-80 ${commonStyle} ${className} `}>{children}</p>
  );
}
