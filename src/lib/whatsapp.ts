// Single source of truth for WhatsApp wiring across the site.
// TODO: replace placeholder with the real shop number once provided.
export const WHATSAPP_NUMBER = "51952331295"; // E.164, no + or spaces

export const SHOP_NAME = "Ferretería Rojas";
export const SHOP_LOCATION = "Cayma, Arequipa";
export const SHOP_ADDRESS = "Cayma, Arequipa, Perú";
export const SHOP_HOURS = {
  weekdays: "Lun – Sáb: 8:00 a.m. – 8:00 p.m.",
  sunday: "Domingo: 9:00 a.m. – 1:00 p.m.",
};
// Embedded Google Maps query for Cayma area
export const MAPS_EMBED_SRC =
  "https://www.google.com/maps?q=Ferreter%C3%ADa%20Cayma%20Arequipa&output=embed";
export const MAPS_DIRECTIONS_URL =
  "https://www.google.com/maps/search/?api=1&query=Ferreter%C3%ADa+Rojas+Cayma+Arequipa";

export function whatsappLink(message?: string): string {
  const base = `https://wa.me/${WHATSAPP_NUMBER}`;
  if (!message) return base;
  return `${base}?text=${encodeURIComponent(message)}`;
}
