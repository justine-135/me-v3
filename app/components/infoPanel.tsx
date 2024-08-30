import React, { ReactNode } from "react";
import Heading from "./typography/heading";
import Text from "./typography/text";
import Link from "next/link";
import { BsArrowRightShort } from "react-icons/bs";

interface Props {
  title: string;
  titleLink?: string;
  subtitle?: ReactNode;
  subtitle2?: string;
  children: ReactNode;
}

export const InfoPanel = ({
  title,
  titleLink = "",
  subtitle,
  subtitle2,
  children,
}: Props) => {
  return (
    <section className="InfoPanel flex flex-col gap-2">
      <div className="TitleHeader">
        <Heading type="h3" bold>
          {titleLink ? (
            <Link className="flex" href={titleLink} target="_blank">
              {title} <BsArrowRightShort className="-rotate-45" size={28} />
            </Link>
          ) : (
            title
          )}
        </Heading>
        <Text>{subtitle}</Text>
        <Text type="tag">{subtitle2}</Text>
      </div>
      <div className="Content space-y-2">{children}</div>
    </section>
  );
};
