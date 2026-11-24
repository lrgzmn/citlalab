/* BIOLOGÍA · 1.º de secundaria
   Ficha 5: Relaciones personales positivas (pp. 29 a 34)
   Solo se incluyen conceptos y derechos. Se omiten la tabla de posturas conservadora/liberal (opiniones) y las actividades personales.
   Se aclaró: "identidad sexual" del libro se plantea como identidad de género, y la anticoncepción previene el embarazo
   (solo el condón además reduce el riesgo de ITS).
*/
REPASO.agregar({
  materia: 'biologia',
  ficha: { id: 'b5', titulo: 'Ficha 5 · Relaciones personales positivas', jefe: 'El Rumor Sin Fundamento' },
  temas: [
    { id: "t1", nombre: "Sexo y género" },
    { id: "t2", nombre: "Conceptos de la sexualidad" },
    { id: "t3", nombre: "Ejercer la sexualidad con respeto y cuidado" },
    { id: "t4", nombre: "Dimensiones y potencialidades" }
  ],
  preguntas: [

    /* t1 · Sexo y género */
    O("b5-01", "t1", "¿A qué se refiere el sexo en términos científicos?", ["Al conjunto de características biológicas (anatómicas y fisiológicas)", "A las costumbres de una sociedad", "A los gustos personales", "A la forma de vestir"], "El sexo se refiere a las características del cuerpo y a cómo funciona. El género es otro concepto.", "Ficha 5, p. 29"),
    O("b5-02", "t1", "El género es un concepto que se construye...", ["Social y culturalmente", "Solo con los cromosomas", "Solo con las hormonas", "Con la forma del cuerpo"], "El género tiene que ver con características sociales y culturales que se asignan a mujeres y hombres.", "Ficha 5, p. 29"),
    VF("b5-03", "t1", "Las ideas sobre cómo debe comportarse cada género se aprenden y pueden cambiar con el tiempo.", true, "Verdadero. Se transmiten en la familia, la escuela y la cultura, y cambian con las épocas.", "Ficha 5, p. 29"),
    VF("b5-04", "t1", "Sexo y género significan exactamente lo mismo.", false, "Falso. El sexo es un concepto biológico; el género es una construcción social y cultural.", "Ficha 5, p. 29"),
    CM("b5-05", "t1", "Los roles de género vienen de la biología", ["Los roles de género son construidos por la sociedad y la cultura", "Los roles de género se heredan en los genes", "Los roles de género aparecen con las vitaminas", "Los roles de género son iguales en todas las culturas"], "Los roles de género son lo que una sociedad considera apropiado para cada género. Cambian entre culturas y épocas.", "Ficha 5, p. 29"),
    O("b5-06", "t1", "¿Qué cromosoma sexual aporta siempre el óvulo?", ["El X", "El Y", "Puede ser X o Y", "Ninguno"], "El óvulo siempre aporta un cromosoma X; el espermatozoide puede aportar X o Y.", "Ficha 5, p. 30"),
    CMOK("b5-07", "t1", "Los roles de género son conductas y valores que una sociedad considera apropiados para cada género", "Es correcto: esa es la definición de roles de género. Por eso pueden cambiar.", "Ficha 5, p. 29"),

    /* t2 · Conceptos */
    O("b5-08", "t2", "¿Cómo se llama el proceso por el que se crea un nuevo ser humano mediante la fecundación?", ["Reproducción", "Abstinencia", "Anticoncepción", "Género"], "La reproducción es el proceso por el cual se crea un nuevo ser humano a través de la fecundación.", "Ficha 5, p. 29"),
    O("b5-09", "t2", "¿Qué es la abstinencia?", ["La decisión consciente de no tener relaciones sexuales", "Una enfermedad", "Un método que se usa durante la relación", "Una forma de reproducción"], "La abstinencia es una decisión consciente y personal.", "Ficha 5, p. 29"),
    O("b5-10", "t2", "¿Cómo se llama la forma en que una persona se percibe y se identifica en términos de su género?", ["Identidad de género", "Orientación sexual", "Reproducción", "Abstinencia"], "El libro la llama identidad sexual; el término más usado es identidad de género.", "Ficha 5, p. 29"),
    O("b5-11", "t2", "¿Qué es la orientación sexual?", ["La atracción romántica o sexual hacia otras personas", "La forma de vestir", "El conjunto de roles de una sociedad", "El proceso de fecundación"], "La orientación sexual se refiere a hacia quiénes se dirige la atracción.", "Ficha 5, p. 33"),
    VF("b5-12", "t2", "La orientación sexual y la identidad de género son lo mismo.", false, "Falso. La orientación es hacia quién sientes atracción; la identidad es cómo te identificas tú.", "Ficha 5, p. 29"),
    VF("b5-13", "t2", "La anticoncepción consiste en usar métodos para prevenir el embarazo.", true, "Verdadero. Solo el condón, masculino o femenino, además reduce el riesgo de infecciones de transmisión sexual.", "Ficha 5, p. 29"),
    VF("b5-14", "t2", "Todos los métodos anticonceptivos protegen contra las infecciones de transmisión sexual.", false, "Falso. Solo el condón previene a la vez el embarazo y las ITS.", "Ficha 8, p. 51"),
    CM("b5-15", "t2", "La abstinencia es algo que otros le imponen a una persona", ["La abstinencia es una decisión consciente de la persona", "La abstinencia es una obligación de la familia", "La abstinencia es una enfermedad", "La abstinencia es un método quirúrgico"], "La abstinencia es una decisión consciente de no tener relaciones sexuales; nadie debe imponerla ni presionar para lo contrario.", "Ficha 5, p. 29"),

    /* t3 · Ejercer la sexualidad con respeto y cuidado */
    O("b5-16", "t3", "¿Qué significa ejercer la sexualidad de manera responsable?", ["Conocer las consecuencias, beneficios y riesgos", "Hacer lo que dicen los amigos", "No informarse para no tener miedo", "Dejar que otra persona decida"], "La sexualidad responsable implica pleno conocimiento de las consecuencias, los beneficios y los riesgos.", "Ficha 5, p. 30"),
    O("b5-17", "t3", "¿Qué significa que la sexualidad esté libre de coerción?", ["Nadie puede presionarte física o emocionalmente; debe ser voluntaria y de mutuo acuerdo", "Que se puede insistir hasta convencer", "Que solo importa lo que quiere una persona", "Que se acepta por miedo a perder la relación"], "Nadie puede presionarte para tener relaciones sexuales. Siempre debe ser voluntaria y de mutuo acuerdo.", "Ficha 5, p. 30"),
    O("b5-18", "t3", "¿Qué implica una sexualidad segura?", ["Cuidarse y cuidar a los demás con higiene, anticonceptivos y prevención de ITS", "Hacerlo sin informarse", "No hablar del tema nunca", "Confiar en que no pasará nada"], "Una sexualidad segura incluye hábitos de higiene, métodos anticonceptivos y prevención de infecciones de transmisión sexual.", "Ficha 5, p. 30"),
    VF("b5-19", "t3", "Nadie tiene derecho a maltratarte, acosarte, abusar de ti ni explotarte física, psicológica o sexualmente.", true, "Verdadero. Tu sexualidad debe estar libre de violencia.", "Ficha 5, p. 30"),
    VF("b5-20", "t3", "Si tu pareja insiste mucho, tienes la obligación de aceptar.", false, "Falso. Siempre tienes derecho a decir no. La insistencia o la amenaza es coerción.", "Ficha 5, p. 30"),
    CM("b5-21", "t3", "Informarme en fuentes confiables solo aumenta mis miedos", ["Informarme en fuentes confiables me ayuda a despejar dudas y evitar miedos", "Informarme es peligroso", "Informarme debe esperar hasta ser adulto", "Informarme es lo mismo que decidir sin pensar"], "Las fuentes confiables, como un médico o un adulto de confianza, ayudan a resolver dudas y a decidir con claridad.", "Ficha 5, p. 30"),
    O("b5-22", "t3", "Si alguien te presiona y no puedes resolverlo solo, ¿qué conviene hacer?", ["Buscar ayuda de un adulto de confianza", "Quedarte callado y aceptar", "Ocultarlo a todos", "Culparte a ti"], "Pedir ayuda es una decisión valiente y protege tu bienestar.", "Ficha 7, p. 45"),
    VF("b5-23", "t3", "Nadie puede discriminarte por tu edad, género, origen, religión, forma de vestir o apariencia.", true, "Verdadero. La sexualidad debe vivirse libre de discriminación.", "Ficha 5, p. 30"),

    /* t4 · Dimensiones y potencialidades */
    O("b5-24", "t4", "¿A qué se relaciona la dimensión biológica de la sexualidad?", ["Al sexo, definido por los cromosomas sexuales y las características del cuerpo", "A las costumbres de la familia", "A la ropa que se usa", "A la religión"], "La dimensión biológica se relaciona con el sexo; la psicosocial, con la conducta y el entorno.", "Ficha 5, p. 30"),
    O("b5-25", "t4", "¿Qué describe la dimensión psicosocial de la sexualidad?", ["La actitud y la conducta de acuerdo con el entorno social y cultural", "Solo los cromosomas", "El color de los ojos", "El tipo de sangre"], "Es lo que aprendes de tu familia, tus maestros y tus compañeros sobre cómo comportarte.", "Ficha 5, p. 30"),
    O("b5-26", "t4", "¿Cuál NO forma parte del sistema de la sexualidad según el libro: género, vínculos afectivos, erotismo y reproductividad?", ["El tipo de sangre", "Los vínculos afectivos", "El género", "La reproductividad"], "El tipo de sangre no es parte de la sexualidad humana.", "Ficha 5, p. 32"),
    O("b5-27", "t4", "Los vínculos afectivos son...", ["Las expresiones de amor, cariño y amistad con amigos, familia o pareja", "El proceso de fecundación", "Las reglas de la escuela", "Los músculos del cuerpo"], "Los vínculos afectivos son los sentimientos y formas de relacionarse con las demás personas.", "Ficha 5, p. 33"),
    O("b5-28", "t4", "¿Qué es la reproductividad?", ["La posibilidad de tener hijos, con la maternidad y la paternidad", "El deseo de ser aceptado", "Una enfermedad", "Un método anticonceptivo"], "La reproductividad es una potencialidad de la sexualidad humana.", "Ficha 5, p. 33"),
    VF("b5-29", "t4", "La sexualidad humana es solo reproducción.", false, "Falso. También incluye género, vínculos afectivos, erotismo y aspectos sociales.", "Ficha 5, p. 33"),
    VF("b5-30", "t4", "La sexualidad forma parte de todos los seres humanos a lo largo de su vida.", true, "Verdadero. Se compone de aspectos biológicos, psicológicos y sociales.", "Ficha 5, p. 32")
  ]
});
