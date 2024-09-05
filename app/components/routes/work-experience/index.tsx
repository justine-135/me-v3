import React from "react";
import { Works } from "@/app/data";
import { InfoList } from "../../infoList";

export default function WorkExperience() {
  return (
    <section className="space-y-6">
      <InfoList arr={Works} />
    </section>
  );
}
