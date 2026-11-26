/* BIOLOGÍA · 1.º de secundaria
   Ficha 9: La salud y el riesgo de contraer una ITS (pp. 52 a 56)
   Correcciones al libro: el sida no "casi siempre causa la muerte" (con tratamiento efectivo se puede vivir una vida larga y
   saludable, según los CDC); el herpes genital no tiene cura. No se usa la pregunta de transfusión (sin fuente consultada).
*/
REPASO.agregar({
  materia: 'biologia',
  ficha: { id: 'b9', titulo: 'Ficha 9 · La salud y el riesgo de contraer una ITS', jefe: 'El Microbio Invisible' },
  temas: [
    { id: "t1", nombre: "Qué son las ITS y cómo se previenen" },
    { id: "t2", nombre: "Agentes que causan las ITS", icono: "microscopio" },
    { id: "t3", nombre: "Mitos y verdades sobre las ITS" },
    { id: "t4", nombre: "El condón y la toma de decisiones" }
  ],
  preguntas: [

    /* t1 · Qué son y prevención */
    O("b9-01", "t1", "¿Qué son las infecciones de transmisión sexual (ITS)?", ["Enfermedades que se transmiten por contacto sexual, causadas por bacterias, virus o parásitos","Enfermedades que solo se contagian por el aire y por compartir el salón","Alergias de la piel que aparecen por usar ropa o jabones nuevos","Deficiencias de vitaminas que se corrigen con una mejor alimentación"], "Las ITS se transmiten por contacto sexual y las pueden causar bacterias, virus o parásitos.", "Ficha 9, p. 52"),
    VF("b9-02", "t1", "Las ITS solo afectan a las mujeres.", false, "Falso. Afectan tanto a hombres como a mujeres.", "Ficha 9, p. 52"),
    O("b9-03", "t1", "¿Qué opciones previenen las ITS?", ["La abstinencia o el uso correcto y constante del condón","Lavarse las manos y el cuerpo con jabón después de cada relación","Tomar vitaminas y comer sano para fortalecer las defensas","Usar pastillas anticonceptivas de manera regular cada mes"], "La píldora previene el embarazo, pero no protege contra las ITS.", "Ficha 9, p. 52"),
    VF("b9-04", "t1", "Algunas ITS pueden no presentar síntomas visibles.", true, "Verdadero. Por eso una persona puede estar infectada sin saberlo.", "Ficha 9, p. 56"),
    VF("b9-05", "t1", "Si una persona se ve saludable, no puede tener una ITS.", false, "Falso. No se puede saber por la apariencia.", "Ficha 9, p. 56"),
    CM("b9-06", "t1", "Las y los jóvenes no se contagian de ITS", ["Las y los jóvenes también pueden contagiarse", "Los jóvenes están protegidos por su edad", "Solo se contagian los adultos", "Las ITS no existen en adolescentes"], "Nadie está protegido por su edad. La desinformación y las falsas creencias aumentan el riesgo.", "Ficha 9, p. 56"),

    /* t2 · Agentes */
    O("b9-07", "t2", "La sífilis es causada por...", ["Una bacteria (Treponema pallidum)", "Un virus", "Un piojo", "Un hongo del pan"], "La sífilis es una infección bacteriana.", "Ficha 9, p. 52"),
    O("b9-08", "t2", "La gonorrea es causada por...", ["Una bacteria (Neisseria gonorrhoeae)", "Un virus", "Un protista", "Un piojo"], "Es una infección bacteriana que afecta a hombres y mujeres.", "Ficha 9, p. 52"),
    O("b9-09", "t2", "El virus del papiloma humano (VPH) puede provocar...", ["Verrugas y, en algunos casos, cáncer cervical", "Caries", "Fracturas", "Anemia"], "Puede ser asintomático, pero algunos tipos provocan verrugas y cáncer cervical.", "Ficha 9, p. 52"),
    O("b9-10", "t2", "El herpes genital es causado por...", ["Un virus", "Una bacteria", "Un protista", "Un parásito del intestino"], "Produce vesículas en los genitales y la piel cercana y reaparece a intervalos.", "Ficha 9, p. 52"),
    O("b9-11", "t2", "El VIH es...", ["Un virus que ataca el sistema inmunitario", "Una bacteria del intestino", "Un piojo", "Una vitamina"], "El VIH ataca las defensas del cuerpo. El sida es la etapa avanzada de la infección.", "Ficha 9, p. 53"),
    O("b9-12", "t2", "La tricomoniasis es causada por...", ["Un protista (Trichomonas vaginalis)", "Un virus", "Una bacteria", "Un hongo"], "Es una infección causada por un protista.", "Ficha 9, p. 53"),
    O("b9-13", "t2", "Las ladillas son causadas por...", ["Piojos púbicos", "Virus", "Bacterias", "Protistas"], "Son piojos púbicos que se contagian por contacto cercano.", "Ficha 9, p. 53"),
    O("b9-14", "t2", "¿Qué ITS bacteriana puede aumentar el riesgo de infertilidad en mujeres si no se trata?", ["La clamidia", "El herpes", "El VIH", "El VPH"], "La clamidia puede dañar los órganos reproductivos si no se detecta ni se trata.", "Ficha 9, p. 54"),

    /* t3 · Mitos y verdades */
    VF("b9-15", "t3", "El VIH se transmite por un apretón de manos.", false, "Falso. No se transmite por contacto casual como un saludo.", "Ficha 9, p. 54"),
    VF("b9-16", "t3", "El VIH se transmite cuando ciertos fluidos (sangre, semen, fluidos vaginales) entran en contacto con una mucosa o tejido dañado, o se inyectan directamente en la sangre.", true, "Verdadero. Esa es la explicación de los CDC.", "Ficha 9, p. 53"),
    VF("b9-17", "t3", "El herpes genital se cura por completo con medicamentos.", false, "Falso. No tiene cura, aunque hay medicamentos que previenen o acortan los brotes.", "Ficha 9, p. 54"),
    VF("b9-18", "t3", "Con tratamiento efectivo, una persona con VIH puede vivir una vida larga y saludable.", true, "Verdadero. Según los CDC, quien recibe y mantiene un tratamiento efectivo puede vivir mucho tiempo y proteger a sus parejas.", "Ficha 9, p. 53"),
    VF("b9-19", "t3", "La gonorrea solo la padecen los hombres.", false, "Falso. Puede afectar a hombres y mujeres.", "Ficha 9, p. 54"),
    VF("b9-20", "t3", "Una ITS solo se puede contraer después de muchas relaciones sexuales sin protección.", false, "Falso. Basta una sola relación sin protección para contraer una ITS.", "Ficha 9, p. 56"),
    CM("b9-21", "t3", "El sida siempre causa la muerte, aunque se trate", ["Sin tratamiento daña el sistema inmunitario, pero con tratamiento efectivo se puede vivir mucho tiempo","El sida desaparece solo con el paso del tiempo, sin necesidad de tratamiento","El sida solo afecta a los adultos mayores y nunca a los jóvenes","El sida se cura por completo con vitaminas y una buena alimentación"], "El libro dice que casi siempre causa la muerte. Hoy el tratamiento permite una vida larga y saludable.", "Ficha 9, p. 53"),

    /* t4 · Condón y decisiones */
    O("b9-22", "t4", "¿Cuál es la eficacia aproximada del condón masculino con uso correcto y constante?", ["Alrededor de 98 %", "Alrededor de 20 %", "Alrededor de 50 %", "100 %"], "Con uso perfecto falla alrededor de 2 de cada 100. Con uso típico, 13 de cada 100.", "Ficha 9, p. 53"),
    O("b9-23", "t4", "¿Qué método anticonceptivo ayuda también a prevenir la transmisión de ITS?", ["El preservativo (condón)", "La píldora", "El DIU", "La píldora de emergencia"], "El condón es el que cumple las dos funciones.", "Ficha 9, p. 54"),
    O("b9-24", "t4", "¿Qué opciones previenen a la vez un embarazo no deseado y una ITS?", ["Abstinencia o condón, solo o junto con otro método","Solo la píldora anticonceptiva, tomada todos los días","Solo el parche anticonceptivo, usado de forma correcta","Ninguna, porque no existe un método que haga las dos cosas"], "Combinar el condón con otro método puede aumentar la protección.", "Ficha 9, p. 54"),
    O("b9-25", "t4", "¿Qué ITS puede transmitirse durante el embarazo y causar complicaciones al bebé, como ceguera o sordera?", ["La sífilis", "Las ladillas", "La tricomoniasis", "El resfriado común"], "La sífilis puede transmitirse al bebé durante el embarazo.", "Ficha 9, p. 54"),
    VF("b9-26", "t4", "Un embarazo no planeado en la adolescencia puede traer abandono de los estudios y más riesgo de complicaciones.", true, "Verdadero. También puede generar problemas personales, sociales y económicos.", "Ficha 9, p. 54"),
    VF("b9-27", "t4", "Si se decide tener relaciones sexuales, deben ser protegidas.", true, "Verdadero. Usando condón y, si se desea, otro método anticonceptivo.", "Ficha 9, p. 54"),
    O("b9-28", "t4", "¿Cuál es la mejor opción para evitar un embarazo y una ITS siendo adolescente?", ["La abstinencia; o, si se tienen relaciones, usar condón", "Confiar en que no pasará nada", "Usar la píldora de emergencia como método habitual", "Preguntar solo a los amigos"], "Sin contacto sexual no hay riesgo. Si se decide tenerlo, el condón reduce ambos riesgos.", "Ficha 9, p. 56")
  ]
});
