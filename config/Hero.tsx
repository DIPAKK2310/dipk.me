import Github from "@/components/svgs/Github";
import LinkedIn from "@/components/svgs/LinkedIn";
import Mail from "@/components/svgs/Mail";
import X from "@/components/svgs/X";
import JavaScript from "@/components/technologies/JavaScript"
import TypeScript from  "@/components/technologies/TypeScript"
import ReactIcon from "@/components/technologies/ReactIcon"
import  NextJs from "@/components/technologies/NextJs"
import  Bun from "@/components/technologies/Bun"
import  PostgreSQL from "@/components/technologies/PostgreSQL"
import  NodeJs from "@/components/technologies/NodeJs"
import  MongoDB from "@/components/technologies/MongoDB"
import  Prisma from "@/components/technologies/Prisma"

export const skillComponents = {
  TypeScript: TypeScript,
  ReactIcon: ReactIcon,
  NextJs: NextJs,
  Bun: Bun,
  PostgreSQL: PostgreSQL,
  NodeJs: NodeJs,
  MongoDB: MongoDB,
  Prisma: Prisma,
  JavaScript: JavaScript,
};

export const heroConfig = {
  // Personal Information
  name: 'Dip',
  title: 'A Full Stack developer.',
  avatar: '/assets/logo2.png',

  // Skills Configuration
  skills: [
    {
      name: 'Typescript',
      href: 'https://www.typescriptlang.org/',
      component: 'TypeScript',
    },
    {
      name: 'React',
      href: 'https://react.dev/',
      component: 'ReactIcon',
    },
    {
      name: 'Next.js',
      href: 'https://nextjs.org/',
      component: 'NextJs',
    },
    {
      name: 'Bun',
      href: 'https://bun.sh/',
      component: 'Bun',
    },
    {
      name: 'PostgreSQL',
      href: 'https://www.postgresql.org/',
      component: 'PostgreSQL',
    },
    {
      name: 'MongoDB',
      href: 'https://www.mongodb.com/',
      component: 'MongoDB',
    },
  ],
  // Description Configuration
  description: {
    template:
      'I build interactive web apps using {skills:0}, {skills:1}, {skills:2}, {skills:3} and {skills:4}. With a focus on <b>UI</b> design. Enthusiastic about <b>Three.js</b>, driven by a keen eye for design.',
  },

  // Buttons Configuration
  buttons: [
    {
      variant: 'outline',
      text: 'Resume / CV',
      href: '/resume',
      icon: 'CV',
    },
    {
      variant: 'default',
      text: 'Get in touch',
      href: '/contact',
      icon: 'Chat',
    },
  ],
};

  // Social Links Configuration
export const socialLinks = [
  {
    name: 'X',
    href: 'https://x.com/dipakkhare_23/',
    icon: <X />,
  },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/dipak-khare-159107212/',
    icon: <LinkedIn />,
  },
  {
    name: 'Github',
    href: 'https://github.com/DIPAKK2310/',
    icon: <Github />,
  },
  {
    name: 'Email',
    href: 'mailto:dipakkhare.dev@gmail.com',
    icon: <Mail />,
  },
];

















