/* Juegos de Química.
   "separar": elegir el método de separación de mezclas adecuado (Ficha 7).
   "disolucion": preparar una disolución con un porcentaje dado (Ficha 8).
   Separar: vis = dibujo (tamiz, imán, filtro, capas, soluble, tinta, tubo, yodo), ok = método correcto, no = distractores, e = por qué.
   Disolución: modo "m" = porcentaje en masa (g), "v" = porcentaje en volumen (mL); total = disolución que se prepara; pct = porcentaje. */
REPASO.juego({
  materia: 'quimica', tipo: 'separar', titulo: 'Separar la mezcla',
  mezclas: [
    { vis: 'tamiz', t: 'Arena y grava', ok: 'Tamizado', no: ['Imantación', 'Destilación', 'Cromatografía'], e: 'El tamizado separa por el tamaño de las partículas: la arena pasa por la malla y la grava queda arriba.' },
    { vis: 'iman', t: 'Clips de acero y sal', ok: 'Imantación', no: ['Tamizado', 'Decantación', 'Destilación'], e: 'Los clips son de material ferromagnético: un imán los atrae y la sal se queda.' },
    { vis: 'filtro', t: 'Agua de jamaica con las flores adentro', ok: 'Filtración', no: ['Imantación', 'Destilación', 'Cromatografía'], e: 'Un colador retiene las flores (sólido) y deja pasar el líquido.' },
    { vis: 'capas', t: 'Agua y aceite', ok: 'Decantación', no: ['Tamizado', 'Imantación', 'Cromatografía'], e: 'Son líquidos que no se mezclan y tienen distinta densidad: el aceite, menos denso, queda arriba y se separa con un embudo.' },
    { vis: 'alcohol', t: 'Agua y alcohol', ok: 'Destilación', no: ['Decantación', 'Filtración', 'Tamizado'], e: 'Son líquidos solubles entre sí con distinta temperatura de ebullición: el alcohol hierve primero y se recupera enfriando el vapor.' },
    { vis: 'sal', t: 'Agua de mar (agua con sal)', ok: 'Evaporación y cristalización', no: ['Imantación', 'Tamizado', 'Decantación'], e: 'Al evaporarse el agua, la sal se acumula y cristaliza.' },
    { vis: 'tinta', t: 'Los pigmentos de un colorante', ok: 'Cromatografía', no: ['Tamizado', 'Imantación', 'Decantación'], e: 'El agua sube por el papel y arrastra los pigmentos a distintas distancias: se ve una banda de color por cada pigmento.' },
    { vis: 'tubo', t: 'Plasma y células de la sangre', ok: 'Centrifugación', no: ['Tamizado', 'Imantación', 'Cromatografía'], e: 'Un giro rápido manda al fondo los componentes más densos y el plasma queda arriba.' },
    { vis: 'yodo', t: 'Yodo sólido y arena', ok: 'Sublimación', no: ['Decantación', 'Filtración', 'Cromatografía'], e: 'Al calentar, el yodo pasa de sólido a gas sin volverse líquido y así se separa de la arena.' }
  ]
});

REPASO.juego({
  materia: 'quimica', tipo: 'disolucion', titulo: 'Preparar la disolución',
  retos: [
    { modo: 'm', sust: 'sal', total: 200, pct: 5 },
    { modo: 'm', sust: 'azúcar', total: 250, pct: 4 },
    { modo: 'm', sust: 'sal', total: 500, pct: 10 },
    { modo: 'v', sust: 'agua oxigenada (H₂O₂)', total: 250, pct: 3 },
    { modo: 'v', sust: 'alcohol etílico', total: 500, pct: 70 }
  ]
});
