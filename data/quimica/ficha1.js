/* QUÍMICA · 3.º de secundaria
   Ficha 1: Saberes ancestrales y populares (pp. 9 a 13)
   Correcciones al libro: la amapola (efecto sedante, opio) corresponde a la morfina (el libro anota penicilina);
   el medicamento de la corteza de quina para la malaria es la quinina (el libro anota quinidina, otro alcaloide de la misma corteza).
   Se omiten las actividades de respuesta libre y las cifras sin fuente (rendimientos de masa y tortillas).
*/
REPASO.agregar({
  materia: 'quimica',
  ficha: { id: 'q1', titulo: 'Ficha 1 · Saberes ancestrales y populares', jefe: 'El Tinte Perdido' },
  temas: [
    { id: "t1", nombre: "Nixtamalización y la cal" },
    { id: "t2", nombre: "Construcción con tierra y colorantes naturales" },
    { id: "t3", nombre: "Remedios caseros y medicamentos" },
    { id: "t4", nombre: "Proceso de la tortilla" },
    { id: "t5", nombre: "Valorar los saberes tradicionales" }
  ],
  preguntas: [

    /* t1 · Nixtamalización */
    O("q1-01", "t1", "¿Qué es la nixtamalización?", ["La cocción del maíz con una disolución de cal apagada", "La molienda del maíz sin cocer", "La fermentación del maíz con levadura", "El secado del maíz al sol"], "El producto obtenido se llama nixtamal.", "Ficha 1, p. 9"),
    O("q1-02", "t1", "¿Cuál es la fórmula de la cal apagada?", ["Ca(OH)₂ (hidróxido de calcio)", "CaO (óxido de calcio)", "CaCO₃ (carbonato de calcio)", "NaOH (sosa)"], "Se obtiene al hidratar el óxido de calcio (cal viva, CaO).", "Ficha 1, p. 9"),
    O("q1-03", "t1", "¿Cómo se obtiene la cal apagada?", ["Al hidratar el óxido de calcio (cal viva)", "Al quemar maíz", "Al evaporar agua de mar", "Al mezclar sal con azúcar"], "CaO + H₂O → Ca(OH)₂.", "Ficha 1, p. 9"),
    O("q1-04", "t1", "¿Qué aporta la cal al maíz nixtamalizado, y por qué se asocia con dientes sanos?", ["Calcio", "Vitamina C", "Hierro", "Azúcar"], "La cal apagada es una importante fuente de calcio.", "Ficha 1, p. 9"),
    VF("q1-05", "t1", "El proceso de nixtamalización se sigue usando hoy en México.", true, "Verdadero. Es uno de los ejemplos de saberes ancestrales vigentes.", "Ficha 1, p. 9"),
    O("q1-06", "t1", "¿Qué horno usaban los mayas del norte de la península de Yucatán para obtener cal viva (óxido de calcio)?", ["Un horno con capas alternas de piedra caliza y leña", "Un horno de microondas", "Una olla de barro con agua", "Un horno de gas"], "Calentar la caliza (CaCO₃) produce CaO y CO₂.", "Ficha 1, p. 9"),
    VF("q1-07", "t1", "La cal apagada mezclada con agua forma una pasta que se usa para recubrir pisos, techos y paredes.", true, "Verdadero. Es un saber de construcción.", "Ficha 1, p. 13"),

    /* t2 · Construcción y colorantes */
    O("q1-08", "t2", "¿De qué se hace el adobe?", ["De barro mezclado con fibras vegetales, secado al sol", "De cemento puro", "De plástico", "De vidrio"], "También se llama ladrillo de tierra. Se pone en cajones y se deja secar.", "Ficha 1, p. 10"),
    O("q1-09", "t2", "¿Por qué la arcilla resta estabilidad a los muros si hay mucha humedad?", ["Porque aumenta de volumen con el agua y disminuye cuando se seca", "Porque se disuelve por completo", "Porque se convierte en metal", "Porque se vuelve más dura con el agua"], "Para solucionarlo se agregan asfalto, cal o cemento.", "Ficha 1, p. 10"),
    O("q1-10", "t2", "¿Qué se agrega a la mezcla de adobe para evitar problemas con la humedad?", ["Asfalto, cal o cemento", "Azúcar", "Sal", "Aceite de cocina"], "Son estabilizadores.", "Ficha 1, p. 10"),
    O("q1-11", "t2", "¿Con qué colorante natural se obtiene el color rojo en los tapetes de Teotitlán del Valle?", ["Con la grana cochinilla, un insecto", "Con el añil", "Con el cempasúchil", "Con la nuez"], "La cochinilla es de origen animal; los otros colorantes de la lista son vegetales.", "Ficha 1, p. 11"),
    O("q1-12", "t2", "¿De dónde se obtiene el añil, que da tonos azules y morados?", ["De las hojas del jiquilite", "De un insecto", "De la flor de cempasúchil", "De la cáscara de nuez"], "Es un colorante vegetal.", "Ficha 1, p. 11"),
    O("q1-13", "t2", "¿Qué parte de la planta se usa del cempasúchil para teñir?", ["La flor, para tonos amarillos", "La raíz, para rojos", "El tronco, para negros", "La semilla, para azules"], "También se obtiene amarillo de la granada y del musgo de roca.", "Ficha 1, p. 11"),
    O("q1-14", "t2", "¿Cómo se consigue un tono más intenso al teñir con colorantes naturales?", ["Alargando el tiempo de remojo de la materia prima", "Acortando el remojo", "Quitando el color", "Congelando la lana"], "Entre más prolongado, más intenso será el color del tinte.", "Ficha 1, p. 10"),
    VF("q1-15", "t2", "El teñido tradicional con colorantes naturales usa materiales del entorno y limita el daño al ambiente.", true, "Verdadero. Por ejemplo, se lava la lana con amole en lugar de detergente.", "Ficha 1, p. 11"),

    /* t3 · Medicina */
    O("q1-16", "t3", "El té de corteza de sauce (antiguos egipcios) dio origen al medicamento...", ["Aspirina", "Penicilina", "Morfina", "Atropina"], "La corteza de sauce contiene salicina, base de la aspirina.", "Ficha 1, p. 11"),
    O("q1-17", "t3", "El jugo de las bayas de belladona (mujeres romanas) dio origen a la...", ["Atropina", "Aspirina", "Morfina", "Ergotamina"], "La atropina dilata las pupilas.", "Ficha 1, p. 11"),
    O("q1-18", "t3", "La amapola, que Dioscórides recomendaba como hipnótico por su efecto sedante, dio origen a la...", ["Morfina", "Penicilina", "Aspirina", "Atropina"], "La morfina se extrae del opio de la amapola. La penicilina viene de un hongo, no de la amapola.", "Ficha 1, p. 11"),
    O("q1-19", "t3", "La corteza de quina (Kina-Kina), que los incas usaban para la malaria, dio origen a la...", ["Quinina", "Aspirina", "Morfina", "Atropina"], "La quinina se extrae de la corteza de quina.", "Ficha 1, p. 11"),
    O("q1-20", "t3", "La ergotamina se usa para tratar...", ["Ataques agudos de migraña", "Infecciones por bacterias", "La malaria", "La fiebre"], "Se obtiene del cornezuelo, un hongo que crece en cereales como el centeno.", "Ficha 1, p. 11"),
    CM("q1-21", "t3", "Lo natural siempre es inocuo, o sea, nunca hace daño", ["Algunas plantas producen efectos secundarios o interactúan de forma negativa con otros medicamentos", "Lo natural nunca daña", "Solo lo sintético es peligroso", "Todo lo natural cura"], "Por ejemplo, el toloache altera el estado de conciencia. La dosis importa.", "Ficha 1, p. 11"),
    VF("q1-22", "t3", "Muchos remedios tradicionales han servido de base para desarrollar medicamentos.", true, "Verdadero. Por eso la medicina tradicional es importante.", "Ficha 1, p. 12"),
    O("q1-23", "t3", "Según el Códice Florentino, ¿con qué se curaban las quebraduras de los huesos de los pies?", ["Con polvos de la raíz de acocotli y tuna", "Con aspirina", "Con cal", "Con azúcar"], "Es un ejemplo de saber medicinal ancestral.", "Ficha 1, p. 9"),

    /* t4 · Proceso de la tortilla */
    ORD("q1-24", "t4", "Ordena el proceso del nixtamal y la tortilla:", ["Mezclar el maíz con la disolución de cal", "Cocer el grano (85 a 100 °C, 50 a 90 min)", "Dejar reposar de 14 a 18 horas", "Retirar el líquido", "Lavar el grano (nixtamal)", "Moler para formar la masa", "Formar discos con la masa", "Cocer los discos en un comal"], "La nixtamalización va primero; luego se muele y se cuece la tortilla.", "Ficha 1, p. 12"),
    O("q1-25", "t4", "¿Cuál es la proporción de maíz y disolución de cal para nixtamalizar?", ["Una parte de maíz por dos de disolución de cal", "Dos partes de maíz por una de cal", "Igual cantidad de cada una", "Solo cal sin agua"], "La disolución de cal es aproximadamente al 1 %.", "Ficha 1, p. 12"),
    O("q1-26", "t4", "¿Por qué se recomienda no retirar el germen ni el pericarpio del grano al lavar el nixtamal?", ["Para perder la menor cantidad posible de nutrimentos", "Para que sea más blanco", "Para que no tenga sabor", "Para que dure menos"], "Buena parte de las proteínas, lípidos y azúcares están en el germen.", "Ficha 1, p. 12"),
    O("q1-27", "t4", "Para hacer totopos, los discos de masa se...", ["Fríen aproximadamente 60 segundos", "Hierven en agua", "Congelan", "Cuecen en vapor"], "Se fríen entre 160 y 180 °C. Para tostadas, se fríe tortilla en las mismas condiciones.", "Ficha 1, p. 12"),
    VF("q1-28", "t4", "Los mexicas llamaban tlaxcalli a la tortilla.", true, "Verdadero. Los españoles la llamaron tortilla.", "Ficha 1, p. 12"),

    /* t5 · Valorar */
    O("q1-29", "t5", "¿Por qué es importante valorar y rescatar los saberes tradicionales?", ["Son identidad y herencia cultural, y fuente de información sobre cómo usar los recursos naturales", "Porque sustituyen a la ciencia por completo", "Porque no cambian nunca", "Porque son más caros"], "Algunos saberes han sido la base del pensamiento científico.", "Ficha 1, p. 13"),
    O("q1-30", "t5", "¿Cuál de estas NO es un saber local sino una tecnología moderna?", ["Teñir poliéster con dióxido de carbono sin agua", "Preparar pinole con maíz tostado y molido", "Usar infusiones de manzanilla para la diarrea", "Cubrir muros con cal apagada"], "El teñido sin agua con CO₂ es una técnica industrial reciente.", "Ficha 1, p. 13"),
    O("q1-31", "t5", "El pozol de Tabasco, Chiapas, Campeche y Yucatán se prepara con...", ["Maíz nixtamalizado", "Trigo", "Arroz", "Soya"], "Es una bebida tradicional.", "Ficha 1, p. 13"),
    O("q1-32", "t5", "El tesgüino del norte y noroeste del país se elabora con...", ["Maíz", "Café", "Cacao", "Uva"], "Es una bebida tradicional fermentada.", "Ficha 1, p. 13"),

    /* refuerzo · verdadero o falso */
    VF("q1-33", "t1", "La cal apagada tiene fórmula Ca(OH)₂.", true, "Verdadero. La cal viva es CaO.", "Ficha 1, p. 9"),
    VF("q1-34", "t2", "El adobe se hace de barro y fibras vegetales secados al sol.", true, "Verdadero.", "Ficha 1, p. 10"),
    VF("q1-35", "t2", "La grana cochinilla es un colorante de origen vegetal.", false, "Falso. Es un insecto.", "Ficha 1, p. 11"),
    VF("q1-36", "t3", "La penicilina se obtiene de la amapola.", false, "Falso. De la amapola se obtiene la morfina; la penicilina viene de un hongo.", "Ficha 1, p. 11"),
    VF("q1-37", "t4", "Al nixtamalizar el maíz se usa una disolución de cal.", true, "Verdadero.", "Ficha 1, p. 12")
  ]
});
