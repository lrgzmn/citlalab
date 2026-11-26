/* QUÍMICA · 3.º de secundaria
   Ficha 2: Aportaciones de científicos mexicanos a la ciencia (pp. 14 a 18)
   Se omiten las actividades de respuesta libre y los crucigramas. Se conservan fechas y hechos comprobables de los textos de la ficha.
*/
REPASO.agregar({
  materia: 'quimica',
  ficha: { id: 'q2', titulo: 'Ficha 2 · Aportaciones de científicos mexicanos a la ciencia', jefe: 'El Cloro Destructor' },
  temas: [
    { id: "t1", nombre: "Ciencia en Mesoamérica y la Colonia" },
    { id: "t2", nombre: "Francisco Bolívar, Reyes-Valerio y Norma Alcantar" },
    { id: "t3", nombre: "Luis Ernesto Miramontes" },
    { id: "t4", nombre: "Mario Molina y la capa de ozono" }
  ],
  preguntas: [

    /* t1 · Mesoamérica y Colonia */
    O("q2-01", "t1", "¿Qué documentos revelan el alto grado de evolución de las culturas de Mesoamérica?", ["Los códices, las crónicas y las obras artísticas","Los periódicos y las revistas que se publican hoy","Los libros de texto actuales de la escuela","Las películas y los programas de televisión"], "Muestran conocimientos de minería, metalurgia, herbolaria y conservación de alimentos.", "Ficha 2, p. 14"),
    O("q2-02", "t1", "¿Qué grupos prehispánicos sobresalieron en la metalurgia del cobre y del oro, respectivamente?", ["Los tarascos (cobre) y los mixtecos (oro)", "Los mixtecos (cobre) y los tarascos (oro)", "Los mexicas y los mayas", "Los olmecas y los zapotecas"], "Los tarascos eran de Michoacán y los mixtecos de Oaxaca, Puebla y Tlaxcala.", "Ficha 2, p. 14"),
    O("q2-03", "t1", "¿Qué proceso inventó Bartolomé de Medina, que dio origen a la primera industria minera de Pachuca en 1555?", ["La recuperación de plata por amalgamación con mercurio","La fundición de oro con carbón dentro de hornos de piedra","La extracción de sal marina en charcas con el calor del Sol","La destilación de petróleo para obtener gasolina y queroseno"], "La amalgamación consiste en poner un metal en contacto con mercurio.", "Ficha 2, p. 14"),
    O("q2-04", "t1", "¿Qué elemento descubrió Andrés Manuel del Río en 1801 al analizar muestras de Zimapán, Hidalgo?", ["El vanadio, elemento 23", "El oro", "El oxígeno", "El carbono"], "Del Río fue profesor e investigador del Real Seminario de Minería.", "Ficha 2, p. 14"),
    VF("q2-05", "t1", "El Real Seminario de Minería se fundó en 1792.", true, "Verdadero. El Real Jardín Botánico se fundó en 1788.", "Ficha 2, p. 14"),
    O("q2-06", "t1", "¿Cuál es el número atómico del vanadio?", ["23", "21", "25", "50"], "Es el elemento 23 de la tabla periódica.", "Ficha 2, p. 14"),
    O("q2-07", "t1", "¿Qué premio nacional de química lleva el nombre de Andrés Manuel del Río?", ["El Premio Nacional de Química \"Andrés Manuel del Río\"","El Premio Nobel de Química que se entrega en Estocolmo","El Premio Príncipe de Asturias de investigación científica","El Premio Kalinga para la divulgación de la ciencia"], "Miramontes lo recibió en 1986.", "Ficha 2, p. 16"),

    /* t2 · Otros científicos */
    O("q2-08", "t2", "¿Qué desarrolló Francisco Bolívar Zapata?", ["Técnicas de ingeniería genética para producir insulina con bacterias","La píldora anticonceptiva, a partir de plantas mexicanas","El televisor a color y un adaptador para transmitirlo","Un aparato para medir los sismos y su intensidad"], "La insulina sirve para controlar la diabetes.", "Ficha 2, p. 15"),
    O("q2-09", "t2", "¿Qué estudió Constantino Reyes-Valerio?", ["El azul maya y la influencia indígena en el arte novohispano","La capa de ozono y los gases que la destruyen","El nopal y su uso para purificar agua contaminada","Las proteínas de la leche y su efecto en la nutrición"], "El azul maya es un pigmento prehispánico muy duradero.", "Ficha 2, p. 15"),
    O("q2-10", "t2", "¿Qué investiga Norma Alcantar con el nopal?", ["El uso de su mucílago (baba) para purificar agua contaminada","La fabricación de plásticos biodegradables con almidón de maíz","El tratamiento de la diabetes con insulina producida por bacterias","La destilación del petróleo para obtener combustibles"], "También se ha propuesto para eliminar el olor del pescado.", "Ficha 2, p. 15"),
    O("q2-11", "t2", "¿Dónde se ha usado con éxito el mucílago de nopal para purificar agua?", ["En Haití tras el terremoto de 2010 y en el Golfo de México tras un derrame","En el desierto del Sahara, para obtener agua potable de los pozos secos","En la Antártida, para limpiar el hielo derretido de las bases científicas","En el espacio, para purificar el agua dentro de las estaciones orbitales"], "Se usó para agua contaminada con bacterias y metales pesados, y con petróleo.", "Ficha 2, p. 15"),
    VF("q2-12", "t2", "Norma Alcantar se interesó por el nopal porque su abuela le contó que en su pueblo purificaban el agua del estanque con su baba.", true, "Verdadero. Es un ejemplo de saber tradicional que dio origen a investigación científica.", "Ficha 2, p. 15"),

    /* t3 · Miramontes */
    O("q2-13", "t3", "¿Qué logró Luis Ernesto Miramontes el 15 de octubre de 1951?", ["La síntesis de la noretisterona", "El descubrimiento del vanadio", "La separación del cloro", "La invención del plástico"], "Es uno de los ingredientes activos de los anticonceptivos orales.", "Ficha 2, p. 16"),
    O("q2-14", "t3", "¿En qué carrera se formó Miramontes?", ["Ingeniería química", "Medicina", "Física", "Biología"], "Estudió en la Escuela Nacional de Ciencias Químicas (hoy Facultad de Química de la UNAM).", "Ficha 2, p. 16"),
    O("q2-15", "t3", "¿Cuál era la línea de investigación de Miramontes?", ["La síntesis de moléculas orgánicas esteroideas","Los plásticos biodegradables y sus aplicaciones","Los volcanes y los gases que emiten al hacer erupción","La astronomía y el estudio de las estrellas lejanas"], "También trabajó en procesos anticontaminantes en motores de combustión interna.", "Ficha 2, p. 16"),
    VF("q2-16", "t3", "Miramontes nació en Tepic, Nayarit, y murió en la Ciudad de México.", true, "Verdadero. Nació el 16 de marzo de 1925 y murió el 13 de septiembre de 2004.", "Ficha 2, p. 16"),
    O("q2-17", "t3", "¿Qué cambió la píldora anticonceptiva, según Miramontes?", ["Rompió barreras ideológicas y transformó valores humanos en el mundo","Eliminó por completo todas las enfermedades de la población","Aumentó la contaminación del agua en las ciudades","Sustituyó a la escuela como fuente de educación"], "Permitió que las mujeres decidieran cuándo y cuántos hijos tener.", "Ficha 2, p. 17"),

    /* t4 · Molina */
    O("q2-18", "t4", "¿Qué descubrió Mario Molina junto con Sherwood Rowland?", ["Que los átomos de cloro de los CFC destruyen el ozono","Que el ozono aumenta cuando se liberan los CFC","Que el oxígeno es tóxico para todos los seres vivos","Que el cloro es un gas noble que no reacciona"], "Publicaron sus resultados en la revista Nature en junio de 1974.", "Ficha 2, p. 17"),
    O("q2-19", "t4", "¿Qué son los CFC o clorofluorocarbonos?", ["Productos químicos industriales muy inertes, como los freones","Un tipo de plástico que se usa para fabricar botellas","Un gas natural del aire que respiramos","Un medicamento que se usa para tratar infecciones"], "Se acumulaban en la atmósfera y se pensaba que no tenían efecto.", "Ficha 2, p. 17"),
    O("q2-20", "t4", "¿Cuál es la fórmula del ozono?", ["O₃","O₂","CO₂","H₂O"], "La molécula de ozono tiene tres átomos de oxígeno: O₃. El oxígeno que respiramos tiene dos: O₂.", "Ficha 2, p. 18"),
    O("q2-21", "t4", "¿Para qué sirve la capa de ozono?", ["Filtra las radiaciones ultravioleta del Sol", "Calienta la Tierra", "Produce lluvia", "Absorbe CO₂"], "Mitiga los efectos dañinos de la radiación UV sobre la salud.", "Ficha 2, p. 17"),
    O("q2-22", "t4", "¿Qué premio recibió Molina en 1995 junto con Rowland y Paul Crutzen?", ["El Premio Nobel de Química", "El Premio Nobel de la Paz", "El Premio Nobel de Física", "El Premio Kalinga"], "Fue por sus investigaciones sobre la destrucción de la capa de ozono.", "Ficha 2, p. 17"),
    VF("q2-23", "t4", "Mario Molina estudió ingeniería química en la UNAM.", true, "Verdadero. Después hizo un posgrado en fisicoquímica en la Universidad de California en Berkeley.", "Ficha 2, p. 17"),
    O("q2-24", "t4", "¿En qué capa de la atmósfera se encuentra la mayor parte del ozono?", ["En la estratosfera","En la troposfera","En la mesosfera","En la superficie del mar"], "La mayor parte del ozono está en la estratosfera, donde forma la capa de ozono que filtra la radiación ultravioleta.", "Ficha 2, p. 17"),
    O("q2-25", "t4", "Cuando se descomponen los CFC por la luz UV, ¿qué átomos producen y cómo afectan al ozono?", ["Átomos de cloro, que destruyen el ozono", "Átomos de oxígeno, que lo fabrican", "Átomos de carbono, que lo protegen", "Átomos de hierro, que lo atrapan"], "Un solo átomo de cloro puede destruir muchas moléculas de ozono.", "Ficha 2, p. 17"),

    /* refuerzo · verdadero o falso */
    VF("q2-26", "t1", "Andrés Manuel del Río descubrió el vanadio en 1901.", false, "Falso. Lo descubrió en 1801; el vanadio es el elemento 23.", "Ficha 2, p. 14"),
    VF("q2-27", "t2", "Norma Alcantar estudia el uso del mucílago del nopal para purificar agua.", true, "Verdadero. Norma Alcantar investiga cómo el mucílago (baba) del nopal ayuda a purificar agua contaminada.", "Ficha 2, p. 15"),
    VF("q2-28", "t4", "Mario Molina ganó el Premio Nobel de Física.", false, "Falso. Ganó el Nobel de Química en 1995.", "Ficha 2, p. 17"),
    VF("q2-29", "t4", "Los CFC protegen la capa de ozono.", false, "Falso. Sus átomos de cloro la destruyen.", "Ficha 2, p. 17"),
    VF("q2-30", "t3", "La noretisterona es un ingrediente de los anticonceptivos orales.", true, "Verdadero. La noretisterona, sintetizada por Miramontes en 1951, es un ingrediente de los anticonceptivos orales.", "Ficha 2, p. 16")
  ]
});
