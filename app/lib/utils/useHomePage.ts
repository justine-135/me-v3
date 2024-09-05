"use client";
import { usePathname } from "next/navigation";

export const useHomePage = () => {
  const router = usePathname();

  return router === "/";
};
