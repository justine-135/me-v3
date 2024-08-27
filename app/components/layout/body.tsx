"use client";
import React, { ReactNode } from "react";
import { useHomePage } from "@/app/lib/utils/useHomePage";
import { usePathname } from "next/navigation";
import Heading from "../typography/heading";
import Link from "next/link";
import Text from "../typography/text";

export default function Body({ children }: { children: ReactNode }) {
  const isHomePage = useHomePage();
  const router = usePathname();

  const pageTitle = router.replace(/\//g, "").replace(/-/g, " ");

  return (
    <section className="LayoutBody my-6 py-6 border-t-[1px] border-b-[1px] border-gray-700">
      {!isHomePage && (
        <Link className="flex items-center underline mb-2" href="/">
          <Text type="tag">Back</Text>
        </Link>
      )}
      {!isHomePage && (
        <Heading className="capitalize mb-4" type="h2" bold>
          {pageTitle}
        </Heading>
      )}
      {children}
    </section>
  );
}
