"use client";

import Image from "next/image";

import { useEffect, useState } from "react";
import { FaComment } from "react-icons/fa6";

import React from "react";
import { Dev } from "@/app/data";
import Heading from "../typography/heading";
import Card from "../card";
import { PortfolioSectionValue } from "@/app/lib/constants/data";
import { PortfolioSection } from "@/app/lib/enums/data";
import { Timeline } from "../layout/timeline";
import Text from "../typography/text";
import { PortfolioSections } from "@/app/lib/types/data";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const LookButton = ({ onOpenPortal }: { onOpenPortal: () => void }) => {
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      console.log("asd");
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

export default function Content({ data }: { data?: PortfolioSections[] }) {
  const { name, title, description } = Dev;

  // const onOpenPortal = () => {
  //   setOpenPortal(true);
  //   document.body.style.overflow = "hidden";
  // };

  // const onClosePortal = () => {
  //   setOpenPortal(false);
  //   document.body.style.overflow = "auto";
  // };

  // const dynamicWrapperClassName = `MainWrapper relative flex justify-center w-full ${
  //   openPortal ? "blur-sm" : ""
  // }`;

  return (
    <>
      {/* <PortalModal isOpen={openPortal} closePortal={onClosePortal} /> */}
      <main className="MainWrapper relative flex justify-center w-full ">
        {/* {!openPortal && <LookButton onOpenPortal={onOpenPortal} />} */}
        <div className="Main flex flex-col gap-6 md:gap-16 w-4/5 md:w-1/3 my-12 md:my-24">
          <div className="Profile">
            <Heading type="h1" bold>
              {name}
            </Heading>
            <Text>{title}</Text>
          </div>
          <Card title={<Heading>About</Heading>} body={description} />
          {data
            ?.filter(
              (item) =>
                item.section !==
                PortfolioSectionValue[PortfolioSection.PORTFOLIOS]
            )
            ?.map((item, key) => {
              return (
                <div key={key}>
                  <Timeline
                    title={
                      <Heading className="capitalize">{item.section}</Heading>
                    }
                    dataSource={item.result}
                  />
                </div>
              );
            })}
        </div>
      </main>
    </>
  );
}
