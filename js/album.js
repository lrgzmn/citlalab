/* ÁLBUM DE CARTAS.
   Una carta por ficha, de la materia de esa ficha. Se gana con el sello de la ficha. Cada dato curioso es de la misma materia. */
var CARTAS = {
  b1: { ic: 'celula', d: 'Las neuronas con mielina pueden conducir impulsos a más de 100 metros por segundo: casi 400 kilómetros por hora.' },
  b2: { ic: 'gota', d: 'El espacio entre dos neuronas (la sinapsis) mide apenas unos 20 a 40 nanómetros: es más de mil veces más delgado que un cabello.' },
  b3: { ic: 'celula', d: 'El cerebro sigue madurando hasta cerca de los 25 años, por eso cuidarlo en la adolescencia importa tanto.' },
  b4: { ic: 'hoja', d: 'Al hacer ejercicio el cuerpo libera endorfinas, sustancias que ayudan a sentirnos mejor.' },
  b5: { ic: 'adn', d: 'Poner nombre a lo que sientes (por ejemplo, "estoy molesta") ayuda a regular la emoción: es una estrategia que estudia la psicología.' },
  b6: { ic: 'tiempo', d: 'En México se reconoció el voto de las mujeres en 1953, y votaron por primera vez en una elección federal en 1955.' },
  b7: { ic: 'adn', d: 'Tu cerebro cambia con lo que practicas: a esa capacidad se le llama neuroplasticidad.' },
  b8: { ic: 'hoja', d: 'El condón es el único método que, además de ayudar a evitar un embarazo, ayuda a prevenir infecciones de transmisión sexual.' },
  b9: { ic: 'microscopio', d: 'Muchas infecciones de transmisión sexual no dan síntomas al inicio: por eso la prevención y las pruebas son tan importantes.' },
  b10: { ic: 'hoja', d: 'El cerebro es solo el 2 % del peso del cuerpo, pero usa cerca del 20 % de su energía.' },
  f1: { ic: 'bombilla', d: 'Una afirmación es científica solo si se puede poner a prueba: si no hay forma de comprobarla o refutarla, no lo es.' },
  f2: { ic: 'atomo', d: 'Marie Curie ganó dos premios Nobel en ciencias distintas: Física en 1903 y Química en 1911.' },
  f3: { ic: 'tiempo', d: 'Una de las primeras unidades de longitud fue el codo egipcio, de unos 52 centímetros.' },
  f4: { ic: 'tiempo', d: 'Hoy el metro se define con la rapidez de la luz: es la distancia que ella recorre en 1/299 792 458 de segundo.' },
  f5: { ic: 'nube', d: 'Un nanómetro es la milmillonésima parte de un metro: un cabello mide alrededor de 70 000 nanómetros de grosor.' },
  f6: { ic: 'planeta', d: 'La materia ordinaria (la de átomos como los nuestros) es solo cerca del 5 % del universo.' },
  f7: { ic: 'orbitas', d: 'En 1911 Rutherford vio que casi todas las partículas atravesaban una lámina de oro: el átomo es casi espacio vacío.' },
  f8: { ic: 'neutron', d: 'Si el núcleo fuera una canica de 1 cm, el átomo completo mediría cientos de metros de ancho.' },
  f9: { ic: 'esfera', d: 'El hielo flota porque es menos denso que el agua líquida: su densidad es de unos 0.92 g/cm³.' },
  f10: { ic: 'particulas', d: 'El hielo seco (dióxido de carbono sólido) no se derrite: sublima, es decir, pasa directo de sólido a gas.' },
  q1: { ic: 'hoja', d: 'La grana cochinilla, un insecto que vive en el nopal, dio un tinte rojo muy valioso desde tiempos prehispánicos.' },
  q2: { ic: 'matraz', d: 'El mexicano Mario Molina ganó el Premio Nobel de Química en 1995 por sus estudios sobre la capa de ozono.' },
  q3: { ic: 'gota', d: 'Una botella de plástico PET puede tardar cientos de años en degradarse.' },
  q4: { ic: 'esfera', d: 'La densidad es una propiedad intensiva: una gota de agua y una alberca tienen la misma densidad, cerca de 1 g/cm³.' },
  q5: { ic: 'matraz', d: 'Para medir un líquido en una probeta, la lectura se hace en la parte baja de la curva que forma el líquido (el menisco).' },
  q6: { ic: 'nube', d: 'El aire es una mezcla homogénea de gases: casi 78 % es nitrógeno y cerca de 21 % es oxígeno.' },
  q7: { ic: 'matraz', d: 'La destilación separa líquidos aprovechando que cada uno hierve a una temperatura distinta.' },
  q8: { ic: 'gota', d: 'El suero fisiológico es una disolución de sal al 0.9 %: 0.9 g de sal por cada 100 mL.' },
  q9: { ic: 'matraz', d: 'El alcohol al 70 % desinfecta mejor que el alcohol casi puro, aunque parezca lo contrario.' },
  q10: { ic: 'hoja_oro', d: 'Cuando el hierro se oxida reacciona con el oxígeno y el agua: el óxido es una sustancia distinta al hierro.' }
};
function abreAlbum() { go('album'); pintaAlbum(); }
function pintaAlbum() {
  var mat = ST.activa, s = cur(), fs = fichasDe(mat).slice().sort(function (a, b) { return numFicha(a, 0) - numFicha(b, 0); }), g = $('al-grid'); g.innerHTML = '';
  var tengo = fs.filter(function (f) { return s.sellos[f.ficha.id]; }).length;
  $('al-t').textContent = 'Álbum de ' + MAT[mat].n; $('al-sub').textContent = tengo + ' de ' + fs.length + ' cartas. Gana el sello de una ficha para conseguir su carta.';
  fs.forEach(function (f) {
    var id = f.ficha.id, c = CARTAS[id]; if (!c) return; var num = numFicha(f, 0), ok = !!s.sellos[id], rar = num >= 9 ? 'epica' : num >= 5 ? 'rara' : 'comun';
    var tit = f.ficha.titulo.replace(/^Ficha \d+ · /, '');
    var b = el('button', 'carta ' + rar + (ok ? '' : ' lock')); b.type = 'button';
    b.innerHTML = '<span class="cn">' + String(num).padStart(2, '0') + '</span>' + (ok ? iconoMk(c.ic) : '<span class="cq">?</span>') + '<b>' + (ok ? esc(tit) : 'Carta bloqueada') + '</b>' + (ok ? '<small>' + { comun: 'Común', rara: 'Rara', epica: 'Épica' }[rar] + '</small>' : '<small>Sello de la Ficha ' + num + '</small>');
    b.setAttribute('aria-label', ok ? 'Carta ' + num + ': ' + tit : 'Carta ' + num + ' bloqueada. Gana el sello de la ficha ' + num);
    b.onclick = function () { if (!ok) { SFX.no(); say('Domina la mitad de los temas de la Ficha ' + num + ' para ganar su sello y su carta.'); return; } SFX.up(); verCarta(f, c, rar, num, tit); };
    g.appendChild(b);
  });
}
function verCarta(f, c, rar, num, tit) {
  var ov = el('div', 'cartaov'); ov.setAttribute('role', 'dialog'); ov.setAttribute('aria-modal', 'true'); ov.setAttribute('aria-label', 'Carta ' + num);
  ov.innerHTML = '<div class="cartag ' + rar + '"><div class="cgl"></div><span class="cn">' + String(num).padStart(2, '0') + '/10</span><div class="cic">' + iconoMk(c.ic) + '</div><h3>' + esc(tit) + '</h3><p>' + esc(c.d) + '</p><small>' + MAT[ST.activa].n + ' · ' + { comun: 'Común', rara: 'Rara', epica: 'Épica' }[rar] + '</small></div><button class="cta" type="button">Cerrar</button>';
  document.body.appendChild(ov); ov.querySelector('button').focus();
  var cerrar = function () { ov.remove(); }; ov.querySelector('button').onclick = cerrar; ov.onclick = function (e) { if (e.target === ov) cerrar(); };
  ov.addEventListener('keydown', function (e) { if (e.key === 'Escape') cerrar(); });
}
$('al-back').onclick = function () { go('home'); };
JUEGOS.album = { titulo: 'Álbum de cartas', sub: 'Colecciona una carta con dato curioso por cada ficha.', iniciar: function () { abreAlbum(); },
  ico: '<svg viewBox="0 0 48 48"><rect x="7" y="9" width="24" height="32" rx="5" fill="#fff" stroke="var(--brand)" stroke-width="3" transform="rotate(-9 19 25)"/><rect x="17" y="7" width="24" height="32" rx="5" fill="var(--brand-soft)" stroke="var(--brand)" stroke-width="3" transform="rotate(7 29 23)"/><path d="M29 15 l2.2 4.6 5 .7-3.6 3.5.9 5-4.5-2.4-4.5 2.4.9-5-3.6-3.5 5-.7z" fill="#ffc933"/></svg>' };
