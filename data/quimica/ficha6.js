/* QUÍMICA · 3.º de secundaria
   Ficha 6: Mezclas homogéneas y heterogéneas (pp. 35 a 39)
   Correcciones al libro: el latón y el acero son mezclas homogéneas (aleaciones), no heterogéneas;
   la sangre es una mezcla heterogénea (el libro primero la llama homogénea); la leche, vista al microscopio, es heterogénea;
   el aire es una mezcla de gases (no un compuesto ni una sustancia pura).
*/
REPASO.agregar({
  materia: 'quimica',
  ficha: { id: 'q6', titulo: 'Ficha 6 · Mezclas homogéneas y heterogéneas', jefe: 'La Mezcla Traviesa' },
  temas: [
    { id: "t1", nombre: "Qué es una mezcla", icono: "matraz" },
    { id: "t2", nombre: "Soluto, disolvente y fases" },
    { id: "t3", nombre: "Clasificación de mezclas cotidianas" },
    { id: "t4", nombre: "Tipos de mezclas heterogéneas" }
  ],
  preguntas: [

    /* t1 · Mezcla */
    O("q6-01", "t1", "¿Qué es una mezcla?", ["La unión física de dos o más sustancias que conservan sus propiedades", "Una sustancia pura", "Un compuesto químico", "Una reacción química"], "Su composición es variable.", "Ficha 6, p. 39"),
    VF("q6-02", "t1", "La composición de una mezcla es fija, siempre igual.", false, "Falso. En una mezcla la composición es variable (por ejemplo, agua con poca o mucha sal).", "Ficha 6, p. 38"),
    VF("q6-03", "t1", "El agua tiene siempre 88.8 % de oxígeno y 11.1 % de hidrógeno en masa, por eso es un compuesto y no una mezcla.", true, "Verdadero. Una composición siempre igual es característica de un compuesto.", "Ficha 6, p. 39"),
    O("q6-04", "t1", "El lago Assal, en Yibuti, tiene una salinidad de 34.8 % en la superficie y de 40 % a 20 m de profundidad. ¿Qué indica?", ["Que es una mezcla, porque su composición varía", "Que es un compuesto", "Que es un elemento", "Que es una sustancia pura"], "La composición cambia con la profundidad.", "Ficha 6, p. 39"),
    O("q6-05", "t1", "¿Qué es una fase?", ["Cada parte homogénea de una mezcla", "Un tipo de reacción", "Un instrumento", "Una temperatura"], "Cada fase tiene propiedades uniformes.", "Ficha 6, p. 35"),
    VF("q6-06", "t1", "El aire es una mezcla de gases.", true, "Verdadero. Contiene sobre todo nitrógeno y oxígeno, además de vapor de agua, dióxido de carbono y otros.", "Ficha 6, p. 38"),

    /* t2 · Soluto, disolvente */
    O("q6-07", "t2", "En el agua salada, ¿cuál es el soluto y cuál el disolvente?", ["Soluto: sal; disolvente: agua", "Soluto: agua; disolvente: sal", "Ambos son solutos", "Ambos son disolventes"], "El soluto es lo que se disuelve, y el disolvente, lo que disuelve.", "Ficha 6, p. 39"),
    O("q6-08", "t2", "Se disuelven 70 g de sal en 400 mL de agua y se observa una sola fase. ¿Qué tipo de mezcla es?", ["Homogénea", "Heterogénea", "Un compuesto", "Un elemento"], "Una sola fase significa que los componentes no se distinguen.", "Ficha 6, p. 35"),
    O("q6-09", "t2", "Se pone un huevo en el agua salada y se observa un huevo sin disolver. ¿Cuántas fases hay?", ["Dos: el agua salada y el huevo", "Una", "Tres", "Cuatro"], "El huevo no se disuelve, así que se ve como una fase distinta.", "Ficha 6, p. 35"),
    O("q6-10", "t2", "¿Qué diferencia hay entre una mezcla homogénea y una heterogénea?", ["En la homogénea los componentes se disuelven y se ve una sola fase; en la heterogénea se ven dos o más fases", "La homogénea tiene más fases", "No hay diferencia", "La heterogénea siempre es líquida"], "La homogénea no se separa por filtración, y la heterogénea sí.", "Ficha 6, p. 36"),
    O("q6-11", "t2", "¿Qué mezcla se puede separar por filtración?", ["La heterogénea de un sólido insoluble en un líquido", "La homogénea de agua con sal", "El aire", "La naranjada mineral"], "El agua de horchata se filtra y deja el sólido en el colador.", "Ficha 6, p. 36"),
    VF("q6-12", "t2", "En el agua de horchata el disolvente es el agua.", true, "Verdadero. El arroz, el jugo de limón y el azúcar son los solutos o fase dispersa.", "Ficha 6, p. 36"),
    VF("q6-13", "t2", "La naranjada mineral (con jugo colado y agua mineral) es una mezcla homogénea.", true, "Verdadero. Se ve transparente, de una sola fase.", "Ficha 6, p. 36"),

    /* t3 · Clasificación */
    O("q6-14", "t3", "El aire limpio es una mezcla...", ["Homogénea", "Heterogénea", "Un compuesto", "Un elemento"], "Los gases se mezclan por completo: una sola fase.", "Ficha 6, p. 38"),
    O("q6-15", "t3", "La mayonesa es una mezcla...", ["Heterogénea", "Homogénea", "Un compuesto", "Un elemento"], "Es una emulsión: gotitas de un líquido dispersas en otro.", "Ficha 6, p. 37"),
    O("q6-16", "t3", "El latón (cobre y cinc) es una mezcla...", ["Homogénea", "Heterogénea", "Un compuesto", "Un elemento"], "Es una aleación: los metales están mezclados de forma uniforme.", "Ficha 6, p. 38"),
    O("q6-17", "t3", "El acero (hierro y carbono) es una mezcla...", ["Homogénea (aleación)", "Heterogénea", "Un compuesto", "Un elemento"], "El libro lo clasifica como heterogéneo, pero las aleaciones son homogéneas.", "Ficha 6, p. 37"),
    O("q6-18", "t3", "El bronce (cobre, cinc y estaño) es una mezcla...", ["Homogénea", "Heterogénea", "Un compuesto", "Un elemento"], "El disolvente es el cobre.", "Ficha 6, p. 38"),
    O("q6-19", "t3", "El granito (cuarzo, feldespato y mica) es una mezcla...", ["Heterogénea", "Homogénea", "Un compuesto", "Un elemento"], "Se distinguen las distintas partes a simple vista.", "Ficha 6, p. 38"),
    O("q6-20", "t3", "El refresco es una mezcla...", ["Homogénea", "Heterogénea", "Un compuesto", "Un elemento"], "Los componentes están disueltos en agua.", "Ficha 6, p. 38"),
    O("q6-21", "t3", "El jugo de naranja sin colar es una mezcla...", ["Heterogénea", "Homogénea", "Un compuesto", "Un elemento"], "Se ven la pulpa y el líquido.", "Ficha 6, p. 38"),
    O("q6-22", "t3", "La sopa de verduras es una mezcla...", ["Heterogénea", "Homogénea", "Un compuesto", "Un elemento"], "Se distinguen las verduras y el caldo.", "Ficha 6, p. 38"),
    O("q6-23", "t3", "El agua mineral con sales disueltas es una mezcla...", ["Homogénea, con las sales como soluto y el agua como disolvente", "Heterogénea, con el agua como soluto", "Un compuesto", "Un elemento"], "Una sola fase.", "Ficha 6, p. 39"),
    O("q6-24", "t3", "¿Cómo se clasifica la sangre?", ["Mezcla heterogénea, porque al microscopio se ven células en un líquido", "Mezcla homogénea, porque se ve uniforme", "Un compuesto", "Un elemento"], "A simple vista parece uniforme, pero el microscopio muestra varias fases.", "Ficha 6, p. 37"),
    O("q6-25", "t3", "¿Cómo se clasifica la leche?", ["Mezcla heterogénea, porque al microscopio se ven gotitas de grasa en un líquido", "Mezcla homogénea, porque se ve uniforme", "Un compuesto", "Un elemento"], "A simple vista parece uniforme, pero tiene fases.", "Ficha 6, p. 36"),
    CM("q6-26", "t3", "Si una mezcla se ve uniforme a simple vista, siempre es homogénea", ["Algunas mezclas, como la leche o la sangre, se ven uniformes pero con microscopio se ven varias fases", "Sí, siempre", "Las mezclas nunca se ven uniformes", "El microscopio no sirve"], "A veces se necesitan instrumentos para ver las fases.", "Ficha 6, p. 37"),
    O("q6-27", "t3", "En el aire limpio, ¿cuál es el componente principal o disolvente?", ["El nitrógeno", "El oxígeno", "El vapor de agua", "El dióxido de carbono"], "El nitrógeno es alrededor de 78 % del aire.", "Ficha 6, p. 38"),
    O("q6-28", "t3", "Al nivel del mar, 1 L de aire tiene una masa aproximada de...", ["1.2 g", "12 g", "120 g", "0.012 g"], "Su densidad es de alrededor de 1.2 g/L. Disminuye al aumentar la altitud.", "Ficha 6, p. 37"),

    /* t4 · Tipos de heterogéneas */
    O("q6-29", "t4", "En la niebla, ¿cuál es la fase dispersa y cuál la dispersante?", ["Dispersa: gotas de agua; dispersante: aire", "Dispersa: aire; dispersante: gotas de agua", "Ambas son sólidas", "Ambas son gases"], "Es un aerosol de líquido en gas.", "Ficha 6, p. 38"),
    O("q6-30", "t4", "En el humo, ¿cuál es la fase dispersa y cuál la dispersante?", ["Dispersa: partículas sólidas; dispersante: gas", "Dispersa: gas; dispersante: sólido", "Ambas líquidas", "Ambas gases"], "Es un aerosol sólido.", "Ficha 6, p. 38"),
    O("q6-31", "t4", "¿Qué es una emulsión?", ["Una mezcla en la que un líquido se dispersa en otro líquido, como la mayonesa", "Un gas en un sólido", "Un sólido en un gas", "Un líquido en un sólido"], "Dos líquidos que no se mezclan por completo.", "Ficha 6, p. 38"),
    O("q6-32", "t4", "¿Qué es un gel?", ["Un líquido disperso en un sólido, como la gelatina", "Un gas en un líquido", "Un sólido en un gas", "Un gas en un sólido"], "El sólido forma una red que atrapa al líquido.", "Ficha 6, p. 38"),
    O("q6-33", "t4", "¿Qué es una espuma sólida?", ["Un gas disperso en un sólido, como el merengue", "Un gas en un líquido", "Un líquido en un gas", "Un sólido en un líquido"], "Las burbujas quedan atrapadas en un sólido.", "Ficha 6, p. 38"),
    O("q6-34", "t4", "¿Qué es una espuma líquida?", ["Un gas disperso en un líquido, como la crema de afeitar", "Un líquido en un sólido", "Un sólido en un gas", "Un líquido en un gas"], "El gas forma burbujas en un líquido.", "Ficha 6, p. 38"),
    VF("q6-35", "t4", "El latón y el acero se pueden clasificar como mezclas heterogéneas.", false, "Falso. Son aleaciones, es decir, mezclas homogéneas de metales.", "Ficha 6, p. 37"),

    /* refuerzo · verdadero o falso */
    VF("q6-36", "t2", "Una mezcla homogénea tiene una sola fase.", true, "Verdadero.", "Ficha 6, p. 36"),
    VF("q6-37", "t3", "El agua de horchata, con arroz molido, tiene una sola fase.", false, "Falso. Es heterogénea.", "Ficha 6, p. 36"),
    VF("q6-38", "t4", "La mayonesa es una emulsión.", true, "Verdadero.", "Ficha 6, p. 38"),
    VF("q6-39", "t3", "La sangre es una mezcla homogénea.", false, "Falso. Es heterogénea.", "Ficha 6, p. 37")
  ]
});
