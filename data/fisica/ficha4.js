/* FÍSICA · 2.º de secundaria
   Ficha 4: Unidades básicas y derivadas utilizadas en física (pp. 24 a 30)
   Correcciones al libro: desde el 20 de mayo de 2019 el kilogramo se define con la constante de Planck (h = 6.62607015 × 10^-34 J·s);
   el prototipo de platino-iridio de París ya no es la definición. No se usan los ejercicios de dibujo ni los de respuesta libre.
*/
REPASO.agregar({
  materia: 'fisica',
  ficha: { id: 'f4', titulo: 'Ficha 4 · Unidades básicas y derivadas utilizadas en física', jefe: 'El Metro Rebelde' },
  temas: [
    { id: "t1", nombre: "Qué debe cumplir un patrón de medida" },
    { id: "t2", nombre: "Las siete unidades básicas del SI" },
    { id: "t3", nombre: "Unidades derivadas" },
    { id: "t4", nombre: "Definiciones del metro, el segundo y el kilogramo" },
    { id: "t5", nombre: "Instrumentos de las magnitudes básicas" }
  ],
  preguntas: [

    /* t1 · Patrones */
    O("f4-01", "t1", "¿Qué tres condiciones debe cumplir un patrón de medida?", ["Ser universal, invariante y reproducible", "Ser caro, pequeño y bonito", "Ser antiguo, local y secreto", "Ser de metal, redondo y pesado"], "Universal: reconocido en todo el mundo. Invariante: no cambia. Reproducible: se puede elaborar en cualquier parte.", "Ficha 4, p. 24"),
    O("f4-02", "t1", "¿Qué significa que un patrón sea invariante?", ["Que no cambia, sin importar dónde se use", "Que se puede fabricar en cualquier lugar", "Que lo conoce todo el mundo", "Que es muy grande"], "Un metro debe medir lo mismo en México que en Japón.", "Ficha 4, p. 24"),
    O("f4-03", "t1", "¿Qué significa que un patrón sea reproducible?", ["Que se puede elaborar en cualquier parte del planeta","Que cambia con la temperatura y con el lugar donde está","Que solo existe en un museo y no puede copiarse","Que depende de quien mida y de su criterio personal"], "Así dos laboratorios pueden tener el mismo patrón.", "Ficha 4, p. 24"),
    VF("f4-04", "t1", "El pie, el codo y el paso cumplen las tres condiciones de un patrón de medida.", false, "Falso. Cambian de persona a persona: no son universales, invariantes ni reproducibles.", "Ficha 4, p. 26"),
    O("f4-05", "t1", "¿Qué movimiento histórico impulsó pasar de unidades arbitrarias a patrones universales?", ["La Revolución Industrial", "El Renacimiento", "La Edad Media", "La Conquista"], "La fabricación en serie exigía piezas con medidas estándar.", "Ficha 4, p. 25"),

    /* t2 · Unidades básicas */
    O("f4-06", "t2", "¿Cuál es la unidad básica de longitud en el SI?", ["El metro (m)", "El kilómetro (km)", "La pulgada (in)", "El pie"], "El metro es la unidad básica de longitud.", "Ficha 4, p. 24"),
    O("f4-07", "t2", "¿Cuál es la unidad básica de masa en el SI?", ["El kilogramo (kg)", "El gramo (g)", "La libra", "El newton (N)"], "Es la única unidad básica que lleva un prefijo (kilo) en su nombre.", "Ficha 4, p. 24"),
    O("f4-08", "t2", "¿Cuál es la unidad básica de tiempo en el SI?", ["El segundo (s)", "El minuto (min)", "La hora (h)", "El hertz (Hz)"], "El segundo es la unidad básica del tiempo.", "Ficha 4, p. 24"),
    O("f4-09", "t2", "¿Cuál es la unidad básica de intensidad de corriente eléctrica?", ["El ampere o amperio (A)","El volt (V)","El watt (W)","El ohm"], "El ampere (A) es la unidad básica de intensidad de corriente eléctrica y se mide con un amperímetro. El volt, el watt y el ohm son unidades derivadas.", "Ficha 4, p. 24"),
    O("f4-10", "t2", "¿Cuál es la unidad básica de temperatura en el SI?", ["El kelvin (K)", "El grado Celsius (°C)", "El grado Fahrenheit (°F)", "El joule (J)"], "El kelvin es la unidad del SI. El grado Celsius se usa en la vida diaria.", "Ficha 4, p. 24"),
    O("f4-11", "t2", "¿Cuál es la unidad básica de cantidad de sustancia?", ["El mol (mol)", "El gramo (g)", "El litro (L)", "El átomo"], "Mide cuántas partículas hay en una muestra.", "Ficha 4, p. 24"),
    O("f4-12", "t2", "¿Cuál es la unidad básica de intensidad luminosa?", ["La candela (cd)", "El lumen", "El watt", "El kelvin"], "La candela mide qué tan intensa es la luz que emite una fuente.", "Ficha 4, p. 24"),
    VF("f4-13", "t2", "El SI tiene cinco unidades básicas.", false, "Falso. Tiene siete: metro, kilogramo, segundo, ampere, kelvin, mol y candela.", "Ficha 4, p. 24"),

    /* t3 · Derivadas */
    O("f4-14", "t3", "¿Qué magnitud derivada se mide en metros sobre segundo (m/s)?", ["La velocidad o rapidez", "La aceleración", "La densidad", "La fuerza"], "La velocidad indica cuántos metros se recorren en cada segundo.", "Ficha 4, p. 25"),
    O("f4-15", "t3", "¿Qué magnitud derivada se mide en m/s²?", ["La aceleración", "La velocidad", "La presión", "La frecuencia"], "Indica cuánto cambia la velocidad en cada segundo.", "Ficha 4, p. 25"),
    O("f4-16", "t3", "¿Qué magnitud derivada se mide en kg/m³?", ["La densidad","El volumen","La masa","La presión"], "La densidad se calcula como masa ÷ volumen, por eso se expresa en kg/m³. Es una magnitud derivada.", "Ficha 4, p. 25"),
    O("f4-17", "t3", "¿Qué unidad se usa para medir la fuerza?", ["El newton (N)", "El pascal (Pa)", "El hertz (Hz)", "El radián (rad)"], "Un newton equivale a 1 kg·m/s².", "Ficha 4, p. 28"),
    O("f4-18", "t3", "¿Qué unidad se usa para medir la presión?", ["El pascal (Pa)", "El newton (N)", "El hertz (Hz)", "El metro cúbico"], "Un pascal es una fuerza de 1 N repartida en 1 m².", "Ficha 4, p. 28"),
    O("f4-19", "t3", "¿Qué magnitud se mide en hertz (Hz)?", ["La frecuencia", "La fuerza", "La presión", "El ángulo"], "1 Hz = 1 ciclo por segundo, es decir, s⁻¹.", "Ficha 4, p. 28"),
    O("f4-20", "t3", "¿Qué se mide en radianes (rad)?", ["Un ángulo plano", "Una distancia", "Una masa", "Una temperatura"], "El radián es la unidad del ángulo.", "Ficha 4, p. 28"),
    O("f4-21", "t3", "¿Qué se mide en m² y qué se mide en m³?", ["m² mide superficie y m³ mide volumen", "m² mide volumen y m³ superficie", "Ambos miden longitud", "Ambos miden masa"], "Metro cuadrado: superficie. Metro cúbico: volumen.", "Ficha 4, p. 25"),
    VF("f4-22", "t3", "La densidad es una unidad básica del SI.", false, "Falso. Es derivada, porque se obtiene combinando masa y volumen.", "Ficha 4, p. 25"),

    /* t4 · Definiciones */
    O("f4-23", "t4", "¿Cómo se define el metro actualmente?", ["A partir de la velocidad de la luz en el vacío, 299 792 458 m/s", "Como la longitud de una barra guardada en París", "Como la distancia de un paso", "Como la diezmillonésima parte del radio de la Tierra"], "Se fija el valor numérico de la velocidad de la luz en el vacío (c) y de ahí se define el metro.", "Ficha 4, p. 26"),
    O("f4-24", "t4", "¿Cómo se define el segundo?", ["A partir de la frecuencia de transición del átomo de cesio 133: 9 192 631 770 Hz","Como 1/60 de un minuto medido en cualquier reloj de pared de casa","Como el tiempo que dura un latido del corazón de una persona sana","Como la duración promedio de un parpadeo de una persona adulta"], "El segundo cuenta ciclos de una onda de un átomo de cesio.", "Ficha 4, p. 26"),
    O("f4-25", "t4", "¿Cómo se define el kilogramo desde 2019?", ["A partir de la constante de Planck (h)", "Como la masa de un cilindro de platino-iridio", "Como la masa de un litro de aceite", "Como la masa de un metro cúbico de aire"], "Antes se definía con un cilindro de platino-iridio guardado en París. Desde el 20 de mayo de 2019 se usa la constante de Planck.", "Ficha 4, p. 26"),
    VF("f4-26", "t4", "La definición actual del segundo se basa en contar ondas (ciclos) de un átomo de cesio.", true, "Verdadero. Es la frecuencia de una transición del cesio 133.", "Ficha 4, p. 26"),
    CM("f4-27", "t4", "El kilogramo se define con un cilindro de platino-iridio que se guarda en París", ["Esa fue la definición hasta 2018; desde 2019 se define con la constante de Planck","Sigue siendo así, nunca ha cambiado desde que se creó","Se define con la masa de un litro de agua a cualquier temperatura","Se define con la velocidad de la luz en el vacío"], "El libro describe la definición anterior. La actual no depende de ningún objeto físico.", "Ficha 4, p. 26"),
    O("f4-28", "t4", "Para hacer una regla de madera de 30 cm tomando como base una regla metálica de 1 m, ¿qué puedes hacer?", ["Dividir la regla metálica en 100 partes iguales y cortar la de madera a 30","Cortarla a ojo, comparando su largo con la altura de un lápiz cualquiera","Usar tu codo como unidad y marcar tres veces su largo en la madera","Comparar con un libro y cortar la madera al mismo tamaño que él"], "Para dividir en partes iguales se puede usar el teorema de Tales.", "Ficha 4, p. 26"),
    O("f4-29", "t4", "¿Qué dice el teorema de Tales?", ["Si varias rectas paralelas cortan a dos rectas, los segmentos que determinan son proporcionales", "Que el cuadrado de la hipotenusa es la suma de los cuadrados de los catetos", "Que la luz viaja a 300 000 km/s", "Que los ángulos suman 180°"], "Sirve para dividir segmentos en partes iguales.", "Ficha 4, p. 26"),

    /* t5 · Instrumentos */
    O("f4-30", "t5", "¿Qué instrumento mide longitudes con una cinta metálica graduada en centímetros y milímetros?", ["El flexómetro", "El cronómetro", "La balanza", "El amperímetro"], "Algunos traen también una escala en pulgadas.", "Ficha 4, p. 30"),
    O("f4-31", "t5", "¿Qué instrumento mide la corriente eléctrica?", ["El amperímetro", "El flexómetro", "El cronómetro", "La balanza"], "Tiene una carátula graduada en amperes.", "Ficha 4, p. 30"),
    O("f4-32", "t5", "¿Qué instrumento mide la masa comparándola con masas conocidas?", ["La balanza", "El cronómetro", "El flexómetro", "El amperímetro"], "La granataria o de triple brazo se usa en el laboratorio.", "Ficha 4, p. 30"),
    O("f4-33", "t5", "¿Qué instrumento mide el tiempo con minutos, segundos y centésimas?", ["El cronómetro", "La balanza", "El flexómetro", "El amperímetro"], "Los digitales miden hasta centésimas de segundo.", "Ficha 4, p. 30"),

    /* refuerzo · verdadero o falso */
    VF("f4-34", "t1", "Un patrón de medida debe ser universal, invariante y reproducible.", true, "Verdadero. Esas son las tres condiciones.", "Ficha 4, p. 24"),
    VF("f4-35", "t2", "El kelvin es la unidad básica de temperatura en el SI.", true, "Verdadero. El grado Celsius se usa en la vida diaria.", "Ficha 4, p. 24"),
    VF("f4-36", "t2", "El gramo es la unidad básica de masa en el SI.", false, "Falso. La unidad básica de masa en el SI es el kilogramo; el gramo es una unidad menor (1 kg = 1 000 g).", "Ficha 4, p. 24"),
    VF("f4-37", "t3", "El pascal es la unidad de fuerza.", false, "Falso. El pascal es la unidad de presión (1 Pa = 1 N/m²); la unidad de fuerza es el newton.", "Ficha 4, p. 28"),
    VF("f4-38", "t3", "El newton es la unidad de frecuencia.", false, "Falso. Es la unidad de fuerza. La frecuencia se mide en hertz.", "Ficha 4, p. 28"),
    VF("f4-39", "t4", "Hoy el metro se define con una barra de platino guardada en París.", false, "Falso. Se define con la velocidad de la luz en el vacío.", "Ficha 4, p. 26")
  ]
});
