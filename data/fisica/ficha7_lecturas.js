/* FÍSICA · Ficha 7 · LECTURAS CIENTÍFICAS
   Textos muy cortos (60 a 90 palabras, para empezar poco a poco) escritos con palabras nuevas (no copiados del libro) y alineados con la ficha y su fe de erratas.
   Cada lectura se escribe así:
     texto: [ 'Oración 0.', 'Oración 1.', ... ]      (cada oración es un elemento; la primera es la número 0)
     items: preguntas con LO, LV, LE y LS (las instrucciones están en data/PLANTILLA_lectura.js)
   "ev" = números de las oraciones que prueban la respuesta; la app las resalta al corregir. */

REPASO.lectura({
  materia: 'fisica', ficha: 'f7', id: 'f7-l1', tema: 't3',
  titulo: 'La hoja de oro de Rutherford',
  texto: [
    'Ernest Rutherford quiso saber cómo es el átomo por dentro.',
    'Lanzó partículas alfa contra una hoja de oro muy delgada.',
    'Casi todas pasaron derecho, como si casi no hubiera nada en su camino.',
    'Solo unas pocas rebotaron, como si chocaran contra una pared.',
    'Concluyó que el átomo es casi todo vacío y que en su centro hay un núcleo pequeño, denso y positivo.',
    'Su modelo, de 1911, reemplazó al del panqué con pasas.'
  ],
  explica: {
    q: 'Con tus palabras: ¿qué descubrió Rutherford y cómo lo supo?',
    modelo: 'Rutherford lanzó partículas alfa contra una hoja de oro muy delgada. Casi todas pasaron derecho, así que el átomo es casi todo espacio vacío. Unas pocas rebotaron, lo que mostró que en el centro hay un núcleo pequeño, denso y con carga positiva.',
    falsas: ['Casi todas las partículas rebotaron, así que el átomo es una bola maciza', 'Rutherford descubrió el neutrón en el centro del átomo'],
    claves: [
      { t: 'Lanzó partículas alfa contra una hoja de oro', k: ['alfa', 'oro'], min: 1 },
      { t: 'Casi todas pasaron, así que el átomo es casi todo vacío', k: ['pasaron', 'atraves', 'vacio', 'derecho'], min: 1 },
      { t: 'Unas pocas rebotaron: hay un núcleo pequeño, denso y positivo', k: ['rebot', 'desvi', 'nucleo'], min: 1 }
    ]
  },
  items: [
    LO('literal', '¿Contra qué lanzó Rutherford las partículas alfa?', ['Una hoja de oro muy delgada', 'Un tubo de rayos catódicos', 'Una lámina de berilio', 'Un imán'], [1], 'Fue una hoja de oro. La lámina de berilio es del experimento de Chadwick.'),
    LO('vocabulario', 'En el texto, "rebotaron" significa que las partículas…', ['Regresaron al chocar', 'Se detuvieron para siempre', 'Atravesaron la hoja', 'Se hicieron más pequeñas'], [3], 'Rebotar es regresar después de chocar, como una pelota contra la pared.'),
    LV('literal', 'Casi todas las partículas atravesaron la hoja de oro.', 'v', [2], 'Así lo dice el texto: casi todas pasaron derecho.'),
    LO('inferencia', '¿Por qué casi todas las partículas pasaron derecho?', ['Porque casi todo el átomo es espacio vacío', 'Porque la hoja de oro era muy gruesa', 'Porque el núcleo es enorme', 'Porque las partículas eran neutras'], [2, 4], 'El texto no lo dice con esas palabras, pero se deduce: si casi nada las detuvo, es porque casi no había nada en su camino.'),
    LV('literal', 'Rutherford tardó diez años en terminar su experimento.', 'n', [], 'El texto no menciona cuánto tardó. Aunque suene razonable, solo cuenta lo que el texto dice.'),
    LE('Toca la oración que da la prueba de que hay algo duro dentro del átomo.', [3], 'Los rebotes, como si chocaran contra una pared, muestran que hay algo duro en el átomo.'),
    LS('Ordena los pasos del experimento.', ['Se lanzan partículas alfa contra la hoja de oro', 'Casi todas pasan y pocas rebotan', 'Se concluye que casi todo es vacío', 'Se propone un núcleo pequeño y denso'], 'Primero se lanza, luego se observa y al final se interpreta lo observado.')
  ]
});

