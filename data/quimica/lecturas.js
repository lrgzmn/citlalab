/* QUÍMICA · LECTURAS CIENTÍFICAS (Fichas 1 a 6)
   Textos muy cortos escritos con palabras nuevas (no copiados del libro) y alineados con cada ficha y su fe de erratas.
   Las instrucciones para escribir más están en data/PLANTILLA_lectura.js */

REPASO.lectura({
  materia: 'quimica', ficha: 'q1', id: 'q1-l1', tema: 't1',
  titulo: 'El maíz y la cal',
  texto: [
    'La nixtamalización es un saber ancestral para preparar el maíz.',
    'Primero se obtiene cal apagada: la cal viva (óxido de calcio) se hidrata, es decir, se mezcla con agua.',
    'Con una disolución de cal de alrededor de 1 % se cuece el maíz.',
    'El producto se llama nixtamal y la cal apagada le aporta calcio.',
    'Después el nixtamal se muele y con la masa se cuecen las tortillas.'
  ],
  explica: {
    q: 'Con tus palabras: ¿en qué consiste la nixtamalización?',
    modelo: 'Se hidrata la cal viva para obtener cal apagada y con una disolución de cal, de alrededor de 1 %, se cuece el maíz. El producto es el nixtamal, que aporta calcio y luego se muele para hacer las tortillas.',
    falsas: ['El maíz se cuece solo con agua y sal', 'La cal viva se usa directamente sin mezclarla con agua'],
    claves: [
      { t: 'El maíz se cuece con una disolución de cal', k: ['cal', 'cuece', 'cocer', 'cocimiento'], min: 2 },
      { t: 'El producto se llama nixtamal', k: ['nixtamal'], min: 1 },
      { t: 'La cal aporta calcio y después se muele para las tortillas', k: ['calcio', 'muele', 'moler', 'tortilla', 'masa'], min: 1 }
    ]
  },
  items: [
    LO('literal', '¿Cómo se llama el producto que se obtiene al cocer el maíz con cal?', ['Nixtamal', 'Cal viva', 'Cal apagada', 'Masa de adobe'], [3], 'Se llama nixtamal. La cal apagada es la disolución que se usa para cocerlo.'),
    LO('vocabulario', 'En el texto, "hidratar" la cal viva significa…', ['Mezclarla con agua', 'Calentarla hasta que se seque', 'Molerla hasta hacerla polvo', 'Mezclarla con maíz'], [1], 'Hidratar es agregar agua: la cal viva con agua da cal apagada.'),
    LV('literal', 'La cal apagada le aporta calcio al maíz.', 'v', [3], 'Así lo dice el texto.'),
    LO('inferencia', '¿Qué pasaría si el maíz se cociera solo con agua, sin cal?', ['Se perdería el aporte de calcio de la cal apagada', 'Se obtendría más calcio que con cal', 'Se obtendría cal viva', 'Se formaría adobe'], [3], 'El texto dice que la cal apagada aporta calcio; sin ella, ese aporte no estaría.'),
    LV('literal', 'El pozol se prepara con maíz nixtamalizado.', 'n', [], 'Es cierto en la materia, pero este texto no menciona el pozol.'),
    LE('Toca la oración que dice cómo se obtiene la cal apagada.', [1], 'La cal viva se hidrata, es decir, se mezcla con agua.'),
    LS('Ordena el proceso.', ['Se hidrata la cal viva y se obtiene cal apagada', 'Se cuece el maíz en la disolución de cal', 'Se muele el nixtamal', 'Se cuecen las tortillas'], 'Primero se prepara la cal, luego se cuece el maíz, se muele el nixtamal y al final se cuecen las tortillas.')
  ]
});

