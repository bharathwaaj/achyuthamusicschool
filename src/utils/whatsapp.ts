import { site } from '../config/site';

/**
 * Build a wa.me link with a pre-filled message.
 * WhatsApp is the school's main way of taking enquiries.
 */
export function whatsappLink(message: string): string {
  return `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export const whatsappMessages = {
  general: 'Hello, I would like to know more about classes at Achyutha Music School.',
  vocal: 'Hello, I would like to enquire about Carnatic vocal classes.',
  veena: 'Hello, I would like to enquire about veena classes.',
  violin: 'Hello, I would like to enquire about violin classes.',
  fees: 'Hello, could you share the fee details for classes?',
} as const;
