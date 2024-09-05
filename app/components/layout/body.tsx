"use client";
import React, { ReactNode } from "react";
import { useHomePage } from "@/app/lib/utils/useHomePage";
import Link from "next/link";
import Text from "../typography/text";

export default function Body({ children }: { children: ReactNode }) {
  const isHomePage = useHomePage();

  return (
    <article className="LayoutBody my-6 py-6 border-t-[1px] border-b-[1px] border-gray-700">
      {!isHomePage && (
        <Link className="flex items-center underline mb-2" href="/">
          <Text type="tag">Back</Text>
        </Link>
      )}
      {children}
    </article>
  );
}
