import Angular from '@/components/technologies/AngularJs';
import AWS from '@/components/technologies/AWS';
import Azure from '@/components/technologies/Azure';
import BootStrap from '@/components/technologies/BootStrap';
import Bun from '@/components/technologies/Bun';
import CICD from '@/components/technologies/CI/CD';
import CSS from '@/components/technologies/CSS';
import ExpressJs from '@/components/technologies/ExpressJs';
import Figma from '@/components/technologies/Figma';
import Html from '@/components/technologies/Html';
import JavaScript from '@/components/technologies/JavaScript';
import MongoDB from '@/components/technologies/MongoDB';
import NestJs from '@/components/technologies/NestJs';
import NextJs from '@/components/technologies/NextJs';
import NodeJs from '@/components/technologies/NodeJs';
import PostgreSQL from '@/components/technologies/PostgreSQL';
import Postman from '@/components/technologies/Postman';
import Prisma from '@/components/technologies/Prisma';
import ReactIcon from '@/components/technologies/ReactIcon';
import TailwindCss from '@/components/technologies/TailwindCss';
import TypeScript from '@/components/technologies/TypeScript';
import Vercel from '@/components/technologies/Vercel';

export interface Technology {
  name: string;
  href: string;
  icon: React.ReactNode;
}

export interface Experience {
  company: string;
  position: string;
  location: string;
  image: string;
  description: string[];
  startDate: string;
  endDate: string;
  website: string;
  x?: string;
  linkedin?: string;
  github?: string;
  technologies: Technology[];
  isCurrent: boolean;
  isBlur?: boolean;
}

export const experiences: Experience[] = [
  {
    isCurrent: true,
    isBlur: false,
    company: 'Green Point Technology Services (I) Pvt. Ltd.',
    position: 'Frontend Developer Intern',
    location: 'Navi Mumbai, India',
    image: '/company/greenpointglobal.png',
    description:[
  'Designed and developed responsive frontend components using Angular and Tailwind CSS, contributing to the implementation of scalable and maintainable user interfaces.',
  'Collaborated with backend teams to integrate RESTful APIs, validating and testing endpoints using Postman to ensure accurate data flow and error handling.',
  'Assisted in deploying and managing frontend builds on Azure, gaining hands-on experience with cloud-based environments and deployment workflows.',
  'Improved user experience through consistent UI styling, performance optimizations, and adherence to modern frontend development best practices.',
],
    startDate: 'December 2025',
    endDate: 'Present',
    technologies: [
      {
        name: 'AngularJS',
        href: 'https://angular.io/',
        icon: <Angular />,
    },
    {
      name: 'TypeScript',
      href: 'https://typescriptlang.org/',
      icon: <TypeScript />,
    },
      {
        name: 'Tailwind CSS',
        href: 'https://tailwindcss.com/',
        icon: <TailwindCss />,
      },
     
      {
        name: 'Figma',
        href: 'https://figma.com/',
        icon: <Figma />,
      },
     
      {
        name: 'Azure',
        href: 'https://azure.microsoft.com/',
        icon: <Azure />,
      },
      {
        name: 'Postman',
        href: 'https://www.postman.com/',
        icon: <Postman />,
      },
      
      {
        name: 'CI/CD',
        href: 'https://www.postman.com/',
        icon: <CICD />,
      },
      
    ],
    website: '#',
    github: '#',
    x: '#',
  },
 
];