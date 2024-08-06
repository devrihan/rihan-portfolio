import { Skill } from '@/types/skill';
import {
  CodeIcon,
  DatabaseIcon,
  LayoutIcon,
  SmartphoneIcon
} from 'lucide-react';

const trimLen: number = -1; // 0 is accordion only, -1 is does not restrict the length

const skills: Skill[] = [
  {
    name: 'Web Development',
    Icon: CodeIcon,
    description: `Web Development involves creating websites and web applications that are both visually appealing and highly functional. It encompasses a variety of technologies, frameworks, and best practices to ensure a seamless user experience and efficient performance.`
  },
  {   
    name: 'AI/ML Engineering',
    Icon: LayoutIcon,
    description: `AI/ML Engineering involves developing and deploying machine learning models and artificial intelligence systems. This skill covers a range of technologies, frameworks, and best practices to create intelligent solutions that can learn and adapt from data.`
  },
  {
    name: 'Database Management',
    Icon: DatabaseIcon,
    description: `Database Management involves efficiently storing and organizing data. This skill covers a range of technologies, frameworks, and best practices to ensure data integrity, security, and performance.`
  },
  {
    name: 'Data Analytics',
    Icon: SmartphoneIcon,
    description: `Data Analytics focuses on extracting, analyzing, and interpreting data to support decision-making and strategic planning. This skill includes a variety of technologies, frameworks, and best practices to uncover insights and trends from complex datasets.`
  }
];

export { trimLen, skills };
