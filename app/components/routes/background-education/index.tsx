import React from "react";
import { InfoList } from "@/app/components/infoList";
import { Education } from "@/app/data";

export default function BackgroundEducation() {
  return (
    <section className="space-y-6">
      <InfoList arr={Education} />
    </section>
  );
}
