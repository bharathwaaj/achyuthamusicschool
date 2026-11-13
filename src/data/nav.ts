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

/** Footer shows the same links as the header. */
export const footerLinks: NavLink[] = navLinks;
