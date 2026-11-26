/* FÍSICA · 2.º de secundaria
   Ficha 10: Estados de la materia y cambios de estado (pp. 58 a 63)
   Correcciones al libro: son seis cambios de estado (fusión, solidificación, vaporización, condensación, sublimación y deposición);
   "cristalización" no es un cambio de estado (es separar un soluto de una disolución).
   Omitidos por dudosos: el agua caliente lanzada al aire a menos de 0 °C (p. 63, ejercicio 3) y el hielo en los picos altos
   (ejercicio 4, el texto confunde vapor con gotas de nubes), y la tabla de estado del agua a "0 °C" y "100 °C" exactos (ahí coexisten dos estados).
*/
REPASO.agregar({
  materia: 'fisica',
  ficha: { id: 'f10', titulo: 'Ficha 10 · Estados de la materia y cambios de estado', jefe: 'El Hielo Tramposo' },
  temas: [
    { id: "t1", nombre: "Los seis cambios de estado", icono: "gota" },
    { id: "t2", nombre: "Temperatura y movimiento de las partículas" },
    { id: "t3", nombre: "Experimentos: el globo y la jeringa" },
    { id: "t4", nombre: "Estados a temperatura ambiente" }
  ],
  preguntas: [

    /* t1 · Cambios de estado */
    O("f10-01", "t1", "¿Cómo se llama el paso de sólido a líquido?", ["Fusión", "Solidificación", "Vaporización", "Sublimación"], "En la fusión se agrega calor y sube la temperatura.", "Ficha 10, p. 59"),
    O("f10-02", "t1", "¿Cómo se llama el paso de líquido a gas?", ["Vaporización", "Fusión", "Condensación", "Deposición"], "Se necesita aumentar la temperatura agregando calor.", "Ficha 10, p. 59"),
    O("f10-03", "t1", "¿Cómo se llama el paso de gas a líquido?", ["Condensación", "Vaporización", "Fusión", "Sublimación"], "Hay que disminuir la temperatura quitando calor.", "Ficha 10, p. 59"),
    O("f10-04", "t1", "¿Cómo se llama el paso de líquido a sólido?", ["Solidificación", "Fusión", "Deposición", "Condensación"], "Se quita calor, por ejemplo al meter agua al congelador.", "Ficha 10, p. 59"),
    O("f10-05", "t1", "¿Cómo se llama el paso directo de sólido a gas, sin pasar por líquido?", ["Sublimación", "Deposición", "Fusión", "Condensación"], "Un ejemplo es el hielo seco (CO₂ sólido).", "Ficha 10, p. 59"),
    O("f10-06", "t1", "¿Cómo se llama el paso directo de gas a sólido?", ["Deposición", "Sublimación", "Condensación", "Solidificación"], "Un ejemplo es la escarcha que se forma sobre una superficie muy fría.", "Ficha 10, p. 59"),
    ORD("f10-07", "t1", "Ordena el camino que sigue el agua al calentarse desde hielo hasta vapor:", ["Hielo (sólido)", "Fusión", "Agua (líquido)", "Vaporización", "Vapor (gas)"], "El hielo se funde, y luego el agua líquida se vaporiza.", "Ficha 10, p. 59"),
    VF("f10-08", "t1", "En la fusión, la vaporización y la sublimación se agrega calor.", true, "Verdadero. En la condensación, la solidificación y la deposición se quita calor.", "Ficha 10, p. 59"),
    VF("f10-09", "t1", "En la condensación, la solidificación y la deposición se quita calor.", true, "Verdadero. La temperatura disminuye.", "Ficha 10, p. 59"),
    CM("f10-10", "t1", "La cristalización es uno de los seis cambios de estado de la materia", ["No: los seis cambios de estado son otros; cristalizar es separar un soluto de una disolución","Sí, es el séptimo cambio de estado y se agrega a la lista de los demás","Sí, sustituye a la deposición dentro de la lista de los seis cambios","Sí, es el cambio de gas a líquido que ocurre al enfriar un vapor"], "El libro la incluye en un diagrama, pero no es un cambio de estado: se estudió como método de separación de mezclas.", "Ficha 10, p. 59"),
    O("f10-11", "t1", "El rocío que aparece en las plantas por la mañana se forma por...", ["Condensación del vapor de agua", "Fusión del hielo", "Sublimación", "Solidificación"], "El vapor del aire pasa a gotas de agua líquida.", "Ficha 10, p. 59"),
    O("f10-12", "t1", "Las bolitas de naftalina se hacen más pequeñas con el tiempo sin dejar líquido. ¿Qué cambio ocurre?", ["Sublimación", "Fusión", "Condensación", "Solidificación"], "Pasan directo de sólido a gas.", "Ficha 10, p. 59"),

    /* t2 · Temperatura */
    O("f10-13", "t2", "¿Qué mide la temperatura?", ["El promedio de la energía que tienen las partículas de un cuerpo","El calor total de un cuerpo, sin importar su tamaño","El peso de las partículas que forman el cuerpo","El volumen que ocupa el cuerpo en el espacio"], "Se mide en grados Celsius con un termómetro.", "Ficha 10, p. 59"),
    O("f10-14", "t2", "¿Qué es el calor?", ["Energía en tránsito", "La temperatura de un cuerpo", "Una sustancia", "Una partícula"], "Para que la temperatura aumente hay que proporcionar calor, y para que baje hay que quitarlo.", "Ficha 10, p. 59"),
    VF("f10-15", "t2", "Si la temperatura aumenta, las partículas se mueven más rápido y chocan más.", true, "Verdadero. Con más temperatura las partículas tienen más energía: se mueven más rápido y chocan más veces.", "Ficha 10, p. 60"),
    VF("f10-16", "t2", "Si aumenta la temperatura, las partículas se mueven más lento.", false, "Falso. Al aumentar la temperatura las partículas se mueven más rápido, no más lento.", "Ficha 10, p. 60"),
    VF("f10-17", "t2", "Si baja la temperatura, las partículas se mueven más lento y chocan menos.", true, "Verdadero. Al bajar la temperatura las partículas pierden energía: se mueven más lento y chocan menos.", "Ficha 10, p. 60"),
    VF("f10-18", "t2", "Si baja la temperatura, las partículas se mueven más rápido.", false, "Falso. Al bajar la temperatura las partículas se mueven más lento, no más rápido.", "Ficha 10, p. 60"),
    VF("f10-19", "t2", "Mientras el agua hierve a nivel del mar, el termómetro se mantiene en 100 °C aunque se siga calentando.", true, "Verdadero. La energía se usa para cambiar de líquido a gas, no para subir la temperatura.", "Ficha 10, p. 62"),
    O("f10-20", "t2", "Un trozo de hielo se calienta y su temperatura sube. ¿Qué pasa con sus partículas?", ["Se mueven cada vez más rápido y el arreglo ordenado se destruye","Se detienen porque el hielo absorbe toda la energía","Se hacen más grandes conforme el hielo absorbe energía","Desaparecen y su masa se convierte en vapor de agua"], "Por eso el hielo pasa de sólido a líquido.", "Ficha 10, p. 62"),

    /* t3 · Experimentos */
    O("f10-21", "t3", "Se coloca una botella con un globo desinflado en la boca dentro de agua caliente y el globo se infla. ¿Por qué?", ["Las partículas del aire se mueven más rápido y ocupan más espacio","Aparece más aire dentro de la botella, que entra desde afuera","El globo se derrite con el calor y se hincha","El agua caliente entra a la botella y empuja el globo"], "Al calentar el aire, sus partículas se agitan y empujan el globo.", "Ficha 10, p. 60"),
    O("f10-22", "t3", "Después, la misma botella pasa a agua con hielo y el globo se desinfla. ¿Por qué?", ["Las partículas se mueven más despacio y ocupan menos espacio","El aire se escapa por el globo hacia el agua fría","El globo se encoge solo, porque el hule se contrae","Las partículas desaparecen al enfriarse y ocupan menos lugar"], "Al enfriarse, el aire se contrae.", "Ficha 10, p. 60"),
    VF("f10-23", "t3", "Al calentar el aire de una botella, aumenta el número de partículas dentro.", false, "Falso. El número de partículas es el mismo: se mueven más rápido y ocupan más espacio.", "Ficha 10, p. 60"),
    O("f10-24", "t3", "Una botella tiene una jeringa con agua. Al acercar las manos, sale un poco de agua de la jeringa. ¿Por qué?", ["El aire de la botella se calienta, sus partículas se mueven más rápido y empujan al agua","El agua de la jeringa se evapora toda y sale en forma de vapor","La botella se encoge con el calor de las manos y empuja el agua","El agua se congela dentro de la jeringa y se expande hacia afuera"], "El aire (gas) se expande y desplaza al líquido.", "Ficha 10, p. 61"),
    O("f10-25", "t3", "En ese experimento, al retirar las manos, ¿qué sucede con el agua?", ["Parte regresa hacia la botella porque el aire se enfría y ocupa menos espacio","Todo el aire de la botella se pierde y ya no queda nada","El agua se congela porque las manos dejan de calentar","No pasa nada, el agua se queda donde se quedó"], "Al enfriarse, el aire se contrae.", "Ficha 10, p. 61"),

    /* t4 · Estados a temperatura ambiente */
    O("f10-26", "t4", "A temperatura ambiente (20 °C), ¿cuál de estas sustancias es líquida?", ["El mercurio", "El acero", "El oxígeno", "La madera"], "El mercurio es el único metal líquido a temperatura ambiente.", "Ficha 10, p. 60"),
    O("f10-27", "t4", "A temperatura ambiente, ¿cuál de estas sustancias es un gas?", ["El dióxido de carbono", "La cerámica", "El pegamento blanco", "El acero"], "El oxígeno, el aire y el dióxido de carbono son gases.", "Ficha 10, p. 60"),
    O("f10-28", "t4", "A temperatura ambiente, ¿cuál de estas sustancias es sólida?", ["El acero", "El mercurio", "El oxígeno", "La pintura en su envase"], "El acero, la madera y la cerámica son sólidos.", "Ficha 10, p. 60"),
    O("f10-29", "t4", "El agua a 20 °C y presión normal está en estado...", ["Líquido", "Sólido", "Gaseoso", "Plasma"], "Entre 0 °C y 100 °C, a nivel del mar, el agua es líquida.", "Ficha 10, p. 61"),
    O("f10-30", "t4", "El agua a -10 °C y presión normal está en estado...", ["Sólido", "Líquido", "Gaseoso", "Mixto"], "Por debajo de 0 °C el agua es hielo.", "Ficha 10, p. 61"),
    O("f10-31", "t4", "El agua a 120 °C y presión normal está en estado...", ["Gaseoso (vapor)", "Líquido", "Sólido", "Mixto"], "Por encima de 100 °C el agua líquida se convierte en vapor.", "Ficha 10, p. 61"),

    /* refuerzo · verdadero o falso */
    VF("f10-32", "t1", "La fusión es el paso de líquido a sólido.", false, "Falso. Es el paso de sólido a líquido. De líquido a sólido es la solidificación.", "Ficha 10, p. 59"),
    VF("f10-33", "t1", "La deposición es el paso directo de sólido a gas.", false, "Falso. La deposición es el paso directo de gas a sólido, como la escarcha; de sólido a gas es la sublimación.", "Ficha 10, p. 59"),
    VF("f10-34", "t1", "La condensación es el paso de gas a líquido.", true, "Verdadero. En la condensación las partículas del gas se juntan y forman un líquido; para ello se quita calor.", "Ficha 10, p. 59")
  ]
});
