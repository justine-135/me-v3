import React from "react";
import Text from "@/app/components/typography/text";
import { Works } from "@/app/data";
import { InfoList } from "../../infoList";

export default function WorkExperience() {
  return (
    <section className="space-y-6">
      <Text>My experience into becoming</Text>
      <InfoList arr={Works} />
    </section>
  );
}
