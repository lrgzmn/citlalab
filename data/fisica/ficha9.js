/* FÍSICA · 2.º de secundaria
   Ficha 9: Características y relevancia del modelo de partículas (pp. 52 a 57)
   Correcciones al libro: la densidad se calcula con kg/L (leche 1.03, mercurio 13.6, plomo 11.11, aire 0.0013);
   el volumen de 5.00 kg de hielo (0.92 kg/L) es 5.43 L (el libro escribe 0.092 por error de dedo).
   El aire es una mezcla de gases, no una sustancia pura. Cálculos verificados con Python.
*/
REPASO.agregar({
  materia: 'fisica',
  ficha: { id: 'f9', titulo: 'Ficha 9 · Características y relevancia del modelo de partículas', jefe: 'La Partícula Revoltosa' },
  temas: [
    { id: "t1", nombre: "Postulados del modelo de partículas", icono: "esfera" },
    { id: "t2", nombre: "Estados de agregación" },
    { id: "t3", nombre: "Mezclas espontáneas" },
    { id: "t4", nombre: "Densidad y cálculos", icono: "matraz" }
  ],
  preguntas: [

    /* t1 · Postulados */
    O("f9-01", "t1", "¿Qué dice el modelo de partículas sobre la materia?", ["Está formada por partículas muy pequeñas", "Es continua y sin partes", "Solo está formada por átomos de oro", "Es invisible"], "Es el primero de los postulados del modelo.", "Ficha 9, p. 52"),
    VF("f9-02", "t1", "Todas las partículas de una misma sustancia son iguales.", true, "Verdadero. Por ejemplo, las partículas del agua son todas iguales entre sí.", "Ficha 9, p. 52"),
    VF("f9-03", "t1", "Diferentes sustancias están formadas por partículas distintas.", true, "Verdadero. Las partículas del agua son diferentes de las del plomo.", "Ficha 9, p. 52"),
    VF("f9-04", "t1", "Las partículas están quietas y no interactúan.", false, "Falso. Están en movimiento constante y chocan entre sí y con las paredes del recipiente.", "Ficha 9, p. 53"),
    VF("f9-05", "t1", "La materia tiene masa y volumen, y cada partícula tiene una masa pequeñísima.", true, "Verdadero. Al juntar muchas partículas se logran masas y volúmenes grandes.", "Ficha 9, p. 53"),
    O("f9-06", "t1", "¿Quién propuso que la materia está compuesta por pequeñas partículas indivisibles llamadas átomos?", ["Demócrito", "Dalton", "Bohr", "Einstein"], "Demócrito fue un filósofo griego (c. 460-370 a. n. e.).", "Ficha 9, p. 54"),
    O("f9-07", "t1", "¿Quién reelaboró la idea de Demócrito con base en experimentos y planteó el modelo de partículas?", ["John Dalton (1776-1844)", "Isaac Newton", "Galileo Galilei", "Niels Bohr"], "Dalton explicó los resultados experimentales de sus antecesores.", "Ficha 9, p. 54"),
    VF("f9-08", "t1", "Según Dalton, los átomos pueden crearse o destruirse.", false, "Falso. Para Dalton no pueden ser creados ni destruidos, y son indivisibles. Hoy sabemos que el átomo sí tiene partes.", "Ficha 9, p. 54"),
    O("f9-09", "t1", "Una diferencia entre el modelo de partículas de la ficha y el de Dalton es que el de la ficha...", ["Explica que las partículas se mueven y se acercan o se alejan según el estado","Afirma que los átomos son indivisibles y no tienen partes","Afirma que no existen las mezclas, solo sustancias puras","No habla de partículas, solo de la materia en general"], "Dalton no habló del movimiento ni de la cercanía de las partículas.", "Ficha 9, p. 55"),
    O("f9-10", "t1", "Una similitud entre ambos modelos es que...", ["Las partículas de una sustancia son iguales y distintas de las de otras","Las partículas no se mueven nunca, ni siquiera en un gas","No existen los gases, solo líquidos y sólidos","Las partículas desaparecen al mezclarse con otras sustancias"], "Cada partícula conserva su identidad, incluso en una mezcla.", "Ficha 9, p. 55"),

    /* t2 · Estados */
    O("f9-11", "t2", "¿Cuáles son los tres estados de agregación de la materia?", ["Sólido, líquido y gaseoso", "Frío, tibio y caliente", "Duro, blando y suave", "Metal, plástico y vidrio"], "Son los tres que estudia esta ficha.", "Ficha 9, p. 53"),
    O("f9-12", "t2", "¿Cómo son las partículas de un sólido?", ["Ordenadas, muy juntas y se mueven poco", "Muy separadas y se mueven muy rápido", "Desordenadas y muy lejanas", "No tienen movimiento nunca"], "Por eso los sólidos tienen forma definida.", "Ficha 9, p. 53"),
    O("f9-13", "t2", "¿Cómo son las partículas de un líquido?", ["Sin orden fijo, cercanas y se desplazan con facilidad","Ordenadas y quietas, formando una red fija y rígida","Muy separadas y rapidísimas, chocando con las paredes","No existen partículas en los líquidos, solo materia continua"], "Por eso el líquido adopta la forma del recipiente.", "Ficha 9, p. 53"),
    O("f9-14", "t2", "¿Cómo son las partículas de un gas?", ["Muy separadas, desordenadas y se mueven muy rápido","Ordenadas y muy juntas, sin casi poder moverse","Juntas y quietas, como en una red rígida","Iguales a las de un sólido, solo que más calientes"], "Por eso el gas ocupa todo el espacio disponible del recipiente.", "Ficha 9, p. 53"),
    VF("f9-15", "t2", "Un gas tiene forma definida.", false, "Falso. Ocupa todo el espacio del recipiente que lo contiene.", "Ficha 9, p. 53"),
    VF("f9-16", "t2", "Un sólido tiene forma definida.", true, "Verdadero. Sus partículas están ordenadas y muy juntas.", "Ficha 9, p. 53"),
    VF("f9-17", "t2", "Las partículas de los sólidos se mueven muy rápido.", false, "Falso. En los sólidos se mueven poco. En los gases se mueven muy rápido.", "Ficha 9, p. 56"),
    VF("f9-18", "t2", "Las partículas de los líquidos no chocan entre sí.", false, "Falso. Chocan e interactúan mucho.", "Ficha 9, p. 56"),
    CM("f9-19", "t2", "El color de la partícula determina si una sustancia es sólida, líquida o gaseosa", ["Depende de qué tan rápido se mueven y qué tan juntas están las partículas, no del color","Las partículas rojas siempre forman sólidos, sin importar la temperatura ni la presión","Las partículas azules son siempre gases, aunque se enfríen mucho o se compriman","El color de cada partícula es lo que decide el estado en que se encuentra la sustancia"], "El modelo no atribuye color a las partículas.", "Ficha 9, p. 56"),
    CM("f9-20", "t2", "Al mezclarse, diferentes partículas se convierten en partículas idénticas", ["Cada partícula conserva su identidad aunque esté en una mezcla","Se vuelven idénticas y pierden lo que las distinguía","Desaparecen y solo queda el espacio vacío entre ellas","Se destruyen al chocar y forman una sola sustancia nueva"], "En una mezcla las partículas se acomodan, pero no cambian.", "Ficha 9, p. 55"),
    O("f9-21", "t2", "¿Cuál es un ejemplo de gas a temperatura ambiente?", ["El aire dentro de un tanque de buceo", "El acero", "El mercurio", "La madera"], "El aire es una mezcla de gases (sobre todo nitrógeno y oxígeno).", "Ficha 9, p. 53"),

    /* t3 · Mezclas espontáneas */
    O("f9-22", "t3", "Una gota de tinta en agua se mezcla sola porque...", ["Las partículas del líquido se mueven rápido y chocan muchas veces","El agua es muy pesada y empuja la tinta hacia todos lados","La tinta es magnética y el vaso la atrae hacia el centro","Se calienta el vaso porque la tinta libera mucho calor"], "Tinta y agua son líquidas: sus partículas se mueven y chocan, y se mezclan espontáneamente.", "Ficha 9, p. 54"),
    VF("f9-23", "t3", "El café y la leche se mezclan espontáneamente.", true, "Verdadero. Son líquidos y sus partículas se mueven con facilidad.", "Ficha 9, p. 55"),
    VF("f9-24", "t3", "La harina y el azúcar se mezclan espontáneamente.", false, "Falso. Son sólidos: sus partículas se mueven muy poco y hay que agitarlos para mezclarlos.", "Ficha 9, p. 55"),
    VF("f9-25", "t3", "El agua y el aire se mezclan espontáneamente.", false, "Falso. Las partículas del gas ocupan todo el espacio y el líquido impide la mezcla espontánea.", "Ficha 9, p. 55"),
    O("f9-26", "t3", "Un refresco es un ejemplo de mezcla de...", ["Un líquido con un gas", "Dos sólidos", "Dos gases", "Un sólido con un gas"], "El gas (dióxido de carbono) está disuelto en el agua de sabor.", "Ficha 9, p. 54"),
    O("f9-27", "t3", "Para preparar café se mezclan agua y café molido. ¿Qué tipo de mezcla de estados es?", ["Un líquido con un sólido", "Dos gases", "Un líquido con un gas", "Dos sólidos"], "El agua es líquida y el café molido es sólido.", "Ficha 9, p. 54"),
    O("f9-28", "t3", "La estufa de gas LP mezcla el gas con aire para producir fuego. ¿Qué tipo de mezcla es?", ["De dos gases","De un líquido con un sólido","De dos sólidos","De dos líquidos"], "El gas LP y el aire son gases; al mezclarse forman una mezcla de dos gases que arde en la estufa.", "Ficha 9, p. 54"),
    O("f9-29", "t3", "Para hacer masa de tortillas se mezcla masa de maíz con sal. ¿Qué tipo de mezcla es?", ["De dos sólidos","De dos gases","De un líquido con un gas","De dos líquidos"], "La masa de maíz y la sal son sólidos, así que forman una mezcla de dos sólidos.", "Ficha 9, p. 54"),

    /* t4 · Densidad */
    O("f9-30", "t4", "¿Cómo se define la densidad?", ["Masa dividida entre volumen", "Volumen dividido entre masa", "Masa multiplicada por volumen", "Masa más volumen"], "Densidad = masa ÷ volumen. Para el agua es 1 kg/L.", "Ficha 9, p. 56"),
    O("f9-31", "t4", "¿Cuál es la densidad de 2.06 kg de leche que ocupan 2.00 L?", ["1.03 kg/L","0.97 kg/L","4.12 kg/L","2.06 kg/L"], "Densidad = masa ÷ volumen = 2.06 kg ÷ 2.00 L = 1.03 kg/L.", "Ficha 9, p. 57"),
    O("f9-32", "t4", "¿Cuál es la densidad de 2.00 kg de plomo que ocupan 0.18 L?", ["Aproximadamente 11.11 kg/L","0.09 kg/L","0.36 kg/L","2.18 kg/L"], "Densidad = masa ÷ volumen = 2.00 kg ÷ 0.18 L ≈ 11.11 kg/L.", "Ficha 9, p. 57"),
    O("f9-33", "t4", "¿Cuál es la densidad aproximada de 1.00 kg de aire que ocupa 773.4 L?", ["0.0013 kg/L", "0.13 kg/L", "773.4 kg/L", "1.3 kg/L"], "1 ÷ 773.4 ≈ 0.0013 kg/L, lo cual equivale a 1.3 g/L.", "Ficha 9, p. 57"),
    O("f9-34", "t4", "Si la densidad de la gasolina es 0.70 kg/L, ¿qué masa tienen 3.00 L?", ["2.10 kg", "4.29 kg", "0.23 kg", "3.70 kg"], "Masa = volumen × densidad = 3.00 × 0.70 = 2.10 kg.", "Ficha 9, p. 57"),
    O("f9-35", "t4", "Si la densidad del hielo es 0.92 kg/L, ¿qué volumen ocupan 5.00 kg de hielo?", ["5.43 L", "4.60 L", "0.18 L", "54.3 L"], "Volumen = masa ÷ densidad = 5.00 ÷ 0.92 ≈ 5.43 L.", "Ficha 9, p. 57"),
    O("f9-36", "t4", "Un litro de aire y un litro de plomo, ¿qué ocupan?", ["El mismo espacio: un litro cada uno", "El aire ocupa más", "El plomo ocupa más", "No se puede saber"], "Un litro es un litro. Lo que cambia es la masa: el plomo tiene muchísimas más partículas en ese volumen.", "Ficha 9, p. 57"),
    VF("f9-37", "t4", "El aire es una sustancia pura formada solo por oxígeno.", false, "Falso. El aire es una mezcla de gases: nitrógeno, oxígeno, vapor de agua, dióxido de carbono y otros.", "Ficha 9, p. 57"),
    O("f9-38", "t4", "¿Qué sustancia tiene mayor densidad entre estas?", ["El mercurio (13.6 kg/L)", "El agua (1 kg/L)", "La leche (1.03 kg/L)", "El aire (0.0013 kg/L)"], "El mercurio es el más denso del grupo.", "Ficha 9, p. 57")
  ]
});
