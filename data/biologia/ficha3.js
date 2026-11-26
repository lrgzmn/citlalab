/* BIOLOGÍA · 1.º de secundaria
   Ficha 3: Las adicciones y sus implicaciones (pp. 19 a 23)
   Corrección al libro: el libro dice que el cerebro "termina de formarse a los 20 años"; las fuentes (NIDA) dicen que
   el juicio y la toma de decisiones siguen madurando hasta mediados de los 20. Se omiten las actividades personales.
*/
REPASO.agregar({
  materia: 'biologia',
  ficha: { id: 'b3', titulo: 'Ficha 3 · Las adicciones y sus implicaciones', jefe: 'El Humo Tramposo' },
  temas: [
    { id: "t1", nombre: "Hábito, dependencia y adicción" },
    { id: "t2", nombre: "Por qué se llega a una adicción" },
    { id: "t3", nombre: "Consecuencias de las adicciones" },
    { id: "t4", nombre: "El cerebro adolescente y las drogas", icono: "celula" }
  ],
  preguntas: [

    /* t1 · Hábito, dependencia y adicción */
    O("b3-01", "t1", "¿Cómo se llama el modo de proceder que se adquiere por repetición de actos?", ["Hábito", "Placer", "Tolerancia", "Cirrosis"], "Un hábito se adquiere repitiendo una conducta. No todos los hábitos son dañinos.", "Ficha 3, p. 19"),
    O("b3-02", "t1", "¿Qué es la dependencia?", ["La necesidad compulsiva de una sustancia para sentir sus efectos o calmar el malestar de no tenerla","Dejar de consumir una sustancia por decisión propia y sin ningún malestar","Un hábito saludable que se repite todos los días, como lavarse las manos","La capacidad de cuidar de otra persona y sentirse responsable de ella"], "La dependencia es la necesidad compulsiva de una sustancia, como alcohol, tabaco u otras drogas.", "Ficha 3, p. 19"),
    VF("b3-03", "t1", "Todos los hábitos son adicciones.", false, "Falso. Lavarse los dientes o hacer ejercicio son hábitos. Una conducta se vuelve problema cuando se pierde el control.", "Ficha 3, p. 20"),
    VF("b3-04", "t1", "Una conducta se vuelve problemática cuando interfiere con las actividades diarias o con las relaciones con la familia y los amigos.", true, "Verdadero. Esa es una señal clave: se descuidan otras cosas importantes y cuesta trabajo dejarla.", "Ficha 3, p. 20"),
    CM("b3-05", "t1", "Una adicción es probar algo una sola vez", ["Una adicción es una dependencia de sustancias o actividades nocivas para la salud o el equilibrio psíquico","Una adicción es un hábito que ayuda a la salud y al equilibrio emocional","Una adicción es el placer pasajero que se siente al comer algo rico","Una adicción solo existe con las drogas ilegales, nunca con otras actividades"], "Probar algo una vez no es adicción, aunque sí puede ser un riesgo. La adicción implica dependencia.", "Ficha 3, p. 20"),
    VF("b3-06", "t1", "Apostar dinero en juegos también puede convertirse en una adicción.", true, "Verdadero. Las adicciones no son solo de sustancias: también pueden ser conductas, como las apuestas.", "Ficha 3, p. 20"),

    /* t2 · Causas */
    O("b3-07", "t2", "Una persona copia lo que hace otra y adopta sus gustos sin saber las consecuencias. ¿Qué causa de adicción es?", ["Imitación social", "Presión social", "Manipulación", "Aceptación"], "En la imitación social se copia lo que hacen otras personas sin conocer las consecuencias.", "Ficha 3, p. 23"),
    O("b3-08", "t2", "Un grupo insiste en que hagas algo dañino para ser parte de él. ¿Qué causa de adicción es?", ["Presión social", "Imitación social", "Manipulación", "Aceptación"], "En la presión social otras personas insisten con el pretexto de pertenecer a un grupo.", "Ficha 3, p. 23"),
    O("b3-09", "t2", "Un anuncio presenta una sustancia dañina como símbolo de éxito y diversión. ¿Qué causa de adicción es?", ["Manipulación de los medios y la publicidad", "Presión social", "Imitación social", "Un hábito saludable"], "Los medios y la publicidad pueden presentar ideas falsas sobre productos que en realidad dañan la salud.", "Ficha 3, p. 23"),
    O("b3-10", "t2", "Alguien cree que consumir algo lo hará más atractivo y lo hará encajar en un grupo, aunque nadie lo presione. ¿Qué causa es?", ["Aceptación", "Presión social", "Manipulación", "Tolerancia"], "Aquí nadie lo obliga: la persona cree que así será aceptada por el grupo.", "Ficha 3, p. 23"),
    VF("b3-11", "t2", "La publicidad de productos adictivos legales suele asociarlos con éxito, diversión y placer.", true, "Verdadero. Por eso conviene pensar de manera informada los efectos reales de esos productos.", "Ficha 3, p. 21"),
    CM("b3-12", "t2", "Si todos mis amigos lo hacen, no me puede hacer daño", ["Que muchas personas lo hagan no cambia el daño que causa la sustancia","Si lo hacen mis amigos, el cuerpo se protege solo del daño","El daño depende solo de la edad que tengan mis amigos","Si es popular entre los jóvenes, entonces es una sustancia segura"], "El efecto de una sustancia en el cuerpo no depende de cuántas personas la usen.", "Ficha 3, p. 23"),
    CMOK("b3-13", "t2", "Decir que no ante una presión negativa es una decisión que cuida mi salud", "Es correcto: decir no a presiones que ponen en riesgo tu salud es una decisión valiente.", "Ficha 4, p. 28"),

    /* t3 · Consecuencias */
    O("b3-14", "t3", "¿Qué enfermedad es la inflamación de los bronquios, con tos constante y exceso de moco?", ["Bronquitis", "Enfisema", "Cirrosis", "Diabetes"], "La bronquitis es la inflamación de los bronquios. Es una consecuencia frecuente del tabaco.", "Ficha 3, p. 23"),
    O("b3-15", "t3", "¿Qué consecuencia del tabaco daña las paredes de los alvéolos y quita elasticidad a los pulmones?", ["Enfisema", "Cirrosis", "Bronquitis aguda", "Tolerancia"], "En el enfisema se dañan los alvéolos, por lo que cuesta más respirar.", "Ficha 3, p. 23"),
    O("b3-16", "t3", "¿Qué órgano daña la cirrosis causada por el consumo excesivo de alcohol?", ["El hígado", "Los pulmones", "El corazón", "El estómago"], "La cirrosis es un daño grave del hígado, que deja de funcionar bien.", "Ficha 3, p. 23"),
    O("b3-17", "t3", "¿Qué es la tolerancia a una sustancia?", ["Necesitar una dosis mayor para sentir el mismo efecto", "Poder dejar la sustancia sin molestias", "Que el cuerpo se vuelve inmune al daño", "Que la sustancia deja de afectar al hígado"], "Con la tolerancia se requiere más cantidad para el mismo efecto, y eso aumenta el riesgo de sobredosis.", "Ficha 3, p. 23"),
    VF("b3-18", "t3", "Con la tolerancia, cada vez se necesita una dosis menor para sentir el mismo efecto.", false, "Falso. Es al revés: cada vez se necesita una dosis mayor.", "Ficha 3, p. 23"),
    VF("b3-19", "t3", "El tabaco solo daña los pulmones y no tiene ningún efecto en el corazón.", false, "Falso. El tabaco daña pulmones y vías respiratorias y también el corazón y los vasos sanguíneos; aumenta el riesgo de cáncer y de enfermedades cardiovasculares.", "Ficha 3, p. 23"),
    CM("b3-20", "t3", "La nicotina del tabaco no causa dependencia", ["La nicotina sí causa dependencia", "La nicotina solo causa dependencia en adultos mayores", "La nicotina es una vitamina", "La nicotina solo daña los huesos"], "La nicotina es adictiva: quien deja de consumirla puede sentir irritabilidad, ansiedad y problemas para dormir.", "Ficha 3, p. 23"),

    /* t4 · Cerebro adolescente */
    O("b3-21", "t4", "¿Hasta aproximadamente qué edad sigue madurando el cerebro, sobre todo las partes del juicio y la toma de decisiones?", ["Hasta mediados de los 20 años", "Hasta los 10 años", "Hasta los 15 años", "Ya está completo desde el nacimiento"], "Algunos libros dicen que el cerebro se termina de formar a los 20 años, pero las fuentes actuales (NIDA) indican que el juicio y la toma de decisiones maduran hasta mediados de los 20.", "Ficha 3, p. 21"),
    VF("b3-22", "t4", "Consumir drogas en la adolescencia puede afectar el desarrollo del cerebro, porque todavía está madurando.", true, "Verdadero. Como el cerebro sigue en desarrollo, las drogas tienen más posibilidad de alterar su funcionamiento.", "Ficha 3, p. 21"),
    CM("b3-23", "t4", "A mi edad el cerebro ya está completo, así que las drogas no lo afectan", ["El cerebro adolescente sigue en desarrollo y es más vulnerable a las drogas","A mi edad el cerebro es más fuerte que el de un adulto y resiste mejor","Solo afecta al cerebro de los niños pequeños, no al de los adolescentes","Las drogas no afectan al cerebro a ninguna edad si se usan poco"], "El cerebro sigue madurando durante la adolescencia, por eso el consumo temprano tiene más riesgo.", "Ficha 3, p. 21"),
    O("b3-24", "t4", "¿Qué capacidades del cerebro son de las últimas en madurar?", ["El juicio y la toma de decisiones", "La capacidad de ver colores", "El latido del corazón", "El reflejo de succión"], "Las partes que controlan el juicio y las decisiones maduran hasta los 20 y tantos.", "Ficha 3, p. 21"),
    VF("b3-25", "t4", "Las adicciones alteran el comportamiento y pueden afectar también a la familia de la persona.", true, "Verdadero. Los cambios de carácter y de conducta afectan la salud emocional de la persona y de quienes la rodean.", "Ficha 3, p. 22")
  ]
});
