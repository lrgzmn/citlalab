/* =========================================================
   MINI-RECORRIDO DE BIENVENIDA
   Tres pantallas cortas que se pueden saltar: crecer repasando, el cielo de estrellas y el Museo de errores.
   Se muestra una sola vez al empezar y se puede volver a ver desde Ajustes.
   ========================================================= */
var tourI = 0;
function tourPet() {
  var g = ST.genero === 'm' ? 'm' : 'f', m = MAT[ST.activa || 'biologia'];
  return '<div class="tour-pet">' + miniPetVivo(m, g, 'tour') + '</div><div class="tour-xp" aria-hidden="true"><i></i></div><div class="tour-xpl" aria-hidden="true">+ energía con cada acierto</div>';
}
function tourCielo() {
  var mat = ST.activa || 'biologia', est = [], i;
  for (i = 0; i < 10; i++) { var n = i < 3 ? 3 : i < 6 ? 2 : i < 8 ? 1 : 0; est.push({ i: i, id: 'x' + i, num: i + 1, titulo: 'Estrella ' + (i + 1), nivel: n, br: n === 0 ? .25 : n === 1 ? .5 : n === 2 ? .8 : 1, sello: n === 3, vistas: n ? 1 : 0, pend: n === 1 ? 1 : 0, dom: 0 }); }
  var host = document.createElementNS('http://www.w3.org/2000/svg', 'svg'); host.setAttribute('viewBox', '0 0 300 240'); host.id = 'tour-sv'; host.setAttribute('aria-hidden', 'true');
  var w = el('div', 'cielo tour-cielo'); w.appendChild(host); var tmp = el('div'); tmp.appendChild(w);
  setTimeout(function () { var h = document.getElementById('tour-sv'); if (h) dibujaCielo(h, mat, est, function () {}, -1); }, 0);
  return tmp.innerHTML;
}
function tourMuseo() {
  return '<div class="tour-museo"><div class="tm-ico">' + ICO_MUSEO + '</div><div class="tm-row err"><small>Tu respuesta</small><b>"Las plantas no respiran"</b></div><div class="tm-flecha" aria-hidden="true">↓</div><div class="tm-row ok"><small>Hipótesis superada</small><b>"Respiran, pero de otra manera"</b></div></div>';
}
var TOUR = [
  { t: 'Repasa y tu mascota crece', p: 'Cada respuesta correcta le da energía. Cuando junta suficiente, se transforma y sigue creciendo. Nunca se enferma ni se pierde: solo te acompaña.', a: tourPet },
  { t: 'Cada ficha es una estrella', p: 'Al repasar una ficha, su estrella se enciende y forma una constelación real. Si pasan días, solo se pone tenue: vuelve a brillar contigo.', a: tourCielo },
  { t: 'Los errores también valen', p: 'Cuando falles, lo guardo en tu Museo de errores. Una respuesta equivocada es una hipótesis puesta a prueba, y puedes superarla.', a: tourMuseo }
];
function pintaTour() {
  var s = TOUR[tourI], last = tourI === TOUR.length - 1;
  $('tour-art').innerHTML = s.a(); $('tour-t').textContent = s.t; $('tour-p').textContent = s.p;
  var d = $('tour-dots'); d.innerHTML = ''; TOUR.forEach(function (x, i) { var b = el('i', i === tourI ? 'on' : ''); d.appendChild(b); });
  $('tour-sig').textContent = last ? '¡A repasar!' : 'Siguiente'; $('tour-skip').hidden = last;
  $('tour-art').className = 'tour-art a' + tourI;
}
function abreTour() { tourI = 0; go('tour'); }
function cierraTour() { ST.tour = 1; guardar(); go('home'); if (typeof say === 'function' && tieneMascotas()) say(cur().name + ': ' + MAT[ST.activa].orig.ini); }
(function () {
  VISTAS.tour = {};
  var g0 = go; go = function (v) { g0(v); if (v === 'tour') pintaTour(); };
  $('tour-sig').onclick = function () { SFX.pop(); if (tourI < TOUR.length - 1) { tourI++; pintaTour(); } else cierraTour(); };
  $('tour-skip').onclick = cierraTour;
  var ob = $('ob-go').onclick;
  $('ob-go').onclick = function () { ob.call(this); if (!ST.tour && tieneMascotas()) { ST.tour = 1; guardar(); abreTour(); } };
  var st = $('set-tour'); if (st) st.onclick = function () { abreTour(); };
})();
