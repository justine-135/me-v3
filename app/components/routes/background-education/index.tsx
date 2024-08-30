import React from "react";
import Text from "@/app/components/typography/text";
import { InfoList } from "@/app/components/infoList";
import { Education } from "@/app/data";

export default function BackgroundEducation() {
  return (
    <section className="space-y-6">
      <Text>
        I&apos;ve always been fascinated by technology, a passion that began in
        high school while playing video games with classmates, friends, and
        family. I was initially interested by how computer hardware could run
        various programs and games, which sparked a deeper curiosity about
        hardware, particularly GPUs (graphics processing units).
      </Text>
      <Text>
        This interest drove me to pursue courses and programs in this field,
        ultimately leading to the completion of my bachelor&apos;s degree. My
        ongoing curiosity and enthusiasm for technology have been key factors in
        my academic and professional journey.
      </Text>
      <InfoList arr={Education} />
    </section>
  );
}
