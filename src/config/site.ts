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
  tagline: 'Online veena classes, with Carnatic violin and vocal',
  url: 'https://achyuthamusicschool.com',
  email: 'support@achyuthamusicschool.com',
  phone: '+919445913868',
  phoneDisplay: '+91 94459 13868',
  whatsappNumber: '918838291375',
  whatsappDisplay: '+91 88382 91375',
  area: 'Kovaipudur',
  city: 'Coimbatore',
  state: 'Tamil Nadu',
  country: 'IN',

  /** Street part of the address, for structured data. */
  streetAddress: 'A160, A-Block, Kovaipudur',
  /** Full address as shown on the page. */
  address: 'A160, A-Block, Kovaipudur, Coimbatore, Tamil Nadu 641042',
  /** Nearby landmark, to help visitors find the school. */
  landmark: 'Opposite Maruti Suzuki Driving School, Ambal Auto',
  pincode: '641042',
  geo: { latitude: 10.951735, longitude: 76.929608 },
  mapsUrl: 'https://maps.app.goo.gl/aWM32Pt3xq25fALr5',
  mapsEmbedUrl:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3917.1540233942283!2d76.92960861151718!3d10.951735589163006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba85bee79215551%3A0xb2e7cc0f171d23f5!2sMuthu%20Illam%2C%20160%2C%20opposite%20to%20Suzuki.Driving%20School%2C%20A-Block%2C%20Kovaipudur%2C%20Coimbatore%2C%20Tamil%20Nadu%20641042!5e0!3m2!1sen!2sin!4v1794592109980!5m2!1sen!2sin',

  /** TODO: confirm opening hours with the school. */
  hours: null as string | null,

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
