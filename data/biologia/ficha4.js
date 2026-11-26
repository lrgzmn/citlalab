/* BIOLOGÍA · 1.º de secundaria
   Ficha 4: Las adicciones y las conductas saludables (pp. 24 a 28)
   Se omitió del libro: "el tabaco a largo plazo causa depresión del sistema nervioso" (no respaldado) y "dormir mínimo 7 horas"
   (la AASM recomienda 8 a 10 horas a los 13-18 años). La CONADIC se fusionó en la CONASAMA en 2023.
*/
REPASO.agregar({
  materia: 'biologia',
  ficha: { id: 'b4', titulo: 'Ficha 4 · Adicciones y conductas saludables', jefe: 'El Falso Premio' },
  temas: [
    { id: "t1", nombre: "Neurotransmisores y drogas", icono: "microscopio" },
    { id: "t2", nombre: "Efectos de algunas sustancias" },
    { id: "t3", nombre: "Implicaciones en la vida y la sociedad" },
    { id: "t4", nombre: "Prevención y conductas saludables" }
  ],
  preguntas: [

    /* t1 · Neurotransmisores y drogas */
    O("b4-01", "t1", "¿Qué tipo de neurotransmisor es el glutamato?", ["Excitatorio", "Inhibitorio", "Una hormona", "Una vitamina"], "El glutamato es el excitatorio más común: aumenta la actividad de las neuronas, y participa en memoria y aprendizaje.", "Ficha 4, p. 24"),
    O("b4-02", "t1", "¿Qué tipo de neurotransmisor es el GABA?", ["Inhibitorio", "Excitatorio", "Una proteína de los huesos", "Una enzima de la saliva"], "El GABA es inhibitorio: reduce la actividad neuronal y participa en la relajación, el control de la ansiedad y el sueño.", "Ficha 4, p. 24"),
    VF("b4-03", "t1", "Las drogas pueden alterar la producción y la liberación de neurotransmisores.", true, "Verdadero. Eso cambia la comunicación entre neuronas, y con ella el ánimo, la percepción y la memoria.", "Ficha 4, p. 25"),
    O("b4-04", "t1", "¿Qué neurotransmisor, relacionado con la motivación y la recompensa, liberan las drogas en grandes cantidades?", ["Dopamina", "Insulina", "Melatonina", "Testosterona"], "La liberación masiva de dopamina produce euforia y placer, pero el cerebro se adapta.", "Ficha 4, p. 25"),
    ORD("b4-05", "t1", "Ordena cómo puede llegar a formarse una adicción.", ["Se consume una sustancia", "Se libera mucha dopamina y se siente euforia", "El cerebro se adapta", "Se necesita más sustancia para sentir lo mismo", "Aparece la adicción"], "Con el tiempo, el cerebro se adapta y pide más sustancia para obtener el mismo efecto.", "Ficha 4, p. 25"),
    CM("b4-06", "t1", "Las drogas no cambian el funcionamiento del cerebro", ["Las drogas alteran la comunicación entre las neuronas", "Las drogas solo cambian el color de la piel", "Las drogas solo afectan al hígado", "Las drogas fortalecen las neuronas"], "Las sustancias adictivas alteran la comunicación entre neuronas y por eso cambian el ánimo, la percepción y la memoria.", "Ficha 4, p. 25"),
    CMOK("b4-07", "t1", "Con el tiempo el cerebro se adapta y necesita más sustancia para sentir lo mismo", "Es correcto: a eso se le llama tolerancia, y puede llevar a la adicción.", "Ficha 4, p. 25"),
    VF("b4-08", "t1", "Un neurotransmisor inhibitorio aumenta la actividad de las neuronas.", false, "Falso. Inhibitorio significa que disminuye la actividad de la neurona que lo recibe.", "Ficha 4, p. 24"),

    /* t2 · Efectos de algunas sustancias */
    O("b4-09", "t2", "El alcohol es un...", ["Depresor del sistema nervioso central", "Estimulante del sistema nervioso central", "Vitamina del cerebro", "Neurotransmisor natural"], "El alcohol disminuye la actividad del sistema nervioso: baja la coordinación motora, la memoria y el juicio.", "Ficha 4, p. 27"),
    O("b4-10", "t2", "La cocaína es una droga que...", ["Aumenta la actividad del sistema nervioso central", "Disminuye la actividad del sistema nervioso", "Sirve como vitamina", "Solo daña los huesos"], "La cocaína es un estimulante: produce euforia, hiperactividad y puede dañar el corazón.", "Ficha 4, p. 27"),
    O("b4-11", "t2", "La heroína es una droga que...", ["Deprime el sistema nervioso central y produce sedación", "Estimula el sistema nervioso y quita el sueño", "Fortalece el corazón", "Mejora la memoria"], "La heroína es un depresor: produce sedación y somnolencia, y daña el sistema respiratorio.", "Ficha 4, p. 27"),
    VF("b4-12", "t2", "La marihuana mejora la memoria y el juicio de quien la consume.", false, "Falso. La marihuana altera la percepción, la memoria y el juicio; además disminuye la coordinación, la atención y la capacidad de aprendizaje.", "Ficha 4, p. 27"),
    VF("b4-13", "t2", "El alcohol es un estimulante.", false, "Falso. Aunque al principio parezca que da energía, el alcohol deprime el sistema nervioso central.", "Ficha 4, p. 27"),
    O("b4-14", "t2", "¿Qué droga legal se asocia con daño en los pulmones y cáncer de pulmón?", ["El tabaco", "El café", "El agua mineral", "La vitamina C"], "El tabaco daña los pulmones y el sistema respiratorio.", "Ficha 4, p. 27"),
    CM("b4-15", "t2", "El alcohol hace que el cerebro trabaje más rápido", ["El alcohol es un depresor: vuelve más lenta la actividad del cerebro","El alcohol aumenta la memoria y la concentración de quien lo toma","El alcohol mejora la coordinación y los reflejos al conducir","El alcohol aumenta el buen juicio para tomar decisiones"], "El alcohol disminuye la coordinación motora, la memoria y el juicio.", "Ficha 4, p. 27"),
    CMOK("b4-16", "t2", "La nicotina aumenta la dopamina, por eso puede causar dependencia", "Es correcto: la nicotina aumenta la dopamina en los circuitos de recompensa del cerebro, y eso refuerza el deseo de consumirla.", "Ficha 4, p. 27"),
    VF("b4-17", "t2", "Al dejar la nicotina pueden aparecer irritabilidad, ansiedad y problemas para dormir.", true, "Verdadero. Son síntomas de abstinencia de la nicotina.", "Ficha 4, p. 27"),

    /* t3 · Implicaciones */
    O("b4-18", "t3", "El consumo de sustancias provoca conflictos, violencia o separaciones en casa. ¿Qué aspecto afecta?", ["La salud familiar", "Solo la economía", "El clima", "Ninguno"], "Las adicciones afectan las relaciones y la dinámica de la familia.", "Ficha 4, p. 26"),
    VF("b4-19", "t3", "Las adicciones solo afectan a la persona que consume.", false, "Falso. También afectan a la familia, a la economía y a la sociedad.", "Ficha 4, p. 26"),
    O("b4-20", "t3", "Los costos de atención médica y la pérdida de productividad corresponden a qué aspecto de la vida?", ["La economía", "La salud familiar", "Las relaciones de amistad", "La memoria"], "El tratamiento, el ausentismo laboral y la pérdida de productividad son costos económicos.", "Ficha 4, p. 26"),
    VF("b4-21", "t3", "Estigmatizar a una persona con adicción puede dificultar que reciba atención médica y tratamiento.", true, "Verdadero. Por eso es importante tratar con respeto y apoyar que busque ayuda.", "Ficha 4, p. 26"),
    VF("b4-22", "t3", "La CONADIC sigue funcionando hoy como organismo independiente.", false, "Falso. En 2023 se creó la Comisión Nacional de Salud Mental y Adicciones (CONASAMA), que asumió las funciones de la CONADIC. El libro (2023) todavía menciona a la CONADIC.", "Ficha 4, p. 26"),
    CM("b4-23", "t3", "Una adicción se resuelve solo con fuerza de voluntad", ["Se necesita ayuda profesional y de servicios especializados", "Se resuelve esperando sin hacer nada", "Se resuelve consumiendo menos de manera improvisada", "No tiene solución"], "Las adicciones requieren apoyo: prevención, información, ayuda y tratamiento.", "Ficha 4, p. 26"),

    /* t4 · Prevención */
    O("b4-24", "t4", "Si tienes dudas sobre las sustancias adictivas, ¿qué conviene hacer?", ["Hablar con alguien de confianza, como un familiar o un adulto responsable", "Probar para saber cómo se siente", "Preguntar a un desconocido en internet y creerle todo", "No pensar en ello"], "Hablar con personas de confianza ayuda a recibir información y apoyo.", "Ficha 4, p. 28"),
    O("b4-25", "t4", "Un compañero te insiste en probar tabaco para ser parte del grupo. ¿Qué respuesta cuida más tu salud?", ["Decir que no y alejarte de la situación", "Probar solo una vez", "Aceptar para no quedar mal", "Decir que sí, pero a escondidas"], "Decir que no es difícil, pero tu salud es más importante que una presión momentánea.", "Ficha 4, p. 28"),
    O("b4-26", "t4", "Según la Academia Americana de Medicina del Sueño, ¿cuántas horas deben dormir los adolescentes de 13 a 18 años?", ["De 8 a 10 horas", "Menos de 5 horas", "Con 7 horas basta siempre", "Más de 14 horas"], "El libro dice que basta con un mínimo de 7 horas, pero la recomendación para 13 a 18 años es de 8 a 10 horas cada día. De 6 a 12 años, de 9 a 12 horas.", "Ficha 4, p. 28"),
    VF("b4-27", "t4", "Hacer ejercicio, alimentarse bien y dormir lo suficiente son decisiones saludables que ayudan a prevenir.", true, "Verdadero. Un estilo de vida saludable protege el cuerpo y el cerebro.", "Ficha 4, p. 28"),
    VF("b4-28", "t4", "Pedir ayuda profesional cuando alguien tiene una adicción es una señal de debilidad.", false, "Falso. Buscar ayuda es una decisión valiente que mejora las posibilidades de recuperación.", "Ficha 4, p. 28"),
    CMOK("b4-29", "t4", "Conocer los riesgos de las sustancias ayuda a tomar mejores decisiones", "Es correcto: informarte sobre los daños al sistema nervioso y al cuerpo te ayuda a decidir con claridad.", "Ficha 4, p. 28")
  ]
});
