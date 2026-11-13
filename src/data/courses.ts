import type { whatsappMessages } from '../utils/whatsapp';

export interface Course {
  slug: 'vocal' | 'veena' | 'violin';
  name: string;
  href: string;
  /** One line for cards. */
  summary: string;
  /** Delivery options. Online is the school's preferred way to teach. */
  formats: string[];
  whatsapp: keyof typeof whatsappMessages;
  /** Prompt for the page's hero image, to be generated outside the site. */
  heroPrompt: string;
}

const palette =
  'warm sandal-orange and charcoal colour palette on an ivory background, soft lamp light, calm and respectful mood, no text, no logos';

export const courses: Course[] = [
  {
    slug: 'vocal',
    name: 'Carnatic Vocal',
    href: '/courses/vocal/',
    summary: 'Carnatic vocal lessons for children and adults, online or in person, with weekend sessions available.',
    formats: ['Online', 'In person in Kovaipudur', 'Weekend sessions'],
    whatsapp: 'vocal',
    heroPrompt: `A young student singing Carnatic music while her teacher keeps tala with her hand, seated on a mat in a bright south Indian home, a brass lamp nearby, ${palette}, illustrated editorial style, 16:9`,
  },
  {
    slug: 'veena',
    name: 'Veena',
    href: '/courses/veena/',
    summary: 'Learn the classical veena from experienced teachers, online or in person.',
    formats: ['Online', 'In person in Kovaipudur'],
    whatsapp: 'veena',
    heroPrompt: `A Saraswati veena resting on a wooden stand beside a brass lamp and fresh jasmine, a student's hands about to play, ${palette}, illustrated editorial style, 16:9`,
  },
  {
    slug: 'violin',
    name: 'Violin',
    href: '/courses/violin/',
    summary: 'Personal instruction on the violin in the Carnatic style, online or in person, with weekend sessions available.',
    formats: ['Online', 'In person in Kovaipudur', 'Weekend sessions'],
    whatsapp: 'violin',
    heroPrompt: `A student playing a violin in Carnatic style, seated cross-legged on a mat with the instrument resting on the shoulder and foot, a teacher beside them, ${palette}, illustrated editorial style, 16:9`,
  },
];
