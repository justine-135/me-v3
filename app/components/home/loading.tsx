import React from "react";
import Text from "../typography/text";

export default function Loading() {
  return (
    <main className="MainWrapper flex justify-center h-[100vh]">
      <div className="Main flex gap-2 items-center justify-center w-1/3">
        <Text>Let me fetch the data..</Text>
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-sky-600"></span>
        </span>
      </div>
    </main>
  );
}
