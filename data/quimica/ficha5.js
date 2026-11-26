/* QUÍMICA · 3.º de secundaria
   Ficha 5: Instrumentos de medición (pp. 30 a 34)
   Correcciones al libro (verificadas con Python): 0.9534 kg = 953.4 g (el libro anota 934 g); 3 200 mg = 3.2 g; 2 L = 2 000 mL; 1 200 mL = 1.2 L;
   340 g = 0.34 kg. Se omiten las preguntas de la balanza para una tuerca y un alfiler (depende de la precisión que se necesite).
*/
REPASO.agregar({
  materia: 'quimica',
  ficha: { id: 'q5', titulo: 'Ficha 5 · Instrumentos de medición', jefe: 'El Ojo Engañoso' },
  temas: [
    { id: "t1", nombre: "Por qué medir" },
    { id: "t2", nombre: "Masa, volumen y temperatura" },
    { id: "t3", nombre: "El densímetro" },
    { id: "t4", nombre: "Conversiones con factor unitario" }
  ],
  preguntas: [

    /* t1 · Por qué medir */
    O("q5-01", "t1", "En la ilusión óptica de las líneas AB y BC, ambas miden 7 cm aunque una parezca más larga. ¿Qué enseña?", ["Que los sentidos no siempre son precisos y por eso necesitamos instrumentos","Que las rectas cambian de tamaño según el lugar donde se ven","Que no se debe medir, porque los sentidos nunca fallan","Que la regla siempre se equivoca cuando hay figuras de por medio"], "Los sentidos son subjetivos y pueden engañarse.", "Ficha 5, p. 30"),
    O("q5-02", "t1", "¿En cuál de estas situaciones es necesario un instrumento de medición?", ["Medir la temperatura de un enfermo", "Agregar una pizca de sal a un guisado", "Elegir el color de una camisa", "Decidir qué canción escuchar"], "También se miden la temperatura del agua para bañarnos o la calidad del aire.", "Ficha 5, p. 31"),
    O("q5-03", "t1", "Una pepita dorada puede ser oro o pirita (FeS₂), el \"oro de los tontos\". ¿Cómo se puede saber cuál es?", ["Midiendo su densidad: la del oro es 19.32 g/cm³ y la de la pirita, unos 5 g/cm³","Mirando su color, porque el oro es más brillante que la pirita","Mordiéndola para saber si es blanda, sin usar instrumentos","Pesándola sin medir su volumen, porque el oro pesa más"], "A simple vista ambas son doradas; con la densidad es fácil distinguirlas.", "Ficha 5, p. 34"),
    VF("q5-04", "t1", "La apariencia basta siempre para identificar una sustancia.", false, "Falso. Dos materiales con el mismo color pueden tener propiedades muy distintas.", "Ficha 5, p. 34"),

    /* t2 · Masa, volumen, temperatura */
    O("q5-05", "t2", "¿Qué diferencia hay entre la balanza granataria y la analítica?", ["La granataria mide masas grandes y la analítica masas muy pequeñas con más precisión", "La analítica mide masas grandes y la granataria masas pequeñas", "Son iguales", "La granataria mide volúmenes"], "La analítica puede medir hasta décimas de miligramo (0.1 mg).", "Ficha 5, p. 31"),
    O("q5-06", "t2", "¿Qué balanza usarías para una tableta de 100 mg?", ["La analítica", "La granataria", "Ninguna", "Una báscula de baño"], "Es una masa pequeña que requiere precisión.", "Ficha 5, p. 31"),
    O("q5-07", "t2", "¿Qué balanza usarías para una manzana?", ["La granataria", "La analítica", "Ninguna", "Un cronómetro"], "La manzana tiene una masa de cientos de gramos.", "Ficha 5, p. 31"),
    O("q5-08", "t2", "¿Qué instrumento de volumen tiene un único valor, el que marca su cuello?", ["El matraz aforado", "La probeta", "El vaso de precipitados", "La bureta"], "Se usa para preparar disoluciones de volumen exacto.", "Ficha 5, p. 32"),
    O("q5-09", "t2", "¿Qué instrumento permite agregar gotas de una disolución para neutralizar un ácido?", ["La bureta", "El vaso de precipitados", "El matraz aforado", "La balanza"], "Tiene una llave para controlar el goteo.", "Ficha 5, p. 32"),
    O("q5-10", "t2", "Para medir 200 mL de agua en la cocina o en un experimento sencillo basta con...", ["Un vaso de precipitados", "Un amperímetro", "Una balanza analítica", "Un densímetro"], "Es un instrumento de poca precisión, suficiente para este caso.", "Ficha 5, p. 32"),
    O("q5-11", "t2", "¿Cuál de estas opciones presenta solo instrumentos para medir volumen?", ["Probeta, pipeta y matraz aforado", "Bureta, balanza y vaso de precipitados", "Densímetro, termómetro y jeringa", "Manómetro, aerómetro y vaso dosificador"], "La balanza mide masa, y el termómetro, temperatura.", "Ficha 5, p. 34"),
    O("q5-12", "t2", "¿Qué termómetro conviene para medir la temperatura corporal sin tocar a la persona?", ["El infrarrojo","El de laboratorio","El de mercurio de laboratorio","El de vidrio"], "El termómetro infrarrojo mide sin contacto: basta apuntarlo a la frente.", "Ficha 5, p. 32"),
    O("q5-13", "t2", "¿Qué termómetro se usa para vigilar la temperatura de una persona enferma?", ["El clínico", "El de laboratorio", "El de horno", "El de alcohol industrial"], "Tiene una escala entre 35 y 42 °C.", "Ficha 5, p. 32"),
    O("q5-14", "t2", "¿Qué termómetro se usa en el laboratorio para medir la ebullición del agua?", ["El de laboratorio", "El clínico", "El infrarrojo de frente", "El de pared"], "Mide un intervalo amplio de temperaturas, de −10 a 110 °C o más.", "Ficha 5, p. 32"),
    O("q5-15", "t2", "Para medir la temperatura de las rejillas del aire acondicionado, ¿qué conviene?", ["Un termómetro infrarrojo","Un termómetro clínico","Una balanza","Un densímetro"], "El termómetro infrarrojo mide la temperatura de una superficie sin tocarla.", "Ficha 5, p. 34"),

    /* t3 · Densímetro */
    O("q5-16", "t3", "¿Qué mide un densímetro?", ["La densidad de los líquidos", "La masa de los sólidos", "La temperatura del aire", "La presión"], "Es una varilla graduada con un bulbo hueco que le permite flotar.", "Ficha 5, p. 32"),
    O("q5-17", "t3", "Un densímetro se hunde más en un líquido...", ["Menos denso", "Más denso", "Más oscuro", "Más caliente siempre"], "En un líquido más denso, el densímetro flota más alto.", "Ficha 5, p. 32"),
    O("q5-18", "t3", "¿Qué instrumento mide la densidad de la leche?", ["El lactómetro", "El alcoholímetro", "El salinómetro", "El sacarómetro"], "Se usa en el control de calidad de la leche.", "Ficha 5, p. 34"),
    O("q5-19", "t3", "¿Qué mide un alcoholímetro (como densímetro)?", ["El grado de alcohol de una bebida", "La cantidad de azúcar", "La cantidad de sal", "La acidez"], "Es un densímetro especializado.", "Ficha 5, p. 33"),
    O("q5-20", "t3", "¿Qué mide un sacarómetro?", ["El nivel de sacarosa en jarabes", "El nivel de alcohol", "La densidad de la leche", "La salinidad"], "Es un densímetro para jarabes.", "Ficha 5, p. 33"),
    O("q5-21", "t3", "Si no tienes un densímetro, ¿qué instrumentos sirven para calcular la densidad de un líquido?", ["Una balanza (masa) y una probeta o pipeta (volumen)","Un termómetro y una regla graduada en centímetros","Un cronómetro y un transportador de ángulos","Un amperímetro y un voltímetro de laboratorio"], "Se mide la masa con la balanza y el volumen con la probeta o la pipeta; después d = m ÷ V.", "Ficha 5, p. 33"),

    /* t4 · Conversiones */
    O("q5-22", "t4", "¿Cómo funciona el método del factor unitario?", ["Se multiplica por una fracción de equivalencia que vale 1 para cambiar de unidad","Se suman las unidades de las dos cantidades que se comparan","Se resta la unidad vieja de la nueva que se quiere obtener","Se elimina la unidad y se deja solo el número de la medida"], "Por ejemplo, 1 000 g / 1 kg es igual a 1.", "Ficha 5, p. 33"),
    O("q5-23", "t4", "Un cóndor pesa aproximadamente 0.9534 kg. ¿A cuántos gramos equivale?", ["953.4 g", "934 g", "95.34 g", "9 534 g"], "0.9534 kg × 1 000 g/kg = 953.4 g.", "Ficha 5, p. 33"),
    O("q5-24", "t4", "Un colibrí adulto tiene una masa de 3 200 mg. ¿A cuántos gramos equivale?", ["3.2 g", "32 g", "0.32 g", "3 200 g"], "3 200 mg × 1 g/1 000 mg = 3.2 g.", "Ficha 5, p. 33"),
    O("q5-25", "t4", "Un adulto necesita más de 2 L de agua al día. ¿A cuántos mililitros equivale?", ["2 000 mL","200 mL","20 mL","20 000 mL"], "1 L = 1 000 mL, así que 2 L × 1 000 mL/L = 2 000 mL.", "Ficha 5, p. 33"),
    O("q5-26", "t4", "Para producir una lata de jugo se necesitan 1 200 mL de agua. ¿Cuántos litros son?", ["1.2 L", "12 L", "0.12 L", "1 200 L"], "1 200 mL × 1 L/1 000 mL = 1.2 L.", "Ficha 5, p. 33"),
    O("q5-27", "t4", "El corazón de un adulto pesa aproximadamente 340 g. ¿Cuántos kilogramos son?", ["0.34 kg", "0.034 kg", "3.4 kg", "0.0034 kg"], "340 g × 1 kg/1 000 g = 0.34 kg.", "Ficha 5, p. 34"),
    O("q5-28", "t4", "10.85 m³ equivalen a...", ["10 850 L","1 085 L","108.5 L","10.85 L"], "1 m³ = 1 000 L, así que 10.85 m³ × 1 000 L/m³ = 10 850 L.", "Ficha 5, p. 33"),
    VF("q5-29", "t4", "1 m³ equivale a 100 litros.", false, "Falso. 1 m³ equivale a 1 000 litros: un cubo de 1 m de arista contiene mil cubos de 1 dm³ (1 L).", "Ficha 5, p. 33"),

    /* refuerzo · verdadero o falso */
    VF("q5-30", "t2", "La probeta mide el volumen con más precisión que la bureta.", false, "Falso. La bureta mide el volumen con más precisión que la probeta.", "Ficha 5, p. 32"),
    VF("q5-31", "t3", "El densímetro mide la masa de un sólido.", false, "Falso. Mide la densidad de un líquido.", "Ficha 5, p. 32"),
    VF("q5-32", "t2", "El termómetro infrarrojo permite medir la temperatura sin tocar.", true, "Verdadero. El termómetro infrarrojo mide la temperatura sin tocar, apuntando a la superficie.", "Ficha 5, p. 32"),
    VF("q5-33", "t2", "El matraz aforado sirve para medir volúmenes variables.", false, "Falso. El matraz aforado tiene una marca (aforo) y mide un solo volumen exacto.", "Ficha 5, p. 32"),
    VF("q5-34", "t2", "La balanza analítica mide masas pequeñas con gran precisión.", true, "Verdadero. La balanza analítica mide masas pequeñas con mucha precisión.", "Ficha 5, p. 31")
  ]
});
