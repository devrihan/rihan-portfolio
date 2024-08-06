import { Project } from '@/types/project';

const projects: Project[] = [
  {
    name: 'Personal Portfolio Website',
    slug: 'portfolio',
    description:
      'A personal portfolio to showcase my coding projects, resume, and skills.',
    thumbnail: '/images/projects/portfolio/cover.jpg'
  },
  {
    name: 'ECOR-CMS',
    slug: 'ecor_cms',
    description:
      'A Complaint Management System for the East Coast Railway Department, facilitating efficient handling and resolution of complaints.',
    thumbnail: '/images/projects/ecor_cms/cover.png'
  },
  {
    name: 'PositiVITi',
    slug: 'positiVITi',
    description:
      'An anonymous counseling chat application designed for introverted students seeking counseling services without revealing their identity.',
    thumbnail: '/images/projects/positiVITi/cover.png'
  },
  {
    name: 'Driver Drowsiness Detection',
    slug: 'driver_drowsiness_detection',
    description:
      'A computer vision application using Python and OpenCV to detect driver drowsiness by analyzing facial landmarks and blinking patterns in real-time.',
    thumbnail: '/images/projects/driver_drowsiness_detection/cover.png'
  },
  {
    name: 'OdiaLang',
    slug: 'odialang',
    description:
      'The Custom Coding Language project is an endeavor to create a simple programming language along with tools for lexing and compiling code. ',
    thumbnail: '/images/projects/odialang/cover.jpg'
  }
];

export { projects };
