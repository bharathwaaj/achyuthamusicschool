/**
 * Structured data (schema.org JSON-LD) shared across pages, so search
 * engines get one consistent description of the school.
 *
 * Only facts from src/config/site.ts are used. Opening hours, prices and
 * a service area are left out until the school confirms them.
 */
import { site } from '../config/site';
import { canonicalUrl } from './seo';

const context = 'https://schema.org';

/** Stable id other entries use to point at the school. */
export const schoolId = `${site.url}/#school`;
const websiteId = `${site.url}/#website`;

/** The school itself, as both an educational body and a local business. */
export function schoolSchema(description: string, imageUrl?: string) {
  return {
    '@context': context,
    '@type': ['EducationalOrganization', 'LocalBusiness'],
    '@id': schoolId,
    name: site.name,
    url: site.url,
    description,
    logo: canonicalUrl('/icon-512.png'),
    ...(imageUrl ? { image: imageUrl } : {}),
    telephone: site.phone,
    email: site.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: site.streetAddress,
      addressLocality: site.city,
      addressRegion: site.state,
      postalCode: site.pincode,
      addressCountry: site.country,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: site.geo.latitude,
      longitude: site.geo.longitude,
    },
    hasMap: site.mapsUrl,
    knowsAbout: ['Veena', 'Carnatic violin', 'Carnatic vocal'],
  };
}

/** The website, linked to the school that publishes it. */
export function websiteSchema() {
  return {
    '@context': context,
    '@type': 'WebSite',
    '@id': websiteId,
    name: site.name,
    url: site.url,
    inLanguage: 'en',
    publisher: { '@id': schoolId },
  };
}

/** Breadcrumb trail from the home page to the current page. */
export function breadcrumbSchema(trail: { name: string; path: string }[]) {
  const items = [{ name: 'Home', path: '/' }, ...trail];
  return {
    '@context': context,
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: canonicalUrl(item.path),
    })),
  };
}

/** Questions and answers shown on the page. */
export function faqSchema(faqs: { question: string; answer: string }[]) {
  return {
    '@context': context,
    '@type': 'FAQPage',
    mainEntity: faqs.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: { '@type': 'Answer', text: item.answer },
    })),
  };
}

/** A class, taught online and in person by the school. */
export function courseSchema(name: string, description: string, path: string) {
  return {
    '@context': context,
    '@type': 'Course',
    name,
    description,
    url: canonicalUrl(path),
    inLanguage: 'en',
    provider: { '@id': schoolId, '@type': 'EducationalOrganization', name: site.name, url: site.url },
    hasCourseInstance: [
      { '@type': 'CourseInstance', courseMode: 'online' },
      {
        '@type': 'CourseInstance',
        courseMode: 'onsite',
        location: {
          '@type': 'Place',
          name: site.name,
          address: site.address,
        },
      },
    ],
  };
}

/** A typed page, such as AboutPage or ContactPage, about the school. */
export function pageSchema(type: string, name: string, path: string, description: string) {
  return {
    '@context': context,
    '@type': type,
    name,
    description,
    url: canonicalUrl(path),
    isPartOf: { '@id': websiteId },
    about: { '@id': schoolId },
  };
}

/** A teacher at the school. */
export function teacherSchema(name: string, description: string, knowsAbout: string[] = []) {
  return {
    '@context': context,
    '@type': 'Person',
    name,
    description,
    jobTitle: 'Teacher',
    worksFor: { '@id': schoolId },
    ...(knowsAbout.length ? { knowsAbout } : {}),
  };
}

/** A YouTube video from the school's channel, shown in the gallery. */
export function videoSchema(id: string, name: string, uploadDate: string) {
  return {
    '@context': context,
    '@type': 'VideoObject',
    name,
    description: `${name}. A video from ${site.name}.`,
    thumbnailUrl: `https://i.ytimg.com/vi/${id}/hqdefault.jpg`,
    uploadDate,
    embedUrl: `https://www.youtube-nocookie.com/embed/${id}`,
    url: `https://www.youtube.com/watch?v=${id}`,
    publisher: { '@id': schoolId },
  };
}