REPASO.lectura({
  materia: 'fisica', ficha: 'f7', id: 'f7-l2', tema: 't8',
  titulo: 'Un átomo, muchas ideas',
  texto: [
    'Hace más de dos mil años, Demócrito pensó que todo estaba hecho de átomos, palabra que significa "indivisible".',
    'No pudo comprobarlo, porque no se hacían experimentos como los de hoy.',
    'En 1803, Dalton retomó la idea y en 1897 Thomson descubrió el electrón.',
    'Después, Rutherford encontró el núcleo y, en 1913, Bohr propuso las órbitas.',
    'Cada modelo mejoró al anterior gracias a nuevas pruebas.'
  ],
  explica: {
    q: 'Con tus palabras: ¿por qué fue cambiando la idea del átomo con el tiempo?',
    modelo: 'Cada científico propuso un modelo con las pruebas que tenía: Demócrito imaginó el átomo, Dalton retomó la idea, Thomson descubrió el electrón, Rutherford encontró el núcleo y Bohr propuso las órbitas. Los modelos cambiaron porque aparecieron nuevas pruebas.',
    falsas: ['El átomo mismo va cambiando de forma con los años, por eso hubo nuevos modelos', 'Dalton fue el primero en descubrir el electrón'],
    claves: [
      { t: 'Menciona al menos dos científicos y lo que aportó cada uno', k: ['democrito', 'dalton', 'thomson', 'rutherford', 'bohr'], min: 2 },
      { t: 'Cada modelo se basó en las pruebas que había en su época', k: ['prueba', 'experiment', 'descubr', 'descubri'], min: 1 },
      { t: 'Los modelos cambian cuando aparecen nuevas pruebas', k: ['nuevas', 'nuevo', 'mejor', 'cambi', 'corrig'], min: 1 }
    ]
  },
  items: [
    LO('vocabulario', 'En el texto, "indivisible" significa que algo…', ['No se puede dividir', 'Es muy pesado', 'Tiene carga eléctrica', 'No existe'], [0], 'La propia oración lo explica: átomo significa "indivisible", la parte que ya no se puede dividir.'),
    LV('literal', 'Demócrito comprobó su idea con experimentos.', 'f', [1], 'El texto dice que no pudo comprobarla.'),
    LO('literal', '¿Quién descubrió el electrón en 1897?', ['Thomson', 'Dalton', 'Rutherford', 'Bohr'], [2], 'Fue Thomson. Dalton retomó la idea del átomo en 1803.'),
    LO('inferencia', '¿Por qué crees que Demócrito no pudo comprobar su idea?', ['Porque en su época no se hacían experimentos como los actuales', 'Porque su idea estaba equivocada', 'Porque Dalton se lo impidió', 'Porque no conocía la palabra átomo'], [1], 'El texto da la razón: no se hacían experimentos como los de hoy.'),
    LV('inferencia', 'Thomson fue maestro de Rutherford.', 'n', [], 'Según tu ficha, eso es cierto. Pero este texto no lo dice, y en una lectura se responde solo con lo que el texto dice.'),
    LE('Toca la oración que explica por qué los modelos del átomo fueron cambiando.', [4], 'Cada modelo mejoró al anterior gracias a nuevas pruebas.'),
    LS('Ordena las ideas del átomo de la más antigua a la más reciente.', ['Demócrito imagina átomos indivisibles', 'Dalton retoma la idea (1803)', 'Thomson descubre el electrón (1897)', 'Bohr propone las órbitas (1913)'], 'Demócrito, Dalton, Thomson y Bohr.')
  ]
});

REPASO.lectura({
  materia: 'fisica', ficha: 'f7', id: 'f7-l3', tema: 't4',
  titulo: 'El neutrón sale a la luz',
  texto: [
    'En los años treinta, James Chadwick lanzó partículas alfa contra una lámina de berilio.',
    'Salió una radiación muy intensa formada por partículas sin carga eléctrica.',
    'Las llamó neutrones, porque son neutras.',
    'Los neutrones están en el núcleo, junto a los protones.',
    'Pero no todos los átomos tienen neutrones: el hidrógeno más común solo tiene un protón y un electrón.',
    'Esto ocurrió en 1932, después del modelo de Bohr.'
  ],
  explica: {
    q: 'Con tus palabras: ¿qué es un neutrón y cómo se descubrió?',
    modelo: 'Chadwick lanzó partículas alfa contra una lámina de berilio y salió una radiación muy intensa. Concluyó que estaba formada por partículas sin carga, los neutrones, que están en el núcleo junto a los protones.',
    falsas: ['Chadwick lanzó partículas alfa contra una hoja de oro', 'Los neutrones tienen carga positiva y giran fuera del núcleo'],
    claves: [
      { t: 'Chadwick lanzó partículas alfa contra berilio', k: ['berilio', 'chadwick', 'alfa'], min: 1 },
      { t: 'Los neutrones no tienen carga', k: ['sin carga', 'no tiene carga', 'no tienen carga', 'neutra', 'neutro', 'carga neutra'], min: 1 },
      { t: 'Los neutrones están en el núcleo, junto a los protones', k: ['nucleo', 'protones'], min: 1 }
    ]
  },
  items: [
    LO('literal', '¿Contra qué material lanzó Chadwick las partículas alfa?', ['Una lámina de berilio', 'Una hoja de oro', 'Un tubo de rayos catódicos', 'Una pantalla fluorescente'], [0], 'Fue una lámina de berilio. La hoja de oro es del experimento de Rutherford.'),
    LO('vocabulario', 'En el texto, "neutras" quiere decir que las partículas…', ['No tienen carga eléctrica', 'Son muy pequeñas', 'Tienen carga positiva', 'Giran en órbitas'], [1, 2], 'Neutra es la que no tiene carga: ni positiva ni negativa.'),
    LV('literal', 'Los neutrones se encuentran en el núcleo.', 'v', [3], 'Están en el núcleo, junto a los protones.'),
    LV('inferencia', 'Todos los átomos tienen al menos un neutrón.', 'f', [4], 'El texto da un contraejemplo: el hidrógeno más común solo tiene un protón y un electrón.'),
    LV('literal', 'Chadwick recibió un premio por su descubrimiento.', 'n', [], 'El texto no habla de premios. No se puede saber a partir de lo que dice.'),
    LE('Toca la oración que muestra que el neutrón se descubrió después del modelo de Bohr.', [5], 'El texto lo dice con una fecha: 1932, después del modelo de Bohr.'),
    LS('Ordena lo que ocurrió en el descubrimiento del neutrón.', ['Se lanzan partículas alfa contra el berilio', 'Sale una radiación muy intensa', 'Se concluye que son partículas sin carga', 'Se les da el nombre de neutrones'], 'Primero el experimento, luego la observación, después la conclusión y al final el nombre.')
  ]
});
