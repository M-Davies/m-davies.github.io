import {
  AcademicCapIcon,
  MailIcon,
  MapIcon,
  OfficeBuildingIcon,
  SparklesIcon,
} from "@heroicons/react/outline";

import GithubIcon from "../components/Icon/GithubIcon";
import LinkedInIcon from "../components/Icon/LinkedInIcon";
import heroImage from "../images/header-background.jpg";
import armaApiImage from "../images/portfolio/armaApiImage.png";
import eyeOfHoursImage from "../images/portfolio/eyeOfHoursImage.png";
import oghmaImage from "../images/portfolio/oghmaImage.png";
import temurinBuildImage from "../images/portfolio/temurinBuildImage.png";
import profilepic from "../images/profilepic.jpg";
import testimonialImage from "../images/testimonial.webp";
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  TestimonialSection,
  //TimelineItem
} from "./dataDef";

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: "Morgan Davies",
  description: "Morgan Davies's Personal Website",
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: "hero",
  About: "about",
  Contact: "contact",
  Portfolio: "portfolio",
  Resume: "resume",
  Skills: "skills",
  Stats: "stats",
  Testimonials: "testimonials",
} as const;

export type SectionId = typeof SectionId[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `Morgan Davies`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        {" "}
        I'm a Manchester based{" "}
        <strong className="text-stone-100">Security Consultant</strong>{" "}
        currently conducting offensive security activities against client
        systems and building educational resources for newcomers to the
        industry. In my free time time, you can catch me training in the gym,
        strumming my electric guitar or travelling across various European
        cities.{" "}
      </p>
    </>
  ),
  actions: [
    {
      href: `#${SectionId.Contact}`,
      text: "Contact",
      primary: true,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: `Penetration tester and security consultant with 1.5 years in the security industry, focusing on advanced certifications, currently looking for offensive security roles within the Greater Manchester area. I'm well versed in web application assessments, Active Directory penetration along with Windows & UNIX reconnaissance, enumeration and exploitation. I have also employed common OSINT and social engineering strategies, including social media and repository enumeration for both client and personal work. To top it off, I have built up a strong foundation of soft skills, such as report writing and negotiation, from continuous client jobs.`,
  aboutItems: [
    {label: "Location", text: "Manchester, UK", Icon: MapIcon},
    {
      label: "Interests",
      text: "Computing, Music, Travelling",
      Icon: SparklesIcon,
    },
    {label: "Study", text: "BSC with Honours", Icon: AcademicCapIcon},
    {
      label: "Employment",
      text: "Information Assurance Firm",
      Icon: OfficeBuildingIcon,
    },
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: "Technical Skills",
    skills: [
      {
        name: "Web Application & Services Exploitation",
        level: 9,
      },
      {
        name: "Active Directory",
        level: 8,
      },
      {
        name: "UNIX & Windows Privilege Escalation",
        level: 8,
      },
      {
        name: "Programming",
        level: 7,
      },
      {
        name: "OSINT & Reconnaissance",
        level: 6,
      },
      {
        name: "Cloud Services",
        level: 5,
      },
    ],
  },
  {
    name: "Soft Skills",
    skills: [
      {
        name: "Written Communication",
        level: 10,
      },
      {
        name: "Fluency in English",
        level: 10,
      },
      {
        name: "Client Negotiation",
        level: 8,
      },
      {
        name: "LaTeX",
        level: 5,
      },
    ],
  },
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: "Eye of Horus",
    description: "A facial and gesture recognition authentication system",
    url: "https://github.com/M-Davies/eye-of-horus",
    image: eyeOfHoursImage,
  },
  {
    title: "Oghma",
    description: "Rules and references bot for discord d&d groups",
    url: "https://github.com/M-Davies/oghma",
    image: oghmaImage,
  },
  {
    title: "Arma API",
    description: "A Java SpringBoot API for modded Arma 3 classnames and data",
    url: "https://github.com/M-Davies/arma-api",
    image: armaApiImage,
  },
  {
    title: "Temurin Build",
    description: "Eclipse Temurin build scripts for OpenJDK binaries",
    url: "https://github.com/adoptium/temurin-build",
    image: temurinBuildImage,
  },
];

