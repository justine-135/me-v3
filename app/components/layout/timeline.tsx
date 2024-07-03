import { ITimelineData } from "@/app/types/data";
import Text from "../typography/text";
import Heading from "../typography/heading";
import Card from "../card";
import { ReactNode } from "react";
import Link from "next/link";
import { BsArrowRightShort } from "react-icons/bs";

interface ITimelineProps {
  title?: ReactNode;
  dataSource: ITimelineData[];
}

interface ITimelineLabelProps {
  timeFrom: string;
  timeTo?: string;
}

interface ITimelineItemTitleProps {
  title: string;
  url?: string;
  company?: string;
}

const TimelineLabel = ({ timeFrom, timeTo }: ITimelineLabelProps) => {
  if (!timeTo) return <Text>{timeFrom}</Text>;
  return (
    <Text>
      {timeFrom} - {timeTo}
    </Text>
  );
};

const TimelineItemTitle = ({
  title,
  url,
  company,
}: ITimelineItemTitleProps) => {
  if (url)
    return (
      <Link
        className="flex items-center gap-1 ml-1 hover:underline"
        href={url || ""}
        target="_blank"
      >
        {title} {company && `- ${company}`}{" "}
        <BsArrowRightShort className="-rotate-45" size={20} />
      </Link>
    );
  if (company)
    return (
      <>
        {title} - {company}
      </>
    );
  return title;
};

export const Timeline = ({ title, dataSource }: ITimelineProps) => {
  return (
    <div>
      {title}
      <ul className="TimelineContent flex flex-col gap-8 mt-8">
        {dataSource?.map((timeline) => {
          return (
            <li key={timeline.id}>
              <div className="flex">
                <div className="min-w-36">
                  <TimelineLabel
                    timeFrom={timeline.label1}
                    timeTo={timeline?.label2}
                  />
                </div>
                <div>
                  <Card
                    title={
                      <Heading className="flex">
                        <TimelineItemTitle
                          title={timeline.title}
                          url={timeline?.url}
                          company={timeline?.company}
                        />
                      </Heading>
                    }
                    body={timeline?.description}
                    icon={timeline?.image_url}
                  />
                  <ul className="Tags flex mt-2 flex-wrap list-disc">
                    {timeline?.tags?.map((tag, key) => {
                      return (
                        <li key={key} className="ml-4 mr-4">
                          <Text type="tag">{tag}</Text>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
