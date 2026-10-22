// ---- Función para crear URLs limpias ----
export const limpiarParaUrl = (texto: string) => {
    return texto.toLowerCase()
        .normalize("NFD").replace(/[̀-ͯ]/g, "") // Quita acentos
        .replace(/[^a-z0-9]+/g, '-') // Cambia espacios por guiones
        .replace(/(^-|-$)+/g, ''); // Quita guiones de los bordes
};

// --- Ruta de la landing de una zona o barrio (ej: /cerrajero-zona-banfield/) ---
export const urlZona = (nombre: string) => `/cerrajero-zona-${limpiarParaUrl(nombre)}/`;