/**
 * Resume section
 */
/*
export const education: TimelineItem[] = [
  {
    date: '',
    location: '',
    title: '',
    content: <p></p>,
  },
  {
    date: '',
    location: '',
    title: '',
    content: <p></p>,
  },
];


export const experience: TimelineItem[] = [
  {
    date: '',
    location: '',
    title: '',
    content: (
      <p></p>
    ),
  },
  {
    date: '',
    location: '',
    title: '',
    content: (
      <p></p>
    ),
  },
];
*/

/**
 * Testimonial section
 */
export const testimonial: TestimonialSection = {
  imageSrc: testimonialImage,
  testimonials: [
    {
      name: "George Adams",
      text: "From day 1 Morgan demonstrated the ability to learn quickly and collaborate with hundreds of contributors all over the world. Because AdoptOpenJDK is a public (open-source) project, Morgan had to learn how to engage with developers, end-users and even C-Level execs and he did this with ease. Morgan tackles all challenges in a positive way and consistently exceeds expectations. I often give Morgan a task expecting it to take a week and find that he's completed it the next day. I would strongly recommend Morgan to any employer and he will be a great asset to any company.",
      image:
        "https://media.licdn.com/dms/image/C4E03AQEAaNEb13HBdg/profile-displayphoto-shrink_100_100/0/1532002790788?e=1683763200&v=beta&t=c2BxtUdu03JS-FmfWSfVswls5sPeGa9C7lLAFsb_JDQ",
    },
    {
      name: "Martijn Verburg",
      text: "Morgan has been a superb contributor to AdoptOpenJDK (now Eclipse Adoptium). His work has been critical in maintaining our build scripts and CI/CD pipelines so that we can release business-ready OpenJDK binaries to millions of users around the world (270M+ downloads). Morgan is a good communicator and takes great care in providing documentation and testing when delivering features. I'd highly recommend him to any software development team!",
      image:
        "https://media.licdn.com/dms/image/C4D03AQElhp_CzkOpNg/profile-displayphoto-shrink_100_100/0/1572966642068?e=1683763200&v=beta&t=r44b6ICq08XZWgOuxhgmpV2HHRO2D7QikAnDiIzDwvg",
    },
    {
      name: "Shelley Lambert",
      text: "Morgan is an exceptionally skilled colleague that I have had the pleasure to work with in the past year or two at the AdoptOpenJDK (now Eclipse Adoptium) open-source project. Over and above the technical skills he has brought to the project, and what makes his presence very valuable to the project is the thorough and diligent way he communicates, tests and shares his work. I am happy to give this recommendation to potential employers, and I hope I am able to continue to have a chance to work with Morgan in the future.",
      image:
        "https://media.licdn.com/dms/image/C4D03AQHFwVdTWSd7og/profile-displayphoto-shrink_100_100/0/1516280994584?e=1683763200&v=beta&t=IbssmRO2q6OeVEjf2cStTXPuyPzn-_9Eg_rzRGOeW0c",
    },
  ],
};

/**
 * Contact section
 */
export const contact: ContactSection = {
  headerText: "Get in touch",
  description:
    "Please see my methods of contact below. I endevour to get back to you ASAP, usually within 24 hours:",
  items: [
    {
      type: ContactType.Location,
      text: "Manchester, UK",
      href: "https://goo.gl/maps/F3rphNLX7kGoRNhN6",
    },
    {
      type: ContactType.Email,
      text: "morgandavies2020@gmail.com",
      href: "mailto:morgandavies2020@gmail.com",
    },
    {
      type: ContactType.LinkedIn,
      text: "Morgan Davies",
      href: "https://www.linkedin.com/in/mdavies12/",
    },
    {
      type: ContactType.Github,
      text: "M-Davies",
      href: "https://github.com/M-Davies",
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: "Email", Icon: MailIcon, href: "mailto:morgandavies2020@gmail.com"},
  {label: "Github", Icon: GithubIcon, href: "https://github.com/M-Davies"},
  {
    label: "LinkedIn",
    Icon: LinkedInIcon,
    href: "https://www.linkedin.com/in/mdavies12/",
  },
];
