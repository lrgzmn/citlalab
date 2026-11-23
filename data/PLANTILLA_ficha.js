/* PLANTILLA PARA UNA FICHA NUEVA
   1) Copia este archivo y ponle de nombre, por ejemplo:  data/biologia/ficha3.js
   2) Cambia los datos de abajo (materia, id, título, temas y preguntas).
   3) Abre data/lista.js y agrega UNA línea:  'data/biologia/ficha3.js',
   4) Sube los cambios. En sw.js cambia el número de VERSION (por ejemplo 'repaso-v3-2') para que los celulares se actualicen.
   5) Revisa que todo esté bien abriendo la app con  ?revisar=1  al final de la dirección.

   materia:  'fisica'  |  'biologia'  |  'quimica'
   id de la ficha: una letra y su número, sin espacios (f7, b3, q2...). No se puede repetir.
   jefe: nombre del monstruo de esa ficha (opcional; si lo quitas, esa ficha no tiene jefe).

   TIPOS DE PREGUNTA (una por línea; no olvides la coma al final):
     O(id, tema, pregunta, [opciones], explicación, página)
         La PRIMERA opción es la correcta; la app las mezcla sola. Usa de 3 a 5 opciones.
     VF(id, tema, afirmación, true | false, explicación, página)
         Verdadero o falso. Escribe true o false SIN comillas.
     ORD(id, tema, instrucción, [elementos en el orden correcto], explicación, página)
         La app los revuelve y el estudiante los ordena tocándolos.

     CM(id, tema, lo que dice la mascota, [corrección correcta, otras opciones], explicación, página)
         "Corrige a tu mascota": la mascota dice algo con un error típico y el estudiante la corrige. Escribe la afirmación errónea
         sin comillas (la app agrega "Atomina dice: ..."). Aparece en el repaso y en el juego del mismo nombre.
     CMOK(id, tema, lo que dice la mascota, explicación, página)
         Igual, pero esta vez la mascota tiene razón y el estudiante debe decir "Tienes razón". Mezcla algunas para que no
         adivinen que siempre se equivoca.

   POR QUÉ NO (opcional): en un archivo aparte, por ejemplo data/biologia/ficha3_porque.js, agrega:
     REPASO.porque({ 'b3-01': { 'Opción incorrecta exacta': 'por qué no es', 'Otra opción incorrecta': 'por qué no es' } });
   Cuando el estudiante elige esa opción, la app le explica específicamente por qué se equivocó. Escribe el texto de la opción
   exactamente igual que en la pregunta (la revisión con ?revisar=1 avisa si no coincide). Solo en preguntas de tipo O y CM.

   DIBUJOS (opcional): en cada tema puedes agregar  icono: 'nombre'  y todas sus preguntas mostrarán ese dibujo como apoyo visual.
     { id: 't1', nombre: 'Partes de la célula', icono: 'celula' }
   Nombres: esfera, panque, hoja_oro, neutron, orbitas, nube, particulas, tiempo, bombilla, atomo, celula, adn, matraz, microscopio, hoja, planeta, gota, iman.
   Una pregunta puede llevar otro dibujo si agregas al final un campo, o ninguno. Si un tema no lleva icono, sus preguntas salen sin dibujo.
   (¿Necesitas un dibujo que no existe? Pídelo y se agrega a la biblioteca.)

   El id de cada pregunta debe ser único en toda la app (por ejemplo b3-01, b3-02...).
   El tema es el id de uno de los temas de la lista de arriba (t1, t2...).
   Procura al menos 4 preguntas por tema, y varias de verdadero o falso para el juego de tarjetas.
   Mezcla preguntas de recordar con otras de aplicar, explicar o corregir un error ("¿qué está mal en esta frase?", "¿qué pasaría si…?");
   para esas, los distractores funcionan mejor si son errores típicos de los estudiantes.
   Para practicar comprensión lectora, puedes agregar lecturas con data/PLANTILLA_lectura.js.
   Antes de agregar una ficha, verifica los datos contra la fe de erratas del libro. */
REPASO.agregar({
  materia: 'biologia',
  ficha: { id: 'b3', titulo: 'Ficha 3 · La célula', jefe: 'El Virus Travieso' },
  temas: [
    { id: 't1', nombre: 'Partes de la célula', icono: 'celula' },
    { id: 't2', nombre: 'Célula animal y vegetal', icono: 'celula' }
  ],
  preguntas: [

    /* t1 · Partes de la célula */
    O("b3-01", "t1", "¿Qué organelo produce la mayor parte de la energía de la célula?", ["Mitocondria", "Núcleo", "Ribosoma", "Vacuola"], "La mitocondria transforma los nutrientes en energía utilizable.", "Ficha 3, p. 12"),
    VF("b3-02", "t1", "El núcleo contiene el material genético de la célula.", true, "El ADN está dentro del núcleo en las células eucariotas.", "Ficha 3, p. 12"),

    /* t2 · Célula animal y vegetal */
    ORD("b3-03", "t2", "Ordena de la capa más externa a la más interna de una célula vegetal.", ["Pared celular", "Membrana celular", "Citoplasma", "Núcleo"], "La pared celular rodea a la membrana; dentro está el citoplasma y en él, el núcleo.", "Ficha 3, p. 14")
  ]
});
