/* FÍSICA · 2.º de secundaria
   Ficha 8: Composición de la materia. Partículas más que subatómicas (pp. 46 a 51)
   Correcciones al libro (todo verificado con Python): criptón 36 p y 48 n (masa 84, no 83), titanio 22 p y 26 n, indio 49 p y 66 n;
   escala del átomo de oro = 1 780.8 m (1.781 × 10^3 m; el libro escribe 1.708 en el recuadro "Toma nota");
   composición del cuerpo humano: 18 % de carbono = 180 g y 1.5 % de calcio = 15 g por cada kg.
   Se omite el ejercicio del CO2 en un incendio (la explicación del libro es discutible) y el bosón de Higgs (no incluye datos).
*/
REPASO.agregar({
  materia: 'fisica',
  ficha: { id: 'f8', titulo: 'Ficha 8 · Composición de la materia. Partículas más que subatómicas', jefe: 'El Quark Escurridizo' },
  temas: [
    { id: "t1", nombre: "Los quarks", icono: "particulas" },
    { id: "t2", nombre: "Número atómico, masa atómica y neutrones", icono: "atomo" },
    { id: "t3", nombre: "Escala del átomo" },
    { id: "t4", nombre: "Composición del cuerpo humano y cargas" },
    { id: "t5", nombre: "Tierras raras y aplicaciones" }
  ],
  preguntas: [

    /* t1 · Quarks */
    O("f8-01", "t1", "¿Qué descubrieron en el LHC (Gran Colisionador de Hadrones) sobre los protones y neutrones?", ["Que están formados por partículas más pequeñas llamadas quarks","Que son indivisibles y no tienen ninguna estructura interna","Que no tienen masa y solo existen como energía","Que son iguales a los electrones, pero con carga positiva"], "El LHC es un acelerador de altas energías donde se hacen chocar partículas.", "Ficha 8, p. 46"),
    O("f8-02", "t1", "¿Cuántos quarks forman un protón?", ["3", "1", "2", "6"], "Cada protón y cada neutrón están formados por tres quarks.", "Ficha 8, p. 46"),
    O("f8-03", "t1", "¿De qué quarks está formado un protón?", ["Dos quarks arriba y uno abajo", "Uno arriba y dos abajo", "Tres quarks arriba", "Tres quarks abajo"], "Protón: arriba, arriba, abajo.", "Ficha 8, p. 46"),
    O("f8-04", "t1", "¿De qué quarks está formado un neutrón?", ["Un quark arriba y dos abajo", "Dos arriba y uno abajo", "Tres arriba", "Tres abajo"], "Neutrón: arriba, abajo, abajo.", "Ficha 8, p. 46"),
    O("f8-05", "t1", "Un átomo de hidrógeno (con un protón y un electrón) tiene en total...", ["Tres quarks y un electrón", "Un quark y un electrón", "Dos quarks y dos electrones", "Seis quarks y un electrón"], "El protón tiene tres quarks, y el electrón no está formado por quarks.", "Ficha 8, p. 46"),
    O("f8-06", "t1", "El átomo de helio tiene 2 protones y 2 neutrones. ¿Cuántos quarks arriba y abajo tiene en total?", ["6 arriba y 6 abajo", "4 arriba y 8 abajo", "8 arriba y 4 abajo", "12 arriba y 0 abajo"], "Protones: 2 × (2 arriba + 1 abajo) = 4 arriba y 2 abajo. Neutrones: 2 × (1 arriba + 2 abajo) = 2 arriba y 4 abajo. Total: 6 y 6.", "Ficha 8, p. 46"),
    O("f8-07", "t1", "¿Cuántos tipos de quarks existen?", ["Seis", "Dos", "Tres", "Diez"], "Arriba (up), abajo (down), extraño (strange), encantado (charm), fondo (bottom) y cima (top).", "Ficha 8, p. 46"),
    VF("f8-08", "t1", "Los quarks se pueden observar aislados, uno por uno.", false, "Falso. Siempre forman un protón o un neutrón, por eso se descubrieron hace relativamente poco.", "Ficha 8, p. 46"),
    VF("f8-09", "t1", "Cuando un modelo no explica todas las observaciones, la ciencia lo modifica o lo sustituye.", true, "Verdadero. Así cambió el modelo del átomo con el descubrimiento del núcleo o de los quarks.", "Ficha 8, p. 46"),
    VF("f8-10", "t1", "Los muones y los bosones son otras partículas subatómicas descubiertas en estudios de altas energías.", true, "Verdadero. Además de protones, neutrones y electrones, existen muchas otras.", "Ficha 8, p. 46"),

    /* t2 · Tabla periódica */
    O("f8-11", "t2", "¿Qué indica el número atómico?", ["El número de protones en el núcleo", "El número de neutrones", "La masa del átomo en gramos", "El número de capas"], "En un átomo neutro también es el número de electrones.", "Ficha 8, p. 47"),
    O("f8-12", "t2", "¿Qué representa la masa atómica (redondeada)?", ["La suma de protones y neutrones del núcleo", "Solo el número de protones", "Solo el número de electrones", "La carga total"], "Los electrones aportan una masa despreciable.", "Ficha 8, p. 47"),
    O("f8-13", "t2", "¿Cómo se obtiene el número de neutrones?", ["Masa atómica (redondeada) menos número atómico","Número atómico menos masa atómica","Número atómico más masa atómica","Es siempre igual al de electrones"], "El número atómico es el de protones, así que neutrones = masa atómica (redondeada) − número atómico.", "Ficha 8, p. 47"),
    O("f8-14", "t2", "El criptón (Kr) tiene número atómico 36 y masa atómica 83.80. ¿Cuántos neutrones tiene?", ["48", "47", "36", "84"], "Se redondea 83.80 a 84: 84 − 36 = 48 neutrones. El libro escribe 83 − 36, que daría 47.", "Ficha 8, p. 47"),
    O("f8-15", "t2", "El titanio (Ti) tiene número atómico 22 y masa atómica 47.90. ¿Cuántos neutrones tiene?", ["26", "25", "22", "48"], "47.90 se redondea a 48: 48 − 22 = 26.", "Ficha 8, p. 47"),
    O("f8-16", "t2", "El indio (In) tiene número atómico 49 y masa atómica 114.82. ¿Cuántos neutrones tiene?", ["66", "65", "49", "115"], "114.82 se redondea a 115: 115 − 49 = 66.", "Ficha 8, p. 47"),
    O("f8-17", "t2", "Una molécula de agua (H₂O) tiene dos átomos de hidrógeno y uno de oxígeno. ¿Cuántos protones y electrones tiene en total?", ["10 protones y 10 electrones", "8 protones y 8 electrones", "3 protones y 3 electrones", "18 protones y 18 electrones"], "H: 1 protón y 1 electrón (×2). O: 8 protones y 8 electrones. Total: 10 y 10.", "Ficha 8, p. 47"),
    VF("f8-18", "t2", "En un átomo neutro, el número de electrones es igual al de protones.", true, "Verdadero. Por eso la carga total es cero.", "Ficha 8, p. 47"),
    O("f8-19", "t2", "El cloro tiene 17 protones y 18 neutrones (Cl-35). ¿Cuántos electrones tiene en cada capa?", ["2, 8 y 7", "2, 8 y 8", "8, 8 y 1", "17 en una sola capa"], "Con 17 electrones: 2 en la primera, 8 en la segunda y 7 en la tercera.", "Ficha 8, p. 50"),

    /* t3 · Escala del átomo */
    O("f8-20", "t3", "El radio del núcleo de oro es 7.3 × 10⁻¹⁵ m y el electrón está a 1.3 × 10⁻¹⁰ m. Si el núcleo fuera una pelota de 10 cm de radio, ¿a qué distancia estaría el electrón?", ["Aproximadamente 1 781 m (1.8 km)", "Aproximadamente 17.8 m", "Aproximadamente 0.1 m", "Aproximadamente 178 km"], "0.1 m × (1.3 × 10⁻¹⁰ ÷ 7.3 × 10⁻¹⁵) = 1 780.8 m. El átomo es casi todo espacio vacío.", "Ficha 8, p. 48"),
    O("f8-21", "t3", "Si el núcleo del hidrógeno (radio 1.2 × 10⁻¹⁵ m) fuera una cabeza de alfiler de 0.5 mm de radio, ¿a qué distancia estaría el electrón (a 1.5 × 10⁻¹⁰ m)?", ["62.5 m", "6.25 m", "625 m", "0.0625 m"], "0.0005 m × (1.5 × 10⁻¹⁰ ÷ 1.2 × 10⁻¹⁵) = 62.5 m.", "Ficha 8, p. 49"),
    VF("f8-22", "t3", "El átomo está casi todo hueco: el núcleo ocupa una parte minúscula de su volumen.", true, "Verdadero. Por eso, en una maqueta, el electrón queda a cientos o miles de metros del núcleo.", "Ficha 8, p. 48"),
    O("f8-23", "t3", "Al dividir 0.13 × 10⁻¹⁰ entre 7.3 × 10⁻¹⁵, ¿qué ocurre con las potencias de diez?", ["Se restan los exponentes: −10 − (−15) = 5", "Se suman los exponentes", "Se multiplican los exponentes", "Se dejan igual"], "En una división de potencias de la misma base, los exponentes se restan. El resultado es 0.017808 × 10⁵ = 1.781 × 10³.", "Ficha 8, p. 48"),

    /* t4 · Cuerpo humano y cargas */
    O("f8-24", "t4", "Según el gráfico de composición del cuerpo humano, si una persona tuviera 1 kg de masa, ¿cuántos gramos de carbono tendría? (el carbono es 18 % en masa)", ["180 g","18 g","1 800 g","10 g"], "Se calcula el 18 % de 1 000 g: 0.18 × 1 000 = 180 g de carbono.", "Ficha 8, p. 48"),
    O("f8-25", "t4", "Con 1 kg de masa corporal y 1.5 % de calcio, ¿cuántos gramos de calcio habría?", ["15 g","1.5 g","150 g","0.15 g"], "Se calcula el 1.5 % de 1 000 g: 0.015 × 1 000 = 15 g de calcio.", "Ficha 8, p. 48"),
    O("f8-26", "t4", "¿Cuál es el elemento más abundante en el cuerpo humano (en masa)?", ["El oxígeno (65 %)", "El carbono", "El hidrógeno", "El calcio"], "El oxígeno es 65 % de la masa, sobre todo porque está en el agua.", "Ficha 8, p. 48"),
    O("f8-27", "t4", "Un objeto cargado negativamente tiene...", ["Exceso de electrones", "Déficit de electrones", "Exceso de protones", "Exceso de neutrones"], "Los electrones tienen carga negativa. Si sobran, el objeto queda negativo.", "Ficha 8, p. 50"),
    O("f8-28", "t4", "Un objeto cargado positivamente tiene...", ["Déficit de electrones", "Exceso de electrones", "Exceso de neutrones", "Un núcleo más grande"], "Si faltan electrones, predominan las cargas positivas.", "Ficha 8, p. 50"),
    VF("f8-29", "t4", "Los neutrones tienen carga eléctrica positiva.", false, "Falso. Los neutrones no tienen carga; los protones son los positivos. Ambos están en el núcleo.", "Ficha 8, p. 47"),

    /* t5 · Tierras raras */
    O("f8-30", "t5", "Las tierras raras son los elementos...", ["Lantánidos o lantanoides", "Gases nobles", "Halógenos", "Alcalinos"], "Incluyen el neodimio, el lantano, el europio y otros.", "Ficha 8, p. 48"),
    O("f8-31", "t5", "¿Cuántos protones y neutrones tiene el neodimio (60 protones, masa 144)?", ["60 protones y 84 neutrones","60 protones y 60 neutrones","84 protones y 60 neutrones","144 protones y 60 neutrones"], "El número atómico (60) es el de protones; neutrones = masa − protones = 144 − 60 = 84.", "Ficha 8, p. 48"),
    O("f8-32", "t5", "¿Cuántos quarks totales tiene el núcleo del neodimio (60 protones y 84 neutrones)?", ["432", "144", "288", "60"], "Hay 144 nucleones, y cada uno tiene 3 quarks: 144 × 3 = 432.", "Ficha 8, p. 48"),
    O("f8-33", "t5", "¿Cuántos quarks totales tiene el núcleo del lantano (57 protones y 82 neutrones)?", ["417", "139", "279", "57"], "(57 + 82) × 3 = 139 × 3 = 417.", "Ficha 8, p. 48"),
    O("f8-34", "t5", "¿Cuántos quarks totales tiene el núcleo del europio (63 protones y 89 neutrones)?", ["456", "152", "304", "63"], "(63 + 89) × 3 = 152 × 3 = 456.", "Ficha 8, p. 48"),
    O("f8-35", "t5", "El neodimio se utiliza para fabricar...", ["Los imanes de los motores eléctricos de los autos","Las vías del tren y los rieles de las estaciones","El vidrio ordinario de las ventanas y los vasos","El papel que se usa en los cuadernos y en los libros"], "Los imanes de neodimio son muy potentes.", "Ficha 8, p. 49"),
    O("f8-36", "t5", "El gadolinio se usa en medicina como...", ["Medio de contraste en resonancia magnética", "Antibiótico", "Vitamina", "Anestésico"], "Mejora la imagen que produce el equipo de resonancia.", "Ficha 8, p. 49"),
    O("f8-37", "t5", "El erbio se usa en las comunicaciones por...", ["Fibra óptica, como amplificador de la señal", "Cable de cobre", "Ondas de radio", "Palomas mensajeras"], "Amplifica la luz que transporta los datos.", "Ficha 8, p. 49"),
    O("f8-38", "t5", "El cerio se usa en...", ["Los convertidores catalíticos de los autos", "Las pilas de reloj", "Los cables eléctricos", "Los imanes de refrigerador"], "Ayudan a reducir los gases contaminantes.", "Ficha 8, p. 49"),

    /* refuerzo · verdadero o falso */
    VF("f8-39", "t1", "Los protones y los neutrones están formados por quarks.", true, "Verdadero. Cada uno tiene tres quarks.", "Ficha 8, p. 46"),
    VF("f8-40", "t1", "El electrón está formado por tres quarks.", false, "Falso. El electrón no está formado por quarks.", "Ficha 8, p. 46"),
    VF("f8-41", "t2", "El número atómico indica cuántos neutrones tiene un átomo.", false, "Falso. El número atómico indica cuántos protones tiene el átomo; los neutrones se obtienen restando el número atómico a la masa atómica.", "Ficha 8, p. 47"),
    VF("f8-42", "t2", "Restando el número atómico a la masa atómica se obtiene el número de neutrones.", true, "Verdadero. Neutrones = masa atómica − número atómico (que es el de protones).", "Ficha 8, p. 47"),
    VF("f8-43", "t3", "En una maqueta a escala del átomo, el electrón queda muy lejos del núcleo.", true, "Verdadero. Con una pelota de 10 cm como núcleo, quedaría a unos 1 780 m.", "Ficha 8, p. 48"),
    VF("f8-44", "t5", "El neodimio se usa para fabricar imanes potentes.", true, "Verdadero. El neodimio se usa en imanes muy potentes, como los de los motores eléctricos de los autos.", "Ficha 8, p. 49")
  ]
});
