/* Juego "Armar el átomo" de Física.
   Cada elemento: nombre, símbolo, Z = número atómico (protones), A = masa atómica.
   Para agregar otro, copia una línea y cambia los números. */
REPASO.juego({
  materia: 'fisica', tipo: 'armar', titulo: 'Armar el átomo',
  elementos: [
    { n: 'Helio', s: 'He', Z: 2, A: 4 },
    { n: 'Litio', s: 'Li', Z: 3, A: 7 },
    { n: 'Carbono', s: 'C', Z: 6, A: 12 }
  ]
});
