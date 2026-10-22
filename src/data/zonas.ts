// ---- Informacion de zonas y barrios ----

// src/data/zonas.ts

export interface Zona {
    nombre: string;
    region: string;
    barrios: string[];
}

export const zonas: Zona[] = [
    {
        nombre: 'Lomas de Zamora',
        region: 'Zona Sur',
        barrios: ['Las Lomitas', 'Banfield', 'Temperley', 'Turdera', 'Llavallol', 'Parque Barón']
    },
    {
        nombre: 'Ezeiza',
        region: 'Ezeiza y alrededores',
        barrios: ['Canning', 'Tristán Suárez', 'La Unión', 'Carlos Spegazzini', 'Aeropuerto']
    },
    {
        nombre: 'Palermo',
        region: 'Capital Federal',
        barrios: ['Palermo Soho', 'Palermo Hollywood', 'Las Cañitas', 'Barrio Norte']
    },
    {
        nombre: 'San Isidro',
        region: 'Zona Norte',
        barrios: ['Acassuso', 'Beccar', 'Boulogne', 'Martínez', 'Villa Adelina']
    },
    {
        nombre: 'Almirante Brown',
        region: 'Zona Sur',
        barrios: ['Adrogué', 'Burzaco', 'Claypole', 'Longchamps', 'Rafael Calzada', 'José Mármol']
    },
    {
        nombre: 'Quilmes',
        region: 'Zona Sur',
        barrios: ['Quilmes Centro', 'Bernal', 'Ezpeleta', 'San Francisco Solano', 'Don Bosco']
    },
    {
        nombre: 'Vicente López',
        region: 'Zona Norte',
        barrios: ['Olivos', 'Florida', 'La Lucila', 'Munro', 'Villa Martelli']
    },
    {
        nombre: 'Morón',
        region: 'Zona Oeste',
        barrios: ['Morón Centro', 'Castelar', 'Haedo', 'El Palomar', 'Villa Sarmiento']
    },
    {
        nombre: 'Caballito',
        region: 'Capital Federal',
        barrios: ['Primera Junta', 'Parque Rivadavia', 'Cid Campeador', 'Parque Centenario']
    },
    {
        nombre: 'La Plata',
        region: 'La Plata y Gran La Plata',
        barrios: ['City Bell', 'Gonnet', 'Villa Elisa', 'Tolosa', 'Los Hornos', 'Casco Urbano', 'Ringuelet', 'Villa Elvira']
    }
];
