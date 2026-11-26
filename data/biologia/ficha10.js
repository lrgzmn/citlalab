/* BIOLOGÍA · 1.º de secundaria
   Ficha 10: Los hábitos alimenticios saludables (pp. 57 a 62)
   Correcciones al libro: el ejercicio de la p. 62 (7) corresponde a F, no a E; la tabla de calorías de la p. 59 es de adultos; la unidad de
   la vitamina A es mcg y la de C es mg; el total de obesidad en 2018 (12 a 19 años) es 14.6 %, no 14.1 % (que es el de mujeres).
   Dieta 1 = 2 631 kcal; dieta 2 = 598 kcal (sumas verificadas).
*/
REPASO.agregar({
  materia: 'biologia',
  ficha: { id: 'b10', titulo: 'Ficha 10 · Los hábitos alimenticios saludables', jefe: 'El Antojo Gigante' },
  temas: [
    { id: "t1", nombre: "Dieta equilibrada y Plato del Bien Comer" },
    { id: "t2", nombre: "Calorías y balance de energía" },
    { id: "t3", nombre: "Obesidad y diabetes" },
    { id: "t4", nombre: "Vitaminas" }
  ],
  preguntas: [

    /* t1 · Dieta equilibrada */
    O("b10-01", "t1", "¿Cuáles son los cinco componentes nutrimentales que menciona la ficha?", ["Carbohidratos, grasas (lípidos), proteínas, vitaminas y minerales","Azúcar, sal, aceite, agua, pan y otros alimentos de la cocina","Calorías, frío, calor, sed y hambre, entre otras sensaciones","Fibras, hojas, raíces, tallos y flores de las plantas comestibles"], "Una dieta equilibrada necesita los cinco.", "Ficha 10, p. 57"),
    O("b10-02", "t1", "¿Cuáles son los tres grupos del Plato del Bien Comer?", ["Verduras y frutas; cereales; leguminosas y alimentos de origen animal","Dulces, refrescos y frituras que se venden en la tienda escolar","Carnes, lácteos y grasas de origen animal y vegetal","Pan, tortillas, papas y otros alimentos de harina refinada"], "El Plato del Bien Comer es una guía que muestra los grupos de alimentos y su proporción.", "Ficha 10, p. 58"),
    O("b10-03", "t1", "En la dieta 1 (refresco, hamburguesa doble, papas fritas, helado, pan dulce...), ¿qué predomina?", ["Alimentos altos en grasas, azúcares y harinas refinadas","Verduras y frutas frescas, con muy pocas grasas y azúcares","Agua natural y alimentos ricos en fibra y en vitaminas","Solo proteínas, como carne, huevo y leguminosas"], "Esa dieta tiene pocas verduras y frutas. Es alta en grasas, azúcares y harinas refinadas.", "Ficha 10, p. 59"),
    O("b10-04", "t1", "La dieta 2 tiene jugo, papaya, pollo asado, ensalada, manzana, agua, leche y yogur. ¿Por qué se considera más balanceada que la dieta 1?", ["Incluye más variedad y más frutas y verduras", "Porque tiene más azúcar", "Porque no tiene proteínas", "Porque solo tiene líquidos"], "La variedad y las frutas y verduras la hacen más equilibrada. Es solo una lista de ejemplo.", "Ficha 10, p. 59"),
    VF("b10-05", "t1", "Una dieta equilibrada incluye alimentos variados de todos los grupos.", true, "Verdadero. Ningún alimento tiene todos los nutrimentos que necesitas.", "Ficha 10, p. 59"),
    O("b10-06", "t1", "¿Quién puede orientarte sobre tus necesidades de alimentación y calorías?", ["Un médico o un nutriólogo", "Cualquier anuncio", "Un compañero que lo vio en redes", "Nadie"], "Un especialista conoce tu edad, actividad y salud.", "Ficha 10, p. 60"),

    /* t2 · Calorías */
    O("b10-07", "t2", "¿Cuántas kilocalorías suma la dieta 1?", ["2 631", "598", "1 500", "3 200"], "352 + 234 + 220 + 700 + 240 + 300 + 524 + 61 = 2 631 kcal.", "Ficha 10, p. 57"),
    O("b10-08", "t2", "¿Cuántas kilocalorías suma la dieta 2?", ["598", "2 631", "1 200", "340"], "54 + 54 + 285 + 11 + 62 + 0 + 61 + 71 = 598 kcal.", "Ficha 10, p. 57"),
    O("b10-09", "t2", "La obesidad se produce cuando...", ["Se consume más energía de la que se quema", "Se consume menos energía de la que se quema", "Se toma mucha agua", "Se duerme bien"], "El exceso de energía se almacena como grasa.", "Ficha 10, p. 57"),
    VF("b10-10", "t2", "Si consumes más calorías de las que gastas, el cuerpo almacena el exceso como grasa.", true, "Verdadero. Para compensar, se necesita más actividad física o menos ingesta.", "Ficha 10, p. 60"),
    O("b10-11", "t2", "Si una persona necesita 2 200 kcal al día pero consume 3 200, ¿cuántas calorías de más ingiere?", ["1 000", "200", "2 000", "5 400"], "3 200 - 2 200 = 1 000 kcal. Si no las gasta, subirá de peso.", "Ficha 10, p. 60"),
    VF("b10-12", "t2", "Las necesidades de energía dependen de la edad, el sexo y el nivel de actividad física.", true, "Verdadero. Por eso no todas las personas necesitan lo mismo.", "Ficha 10, p. 59"),
    CM("b10-13", "t2", "Todos los adolescentes deben comer las calorías de la tabla de adultos (2 000 a 4 500)", ["Esa tabla es de adultos; las necesidades de un adolescente se calculan según su edad y actividad","Esa tabla aplica a cualquier edad, así que todos deben comer lo mismo","Hay que comer siempre 4 500 calorías para estar sano y fuerte","No importan las calorías que se consumen mientras se coma sano"], "La tabla del libro es de adultos y no es una meta. Un especialista puede calcular lo que necesita cada persona.", "Ficha 10, p. 59"),
    O("b10-14", "t2", "¿Por qué los hombres suelen necesitar más calorías que las mujeres, en promedio?", ["Suelen tener más masa muscular y un gasto de energía mayor","Porque comen más rápido y por eso necesitan más energía","Porque son más altos siempre, sin importar su edad ni su actividad","Porque duermen menos horas y gastan más energía en la noche"], "El músculo gasta más energía. Es una diferencia de promedios, no de cada persona.", "Ficha 10, p. 59"),

    /* t3 · Obesidad y diabetes */
    O("b10-15", "t3", "¿Qué factores influyen más en la obesidad?", ["Una dieta inadecuada y el sedentarismo", "El color del cabello", "El tamaño de los zapatos", "El idioma"], "También influyen la genética, el estrés, la falta de sueño y ciertos medicamentos, pero la dieta y el sedentarismo pesan más.", "Ficha 10, p. 59"),
    VF("b10-16", "t3", "La genética, el estrés y la falta de sueño pueden contribuir a la obesidad.", true, "Verdadero. No son la causa principal, pero influyen.", "Ficha 10, p. 59"),
    O("b10-17", "t3", "La diabetes ocurre cuando el cuerpo...", ["No produce insulina o no puede usarla adecuadamente","No produce sangre suficiente para llevar el oxígeno al cuerpo","Digiere los alimentos demasiado rápido y no absorbe nada","Produce demasiada saliva y la mezcla con los alimentos"], "La insulina es una hormona que regula el nivel de azúcar en la sangre.", "Ficha 10, p. 62"),
    VF("b10-18", "t3", "La obesidad aumenta el riesgo de desarrollar diabetes tipo 2.", true, "Verdadero. El exceso de grasa puede disminuir la sensibilidad a la insulina.", "Ficha 10, p. 57"),
    O("b10-19", "t3", "¿Qué es el sedentarismo?", ["La ausencia o falta de actividad física regular","Hacer ejercicio todos los días durante al menos una hora","Comer solo frutas y verduras en todas las comidas del día","Dormir bien y descansar las horas que el cuerpo necesita"], "Pasar mucho tiempo sentado y sin ejercicio reduce el gasto de energía.", "Ficha 10, p. 62"),
    O("b10-20", "t3", "¿Qué es la resistencia a la insulina?", ["Una disminución de la capacidad de la insulina para regular el azúcar en la sangre","Un exceso de insulina que aparece en la saliva después de comer","Una vitamina que ayuda a que la glucosa llegue a los músculos","Un ejercicio que se hace para bajar de peso de forma rápida"], "Con resistencia a la insulina, el azúcar se mantiene alta en la sangre.", "Ficha 10, p. 62"),
    O("b10-21", "t3", "¿Cómo influye la edad en la diabetes?", ["El envejecimiento puede disminuir la capacidad del cuerpo para regular el azúcar","La edad no influye en nada, solo importa la alimentación","Solo afecta a los bebés, porque todavía no regulan el azúcar","La diabetes desaparece sola con los años, al envejecer el cuerpo"], "Es el factor de la edad: la relación correcta en el ejercicio de la p. 62 es 7F, no 7E.", "Ficha 10, p. 62"),
    CM("b10-22", "t3", "La diabetes solo les da a las personas mayores", ["Puede aparecer a cualquier edad; los hábitos influyen", "Solo aparece en la infancia", "Solo aparece en quienes comen verduras", "No tiene relación con la alimentación"], "La edad es un factor, pero también influyen la dieta, el sedentarismo y la genética.", "Ficha 10, p. 62"),
    O("b10-23", "t3", "En la gráfica de la ENSANUT 2018 (12 a 19 años), ¿qué porcentaje del total presentaba obesidad?", ["14.6 %", "14.1 %", "23.8 %", "27.0 %"], "El libro marca 14.1 %, pero ese valor es el de mujeres. El total es 14.6 %. Sumado al sobrepeso (23.8 %) da 38.4 %.", "Ficha 10, p. 61"),

    /* t4 · Vitaminas */
    O("b10-24", "t4", "¿En qué unidades se mide la cantidad diaria de vitamina C?", ["Miligramos (mg)", "Microgramos (mcg)", "Kilogramos (kg)", "Litros (L)"], "La vitamina C se mide en miligramos; la vitamina A, en microgramos. El libro las pone al revés.", "Ficha 10, p. 61"),
    O("b10-25", "t4", "¿En qué unidades se mide la cantidad diaria de vitamina A?", ["Microgramos (mcg)", "Miligramos (mg)", "Kilogramos (kg)", "Gramos (g)"], "Un microgramo es mil veces menor que un miligramo.", "Ficha 10, p. 61"),
    O("b10-26", "t4", "¿Cuál es una buena fuente de vitamina C?", ["Guayaba", "Aceite", "Sal", "Tortilla"], "Kiwi, guayaba, pimiento rojo, limón, fresa y naranja tienen vitamina C (ácido ascórbico).", "Ficha 10, p. 61"),
    O("b10-27", "t4", "La vitamina B12 (cobalamina) se encuentra sobre todo en...", ["Alimentos de origen animal", "Frutas", "Cereales", "Aceites"], "Huevo y lácteos son fuentes de B12.", "Ficha 10, p. 61"),
    O("b10-28", "t4", "¿Qué alimentos aportan vitamina A (retinol)?", ["Zanahoria y espinaca", "Sal y azúcar", "Refresco", "Pan blanco"], "Verduras de colores intensos y de hoja verde son fuentes de vitamina A.", "Ficha 10, p. 61"),
    O("b10-29", "t4", "¿Qué alimentos son buena fuente de vitamina K?", ["Hojas de verduras verdes", "Refrescos", "Aceites refinados", "Pan dulce"], "La vitamina K abunda en verduras de hoja verde.", "Ficha 10, p. 61"),
    VF("b10-30", "t4", "La mayoría de las vitaminas se encuentran en verduras y frutas, pero también se necesitan alimentos de origen animal.", true, "Verdadero. Por eso conviene una dieta variada.", "Ficha 10, p. 62"),
    O("b10-31", "t4", "¿Qué vitamina es el colecalciferol?", ["La D", "La C", "La K", "La B12"], "La vitamina D se encuentra en pescados, huevo y lácteos.", "Ficha 10, p. 61"),
    CM("b10-32", "t4", "Las vitaminas me dan energía directamente, como los carbohidratos", ["Las vitaminas no aportan calorías: ayudan al cuerpo a funcionar", "Las vitaminas aportan más calorías que el azúcar", "Las vitaminas sustituyen al agua", "Las vitaminas solo sirven en adultos"], "Las vitaminas son necesarias en pequeñas cantidades; la energía viene de carbohidratos, grasas y proteínas.", "Ficha 10, p. 61")
  ]
});
