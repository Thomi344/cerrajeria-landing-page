// ---- Datos de contacto centralizados (se configuran en el archivo .env) ----
import { PUBLIC_TELEPHONE, PUBLIC_TELEPHONE_DISPLAY } from 'astro:env/client';

export const TELEFONO = PUBLIC_TELEPHONE;
export const TELEFONO_WHATSAPP = TELEFONO.replace(/\D/g, '');
export const TELEFONO_VISIBLE = PUBLIC_TELEPHONE_DISPLAY;

// --- Arma el link de WhatsApp con el mensaje dinámico del barrio ---
export const crearUrlWhatsapp = (nombreZona = "CABA y GBA") => {
    const mensaje = `Hola, entré a la web y necesito un cerrajero en ${nombreZona}`;
    return `https://wa.me/${TELEFONO_WHATSAPP}?text=${encodeURIComponent(mensaje)}`;
};
