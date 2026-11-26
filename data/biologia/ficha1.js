/* BIOLOGÍA · 1.º de secundaria
   Ficha 1: Función del sistema nervioso (pp. 9 a 13)
   Respuestas derivadas y comparadas con el libro; ver el registro de verificación de Biología.

     O(id, tema, pregunta, [opciones], explicación, página)   -> la PRIMERA opción es la correcta
     VF(id, tema, afirmación, true|false, explicación, página)
     ORD(id, tema, instrucción, [elementos en orden correcto], explicación, página)
     CM(id, tema, lo que dice la mascota (con error), [corrección correcta, otras], explicación, página)
     CMOK(id, tema, lo que dice la mascota (correcto), explicación, página)
*/
REPASO.agregar({
  materia: 'biologia',
  ficha: { id: 'b1', titulo: 'Ficha 1 · Función del sistema nervioso', jefe: 'La Neurona Enredada' },
  temas: [
    { id: "t1", nombre: "Sistema nervioso central y periférico" },
    { id: "t2", nombre: "Encéfalo y médula espinal" },
    { id: "t3", nombre: "La neurona y sus partes", icono: "celula" },
    { id: "t4", nombre: "La sinapsis: cómo se comunican las neuronas", icono: "microscopio" }
  ],
  preguntas: [

    /* t1 · Sistema nervioso central y periférico */
    O("b1-01", "t1", "¿Qué órganos forman el sistema nervioso central?", ["El encéfalo y la médula espinal", "El cerebro y los nervios", "Los nervios y los ganglios", "El cerebelo y los ganglios"], "El sistema nervioso central (SNC) está formado por el encéfalo y la médula espinal. Los nervios y los ganglios son del sistema periférico.", "Ficha 1, p. 11"),
    VF("b1-02", "t1", "Los nervios forman parte del sistema nervioso periférico.", true, "Verdadero. Los nervios salen del cerebro y de la médula espinal y se reparten por todo el cuerpo.", "Ficha 1, p. 11"),
    VF("b1-03", "t1", "Los ganglios son grupos de cuerpos de neuronas que están fuera del sistema nervioso central.", true, "Verdadero. Los ganglios pertenecen al sistema nervioso periférico.", "Ficha 1, p. 10"),
    O("b1-04", "t1", "¿Qué estructuras óseas protegen al sistema nervioso central?", ["El cráneo y la columna vertebral", "Las costillas y el esternón", "Solo el cráneo", "La pelvis y el fémur"], "El encéfalo está dentro del cráneo y la médula espinal va por dentro de la columna vertebral.", "Ficha 1, p. 11"),
    CM("b1-05", "t1", "Los nervios forman parte del sistema nervioso central", ["Los nervios son parte del sistema nervioso periférico", "Los nervios son parte del encéfalo", "Los nervios son parte de la médula espinal", "Los nervios no son parte del sistema nervioso"], "El sistema nervioso central es el encéfalo y la médula espinal. Los nervios llevan información entre ese centro y el resto del cuerpo, y son periféricos.", "Ficha 1, p. 11"),
    VF("b1-06", "t1", "La función del sistema nervioso periférico es llevar información entre el sistema nervioso central y el resto del cuerpo.", true, "Verdadero. Los nervios llevan sensaciones hacia el cerebro y llevan órdenes desde el cerebro hacia músculos y órganos.", "Ficha 1, p. 11"),
    O("b1-07", "t1", "¿Qué parte del sistema nervioso autónomo prepara al cuerpo para reaccionar ante un peligro (luchar o huir)?", ["El simpático", "El parasimpático", "El cerebelo", "La médula espinal"], "El simpático acelera el corazón y prepara al cuerpo para actuar. El parasimpático favorece el reposo y la digestión.", "Ficha 1, p. 10"),

    /* t2 · Encéfalo y médula espinal */
    O("b1-08", "t2", "¿Qué parte del sistema nervioso regula la respiración, los latidos del corazón y la presión arterial?", ["El bulbo raquídeo", "El cerebelo", "El cuerpo calloso", "La corteza cerebral"], "El bulbo raquídeo, junto con la médula espinal, forma un centro vital que regula respiración, latidos y presión arterial.", "Ficha 1, p. 9"),
    O("b1-09", "t2", "¿Qué estructura comunica los dos hemisferios del cerebro?", ["El cuerpo calloso", "El bulbo raquídeo", "El cerebelo", "La médula espinal"], "El cerebro tiene un hemisferio derecho y uno izquierdo que se comunican mediante el cuerpo calloso.", "Ficha 1, p. 9"),
    O("b1-10", "t2", "¿Qué parte del encéfalo ayuda a coordinar los movimientos y el equilibrio?", ["El cerebelo", "El cuerpo calloso", "Los ganglios", "La vaina de mielina"], "El cerebelo está en la parte inferior y posterior del cráneo y coordina el movimiento y el equilibrio.", "Ficha 1, p. 9"),
    VF("b1-11", "t2", "La médula espinal está dentro del cráneo, junto al cerebro.", false, "Falso. La médula espinal recorre el interior de la columna vertebral; el cráneo protege al encéfalo.", "Ficha 1, p. 10"),
    VF("b1-12", "t2", "En la médula espinal la sustancia gris está en el exterior y la blanca en el interior.", false, "Falso. Es al revés: en la médula, la sustancia gris está en el interior y la blanca en el exterior. (En el cerebro la sustancia gris forma la corteza, por fuera.)", "Ficha 1, p. 10"),
    ORD("b1-13", "t2", "Ordena estas estructuras de arriba hacia abajo.", ["Cerebro", "Tallo cerebral", "Médula espinal"], "El cerebro está arriba, el tallo cerebral lo une con la médula y la médula espinal baja por la columna vertebral.", "Ficha 1, p. 9"),
    CM("b1-14", "t2", "La corteza cerebral está formada por sustancia blanca", ["La corteza cerebral está formada por sustancia gris", "La corteza cerebral está formada por hueso", "La corteza cerebral está formada por nervios del cuerpo", "La corteza cerebral no tiene neuronas"], "La superficie del cerebro, la corteza, tiene pliegues formados por sustancia gris, donde están los cuerpos de las neuronas.", "Ficha 1, p. 9"),
    VF("b1-15", "t2", "El encéfalo incluye el cerebro, el cerebelo y el tallo cerebral.", true, "Verdadero. El encéfalo es la parte del sistema nervioso central protegida por el cráneo.", "Ficha 1, p. 9"),

    /* t3 · La neurona y sus partes */
    O("b1-16", "t3", "¿Qué parte de la neurona recibe las señales de otras neuronas?", ["Las dendritas", "El axón", "La vaina de mielina", "El terminal axónico"], "Las dendritas son prolongaciones cortas y ramificadas que reciben señales.", "Ficha 1, p. 12"),
    O("b1-17", "t3", "¿Qué parte de la neurona conduce el impulso alejándolo del cuerpo celular?", ["El axón", "Las dendritas", "El núcleo", "El soma"], "El axón es la prolongación larga por donde viaja el impulso nervioso.", "Ficha 1, p. 12"),
    VF("b1-18", "t3", "La vaina de mielina hace que el impulso nervioso viaje más lento por el axón.", false, "Falso. La mielina envuelve el axón y acelera la conducción del impulso.", "Ficha 1, p. 12"),
    VF("b1-19", "t3", "Los nodos de Ranvier son los espacios sin mielina entre un segmento de la vaina y el siguiente.", true, "Verdadero. El impulso va saltando de nodo en nodo, y por eso viaja rápido.", "Ficha 1, p. 12"),
    O("b1-20", "t3", "¿Dónde está el núcleo de la neurona?", ["En el cuerpo celular (soma)", "En el axón", "En las dendritas", "En la vaina de mielina"], "El soma, o cuerpo celular, contiene el núcleo.", "Ficha 1, p. 12"),
    CM("b1-21", "t3", "El sistema nervioso está formado solamente por neuronas", ["Además de neuronas tiene células gliales, que las apoyan", "Está formado por neuronas y glóbulos rojos", "Está formado por neuronas y músculos", "Está formado por neuronas y huesos"], "Las células que forman el sistema nervioso son las neuronas y las células gliales. Algunas gliales, como las de Schwann, forman la mielina.", "Ficha 1, p. 9"),
    ORD("b1-22", "t3", "Ordena el camino del impulso nervioso dentro de una neurona.", ["Dendritas", "Cuerpo celular (soma)", "Axón", "Terminal axónico"], "El impulso entra por las dendritas, pasa por el cuerpo celular, viaja por el axón y sale por el terminal axónico.", "Ficha 1, p. 12"),
    CMOK("b1-23", "t3", "La neurona es una célula especializada en recibir y transmitir señales", "Es correcto: las neuronas son las células del sistema nervioso que reciben, procesan y transmiten información.", "Ficha 1, p. 12"),

    /* t4 · La sinapsis */
    O("b1-24", "t4", "¿Cómo se llama el punto de comunicación entre dos neuronas?", ["Sinapsis", "Mielina", "Ganglio", "Axón"], "La sinapsis es el espacio de comunicación entre una neurona y la siguiente célula.", "Ficha 1, p. 13"),
    O("b1-25", "t4", "¿Qué son los neurotransmisores?", ["Sustancias químicas que una neurona libera en la sinapsis","Células de apoyo que protegen y alimentan a las neuronas","Prolongaciones largas que conducen el impulso hacia otras células","Fibras musculares que mueven los órganos del cerebro"], "Los neurotransmisores son moléculas que una neurona libera y que se unen a receptores de la célula siguiente.", "Ficha 1, p. 13"),
    ORD("b1-26", "t4", "Ordena los pasos de la comunicación en una sinapsis.", ["Llega el impulso al terminal axónico", "Se liberan neurotransmisores", "Los neurotransmisores cruzan la sinapsis", "Se unen a receptores de la otra célula", "La célula receptora responde"], "El impulso llega, se liberan los neurotransmisores, cruzan el espacio, se unen a los receptores y la célula receptora responde.", "Ficha 1, p. 13"),
    CM("b1-27", "t4", "Los neurotransmisores son células que viajan por la sangre", ["Los neurotransmisores son sustancias químicas que cruzan la sinapsis", "Los neurotransmisores son músculos pequeños", "Los neurotransmisores son parte de la médula espinal", "Los neurotransmisores son hormonas de la tiroides"], "Los neurotransmisores no son células: son moléculas que pasan de una neurona a la siguiente célula por la sinapsis.", "Ficha 1, p. 13"),
    VF("b1-28", "t4", "Luigi Galvani mostró que estimular con luz un nervio hacía contraer un músculo.", false, "Falso. Galvani (1737-1798) usó electricidad: al estimular un nervio con corriente, el músculo se contraía.", "Ficha 1, p. 9"),
    O("b1-29", "t4", "¿Cuáles son los dos tipos de coordinación de las funciones del cuerpo?", ["Nerviosa y endocrina (hormonal)", "Digestiva y respiratoria", "Muscular y ósea", "Circulatoria y excretora"], "El cuerpo coordina sus funciones con el sistema nervioso y con el sistema endocrino, que usa hormonas.", "Ficha 1, p. 12"),
    VF("b1-30", "t4", "La sinapsis solo ocurre entre dos neuronas.", false, "Falso. También hay sinapsis entre una neurona y una fibra muscular (unión neuromuscular) o una glándula.", "Ficha 2, p. 14")
  ]
});
