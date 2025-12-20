import Appwrite from '@/components/technologies/Appwrite';
import BootStrap from '@/components/technologies/BootStrap';
import Bun from '@/components/technologies/Bun';
import ExpressJs from '@/components/technologies/ExpressJs';
import Github from '@/components/technologies/Github';
import JavaScript from '@/components/technologies/JavaScript';
import MDXIcon from '@/components/technologies/MDXIcon';
import MonacoEditorIcon from '@/components/technologies/Monaco';
import MongoDB from '@/components/technologies/MongoDB';
import Motion from '@/components/technologies/Motion';
import Netlify from '@/components/technologies/Netlify';
import NextJs from '@/components/technologies/NextJs';
import NodeJs from '@/components/technologies/NodeJs';
import PostgreSQL from '@/components/technologies/PostgreSQL';
import Postman from '@/components/technologies/Postman';
import Prisma from '@/components/technologies/Prisma';
import ReactIcon from '@/components/technologies/ReactIcon';
import ReactJs from '@/components/technologies/ReactJs';
import Sanity from '@/components/technologies/Sanity';
import Shadcn from '@/components/technologies/Shadcn';
import SocketIo from '@/components/technologies/SocketIo';
import TailwindCss from '@/components/technologies/TailwindCss';
import ThreeJs from '@/components/technologies/ThreeJs';
import TypeScript from '@/components/technologies/TypeScript';
import Vercel from '@/components/technologies/Vercel';
import { Project } from '@/types/project';

export const projects: Project[] = [
  {
    title: 'ShoppyNow',
    description:
      'A comprehensive e-commerce platform with product, cart, payment, and AI chatbot',
    image: '/project/shoppynow.png',
    video: '',
    link: '',
    technologies: [
      { name: 'JavaScript', icon: <JavaScript key="javascript" /> },
      { name: 'Express.js', icon: <ExpressJs key="expressjs" /> },
      { name: 'React', icon: <ReactIcon key="react" /> },
      { name: 'Node.js', icon: <NodeJs key="nodejs" /> },
      { name: 'MongoDB', icon: <MongoDB key="mongodb" /> },
      { name: 'Bootstrap', icon: <BootStrap key="bootstrap" /> },
      { name: 'Postman', icon: <Postman key="postman" /> },
      { name: 'MDX', icon: <MDXIcon key="mdx" /> },
    ],
    github: 'https://github.com/DIPAKK2310/ShoppYnow',
    live: '',
    details: true,
    projectDetailsPageSlug: '/projects/ShoppYnow',
    isWorking: false,
  },
    {
    title: 'Nike 2.O',
    description:
      '⚡A modern, responsive Nike Landing Page built using React + Vite + Tailwind CSS, animated with Framer Motion. Fully responsive, clean design, and mobile-first layout showcasing Nike products in a sleek UI.',
    image: '/project/nike.png',
    video: 'https://ik.imagekit.io/hokb3mrdr/quest.mp4',
    link: 'https://nike-landing-vert-nine.vercel.app',
    technologies: [
      { name: 'Ract.js', icon: <ReactJs key="reactjs" /> },
      { name: 'JavaScript', icon: <JavaScript key="javascript" /> },
      { name: 'Vercel', icon: <Vercel key="vercel" /> },
      { name: 'Tailwind CSS', icon: <TailwindCss key="tailwindcss" /> },
      { name: 'Framer Motion', icon: <Motion key="motion" /> },
      { name: 'Github', icon: <Github key="github" /> },
    ],
    github: 'https://github.com/DIPAKK2310/nike-2.0',
    live: 'https://nike-landing-vert-nine.vercel.app',
    details: true,
    projectDetailsPageSlug: '/projects/nike-2.0',
    isWorking: true,
  },
  {
    title: 'Prep_Now',
    description:
      'Model Context Protocol server for seamless Appwrite database operations with 7 powerful tools and 99.9% success rate',
    image: '/project/prep_now.png',
    video: '',
    link: '',
    technologies: [
      { name: 'TypeScript', icon: <TypeScript key="typescript" /> },
      { name: 'Bun', icon: <Bun key="bun" /> },
      { name: 'Vercel', icon: <Vercel key="vercel" /> },
      { name: 'Appwrite', icon: <Appwrite key="appwrite" /> },
    ],
    github: 'https://github.com/DIPAKK2310/Prep_Now',
    live: '',
    details: true,
    projectDetailsPageSlug: '/projects/prep_now',
    isWorking: false,
  },
  {
    title: 'Incode',
    description:
      'INCODE_IDE A full-stack, web-based IDE built with Next.js and Monaco Editor.',
    image: '/project/incode.png',
    video: '',
    link: '',
    technologies: [
      {name: "Next.js", icon: <NextJs key="nextjs" />},
      {name: 'Prisma', icon: <Prisma key="prisma" />},
      { name: 'React', icon: <ReactIcon key="react" /> },
      { name: 'Tailwind CSS', icon: <TailwindCss key="tailwindcss" /> },
      { name: 'shadcn/ui', icon: <Shadcn key="shadcn" /> },
      { name: 'Monaco Editor', icon: <MonacoEditorIcon key="monaco" /> },
    ],
    github: 'https://github.com/DIPAKK2310/Incode-ide',
    live: '',
    details: true,
    projectDetailsPageSlug: '/projects/incode-ide',
    isWorking: false,
  },
  {
    title: 'Lumina',
    description:
      'Lumina AI is an AI-powered SaaS platform built with Next.js and Cloudinary.',
    image: '/project/lumina.png',
    video: '',
    link: '',
    technologies: [
      { name: 'Next.js', icon: <NextJs key="nextjs" /> },
      { name: 'TypeScript', icon: <TypeScript key="typescript" /> },
      { name: 'Prisma', icon: <Prisma key="prisma" /> },
      { name: 'PostgreSQL', icon: <PostgreSQL key="postgresql" /> },
      { name: 'Tailwind CSS', icon: <TailwindCss key="tailwindcss" /> },
      { name: 'Socket.io', icon: <SocketIo key="socketio" /> },
    ],
    github: 'https://github.com/DIPAKK2310/lumina',
    live: '',
    details: true,
    projectDetailsPageSlug: '/projects/lumina',
    isWorking: false, // Currently in development
  },

  
];