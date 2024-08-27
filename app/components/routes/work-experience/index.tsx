import React from "react";
import Text from "@/app/components/typography/text";
import { Works } from "@/app/data";
import { InfoList } from "../../infoList";

export default function WorkExperience() {
  return (
    <div className="space-y-6">
      <Text>
        This section outlines my journey from studying web development in
        college to building real-world experience through freelancing and
        internships. Each step along the way has contributed to my growth as a
        web developer, leading to my first role as a frontend developer.
        Here&apos;s a summary of my professional experiences and the skills
        I&apos;ve gained through these opportunities.
      </Text>
      <InfoList arr={Works} />
    </div>
  );
}
