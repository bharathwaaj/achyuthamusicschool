/**
 * Site-wide facts. Change a value here and it updates everywhere.
 *
 * Values set to null are NOT known yet. Pages show a visible
 * "to be confirmed" note instead of inventing them. Fill them in
 * once the school confirms them.
 */
export const site = {
  name: 'Achyutha Music School',
  shortName: 'Achyutha',
  tagline: 'Carnatic vocal, violin and veena in Kovaipudur, Coimbatore',
  url: 'https://achyuthamusicschool.com',
  email: 'support@achyuthamusicschool.com',
  phone: '+919445913868',
  phoneDisplay: '+91 94459 13868',
  whatsappNumber: '919445913868',
  area: 'Kovaipudur',
  city: 'Coimbatore',
  state: 'Tamil Nadu',
  country: 'IN',

  /** TODO: confirm with the school before launch. */
  address: null as string | null,
  pincode: null as string | null,
  hours: null as string | null,
  mapsUrl: null as string | null,

  /** TODO: the live site links to Facebook, X and Instagram but the
   *  exact profile URLs were not available. */
  social: {
    facebook: null as string | null,
    instagram: null as string | null,
    x: null as string | null,
  },

  guru: 'Sri S.V. Achyutha Iyer',
} as const;

export type Site = typeof site;
