import React from "react";
import Heading from "../typography/heading";
import Text from "../typography/text";

export default function Loading() {
  return (
    <main className="MainWrapper relative flex justify-center w-full ">
      <div className="Main flex flex-col gap-8 w-1/3 mt-24 mb-24">
        <div className="Profile">
          <Heading type="h1" bold>
            Loading
          </Heading>
          <Text>Loading</Text>
        </div>
      </div>
    </main>
  );
}
