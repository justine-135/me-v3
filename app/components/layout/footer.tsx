import React from "react";
import { Socials } from "@/app/data";
import Link from "next/link";
import Text from "../typography/text";
import { BsGithub } from "react-icons/bs";

export default function Footer() {
  return (
    <footer className="LayoutFooter flex">
      <ul className="flex gap-4">
        {Socials.map((social) => {
          return (
            <li key={social.id}>
              <Link
                className="underline"
                href={social.url || ""}
                target="_blank"
              >
                <Text className="lowercase" type="tag">
                  {social.title}
                </Text>
              </Link>
            </li>
          );
        })}
      </ul>
      <Link
        className="ml-auto"
        href="https://github.com/justine-135/me-v3"
        target="_blank"
      >
        <BsGithub />
      </Link>
    </footer>
  );
}
