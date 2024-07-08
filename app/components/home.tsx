"use client";

import Image from "next/image";
import { Dev, Projects, Socials, WorkExperience } from "../data";
import Heading from "./typography/heading";
import Card from "./card";
import { Timeline } from "./layout/timeline";
import Text from "./typography/text";
import GlowingCircle from "./glowing-circle";
import { useState } from "react";

interface ILookButton {
  isOpen: boolean;
  onOpenPortal: () => void;
}

const LookButton = ({ isOpen, onOpenPortal }: ILookButton) => {
  if (!isOpen) return <></>;
  return (
    <button className="LookButton" onClick={onOpenPortal}>
      <Image
        className="fixed bottom-10 right-20 hover:cursor-pointer"
        alt="black dog spinning Sticker by 157ofgemma"
        src="/images/dog_spinning.webp"
        unoptimized
        width={80}
        height={80}
      />
    </button>
  );
};

export default function Home() {
  const [openPortal, setOpenPortal] = useState<boolean>(false);
  const { name, title, description } = Dev;

  const onOpenPortal = () => {
    setOpenPortal(true);
    if (typeof window != "undefined" && window.document) {
      document.body.style.overflow = "hidden";
    }
  };

  const onClosePortal = () => {
    setOpenPortal(false);
    if (typeof window != "undefined" && window.document) {
      document.body.style.overflow = "auto";
    }
  };

  return (
    <>
      <GlowingCircle isOpen={openPortal} closePortal={onClosePortal} />
      <main
        className={`MainWrapper relative flex justify-center w-full ${
          openPortal ? "blur-sm" : ""
        }`}
      >
        <LookButton isOpen={!openPortal} onOpenPortal={onOpenPortal} />
        <div className="Main flex flex-col gap-8 w-1/3 mt-24 mb-24">
          <div className="Profile">
            <Heading type="h1" bold>
              {name}
            </Heading>
            <Text>{title}</Text>
          </div>

          <Card title={<Heading bold>About</Heading>} body={description} />

          <Timeline
            title={<Heading bold>Work experience</Heading>}
            dataSource={WorkExperience}
          />
          <Timeline
            title={<Heading bold>Projects</Heading>}
            dataSource={Projects}
          />
          <Timeline
            title={<Heading bold>Links</Heading>}
            dataSource={Socials}
          />
        </div>
      </main>
    </>
  );
}
