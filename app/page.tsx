import Card from "./components/card";
import { Timeline } from "./components/layout/timeline";
import Heading from "./components/typography/heading";
import Text from "./components/typography/text";
import { Dev, Projects, Socials, WorkExperience } from "./data";
import Image from "next/image";

export default function Home() {
  const { name, title, description } = Dev;

  return (
    <main className="MainWrapper flex justify-center w-full">
      <Image
        className="fixed bottom-10 right-20 hover:cursor-pointer"
        alt="black dog spinning Sticker by 157ofgemma"
        src="/images/giphy.webp"
        width={80}
        height={80}
      />
      <div className="Main flex flex-col gap-8 w-1/3 mt-24 mb-24">
        <div className="Profile">
          <Heading type="h1" bold>
            {name}
          </Heading>
          <Text>{title}</Text>
        </div>

        <Card title={<Heading bold>About</Heading>} body={description} />

        <Timeline
          title={<Heading bold>Work experience</Heading>}
          dataSource={WorkExperience}
        />
        <Timeline
          title={<Heading bold>Projects</Heading>}
          dataSource={Projects}
        />
        <Timeline title={<Heading bold>Links</Heading>} dataSource={Socials} />
      </div>
    </main>
  );
}
