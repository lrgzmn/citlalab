/* Juego "Armar el átomo" de Física.
   Cada elemento: nombre, símbolo, Z = número atómico (protones), A = masa atómica.
   Para agregar otro, copia una línea y cambia los números. */
REPASO.juego({
  materia: 'fisica', tipo: 'armar', titulo: 'Armar el átomo',
  elementos: [
    { n: 'Hidrógeno', s: 'H', Z: 1, A: 1 },
    { n: 'Helio', s: 'He', Z: 2, A: 4 },
    { n: 'Litio', s: 'Li', Z: 3, A: 7 },
    { n: 'Berilio', s: 'Be', Z: 4, A: 9 },
    { n: 'Boro', s: 'B', Z: 5, A: 11 },
    { n: 'Carbono', s: 'C', Z: 6, A: 12 },
    { n: 'Nitrógeno', s: 'N', Z: 7, A: 14 },
    { n: 'Oxígeno', s: 'O', Z: 8, A: 16 },
    { n: 'Flúor', s: 'F', Z: 9, A: 19 },
    { n: 'Neón', s: 'Ne', Z: 10, A: 20 }
  ]
});
/* Juegos propios de Física (la lógica está en js/juegos3.js; las preguntas se generan solas) */
REPASO.juego({ materia: 'fisica', tipo: 'conv', titulo: 'Convierte la unidad' });
REPASO.juego({ materia: 'fisica', tipo: 'estados', titulo: 'Cambios de estado' });
REPASO.juego({ materia: 'fisica', tipo: 'linea', titulo: 'Línea del tiempo del átomo' });
