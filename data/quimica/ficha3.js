/* QUÍMICA · 3.º de secundaria
   Ficha 3: Toma de decisiones: hábitos de consumo de plásticos (pp. 19 a 23)
   Correcciones al libro: el monómero del polipropileno es CH2=CH-CH3 (propileno); ninguna de las opciones del libro lo es.
   Se omiten las cifras sin fuente (21.3 millones de botellas al día, 1.2 kg de residuos por habitante, 240 años de una bolsa).
*/
REPASO.agregar({
  materia: 'quimica',
  ficha: { id: 'q3', titulo: 'Ficha 3 · Toma de decisiones: hábitos de consumo de plásticos', jefe: 'La Botella Eterna' },
  temas: [
    { id: "t1", nombre: "Qué son los plásticos y los polímeros" },
    { id: "t2", nombre: "Plásticos que sustituyen materiales naturales" },
    { id: "t3", nombre: "Códigos de identificación" },
    { id: "t4", nombre: "Las cuatro erres y el consumo responsable" }
  ],
  preguntas: [

    /* t1 · Polímeros */
    O("q3-01", "t1", "¿Qué es un polímero?", ["Una molécula gigante formada por la repetición de unidades más pequeñas","Un metal muy duro formado por átomos de un solo elemento","Un gas del aire formado por moléculas pequeñas","Una sal formada por la unión de un metal y un no metal"], "Las unidades pequeñas que se repiten se llaman monómeros.", "Ficha 3, p. 20"),
    O("q3-02", "t1", "¿Cuál es el monómero del polietileno?", ["El etileno", "El propileno", "El metano", "El agua"], "Muchas moléculas de etileno se unen para formar polietileno.", "Ficha 3, p. 20"),
    O("q3-03", "t1", "¿Cuál es la fórmula del monómero del polipropileno?", ["CH₂=CH–CH₃", "CH₂=CH₂", "CH₃–CH₂–CH₃", "CH₂=CH–CH₂–CH₃"], "El propileno tiene tres carbonos y un doble enlace. En la cadena del polipropileno, cada unidad lleva un grupo CH₃.", "Ficha 3, p. 23"),
    VF("q3-04", "t1", "El almidón, las proteínas y el ADN no son polímeros.", false, "Falso. También son polímeros: son moléculas gigantes formadas por unidades que se repiten, aunque no son plásticos.", "Ficha 3, p. 20"),
    VF("q3-05", "t1", "Todos los polímeros son plásticos.", false, "Falso. Hay polímeros naturales, como la celulosa y las proteínas.", "Ficha 3, p. 20"),
    O("q3-06", "t1", "¿De qué se obtiene la materia prima de gran parte de los plásticos?", ["Del petróleo", "Del agua", "Del maíz siempre", "Del aire"], "El petróleo es un recurso natural no renovable.", "Ficha 3, p. 19"),
    O("q3-07", "t1", "¿Qué propiedades de los plásticos hacen difícil desecharlos?", ["Su durabilidad y su poca reactividad","Que se disuelven en agua","Que se queman solos","Que son muy pesados"], "Su durabilidad y su poca reactividad hacen que tarden mucho en degradarse, por eso se acumulan como residuos.", "Ficha 3, p. 19"),
    O("q3-08", "t1", "¿Qué ventajas tienen los plásticos?", ["Son ligeros, resistentes, fáciles de manejar y pueden imitar materiales naturales","Son pesados y frágiles, por eso casi no se usan en los envases","Se degradan en un solo día, por eso no generan residuos","Son siempre biodegradables y por eso no contaminan el ambiente"], "Por eso se usan en tantos objetos.", "Ficha 3, p. 19"),

    /* t2 · Plásticos que sustituyen */
    O("q3-09", "t2", "¿Qué plástico sustituyó al marfil de las bolas de billar?", ["La baquelita","El nailon","El polipropileno","El poliéster"], "La baquelita sustituyó al marfil en las bolas de billar; antes también se usó el celuloide.", "Ficha 3, p. 20"),
    O("q3-10", "t2", "¿Qué plástico sustituyó al carey de las peinetas?", ["El celuloide", "El nailon", "El PVC", "La baquelita"], "El carey procede del caparazón de tortugas marinas.", "Ficha 3, p. 20"),
    O("q3-11", "t2", "¿Qué plástico sustituyó a la seda?", ["El nailon 6,6", "El PVC", "La baquelita", "El unicel"], "La seda se obtiene de las larvas de la mariposa Bombyx mori.", "Ficha 3, p. 20"),
    O("q3-12", "t2", "¿Qué beneficio ha traído la síntesis de plásticos?", ["Protegió a especies en peligro, como elefantes y tortugas, y abarató materiales","Aumentó la extinción de especies, como elefantes y tortugas, por usar más recursos","Eliminó los residuos del mundo, porque los plásticos desaparecen solos","Encareció los materiales y volvió más difícil conseguirlos para todos"], "Se pueden fabricar objetos sin recurrir a animales.", "Ficha 3, p. 20"),
    VF("q3-13", "t2", "El duraluminio es una aleación de aluminio con cobre, manganeso, magnesio y silicio.", true, "Verdadero. Algunas estructuras de avión que se hacían con él pueden reemplazarse con poliéster reforzado de fibra de vidrio.", "Ficha 3, p. 20"),
    VF("q3-14", "t2", "La madera plástica se usa para sustituir a la madera en vallas de jardín.", true, "Verdadero. Evita cortar árboles.", "Ficha 3, p. 20"),

    /* t3 · Códigos */
    O("q3-15", "t3", "¿Para qué sirve el código de identificación que traen los plásticos?", ["Para identificar y separar los plásticos y facilitar su reciclaje","Para saber el precio y el lugar donde se compró","Para indicar quién fabricó el producto y en qué año","Para decorar el envase y darle un mejor aspecto"], "Cada número o siglas corresponde a un tipo de plástico.", "Ficha 3, p. 21"),
    O("q3-16", "t3", "¿Qué plástico se identifica con las siglas PET?", ["Polietilentereftalato, el de las botellas de agua","Polipropileno, el de los contenedores y las tapas","Poliestireno, el de los vasos y charolas de unicel","Policloruro de vinilo, el de las tuberías"], "Es transparente, ligero y reciclable.", "Ficha 3, p. 19"),
    O("q3-17", "t3", "¿Qué plástico es el PEAD?", ["Polietileno de alta densidad, de envases de limpieza", "Polietileno de baja densidad, de bolsas", "Poliestireno", "Nailon"], "El forro de cuaderno es de polietileno de baja densidad (PEBD).", "Ficha 3, p. 21"),
    O("q3-18", "t3", "¿Qué plástico es el PVC?", ["Policloruro de vinilo, usado en botas para agua","Polietilentereftalato, el de las botellas de agua","Polipropileno, el de los contenedores y las tapas","Poliestireno, el de los vasos y charolas de unicel"], "El libro lo llama \"polivinilo\", pero su nombre completo es policloruro de vinilo.", "Ficha 3, p. 21"),
    O("q3-19", "t3", "¿De qué plástico es el vaso de unicel?", ["Poliestireno (PS)", "PET", "PEAD", "Polipropileno"], "El unicel es poliestireno expandido.", "Ficha 3, p. 21"),
    O("q3-20", "t3", "¿Qué plástico se usa en jeringas desechables y parachoques?", ["Polipropileno (PP)", "Poliestireno", "PVC", "Nailon"], "El PP es resistente y flexible.", "Ficha 3, p. 21"),
    O("q3-21", "t3", "¿Cuáles son los plásticos más fáciles de reciclar, según la ficha?", ["PET, PEAD y polipropileno", "PVC, unicel y nailon", "Solo el unicel", "Ninguno"], "Son los más aceptados en los centros de acopio.", "Ficha 3, p. 21"),
    VF("q3-22", "t3", "Los lentes livianos y las redes de pesca se agrupan en el código \"Otros\".", true, "Verdadero. Los de policarbonato y nailon entran en esa categoría.", "Ficha 3, p. 21"),

    /* t4 · Las cuatro erres */
    O("q3-23", "t4", "¿Cuáles son las \"cuatro erres\"?", ["Reducir, rechazar, reutilizar y reciclar", "Romper, rellenar, reparar y reír", "Recoger, regalar, rehacer y relajar", "Reducir, repetir, reservar y reponer"], "Es una regla para atenuar el impacto de los plásticos.", "Ficha 3, p. 22"),
    O("q3-24", "t4", "¿Qué significa \"rechazar\"?", ["Sustituir los plásticos por otros materiales, de preferencia renovables","Tirar los plásticos en cualquier lugar para que se desechen","Quemar los plásticos en casa para que ya no estorben","Comprar más plástico para tener siempre envases de repuesto"], "Por ejemplo, platos de maíz o de papa que se degradan en pocos meses.", "Ficha 3, p. 22"),
    O("q3-25", "t4", "¿Qué significa \"reducir\"?", ["Usar menos plástico y durante más tiempo; comprar solo lo necesario","Cortar los plásticos en trozos pequeños para tirarlos","Comprar más productos con envases pequeños de plástico","Rellenar la basura con plásticos para que quepa más"], "Por ejemplo, tomar agua de bebederos en lugar de botellas.", "Ficha 3, p. 22"),
    O("q3-26", "t4", "¿Qué significa \"reutilizar\"?", ["Volver a usar un producto o darle un nuevo uso","Quemarlo para aprovechar el calor que produce","Enterrarlo en el suelo para que no se vea","Fundirlo en una fábrica para fabricar otro producto"], "Por ejemplo, convertir una botella en florero o lapicero.", "Ficha 3, p. 23"),
    O("q3-27", "t4", "¿Qué significa \"reciclar\"?", ["Procesar el material desechado y separado para volver a usarlo como recurso","Tirarlo a la basura común junto con los demás residuos","Dejarlo al sol para que se degrade con el tiempo","Regalarlo siempre a otra persona para que lo use"], "Por ejemplo, con cinco botellas de PET se obtiene fibra para un impermeable.", "Ficha 3, p. 23"),
    O("q3-28", "t4", "Comprar bebidas en envases retornables o convertir los envases en contenedores para bolígrafos corresponde a...", ["Reutilizar", "Reciclar", "Rechazar", "Quemar"], "Se vuelve a usar sin reprocesar el material.", "Ficha 3, p. 23"),
    O("q3-29", "t4", "Con cinco botellas de PET se obtiene fibra suficiente para un impermeable. Eso es...", ["Reciclar", "Reutilizar", "Reducir", "Rechazar"], "El material se procesa para fabricar un producto nuevo.", "Ficha 3, p. 23"),
    VF("q3-30", "t4", "El consumo de agua embotellada genera residuos de PET que son un serio problema porque este plástico no se degrada fácilmente.", true, "Verdadero. Aunque es reciclable, no es biodegradable.", "Ficha 3, p. 19"),
    CM("q3-31", "t4", "Tirar los plásticos a la basura común resuelve el problema, porque desaparecen", ["No desaparecen: se acumulan y contaminan el suelo y el agua","Se evaporan con el calor del Sol y no dejan rastro","Se convierten en tierra fértil con el paso de las semanas","Se vuelven alimento para las plantas y los animales"], "Por eso hay que separarlos y llevarlos a un centro de acopio.", "Ficha 3, p. 21"),

    /* refuerzo · verdadero o falso */
    VF("q3-32", "t1", "El PET se usa para fabricar botellas de agua.", true, "Verdadero. El PET (polietilentereftalato) se usa para fabricar botellas de agua y de refresco.", "Ficha 3, p. 19"),
    VF("q3-33", "t3", "Todos los plásticos son biodegradables.", false, "Falso. La mayoría tarda mucho tiempo en degradarse.", "Ficha 3, p. 19"),
    VF("q3-34", "t3", "El polipropileno se identifica con las siglas PVC.", false, "Falso. El polipropileno se identifica con las siglas PP; PVC es el policloruro de vinilo.", "Ficha 3, p. 21"),
    VF("q3-35", "t4", "Reutilizar es volver a usar un producto o darle otro uso.", true, "Verdadero. Reutilizar es volver a usar un producto o darle otro uso, sin tener que procesarlo de nuevo.", "Ficha 3, p. 23"),
    VF("q3-36", "t4", "Reciclar significa tirar los plásticos a la basura.", false, "Falso. Es procesarlos para convertirlos en material nuevo.", "Ficha 3, p. 23")
  ]
});
