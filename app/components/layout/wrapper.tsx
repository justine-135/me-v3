import React, { ReactNode } from "react";

export default function Wrapper({ children }: { children: ReactNode }) {
  const commonRadialStyle =
    "fixed h-[800px] w-[800px] opacity-10 mix-blend-lighten blur-3xl rounded-full";
  return (
    <main className="MainWrapper min-h-screen flex items-start justify-center bg-gray-950">
      <div
        className={`${commonRadialStyle} bg-white  -bottom-80 left-0 animate-radialGradientMove`}
      />
      <div
        className={`${commonRadialStyle} bg-white  -top-80 right-0 animate-radialGradientMove2`}
      />

      <div className="Main w-4/5 md:w-2/5 my-12 md:my-20 max-w-[900px] opacity-90 bg-gray-900 p-10">
        {children}
      </div>
    </main>
  );
}
