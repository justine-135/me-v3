"use client";

import Image from "next/image";
import { Dev, Projects, Socials, WorkExperience } from "../data";
import Heading from "./typography/heading";
import Card from "./card";
import { Timeline } from "./layout/timeline";
import Text from "./typography/text";
import PortalModal from "./portal-modal";
import { useEffect, useState } from "react";
import { FaComment } from "react-icons/fa6";

const LookButton = ({ onOpenPortal }: { onOpenPortal: () => void }) => {
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowMessage((prev) => !prev);
    }, 6000);

    return () => clearInterval(interval);
  }, []);
  return (
    <button
      className="LookButton fixed bottom-10 right-20 flex"
      onClick={onOpenPortal}
    >
      {showMessage && (
        <>
          <Heading className="text-black translate-x-10 z-10">Look</Heading>
          <FaComment className="scale-x-[-1] -translate-y-5" size={60} />
        </>
      )}
      <Image
        className="hover:cursor-pointer"
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
    document.body.style.overflow = "hidden";
  };

  const onClosePortal = () => {
    setOpenPortal(false);
    document.body.style.overflow = "auto";
  };

  return (
    <>
      <PortalModal isOpen={openPortal} closePortal={onClosePortal} />
      <main
        className={`MainWrapper relative flex justify-center w-full ${
          openPortal ? "blur-sm" : ""
        }`}
      >
        {!openPortal && <LookButton onOpenPortal={onOpenPortal} />}
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
