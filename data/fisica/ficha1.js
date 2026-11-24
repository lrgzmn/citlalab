/* FÍSICA · 2.º de secundaria
   Ficha 1: La física en la vida cotidiana (el pensamiento científico) (pp. 9 a 13)
   Solo conceptos y situaciones con respuesta clara. Se omiten las actividades de respuesta libre (R. L.).
   Se dice "se atribuye a Galileo" el método científico moderno (matiz histórico).
*/
REPASO.agregar({
  materia: 'fisica',
  ficha: { id: 'f1', titulo: 'Ficha 1 · La física en la vida cotidiana (el pensamiento científico)', jefe: 'El Horóscopo Embustero' },
  temas: [
    { id: "t1", nombre: "Pensamiento científico y conocimiento empírico", icono: "bombilla" },
    { id: "t2", nombre: "Características del pensamiento científico" },
    { id: "t3", nombre: "Situaciones de la vida diaria" },
    { id: "t4", nombre: "Personajes y origen del pensamiento científico" }
  ],
  preguntas: [

    /* t1 · Científico y empírico */
    O("f1-01", "t1", "¿Qué actividades forman parte del pensamiento científico?", ["Cuestionar, observar, investigar, experimentar, valorar resultados y concluir", "Memorizar sin preguntar", "Aceptar lo que dicen los demás", "Adivinar el resultado"], "Cada vez que te cuestionas, observas, investigas y concluyes, desarrollas tus habilidades científicas.", "Ficha 1, p. 9"),
    O("f1-02", "t1", "¿Qué es el conocimiento empírico?", ["La información que se obtiene al observar y que depende de la experiencia personal", "Un conocimiento comprobado con experimentos controlados", "Una ley de la física", "Un conocimiento que solo tienen los científicos"], "Se basa en la experiencia y en los sentidos. No se procesa ni se comprueba de forma metódica.", "Ficha 1, p. 10"),
    VF("f1-03", "t1", "El conocimiento empírico es verificable.", false, "Falso. No se puede comprobar de manera sistemática: depende de lo que cada quien vive, por eso es subjetivo.", "Ficha 1, p. 10"),
    VF("f1-04", "t1", "El conocimiento empírico se basa en los sentidos.", true, "Verdadero. Los sentidos son su fuente, y la información no se procesa para explicarla.", "Ficha 1, p. 10"),
    VF("f1-05", "t1", "El conocimiento empírico es intuitivo y no metódico.", true, "Verdadero. Se basa en la percepción personal y en creencias, sin análisis ni pruebas.", "Ficha 1, p. 10"),
    O("f1-06", "t1", "¿Cuál es un ejemplo de conocimiento empírico?", ["Saber qué sabor tiene un alimento o cómo se siente el frío", "Calcular el volumen de un contenedor con una fórmula", "Comprobar una hipótesis con un experimento", "Predecir el clima con un modelo matemático"], "El sabor, el dolor, el frío o las texturas se aprenden con la experiencia.", "Ficha 1, p. 10"),
    CM("f1-07", "t1", "El conocimiento científico es la única forma válida de conocer la realidad", ["Es una forma de conocer la realidad, pero no la única ni la mejor; el conocimiento empírico también es valioso", "Es la única, porque el empírico siempre es falso", "Es la mejor, porque el empírico no sirve", "Solo vale si lo dice un científico famoso"], "El libro aclara que el conocimiento científico no es el único modo de conocer ni el mejor. El empírico no debe menospreciarse.", "Ficha 1, p. 10"),
    VF("f1-08", "t1", "El conocimiento científico es relativamente nuevo si se compara con la historia de la humanidad.", true, "Verdadero. Antes de que existiera la ciencia, las personas decidían con su experiencia y sus creencias.", "Ficha 1, p. 10"),
    VF("f1-09", "t1", "Los campesinos que saben cuándo sembrar y qué plantas son comestibles usan conocimiento empírico.", true, "Verdadero. Gracias a este tipo de conocimiento la humanidad aprendió qué alimentos y qué animales convenían o hacían daño.", "Ficha 1, p. 10"),

    /* t2 · Características (Bunge) */
    O("f1-10", "t2", "Un conocimiento que parte de los hechos de la realidad y vuelve a ellos para confirmar sus afirmaciones es...", ["Fáctico", "Simbólico", "Predictivo", "Abierto"], "Fáctico viene de \"hecho\". La ciencia parte de hechos reales y regresa a ellos.", "Ficha 1, p. 11"),
    O("f1-11", "t2", "Si el pensamiento científico no se queda con las apariencias y va más allá de los hechos, es...", ["Trascendente", "Fáctico", "Útil", "Comunicable"], "Parte de los hechos, pero no se queda en ellos.", "Ficha 1, p. 11"),
    O("f1-12", "t2", "Si la ciencia descompone sus objetos de estudio para conocerlos a fondo, es...", ["Analítica", "Abierta", "Útil", "Simbólica"], "Analizar es descomponer algo en partes para entenderlo mejor.", "Ficha 1, p. 11"),
    O("f1-13", "t2", "El lenguaje científico usa símbolos con significado fijo (como m, kg o s). ¿Qué característica es?", ["Simbólico", "Verificable", "Metódico", "Predictivo"], "Crea su propio lenguaje, con símbolos y reglas.", "Ficha 1, p. 11"),
    O("f1-14", "t2", "Todo lo que produce el pensamiento científico debe someterse a prueba. ¿Qué característica es?", ["Verificable", "Empírico", "Intuitivo", "Subjetivo"], "No debe aceptarse nada que no se adecue a la realidad.", "Ficha 1, p. 12"),
    O("f1-15", "t2", "La ciencia no procede desorganizadamente: planea lo que persigue y cómo obtenerlo. ¿Qué característica es?", ["Metódica", "Abierta", "Útil", "Fáctica"], "Dispone de procedimientos ordenados.", "Ficha 1, p. 12"),
    O("f1-16", "t2", "La ciencia busca las causas de los hechos y los explica con leyes y principios. ¿Qué característica es?", ["Explicativa", "Simbólica", "Comunicable", "Útil"], "No acepta los hechos tal como se dan: investiga por qué son así.", "Ficha 1, p. 12"),
    O("f1-17", "t2", "El conocimiento científico explica los hechos del presente y también anticipa lo que ocurrirá. ¿Qué característica es?", ["Predictiva", "Fáctica", "Analítica", "Simbólica"], "Por ejemplo, el pronóstico del clima.", "Ficha 1, p. 12"),
    CM("f1-18", "t2", "Los conceptos y métodos de la ciencia son definitivos y nunca cambian", ["La ciencia es abierta: sus conceptos, métodos y técnicas cambian constantemente", "Son definitivos desde la Antigüedad", "Solo cambian si un maestro lo ordena", "Nunca se corrigen los errores"], "Una característica del pensamiento científico es ser abierto: se corrige y se actualiza.", "Ficha 1, p. 12"),
    VF("f1-19", "t2", "La ciencia comunica sus datos y reflexiones a quien tenga la cultura para entenderlos.", true, "Verdadero. Es comunicable: no está destinada a un número reducido de personas.", "Ficha 1, p. 12"),
    VF("f1-20", "t2", "Según Mario Bunge, la técnica es ciencia aplicada.", true, "Verdadero. Así lo plantea en el texto citado en la ficha.", "Ficha 1, p. 12"),

    /* t3 · Situaciones */
    VF("f1-21", "t3", "Clasificar diferentes hojas de árboles por su forma es una actividad que promueve el pensamiento científico.", true, "Verdadero. Observar, comparar y clasificar son acciones científicas.", "Ficha 1, p. 9"),
    VF("f1-22", "t3", "Presionar un botón para cambiar de estación en la radio promueve el pensamiento científico.", false, "Falso. Es una acción cotidiana que no implica observar, analizar ni comprobar.", "Ficha 1, p. 9"),
    VF("f1-23", "t3", "Decidir cómo vestirse después de consultar el pronóstico del clima es una decisión con pensamiento científico.", true, "Verdadero. Se basa en un hecho verificable y predictivo.", "Ficha 1, p. 13"),
    VF("f1-24", "t3", "Leer el horóscopo para saber cómo será el día es pensamiento científico.", false, "Falso. La astrología no es una ciencia: sus afirmaciones no se pueden verificar.", "Ficha 1, p. 13"),
    VF("f1-25", "t3", "No pisar las rayas de la banqueta para evitar problemas es una conducta basada en pensamiento científico.", false, "Falso. Es una creencia no verificable: una superstición.", "Ficha 1, p. 13"),
    VF("f1-26", "t3", "Un análisis de sangre y la interpretación de sus resultados requieren pensamiento científico.", true, "Verdadero. Tanto el proceso como la valoración de resultados son científicos.", "Ficha 1, p. 13"),
    VF("f1-27", "t3", "Invertir en un negocio después de analizar a los compradores y hacer pruebas de mercado es un procedimiento metódico.", true, "Verdadero. Se analizó la información y se hicieron pruebas antes de decidir.", "Ficha 1, p. 13"),
    VF("f1-28", "t3", "Jugar \"piedra, papel o tijeras\" para decidir quién paga es un ejemplo de pensamiento científico.", false, "Falso. Los juegos de azar no lo son.", "Ficha 1, p. 13"),
    VF("f1-29", "t3", "Pagar un billete y guardar el cambio sin verificar que sea correcto promueve el pensamiento científico.", false, "Falso. Aquí no se verifica nada. Revisar el cambio sí sería verificable.", "Ficha 1, p. 9"),

    /* t4 · Personajes y origen */
    O("f1-30", "t4", "¿Quién situó al Sol en el centro del Sistema Solar y cambió la idea de que la Tierra era el centro del universo?", ["Nicolás Copérnico", "Galileo Galilei", "René Descartes", "Mario Bunge"], "Copérnico propuso el modelo con el Sol al centro.", "Ficha 1, p. 11"),
    O("f1-31", "t4", "¿Qué método empleó Francis Bacon para conocer la realidad?", ["El inductivo", "El deductivo", "El de la superstición", "Ninguno"], "El método inductivo va de casos particulares a conclusiones generales.", "Ficha 1, p. 11"),
    O("f1-32", "t4", "¿Qué método empleó René Descartes?", ["El deductivo", "El inductivo", "El empírico", "El de azar"], "El método deductivo parte de principios generales para llegar a conclusiones particulares.", "Ficha 1, p. 11"),
    O("f1-33", "t4", "¿A quién se le atribuye haber instituido el método científico moderno, basado en la razón y en la lógica?", ["A Galileo Galilei", "A Demócrito", "A Marie Curie", "A Alfred Nobel"], "Galileo es considerado uno de los fundadores del método científico moderno.", "Ficha 1, p. 11"),
    VF("f1-34", "t4", "Mario Bunge fue un científico y filósofo argentino que escribió más de 40 libros.", true, "Verdadero. Vivió de 1919 a 2020 y escribió también cerca de 500 artículos.", "Ficha 1, p. 11"),
    VF("f1-35", "t4", "El pensamiento científico surgió cuando se empezó a buscar explicaciones de la naturaleza basadas en la razón.", true, "Verdadero. Con el tiempo se desarrollaron métodos para comprobar esas explicaciones.", "Ficha 1, p. 11")
  ]
});
