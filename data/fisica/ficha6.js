/* FÍSICA · 2.º de secundaria
   Ficha 6: Estructura, propiedades y características de la materia (pp. 35 a 39)
   Se omiten los ejercicios de opinión, de dibujo y de respuesta libre. Para decisiones de materiales se usa el criterio general de la ficha
   (se aceptan varias opciones razonables en la vida real, por eso se preguntan solo los usos más claros).
*/
REPASO.agregar({
  materia: 'fisica',
  ficha: { id: 'f6', titulo: 'Ficha 6 · Estructura, propiedades y características de la materia', jefe: 'El Material Fantasma' },
  temas: [
    { id: "t1", nombre: "Elegir materiales según su uso" },
    { id: "t2", nombre: "Materiales inteligentes" },
    { id: "t3", nombre: "Materiales en objetos de uso diario" },
    { id: "t4", nombre: "Materiales tradicionales y aplicaciones" }
  ],
  preguntas: [

    /* t1 · Elegir materiales */
    O("f6-01", "t1", "¿Qué características se piden a los materiales de uso diario?", ["Que sean resistentes, duraderos y de poco mantenimiento", "Que se rompan rápido", "Que cambien de color", "Que sean muy caros"], "Calidad, selección, mantenimiento y diversidad de usos son criterios de la ficha.", "Ficha 6, p. 35"),
    O("f6-02", "t1", "Para construir una casa en clima cálido, ¿qué materiales convienen?", ["Tabique y cemento, porque son durables y frescos", "Lana", "Papel", "Plástico delgado"], "Son resistentes, mantienen fresco el interior y requieren poco mantenimiento.", "Ficha 6, p. 35"),
    O("f6-03", "t1", "Para una prenda de clima frío, ¿qué material conviene?", ["Lana, porque es resistente y abrigadora", "Algodón muy delgado", "Lino", "Papel"], "La lana abriga y requiere poco mantenimiento.", "Ficha 6, p. 35"),
    O("f6-04", "t1", "¿Qué material es adecuado para unos cubiertos de cocina?", ["El metal, porque es resistente, manejable y fácil de mantener", "El papel", "La cera", "El algodón"], "Aguanta el uso diario y se limpia con facilidad.", "Ficha 6, p. 35"),
    O("f6-05", "t1", "Para una prenda de clima cálido conviene un material...", ["Fresco y resistente, como el algodón", "Muy grueso y abrigador", "Impermeable y sin poros", "De lana pesada"], "El algodón es fresco y resistente.", "Ficha 6, p. 36"),
    VF("f6-06", "t1", "Además de las propiedades, se consideran la disponibilidad, la tradición, la economía y la ecología al elegir un material.", true, "Verdadero. No basta con que sea resistente.", "Ficha 6, p. 36"),
    O("f6-07", "t1", "¿Qué material conviene para unas tijeras que podan arbustos?", ["Acero endurecido, porque es duradero y se mantiene con poco cuidado", "Papel", "Madera blanda", "Cera"], "Solo requiere engrasarse de vez en cuando.", "Ficha 6, p. 36"),
    VF("f6-08", "t1", "El material de construcción más durable siempre es el más barato.", false, "Falso. Hay que balancear durabilidad, costo, clima y mantenimiento.", "Ficha 6, p. 36"),

    /* t2 · Inteligentes */
    O("f6-09", "t2", "¿Qué son los materiales inteligentes?", ["Materiales que reaccionan a estímulos externos, como luz, temperatura o presión", "Materiales que piensan", "Materiales muy baratos", "Materiales que no se pueden reciclar"], "Responden a un estímulo del entorno y cambian alguna de sus propiedades.", "Ficha 6, p. 35"),
    O("f6-10", "t2", "El concreto transparente (o translúcido) permite...", ["El paso de la luz, lo que puede ahorrar energía en la iluminación de interiores", "Que el agua pase libremente", "Que los muros floten", "Que los edificios se muevan"], "Es un ejemplo de material inteligente para la construcción.", "Ficha 6, p. 37"),
    O("f6-11", "t2", "Las tejas fotovoltaicas se componen de...", ["Células solares, hechas con materiales semiconductores como el silicio", "Madera tratada", "Barro cocido", "Algodón"], "Convierten la luz del Sol en electricidad.", "Ficha 6, p. 37"),
    O("f6-12", "t2", "¿Qué características tiene el aerogel?", ["Es un sólido muy poroso, de muy baja densidad y buen aislante térmico", "Es un líquido muy denso", "Es un metal pesado", "Es un gas"], "Se usa como aislante porque conduce muy poco el calor.", "Ficha 6, p. 37"),
    O("f6-13", "t2", "Los metales con memoria...", ["Recuperan su forma cuando cesa el esfuerzo que los deformó", "Recuerdan nombres", "Se disuelven en agua", "Siempre se rompen"], "Son aleaciones que vuelven a su forma original, por ejemplo con calor.", "Ficha 6, p. 37"),
    O("f6-14", "t2", "El slime, usado como \"tope dinámico\" en una calle, se comporta así:", ["Es suave si el auto pasa lento y se vuelve rígido si pasa rápido", "Siempre es rígido", "Siempre es líquido", "Solo se endurece con frío"], "Es un fluido cuya consistencia depende de la tensión aplicada.", "Ficha 6, p. 39"),
    VF("f6-15", "t2", "Un material inteligente cambia su comportamiento según el estímulo que recibe.", true, "Verdadero. Esa es su característica principal.", "Ficha 6, p. 35"),

    /* t3 · Reciclaje */
    O("f6-16", "t3", "El carbón activado se recomienda en filtros para agua porque...", ["Adsorbe sustancias y elimina materiales indeseables", "Calienta el agua", "Le agrega minerales", "Le da sabor"], "Tiene muchos poros y retiene en su superficie sustancias del agua.", "Ficha 6, p. 38"),
    O("f6-17", "t3", "Para hacer un papalote, ¿qué material sirve para la cola?", ["Tela", "Acero", "Aluminio sólido", "Alambre de cobre"], "Una cola ligera estabiliza al papalote.", "Ficha 6, p. 38"),
    O("f6-18", "t3", "Para hacer un papalote, ¿qué material sirve para el armazón?", ["Bambú, porque es ligero y resistente", "Acero", "Plástico burbuja", "Piel"], "Un armazón debe ser ligero y firme.", "Ficha 6, p. 38"),
    O("f6-19", "t3", "Para hacer un papalote, ¿qué material sirve para el cuerpo?", ["Papel de china, porque es ligero", "Acero", "Aluminio sólido", "Piel"], "Un cuerpo ligero permite que el viento lo levante.", "Ficha 6, p. 38"),
    VF("f6-20", "t3", "Reciclar materiales ayuda a cuidar el ambiente y ahorrar recursos.", true, "Verdadero. Es parte de elegir materiales de forma responsable.", "Ficha 6, p. 36"),
    O("f6-21", "t3", "Para hacer una casita para pájaro o para perro, ¿qué criterios conviene considerar?", ["Tradición, economía y ecología", "Solo el color", "Solo el precio más alto", "Solo la moda"], "Por ejemplo, madera o lámina recicladas.", "Ficha 6, p. 36"),

    /* t4 · Tradicionales */
    O("f6-22", "t4", "¿De qué material se hace el sombrero calentano tradicional del Estado de México?", ["De palma y astilla de ocote", "De plástico", "De fibra de vidrio", "De metal"], "Se cosen trenzas de palma con hilo de ixtle o pita extraído del maguey.", "Ficha 6, p. 39"),
    O("f6-23", "t4", "El hilo de ixtle o pita se extrae de...", ["Un agave o maguey", "Un pino", "Un algodón", "Una oveja"], "Es una fibra natural.", "Ficha 6, p. 39"),
    VF("f6-24", "t4", "El barro es el único material tradicional para hacer jarros.", false, "Falso. También se hacen con vidrio, metal, plástico y otros materiales. La palabra \"único\" casi nunca es correcta.", "Ficha 6, p. 39"),
    VF("f6-25", "t4", "El aluminio es casi el único material para fabricar ventanales.", false, "Falso. También se usan madera, PVC y otros materiales.", "Ficha 6, p. 39"),
    VF("f6-26", "t4", "El acero se usa tradicionalmente para fabricar herramientas.", true, "Verdadero. Es resistente y duradero.", "Ficha 6, p. 39"),
    VF("f6-27", "t4", "El kevlar es ideal para fabricar guantes protectores.", true, "Verdadero. Es una fibra muy resistente.", "Ficha 6, p. 39")
  ]
});
