"use client";
import React from "react";
import Heading from "../typography/heading";
import Text from "../typography/text";

export default function Header() {
  return (
    <header className="LayoutHeading space-y-6">
      <div>
        <Heading type="h1" bold>
          Justine Upano
        </Heading>
        <Text type="tag">Software Developer</Text>
      </div>
    </header>
  );
}
