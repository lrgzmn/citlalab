/* BIOLOGÍA · LECTURAS CIENTÍFICAS (Fichas 1 a 6)
   Textos muy cortos escritos con palabras nuevas (no copiados del libro) y alineados con cada ficha.
   Las instrucciones para escribir más están en data/PLANTILLA_lectura.js */

REPASO.lectura({
  materia: 'biologia', ficha: 'b1', id: 'b1-l1', tema: 't4',
  titulo: 'La conversación entre neuronas',
  texto: [
    'Entre una neurona y la siguiente hay un espacio muy pequeño llamado sinapsis.',
    'Cuando la señal llega al final de la neurona, esta libera neurotransmisores.',
    'Estas sustancias químicas cruzan el espacio y se unen a receptores de la célula que sigue.',
    'La célula receptora interpreta el mensaje y produce una respuesta, como un movimiento.',
    'Todo ocurre muy rápido y sus efectos suelen durar poco.',
    'La sinapsis también se da entre una neurona y un músculo.'
  ],
  explica: {
    q: 'Con tus palabras: ¿cómo se comunican dos neuronas?',
    modelo: 'Entre dos neuronas hay un espacio llamado sinapsis. La primera neurona libera neurotransmisores, que cruzan el espacio y se unen a receptores de la célula siguiente. Esa célula interpreta el mensaje y produce una respuesta.',
    falsas: ['Las neuronas se tocan y el impulso pasa directo de una a otra', 'Los neurotransmisores viajan por la sangre hasta llegar al cerebro'],
    claves: [
      { t: 'Hay un espacio entre las neuronas: la sinapsis', k: ['sinapsis', 'espacio'], min: 1 },
      { t: 'La neurona libera neurotransmisores', k: ['neurotransmisor', 'sustancias', 'quimic'], min: 1 },
      { t: 'Se unen a receptores y la célula siguiente responde', k: ['receptor', 'respuesta', 'responde', 'recibe'], min: 1 }
    ]
  },
  items: [
    LO('literal', '¿Qué libera la neurona cuando la señal llega a su final?', ['Neurotransmisores', 'Receptores', 'Mielina', 'Hormonas'], [1], 'Libera neurotransmisores. Los receptores están en la célula que recibe el mensaje.'),
    LO('vocabulario', 'En el texto, "receptores" son…', ['Estructuras de la célula siguiente a las que se une el neurotransmisor', 'Mensajes eléctricos que viajan por el axón', 'Espacios que separan dos músculos', 'Células que producen hormonas'], [2], 'Los receptores están en la célula que recibe el mensaje; ahí se une el neurotransmisor.'),
    LV('literal', 'La sinapsis es el espacio entre una neurona y la siguiente.', 'v', [0], 'Así lo dice la primera oración.'),
    LO('inferencia', '¿Para qué sirven los receptores de la célula siguiente?', ['Para recibir el neurotransmisor y provocar una respuesta', 'Para devolver la señal eléctrica a la primera neurona', 'Para que las dos neuronas se toquen', 'Para detener el mensaje por completo'], [2, 3], 'El texto lo deja ver: el neurotransmisor se une a los receptores y la célula produce una respuesta.'),
    LV('literal', 'La acetilcolina es un neurotransmisor que participa en el movimiento.', 'n', [], 'Es cierto en la materia, pero este texto no menciona ningún neurotransmisor en particular.'),
    LE('Toca la oración que dice qué hace la célula que recibe el mensaje.', [3], 'La célula receptora interpreta el mensaje y produce una respuesta.'),
    LS('Ordena lo que ocurre en la sinapsis.', ['Llega la señal al final de la neurona', 'La neurona libera neurotransmisores', 'Los neurotransmisores se unen a los receptores', 'La célula siguiente produce una respuesta'], 'Primero llega la señal, luego se libera el mensaje químico y al final la célula siguiente responde.')
  ]
});

