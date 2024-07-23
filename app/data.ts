import { IDevData, ITimelineData } from "./lib/types/data";

export const Dev: IDevData = {
  name: "Justine Upano",
  title: "Software Developer",
  description:
    "Hi, I'm Justine, software developer with a profound passion for creating user interfaces that are not only intuitive but also delightful to navigate. Over the past year, I've been working with ReactJS as a full-time developer.",
};

export const WorkExperience: ITimelineData[] = [
  {
    id: 1,
    label1: "2023",
    label2: "present",
    title: "ReactJS Developer",
    company: "Newstars Solutions Inc.",
    url: "https://newstarsinc.com/",
    description:
      "Part of a small team of developers, I built dynamic web components for user experience. Collaborated closely with a team of experienced reviewers to mentor and guide a new team member effectively.",
    tags: ["React/NextJS", "Typescript"],
  },
  {
    id: 2,
    label1: "2023",
    title: "Intern computer technologist",
    company: "Elementary school",
    description:
      "Led a team of interns to develop a student record management system.",
    tags: ["Bootstrap", "Javascript", "PHP", "MySQL"],
  },
];

export const Projects: ITimelineData[] = [
  {
    id: 1,
    label1: "2023",
    title: "Student Record System",
    description:
      "Platform designed to securely store, manage, and organize student-related information and data, including academic records, grades, and personal details.",
    tags: ["Bootstrap", "Javascript", "PHP", "MySQL"],
    image_url: "student_record_system.jpg",
    url: "https://github.com/justine-135/School-record-management-system",
  },
  {
    id: 2,
    label1: "2022",
    title: "Motion Capture",
    description:
      "The NextJS-based frontend offers a user-friendly interface for easy access and control of motion capture functionality, while the NodeJS backend manages data processing, storage, and communication with the Python-based camera module.",
    tags: ["NextJS", "Python", "NodeJS", "MySQL"],
    url: "https://github.com/justine-135/cpet17-finals",
  },
  {
    id: 3,
    label1: "2022",
    title: "Restaurant Ordering System",
    description:
      "With its user-friendly interface and efficient order management, the samgyupsal ordering system web app enhances customer satisfaction and helps restaurant owners optimize their operations for a smoother and more delightful dining experience.",
    tags: ["PHP", "Javascript", "CSS", "MySQL"],
    image_url: "restaurant_ordering_system.jpg",
    url: "https://github.com/justine-135/dadz-grill-thesis",
  },
];

export const Socials: ITimelineData[] = [
  {
    id: 1,
    label1: "Github",
    url: "https://github.com/justine-135",
    title: "justine-135",
  },
];

export const Portfolios = [
  {
    id: 1,
    title: "v1",
    src: "me-v2.png",
    url: "https://justine-135.github.io/me-v2/",
  },
  {
    id: 2,
    title: "v2",
    src: "me-v2.png",
    url: "https://justine-135.github.io/me-v2/",
  },
];
