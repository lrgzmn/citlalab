/* BIOLOGÍA · 1.º de secundaria
   Ficha 2: Neurotransmisores y receptores del sistema nervioso (pp. 14 a 18)
   Se omitió del libro: la fila del páncreas (describe las suprarrenales), la serotonina "aumenta con proteínas" y
   "la noradrenalina produce movimiento y autoestima" (no verificados). Ver registro de verificación.
*/
REPASO.agregar({
  materia: 'biologia',
  ficha: { id: 'b2', titulo: 'Ficha 2 · Neurotransmisores y sistema endocrino', jefe: 'El Mensajero Químico' },
  temas: [
    { id: "t1", nombre: "Neurotransmisores", icono: "microscopio" },
    { id: "t2", nombre: "Hormonas y sistema endocrino", icono: "gota" },
    { id: "t3", nombre: "Las glándulas y su función" },
    { id: "t4", nombre: "Nervioso y endocrino trabajan juntos" }
  ],
  preguntas: [

    /* t1 · Neurotransmisores */
    O("b2-01", "t1", "¿Cómo actúan los neurotransmisores?", ["Rápido y con efectos de corta duración", "Lento y con efectos muy duraderos", "Solo viajando por la sangre", "Sin unirse a ningún receptor"], "Los neurotransmisores cruzan la sinapsis, actúan con rapidez y sus efectos duran poco.", "Ficha 2, p. 14"),
    VF("b2-02", "t1", "Un neurotransmisor se une a receptores de la célula que lo recibe para provocar una respuesta.", true, "Verdadero. Cada neurotransmisor encaja en receptores específicos, como una llave en una cerradura.", "Ficha 2, p. 14"),
    O("b2-03", "t1", "¿Qué neurotransmisor activa los músculos en la unión entre la neurona y la fibra muscular?", ["Acetilcolina", "Insulina", "Melatonina", "Testosterona"], "La acetilcolina se libera en la unión neuromuscular y permite que el músculo se contraiga. Insulina, melatonina y testosterona son hormonas.", "Ficha 2, p. 14"),
    O("b2-04", "t1", "El glutamato es el neurotransmisor excitatorio más común. ¿Qué hace un neurotransmisor excitatorio?", ["Aumenta la actividad de la neurona que lo recibe", "Disminuye la actividad de la neurona que lo recibe", "Destruye la neurona", "Produce mielina"], "Excitatorio significa que estimula a la neurona que lo recibe. El GABA es el principal inhibitorio: la calma.", "Ficha 4, p. 24"),
    O("b2-05", "t1", "¿Qué neurotransmisor está relacionado con el estado de ánimo y el sueño?", ["Serotonina", "Insulina", "Tiroxina", "Adrenalina del páncreas"], "La serotonina participa en la regulación del estado de ánimo, el sueño y la atención.", "Ficha 4, p. 24"),
    CM("b2-06", "t1", "La dopamina solo sirve para controlar el movimiento", ["La dopamina también participa en la motivación y en el sistema de recompensa", "La dopamina solo sirve para digerir", "La dopamina es una hormona de la tiroides", "La dopamina no existe en el cerebro"], "La dopamina interviene en el movimiento, pero también en la motivación y en la sensación de recompensa.", "Ficha 4, p. 24"),
    CMOK("b2-07", "t1", "Los neurotransmisores los libera una neurona y se unen a receptores de otra célula", "Es correcto: así se comunican las neuronas con otras neuronas, músculos o glándulas.", "Ficha 2, p. 14"),
    VF("b2-08", "t1", "El GABA es un neurotransmisor inhibitorio que ayuda a la relajación y al sueño.", true, "Verdadero. El GABA (ácido gamma-aminobutírico) y la glicina son los inhibitorios más comunes.", "Ficha 4, p. 24"),

    /* t2 · Hormonas y sistema endocrino */
    O("b2-09", "t2", "¿Por dónde viajan las hormonas para llegar a sus órganos?", ["Por la sangre", "Por los nervios", "Por los huesos", "Por el aire de los pulmones"], "Las hormonas usan el torrente sanguíneo como carretera para llegar a los órganos.", "Ficha 2, p. 15"),
    O("b2-10", "t2", "¿Qué es una hormona?", ["Un mensajero químico producido por una glándula", "Una célula del sistema nervioso", "Un tipo de hueso", "Una parte de la neurona"], "Las hormonas son sustancias que producen las glándulas endocrinas y que actúan sobre otros órganos.", "Ficha 2, p. 15"),
    VF("b2-11", "t2", "Las hormonas viajan por los nervios.", false, "Falso. Las hormonas viajan por la sangre. Por los nervios viaja el impulso nervioso.", "Ficha 2, p. 15"),
    VF("b2-12", "t2", "Las hormonas solo regulan el crecimiento.", false, "Falso. Regulan también el metabolismo, la reproducción, el nivel de azúcar y de calcio en la sangre, entre otras funciones.", "Ficha 2, p. 17"),
    O("b2-13", "t2", "¿Qué sistema desarrolla las características sexuales secundarias en la pubertad?", ["El sistema endocrino, mediante hormonas", "El sistema digestivo", "El sistema óseo", "El sistema respiratorio"], "En la pubertad, las hormonas sexuales producen los cambios del cuerpo.", "Ficha 2, p. 15"),
    ORD("b2-14", "t2", "Ordena el camino de una hormona.", ["Una glándula la produce y la libera", "Viaja por la sangre", "Llega a las células que tienen receptores para ella", "Provoca una respuesta en el órgano"], "La glándula libera la hormona, la sangre la transporta, solo las células con el receptor adecuado la reciben y responden.", "Ficha 2, p. 15"),

    /* t3 · Glándulas */
    O("b2-15", "t3", "¿Qué glándula, ubicada en el cerebro, controla la liberación de hormonas de la hipófisis (pituitaria)?", ["El hipotálamo", "El páncreas", "Los ovarios", "La tiroides"], "El hipotálamo controla la liberación de hormonas de la hipófisis. Los dos están en el cerebro.", "Ficha 2, p. 16"),
    O("b2-16", "t3", "¿Qué hormonas del páncreas regulan el nivel de azúcar (glucosa) en la sangre?", ["Insulina y glucagón", "Testosterona y estrógenos", "Adrenalina y cortisol", "Melatonina y tiroxina"], "La insulina baja la glucosa de la sangre y el glucagón la sube. Adrenalina y cortisol son de las glándulas suprarrenales.", "Ficha 2, p. 16"),
    CM("b2-17", "t3", "El páncreas produce las hormonas del estrés, como la adrenalina y el cortisol", ["Las hormonas del estrés las producen las glándulas suprarrenales; el páncreas produce insulina y glucagón", "Las hormonas del estrés las produce el hipotálamo", "Las hormonas del estrés las producen los ovarios", "El páncreas no produce hormonas"], "Corrección importante: la tabla del libro describe al páncreas con funciones que son de las glándulas suprarrenales. El páncreas regula la glucosa con insulina y glucagón.", "Ficha 2, p. 16"),
    O("b2-18", "t3", "¿Qué hacen las hormonas de la tiroides?", ["Regulan el metabolismo y el crecimiento", "Regulan el nivel de azúcar en la sangre", "Producen espermatozoides", "Controlan la presión de los ojos"], "La tiroides produce hormonas que regulan el metabolismo y el crecimiento.", "Ficha 2, p. 16"),
    VF("b2-19", "t3", "Los ovarios producen estrógenos y progesterona.", true, "Verdadero. Participan en el desarrollo sexual femenino y en la regulación del ciclo menstrual.", "Ficha 2, p. 16"),
    O("b2-20", "t3", "¿Qué hormona producen los testículos?", ["Testosterona", "Insulina", "Progesterona", "Melatonina"], "Los testículos producen testosterona, que participa en el desarrollo sexual masculino y en la producción de espermatozoides.", "Ficha 2, p. 16"),
    O("b2-21", "t3", "¿Qué regulan las glándulas paratiroides?", ["El calcio", "El azúcar de la sangre", "La presión de los ojos", "El nivel de oxígeno"], "Las paratiroides regulan el metabolismo del calcio con la hormona paratiroidea.", "Ficha 2, p. 16"),
    O("b2-22", "t3", "¿Qué glándula produce melatonina, relacionada con el ciclo de sueño y vigilia?", ["La glándula pineal", "El páncreas", "La tiroides", "Los testículos"], "La glándula pineal produce melatonina, que participa en el ciclo de sueño y vigilia.", "Ficha 2, p. 15"),

    /* t4 · Nervioso y endocrino juntos */
    O("b2-23", "t4", "¿Cuál es la unidad básica del sistema nervioso?", ["La neurona", "El leucocito", "La dendrita", "El estoma"], "La neurona es la célula especializada del sistema nervioso. Las dendritas son solo una parte de ella.", "Ficha 2, p. 18"),
    CM("b2-24", "t4", "El sistema nervioso y el sistema endocrino trabajan por separado", ["Trabajan juntos para regular las funciones del cuerpo", "El endocrino controla al nervioso sin que este participe", "Solo trabajan juntos durante el sueño", "El nervioso reemplaza al endocrino"], "El sistema nervioso usa neurotransmisores e impulsos; el endocrino usa hormonas. Se coordinan entre sí.", "Ficha 2, p. 15"),
    VF("b2-25", "t4", "El hipotálamo y la glándula pituitaria se encuentran en el cerebro.", true, "Verdadero. Son glándulas endocrinas que están en el encéfalo.", "Ficha 2, p. 17"),
    O("b2-26", "t4", "La diabetes ocurre cuando el cuerpo no produce insulina o no puede usarla bien. ¿Qué órgano produce la insulina?", ["El páncreas", "El hígado", "La tiroides", "El hipotálamo"], "La insulina es una hormona del páncreas que ayuda a regular el azúcar en la sangre.", "Ficha 10, p. 62"),
    O("b2-27", "t4", "¿En qué glándula se presenta el bocio?", ["La tiroides", "El páncreas", "Los ovarios", "La pineal"], "El bocio es un aumento de tamaño de la tiroides. Un mal funcionamiento de esta glándula también puede causar hipotiroidismo o hipertiroidismo.", "Ficha 2, p. 17"),
    CMOK("b2-28", "t4", "El estrés y la alimentación pueden influir en la producción de hormonas", "Es correcto: factores externos como el estrés y la alimentación pueden modificar la producción y la liberación de hormonas.", "Ficha 2, p. 17"),
    VF("b2-29", "t4", "Las hormonas actúan de forma más lenta que los neurotransmisores y sus efectos suelen durar más.", true, "Verdadero. Los neurotransmisores cruzan un espacio muy pequeño y actúan en un instante; las hormonas viajan por la sangre y tardan más.", "Ficha 2, p. 14")
  ]
});
