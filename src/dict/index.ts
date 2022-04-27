import wechat from '../assets/wechat.jpg';
import MIUI_125 from '../assets/miui12.5.png';
import MIUI_PLUS from '../assets/miuiplus.png';

export type item = {
  id: number;
  title: string;
  name: string;
  link: string;
};

export const items: item[] = [
  {
    id: 0,
    title: 'instagram',
    name: 'fab fa-instagram',
    link: 'https://www.instagram.com/cmchenming13/?hl=en',
  },
  {
    id: 1,
    title: 'linkedin',
    name: 'fab fa-linkedin',
    link: 'https://www.linkedin.com/in/ming-chen-aa7387182/',
  },
  {
    id: 2,
    title: 'wechat',
    name: 'fab fa-weixin',
    link: wechat,
  },
  {
    id: 3,
    title: 'github',
    name: 'fab fa-github',
    link: 'https://github.com/CMvvvt/',
  },
];

export type projectType = {
  id: string;
  title: string;
  src: string;
  url: string;
  description: string;
};

export const projectItems: projectType[] = [
  {
    id: '0',
    title: 'MIUI 12.5 (Now Updated as MIUI13)',
    src: MIUI_125,
    url: 'https://home.miui.com/',
    description:
      'This is the official website of the MIUI12.5. I was mainly responsible for the development of static resources for dynamic effects, tactile and functional parts, as well as the development of some video resources. At the same time, I am also responsible for the continuous maintenance of the project after its release on Dec. 28 2020.',
  },
  {
    id: '1',
    title: 'MIUI Plus',
    src: MIUI_PLUS,
    url: 'https://plus.miui.com/',
    description:
      'It is also my development work during my internship at Xiaomi. The project is developed in parallel with MIUI12.5. I am mainly responsible for the maintenance of the project after its release.',
  },
];