REPASO.lectura({
  materia: 'quimica', ficha: 'q2', id: 'q2-l1', tema: 't4',
  titulo: 'Un átomo de cloro contra el ozono',
  texto: [
    'La mayor parte del ozono (O₃) está en la estratosfera, donde forma una capa que filtra la radiación ultravioleta.',
    'En 1974 Mario Molina y Sherwood Rowland publicaron en la revista Nature que los clorofluorocarbonos dañaban esa capa.',
    'Antes se creía que esos gases se acumulaban en la atmósfera sin tener efecto.',
    'Los átomos de cloro que liberan pueden destruir muchas moléculas de ozono.',
    'Por estas investigaciones, Molina recibió el Premio Nobel de Química en 1995.'
  ],
  explica: {
    q: 'Con tus palabras: ¿qué descubrieron Molina y Rowland sobre la capa de ozono?',
    modelo: 'Descubrieron que los clorofluorocarbonos, que antes se creía que no hacían nada, liberan átomos de cloro. Esos átomos pueden destruir muchas moléculas de ozono y dañan la capa que nos protege de la radiación ultravioleta.',
    falsas: ['Descubrieron que el ozono es un elemento que produce los clorofluorocarbonos', 'Descubrieron que el cloro protege a la capa de ozono'],
    claves: [
      { t: 'Los clorofluorocarbonos dañan la capa de ozono', k: ['clorofluorocarbono', 'cfc', 'dana', 'destruye', 'destruir'], min: 1 },
      { t: 'Liberan átomos de cloro que destruyen muchas moléculas de ozono', k: ['cloro', 'moleculas', 'ozono'], min: 2 },
      { t: 'La capa filtra la radiación ultravioleta', k: ['ultravioleta', 'uv', 'radiacion', 'filtra', 'protege'], min: 1 }
    ]
  },
  items: [
    LO('literal', '¿Qué hace la capa de ozono?', ['Filtra la radiación ultravioleta', 'Produce el oxígeno que respiramos', 'Retiene el calor del Sol', 'Forma las nubes'], [0], 'La capa de ozono filtra la radiación ultravioleta.'),
    LO('vocabulario', 'En el texto, "se acumulaban" significa que esos gases…', ['Se juntaban y permanecían en la atmósfera', 'Se destruían de inmediato', 'Se convertían en agua', 'Bajaban hasta el suelo'], [2], 'Acumularse es juntarse y quedarse en un lugar.'),
    LV('literal', 'Antes de 1974 ya se sabía que los clorofluorocarbonos dañaban el ozono.', 'f', [2], 'Se creía que no tenían efecto. Molina y Rowland mostraron lo contrario.'),
    LO('inferencia', '¿Por qué un solo átomo de cloro es tan dañino para la capa de ozono?', ['Porque puede destruir muchas moléculas de ozono', 'Porque forma nuevas moléculas de ozono', 'Porque filtra la radiación ultravioleta', 'Porque se destruye al tocar el ozono'], [3], 'El texto dice que los átomos de cloro pueden destruir muchas moléculas de ozono.'),
    LV('literal', 'Molina hizo un posgrado en la Universidad de California en Berkeley.', 'n', [], 'Es cierto en la materia, pero este texto no habla de sus estudios.'),
    LE('Toca la oración que dice qué se pensaba antes sobre estos gases.', [2], 'Se creía que se acumulaban sin tener efecto.'),
    LS('Ordena lo que explica el texto.', ['Los clorofluorocarbonos se acumulan en la atmósfera', 'Liberan átomos de cloro', 'El cloro destruye muchas moléculas de ozono'], 'Primero se acumulan los gases, liberan cloro y este destruye ozono.')
  ]
});