REPASO.lectura({
  materia: 'biologia', ficha: 'b2', id: 'b2-l1', tema: 't2',
  titulo: 'Mensajeros que viajan por la sangre',
  texto: [
    'Las hormonas son mensajeros químicos que producen las glándulas del sistema endocrino.',
    'No viajan por los nervios: van por la sangre hasta los órganos que deben responder.',
    'Por eso actúan más despacio que los neurotransmisores, pero sus efectos suelen durar más.',
    'El páncreas produce insulina y glucagón, que ayudan a controlar el azúcar en la sangre.',
    'Los ovarios producen estrógenos y progesterona, y los testículos, testosterona.',
    'Estas hormonas participan en el desarrollo sexual durante la pubertad.'
  ],
  explica: {
    q: 'Con tus palabras: ¿en qué se diferencian las hormonas de los neurotransmisores?',
    modelo: 'Las hormonas las producen las glándulas y viajan por la sangre hasta los órganos que deben responder. Por eso actúan más despacio que los neurotransmisores, aunque sus efectos suelen durar más.',
    falsas: ['Las hormonas viajan por los nervios y actúan más rápido que los neurotransmisores', 'Las hormonas las producen las neuronas y solo duran un instante'],
    claves: [
      { t: 'Las hormonas las producen las glándulas', k: ['glandula', 'endocrin'], min: 1 },
      { t: 'Viajan por la sangre', k: ['sangre'], min: 1 },
      { t: 'Actúan más despacio, pero sus efectos duran más', k: ['despacio', 'lent', 'duran mas', 'dura mas', 'tardan'], min: 1 }
    ]
  },
  items: [
    LO('literal', '¿Por dónde viajan las hormonas?', ['Por la sangre', 'Por los nervios', 'Por la médula espinal', 'Por los pulmones'], [1], 'Viajan por la sangre hasta los órganos que deben responder.'),
    LO('vocabulario', 'En el texto, "glándulas" son…', ['Órganos que producen y liberan sustancias, como las hormonas', 'Cables que llevan la señal eléctrica', 'Huesos que protegen el cerebro', 'Células que reciben neurotransmisores'], [0], 'Las glándulas del sistema endocrino producen las hormonas.'),
    LV('literal', 'Las hormonas actúan más rápido que los neurotransmisores.', 'f', [2], 'Es al revés: actúan más despacio, aunque sus efectos suelen durar más.'),
    LO('inferencia', '¿Por qué las hormonas tardan más en actuar?', ['Porque viajan por la sangre hasta llegar al órgano', 'Porque no son mensajeros químicos', 'Porque salen de los nervios', 'Porque solo actúan de noche'], [1, 2], 'El texto lo deja ver: el viaje por la sangre toma más tiempo que cruzar el pequeño espacio de una sinapsis.'),
    LV('literal', 'El hipotálamo y la glándula pituitaria están en el cerebro.', 'n', [], 'Es cierto en la materia, pero este texto no habla de esas glándulas.'),
    LE('Toca la oración que dice qué hormonas ayudan a controlar el azúcar en la sangre.', [3], 'La insulina y el glucagón, del páncreas, ayudan a controlar el azúcar en la sangre.'),
    LS('Ordena el viaje de una hormona.', ['Una glándula produce la hormona', 'La hormona pasa a la sangre', 'La sangre la lleva al órgano que debe responder', 'El órgano responde'], 'La hormona se produce, viaja por la sangre y llega al órgano que responde.')
  ]
});

