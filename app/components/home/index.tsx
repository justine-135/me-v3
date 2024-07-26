"use client";

import React from "react";
import Content from "./content";
import useDataSWR from "@/app/lib/hook/useDataSWR";
import Loading from "./loading";

export default function index() {
  const { data, isLoading } = useDataSWR();

  if (isLoading) return <Loading />;

  return <Content data={data} />;
}