REPASO.lectura({
  materia: 'quimica', ficha: 'q3', id: 'q3-l1', tema: 't3',
  titulo: 'Qué dice el código de un envase',
  texto: [
    'Casi todos los envases de plástico traen un número o unas siglas dentro del símbolo de reciclaje.',
    'Ese código indica de qué tipo de plástico está hecho el objeto.',
    'Por ejemplo, PET es el polietilentereftalato, con el que se fabrican botellas de agua y de refresco.',
    'El PVC es el policloruro de vinilo, y el PP, el polipropileno, que es resistente y flexible.',
    'Que un plástico sea reciclable no significa que sea biodegradable.',
    'Por eso conviene separarlos y llevarlos a un centro de acopio.'
  ],
  explica: {
    q: 'Con tus palabras: ¿para qué sirve el código de un envase y qué debemos hacer con los plásticos?',
    modelo: 'El código indica de qué tipo de plástico está hecho el objeto, por ejemplo PET o PP. Aunque sea reciclable, un plástico no es biodegradable, así que conviene separarlo y llevarlo a un centro de acopio.',
    falsas: ['El código indica cuánto tarda el plástico en degradarse', 'Los plásticos reciclables se degradan solos en poco tiempo'],
    claves: [
      { t: 'El código indica el tipo de plástico', k: ['tipo', 'codigo', 'numero', 'siglas', 'pet', 'pp', 'pvc'], min: 1 },
      { t: 'Reciclable no es lo mismo que biodegradable', k: ['reciclable', 'biodegradable', 'no se degrada', 'tarda'], min: 1 },
      { t: 'Hay que separarlos y llevarlos a un centro de acopio', k: ['separar', 'separarlos', 'acopio'], min: 1 }
    ]
  },
  items: [
    LO('literal', '¿Qué indica el código de un envase de plástico?', ['De qué tipo de plástico está hecho', 'Cuántas veces se puede reciclar', 'Cuánto cuesta fabricarlo', 'Dónde se fabricó'], [1], 'El código indica el tipo de plástico.'),
    LO('vocabulario', 'En el texto, "biodegradable" se refiere a un material que…', ['Se degrada por procesos naturales', 'Se puede volver a fabricar', 'Resiste mucho calor', 'Se identifica con siglas'], [4], 'Biodegradable es lo que la naturaleza puede degradar. Que sea reciclable es otra cosa.'),
    LV('literal', 'El PET se usa para fabricar botellas de agua y de refresco.', 'v', [2], 'Así lo dice el texto.'),
    LO('inferencia', '¿Por qué conviene llevar los plásticos a un centro de acopio?', ['Porque son reciclables pero no biodegradables, y hay que procesarlos', 'Porque se degradan solos en pocos días', 'Porque el código desaparece con el tiempo', 'Porque son lo mismo que el papel'], [4, 5], 'El texto lo deja ver: al no ser biodegradables, se recicla procesándolos.'),
    LV('literal', 'El unicel es poliestireno expandido.', 'n', [], 'Es cierto en la materia, pero este texto no menciona el unicel.'),
    LE('Toca la oración que dice qué significa el código.', [1], 'Ese código indica de qué tipo de plástico está hecho el objeto.'),
    LS('Ordena lo que haces con un envase.', ['Revisas el código del envase', 'Identificas el tipo de plástico', 'Lo separas con los demás plásticos', 'Lo llevas a un centro de acopio'], 'Primero lees el código, luego identificas el plástico, lo separas y lo llevas al centro de acopio.')
  ]
});

