import React from "react";
import { HeadingType } from "../../lib/types/text";

interface Props {
  className?: string;
  children: React.ReactNode;
  type?: HeadingType;
  bold?: boolean;
}

export default function Heading({
  className = "",
  children,
  type = "h2", // Default to "h2" for fallback
  bold = false,
}: Props) {
  const headingStyles = bold ? "font-medium" : "font-normal";
  const commonStyles = `${headingStyles} ${className}`;

  switch (type) {
    case "h1":
      return (
        <h1 className={`text-2xl md:text-3xl ${commonStyles}`}>{children}</h1>
      );
    case "h3":
      return (
        <h1 className={`text-xl md:text-lg ${commonStyles}`}>{children}</h1>
      );
    default:
      return (
        <h2 className={`text-lg md:text-xl ${commonStyles}`}>{children}</h2>
      );
  }
}
