/* BIOLOGÍA · 1.º de secundaria
   Ficha 7: Conocimiento de uno mismo (pp. 41 a 46)
   Solo conceptos, derechos y toma de decisiones. Se omiten las reflexiones y cartas personales (R. L.).
*/
REPASO.agregar({
  materia: 'biologia',
  ficha: { id: 'b7', titulo: 'Ficha 7 · Conocimiento de uno mismo', jefe: 'El Guion Injusto' },
  temas: [
    { id: "t1", nombre: "Igualdad de género y responsabilidad compartida" },
    { id: "t2", nombre: "Situaciones de igualdad en la vida diaria" },
    { id: "t3", nombre: "Principios de autocuidado" },
    { id: "t4", nombre: "Decisiones y embarazo adolescente" }
  ],
  preguntas: [

    /* t1 · Igualdad y responsabilidad compartida */
    O("b7-01", "t1", "¿Qué implica la responsabilidad compartida en la salud sexual y reproductiva?", ["Que mujeres y hombres asuman decisiones responsables e informadas", "Que solo una persona decida y la otra obedezca", "Que nadie se informe", "Que la responsabilidad sea solo de las mujeres"], "La responsabilidad compartida significa que tanto mujeres como hombres toman decisiones responsables e informadas.", "Ficha 7, p. 41"),
    VF("b7-02", "t1", "La igualdad de género busca que hombres y mujeres tengan los mismos derechos, oportunidades y recursos en todos los ámbitos de la vida.", true, "Verdadero. Eso incluye la sexualidad y la reproducción.", "Ficha 7, p. 41"),
    VF("b7-03", "t1", "El trabajo doméstico debe distribuirse entre todas las personas que integran el hogar.", true, "Verdadero. No es una tarea exclusiva de las mujeres.", "Ficha 7, p. 44"),
    CM("b7-04", "t1", "Jugar con muñecas es solo para niñas y los juguetes de construcción solo para niños", ["Cualquier niña o niño puede jugar con lo que le guste", "Los juguetes tienen género por naturaleza", "Solo los niños deben aprender a construir", "Los juegos de niñas no sirven para aprender"], "Los juguetes no tienen género. Compartir juegos ayuda a que niñas y niños desarrollen más habilidades.", "Ficha 7, p. 44"),
    CMOK("b7-05", "t1", "Ser líder de un grupo o cuidar a los amigos no depende de ser hombre o mujer", "Es correcto: el liderazgo y el cuidado emocional son capacidades de cualquier persona.", "Ficha 7, p. 44"),
    O("b7-06", "t1", "Según la ficha, ¿cómo se puede resolver el problema público de la responsabilidad compartida en la crianza?", ["Eliminando los roles de género y con políticas públicas que redistribuyan el trabajo de cuidados", "Dejando todo el trabajo a las mujeres", "Dejando que cada familia lo resuelva sin cambiar nada", "Evitando hablar del tema"], "Se requieren cambios culturales (eliminar roles de género) y políticas públicas.", "Ficha 7, p. 44"),

    /* t2 · Situaciones */
    O("b7-07", "t2", "Un padre deja que su hijo salga libremente, pero no permite a su hija tener vida social. ¿Qué respuesta aplica la igualdad?", ["Hablar para que ambos tengan las mismas oportunidades con límites claros para los dos", "Aceptarlo porque así es en muchas familias", "Dar más libertad al hijo y menos a la hija", "Prohibir la vida social a los dos sin explicar"], "Igualdad significa tratar de manera justa a hijos e hijas, con las mismas oportunidades y responsabilidades.", "Ficha 7, p. 41"),
    O("b7-08", "t2", "Una madre le da todas las tareas domésticas a su hija y ninguna a su hijo. ¿Qué solución es más justa?", ["Repartir las tareas de manera equitativa entre todos", "Dejar todo igual", "Que el hijo no haga nunca tareas", "Que la hija haga más porque es mujer"], "La igualdad de género también se practica en casa.", "Ficha 7, p. 42"),
    O("b7-09", "t2", "Un grupo se burla de un compañero por su identidad de género. ¿Qué acción es la más adecuada?", ["Apoyar al compañero, pedir respeto y, si hace falta, avisar a un adulto de confianza", "Unirse a las burlas", "Quedarse callado", "Burlarse también para no quedar mal"], "Respetar y aceptar la diversidad es parte de la igualdad. Si no se resuelve, se pide ayuda a un adulto de confianza.", "Ficha 7, p. 42"),
    O("b7-10", "t2", "Unos amigos hacen comentarios sexistas y degradantes sobre las mujeres. ¿Qué conviene hacer?", ["Decirles que es inapropiado y pedirles que cambien", "Reírte para no pelear", "Compartir los comentarios", "No hacer nada"], "Hablar claro es una forma de respeto. También puedes alejarte si no cambian.", "Ficha 7, p. 43"),
    VF("b7-11", "t2", "Quedarse callado ante comentarios sexistas ayuda a que se detengan.", false, "Falso. El silencio suele hacer que el comportamiento continúe.", "Ficha 7, p. 43"),
    O("b7-12", "t2", "En una relación adolescente, una persona toma casi todas las decisiones y controla a la otra. ¿Qué es lo más sano?", ["Buscar una relación más equitativa y, si no se logra, pedir ayuda a un adulto de confianza", "Aceptar que así deben ser las relaciones", "Obedecer para evitar problemas", "Guardarlo en secreto"], "Una relación sana es equitativa, con decisiones compartidas y sin control.", "Ficha 7, p. 43"),

    /* t3 · Autocuidado */
    O("b7-13", "t3", "\"Tengo ganas de salir con personas que no conozco, pero sé que es peligroso, así que espero a que pase el impulso\". ¿Qué principio de autocuidado es?", ["Sé controlar mis impulsos y cuido mi seguridad", "Valoro y respeto las necesidades de otros", "Si no puedo resolver las cosas, busco ayuda", "Conozco las consecuencias"], "Controlar los impulsos es parte de cuidar tu seguridad.", "Ficha 7, p. 45"),
    O("b7-14", "t3", "\"Avisar dónde estoy hace que mis papás estén más tranquilos\". ¿Qué principio de autocuidado es?", ["Mis decisiones pueden afectar a otros", "Manejo de forma positiva mis emociones", "No obligo a nadie a hacer algo que no quiere", "Valoro mis necesidades"], "Lo que haces o decides influye en las personas que te quieren.", "Ficha 7, p. 45"),
    O("b7-15", "t3", "\"Mi pareja me dice que no quiere y lo respeto, no tengo por qué presionarle\". ¿Qué principio es?", ["Valoro y respeto las necesidades de otros", "Sé controlar mis impulsos", "Mis decisiones pueden afectar a otros", "Conozco las consecuencias"], "Respetar un \"no\" es respetar las necesidades de otra persona.", "Ficha 7, p. 45"),
    O("b7-16", "t3", "\"Noté que aceptó, pero no se sentía cómodo, así que decidí parar\". ¿Qué principio es?", ["No obligo a otra persona a hacer algo que no quiere ni a poner en riesgo su bienestar", "Si no puedo resolver las cosas, busco ayuda", "Manejo mis emociones", "Valoro mis necesidades"], "El consentimiento debe ser claro y libre. Si hay duda o incomodidad, se para.", "Ficha 7, p. 45"),
    O("b7-17", "t3", "\"Sé que no usar el condón adecuadamente puede llevar a una ITS y a un embarazo no deseado\". ¿Qué principio es?", ["Conozco las consecuencias de las decisiones que tomo", "Mis decisiones pueden afectar a otros", "Valoro mis necesidades", "No permito que alguien ponga en riesgo mi bienestar"], "Conocer las consecuencias ayuda a decidir con responsabilidad.", "Ficha 7, p. 45"),
    O("b7-18", "t3", "\"Ya no sé qué hacer y necesito hablar con alguien\". ¿Qué principio es?", ["Si no puedo resolver las cosas, busco ayuda", "Sé controlar mis impulsos", "Conozco las consecuencias", "Manejo de forma positiva mis emociones"], "Pedir ayuda es una decisión responsable.", "Ficha 7, p. 45"),
    O("b7-19", "t3", "\"Si inicio mi vida sexual será porque estoy lista y quiero, no por presión social\". ¿Qué principio es?", ["Valoro mis necesidades, como mi salud mental y mi autocuidado", "Mis decisiones pueden afectar a otros", "Si no puedo resolver las cosas, busco ayuda", "Valoro y respeto las necesidades de otros"], "Es una decisión personal que debe tomarse sin presión.", "Ficha 7, p. 46"),
    VF("b7-20", "t3", "Si alguien amenaza con terminar la relación para que hagas algo que no quieres, es válido decir que no y terminarla.", true, "Verdadero. Nadie debe poner en riesgo tu bienestar ni presionarte.", "Ficha 7, p. 46"),

    /* t4 · Decisiones y embarazo adolescente */
    VF("b7-21", "t4", "Un embarazo en la adolescencia puede afectar la salud, la permanencia en la escuela y el futuro profesional.", true, "Verdadero. También puede afectar los ingresos y las oportunidades presentes y futuras.", "Ficha 7, p. 46"),
    O("b7-22", "t4", "Además del embarazo, ¿qué riesgo implica tener relaciones sexuales sin protección?", ["Una infección de transmisión sexual", "Perder la memoria", "Un resfriado", "Ninguno"], "Sin protección existe riesgo de embarazo y de ITS.", "Ficha 7, p. 46"),
    CM("b7-23", "t4", "Un embarazo adolescente no cambia nada en el proyecto de vida", ["Cambia la salud, los estudios, los ingresos y las oportunidades", "Solo cambia el peso", "Solo cambia el humor", "No cambia nada si hay dinero"], "Un embarazo no planeado cambia casi todos los aspectos de la vida.", "Ficha 7, p. 46"),
    VF("b7-24", "t4", "Si se decide tener relaciones sexuales, deben ser protegidas con algún método anticonceptivo.", true, "Verdadero. Solo el condón también reduce el riesgo de infecciones de transmisión sexual.", "Ficha 9, p. 54"),
    O("b7-25", "t4", "Para tomar una decisión importante, ¿qué conviene hacer?", ["Evaluar pros y contras, buscar información confiable y pensar en las consecuencias", "Decidir rápido sin pensar", "Hacer lo que hacen los demás", "Dejar que otro decida por ti"], "Decidir con información confiable reduce riesgos.", "Ficha 7, p. 46"),
    VF("b7-26", "t4", "Las decisiones sobre prevenir un embarazo solo afectan a la persona que las toma.", false, "Falso. También afectan a la pareja, a la familia y al entorno.", "Ficha 7, p. 45")
  ]
});
