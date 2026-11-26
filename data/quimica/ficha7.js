/* QUÍMICA · 3.º de secundaria
   Ficha 7: Métodos de separación de mezclas (pp. 40 a 46)
   Se omite la explicación de la cristalización de la p. 41 (el libro dice que la sal cristaliza porque su solubilidad baja al enfriar; la solubilidad
   de la sal común casi no cambia con la temperatura, y los cristales se forman sobre todo al evaporar agua). Se explica solo qué es el método.
   Se omiten: tinta china con cromatografía y granos de café (sin criterio claro) y la afirmación de que la hemofilia es "incurable".
*/
REPASO.agregar({
  materia: 'quimica',
  ficha: { id: 'q7', titulo: 'Ficha 7 · Métodos de separación de mezclas', jefe: 'El Colador Maldito' },
  temas: [
    { id: "t1", nombre: "Separar sólidos: tamizado, imantación, solubilidad y filtración" },
    { id: "t2", nombre: "Cristalización, sublimación y extracción" },
    { id: "t3", nombre: "Decantación y destilación" },
    { id: "t4", nombre: "Cromatografía y centrifugación" },
    { id: "t5", nombre: "Elegir el método adecuado" }
  ],
  preguntas: [

    /* t1 · Sólidos */
    O("q7-01", "t1", "¿Qué método separa arena y grava?", ["El tamizado", "La destilación", "La cromatografía", "La decantación"], "La arena pasa por los poros del tamiz y la grava queda atrapada.", "Ficha 7, p. 40"),
    O("q7-02", "t1", "¿En qué propiedad se basa el tamizado?", ["En el diferente tamaño de las partículas", "En la temperatura de ebullición", "En la carga eléctrica", "En el color"], "Los sólidos de distinto tamaño se separan con una malla.", "Ficha 7, p. 40"),
    O("q7-03", "t1", "En una mezcla de sal, clips y virutas de madera, ¿qué componente se separa con un imán?", ["Los clips, que son de material ferromagnético","La sal","Las virutas","Ninguno"], "Los clips son de material ferromagnético y el imán los atrae; esa separación se llama imantación.", "Ficha 7, p. 41"),
    O("q7-04", "t1", "Después de quitar los clips, se agrega agua a la sal y las virutas. ¿Qué ocurre?", ["La sal se disuelve y las virutas no", "Las virutas se disuelven", "Todo se disuelve", "Nada cambia"], "Es una separación por solubilidad.", "Ficha 7, p. 41"),
    O("q7-05", "t1", "Al pasar esa mezcla por un colador, ¿qué queda en el colador?", ["Las virutas de madera", "El agua salada", "La sal disuelta", "Los clips"], "La filtración separa sólidos insolubles de líquidos.", "Ficha 7, p. 41"),
    O("q7-06", "t1", "¿Qué es la filtración?", ["Separar sólidos no disueltos de un líquido con una barrera que retiene las partículas","Separar líquidos mezclados usando sus distintos puntos de ebullición","Separar materiales que tienen hierro usando un imán potente","Separar los componentes de una mezcla por su color"], "Es el método de un colador, de un filtro de café o de una servilleta.", "Ficha 7, p. 41"),
    O("q7-07", "t1", "¿Qué método separaría la sal de las virutas de madera usando agua?", ["Solubilidad y filtración", "Imantación", "Tamizado", "Destilación"], "La sal se disuelve, las virutas se filtran.", "Ficha 7, p. 41"),
    O("q7-08", "t1", "¿Qué método se usa en el reciclaje de basura para separar metales con hierro de otros residuos?", ["La imantación", "La destilación", "La cromatografía", "La cristalización"], "Un electroimán atrae el hierro y el acero.", "Ficha 7, p. 41"),
    VF("q7-09", "t1", "La imantación sirve para separar cualquier metal de una mezcla.", false, "Falso. Solo atrae materiales ferromagnéticos, como el hierro, el níquel y el cobalto.", "Ficha 7, p. 41"),
    VF("q7-10", "t1", "Una aguja perdida en un pajar se puede encontrar con un imán.", true, "Verdadero. La aguja es de acero, que es atraído por el imán.", "Ficha 7, p. 44"),

    /* t2 · Cristalización, sublimación, extracción */
    O("q7-11", "t2", "¿En qué consiste la cristalización?", ["Separar un sólido disuelto concentrando la disolución hasta que se forman cristales","Separar dos líquidos mezclados por su temperatura de ebullición","Separar un gas de un sólido mediante un filtro de papel","Pasar un sólido directamente a gas sin que se vuelva líquido"], "Se usa, por ejemplo, en la industria azucarera y en las salinas.", "Ficha 7, p. 41"),
    O("q7-12", "t2", "¿Cómo se obtiene la sal del agua de mar?", ["Por evaporación y cristalización", "Por imantación", "Por tamizado", "Por cromatografía"], "Al evaporarse el agua, la sal se acumula y cristaliza.", "Ficha 7, p. 44"),
    O("q7-13", "t2", "¿Qué método separa hielo seco (CO₂ sólido) de tierra?", ["La sublimación", "La filtración", "La decantación", "La destilación"], "El hielo seco pasa directo de sólido a gas.", "Ficha 7, p. 44"),
    O("q7-14", "t2", "El yodo es un sólido que se separa de otros sólidos por...", ["Sublimación, porque pasa de sólido a gas","Imantación","Filtración","Decantación"], "Al calentar, el yodo pasa de sólido a gas sin volverse líquido: sublima, y así se separa de otros sólidos.", "Ficha 7, p. 45"),
    O("q7-15", "t2", "En el agua de jamaica, ¿qué técnica se usa en el paso en que el agua extrae componentes de la flor?", ["La extracción sólido-líquido", "La destilación", "La centrifugación", "La sublimación"], "Se trata un sólido con un disolvente que disuelve preferentemente uno o varios componentes.", "Ficha 7, p. 43"),
    O("q7-16", "t2", "¿Qué método usas al preparar un café o un té?", ["La extracción sólido-líquido", "La destilación", "La imantación", "La sublimación"], "El agua caliente extrae sustancias del café o de las hojas.", "Ficha 7, p. 46"),
    VF("q7-17", "t2", "La extracción sólido-líquido sirve para preparar tés y extraer esencias y perfumes.", true, "Verdadero. La extracción sólido-líquido se usa para preparar tés y para extraer esencias y perfumes de las plantas.", "Ficha 7, p. 43"),
    O("q7-18", "t2", "En el agua de jamaica, ¿qué método separa la flor del extracto líquido?", ["La filtración con un colador","La imantación","La destilación","La sublimación"], "El colador es una filtración: retiene la flor de jamaica (sólido) y deja pasar el líquido.", "Ficha 7, p. 40"),

    /* t3 · Decantación y destilación */
    O("q7-19", "t3", "¿Cómo se separa el agua del aceite?", ["Por decantación, con un embudo de separación", "Por filtración", "Por imantación", "Por cromatografía"], "Son líquidos que no se mezclan y tienen distinta densidad.", "Ficha 7, p. 42"),
    O("q7-20", "t3", "En una mezcla de agua y aceite, ¿cuál queda arriba?", ["El aceite, porque es menos denso","El agua","Ninguno","Ambos están mezclados"], "El aceite es menos denso que el agua y no se mezcla con ella, por eso queda arriba.", "Ficha 7, p. 42"),
    O("q7-21", "t3", "¿Qué método se usa para separar el sulfuro de hierro del agua, dejando que el sólido se deposite?", ["La decantación", "La destilación", "La cromatografía", "La sublimación"], "Se vierte con cuidado el líquido sobrenadante.", "Ficha 7, p. 43"),
    O("q7-22", "t3", "¿Cómo se separan agua y alcohol, que son solubles entre sí?", ["Por destilación, aprovechando su diferente temperatura de ebullición","Por filtración, con un papel que retiene al alcohol","Por decantación, dejando reposar la mezcla en un vaso","Por imantación, con un imán sobre el recipiente"], "El alcohol hierve primero, y se recupera enfriando el vapor en un refrigerante.", "Ficha 7, p. 42"),
    O("q7-23", "t3", "¿Qué mezcla es el agua con alcohol?", ["Homogénea, de dos líquidos solubles","Heterogénea","Un compuesto","Un elemento"], "El agua y el alcohol son solubles entre sí: no se ven dos fases, así que es una mezcla homogénea.", "Ficha 7, p. 42"),
    O("q7-24", "t3", "¿Qué mezcla es el agua con aceite?", ["Heterogénea, de dos líquidos insolubles","Homogénea","Un compuesto","Un elemento"], "El agua y el aceite no se mezclan: se ven dos fases, así que es una mezcla heterogénea.", "Ficha 7, p. 42"),
    O("q7-25", "t3", "¿Qué se separa en la destilación fraccionada del petróleo?", ["Hidrocarburos con distinta temperatura de ebullición, como gasolina y diésel","Sal y agua, que se separan al hervir el petróleo","Oro y plata, que vienen mezclados con el petróleo crudo","Oxígeno y nitrógeno del aire que se disuelven en el petróleo"], "Se calienta la mezcla y las fracciones se separan a diferentes temperaturas.", "Ficha 7, p. 45"),
    O("q7-26", "t3", "Para separar el oxígeno y el nitrógeno del aire se usa...", ["La destilación (del aire líquido)", "La filtración", "La decantación", "La imantación"], "Cada gas hierve a distinta temperatura.", "Ficha 7, p. 44"),

    /* t4 · Cromatografía, centrifugación */
    O("q7-27", "t4", "¿En qué se basa la cromatografía?", ["En que los componentes se mueven distinto entre una fase móvil y una estacionaria","En el color únicamente, sin importar el papel ni el disolvente","En la masa total de la mezcla que se pone en el papel","En la atracción de un imán sobre los componentes"], "Por ejemplo, el papel filtro (fase estacionaria) y el agua (fase móvil).", "Ficha 7, p. 42"),
    O("q7-28", "t4", "En una cromatografía de papel con colorante, ¿qué ves al final?", ["Bandas de colores separadas, una por cada pigmento","Un solo color que se corre por todo el papel","Cristales blancos que se forman al evaporarse el agua","Burbujas de gas que suben por el papel mojado"], "El agua sube por el papel y arrastra los pigmentos a distintas distancias.", "Ficha 7, p. 43"),
    O("q7-29", "t4", "¿Qué método se usa para separar el plasma de la sangre?", ["La centrifugación", "La filtración", "La destilación", "La sublimación"], "Un giro rápido hace que los componentes más densos se vayan al fondo.", "Ficha 7, p. 44"),
    VF("q7-30", "t4", "La cromatografía sirve para separar mezclas homogéneas, como los pigmentos de un colorante.", true, "Verdadero. Separa componentes disueltos.", "Ficha 7, p. 42"),

    /* t5 · Elegir método */
    ORD("q7-31", "t5", "Ordena los pasos para separar limadura de hierro, yodo, sal y arena:", ["Pasar un imán para quitar el hierro", "Calentar para sublimar el yodo", "Agregar agua para disolver la sal", "Filtrar para separar la arena", "Evaporar el agua para recuperar la sal"], "Primero se aprovecha el magnetismo, luego la sublimación, y después la solubilidad y la filtración.", "Ficha 7, p. 45"),
    O("q7-32", "t5", "Una ensalada tiene exceso de aceite sobre el vinagre. ¿Cómo lo separarías?", ["Por decantación, porque el vinagre es acuoso e insoluble en aceite","Por filtración con papel, porque el aceite se queda en el papel","Por imantación, porque el aceite es atraído por el imán","Por cristalización, evaporando el aceite hasta ver cristales"], "El aceite y el vinagre forman dos capas, y la decantación separa líquidos insolubles de distinta densidad.", "Ficha 7, p. 46"),
    O("q7-33", "t5", "El tratamiento de aguas residuales incluye pasar el agua por capas de arena. ¿Qué método es?", ["La filtración","La destilación","La cromatografía","La sublimación"], "La arena retiene los sólidos y deja pasar el agua: eso es filtración.", "Ficha 7, p. 46"),
    O("q7-34", "t5", "Si dos líquidos solubles tienen distinta temperatura de ebullición, ¿qué método usas?", ["Destilación", "Filtración", "Imantación", "Tamizado"], "Es la propiedad que permite separarlos.", "Ficha 7, p. 46"),
    O("q7-35", "t5", "Si un sólido y un líquido son insolubles, ¿qué método sirve?", ["Filtración (o decantación si el sólido se asienta)","Destilación, calentando el líquido hasta que hierva","Cromatografía, usando papel y un disolvente","Sublimación, calentando el sólido hasta que pase a gas"], "Se basan en que no se disuelven.", "Ficha 7, p. 46"),

    /* refuerzo · verdadero o falso */
    VF("q7-36", "t3", "La destilación separa líquidos solubles por su distinta temperatura de ebullición.", true, "Verdadero. Al calentar, el líquido que hierve a menor temperatura se evapora primero y luego se condensa aparte.", "Ficha 7, p. 42"),
    VF("q7-37", "t1", "El tamizado separa mezclas según la solubilidad de sus componentes.", false, "Falso. Separa por tamaño de partícula.", "Ficha 7, p. 40"),
    VF("q7-38", "t3", "La decantación sirve para separar líquidos solubles de distinta densidad.", false, "Falso. La decantación separa líquidos insolubles de distinta densidad; los solubles se separan por destilación.", "Ficha 7, p. 42"),
    VF("q7-39", "t4", "La cromatografía separa los gases del aire.", false, "Falso. Se usa para separar componentes disueltos, como pigmentos.", "Ficha 7, p. 42")
  ]
});
