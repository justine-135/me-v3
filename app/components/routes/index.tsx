"use client";
import React from "react";
import Text from "../typography/text";
import Link from "next/link";
import { Routes } from "@/app/data";

export default function Home() {
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
                <Link className="underline" href={route.path}>
                  {route.title}
                </Link>
              </Text>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
