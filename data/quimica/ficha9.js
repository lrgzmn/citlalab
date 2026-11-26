/* QUÍMICA · 3.º de secundaria
   Ficha 9: Concentración de una mezcla y efectividad (pp. 52 a 56)
   Se omiten las dosis de cloro de la actividad 1 (p. 52-53: por ejemplo, 625 mL de cloro en 2 L de agua no se pudo confirmar y sería peligroso
   en la práctica). Siempre se sigue la etiqueta del producto. Grasas trans: 0 g por 100 g = 0 % (el libro anota 0.145 %).
   Equivalencias de la tabla del chocolate verificadas con Python: sodio 145 mg/100 g = 0.145 %; vitamina A 290 µg/100 g = 0.00029 % = 2.9 ppm.
*/
REPASO.agregar({
  materia: 'quimica',
  ficha: { id: 'q9', titulo: 'Ficha 9 · Concentración de una mezcla y efectividad', jefe: 'El Cloro Descuidado' },
  temas: [
    { id: "t1", nombre: "Concentración y efectividad" },
    { id: "t2", nombre: "Uso seguro del cloro" },
    { id: "t3", nombre: "Otras unidades: mg/L y ppm" },
    { id: "t4", nombre: "Etiquetas de alimentos" },
    { id: "t5", nombre: "Productos de higiene" }
  ],
  preguntas: [

    /* t1 · Concentración y efectividad */
    O("q9-01", "t1", "¿Qué concentración de alcohol debe tener un gel desinfectante para manos?", ["Entre 60 % y 80 %", "Menos de 20 %", "Más de 95 %", "Cualquiera"], "A esa concentración es eficaz para destruir virus como el SARS-CoV-2 en las manos.", "Ficha 9, p. 52"),
    O("q9-02", "t1", "¿Qué pasa si el gel tiene una concentración de alcohol menor a la recomendada?", ["Disminuye su eficacia", "Se vuelve más eficaz", "No cambia", "Se convierte en jabón"], "Una concentración baja no destruye bien los microorganismos.", "Ficha 9, p. 52"),
    O("q9-03", "t1", "¿Qué riesgo hay si la concentración es mucho mayor que la recomendada?", ["Aumenta la exposición y puede representar riesgos para la salud","No hay ningún riesgo, porque mientras más concentrado, mejor","El gel es más agradable y se siente más fresco","Se evapora más lento y deja más protección sobre las manos"], "Más concentración no siempre es mejor.", "Ficha 9, p. 52"),
    VF("q9-04", "t1", "La concentración de una mezcla determina el tipo y la magnitud del efecto en los seres vivos y en el ambiente.", true, "Verdadero. Es la conclusión central de la ficha.", "Ficha 9, p. 53"),
    VF("q9-05", "t1", "A mayor concentración de un desinfectante, siempre es más seguro.", false, "Falso. Una concentración excesiva aumenta la exposición y puede causar irritación y otros daños.", "Ficha 9, p. 53"),
    O("q9-06", "t1", "¿Qué es una dosis?", ["La cantidad de sustancia a la que se expone el organismo y por cuánto tiempo","El color y el olor que tiene un medicamento cuando se abre el frasco","El nombre comercial con el que se vende el producto en las farmacias","El envase en el que se guarda la sustancia mientras se transporta"], "Por eso importa cuánto y por cuánto tiempo.", "Ficha 9, p. 52"),

    /* t2 · Cloro */
    O("q9-07", "t2", "¿Qué es el cloro comercial?", ["Una disolución de hipoclorito de sodio, de 3.5 % a 5 %, usada como desinfectante","Cloro puro gaseoso que se vende en tanques de gas para las casas","Sal de mesa disuelta en agua que se usa para limpiar los pisos","Agua con jabón y un poco de colorante que se usa para blanquear"], "El cloro comercial es una disolución de hipoclorito de sodio (NaClO) que se usa como desinfectante y blanqueador.", "Ficha 9, p. 52"),
    O("q9-08", "t2", "¿Qué se genera al mezclar cloro (hipoclorito de sodio) con productos ácidos, como el jugo de limón?", ["Cloro gaseoso, que es altamente tóxico", "Agua pura", "Una sal inofensiva", "Un perfume"], "Nunca se mezcla el cloro con otros productos de limpieza.", "Ficha 9, p. 53"),
    VF("q9-09", "t2", "Se debe ventilar el área siempre que se use cloro.", true, "Verdadero. Evita respirar vapores irritantes.", "Ficha 9, p. 53"),
    VF("q9-10", "t2", "Para aumentar su poder de limpieza conviene diluir el cloro con agua caliente.", false, "Falso. No se recomienda: el agua caliente aumenta los vapores y no mejora la desinfección.", "Ficha 9, p. 53"),
    VF("q9-11", "t2", "No mezclar el cloro con otros productos de limpieza es una medida de seguridad.", true, "Verdadero. Se usa solo, disuelto en agua.", "Ficha 9, p. 53"),
    VF("q9-12", "t2", "No es necesario usar guantes para lavar trastes con cloro.", false, "Falso. Se deben usar guantes para evitar comezón, ardor, urticaria y enrojecimiento de la piel.", "Ficha 9, p. 53"),
    CM("q9-13", "t2", "Si una etiqueta dice 20 mL de cloro por litro, usar el doble limpia el doble de bien", ["Se debe seguir la dosis de la etiqueta: más cloro no limpia mejor y aumenta los riesgos","Es mejor usar el doble siempre, porque así se desinfecta más","Es mejor usar la mitad siempre, porque el cloro es muy peligroso","No importa la dosis, porque el cloro siempre limpia igual"], "La dosis correcta equilibra efectividad y seguridad.", "Ficha 9, p. 53"),

    /* t3 · mg/L y ppm */
    O("q9-14", "t3", "¿Qué significa ppm?", ["Partes por millón", "Pesos por minuto", "Por medio de pipeta", "Porcentaje por masa"], "Es el número de unidades de soluto por millón de unidades de la mezcla.", "Ficha 9, p. 54"),
    O("q9-15", "t3", "¿Cuándo conviene usar ppm?", ["Cuando las concentraciones son muy pequeñas", "Cuando son muy grandes", "Para medir temperaturas", "Para medir tiempos"], "Por ejemplo, para vitaminas o contaminantes.", "Ficha 9, p. 54"),
    O("q9-16", "t3", "Además de % en masa y % en volumen, ¿cómo se puede expresar la concentración?", ["En mg/L y en ppm", "En grados", "En segundos", "En metros"], "Depende del compuesto y de cómo se vaya a usar.", "Ficha 9, p. 54"),
    O("q9-17", "t3", "¿De qué depende la eficacia del ozono para desinfectar agua?", ["De su concentración", "Del color del agua", "De la hora del día", "De la forma del recipiente"], "Una concentración adecuada mata bacterias e inactiva virus.", "Ficha 9, p. 54"),
    O("q9-18", "t3", "290 µg de vitamina A en 100 g de producto equivalen a...", ["2.9 ppm (2.9 mg por kg)", "290 ppm", "0.29 ppm", "29 ppm"], "290 µg = 0.29 mg por 100 g, y por 1 kg son 2.9 mg.", "Ficha 9, p. 55"),

    /* t4 · Etiquetas */
    O("q9-19", "t4", "En una etiqueta que dice \"por cada 100 g de polvo\", ¿qué unidad de concentración se usa?", ["Porcentaje en masa (g por 100 g)", "Porcentaje en volumen", "ppm", "g/mL"], "Los gramos por 100 g son el porcentaje en masa.", "Ficha 9, p. 55"),
    O("q9-20", "t4", "Un chocolate en polvo tiene 87 g de azúcares por 100 g. ¿Qué porcentaje en masa es?", ["87 %", "8.7 %", "0.87 %", "870 %"], "Por cada 100 g de polvo, 87 g son azúcares.", "Ficha 9, p. 55"),
    O("q9-21", "t4", "Un chocolate en polvo tiene 145 mg de sodio por 100 g. ¿Qué porcentaje en masa es?", ["0.145 %", "145 %", "1.45 %", "0.0145 %"], "145 mg = 0.145 g, y 0.145 g en 100 g es 0.145 %.", "Ficha 9, p. 55"),
    O("q9-22", "t4", "Una porción tiene 290 µg de vitamina A por 100 g. ¿Qué porcentaje en masa es?", ["0.00029 %", "0.29 %", "0.0029 %", "29 %"], "290 µg = 0.00029 g, y 0.00029 g en 100 g es 0.00029 %.", "Ficha 9, p. 55"),
    O("q9-23", "t4", "Una etiqueta indica grasas trans: 0 g por 100 g. ¿Qué porcentaje en masa es?", ["0 %","0.145 %","1 %","100 %"], "Cero gramos en 100 g es 0 %: (0 ÷ 100) × 100 = 0 %.", "Ficha 9, p. 55"),
    O("q9-24", "t4", "Una vitamina B1 de 1 220 µg por 100 g es...", ["0.00122 %", "1.22 %", "0.0122 %", "12.2 %"], "1 220 µg = 0.00122 g, y esa cantidad en 100 g es 0.00122 %.", "Ficha 9, p. 55"),
    O("q9-25", "t4", "¿Para qué sirve el etiquetado frontal de los alimentos?", ["Para advertir de forma simple los ingredientes que están en exceso y dañan la salud","Para decorar el empaque y que el producto se vea más atractivo en la tienda","Para indicar el precio y el lugar donde se produjo el alimento","Para indicar la marca y la fecha de caducidad del producto"], "Por ejemplo, los sellos \"exceso calorías\" y \"exceso grasas saturadas\".", "Ficha 9, p. 55"),
    O("q9-26", "t4", "¿Qué utilidad tiene la declaración nutrimental?", ["Saber si la energía y los nutrimentos de un alimento están dentro de lo que requerimos","Saber el color y el sabor que tiene el producto cuando se abre el envase","Saber quién lo vende y en qué tienda conviene comprarlo más barato","Saber la fecha en que se compró y cuánto tiempo lleva guardado en casa"], "Ayuda a decidir de forma informada.", "Ficha 9, p. 55"),

    /* t5 · Higiene */
    O("q9-27", "t5", "El enjuague bucal con clorhexidina al 0.12 % se usa para...", ["Tratar la gingivitis o después de una limpieza dental profunda","Blanquear los dientes de por vida con un solo uso","Curar el resfriado y la tos que se dan en el invierno","Sustituir el cepillado y el uso del hilo dental"], "No debe ser parte de la rutina de higiene bucal a largo plazo.", "Ficha 9, p. 56"),
    O("q9-28", "t5", "¿Qué desventajas puede tener la clorhexidina?", ["Mancha los dientes y puede alterar el sentido del gusto","Pica los ojos y quema la piel de las manos","Provoca fiebre alta y dolor en las articulaciones","Produce sueño y baja la presión de quien lo usa"], "Por eso se prescribe por periodos breves, de máximo 15 días.", "Ficha 9, p. 56"),
    VF("q9-29", "t5", "Conocer la concentración de los ingredientes de un producto ayuda a tomar decisiones de compra y de uso seguro.", true, "Verdadero. Es parte del consumo responsable.", "Ficha 9, p. 56"),
    VF("q9-30", "t5", "Un enjuague bucal fuerte debe usarse todos los días de por vida.", false, "Falso. Algunos, como los de clorhexidina, son para periodos cortos y con indicación del dentista.", "Ficha 9, p. 56")
  ]
});