REPASO.lectura({
  materia: 'biologia', ficha: 'b3', id: 'b3-l1', tema: 't1',
  titulo: 'De un hábito a una adicción',
  texto: [
    'Un hábito es una conducta que repetimos hasta que se vuelve automática, como lavarse los dientes.',
    'Cuando aparece una necesidad compulsiva de una sustancia o actividad, hay dependencia.',
    'Si esa conducta daña la salud o el equilibrio emocional, se llama adicción.',
    'Una señal de alarma es que interfiera con las actividades diarias o con la relación con la familia y los amigos.',
    'Las adicciones no son solo de sustancias: apostar dinero o jugar durante horas también puede volverse una adicción.'
  ],
  explica: {
    q: 'Con tus palabras: ¿en qué se diferencian un hábito y una adicción?',
    modelo: 'Un hábito es una conducta que se repite hasta volverse automática. La adicción aparece cuando hay una necesidad compulsiva y la conducta daña la salud o interfiere con la familia y las actividades diarias.',
    falsas: ['Un hábito siempre es dañino y una adicción nunca lo es', 'Las adicciones solo existen con drogas ilegales'],
    claves: [
      { t: 'El hábito es una conducta repetida y automática', k: ['repite', 'repeti', 'automatic', 'costumbre'], min: 1 },
      { t: 'En la adicción hay necesidad compulsiva o dependencia', k: ['compulsiv', 'dependencia', 'necesidad', 'no puede dejar'], min: 1 },
      { t: 'Daña la salud o interfiere con la vida diaria y la familia', k: ['dana', 'salud', 'familia', 'diari', 'amigos'], min: 1 }
    ]
  },
  items: [
    LO('literal', '¿Cuál es una señal de alarma de que una conducta se volvió problemática?', ['Interfiere con las actividades diarias o con la familia y los amigos', 'Se hace una sola vez', 'Se hace en compañía de amigos', 'Dura menos de un minuto'], [3], 'Esa es la señal de alarma que describe el texto.'),
    LO('vocabulario', 'En el texto, una necesidad "compulsiva" es una necesidad…', ['Muy difícil de controlar', 'Que se siente muy poco', 'Que se olvida pronto', 'Que solo ocurre de día'], [1], 'Compulsiva quiere decir que cuesta mucho controlarla.'),
    LV('literal', 'Un hábito es una conducta que se repite hasta volverse automática.', 'v', [0], 'Así lo dice la primera oración.'),
    LO('inferencia', 'Según el texto, ¿cuál de estas conductas podría volverse una adicción?', ['Jugar durante horas y descuidar a la familia y las tareas', 'Lavarse los dientes después de comer', 'Hacer la tarea con anticipación', 'Dormir las horas que el cuerpo necesita'], [3, 4], 'Jugar durante horas y descuidar lo importante encaja con la señal de alarma y con los ejemplos del texto.'),
    LV('literal', 'El tabaco aumenta el riesgo de cáncer y de enfermedades del corazón.', 'n', [], 'Es cierto en la materia, pero este texto no habla del tabaco.'),
    LE('Toca la oración que dice que las adicciones no son solo de sustancias.', [4], 'Esa oración da ejemplos de adicciones a conductas: apostar y jugar durante horas.'),
    LS('Ordena el proceso que describe el texto.', ['Una conducta se repite y se vuelve hábito', 'Aparece una necesidad compulsiva: dependencia', 'La conducta daña la salud o el equilibrio emocional: adicción'], 'Es el orden del texto. Pero ojo: no todo hábito termina en adicción.')
  ]
});

REPASO.lectura({
  materia: 'biologia', ficha: 'b4', id: 'b4-l1', tema: 't1',
  titulo: 'Cómo engañan las drogas al cerebro',
  texto: [
    'Las sustancias adictivas actúan en el cerebro porque alteran la producción y la liberación de neurotransmisores.',
    'Algunas provocan una liberación masiva de dopamina, y la persona siente euforia y placer.',
    'Con el tiempo, el cerebro se adapta a esos cambios.',
    'Entonces necesita más cantidad de la sustancia para sentir lo mismo.',
    'Ese círculo lleva a la adicción.',
    'El alcohol, por ejemplo, es un depresor: vuelve más lenta la actividad del cerebro.'
  ],
  explica: {
    q: 'Con tus palabras: ¿cómo puede una droga llevar a una adicción?',
    modelo: 'La droga altera los neurotransmisores y libera mucha dopamina, lo que produce placer. Con el tiempo el cerebro se adapta y necesita más sustancia para sentir lo mismo, y así se llega a la adicción.',
    falsas: ['La droga fortalece al cerebro y por eso la persona quiere más', 'El cerebro nunca cambia, solo el cuerpo se acostumbra'],
    claves: [
      { t: 'Altera los neurotransmisores y libera dopamina', k: ['neurotransmisor', 'dopamina', 'altera'], min: 1 },
      { t: 'Produce euforia o placer', k: ['placer', 'euforia', 'bienestar'], min: 1 },
      { t: 'El cerebro se adapta y necesita más cantidad', k: ['adapta', 'mas cantidad', 'mas droga', 'mas sustancia', 'necesita mas'], min: 1 }
    ]
  },
  items: [
    LO('literal', '¿Qué altera una sustancia adictiva en el cerebro?', ['La producción y liberación de neurotransmisores', 'La cantidad de huesos del cráneo', 'La cantidad de sangre del cuerpo', 'El tamaño de la médula espinal'], [0], 'Altera la producción y la liberación de neurotransmisores.'),
    LO('vocabulario', 'En el texto, "se adapta" significa que el cerebro…', ['Se ajusta a los cambios que ocurren', 'Deja de funcionar por completo', 'Se hace más grande de inmediato', 'Se cura de manera rápida'], [2], 'Adaptarse es ajustarse a los cambios.'),
    LV('literal', 'Con el tiempo, el cerebro necesita más sustancia para sentir lo mismo.', 'v', [3], 'Así lo dice el texto.'),
    LO('inferencia', '¿Por qué una persona puede ir aumentando la cantidad que consume?', ['Porque su cerebro se adaptó y el mismo efecto requiere más cantidad', 'Porque la sustancia se vuelve más barata', 'Porque su cerebro deja de producir neurotransmisores para siempre', 'Porque el efecto dura cada vez más tiempo'], [2, 3], 'Lo deja ver el texto: al adaptarse el cerebro, hace falta más sustancia para sentir lo mismo.'),
    LV('literal', 'La marihuana altera la percepción, la memoria y el juicio.', 'n', [], 'Es cierto en la materia, pero este texto no menciona la marihuana.'),
    LE('Toca la oración que explica por qué se necesita más cantidad cada vez.', [3], 'Después de que el cerebro se adapta, se necesita más cantidad para sentir lo mismo.'),
    LS('Ordena lo que ocurre en el cerebro.', ['La sustancia libera dopamina de forma masiva', 'La persona siente euforia y placer', 'El cerebro se adapta a los cambios', 'Se necesita más sustancia para sentir lo mismo'], 'Primero se libera dopamina, luego se siente placer, el cerebro se adapta y hace falta más.')
  ]
});

