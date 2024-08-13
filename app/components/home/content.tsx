import React from "react";
import { Dev } from "@/app/data";
import Heading from "../typography/heading";
import Card from "../card";
import { PortfolioSectionValue } from "@/app/lib/constants/data";
import { PortfolioSection } from "@/app/lib/enums/data";
import { Timeline } from "../layout/timeline";
import Text from "../typography/text";
import { PortfolioSections } from "@/app/lib/types/data";

const TimelineSections = ({ data }: { data?: PortfolioSections[] }) => {
  return (
    <div className="TimelineSections flex flex-col gap-6">
      {data
        ?.filter(
          (item) =>
            item.section !== PortfolioSectionValue[PortfolioSection.PORTFOLIOS]
        )
        ?.map((item, key) => {
          return (
            <section className="TimelineSection" key={key}>
              <Timeline
                title={<Heading className="capitalize">{item.section}</Heading>}
                dataSource={item.result}
              />
            </section>
          );
        })}
    </div>
  );
};

export default function Content({ data }: { data?: PortfolioSections[] }) {
  const { name, title, description } = Dev;

  return (
    <main className="MainWrapper relative flex justify-center w-full ease-in">
      <div className="Main flex flex-col gap-6 w-4/5 md:w-2/5 my-12 md:my-24">
        <div className="Profile">
          <Heading type="h1" bold>
            {name}
          </Heading>
          <Text>{title}</Text>
        </div>
        <Card title={<Heading>About</Heading>} body={description} />
        <TimelineSections data={data} />
      </div>
    </main>
  );
}
