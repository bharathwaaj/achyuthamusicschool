export interface NavLink {
  href: string;
  label: string;
}

export const navLinks: NavLink[] = [
  { href: '/about/', label: 'About' },
  { href: '/courses/', label: 'Courses' },
  { href: '/team/', label: 'Teachers' },
  { href: '/gallery/', label: 'Gallery' },
  { href: '/fees-enrollment/', label: 'Fees' },
  { href: '/contact/', label: 'Contact' },
];

export const courseLinks: NavLink[] = [
  { href: '/courses/veena/', label: 'Veena' },
  { href: '/courses/violin/', label: 'Violin' },
  { href: '/courses/vocal/', label: 'Carnatic Vocal' },
];

/** Footer shows the main links plus the class rooms page. */
export const footerLinks: NavLink[] = [
  ...navLinks,
  { href: '/class-rooms/', label: 'Class rooms' },
];
