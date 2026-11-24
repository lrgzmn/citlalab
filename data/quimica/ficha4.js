/* QUÍMICA · 3.º de secundaria
   Ficha 4: Propiedades intensivas y extensivas (pp. 24 a 29)
   Correcciones al libro (verificadas con Python): piscina de 400 m3 × 1 025 kg/m3 = 410 000 kg (el libro anota 410 kg);
   mercurio 4 g / 0.29529 mL = 13.55 g/mL; aceite 225 mL × 0.911 g/mL = 204.98 g; cuerpo de 50 kg / 950 kg/m3 = 0.053 m3.
   Se omiten los volúmenes de acetona de la gráfica (100 g de acetona ocupan 126 mL, no 79.1 mL) y la altura del Pico de Orizaba.
   El propano es CH3–CH2–CH3 (el libro lo escribe CH3-CH3-CH3). A 390 mmHg el agua hierve a cerca de 82 °C.
*/
REPASO.agregar({
  materia: 'quimica',
  ficha: { id: 'q4', titulo: 'Ficha 4 · Propiedades intensivas y extensivas', jefe: 'El Cubo Camaleón' },
  temas: [
    { id: "t1", nombre: "Propiedades intensivas y extensivas" },
    { id: "t2", nombre: "Densidad y cálculos", icono: "matraz" },
    { id: "t3", nombre: "Solubilidad" },
    { id: "t4", nombre: "Ebullición, fusión y estado de agregación" },
    { id: "t5", nombre: "Viscosidad e identificación de sustancias" }
  ],
  preguntas: [

    /* t1 · Intensivas y extensivas */
    O("q4-01", "t1", "¿Qué son las propiedades extensivas?", ["Las que dependen de la cantidad de materia, como la masa y el volumen", "Las que no cambian con la cantidad de materia", "Las que solo tienen los metales", "Las que se ven al microscopio"], "Si duplicas la cantidad, se duplican.", "Ficha 4, p. 25"),
    O("q4-02", "t1", "¿Qué son las propiedades intensivas?", ["Las que no dependen de la cantidad de materia, como la densidad", "Las que dependen de la masa", "Las que solo tienen los gases", "Las que se miden con regla"], "Sirven para identificar una sustancia.", "Ficha 4, p. 25"),
    VF("q4-03", "t1", "La masa y el volumen son propiedades extensivas.", true, "Verdadero. Dependen de cuánta materia haya.", "Ficha 4, p. 25"),
    VF("q4-04", "t1", "La densidad es una propiedad extensiva.", false, "Falso. Es intensiva: un cubo grande y uno pequeño del mismo material tienen la misma densidad.", "Ficha 4, p. 29"),
    VF("q4-05", "t1", "La temperatura de ebullición de una sustancia pura depende de la masa que se hierve.", false, "Falso. Es intensiva: 100 g y 500 g de acetona hierven a la misma temperatura.", "Ficha 4, p. 26"),
    VF("q4-06", "t1", "La solubilidad, la viscosidad y la temperatura de fusión son propiedades intensivas.", true, "Verdadero. No dependen de la masa.", "Ficha 4, p. 29"),
    CM("q4-07", "t1", "Cuanto mayor sea la masa de un cubo de aluminio, mayor es su densidad", ["La densidad no cambia aunque aumente el tamaño del cubo", "La densidad se duplica al duplicar la masa", "La densidad disminuye al aumentar la masa", "La densidad es igual a la masa"], "Si aumentan la masa y el volumen en la misma proporción, la densidad queda igual.", "Ficha 4, p. 29"),
    CM("q4-08", "t1", "La densidad del aluminio es una propiedad extensiva", ["La densidad del aluminio es una propiedad intensiva", "Es extensiva porque depende del volumen", "Es extensiva porque depende de la masa", "No es una propiedad"], "Solo depende del material.", "Ficha 4, p. 29"),

    /* t2 · Densidad */
    O("q4-09", "t2", "¿Cómo se calcula la densidad?", ["Masa entre volumen (d = m/v)", "Volumen entre masa", "Masa por volumen", "Masa más volumen"], "Se expresa en g/mL, g/cm³ o kg/m³.", "Ficha 4, p. 24"),
    O("q4-10", "t2", "Un trozo de mármol de 102 g sube el nivel del agua de 60 mL a 98 mL. ¿Cuál es su densidad?", ["Aproximadamente 2.68 g/cm³", "Aproximadamente 1.04 g/cm³", "Aproximadamente 1.7 g/cm³", "Aproximadamente 0.37 g/cm³"], "Volumen = 98 − 60 = 38 cm³. d = 102 ÷ 38 ≈ 2.68 g/cm³.", "Ficha 4, p. 25"),
    O("q4-11", "t2", "Una piscina para delfines tiene 400 m³ de agua de mar (densidad 1 025 kg/m³). ¿Cuántos kilogramos de agua tiene?", ["410 000 kg", "410 kg", "4 100 kg", "390 kg"], "m = v · d = 400 × 1 025 = 410 000 kg. El libro anota 410 kg, pero faltan tres ceros.", "Ficha 4, p. 25"),
    O("q4-12", "t2", "Un termómetro tiene 0.29529 mL de mercurio que equivalen a 4 g. ¿Cuál es la densidad del mercurio?", ["Aproximadamente 13.55 g/mL", "1.18 g/mL", "0.07 g/mL", "135.5 g/mL"], "d = 4 ÷ 0.29529 ≈ 13.55 g/mL.", "Ficha 4, p. 25"),
    O("q4-13", "t2", "Una taza (225 mL) de aceite de oliva tiene densidad 0.911 g/mL. ¿Cuántos gramos son?", ["Aproximadamente 204.98 g", "246.99 g", "0.004 g", "225.911 g"], "m = v · d = 225 × 0.911 ≈ 204.98 g.", "Ficha 4, p. 26"),
    O("q4-14", "t2", "Si la densidad promedio del cuerpo humano es 950 kg/m³, ¿qué volumen tiene una persona de 50 kg?", ["Aproximadamente 0.053 m³", "47 500 m³", "19 m³", "0.5 m³"], "v = m ÷ d = 50 ÷ 950 ≈ 0.053 m³.", "Ficha 4, p. 25"),
    O("q4-15", "t2", "Si el aluminio tiene densidad 2.7 g/cm³, ¿cuánto pesa un cubo de aluminio de 1 cm de arista?", ["2.7 g", "27 g", "0.27 g", "1 g"], "1 cm³ × 2.7 g/cm³ = 2.7 g.", "Ficha 4, p. 29"),
    O("q4-16", "t2", "¿Por qué el aluminio se hunde en agua?", ["Porque su densidad (2.7 g/cm³) es mayor que la del agua (1 g/cm³)", "Porque es un metal", "Porque es más frío", "Porque es de color gris"], "Un objeto se hunde si es más denso que el líquido.", "Ficha 4, p. 29"),
    O("q4-17", "t2", "En el método de la moneda, ¿cómo se obtiene el volumen de un objeto con una probeta?", ["Restando el volumen inicial del agua al volumen final con el objeto sumergido", "Midiendo con regla su color", "Pesándolo", "Sumando los volúmenes"], "V = V final − V inicial.", "Ficha 4, p. 24"),

    /* t3 · Solubilidad */
    O("q4-18", "t3", "¿Qué es la solubilidad?", ["La máxima cantidad de soluto que se disuelve en una cantidad de disolvente a cierta temperatura", "La mínima cantidad de soluto", "La velocidad con que hierve un líquido", "El color de la disolución"], "Se mide, por ejemplo, en g de soluto por 100 g de agua.", "Ficha 4, p. 27"),
    O("q4-19", "t3", "¿Cómo cambia la solubilidad de la sacarosa (azúcar) con la temperatura?", ["Aumenta al subir la temperatura", "Disminuye al subir la temperatura", "No cambia", "Solo cambia con la masa"], "A 20 °C se disuelven alrededor de 204 g en 100 g de agua, y a 80 °C, alrededor de 362 g.", "Ficha 4, p. 26"),
    O("q4-20", "t3", "A 50 °C la sacarosa tiene una solubilidad de alrededor de 260 g por 100 g de agua. Si se mezclan 300 g de azúcar con 100 g de agua a 50 °C, ¿cuánto queda sin disolver?", ["Alrededor de 40 g", "260 g", "300 g", "0 g"], "300 − 260 = 40 g no se disuelven.", "Ficha 4, p. 27"),
    O("q4-21", "t3", "¿Por qué conviene disolver primero el azúcar en el agua de limón y luego agregar los hielos?", ["Porque al bajar la temperatura disminuye la solubilidad del azúcar", "Porque el hielo se derrite más rápido", "Porque el limón se endulza solo", "Porque el azúcar flota"], "En agua tibia o a temperatura ambiente se disuelve mejor.", "Ficha 4, p. 27"),
    O("q4-22", "t3", "¿Cómo cambia la solubilidad del dióxido de carbono en agua al subir la temperatura?", ["Disminuye", "Aumenta", "No cambia", "Se hace cero siempre"], "Por eso un refresco tibio pierde el gas más rápido.", "Ficha 4, p. 27"),
    O("q4-23", "t3", "¿Cómo cambia la solubilidad del CO₂ en agua al aumentar la presión?", ["Aumenta", "Disminuye", "No cambia", "Se vuelve cero"], "Por eso los refrescos se envasan a presión.", "Ficha 4, p. 27"),
    VF("q4-24", "t3", "Un refresco recién abierto tiene más CO₂ disuelto que uno que lleva horas destapado.", true, "Verdadero. Al abrirlo baja la presión y el gas se escapa.", "Ficha 4, p. 27"),

    /* t4 · Ebullición y fusión */
    O("q4-25", "t4", "¿Qué es la temperatura de ebullición?", ["La temperatura a la que la presión de vapor del líquido iguala a la presión externa y pasa a gas", "La temperatura a la que un sólido se vuelve líquido", "La temperatura del cuerpo", "La temperatura a la que se congela"], "También se llama punto de ebullición.", "Ficha 4, p. 26"),
    O("q4-26", "t4", "¿Qué es la temperatura de fusión?", ["La temperatura a la que un sólido se transforma en líquido", "La temperatura a la que un líquido hierve", "La temperatura de un gas", "La temperatura del hielo seco"], "También se llama punto de fusión.", "Ficha 4, p. 28"),
    O("q4-27", "t4", "¿Qué relación hay entre la temperatura de ebullición del agua y la presión externa?", ["A mayor presión, mayor temperatura de ebullición", "A mayor presión, menor temperatura de ebullición", "No hay relación", "Solo importa la masa"], "Por eso en la olla de presión se cuece más rápido.", "Ficha 4, p. 28"),
    O("q4-28", "t4", "A gran altura, donde hay menor presión atmosférica, el agua hierve a...", ["Menos de 100 °C, y la comida tarda más en cocerse", "Más de 100 °C, y la comida se cuece más rápido", "100 °C exactos, sin cambios", "0 °C"], "A 390 mmHg el agua hierve a cerca de 82 °C.", "Ficha 4, p. 29"),
    O("q4-29", "t4", "¿Cuál es la temperatura de ebullición normal del agua?", ["100 °C a 1 atm (760 mmHg)", "0 °C", "50 °C", "212 °C"], "Es la temperatura de ebullición a la presión del nivel del mar.", "Ficha 4, p. 28"),
    O("q4-30", "t4", "A 20 °C y 1 atm, ¿cuáles de estas sustancias son sólidas? (alcanfor, fenol, naftaleno)", ["Las tres, porque su temperatura de fusión es mayor que 20 °C", "Ninguna", "Solo el alcanfor", "Las tres son gases"], "Alcanfor funde a 178.4 °C, fenol a 42.0 °C y naftaleno a 80.2 °C.", "Ficha 4, p. 28"),
    O("q4-31", "t4", "A 20 °C y 1 atm, ¿cuáles son líquidas? (ácido acético, benceno, cloroformo)", ["Las tres: funden por debajo de 20 °C y hierven por encima", "Las tres son sólidas", "Las tres son gases", "Solo el benceno"], "Ácido acético: 16.6 y 118.5 °C. Benceno: 5.5 y 80.1 °C. Cloroformo: −63.5 y 62.2 °C.", "Ficha 4, p. 28"),
    O("q4-32", "t4", "A 20 °C y 1 atm, ¿cuáles son gases? (butano, etano, metano, propano)", ["Las cuatro: hierven por debajo de 20 °C", "Ninguna", "Solo el metano", "Solo el butano"], "El butano hierve a −0.5 °C, y los otros a temperaturas aún más bajas.", "Ficha 4, p. 28"),
    O("q4-33", "t4", "¿Cuál es la fórmula estructural del propano?", ["CH₃–CH₂–CH₃", "CH₃–CH₃–CH₃", "CH₃–CH₃", "CH₄"], "Tiene tres carbonos. El libro lo escribe con CH₃ en el centro por error.", "Ficha 4, p. 28"),

    /* t5 · Viscosidad e identificación */
    O("q4-34", "t5", "¿Qué es la viscosidad?", ["La resistencia de un líquido a fluir", "La temperatura de un líquido", "El color", "La cantidad de soluto"], "Entre más viscoso es un líquido, más lento fluye.", "Ficha 4, p. 28"),
    O("q4-35", "t5", "En un experimento con balines que caen en líquidos, el que tardó más (14.9 s) fue la glicerina. ¿Qué indica?", ["Que la glicerina es el más viscoso del grupo", "Que es el menos viscoso", "Que es el más ligero", "Que es el más caliente"], "Fluye con mayor lentitud.", "Ficha 4, p. 28"),
    O("q4-36", "t5", "¿Qué líquido tiene menor viscosidad en ese experimento (0.33 s)?", ["La acetona", "La glicerina", "El mercurio", "El vinagre"], "El balín cae más rápido porque fluye con facilidad.", "Ficha 4, p. 28"),
    O("q4-37", "t5", "\"Lento como la melaza\" significa que la melaza...", ["Tiene una viscosidad muy alta", "Tiene una densidad muy baja", "Es un gas", "Tiene un punto de fusión alto"], "Fluye muy despacio.", "Ficha 4, p. 28"),
    O("q4-38", "t5", "Si tienes un polvo blanco parecido a la sal, ¿es recomendable probarlo para saber qué es?", ["No, porque algunas sustancias son tóxicas aun en cantidades pequeñas", "Sí, la sal siempre es segura", "Sí, solo un poco", "Sí, si huele bien"], "Se identifican con propiedades como la densidad o el punto de fusión, no con el sabor.", "Ficha 4, p. 29"),
    VF("q4-39", "t5", "Las propiedades intensivas, como la densidad, sirven para identificar una sustancia.", true, "Verdadero. Cada sustancia tiene valores característicos.", "Ficha 4, p. 25"),

    /* refuerzo · verdadero o falso */
    VF("q4-40", "t2", "La densidad del agua es de aproximadamente 1 g/cm³.", true, "Verdadero.", "Ficha 4, p. 29"),
    VF("q4-41", "t2", "Un material con densidad mayor que 1 g/mL se hunde en agua.", true, "Verdadero.", "Ficha 4, p. 29"),
    VF("q4-42", "t3", "La solubilidad del azúcar disminuye al aumentar la temperatura.", false, "Falso. Aumenta.", "Ficha 4, p. 26"),
    VF("q4-43", "t4", "A mayor presión externa, mayor temperatura de ebullición del agua.", true, "Verdadero.", "Ficha 4, p. 28"),
    VF("q4-44", "t1", "El volumen es una propiedad intensiva.", false, "Falso. Es extensiva.", "Ficha 4, p. 25")
  ]
});
