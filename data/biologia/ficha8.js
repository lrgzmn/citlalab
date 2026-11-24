/* BIOLOGÍA · 1.º de secundaria
   Ficha 8: Métodos anticonceptivos (pp. 47 a 51)
   Correcciones al libro: el anillo vaginal se coloca en la vagina (no en el cérvix); la ligadura de trompas es salpingoclasia
   (el libro escribe "salpingoplastia"); ningún método quirúrgico es 100 % eficaz (falla < 1 %); no se usa la clasificación
   del DIU como método "de barrera". Cifras de eficacia: Guttmacher Institute y HHS-OPA.
*/
REPASO.agregar({
  materia: 'biologia',
  ficha: { id: 'b8', titulo: 'Ficha 8 · Métodos anticonceptivos', jefe: 'El Mito de la Cigüeña' },
  temas: [
    { id: "t1", nombre: "Qué es un método anticonceptivo" },
    { id: "t2", nombre: "Tipos de métodos" },
    { id: "t3", nombre: "Cómo funciona cada método" },
    { id: "t4", nombre: "Eficacia y protección contra ITS" }
  ],
  preguntas: [

    /* t1 · Qué es */
    O("b8-01", "t1", "¿Qué es un método anticonceptivo?", ["Uno que impide o reduce mucho la posibilidad de fecundación o embarazo", "Un medicamento que cura infecciones", "Una vitamina", "Un método para aumentar la fertilidad"], "Su función es evitar o reducir la posibilidad de embarazo en las relaciones sexuales.", "Ficha 8, p. 47"),
    O("b8-02", "t1", "La adolescencia es el periodo de la vida que...", ["Sigue a la niñez y precede a la juventud", "Sigue a la vejez", "Es antes del nacimiento", "Es después de la juventud"], "Es una etapa de cambios físicos y emocionales entre la niñez y la juventud.", "Ficha 8, p. 47"),
    VF("b8-03", "t1", "Un embarazo en la adolescencia puede poner en riesgo la salud de la madre y la del bebé.", true, "Verdadero. Además influye la madurez emocional y la capacidad económica.", "Ficha 8, p. 47"),
    CMOK("b8-04", "t1", "Para elegir un método anticonceptivo conviene pedir orientación a un médico especialista", "Es correcto: un médico ayuda a elegir el método más conveniente.", "Ficha 8, p. 51"),

    /* t2 · Tipos */
    O("b8-05", "t2", "La vasectomía y la ligadura de trompas son métodos...", ["Definitivos (quirúrgicos)", "Naturales", "De barrera", "De emergencia"], "Son cirugías que evitan el embarazo de manera permanente.", "Ficha 8, p. 48"),
    O("b8-06", "t2", "El condón y el diafragma son métodos...", ["De barrera", "Hormonales", "Quirúrgicos", "Naturales"], "Impiden físicamente que los espermatozoides lleguen al óvulo.", "Ficha 8, p. 48"),
    O("b8-07", "t2", "Las píldoras, los parches y las inyecciones anticonceptivas son métodos...", ["Hormonales", "De barrera", "Definitivos", "Naturales"], "Contienen hormonas que evitan la ovulación.", "Ficha 8, p. 48"),
    O("b8-08", "t2", "El ritmo (calendario o temperatura) y la abstinencia son métodos...", ["Naturales", "Quirúrgicos", "Hormonales", "De barrera"], "Los naturales no usan aparatos ni medicamentos.", "Ficha 8, p. 48"),
    VF("b8-09", "t2", "Los métodos naturales son muy confiables para evitar un embarazo.", false, "Falso. Son poco confiables y no protegen contra las ITS.", "Ficha 8, p. 48"),
    VF("b8-10", "t2", "Los métodos naturales protegen contra las infecciones de transmisión sexual.", false, "Falso. Solo el condón, masculino o femenino, reduce el riesgo.", "Ficha 8, p. 48"),
    CMOK("b8-11", "t2", "El DIU es un dispositivo que se coloca dentro del útero, de cobre o con hormonas, y lo coloca un médico", "Es correcto: lo coloca personal médico y puede ser de cobre o hormonal.", "Ficha 8, p. 50"),

    /* t3 · Cómo funciona */
    O("b8-12", "t3", "La píldora anticonceptiva contiene estrógeno y progesterona. ¿Cómo evita el embarazo?", ["Evita la ovulación", "Elimina los espermatozoides", "Corta las trompas", "Mata las bacterias"], "Al evitar la ovulación, no hay óvulo que fecundar. Debe tomarse todos los días.", "Ficha 8, p. 49"),
    O("b8-13", "t3", "¿Cada cuánto se reemplaza el parche anticonceptivo?", ["Cada semana", "Cada día", "Cada año", "Cada hora"], "El parche se cambia semanalmente.", "Ficha 8, p. 49"),
    O("b8-14", "t3", "La inyección de progesterona se aplica...", ["Cada tres meses", "Todos los días", "Una vez en la vida", "Cada hora"], "Impide la ovulación y se aplica en intervalos de tres meses.", "Ficha 8, p. 49"),
    O("b8-15", "t3", "¿Dónde se coloca el anillo vaginal?", ["En la vagina", "En el estómago", "En el pene", "En el oído"], "El libro dice \"cérvix\", pero el anillo se inserta en la vagina.", "Ficha 8, p. 49"),
    O("b8-16", "t3", "¿Cómo actúa el condón masculino?", ["Impide que los espermatozoides entren en la vagina", "Evita la ovulación", "Elimina los espermatozoides", "Corta las trompas"], "Es una vaina delgada de látex que se coloca antes del coito.", "Ficha 8, p. 50"),
    CM("b8-17", "t3", "Los espermicidas activan los espermatozoides para que lleguen al útero", ["Los espermicidas eliminan o inmovilizan los espermatozoides", "Los espermicidas hacen que el óvulo salga", "Los espermicidas curan infecciones", "Los espermicidas alargan la vida de los espermatozoides"], "Su función es eliminar los espermatozoides.", "Ficha 8, p. 49"),
    O("b8-18", "t3", "¿Qué se corta o liga en la vasectomía?", ["Los conductos deferentes", "Las trompas de Falopio", "Los uréteres", "Los bronquios"], "Así los espermatozoides ya no salen con el semen.", "Ficha 8, p. 50"),
    O("b8-19", "t3", "¿Cómo se llama la cirugía que liga o corta las trompas de Falopio?", ["Salpingoclasia (ligadura de trompas)", "Vasectomía", "Histerectomía", "Cesárea"], "En el libro aparece como \"salpingoplastia\", pero el nombre correcto de la ligadura es salpingoclasia.", "Ficha 8, p. 50"),
    VF("b8-20", "t3", "Las píldoras anticonceptivas deben tomarse todos los días.", true, "Verdadero. Olvidar dosis reduce su eficacia.", "Ficha 8, p. 51"),
    VF("b8-21", "t3", "El parche anticonceptivo es un método permanente.", false, "Falso. Es temporal, se reemplaza cada semana.", "Ficha 8, p. 51"),
    CM("b8-22", "t3", "El condón se puede lavar y reutilizar", ["Es desechable: se usa uno nuevo en cada relación", "Se puede usar varias veces si se lava", "Solo se reutiliza si no se rompió", "Dura una semana"], "El condón es desechable.", "Ficha 8, p. 50"),
    CM("b8-23", "t3", "La píldora del día siguiente es un método para usar siempre", ["Es un método de emergencia, no sustituye a un método habitual", "Es la mejor opción para todos los días", "Previene las ITS", "Es un método natural"], "Se toma lo antes posible tras una relación sin protección o si falló un método, por ejemplo si se rompió el condón.", "Ficha 8, p. 49"),

    /* t4 · Eficacia y ITS */
    O("b8-24", "t4", "¿Qué método previene el embarazo y también reduce el riesgo de infecciones de transmisión sexual?", ["El condón, masculino o femenino", "La píldora", "El parche", "La inyección"], "Es el único que cumple ambas funciones.", "Ficha 8, p. 51"),
    VF("b8-25", "t4", "El ritmo previene las infecciones de transmisión sexual.", false, "Falso. El ritmo no protege contra las ITS.", "Ficha 8, p. 51"),
    VF("b8-26", "t4", "Los condones impiden que los espermatozoides lleguen al óvulo.", true, "Verdadero. Funcionan como una barrera.", "Ficha 8, p. 51"),
    O("b8-27", "t4", "Con uso típico, ¿cuál de estos métodos falla menos?", ["El implante subdérmico (menos de 1 embarazo por cada 100 mujeres al año)", "El condón masculino (13 por cada 100)", "La píldora (7 por cada 100)", "Los espermicidas (hasta 28 por cada 100)"], "Los métodos de larga duración, como el implante, fallan menos porque no dependen de recordarlos cada vez. Cifras de Guttmacher y HHS-OPA.", "Ficha 8, p. 49"),
    VF("b8-28", "t4", "Con uso típico, el condón masculino falla más que la píldora.", true, "Verdadero. Con uso típico, 13 de cada 100 mujeres se embarazan en un año con condón masculino, y 7 de cada 100 con la píldora. Con uso perfecto, el condón falla alrededor de 2 de cada 100.", "Ficha 8, p. 50"),
    VF("b8-29", "t4", "Los métodos quirúrgicos fallan en menos de 1 de cada 100 casos, pero no son 100 % eficaces.", true, "Verdadero. El libro dice 100 %, pero las fuentes indican una falla muy baja, no nula. Solo la abstinencia evita el embarazo por completo.", "Ficha 8, p. 51"),
    O("b8-30", "t4", "La eficacia del condón depende de...", ["Usarlo correctamente, que esté en buen estado y retirarlo bien", "Usarlo dos veces", "Guardarlo al sol", "Usarlo sin revisar la fecha"], "Un uso correcto y constante es la clave.", "Ficha 9, p. 53")
  ]
});
