/* QUÍMICA · 3.º de secundaria
   Ficha 8: Concentración (pp. 47 a 51)
   Correcciones al libro (verificadas con Python): el suero oral de la ficha (12 g de sal y 26 g de azúcar por litro) no corresponde a la fórmula
   de la OMS (2.6 g de NaCl por litro); solo se usa la operación de g/mL. Brazalete: 3.5 / 17.6 = 19.89 % de cobre;
   té: 10 g de azúcar en 240 g de agua = 10 / 250 = 4.0 % (el libro divide entre el volumen del agua, 4.16 %);
   jugo: 1.5 g / 240 mL = 0.625 % ≈ 0.63 %; naranja: 2.5 / 180 = 1.39 %; pasta dental: 0.48 mg / 150 mL = 0.00032 % (el libro anota 0.32 %).
   Se omiten: lustrador de calzado con ácido sulfúrico, 5 % de CO en sangre, el punto de hebra dura y los 31 g de la gráfica B (valores sin respaldo).
   Se supone 1 mL de agua = 1 g y bebida de cola con 10.4 g de azúcar por cada 100 mL.
*/
REPASO.agregar({
  materia: 'quimica',
  ficha: { id: 'q8', titulo: 'Ficha 8 · Concentración', jefe: 'El Porcentaje Fantasma' },
  temas: [
    { id: "t1", nombre: "Qué es la concentración" },
    { id: "t2", nombre: "Porcentaje en masa" },
    { id: "t3", nombre: "Porcentaje en volumen" },
    { id: "t4", nombre: "Concentración y propiedades de las disoluciones" },
    { id: "t5", nombre: "Problemas de la vida diaria" }
  ],
  preguntas: [

    /* t1 · Concentración */
    O("q8-01", "t1", "¿Qué es la concentración de una disolución?", ["La relación entre la cantidad de soluto y la cantidad de disolución", "La cantidad de disolvente solamente", "El color de la disolución", "La temperatura"], "Se puede expresar de varias formas: g/mL, % en masa, % en volumen, ppm.", "Ficha 8, p. 47"),
    O("q8-02", "t1", "Una disolución tiene 12 g de sal en 1 000 mL. ¿Cuál es su concentración en g/mL?", ["0.012 g/mL", "0.12 g/mL", "12 g/mL", "0.0012 g/mL"], "12 ÷ 1 000 = 0.012 g/mL.", "Ficha 8, p. 47"),
    O("q8-03", "t1", "Una disolución tiene 26 g de azúcar en 1 000 mL. ¿Cuál es su concentración en g/mL?", ["0.026 g/mL", "0.26 g/mL", "26 g/mL", "0.0026 g/mL"], "26 ÷ 1 000 = 0.026 g/mL.", "Ficha 8, p. 47"),
    O("q8-04", "t1", "La OMS recomienda sales de rehidratación oral con 2.6 g de cloruro de sodio por litro. ¿Cuántos g/mL son?", ["0.0026 g/mL", "0.026 g/mL", "0.26 g/mL", "2.6 g/mL"], "2.6 ÷ 1 000 = 0.0026 g/mL. Por eso no conviene preparar sueros caseros a ojo: la proporción importa.", "Ficha 8, p. 47"),
    VF("q8-05", "t1", "Propiedades como la temperatura de ebullición y de congelación dependen de la concentración del soluto.", true, "Verdadero. Otras, como el color o la viscosidad, dependen de la naturaleza del soluto.", "Ficha 8, p. 47"),
    O("q8-06", "t1", "En una disolución, ¿qué es el soluto?", ["La sustancia que se disuelve", "La que disuelve", "El recipiente", "El calor"], "El disolvente es la sustancia que disuelve (normalmente la que está en mayor cantidad).", "Ficha 8, p. 47"),

    /* t2 · % masa */
    O("q8-07", "t2", "¿Cómo se calcula el porcentaje en masa?", ["(masa del soluto ÷ masa de la disolución) × 100", "(masa del disolvente ÷ masa del soluto) × 100", "masa del soluto × masa de la disolución", "(volumen ÷ masa) × 100"], "La masa de la disolución es masa de soluto más masa de disolvente.", "Ficha 8, p. 49"),
    O("q8-08", "t2", "Un brazalete tiene 14.1 g de plata y 3.5 g de cobre. ¿Qué porcentaje en masa de cobre tiene?", ["19.89 %", "24.8 %", "80.1 %", "3.5 %"], "Masa total = 17.6 g. 3.5 ÷ 17.6 × 100 = 19.89 %.", "Ficha 8, p. 49"),
    O("q8-09", "t2", "Un acuario necesita 3.6 % de NaCl, parecido al agua de mar. ¿Qué significa?", ["Cada 100 mL de agua del acuario tienen 3.6 g de cloruro de sodio", "Cada 100 mL tienen 36 g", "Cada litro tiene 3.6 g de agua", "Cada 3.6 mL tienen 100 g"], "Es una concentración en masa por cada 100 mL de disolución.", "Ficha 8, p. 48"),
    O("q8-10", "t2", "Un suero fisiológico al 0.9 % contiene...", ["0.9 g de NaCl por cada 100 mL de disolución", "9 g de NaCl por cada 100 mL", "0.09 g por cada 100 mL", "0.9 mL de agua"], "Por eso se parece a la concentración de sales de la sangre.", "Ficha 8, p. 48"),
    O("q8-11", "t2", "Una naranja de 180 g contiene 2.5 g de fibra. ¿Qué porcentaje en masa es?", ["1.39 %", "13.9 %", "0.72 %", "72 %"], "2.5 ÷ 180 × 100 = 1.39 %.", "Ficha 8, p. 50"),
    O("q8-12", "t2", "Un vaso de 240 mL de jugo tiene 1.5 g de fibra (se supone 1 mL = 1 g). ¿Qué porcentaje es?", ["Aproximadamente 0.63 %", "6.3 %", "16 %", "1.5 %"], "1.5 ÷ 240 × 100 = 0.625 %. El jugo tiene menos fibra que la naranja entera.", "Ficha 8, p. 50"),
    O("q8-13", "t2", "Se disuelven 10 g de azúcar en 240 g de agua. ¿Qué porcentaje en masa tiene la disolución?", ["4.0 %", "4.17 %", "10 %", "24 %"], "Masa de la disolución = 10 + 240 = 250 g. 10 ÷ 250 × 100 = 4.0 %. Si se divide entre solo 240 g sale 4.17 %, que no es correcto.", "Ficha 8, p. 50"),
    O("q8-14", "t2", "Una botella de 500 mL de cola tiene 10.4 g de azúcar por cada 100 mL. ¿Cuántos gramos de azúcar hay en la botella?", ["52 g", "5.2 g", "10.4 g", "104 g"], "10.4 × 5 = 52 g. Una cola light con 0.1 g por 100 mL tiene apenas 0.5 g.", "Ficha 8, p. 50"),
    O("q8-15", "t2", "Una pasta dental de 150 mL tiene 0.48 mg de fluoruro de sodio. ¿Qué porcentaje en masa de fluoruro tiene (1 mL ≈ 1 g)?", ["0.00032 %", "0.32 %", "0.0032 %", "0.048 %"], "0.48 mg = 0.00048 g; 0.00048 ÷ 150 × 100 = 0.00032 %.", "Ficha 8, p. 51"),
    O("q8-16", "t2", "Para niños de 3 a 6 años, el rango de fluoruros en la pasta es de 0.1 % a 0.145 %. Con 0.00032 %, la pasta del ejercicio...", ["Queda muy por debajo del rango: no cumple", "Está dentro del rango", "Queda por arriba del rango", "No se puede comparar"], "0.00032 % es mucho menor que 0.1 %.", "Ficha 8, p. 51"),
    VF("q8-17", "t2", "Los niños expuestos a mucho flúor antes de los 8 años pueden desarrollar fluorosis (manchas en los dientes).", true, "Verdadero. Por eso hay que supervisar la cantidad de pasta dental.", "Ficha 8, p. 51"),

    /* t3 · % volumen */
    O("q8-18", "t3", "¿Cómo se calcula el porcentaje en volumen?", ["(volumen del soluto ÷ volumen de la disolución) × 100", "(masa del soluto ÷ masa) × 100", "volumen del soluto × 100", "(volumen del disolvente ÷ masa) × 100"], "Es la misma idea que el % en masa, pero con volúmenes.", "Ficha 8, p. 49"),
    O("q8-19", "t3", "Se prepara una cubeta de 4.25 L de desinfectante al 5.88 % en volumen. ¿Cuántos mililitros de desinfectante se necesitan?", ["Aproximadamente 250 mL", "25 mL", "2.5 mL", "2 500 mL"], "5.88 % de 4 250 mL = 249.9 mL.", "Ficha 8, p. 50"),
    O("q8-20", "t3", "Una botella de 250 mL de agua oxigenada al 3 % en volumen contiene...", ["7.5 mL de H₂O₂", "75 mL de H₂O₂", "0.75 mL de H₂O₂", "3 mL de H₂O₂"], "3 % de 250 mL = 7.5 mL.", "Ficha 8, p. 50"),
    O("q8-21", "t3", "Un envase de 1.75 L de desinfectante tiene alcohol etílico al 1 %. ¿Cuántos mililitros de alcohol contiene?", ["17.5 mL", "175 mL", "1.75 mL", "1 750 mL"], "1 % de 1 750 mL = 17.5 mL.", "Ficha 8, p. 51"),
    CM("q8-22", "t3", "Agua oxigenada al 3 % en volumen significa que se mezclan 3 mL de H₂O₂ con 100 mL de agua", ["Significa 3 mL de H₂O₂ por cada 100 mL de disolución total (no 100 mL de agua aparte)", "Significa 3 mL de agua por cada 100 mL de H₂O₂", "Significa 3 g de agua por cada mL", "Significa 100 mL de H₂O₂ por cada 3 mL de agua"], "El porcentaje se calcula sobre el volumen total de la disolución.", "Ficha 8, p. 49"),

    /* t4 · Propiedades */
    O("q8-23", "t4", "¿Cómo es la temperatura de ebullición de una disolución azucarada respecto al agua pura?", ["Mayor que 100 °C", "Menor que 100 °C", "Igual", "Siempre 0 °C"], "Al aumentar la concentración de azúcar, sube la temperatura de ebullición.", "Ficha 8, p. 48"),
    O("q8-24", "t4", "¿Cómo cambia la temperatura de congelación del agua al disolver sal?", ["Disminuye (se congela a menos de 0 °C)", "Aumenta", "No cambia", "Se vuelve 100 °C"], "A mayor concentración de sal, más baja es la temperatura de congelación.", "Ficha 8, p. 49"),
    O("q8-25", "t4", "¿Por qué para hacer nieve el recipiente se coloca en un baño de hielo con sal?", ["Porque la mezcla de hielo y sal queda a menos de 0 °C", "Porque la sal calienta el hielo", "Porque el hielo se vuelve más duro", "Porque la sal da sabor"], "Se pueden alcanzar temperaturas mucho menores que 0 °C.", "Ficha 8, p. 49"),
    O("q8-26", "t4", "La concentración de sal del mar Muerto (33.7 %) es mucho mayor que la de los océanos (3.5 %). ¿Qué pasa con su temperatura de congelación?", ["Es menor que 0 °C", "Es 0 °C", "Es mayor que 0 °C", "No se congela porque hierve"], "Al aumentar la concentración del soluto, disminuye la temperatura de congelación.", "Ficha 8, p. 51"),
    O("q8-27", "t4", "Una disolución de NaCl al 23.31 % en masa (la mezcla eutéctica) es la que se congela a la temperatura más baja posible. ¿Cuál es esa temperatura?", ["Alrededor de −21 °C", "0 °C", "−5 °C", "−50 °C"], "Es la mezcla eutéctica, que se congela a −21.12 °C.", "Ficha 8, p. 49"),
    VF("q8-28", "t4", "Todas las propiedades de una disolución dependen de la naturaleza del soluto.", false, "Falso. Algunas, como la temperatura de ebullición y de congelación, dependen solo de la concentración.", "Ficha 8, p. 47"),
    VF("q8-29", "t4", "Una mayor concentración de azúcar en un almíbar hace que hierva a una temperatura más alta.", true, "Verdadero. Por eso un almíbar espeso hierve por encima de 100 °C.", "Ficha 8, p. 48"),
    O("q8-30", "t4", "¿Qué se necesita para preparar una disolución con la concentración adecuada?", ["Medir con precisión el soluto y la disolución con instrumentos", "Echar \"a ojo\"", "Usar siempre una cucharada", "Mezclar cualquier cantidad"], "La concentración determina el efecto.", "Ficha 8, p. 47"),

    /* refuerzo · verdadero o falso */
    VF("q8-31", "t2", "El porcentaje en masa usa la masa del soluto y la masa de la disolución.", true, "Verdadero.", "Ficha 8, p. 49"),
    VF("q8-32", "t3", "El 5 % en volumen de 200 mL son 10 mL.", true, "Verdadero. 0.05 × 200 = 10.", "Ficha 8, p. 49"),
    VF("q8-33", "t2", "El suero fisiológico al 0.9 % tiene 9 g de NaCl en 100 mL.", false, "Falso. Tiene 0.9 g en 100 mL.", "Ficha 8, p. 48"),
    VF("q8-34", "t2", "Según la ficha, una pasta con 0.00032 % de fluoruro cumple el rango de 0.1 % a 0.145 % para niños de 3 a 6 años.", false, "Falso. Está muy por debajo.", "Ficha 8, p. 51")
  ]
});