REPASO.lectura({
  materia: 'quimica', ficha: 'q4', id: 'q4-l1', tema: 't2',
  titulo: 'La densidad, una huella del material',
  texto: [
    'La densidad relaciona la masa de un material con el volumen que ocupa: d = m ÷ V.',
    'Se expresa en g/mL, g/cm³ o kg/m³.',
    'El agua tiene una densidad de aproximadamente 1 g/mL.',
    'Un objeto se hunde en un líquido si su densidad es mayor que la del líquido, y flota si es menor.',
    'La densidad depende del material y no de la cantidad: un cubo grande y uno pequeño del mismo material tienen la misma densidad.',
    'Por eso es una propiedad intensiva que ayuda a identificar sustancias.'
  ],
  explica: {
    q: 'Con tus palabras: ¿qué es la densidad y por qué es una propiedad intensiva?',
    modelo: 'La densidad es la masa de un material entre el volumen que ocupa. Es intensiva porque depende del material y no de la cantidad, así que un cubo grande y uno pequeño del mismo material tienen la misma densidad. Sirve para identificar sustancias.',
    falsas: ['La densidad es extensiva porque aumenta cuando hay más material', 'La densidad es el volumen que ocupa un material'],
    claves: [
      { t: 'La densidad es masa entre volumen', k: ['masa', 'volumen', 'entre', 'm/v'], min: 2 },
      { t: 'Depende del material y no de la cantidad', k: ['material', 'cantidad', 'no depende', 'sustancia'], min: 1 },
      { t: 'Sirve para identificar sustancias', k: ['identifica', 'identificar', 'distingue', 'distinguir', 'reconocer'], min: 1 }
    ]
  },
  items: [
    LO('literal', '¿Cuál es la densidad aproximada del agua?', ['1 g/mL', '10 g/mL', '0.1 g/mL', '100 g/mL'], [2], 'El agua tiene una densidad aproximada de 1 g/mL.'),
    LO('vocabulario', 'En el texto, "propiedad intensiva" es una propiedad que…', ['No depende de la cantidad de materia', 'Aumenta al duplicar la cantidad', 'Solo se mide en kg/m³', 'Cambia si el objeto es grande'], [4, 5], 'Una propiedad intensiva no depende de cuánta materia haya.'),
    LV('literal', 'La densidad es una propiedad extensiva porque depende de la cantidad de materia.', 'f', [4, 5], 'Es intensiva: depende del material y no de la cantidad.'),
    LO('inferencia', 'Una piedra se hunde en el agua. ¿Qué puedes concluir?', ['Que su densidad es mayor que 1 g/mL', 'Que su densidad es menor que 1 g/mL', 'Que su masa es muy pequeña', 'Que su volumen es muy grande'], [2, 3], 'El texto dice que se hunde si es más densa que el líquido; el agua tiene unos 1 g/mL.'),
    LV('literal', 'El mercurio tiene una densidad de aproximadamente 13.55 g/mL.', 'n', [], 'Es cierto en la materia, pero este texto no menciona el mercurio.'),
    LE('Toca la oración que explica por qué un cubo grande y uno pequeño del mismo material tienen la misma densidad.', [4], 'La densidad depende del material y no de la cantidad.'),
    LS('Ordena los pasos para calcular la densidad de un objeto.', ['Se mide la masa', 'Se mide el volumen', 'Se divide la masa entre el volumen'], 'Con la masa y el volumen medidos, se aplica d = m ÷ V.')
  ]
});

REPASO.lectura({
  materia: 'quimica', ficha: 'q5', id: 'q5-l1', tema: 't3',
  titulo: 'El densímetro flota para medir',
  texto: [
    'El densímetro es una varilla graduada con un bulbo hueco que le permite flotar.',
    'Se coloca en el líquido y se lee la escala a la altura de la superficie.',
    'En un líquido más denso, el densímetro flota más alto; en uno menos denso, se hunde más.',
    'Con él se mide la densidad de un líquido, sin medir por separado su masa y su volumen.',
    'Hay versiones especializadas, como la que se usa en el control de calidad de la leche.'
  ],
  explica: {
    q: 'Con tus palabras: ¿cómo funciona un densímetro?',
    modelo: 'El densímetro es una varilla graduada con un bulbo hueco que flota. Se coloca en el líquido y se lee la escala: en un líquido más denso flota más alto y en uno menos denso se hunde más. Así mide la densidad del líquido.',
    falsas: ['El densímetro mide la masa de un sólido', 'El densímetro se hunde más en el líquido más denso'],
    claves: [
      { t: 'Es una varilla con un bulbo hueco que flota', k: ['varilla', 'bulbo', 'flota', 'flotar'], min: 1 },
      { t: 'Se lee la escala en la superficie del líquido', k: ['escala', 'lee', 'leer', 'graduada', 'superficie'], min: 1 },
      { t: 'En un líquido más denso flota más alto', k: ['mas alto', 'mas denso', 'menos denso', 'se hunde'], min: 1 }
    ]
  },
  items: [
    LO('literal', '¿Qué mide el densímetro?', ['La densidad de un líquido', 'La masa de un sólido', 'La temperatura del aire', 'El volumen de un gas'], [3], 'El densímetro mide la densidad de un líquido.'),
    LO('vocabulario', 'En el texto, "graduada" significa que la varilla tiene…', ['Una escala marcada para medir', 'Un peso muy grande', 'Una punta muy afilada', 'Un color distinto en cada parte'], [0], 'Una varilla graduada tiene una escala marcada.'),
    LV('literal', 'En un líquido más denso, el densímetro flota más alto.', 'v', [2], 'Así lo dice el texto.'),
    LO('inferencia', 'El densímetro se hunde más en el líquido A que en el B. ¿Cuál es más denso?', ['El líquido B', 'El líquido A', 'Los dos tienen la misma densidad', 'No se puede saber'], [2], 'Flota más alto en el más denso; como en B flota más alto, B es más denso.'),
    LV('literal', 'Para usar el densímetro hay que medir antes la masa y el volumen del líquido.', 'f', [3], 'El texto dice que se mide la densidad sin medir por separado masa y volumen.'),
    LV('literal', 'El termómetro infrarrojo mide la temperatura sin tocar la superficie.', 'n', [], 'Es cierto en la materia, pero este texto habla del densímetro.'),
    LE('Toca la oración que dice cómo se lee el resultado.', [1], 'Se lee la escala a la altura de la superficie del líquido.')
  ]
});

