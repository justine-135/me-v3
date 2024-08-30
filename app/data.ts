import { SectionDetailArrList } from "./lib/types/infoList";

export const Works: SectionDetailArrList[] = [
  {
    title: "ReactJS Developer",
    year: "Present",
    detail: [
      {
        type: 1,
        text: "<i>Still working</i>",
      },
    ],
  },
  {
    title: "Internship",
    year: "2023",
    detail: [
      {
        type: 1,
        text: "As part of my practical experience, I undertook an internship for the fulfillment of the final requirement of my course as a <u>computer engineer technologist</u> at a local elementaryschool. During this internship, I played a key role in developing a web application called &quot;Student record system&quot; for the school.",
      },
      {
        type: 2,
        text: "Involved in doing research, and interviews with teachers and staffs to determine what problem to solve",
      },
      {
        type: 2,
        text: "Was assigned as a lead developer, responsible for developing the functionalities of the system",
      },
      {
        type: 2,
        text: "Successfully demonstrated the system to several teachers, receiving positive feedback and validation of its effectiveness",
      },
      {
        type: 1,
        text: "I gained extensive knowledge and hands-on experience in building the system. My technical skill set includes implementing server-side logic using PHP and integrating with database using MySQL. For the frontend, we ensure user experience using Bootstrap for responsiveness.",
      },
      {
        type: 1,
        text: "Aside from being a developer, we also served as a technician in the school.",
      },
      {
        type: 2,
        text: "Fixed not working CCTV&apos;s installed in various rooms, repaired some of computers, laptops, printers, and other computer hardwares.",
      },
      {
        type: 2,
        text: "Students was able to use multiple computers instead of sharing during their classes.",
      },
      {
        type: 2,
        text: "Gained a lot of positive comments from teachers, staffs, students, and earned recognition from our program&apos;s supervisor.",
      },
    ],
  },
  {
    title: "Freelancing",
    year: "2022",
    detail: [
      {
        type: 1,
        text: "Reached out to potential clients, primarily students, and even family relatives who needed help creating portfolio websites for their online resume. This experience allowed me to work on diverse projects, from designing and building personal portfolios to collaborating with other developers.",
      },
      {
        type: 1,
        text: "Freelancing not only helped me refine my skills but also provided valuable experience in managing projects and working with clients.",
      },
    ],
  },
];

export const Education: SectionDetailArrList[] = [
  {
    title:
      "Bachelor of Engineering Technology in Computer Engineering Technology",
    subtitle:
      "<a href='https://www.tupcavite.edu.ph/' target='_blank'><u>Technological University of the Philippines</u></a>",
    year: "2018-2023",
    detail: [
      {
        type: 1,
        text: "Before starting college, my primary focus was on hardware. I enjoyed delving into electronics, from crafting simple circuits with breadboards to advancing to more complex projects using basic hardware description languages and Arduino technology.",
      },
      {
        type: 1,
        text: "After a few years of college, I was introduced to web and mobile app development. What began as a simple curiosity quickly grew into a deep interest. I became excited about learning different programming languages, frameworks, and how web applications are built and work.",
      },
      {
        type: 1,
        text: "Some of the notable projects I contributed to:",
      },
      {
        type: 2,
        text: "<a href='https://github.com/justine-135/Tupc-Ecafeteria-Php-Ver' target='_blank'><u>TUPC E-cafeteria</u></a> - As part of my final project in the web application development program, our team designed a digital food ordering system for the TUPC campus canteen. This system utilized a touchscreen interface, allowing customers to easily select and place their orders.",
      },
      {
        type: 2,
        text: "<a href='https://github.com/justine-135/dadz-grill-thesis' target='_blank'><u>Dad'z grillhouse</u></a> - To complete the final requirement of my course, our team must find a solution to a particular institution or business. With our knowledge in digitizing a manual ordering system, we decided to enhance our previous system and apply it to a local <i>samgyupsal</i> restaurant.",
      },
      {
        type: 2,
        text: "<a href='https://github.com/justine-135/cpet17-finals' target='_blank'><u>Motion capture</u></a> - In one of our projects during the second web development program, we used Python libraries to capture and analyze motion detected by a live camera feed.",
      },
      {
        type: 2,
        text: "<a href='https://github.com/justine-135/School-record-management-system' target='_blank'><u>School record management system</u></a> - As interns at a local school, we developed a system for recording student information. This tool allows teachers to input and manage students' grades and scores, as well as enroll both new and returning students.",
      },
    ],
  },
  {
    title: "Science, Technology, Engineering, and Mathematics",
    subtitle:
      "<a href='https://perpetualdalta.edu.ph/molino-2/' target='_blank'><u>University of Perpetual Help System Dalta</u></a>",
    year: "2016-2018",
    detail: [
      {
        type: 1,
        text: "I chose this program because it closely aligns with my interest in technology. Additionally, it features my favorite subject, mathematics, which further motivated me to enroll. The combination of technology and mathematics in the curriculum made it an ideal fit for my academic and career goals.",
      },
      {
        type: 1,
        text: "Some of the important things I learned that helped me as a developer:",
      },
      {
        type: 2,
        text: "Discovered the World Wide Web (WWW) for the first time during a technology class. Gained an understanding of how the global network connects diverse websites and information. This experience deepened my interest in web technologies and their impact on modern communication.",
      },
      {
        type: 2,
        text: "Completed my first subject in creating a simple website. Initially learned how to program HTML, CSS, and slight Javascript, focusing only on the UI and less on logic. Created projects like simple blogs, and portfolio websites.",
      },
      {
        type: 2,
        text: "Gained experience in diagnosing and troubleshooting computer issues. Developed skills in identifying hardware and software problems, and implementing effective solutions. This hands-on experience enhanced my problem-solving abilities and technical knowledge.",
      },
    ],
  },
];

export const Projects = [
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

export const Socials = [
  {
    id: 1,
    title: "Github",
    url: "https://github.com/justine-135",
    username: "@justine-135",
  },
  {
    id: 2,
    title: "Gmail",
    url: "mailto:justineupano87@gmail.com",
    username: "justineupano87@gmail.com",
  },
  {
    id: 3,
    title: "LinkedIn",
    url: "mailto:justineupano87@gmail.com",
    username: "justineupano87@gmail.com",
  },
];

export const Routes = [
  {
    id: 1,
    date: "08/15/2024",
    title: "About me",
    path: "/about-me",
  },
  {
    id: 2,
    date: "08/15/2024",
    title: "Work experience so far",
    path: "/work-experience",
  },
  {
    id: 3,
    date: "08/15/2024",
    title: "Background education",
    path: "/background-education",
  },
];