REPASO.lectura({
  materia: 'biologia', ficha: 'b5', id: 'b5-l1', tema: 't3',
  titulo: 'Una sexualidad con respeto y cuidado',
  texto: [
    'La sexualidad forma parte de todas las personas a lo largo de su vida.',
    'Para vivirla con bienestar debe ser responsable: conocer las consecuencias, los beneficios y los riesgos.',
    'También debe ser segura, con higiene y prevención de infecciones de transmisión sexual.',
    'Nadie puede presionarte física ni emocionalmente: debe ser voluntaria y de mutuo acuerdo.',
    'Tampoco nadie puede discriminarte ni someterte a violencia.',
    'Informarte en fuentes confiables te ayuda a despejar dudas y evitar miedos.'
  ],
  explica: {
    q: 'Con tus palabras: ¿qué significa vivir la sexualidad con respeto y cuidado?',
    modelo: 'Significa que sea responsable, con información sobre consecuencias y riesgos, y segura, con prevención de infecciones. También debe ser voluntaria y de mutuo acuerdo, sin presión, discriminación ni violencia.',
    falsas: ['Significa hacer lo que decide el grupo de amigos', 'No hace falta informarse si uno ya se cuida solo'],
    claves: [
      { t: 'Debe ser responsable: conocer consecuencias y riesgos', k: ['responsable', 'consecuencia', 'riesgo', 'informa'], min: 1 },
      { t: 'Debe ser segura: prevención de infecciones', k: ['segura', 'infeccion', 'its', 'cuidar', 'cuidarse'], min: 1 },
      { t: 'Debe ser voluntaria, sin presión, discriminación ni violencia', k: ['voluntaria', 'mutuo acuerdo', 'presion', 'violencia', 'discrimina', 'respeto'], min: 1 }
    ]
  },
  items: [
    LO('literal', 'Según el texto, ¿qué significa que la sexualidad sea voluntaria y de mutuo acuerdo?', ['Que nadie puede presionarte física ni emocionalmente', 'Que la decide el grupo de amigos', 'Que la decide solo una de las personas', 'Que se acepta por miedo a perder la relación'], [3], 'Voluntaria y de mutuo acuerdo quiere decir que nadie puede presionarte.'),
    LO('vocabulario', 'En el texto, "presionar" significa…', ['Empujar a alguien a hacer algo que no quiere', 'Cuidar a una persona con cariño', 'Informar a una persona con datos', 'Escuchar con atención a otra persona'], [3], 'Presionar es empujar u obligar a alguien a hacer algo.'),
    LV('literal', 'Una sexualidad responsable implica conocer las consecuencias, los beneficios y los riesgos.', 'v', [1], 'Así lo dice la segunda oración.'),
    LO('inferencia', 'Si alguien te pide algo que no quieres, ¿qué principio del texto apoya tu "no"?', ['Debe ser voluntaria y de mutuo acuerdo', 'Debe decidirse con rapidez', 'Debe depender de la opinión del grupo', 'Debe mantenerse en secreto siempre'], [3], 'Tu "no" está respaldado porque nadie puede presionarte: debe ser voluntaria y de mutuo acuerdo.'),
    LV('literal', 'Los métodos anticonceptivos se clasifican en permanentes y temporales.', 'n', [], 'Es cierto en la materia, pero este texto no habla de métodos anticonceptivos.'),
    LE('Toca la oración que dice dónde informarte para despejar dudas.', [5], 'Las fuentes confiables ayudan a despejar dudas y evitar miedos.')
  ]
});

