export type SlideId = 'hero' | 'about' | 'projects' | 'blog' | 'contact';

export interface SlideConfig {
  id: SlideId;
  label: string;
  hash: string;
}

export const SLIDES: SlideConfig[] = [
  { id: 'hero', label: 'Home', hash: '#hero' },
  { id: 'about', label: 'About', hash: '#about' },
  { id: 'projects', label: 'Projects', hash: '#projects' },
  { id: 'blog', label: 'Blog', hash: '#blog' },
  { id: 'contact', label: 'Contact', hash: '#contact' },
];

export type SlideBackground = 'default' | 'secondary' | 'pattern';
