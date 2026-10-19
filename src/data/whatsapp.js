// 09038085372 in international format: drop the leading 0 and add Nigeria's 234
export const WHATSAPP_NUMBER = "2349038085372";

export const whatsappLink = (message = "Hello Master B, I would like to book a consultation.") =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;