REPASO.lectura({
  materia: 'biologia', ficha: 'b6', id: 'b6-l1', tema: 't1',
  titulo: 'Mitos y estereotipos',
  texto: [
    'Un estereotipo es una creencia basada en suposiciones y generalizaciones que se arraiga en la sociedad.',
    'Un mito es una idea falsa o exagerada que puede perpetuar creencias perjudiciales.',
    'Por ejemplo, se dice que las mujeres son más débiles y necesitan protección constante, pero eso no tiene base científica.',
    'También hay estereotipos sobre los hombres, como que deben ser altos y fuertes para ser atractivos, y afectan su autoestima.',
    'La expresión de las emociones no tiene género.',
    'Cuestionar estas ideas ayuda a crear una sociedad más justa para todas las personas.'
  ],
  explica: {
    q: 'Con tus palabras: ¿qué son los mitos y estereotipos de género y por qué conviene cuestionarlos?',
    modelo: 'Un estereotipo es una creencia basada en suposiciones sobre cómo son las personas, y un mito es una idea falsa o exagerada. Afectan a mujeres y a hombres, y cuestionarlos ayuda a crear una sociedad más justa.',
    falsas: ['Los estereotipos son datos comprobados por la ciencia', 'Solo afectan a las mujeres y no a los hombres'],
    claves: [
      { t: 'El estereotipo es una creencia basada en suposiciones', k: ['creencia', 'suposicion', 'generaliza', 'estereotipo'], min: 1 },
      { t: 'El mito es una idea falsa o exagerada', k: ['falsa', 'exagerada', 'mito', 'no es cierto'], min: 1 },
      { t: 'Cuestionarlos ayuda a una sociedad más justa', k: ['justa', 'igualdad', 'cuestionar', 'respeto', 'equidad'], min: 1 }
    ]
  },
  items: [
    LO('literal', 'Según el texto, ¿qué es un mito?', ['Una idea falsa o exagerada que puede perpetuar creencias perjudiciales', 'Un dato comprobado con experimentos y mediciones', 'Una ley que obliga a todas las personas por igual', 'Una enfermedad que afecta a muchas personas'], [1], 'El texto define el mito como una idea falsa o exagerada.'),
    LO('vocabulario', 'En el texto, "generalizaciones" son…', ['Ideas que se aplican a todas las personas de un grupo', 'Datos medidos con mucha precisión', 'Leyes escritas por los gobiernos', 'Descubrimientos hechos en laboratorios'], [0], 'Generalizar es aplicar una idea a todos los miembros de un grupo.'),
    LV('literal', 'Los estereotipos de género afectan solo a las mujeres.', 'f', [3], 'También hay estereotipos sobre los hombres y afectan su autoestima.'),
    LO('inferencia', '¿Por qué conviene cuestionar los estereotipos?', ['Porque limitan el bienestar y las oportunidades de las personas', 'Porque son siempre ciertos y por eso incomodan', 'Porque ayudan a que todas las personas sean idénticas', 'Porque prohíben que las personas expresen sus emociones'], [3, 5], 'El texto muestra que afectan la autoestima y que cuestionarlos ayuda a una sociedad más justa.'),
    LV('literal', 'La responsabilidad compartida en la crianza implica repartir las tareas de manera equitativa.', 'n', [], 'Es cierto en la materia, pero este texto no habla de la crianza.'),
    LE('Toca la oración que da un ejemplo de estereotipo sobre los hombres.', [3], 'Dice que se espera que los hombres sean altos y fuertes para ser atractivos.')
  ]
});
