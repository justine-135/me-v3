import React from "react";
import { HeadingType } from "../../lib/types/text";

interface Props {
  className?: string;
  children: React.ReactNode;
  type?: HeadingType;
  bold?: boolean;
}

export default function Heading({
  className,
  children,
  type = "default",
  bold = false,
}: Props) {
  if (type === "h1")
    return (
      <h1
        className={`text-lg md:text-2xl ${
          bold ? "font-bold" : "font-medium"
        } ${className}`}
      >
        {children}
      </h1>
    );
  return (
    <h2
      className={`text-xs md:text-sm ${
        bold ? "font-bold" : "font-medium"
      } ${className}`}
    >
      {children}
    </h2>
  );
}
