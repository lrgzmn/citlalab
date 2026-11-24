/* FÍSICA · 2.º de secundaria
   Ficha 3: Unidades de medición en la historia y la vida cotidiana (pp. 19 a 23)
   Correcciones al libro: el mapa de México está a escala 1:26 000 000 (1 cm = 260 km), no 375 km por cm.
   El predial se calcula con el valor catastral del inmueble (que depende de su superficie y ubicación).
*/
REPASO.agregar({
  materia: 'fisica',
  ficha: { id: 'f3', titulo: 'Ficha 3 · Unidades de medición en la historia y la vida cotidiana', jefe: 'El Codo Cambiante' },
  temas: [
    { id: "t1", nombre: "Medir antes del sistema internacional" },
    { id: "t2", nombre: "Escalas y mapas" },
    { id: "t3", nombre: "Unidades de uso común", icono: "matraz" },
    { id: "t4", nombre: "Medir el tiempo y los pagos por servicios" }
  ],
  preguntas: [

    /* t1 · Medir antes del SI */
    O("f3-01", "t1", "¿Qué es medir o cuantificar?", ["Comparar algo con una unidad para asignarle un valor", "Adivinar el tamaño de algo", "Contar cuántas personas hay", "Dibujar un objeto"], "Medir es asignar un valor o una cualidad a lo que se desea medir, comparándolo con una unidad.", "Ficha 3, p. 19"),
    O("f3-02", "t1", "¿Qué partes del cuerpo se usaron en el pasado como unidades de medida?", ["El pie, el codo y el paso", "El peso, el ojo y la lengua", "El cabello, la uña y el diente", "La nariz y la oreja"], "Eran las unidades más a la mano.", "Ficha 3, p. 19"),
    VF("f3-03", "t1", "Las unidades basadas en partes del cuerpo eran aceptadas por todo el mundo sin problemas.", false, "Falso. Variaban de persona a persona, y podía haber diferencias en lo que se compraba o se vendía.", "Ficha 3, p. 19"),
    O("f3-04", "t1", "¿Por qué es importante que todos usen la misma unidad al comprar o vender?", ["Para que el trato sea justo y nadie se sienta estafado", "Para que los precios suban", "Para que todo cueste igual", "Porque lo manda el maestro"], "Todos necesitan recibir la misma cantidad por el mismo precio.", "Ficha 3, p. 19"),
    VF("f3-05", "t1", "El codo, la distancia del dedo medio al codo, era una unidad de longitud antigua.", true, "Verdadero. El pie y el paso también lo eran.", "Ficha 3, p. 19"),
    CM("f3-06", "t1", "Usar el codo de cada comprador o vendedor como unidad es justo, porque todos miden lo mismo", ["No es justo: cada persona tiene un codo de distinto tamaño", "Es justo porque se mide siempre igual", "Es mejor que el metro", "Todos los codos son iguales"], "Por eso se necesitaron unidades universales.", "Ficha 3, p. 19"),

    /* t2 · Escalas y mapas */
    O("f3-07", "t2", "En un mapa con escala 1:26 000 000, 1 cm del mapa representa...", ["26 000 000 cm reales, es decir, 260 km", "26 km reales", "2.6 km reales", "26 000 km reales"], "26 000 000 cm ÷ 100 000 = 260 km. La escala dice cuántas veces es mayor la realidad que el mapa.", "Ficha 3, p. 20"),
    O("f3-08", "t2", "En ese mismo mapa (1 cm = 260 km), dos ciudades están a 4 cm. ¿Qué distancia real hay entre ellas?", ["1 040 km", "104 km", "650 km", "260 km"], "4 × 260 = 1 040 km.", "Ficha 3, p. 20"),
    O("f3-09", "t2", "Para calcular la distancia real entre dos ciudades en un mapa, ¿qué haces primero?", ["Mides con una regla la distancia en el mapa y la conviertes con la escala", "Cuentas las ciudades que hay entre ellas", "Adivinas", "Sumas las latitudes"], "Mides en centímetros y multiplicas por lo que representa 1 cm.", "Ficha 3, p. 20"),
    VF("f3-10", "t2", "Entre más grande es el segundo número de una escala (por ejemplo, 1:26 000 000), más lejos de la realidad se ve el mapa, pero abarca más territorio.", true, "Verdadero. Con escalas muy grandes se muestran países enteros, con poco detalle.", "Ficha 3, p. 20"),
    O("f3-11", "t2", "Un mapa tiene una barra de 0 a 260 km que mide 2 cm en el papel. ¿A cuántos km equivale 1 cm?", ["130 km", "260 km", "520 km", "65 km"], "260 km ÷ 2 cm = 130 km por cada cm.", "Ficha 3, p. 20"),

    /* t3 · Unidades de uso común */
    O("f3-12", "t3", "¿Cuál de estas es una unidad de longitud?", ["La pulgada", "El gramo", "El litro", "La docena"], "La pulgada, el kilómetro y el palmo miden longitud.", "Ficha 3, p. 22"),
    O("f3-13", "t3", "¿Cuál de estas es una unidad de masa?", ["La libra", "El palmo", "El galón", "El acre"], "El gramo, la libra y la arroba miden masa.", "Ficha 3, p. 22"),
    O("f3-14", "t3", "¿Cuál de estas es una unidad de capacidad?", ["El galón", "La arroba", "La pulgada", "La gruesa"], "El litro, la cántara y el galón miden capacidad (volumen de líquidos).", "Ficha 3, p. 22"),
    O("f3-15", "t3", "¿Cuál de estas es una unidad de superficie?", ["El acre", "El kilómetro", "La libra", "La docena"], "El área, el acre y la yugada miden superficie.", "Ficha 3, p. 22"),
    O("f3-16", "t3", "¿Qué tipo de unidades son la docena, la gruesa y el par?", ["De conteo", "De masa", "De longitud", "De superficie"], "Sirven para contar objetos: 12, 144 y 2.", "Ficha 3, p. 22"),
    VF("f3-17", "t3", "Una gruesa equivale a 144 piezas, es decir, 12 docenas.", true, "Verdadero. 12 × 12 = 144.", "Ficha 3, p. 22"),
    CM("f3-18", "t3", "\"Echa un chorrito de aceite\" es una medida precisa y universal", ["Es una medida aproximada: cada persona echa una cantidad distinta", "Es exacta porque siempre es igual", "Equivale a 1 litro", "Es mejor que usar una probeta"], "Las medidas caseras como chorrito, pizca o tantito no son precisas ni universales.", "Ficha 3, p. 21"),
    O("f3-19", "t3", "Si no tienes utensilios de cocina para medir, ¿qué puedes hacer?", ["Buscar equivalencias aproximadas de los utensilios y usar medidas similares, como jeringas para líquidos", "Adivinar sin fijarte", "Dejar de cocinar", "Usar siempre la misma cantidad"], "Las equivalencias ayudan a acercarse a la medida correcta.", "Ficha 3, p. 21"),
    VF("f3-20", "t3", "Una balanza de dos platillos compara la masa de un objeto con la de masas conocidas, como balines o pesas.", true, "Verdadero. Cuando se equilibra, las masas son iguales.", "Ficha 3, p. 21"),

    /* t4 · Tiempo y pagos */
    O("f3-21", "t4", "¿Por qué el día se divide en 24 horas?", ["Porque los egipcios lo dividieron así, y la Tierra tarda unas 24 horas en dar un giro completo sobre su eje", "Porque el Sol sale 24 veces", "Porque lo decidió Galileo", "Porque la Luna da 24 vueltas"], "Se pudo haber dividido de otro modo, pero la división de 24 partes se quedó.", "Ficha 3, p. 20"),
    O("f3-22", "t4", "¿Qué instrumento antiguo usa un indicador y la sombra del Sol para marcar las horas?", ["El reloj de sol", "El cronómetro digital", "El reloj de arena", "La clepsidra"], "La sombra del indicador se mueve conforme el Sol se desplaza.", "Ficha 3, p. 19"),
    O("f3-23", "t4", "¿Qué es una clepsidra?", ["Un reloj de agua usado en la antigüedad", "Un reloj de sol", "Una balanza", "Un mapa"], "Mide el tiempo con el flujo del agua. A medida que se vacía, el flujo se ralentiza, y eso dificulta calibrarla.", "Ficha 3, p. 23"),
    O("f3-24", "t4", "El recibo de luz se calcula con base en...", ["Los kilowatts-hora consumidos", "Los metros cúbicos", "Los litros", "Las llamadas realizadas"], "Cada casa tiene un medidor.", "Ficha 3, p. 23"),
    O("f3-25", "t4", "El recibo del agua se calcula con base en...", ["Los metros cúbicos consumidos", "Los kilowatts-hora", "El tamaño del techo", "Los pasos que se dan"], "Un medidor registra el consumo de cada casa.", "Ficha 3, p. 23"),
    VF("f3-26", "t4", "El impuesto predial se calcula con el valor catastral de la propiedad, que depende de su superficie y su ubicación.", true, "Verdadero. Por eso se paga por vivienda.", "Ficha 3, p. 23"),

    /* refuerzo · verdadero o falso */
    VF("f3-27", "t1", "El pie y el paso fueron unidades de medida basadas en el cuerpo humano.", true, "Verdadero. Variaban de persona a persona.", "Ficha 3, p. 19"),
    VF("f3-28", "t2", "En un mapa con escala 1:26 000 000, 1 cm equivale a 260 km.", true, "Verdadero. 26 000 000 cm = 260 km.", "Ficha 3, p. 20"),
    VF("f3-29", "t2", "En un mapa con escala 1:26 000 000, 1 cm equivale a 26 km.", false, "Falso. 1 cm equivale a 26 000 000 cm, o sea 260 km.", "Ficha 3, p. 20"),
    VF("f3-30", "t3", "La docena equivale a 12 unidades y la gruesa a 144.", true, "Verdadero. Son unidades de conteo.", "Ficha 3, p. 22"),
    VF("f3-31", "t3", "La arroba es una unidad de longitud.", false, "Falso. Es una unidad de masa.", "Ficha 3, p. 22"),
    VF("f3-32", "t4", "El recibo del agua se calcula con los kilowatts-hora consumidos.", false, "Falso. El agua se cobra por metros cúbicos; la luz, por kilowatts-hora.", "Ficha 3, p. 23")
  ]
});
