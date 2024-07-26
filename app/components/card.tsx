import { ReactNode } from "react";
import Text from "./typography/text";
import Image from "next/image";
import React from "react";

interface Props {
  className?: string;
  icon?: string;
  title: ReactNode;
  body?: string;
  tags?: ReactNode;
}

export default function Card({ className, icon, title, body, tags }: Props) {
  return (
    <div className={`Card flex flex-col gap-2 ${className}`}>
      {icon && (
        <Image
          alt={icon || ""}
          src={`/images/${icon || ""}`}
          width={40}
          height={40}
        />
      )}

      {title}
      <Text>{body}</Text>
      {tags}
    </div>
  );
}
