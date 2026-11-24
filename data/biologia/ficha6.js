/* BIOLOGÍA · 1.º de secundaria
   Ficha 6: Importancia de la igualdad de género (pp. 35 a 40)
   Se omitieron del libro, por falta de respaldo o por estar desactualizados: depresión y ansiedad por género,
   deseo sexual por género, "hora biológica a los 30 años" y altos cargos públicos (ver registro de verificación).
*/
REPASO.agregar({
  materia: 'biologia',
  ficha: { id: 'b6', titulo: 'Ficha 6 · Importancia de la igualdad de género', jefe: 'El Estereotipo Gigante' },
  temas: [
    { id: "t1", nombre: "Mitos y estereotipos" },
    { id: "t2", nombre: "Roles de género y desigualdad" },
    { id: "t3", nombre: "Formas de agresión" },
    { id: "t4", nombre: "Igualdad y responsabilidad compartida" }
  ],
  preguntas: [

    /* t1 · Mitos y estereotipos */
    O("b6-01", "t1", "¿Qué es un estereotipo?", ["Una creencia basada en suposiciones y generalizaciones que se arraiga en la sociedad", "Un dato comprobado por la ciencia", "Una ley", "Una enfermedad"], "Los estereotipos simplifican y generalizan; por eso pueden ser injustos.", "Ficha 6, p. 35"),
    O("b6-02", "t1", "¿Qué es un mito en este contexto?", ["Una idea falsa o exagerada que puede perpetuar creencias perjudiciales", "Un descubrimiento científico", "Una opinión demostrada", "Una enfermedad"], "Un mito es una narración falsa o exagerada. Por eso hay que cuestionarlos.", "Ficha 6, p. 35"),
    VF("b6-03", "t1", "Las mujeres no son aptas para ciertas carreras o trabajos.", false, "Falso. Es un estereotipo sexista sin base científica.", "Ficha 6, p. 35"),
    VF("b6-04", "t1", "La expresión de las emociones es exclusiva de las mujeres.", false, "Falso. Todas las personas sienten emociones; la expresión de las emociones no tiene género.", "Ficha 6, p. 35"),
    VF("b6-05", "t1", "Los estereotipos de género también pueden afectar a los hombres, por ejemplo, en su autoestima.", true, "Verdadero. La idea de que los hombres deben ser altos y fuertes para ser atractivos afecta la autoestima y la salud.", "Ficha 6, p. 35"),
    VF("b6-06", "t1", "A las mujeres no les interesan la ciencia y la tecnología.", false, "Falso. Es un estereotipo que ha llevado a una falta de representación de mujeres en esas áreas.", "Ficha 6, p. 36"),
    VF("b6-07", "t1", "Las labores domésticas son responsabilidad solo de las mujeres.", false, "Falso. Son una responsabilidad que deben compartir todas las personas que habitan una casa.", "Ficha 6, p. 36"),
    CM("b6-08", "t1", "Las mujeres son débiles y necesitan protección constante", ["Ser mujer no significa ser incapaz: puede estudiar, trabajar y decidir igual que cualquier persona", "Las mujeres no pueden trabajar fuera de casa", "Las mujeres nunca pueden decidir por sí mismas", "Las mujeres deben depender de los hombres"], "La idea de que las mujeres son frágiles es un estereotipo. Todas las personas merecen respeto y pueden decidir por sí mismas.", "Ficha 6, p. 35"),
    CM("b6-09", "t1", "A las mujeres no les gusta acceder a cargos importantes porque no son ambiciosas", ["Es un estereotipo: hay barreras y prejuicios que limitan su acceso a cargos de liderazgo", "Las mujeres no pueden dirigir", "A las mujeres solo les interesa la familia", "Los cargos importantes son solo para hombres"], "Decir que no son ambiciosas es un estereotipo. La falta de representación se debe a barreras y prejuicios.", "Ficha 6, p. 36"),

    /* t2 · Roles y desigualdad */
    O("b6-10", "t2", "¿Qué son los roles de género?", ["Funciones, actitudes y actividades que una sociedad espera de hombres y mujeres", "Características del cuerpo", "Enfermedades", "Leyes de la escuela"], "Los roles de género son expectativas sociales, y cambian con la cultura y la época.", "Ficha 6, p. 36"),
    O("b6-11", "t2", "¿Qué efecto puede tener creer que el hogar y el cuidado de los hijos son responsabilidad exclusiva de las mujeres?", ["Las limita en su capacidad de estudiar o trabajar fuera de casa", "Les da más oportunidades", "Hace que todos compartan tareas", "No tiene ningún efecto"], "Ese rol limita las oportunidades de las mujeres y deja todo el trabajo de cuidados en una sola persona.", "Ficha 6, p. 37"),
    VF("b6-12", "t2", "Los roles de género son iguales en todas las épocas y culturas.", false, "Falso. Se aprenden y cambian con el tiempo y entre culturas.", "Ficha 5, p. 29"),
    VF("b6-13", "t2", "El machismo se basa en la creencia de que los hombres son superiores a las mujeres.", true, "Verdadero. Esa creencia puede llevar a la discriminación y a la violencia.", "Ficha 6, p. 37"),
    CM("b6-14", "t2", "El acoso en la calle es normal y las mujeres deben aguantarlo", ["El acoso en la calle no es normal ni aceptable", "El acoso solo ocurre de noche", "El acoso es un halago", "El acoso se arregla con ignorar a todos"], "Nadie debe tolerar comentarios o acercamientos no deseados en espacios públicos.", "Ficha 6, p. 37"),
    O("b6-15", "t2", "Cuando se culpa a una persona por su ropa tras una agresión, ¿qué se está haciendo?", ["Culpar a la víctima en lugar del agresor", "Aplicar la ley", "Cuidar a la persona", "Resolver el problema"], "La responsabilidad de una agresión es siempre de quien agrede, no de la víctima.", "Ficha 6, p. 37"),

    /* t3 · Agresiones */
    O("b6-16", "t3", "Los silbidos, las miradas lascivas y los dibujos ofensivos son conductas...", ["No verbales", "Verbales", "Físicas", "Virtuales"], "Son conductas no verbales de agresión.", "Ficha 6, p. 38"),
    O("b6-17", "t3", "Las ofensas, amenazas, rumores y el bullying son conductas...", ["Verbales", "No verbales", "Físicas", "Virtuales"], "Las agresiones verbales usan palabras para ofender, amenazar o humillar.", "Ficha 6, p. 38"),
    O("b6-18", "t3", "El contacto físico sin consentimiento, los tocamientos y los golpes son conductas...", ["Físicas", "Verbales", "No verbales", "Virtuales"], "Son agresiones físicas.", "Ficha 6, p. 38"),
    O("b6-19", "t3", "Enviar mensajes ofensivos por redes o publicar videos íntimos sin permiso son conductas...", ["Virtuales", "Verbales", "Físicas", "No verbales"], "Son agresiones virtuales, que también dañan.", "Ficha 6, p. 38"),
    VF("b6-20", "t3", "Un piropo que la otra persona no desea puede ser una forma de agresión verbal.", true, "Verdadero. Lo importante es si la otra persona lo desea. Si no lo desea, es una falta de respeto.", "Ficha 6, p. 38"),
    VF("b6-21", "t3", "Si alguien sufre acoso, es por su culpa y por cómo se viste.", false, "Falso. La culpa es siempre de quien acosa.", "Ficha 6, p. 37"),
    O("b6-22", "t3", "Si ves o sufres una agresión y no puedes resolverla solo, ¿qué conviene hacer?", ["Pedir ayuda a un adulto de confianza, como un maestro o un familiar", "Guardar silencio", "Responder con violencia", "Hacer como si no pasara"], "Pedir ayuda a una persona de confianza es una decisión valiente.", "Ficha 7, p. 43"),

    /* t4 · Igualdad y responsabilidad compartida */
    O("b6-23", "t4", "¿Qué significa igualdad de género?", ["Que hombres y mujeres tengan los mismos derechos y las mismas oportunidades", "Que hombres y mujeres sean idénticos", "Que los hombres sean superiores", "Que las mujeres sean superiores"], "Igualdad no significa que seamos idénticos, sino que tengamos los mismos derechos y las mismas oportunidades.", "Ficha 6, p. 40"),
    VF("b6-24", "t4", "Igualdad de género significa que hombres y mujeres sean idénticos en todo.", false, "Falso. Significa los mismos derechos y oportunidades, no que seamos iguales en todo.", "Ficha 6, p. 40"),
    VF("b6-25", "t4", "La responsabilidad compartida en la crianza implica que ambos padres comparten las tareas domésticas y de cuidado de manera equitativa.", true, "Verdadero. Compartir tareas es una forma de igualdad.", "Ficha 6, p. 40"),
    O("b6-26", "t4", "¿Qué actividades pueden promover la igualdad de género?", ["Todas: educación, capacitación a padres y políticas públicas", "Solo la educación", "Solo las leyes", "Ninguna"], "La igualdad se construye con educación, apoyo a las familias y políticas públicas.", "Ficha 6, p. 40"),
    VF("b6-27", "t4", "La igualdad de género y la responsabilidad compartida ayudan a prevenir el embarazo adolescente porque fomentan relaciones saludables y equitativas.", true, "Verdadero. También ayudan a reducir la violencia de género y las desigualdades económicas.", "Ficha 6, p. 40"),
    CMOK("b6-28", "t4", "Que todas las niñas y adolescentes tengan oportunidad de estudiar es una acción por la igualdad de género", "Es correcto: estudiar, erradicar la violencia y garantizar servicios de salud son acciones concretas por la igualdad.", "Ficha 6, p. 39"),
    VF("b6-29", "t4", "Las leyes establecen que mujeres y hombres tienen los mismos derechos y deberes.", true, "Verdadero. Por eso merecemos un trato igualitario.", "Ficha 6, p. 36")
  ]
});
