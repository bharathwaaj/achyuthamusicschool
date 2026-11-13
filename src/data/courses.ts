import { photoBrief } from './imagePrompts';
import type { whatsappMessages } from '../utils/whatsapp';

export interface Course {
  slug: 'vocal' | 'veena' | 'violin';
  /** The school's main class. Shown first and given more space. */
  primary?: boolean;
  name: string;
  href: string;
  /** One line for cards. */
  summary: string;
  /** Delivery options. Online is the school's preferred way to teach. */
  formats: string[];
  whatsapp: keyof typeof whatsappMessages;
  /** Prompt for the page's hero image, to be generated outside the site. */
  heroPrompt: string;
  page: CoursePageContent;
}

export interface CoursePageContent {
  /** SEO title and description. Keep distinct from the home page. */
  title: string;
  description: string;
  eyebrow: string;
  heading: string;
  lead: string;
  /** Short paragraphs under "About the class". */
  about: string[];
  learn: { title: string; text: string }[];
  /** Plain statements about how classes run. */
  howItWorks: string[];
  faqs: { question: string; answer: string }[];
}

export const courses: Course[] = [
  {
    slug: 'veena',
    primary: true,
    name: 'Veena',
    href: '/courses/veena/',
    summary: 'Our main class. Learn the classical veena with experienced teachers, online or in person.',
    formats: ['Online', 'In person in Kovaipudur'],
    whatsapp: 'veena',
    heroPrompt: photoBrief('A Saraswati veena resting on its stand in a quiet corner of a living room, with a student seated nearby about to begin practice.'),
    page: {
      title: 'Learn the Veena Online: Classes for Beginners',
      description:
        'Learn the veena online with personal lessons for children and adults. Beginners are welcome, and you can also join in person at our school in Kovaipudur.',
      eyebrow: 'Veena classes',
      heading: 'Learn the veena online',
      lead: 'The veena has a deep, warm sound that is loved across Carnatic music. Our veena classes are taught online, so you can learn from your own home.',
      about: [
        'The veena is one of the oldest instruments in Indian classical music. Many people are drawn to it for its calm, resonant tone.',
        'Our classes suit children and adults, first-time learners and those returning to music. We begin by talking about where you are now, and the lessons follow from there.',
      ],
      learn: [
        { title: 'Getting to know the instrument', text: 'How to sit, hold and tune the veena, and how to look after it.' },
        { title: 'Playing at your own pace', text: 'Lessons move forward when you are ready, so there is no hurry.' },
        { title: 'Carnatic music through the veena', text: 'You learn the music itself, not only the technique of the instrument.' },
      ],
      howItWorks: [
        'Online classes, so you can join from any city.',
        'In-person classes at our school in Kovaipudur, Coimbatore, for students who live nearby.',
        'Message us to talk about timings.',
      ],
      faqs: [
        { question: 'Can a complete beginner learn the veena?', answer: 'Yes. Many students begin with no earlier experience. We start from the basics and go at your pace.' },
        { question: 'Do I need to own a veena before I join?', answer: 'Message us before you buy one. We will be glad to guide you on choosing an instrument.' },
        { question: 'What age can children start?', answer: 'Please tell us your child\'s age when you message us, and we will suggest the right way to begin.' },
        { question: 'Can I learn the veena online?', answer: 'Yes. Online is how we prefer to teach, and students join from different cities.' },
      ],
    },
  },
  {
    slug: 'violin',
    name: 'Violin',
    href: '/courses/violin/',
    summary: 'Learn the violin in the Carnatic style, with personal attention and weekend sessions.',
    formats: ['Online', 'In person in Kovaipudur', 'Weekend sessions'],
    whatsapp: 'violin',
    heroPrompt: photoBrief('A teenage student practising the violin in the Carnatic style at home, seated on the floor, with a laptop in front showing the teacher.'),
    page: {
      title: 'Online Carnatic Violin Classes for Children and Adults',
      description:
        'Learn the violin in the Carnatic style online, with weekend sessions for busy weeks. For children and adults, beginners and experienced players alike.',
      eyebrow: 'Violin classes',
      heading: 'Online Carnatic violin classes',
      lead: 'Learn the violin as it is played in Carnatic music, from your own home. Weekend sessions make it easier to fit lessons into busy weeks.',
      about: [
        'The violin is played in a particular way in Carnatic music. It sits on the shoulder and the foot, and it follows the voice closely.',
        'Our violin classes are taught by Dr. Divya C.R., who performs and teaches both violin and vocal and has over twenty years of experience.',
      ],
      learn: [
        { title: 'Playing in the Carnatic style', text: 'The way of holding and playing the violin that Carnatic music asks for.' },
        { title: 'Lessons for your level', text: 'Beginners and experienced players learn side by side with the pace that suits each.' },
        { title: 'Music, not just notes', text: 'You learn songs and the feeling behind them.' },
      ],
      howItWorks: [
        'Online classes, so you can join from any city.',
        'Weekend sessions are available.',
        'In-person classes at our school in Kovaipudur, Coimbatore, for students who live nearby.',
      ],
      faqs: [
        { question: 'Is this Western or Carnatic violin?', answer: 'Our classes teach the violin in the Carnatic style.' },
        { question: 'Do you have weekend classes?', answer: 'Yes. Violin has weekend sessions. Message us for the current timings.' },
        { question: 'Can I learn the violin online?', answer: 'Yes. All our classes are available online.' },
        { question: 'Can adults learn the violin?', answer: 'Yes. We teach both children and adults.' },
      ],
    },
  },
  {
    slug: 'vocal',
    name: 'Carnatic Vocal',
    href: '/courses/vocal/',
    summary: 'Learn to sing Carnatic music, whether you are a child or an adult. Weekend sessions are available.',
    formats: ['Online', 'In person in Kovaipudur', 'Weekend sessions'],
    whatsapp: 'vocal',
    heroPrompt: photoBrief('A young student singing during an online lesson at home, a laptop in front of her and a tambura beside her.'),
    page: {
      title: 'Online Carnatic Vocal Classes for Children and Adults',
      description:
        'Learn Carnatic singing online, from sruti and basic exercises to compositions. Personal lessons for beginners and advanced students, with weekend sessions.',
      eyebrow: 'Carnatic vocal classes',
      heading: 'Online Carnatic vocal classes',
      lead: 'Learn to sing Carnatic music from your own home. Lessons are personal, for beginners and for those who want to go further, with weekend sessions.',
      about: [
        'Our vocal lessons are led by Dr. Divya C.R., a performer and teacher with over twenty years of experience in Carnatic music.',
        'Each student is taught at their own level and in their own way. Classes cover theory, vocal exercises and the practice of compositions.',
      ],
      learn: [
        { title: 'Pitch and sruti', text: 'Learning to hold your pitch against the sruti, the base note, which is the foundation of Carnatic singing.' },
        { title: 'Exercises to compositions', text: 'You begin with alankaras, the basic exercises, and move on to varnams and kritis, which are songs.' },
        { title: 'Ragas and talas', text: 'The melodic scales and the rhythmic cycles that shape every piece.' },
        { title: 'A repertoire of your own', text: 'Songs by composers such as Thyagaraja, Muthuswami Dikshitar and Shyama Shastri.' },
      ],
      howItWorks: [
        'Online classes, so you can join from any city.',
        'Weekend classes on Saturday and Sunday, in the morning (9:00 AM to 12:00 PM) or the evening (4:00 PM to 7:00 PM).',
        'One-on-one sessions are available for students who need more personal attention.',
        'In-person classes at our school in Kovaipudur, Coimbatore, for students who live nearby.',
      ],
      faqs: [
        { question: 'I have never sung Carnatic music. Can I join?', answer: 'Yes. Lessons are open to beginners as well as advanced learners.' },
        { question: 'When are the classes held?', answer: 'Weekend classes are held on Saturday and Sunday, in the morning and the evening. Message us to confirm the current timings.' },
        { question: 'Can adults join?', answer: 'Yes. We teach children and adults.' },
        { question: 'Can I learn Carnatic vocal online?', answer: 'Yes. Online classes are available.' },
      ],
    },
  },
];
