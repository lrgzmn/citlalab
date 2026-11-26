/* Juegos de Biología.
   "plato": clasificar alimentos en los tres grupos del Plato del Bien Comer (Ficha 10) y revisar menús.
   "neurona": identificar las partes de la neurona, llevar el impulso y ordenar la sinapsis (Ficha 1).
   Cada alimento: n = nombre, g = grupo (vf = verduras y frutas, ce = cereales, la = leguminosas y alimentos de origen animal, fu = de vez en cuando). */
REPASO.juego({
  materia: 'biologia', tipo: 'plato', titulo: 'Plato del Bien Comer',
  alimentos: [
    { n: 'Jitomate', g: 'vf' }, { n: 'Nopal', g: 'vf' }, { n: 'Zanahoria', g: 'vf' }, { n: 'Naranja', g: 'vf' },
    { n: 'Papaya', g: 'vf' }, { n: 'Espinaca', g: 'vf' }, { n: 'Plátano', g: 'vf' }, { n: 'Guayaba', g: 'vf' },
    { n: 'Calabacita', g: 'vf' }, { n: 'Manzana', g: 'vf' },
    { n: 'Tortilla de maíz', g: 'ce' }, { n: 'Arroz', g: 'ce' }, { n: 'Avena', g: 'ce' },
    { n: 'Pan integral', g: 'ce' }, { n: 'Pasta', g: 'ce' }, { n: 'Amaranto', g: 'ce' },
    { n: 'Frijoles', g: 'la' }, { n: 'Lentejas', g: 'la' }, { n: 'Garbanzos', g: 'la' }, { n: 'Huevo', g: 'la' },
    { n: 'Pollo', g: 'la' }, { n: 'Pescado', g: 'la' }, { n: 'Leche', g: 'la' }, { n: 'Queso', g: 'la' }, { n: 'Yogur natural', g: 'la' },
    { n: 'Refresco', g: 'fu' }, { n: 'Papas fritas', g: 'fu' }, { n: 'Helado', g: 'fu' },
    { n: 'Pan dulce', g: 'fu' }, { n: 'Dulces', g: 'fu' }, { n: 'Galletas con crema', g: 'fu' }
  ],
  /* cada menú son alimentos de la lista de arriba; el juego calcula solo qué grupo falta */
  menus: [
    { t: 'Desayuno', a: ['Huevo', 'Tortilla de maíz', 'Frijoles'] },
    { t: 'Comida', a: ['Arroz', 'Pollo', 'Jitomate'] },
    { t: 'Cena', a: ['Nopal', 'Queso', 'Naranja'] },
    { t: 'Colación', a: ['Avena', 'Leche'] },
    { t: 'Comida', a: ['Lentejas', 'Pan integral', 'Zanahoria'] },
    { t: 'Cena', a: ['Papaya', 'Guayaba', 'Plátano'] }
  ]
});

REPASO.juego({
  materia: 'biologia', tipo: 'neurona', titulo: 'Neurona y sinapsis'
});
