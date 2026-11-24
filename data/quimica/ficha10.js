/* QUÍMICA · 3.º de secundaria
   Ficha 10: Productos y procesos químicos y su impacto (pp. 57 a 61)
   Cifras de energía (gráfico de la p. 59) de la Agencia Internacional de Energía para 2019: petróleo 30.9 %, carbón 26.8 %, gas natural 23.2 %,
   biocombustibles y residuos 9.4 %, nuclear 5.0 %, hidráulica 2.5 %, otras 2.2 % (suma 100 %). Combustibles fósiles: 80.9 %.
   Se omite el dato de que los mayas desarrollaron la sal solar "hace 2 100 años" (sin fuente verificada), los países de reservas de petróleo
   que no son Venezuela ni Arabia Saudita, y las preguntas de opinión.
*/
REPASO.agregar({
  materia: 'quimica',
  ficha: { id: 'q10', titulo: 'Ficha 10 · Productos y procesos químicos y su impacto', jefe: 'El Humo Perpetuo' },
  temas: [
    { id: "t1", nombre: "Producción de sal marina" },
    { id: "t2", nombre: "Fertilizantes y plaguicidas" },
    { id: "t3", nombre: "Fuentes de energía y combustibles" },
    { id: "t4", nombre: "Petróleo: materia prima y reservas" },
    { id: "t5", nombre: "Retos y responsabilidad" }
  ],
  preguntas: [

    /* t1 · Sal marina */
    O("q10-01", "t1", "¿Cómo se llama el sistema con el que la Industria Salinera de Yucatán produce sal en Las Coloradas?", ["Sal solar o sal marina", "Minería de subsuelo", "Electrólisis", "Destilación"], "Usa la energía del Sol y el viento para evaporar el agua de mar.", "Ficha 10, p. 58"),
    O("q10-02", "t1", "¿Qué se hace con el agua de mar para obtener sal marina?", ["Se almacena en grandes charcas y se evapora con el Sol y el viento", "Se hierve en grandes ollas", "Se congela", "Se filtra con carbón"], "La concentración sube hasta que el cloruro de sodio cristaliza.", "Ficha 10, p. 58"),
    O("q10-03", "t1", "¿Qué compuesto es el que cristaliza en las salinas?", ["El cloruro de sodio, NaCl", "El carbonato de calcio", "El cloruro de potasio", "El azúcar"], "Es la sal de mesa.", "Ficha 10, p. 58"),
    O("q10-04", "t1", "¿Qué tratamiento se da a los cristales para obtener sal de mesa?", ["Lavado, centrifugación, secado, refinado, cribado, adición de otros compuestos y envasado", "Ninguno: se vende tal cual", "Solo se tritura", "Se quema"], "La sal de mesa es ideal para la industria alimenticia y el consumo humano.", "Ficha 10, p. 58"),
    O("q10-05", "t1", "¿Qué impacto ambiental puede tener la industria salinera en Río Lagartos?", ["Cambios de salinidad del agua y del suelo que afectan a especies como el flamenco rosado", "Aumenta la lluvia", "Disminuye la salinidad", "No tiene ningún impacto"], "Se vierten los \"amargos\" de la industria en cuerpos de agua.", "Ficha 10, p. 58"),
    O("q10-06", "t1", "¿Para qué se usa la sal de grano común, sin tratamiento adicional?", ["Para tratar aguas que no requieren gran pureza y curtir pieles", "Para espolvorear alimentos", "Para fabricar medicamentos", "Para inyectables"], "La sal de mesa requiere más pureza.", "Ficha 10, p. 58"),

    /* t2 · Fertilizantes y plaguicidas */
    O("q10-07", "t2", "¿Qué tres nutrientes principales proporcionan los fertilizantes a las plantas?", ["Nitrógeno, fósforo y potasio", "Hierro, cobre y zinc", "Oxígeno, hidrógeno y carbono", "Sodio, cloro y calcio"], "Son el N, P y K de las etiquetas.", "Ficha 10, p. 58"),
    O("q10-08", "t2", "¿Qué productos protegen a los cultivos de hierbas indeseables?", ["Los herbicidas", "Los fungicidas", "Los insecticidas", "Los fertilizantes"], "El prefijo \"herbi\" viene de hierba.", "Ficha 10, p. 58"),
    O("q10-09", "t2", "¿Qué productos combaten los hongos en los cultivos?", ["Los fungicidas", "Los herbicidas", "Los fertilizantes", "Los insecticidas"], "Fungicida viene de hongo.", "Ficha 10, p. 58"),
    O("q10-10", "t2", "¿Qué productos combaten a insectos como hormigas, gusanos y el picudo del arroz?", ["Los insecticidas", "Los fertilizantes", "Los herbicidas", "Las películas comestibles"], "Insecticida viene de insecto.", "Ficha 10, p. 59"),
    O("q10-11", "t2", "¿Para qué sirven las películas comestibles y biodegradables que se ponen en los frutos tropicales?", ["Para prolongar su vida útil y abaratar los costos de conservación", "Para teñirlos", "Para darles sabor", "Para cambiar su tamaño"], "Es una alternativa a otros materiales.", "Ficha 10, p. 59"),
    O("q10-12", "t2", "¿Qué consecuencias ambientales ha traído el uso excesivo de fertilizantes y plaguicidas?", ["Contaminación de cuerpos de agua cercanos y pérdida de recursos silvestres", "Más lluvia", "Más oxígeno", "Ninguna"], "Escurren a ríos, lagos y mantos acuíferos.", "Ficha 10, p. 59"),
    O("q10-13", "t2", "¿Cuál es un ejemplo de fertilizante natural?", ["Estiércol, rastrojo de cosecha u hojarasca", "Gasolina", "Plástico triturado", "Cloro"], "Aportan nutrientes al suelo.", "Ficha 10, p. 59"),
    O("q10-14", "t2", "¿Cuál es un ejemplo de plaguicida natural?", ["Infusiones de ajo, chile o cebolla", "Cloro", "Gasolina", "Sosa"], "El chile chiltepín también puede servir como insecticida orgánico.", "Ficha 10, p. 59"),
    VF("q10-15", "t2", "Los fertilizantes optimizan el rendimiento de los suelos agrícolas y permiten obtener más alimentos.", true, "Verdadero. Pero su exceso contamina.", "Ficha 10, p. 57"),

    /* t3 · Energía */
    O("q10-16", "t3", "Según el gráfico del consumo mundial de energía en 2019, ¿cuáles fueron las tres fuentes principales?", ["Petróleo, carbón y gas natural", "Hidráulica, nuclear y solar", "Biomasa, viento y carbón", "Gas natural, nuclear y viento"], "Se llaman combustibles fósiles.", "Ficha 10, p. 59"),
    O("q10-17", "t3", "¿Qué porcentaje aproximado del consumo mundial de energía de 2019 lo aportaron los combustibles fósiles (petróleo 30.9 %, carbón 26.8 %, gas 23.2 %)?", ["Alrededor de 81 %", "Alrededor de 31 %", "Alrededor de 50 %", "Alrededor de 10 %"], "30.9 + 26.8 + 23.2 = 80.9 %.", "Ficha 10, p. 59"),
    O("q10-18", "t3", "¿Qué es un combustible?", ["Una sustancia que reacciona con el oxígeno atmosférico liberando energía en forma de calor", "Una sustancia que se disuelve", "Una sustancia sin energía", "Un mineral"], "Es una reacción de combustión.", "Ficha 10, p. 59"),
    O("q10-19", "t3", "¿Qué es la energía primaria?", ["Las fuentes de energía disponibles en la naturaleza antes de ser convertidas o transformadas", "La energía de la electricidad en casa", "La energía de la comida", "La energía del Sol solamente"], "Por ejemplo, petróleo, carbón o gas natural.", "Ficha 10, p. 59"),
    O("q10-20", "t3", "¿Qué inconvenientes tienen los combustibles fósiles?", ["Son recursos no renovables y al quemarse generan gases contaminantes", "Son renovables", "No producen energía", "No contaminan"], "Degradan el aire, el suelo y el agua.", "Ficha 10, p. 59"),
    VF("q10-21", "t3", "El petróleo, el carbón y el gas natural son recursos renovables.", false, "Falso. Se formaron en millones de años y se consumen más rápido de lo que se forman.", "Ficha 10, p. 59"),
    O("q10-22", "t3", "¿Qué energía puede obtenerse al quemar un combustible fósil?", ["Térmica, mecánica o eléctrica", "Solo sonora", "Solo magnética", "Ninguna"], "Por ejemplo, la estufa, el motor de un auto y las centrales eléctricas.", "Ficha 10, p. 59"),

    /* t4 · Petróleo */
    O("q10-23", "t4", "¿Cuál es la fuente de materia prima más usada para fabricar productos químicos?", ["El petróleo", "El agua", "El carbón de leña", "La madera"], "También es la principal fuente de energía.", "Ficha 10, p. 60"),
    O("q10-24", "t4", "En el mapa de reservas probadas de petróleo (2017), ¿qué países tienen las mayores reservas?", ["Venezuela y Arabia Saudita", "México y Chile", "Japón y Corea", "España y Portugal"], "Las reservas no están distribuidas de forma equitativa.", "Ficha 10, p. 60"),
    O("q10-25", "t4", "¿Qué son las reservas probadas de petróleo?", ["Cantidades de petróleo con 90 % o más de probabilidad de extraerse con la tecnología actual", "Petróleo que ya se extrajo", "Petróleo que no existe", "Cualquier cantidad de petróleo"], "Se determinan con datos geológicos y de ingeniería.", "Ficha 10, p. 60"),
    VF("q10-26", "t4", "Las reservas de petróleo están distribuidas de forma equitativa entre todos los países.", false, "Falso. Se concentran en unos pocos países, lo que puede generar tensiones internacionales.", "Ficha 10, p. 60"),
    O("q10-27", "t4", "Si el petróleo escaseara mucho, ¿para qué convendría reservarlo principalmente?", ["Como materia prima para fabricar medicamentos y otros materiales, porque hay alternativas de energía renovable", "Para quemarlo en autos", "Para encender focos", "Para calentar casas"], "La energía se puede obtener del Sol, del viento o del agua, pero las moléculas de los medicamentos requieren materia prima.", "Ficha 10, p. 61"),
    O("q10-28", "t4", "¿Qué material de una mochila suele provenir del petróleo?", ["Un balón de futbol sintético", "Las hojas de un cuaderno de papel", "Una camisa de algodón", "Una hebilla de metal"], "Los plásticos, las fibras sintéticas y el hule sintético se derivan del petróleo.", "Ficha 10, p. 60"),

    /* t5 · Retos */
    O("q10-29", "t5", "¿Cuál es el gran reto de la industria química?", ["Hacer producciones menos agresivas con el ambiente y usar materias primas menos dependientes de los combustibles fósiles", "Producir más sin cuidar nada", "Dejar de producir todo", "Producir solo plásticos"], "Incluye usar materias primas recicladas.", "Ficha 10, p. 61"),
    O("q10-30", "t5", "¿Qué hábitos ayudan a manejar mejor los residuos?", ["Separar la basura, reciclar y reutilizar", "Tirar todo junto", "Quemar la basura", "Enterrarla sin separar"], "Evita abandonar residuos en el entorno.", "Ficha 10, p. 61"),
    VF("q10-31", "t5", "Los productos químicos tienen beneficios, como medicamentos, alimentos y energía, y también riesgos para el ambiente.", true, "Verdadero. Hay que valorar ambos y usarlos de forma responsable.", "Ficha 10, p. 61"),
    VF("q10-32", "t5", "Los medicamentos son un ejemplo de producto químico que ayuda a combatir enfermedades.", true, "Verdadero.", "Ficha 10, p. 57"),

    /* refuerzo · verdadero o falso */
    VF("q10-33", "t3", "El gas natural es un combustible fósil.", true, "Verdadero.", "Ficha 10, p. 59"),
    VF("q10-34", "t2", "Los fertilizantes solo tienen beneficios y ningún riesgo ambiental.", false, "Falso. Pueden contaminar cuerpos de agua.", "Ficha 10, p. 59"),
    VF("q10-35", "t1", "La sal marina se obtiene evaporando agua de mar.", true, "Verdadero.", "Ficha 10, p. 58")
  ]
});
