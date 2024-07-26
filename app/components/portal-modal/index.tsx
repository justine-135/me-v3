import React, { useState } from "react";
import Image from "next/image";
import Heading from "../typography/heading";
import { Portfolios } from "@/app/data";
import Link from "next/link";
import { motion } from "framer-motion";
import { MdOutlineClose } from "react-icons/md";

const imgSize = 230;

interface Props {
  isOpen: boolean;
  closePortal: () => void;
}

const Overlay = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.2 }}
    >
      <div className="Overlay fixed h-lvh w-lvw blur-lg opacity-50 z-40" />{" "}
    </motion.div>
  );
};

interface IPrevPortfolio {
  src: string;
  alt: string;
  url: string;
}

const PrevPortfolio = ({ src, alt, url }: IPrevPortfolio) => {
  const [hovered, setHovered] = useState<boolean>(false);

  return (
    <Link
      href={url}
      className="relative flex items-center justify-center shadow-md shadow-sky-400 cursor-pointer"
      target="_blank"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {hovered && <div className="absolute z-30">{alt}</div>}
      <Image
        className="hover:blur-sm hover:ease-in-out"
        src={`/images/${src}`}
        alt={alt}
        height={imgSize}
        width={imgSize}
        unoptimized
      />
    </Link>
  );
};

const ClosePortalButton = ({ closePortal }: { closePortal: () => void }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.button
      className="absolute right-20 top-16"
      onClick={closePortal}
      whileHover={{ scale: 1.1, color: "black" }}
    >
      <div className="relative flex align-middle justify-center">
        {isHovered && (
          <motion.div
            className="absolute -top-6 bg-gray-300 rounded-full h-20 w-20 -z-10"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
          />
        )}

        <motion.div
          className="absolute z-10"
          whileHover={{ scale: 1.1, color: "black" }}
          whileTap={{ scale: 0.9 }}
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          onHoverStart={() => setIsHovered(true)}
          onHoverEnd={() => setIsHovered(false)}
        >
          <MdOutlineClose size={30} />
        </motion.div>
      </div>
    </motion.button>
  );
};

export default function PortalModal({ isOpen = false, closePortal }: Props) {
  if (isOpen)
    return (
      <>
        <Overlay />
        <div className="GlowingCircleWrapper fixed flex items-center justify-center h-lvh w-lvw z-50 ">
          <ClosePortalButton closePortal={closePortal} />
          <motion.div
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -10, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <div className="relative">
              <div style={{ perspective: "140px" }}>
                <div style={{ transform: "rotateX(20deg)" }}>
                  <Heading className="text-center" type="h1">
                    Check other portfolios
                  </Heading>
                  <ul className="flex gap-2 mt-4">
                    {Portfolios.map((portfolio) => {
                      return (
                        <li key={portfolio.id}>
                          <PrevPortfolio
                            src={portfolio.src}
                            alt={portfolio.title}
                            url={portfolio.url}
                          />
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
              {/* <ThumbsUpButton onClosePortal={closePortal} /> */}
            </div>
          </motion.div>
        </div>
      </>
    );
}
