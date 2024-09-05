import React from "react";
import { InfoList } from "../../infoList";
import { About } from "@/app/data";

export default function AboutMe() {
  return (
    <section className="space-y-6">
      <InfoList arr={About} />
    </section>
  );
}
