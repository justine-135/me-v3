import React from "react";
import Image from "next/image";

interface Props {
  isOpen: boolean;
  closePortal: () => void;
}

const Overlay = () => {
  return <div className="Overlay fixed h-lvh w-lvw blur-lg opacity-50 z-40" />;
};

const ThumbsUpButton = ({ onClosePortal }: { onClosePortal: () => void }) => {
  return (
    <button
      className="absolute translate-x-56 translate-y-36"
      onClick={onClosePortal}
    >
      <Image
        alt="black dog thumbs up Sticker by 157ofgemma"
        src="/images/dog_thumbs_up.webp"
        unoptimized
        width={320}
        height={320}
      />
    </button>
  );
};

const PortalModal = () => {
  return (
    <div className="GlowingCircle bg-white h-[560px] w-[560px] rounded-full"></div>
  );
};

export default function GlowingCircle({ isOpen, closePortal }: Props) {
  if (isOpen)
    return (
      <div className="GlowingPortalWrapper">
        <Overlay />
        <div className="GlowingCircleWrapper fixed flex items-center justify-center h-lvh w-lvw z-50">
          <PortalModal />
          <ThumbsUpButton onClosePortal={closePortal} />
        </div>
      </div>
    );
}
