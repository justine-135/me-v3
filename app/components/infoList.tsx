import React from "react";
import { InfoPanel } from "./infoPanel";
import { WorkListType } from "../lib/enums/data";
import Text from "./typography/text";
import { SectionDetailArrList } from "../lib/types/infoList";

interface Props {
  arr: SectionDetailArrList[];
}

export const InfoList = ({ arr }: Props) => {
  return (
    <ul className="space-y-6">
      {arr.map((item, key) => {
        return (
          <li key={key}>
            <InfoPanel
              title={item.title}
              subtitle={item.subtitle}
              subtitle2={item.year}
            >
              <ul className="Details space-y-2">
                {item.detail?.map((detail, key) => {
                  return (
                    <li
                      className={`${
                        detail?.type === WorkListType.LIST
                          ? "list-disc ml-5"
                          : ""
                      }`}
                      key={key}
                    >
                      <Text>{detail?.text}</Text>
                    </li>
                  );
                })}
              </ul>
            </InfoPanel>
          </li>
        );
      })}
    </ul>
  );
};
