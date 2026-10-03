export const WHATSAPP_CONFIG = {
  rawNumber: "081130890808",
  formattedNumber: "0811-3089-0808",
  internationalNumber: "6281130890808",
  baseUrl: "https://wa.me/6281130890808",
  defaultMessage: "Halo Kak, saya tertarik dengan Grand Ameera. Mohon informasi lebih lanjut mengenai hunian yang tersedia.",
} as const;

/**
 * Generates an encoded WhatsApp chat URL
 */
export function getWhatsAppUrl(message?: string): string {
  const text = message || WHATSAPP_CONFIG.defaultMessage;
  return `https://wa.me/${WHATSAPP_CONFIG.internationalNumber}?text=${encodeURIComponent(text)}`;
}

/**
 * Generates contextual WhatsApp URL for specific property types
 */
export function getPropertyWhatsAppUrl(typeName: string): string {
  const message = `Halo Kak, saya tertarik dengan tipe ${typeName} di Grand Ameera. Mohon informasi lebih lanjut.`;
  return getWhatsAppUrl(message);
}

/**
 * Generates contextual WhatsApp URL for location inquiries
 */
export function getLocationWhatsAppUrl(): string {
  const message = "Halo Kak, saya ingin menanyakan rute dan jadwal survei lokasi Grand Ameera Madiun.";
  return getWhatsAppUrl(message);
}

/**
 * Generates contextual WhatsApp URL for consultation inquiries
 */
export function getConsultationWhatsAppUrl(topic?: string): string {
  const message = topic
    ? `Halo Kak, saya ingin konsultasi mengenai ${topic} di Grand Ameera Madiun.`
    : "Halo Kak, saya ingin konsultasi pemilihan hunian keluarga syariah di Grand Ameera Madiun.";
  return getWhatsAppUrl(message);
}
