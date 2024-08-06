import { Hero } from '@/types/hero';
import { metadata as meta } from '@/app/config';

const hero: Hero = {
  name: meta.author.name,
  label: meta.author.label,
  description: 'My interests lie in web development, artificial intelligence, and data analytics. I enjoy creating innovative solutions that improve user experiences and streamline complex processes.'
};

export { hero };
