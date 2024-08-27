"use client";
import React, { useState } from "react";
import Text from "../typography/text";
import Link from "next/link";
import { Routes } from "@/app/data";

export default function Home() {
  const [isHover, setIsHover] = useState<number | null>(null);
  return (
    <div className="space-y-8">
      <div>
        <Text className="md:text-xl">
          Building things that meet user needs, and drive meaningful engagement.
        </Text>
        <Text className="md:text-xl">
          ReactJS Developer at{" "}
          <Link
            className="underline"
            href="https://newstarsinc.com/"
            target="_blank"
          >
            New Stars Solutions Inc
          </Link>
          .
        </Text>
      </div>

      <ul className="Routes space-y-2">
        {Routes.map((route) => {
          return (
            <li key={route.id}>
              <Text className="flex items-center gap-6">
                <Link
                  className="underline"
                  href={route.path}
                  onMouseEnter={() => setIsHover(route.id)}
                  onMouseOut={() => setIsHover(null)}
                >
                  {route.title}
                </Link>
                {isHover === route.id && (
                  <span className="relative flex h-2 w-2">
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-sky-500"></span>
                  </span>
                )}
              </Text>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