REPASO.lectura({
  materia: 'quimica', ficha: 'q6', id: 'q6-l1', tema: 't2',
  titulo: 'Una fase o varias fases',
  texto: [
    'Una mezcla homogénea tiene una sola fase: sus componentes no se distinguen a simple vista.',
    'En una disolución, el soluto es lo que se disuelve y el disolvente es lo que disuelve.',
    'En el agua de mar, el agua es el disolvente y las sales son el soluto.',
    'Una mezcla heterogénea tiene dos o más fases, como el agua de horchata con arroz molido, que se ve turbia.',
    'Una mezcla homogénea no se separa por filtración, pero una heterogénea de sólido y líquido sí.'
  ],
  explica: {
    q: 'Con tus palabras: ¿en qué se diferencian una mezcla homogénea y una heterogénea?',
    modelo: 'La mezcla homogénea tiene una sola fase y sus componentes no se distinguen, como el agua de mar con sales disueltas. La heterogénea tiene dos o más fases, como el agua de horchata con arroz molido, y si es de sólido y líquido se puede separar por filtración.',
    falsas: ['La homogénea tiene dos fases y la heterogénea una sola', 'La mezcla homogénea siempre se separa por filtración'],
    claves: [
      { t: 'La homogénea tiene una sola fase', k: ['una sola fase', 'una fase', 'no se distingu', 'uniforme'], min: 1 },
      { t: 'La heterogénea tiene dos o más fases', k: ['dos o mas', 'varias fases', 'mas de una', 'se distingu'], min: 1 },
      { t: 'La heterogénea de sólido y líquido se filtra y la homogénea no', k: ['filtra', 'filtracion', 'colador'], min: 1 }
    ]
  },
  items: [
    LO('literal', 'Según el texto, ¿qué es el soluto?', ['Lo que se disuelve', 'Lo que disuelve', 'La parte turbia de la mezcla', 'La fase que se filtra'], [1], 'El soluto es lo que se disuelve; el disolvente es lo que disuelve.'),
    LO('vocabulario', 'En el texto, una "fase" es…', ['Cada parte de una mezcla con propiedades uniformes', 'Un instrumento para filtrar', 'El líquido que disuelve', 'Un tipo de sal'], [0], 'Una fase es una parte de la mezcla con propiedades uniformes.'),
    LV('literal', 'El agua de horchata con arroz molido es una mezcla homogénea.', 'f', [3], 'Es heterogénea: se ve turbia y tiene más de una fase.'),
    LO('inferencia', 'Al filtrar una mezcla queda un sólido en el colador. ¿Qué tipo de mezcla era?', ['Heterogénea', 'Homogénea', 'Un compuesto', 'Un elemento'], [4], 'La heterogénea de sólido y líquido se separa por filtración.'),
    LV('literal', 'El aire es una mezcla homogénea de gases.', 'n', [], 'Es cierto en la materia, pero este texto no menciona el aire.'),
    LE('Toca la oración que da un ejemplo de soluto y disolvente.', [2], 'En el agua de mar, el agua es el disolvente y las sales son el soluto.')
  ]
});
