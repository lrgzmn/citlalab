/* FÍSICA · 2.º de secundaria
   Ficha 5: Múltiplos y submúltiplos de las magnitudes (pp. 30 a 34)
   Correcciones al libro: los símbolos correctos son Pm, Tm, Gm y Mm (el libro los escribe en minúsculas, y pm es picómetro, mm es milímetro);
   hectogramo es hg (el libro escribe Hg); 5.121 × 10^-7 se expande a 0.0000005121 (el punto se recorre siete lugares, no seis).
   Todas las conversiones se verificaron con Python.
*/
REPASO.agregar({
  materia: 'fisica',
  ficha: { id: 'f5', titulo: 'Ficha 5 · Múltiplos y submúltiplos de las magnitudes', jefe: 'El Cero Escurridizo' },
  temas: [
    { id: "t1", nombre: "Instrumentos de medición" },
    { id: "t2", nombre: "Notación científica" },
    { id: "t3", nombre: "Órdenes de magnitud" },
    { id: "t4", nombre: "Prefijos del SI" },
    { id: "t5", nombre: "Conversiones con prefijos" }
  ],
  preguntas: [

    /* t1 · Instrumentos */
    O("f5-01", "t1", "Cuando usas un flexómetro y lees 1 cm + 9 mm, ¿cuánto mide el objeto?", ["1.9 cm", "10.9 cm", "1.09 cm", "19 cm"], "9 mm = 0.9 cm, así que 1 cm + 0.9 cm = 1.9 cm.", "Ficha 5, p. 31"),
    O("f5-02", "t1", "¿Qué escalas tiene un cronómetro?", ["Minutos, segundos y centésimas de segundo", "Kilogramos y gramos", "Centímetros y milímetros", "Amperes y miliamperes"], "Se inicia con un botón, se detiene con otro y se reinicia en cero.", "Ficha 5, p. 31"),
    O("f5-03", "t1", "¿Qué escalas tiene una báscula o balanza común?", ["Kilogramos y gramos", "Minutos y segundos", "Centímetros y milímetros", "Volts y amperes"], "Se coloca el objeto en el plato y se lee la carátula.", "Ficha 5, p. 34"),
    O("f5-04", "t1", "¿Qué son las escalas de un aparato de medición?", ["Las divisiones iguales en las que está graduado", "Los botones que tiene", "La carcasa del aparato", "Las pilas que usa"], "Las escalas permiten leer el valor de la medida.", "Ficha 5, p. 30"),

    /* t2 · Notación científica */
    O("f5-05", "t2", "¿Cómo se escribe 5 500 000 kg en notación científica?", ["5.5 × 10⁶ kg", "5.5 × 10⁵ kg", "55 × 10⁵ kg", "5.5 × 10⁷ kg"], "El punto se recorre seis lugares a la izquierda: 5.5 × 10⁶.", "Ficha 5, p. 32"),
    O("f5-06", "t2", "¿Cómo se escribe 0.0000121 s en notación científica?", ["1.21 × 10⁻⁵ s", "1.21 × 10⁻⁶ s", "1.21 × 10⁵ s", "12.1 × 10⁻⁵ s"], "El punto se recorre cinco lugares a la derecha.", "Ficha 5, p. 32"),
    O("f5-07", "t2", "¿Cómo se escribe 2 830.12 s en notación científica?", ["2.83012 × 10³ s", "2.83012 × 10⁴ s", "28.3012 × 10² s", "2.83012 × 10⁻³ s"], "El punto se recorre tres lugares a la izquierda.", "Ficha 5, p. 32"),
    O("f5-08", "t2", "¿Cómo se escribe 0.0000021 m en notación científica?", ["2.1 × 10⁻⁶ m", "2.1 × 10⁻⁷ m", "2.1 × 10⁶ m", "21 × 10⁻⁶ m"], "El punto se recorre seis lugares a la derecha.", "Ficha 5, p. 32"),
    O("f5-09", "t2", "¿Cuál es el número expandido de 3.124 × 10²?", ["312.4", "3 124", "31.24", "0.03124"], "El punto se recorre dos lugares a la derecha.", "Ficha 5, p. 32"),
    O("f5-10", "t2", "¿Cuál es el número expandido de 5.121 × 10⁻⁷?", ["0.0000005121", "0.000005121", "0.00000005121", "51 210 000"], "El exponente es -7, así que el punto se recorre siete lugares a la izquierda.", "Ficha 5, p. 32"),
    O("f5-11", "t2", "¿Cuál es el número expandido de 9.321 × 10⁴ m?", ["93 210 m", "9 321 m", "932 100 m", "0.0009321 m"], "El exponente 4 recorre el punto cuatro lugares a la derecha.", "Ficha 5, p. 34"),
    O("f5-12", "t2", "¿Cuál es el número expandido de 7.123 × 10⁻⁴ kg?", ["0.0007123 kg", "0.007123 kg", "71 230 kg", "0.00007123 kg"], "El exponente -4 mueve el punto cuatro lugares a la izquierda.", "Ficha 5, p. 34"),
    O("f5-13", "t2", "¿Cuál es el número expandido de 4.567 × 10⁻³ s?", ["0.004567 s", "0.0004567 s", "4 567 s", "0.04567 s"], "Tres lugares a la izquierda.", "Ficha 5, p. 34"),
    O("f5-14", "t2", "¿Cuál es el número expandido de 3.1416 × 10⁶ Pa?", ["3 141 600 Pa", "314 160 Pa", "31 416 000 Pa", "0.0000031416 Pa"], "Seis lugares a la derecha.", "Ficha 5, p. 34"),
    VF("f5-15", "t2", "En notación científica, para cantidades menores que 1 el exponente de 10 es negativo.", true, "Verdadero. Por ejemplo, 0.002 = 2 × 10⁻³.", "Ficha 5, p. 32"),
    VF("f5-16", "t2", "En notación científica debe haber al menos un dígito antes del punto decimal (y de 1 a 9).", true, "Verdadero. Por eso se escribe 1.21 × 10⁻⁵ y no 0.121 × 10⁻⁴.", "Ficha 5, p. 32"),

    /* t3 · Órdenes de magnitud */
    O("f5-17", "t3", "Un parpadeo dura 0.2 s (2.0 × 10⁻¹ s) y un día 86 400 s (8.64 × 10⁴ s). ¿Cuántos órdenes de magnitud es mayor el día?", ["5", "3", "4", "6"], "4 − (−1) = 5 órdenes de magnitud.", "Ficha 5, p. 32"),
    O("f5-18", "t3", "Un virus mide 2.5 × 10⁻⁸ m y el diámetro de un cabello 6.25 × 10⁻⁵ m. ¿Cuántos órdenes de magnitud es mayor el cabello?", ["3", "13", "5", "8"], "−5 − (−8) = 3 órdenes de magnitud.", "Ficha 5, p. 33"),
    O("f5-19", "t3", "Un auto de 1.5 × 10³ kg y una persona de 3.5 × 10¹ kg. ¿Cuántos órdenes de magnitud mayor es la masa del auto?", ["2", "1", "3", "4"], "3 − 1 = 2 órdenes de magnitud.", "Ficha 5, p. 32"),
    VF("f5-20", "t3", "Si un objeto es cien veces menor que otro, es dos órdenes de magnitud menor.", true, "Verdadero. 100 = 10², y el exponente de 10 es el orden de magnitud.", "Ficha 5, p. 32"),
    VF("f5-21", "t3", "Dos cantidades aproximadamente iguales son del mismo orden de magnitud.", true, "Verdadero.", "Ficha 5, p. 32"),

    /* t4 · Prefijos */
    O("f5-22", "t4", "¿Qué potencia de diez representa el prefijo kilo (k)?", ["10³", "10²", "10⁶", "10⁻³"], "Kilo = 1 000.", "Ficha 5, p. 33"),
    O("f5-23", "t4", "¿Qué potencia de diez representa el prefijo mega (M)?", ["10⁶", "10³", "10⁹", "10⁻⁶"], "Mega = 1 000 000.", "Ficha 5, p. 33"),
    O("f5-24", "t4", "¿Qué potencia de diez representa el prefijo giga (G)?", ["10⁹", "10⁶", "10¹²", "10⁻⁹"], "Giga = mil millones.", "Ficha 5, p. 33"),
    O("f5-25", "t4", "¿Qué potencia de diez representa el prefijo tera (T)?", ["10¹²", "10⁹", "10¹⁵", "10⁻¹²"], "Tera = un billón (10¹²).", "Ficha 5, p. 33"),
    O("f5-26", "t4", "¿Qué potencia de diez representa el prefijo peta (P)?", ["10¹⁵", "10¹²", "10¹⁸", "10⁻¹⁵"], "Peta = 10¹⁵.", "Ficha 5, p. 33"),
    O("f5-27", "t4", "¿Qué potencia de diez representa el prefijo mili (m)?", ["10⁻³", "10⁻²", "10⁻⁶", "10³"], "Mili = una milésima.", "Ficha 5, p. 33"),
    O("f5-28", "t4", "¿Qué potencia de diez representa el prefijo micro (µ)?", ["10⁻⁶", "10⁻³", "10⁻⁹", "10⁶"], "Micro = una millonésima. El símbolo µ es la letra griega \"mu\".", "Ficha 5, p. 33"),
    O("f5-29", "t4", "¿Qué potencia de diez representa el prefijo nano (n)?", ["10⁻⁹", "10⁻⁶", "10⁻¹²", "10⁹"], "Nano = una milmillonésima.", "Ficha 5, p. 33"),
    O("f5-30", "t4", "¿Qué potencia de diez representa el prefijo pico (p)?", ["10⁻¹²", "10⁻⁹", "10⁻¹⁵", "10¹²"], "Pico = 10⁻¹².", "Ficha 5, p. 33"),
    O("f5-31", "t4", "¿Qué potencia de diez representa el prefijo femto (f)?", ["10⁻¹⁵", "10⁻¹²", "10⁻⁹", "10¹⁵"], "Femto = 10⁻¹⁵.", "Ficha 5, p. 33"),
    O("f5-32", "t4", "¿Qué potencia de diez representan los prefijos hecto (h), deca (da), deci (d) y centi (c)?", ["10², 10¹, 10⁻¹ y 10⁻²", "10³, 10², 10⁻² y 10⁻³", "10¹, 10², 10⁻² y 10⁻¹", "10⁶, 10³, 10⁻³ y 10⁻⁶"], "Hecto = 100, deca = 10, deci = 0.1, centi = 0.01.", "Ficha 5, p. 33"),
    CM("f5-33", "t4", "El símbolo del megámetro es mm", ["El símbolo del megámetro es Mm; mm es milímetro", "El símbolo del megámetro es mm porque ambos son lo mismo", "Mm es el símbolo del milímetro", "El megámetro no tiene símbolo"], "Las mayúsculas y minúsculas importan: M = mega (10⁶) y m = mili (10⁻³). Una diferencia de mil millones de veces.", "Ficha 5, p. 33"),
    CM("f5-34", "t4", "El símbolo del petámetro es pm", ["El símbolo del petámetro es Pm; pm es picómetro", "El símbolo es pm porque son iguales", "Pm es el símbolo del picómetro", "El petámetro no existe"], "P = peta (10¹⁵) y p = pico (10⁻¹²). El libro los escribe en minúsculas, pero no son iguales.", "Ficha 5, p. 33"),
    CM("f5-35", "t4", "El símbolo del hectogramo es Hg", ["El símbolo correcto es hg; Hg es el símbolo químico del mercurio", "El símbolo es HG", "El hectogramo no tiene símbolo", "El símbolo es hG"], "El prefijo hecto se escribe con h minúscula. Hg es mercurio.", "Ficha 5, p. 34"),

    /* t5 · Conversiones */
    O("f5-36", "t5", "7 000 000 m se escribe con prefijo como...", ["7 Mm", "7 mm", "7 km", "7 Gm"], "7 000 000 m = 7 × 10⁶ m = 7 megámetros.", "Ficha 5, p. 34"),
    O("f5-37", "t5", "0.000000011 m se escribe con prefijo como...", ["11 nm", "11 µm", "11 pm", "11 mm"], "0.000000011 m = 11 × 10⁻⁹ m = 11 nanómetros.", "Ficha 5, p. 34"),
    O("f5-38", "t5", "0.000009 s se escribe con prefijo como...", ["9 µs", "9 ms", "9 ns", "9 ks"], "0.000009 s = 9 × 10⁻⁶ s = 9 microsegundos.", "Ficha 5, p. 34"),
    O("f5-39", "t5", "3 000 s se escribe con prefijo como...", ["3 ks", "3 Ms", "3 ms", "3 hs"], "3 000 s = 3 × 10³ s = 3 kilosegundos.", "Ficha 5, p. 34"),
    O("f5-40", "t5", "10 000 kg se escribe con prefijo como...", ["10 Mg", "10 mg", "10 kg", "10 Gg"], "10 000 kg = 10 000 000 g = 10 × 10⁶ g = 10 megagramos (10 toneladas).", "Ficha 5, p. 34"),
    O("f5-41", "t5", "0.000000000005 g se escribe con prefijo como...", ["5 pg", "5 ng", "5 µg", "5 fg"], "0.000000000005 g = 5 × 10⁻¹² g = 5 picogramos.", "Ficha 5, p. 34"),
    O("f5-42", "t5", "¿A cuántos metros equivalen 3 km?", ["3 000 m", "300 m", "30 m", "0.003 m"], "1 km = 1 000 m.", "Ficha 5, p. 33"),
    O("f5-43", "t5", "¿A cuántos gramos equivalen 2.5 mg?", ["0.0025 g", "0.025 g", "2 500 g", "0.25 g"], "1 mg = 0.001 g, entonces 2.5 mg = 0.0025 g.", "Ficha 5, p. 34"),

    /* refuerzo · verdadero o falso */
    VF("f5-44", "t2", "5.5 × 10⁶ kg equivalen a 55 000 000 kg.", false, "Falso. Equivalen a 5 500 000 kg: el punto se recorre seis lugares.", "Ficha 5, p. 32"),
    VF("f5-45", "t2", "0.0000121 s se escribe 1.21 × 10⁻⁵ s.", true, "Verdadero. El punto se recorre cinco lugares a la derecha.", "Ficha 5, p. 32"),
    VF("f5-46", "t4", "El prefijo mili representa 10⁻³.", true, "Verdadero. Mili = una milésima.", "Ficha 5, p. 33"),
    VF("f5-47", "t4", "El prefijo kilo representa 10⁶.", false, "Falso. Kilo es 10³. Mega es 10⁶.", "Ficha 5, p. 33"),
    VF("f5-48", "t4", "Un nanómetro es menor que un micrómetro.", true, "Verdadero. nano = 10⁻⁹ y micro = 10⁻⁶.", "Ficha 5, p. 33"),
    VF("f5-49", "t5", "1 kg equivale a 10³ g.", true, "Verdadero.", "Ficha 5, p. 33")
  ]
});
