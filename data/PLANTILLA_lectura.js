/* PLANTILLA PARA UNA LECTURA CIENTÍFICA
   Una lectura es un texto muy corto: para empezar poco a poco y que nadie se desanime (60 a 90 palabras, de 5 a 6 oraciones) con 6 a 8 preguntas que practican comprensión lectora.
   1) Copia este archivo y ponle de nombre, por ejemplo:  data/biologia/ficha3_lecturas.js
   2) Cambia los datos de abajo. La lectura debe ir ligada a una ficha ya cargada (ficha) y a uno de sus temas (tema).
   3) Agrega UNA línea en data/lista.js con la ruta del archivo (después del archivo de su ficha).
   4) Sube los cambios y cambia el número de VERSION en sw.js. Revisa con  ?revisar=1  al final de la dirección.

   EL TEXTO
   Escríbelo con tus palabras (no copies párrafos del libro) y cuida que los datos coincidan con el libro y su fe de erratas.
   Cada ORACIÓN es un elemento de la lista. La primera es la número 0, la segunda la 1, y así sucesivamente.
   Si algún dato quieres que sea 100 % fiel al libro, ponlo en una oración propia para poder señalarla como prueba.

   LAS PREGUNTAS (una por línea; no olvides la coma al final de cada una)
     LO(habilidad, pregunta, [opciones], [oraciones-prueba], explicación)
         Opción múltiple. La PRIMERA opción es la correcta; la app las mezcla sola.
     LV(habilidad, afirmación, 'v' | 'f' | 'n', [oraciones-prueba], explicación)
         Verdadero, falso o "el texto no lo dice". 'v' verdadero, 'f' falso, 'n' el texto no lo dice.
         Para 'n' deja las oraciones-prueba vacías: [].
         Buen uso de 'n': una idea que es cierta en la materia pero que ESTE texto no menciona.
     LE(instrucción, [oraciones-prueba], explicación)
         El alumno toca en el texto la oración que prueba algo. Pon el número de la oración correcta.
     LS(instrucción, [pasos en el orden correcto], explicación)
         Ordenar un proceso o una secuencia (la app los revuelve).

   HABILIDADES para LO y LV:  'literal' (lo que dice el texto) · 'inferencia' (lo que se deduce)
                              · 'vocabulario' (una palabra según el contexto)
   LE cuenta como "evidencia" y LS como "secuencia" automáticamente.
   Procura mezclar al menos 3 habilidades distintas en cada lectura.

   Las oraciones-prueba se resaltan en el texto cuando el estudiante responde.

   EXPLÍCALO CON TUS PALABRAS (opcional, al final de la lectura)
   Agrega  explica: { q, modelo, claves }  junto a texto e items. El alumno escribe su explicación, ve la respuesta modelo y se
   autoevalúa con tu lista de ideas clave. La app sugiere qué ideas detectó buscando las palabras de "k" (sin importar acentos
   ni mayúsculas) y el estudiante decide. No da puntos, el estudiante tiene que escribirla él mismo (no se escucha ni se puede saltar) y lo que escribe no se guarda. "min" = cuántas palabras de "k" deben aparecer
   para marcar la idea como detectada (si lo omites, con una basta).

   ALTERNATIVA A ESCRIBIR (recomendada): agrega  falsas: ['idea que NO es cierta', 'otra idea falsa']  dentro de explica. Así el estudiante que lo prefiera
   (o que active "Elegir en vez de escribir" en Ajustes) toca las ideas que sí explican la respuesta, entre las de "claves" y estas falsas.
   Escribe 2 falsas que sean errores típicos de los estudiantes, redactadas como las ideas de "claves". Si no las pones, solo se puede escribir. */
REPASO.lectura({
  materia: 'biologia', ficha: 'b3', id: 'b3-l1', tema: 't1',
  titulo: 'Título de la lectura',
  texto: [
    'Primera oración del texto (número 0).',
    'Segunda oración (número 1).',
    'Tercera oración (número 2).',
    'Cuarta oración (número 3).'
  ],
  explica: {
    q: 'Con tus palabras: ¿pregunta que pide explicar?',
    modelo: 'Respuesta modelo de 2 a 3 oraciones.',
    falsas: ['Idea falsa pero creíble (error típico)', 'Otra idea falsa creíble'],
    claves: [
      { t: 'Primera idea que debe aparecer', k: ['palabra1', 'palabra2'], min: 1 },
      { t: 'Segunda idea que debe aparecer', k: ['palabra3', 'palabra4'], min: 1 }
    ]
  },
  items: [
    LO('literal', '¿Pregunta sobre algo que dice el texto?', ['Respuesta correcta', 'Distractor 1', 'Distractor 2', 'Distractor 3'], [1], 'Por qué es correcta.'),
    LO('vocabulario', 'En el texto, "palabra" significa…', ['Significado correcto', 'Otro significado', 'Otro más'], [2], 'La oración lo explica.'),
    LV('inferencia', 'Afirmación que se deduce del texto.', 'v', [0, 3], 'Por qué es verdadera.'),
    LV('literal', 'Afirmación que el texto no menciona.', 'n', [], 'El texto no lo dice, aunque sea cierto en la materia.'),
    LE('Toca la oración que prueba que…', [3], 'Esa oración lo dice.'),
    LS('Ordena los pasos.', ['Paso 1', 'Paso 2', 'Paso 3'], 'Primero..., luego... y al final...')
  ]
});
