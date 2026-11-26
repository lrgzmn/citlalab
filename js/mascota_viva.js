/* MASCOTA VIVA: modo ciencia, preguntas con camino y globo de ánimo, y mascota con vida propia. */

/* =========================================================
   1 · MODO CIENCIA
   Etiquetas sobre la mascota: cada parte se desbloquea con la etapa. Todo el contenido es de la materia de esa mascota.
   Las posiciones (x, y) están en las mismas medidas del dibujo de la mascota (0 a 200).
   ========================================================= */
var CIENCIA = {
  neurona: [
    { id: 'den', n: 'Dendritas', et: 1, ax: { sel: 'g[stroke-width="6"] path', i: 0 }, lado: 'l', y: 64, e: 'Las dendritas reciben las señales de otras neuronas.' },
    { id: 'soma', n: 'Cuerpo celular', et: 1, ax: { sel: '#body', at: 'edge' }, lado: 'l', y: 150, e: 'El cuerpo celular (soma) contiene el núcleo, y ahí se procesa la información.' },
    { id: 'axon', n: 'Axón', et: 1, ax: { sel: 'path[stroke-width="7"]', i: 0 }, lado: 'r', y: 138, e: 'El axón lleva el impulso nervioso lejos del cuerpo celular.' },
    { id: 'miel', n: 'Mielina', et: 2, ax: { sel: 'rect[rx="5.5"]', i: 0 }, lado: 'r', y: 62, e: 'La vaina de mielina envuelve al axón y hace que el impulso viaje más rápido.' },
    { id: 'term', n: 'Terminal axónico', et: 1, ax: { sel: 'circle[r="5.5"], circle[r="6"]', i: 0 }, lado: 'r', y: 168, e: 'En el terminal axónico se liberan neurotransmisores para pasar la señal a la siguiente célula.' }
  ],
  atomo: [
    { id: 'nuc', n: 'Núcleo', et: 1, ax: { sel: '#body', at: 'edge' }, lado: 'r', y: 170, e: 'En el centro del átomo están los protones y los neutrones. Aquí está dibujado enorme: en un átomo real el núcleo es diminuto comparado con todo el átomo.' },
    { id: 'orb', n: 'Órbita', et: 2, ax: { sel: 'path[stroke-width="5"]', anillo: 1, t: .9 }, lado: 'r', y: 64, e: 'En el modelo de Bohr, los electrones giran en órbitas alrededor del núcleo.' },
    { id: 'ele', n: 'Electrón', et: 2, ax: { sel: 'circle[r="8"]', i: 0 }, lado: 'l', y: 64, e: 'El electrón tiene carga negativa y gira alrededor del núcleo.' },
    { id: 'orb2', n: 'Órbita lejana', et: 3, ax: { sel: 'path[stroke-width="5"]', anillo: 2, t: .93 }, lado: 'r', y: 100, e: 'Una órbita más lejana es un nivel con más energía. Cada órbita admite un número máximo de electrones.' }
  ],
  matraz: [
    { id: 'rec', n: function (et) { return et === 1 ? 'Vaso de precipitados' : 'Matraz Erlenmeyer'; }, et: 1, ax: { sel: 'path[stroke="#b6c4e6"]', i: 0, t: .07 }, lado: 'r', y: 62, e: 'Es material de vidrio de laboratorio: sirve para contener y mezclar líquidos.' },
    { id: 'dis', n: 'Disolución', et: 1, ax: { sel: '#body', at: 'edge' }, lado: 'l', y: 150, e: 'Una disolución es una mezcla homogénea: el soluto se disolvió en el disolvente y no se distingue a simple vista.' },
    { id: 'vap', n: 'Vapor', et: 3, ax: { fijo: [96, 22] }, lado: 'l', y: 70, e: 'Al calentar un líquido, parte pasa a gas: eso se llama vaporización.' }
  ]
};
var sci = { on: false, raf: 0, key: '' };
function cienciaBtn() {
  var b = el('button', 'sciBtn'); b.id = 'sciBtn'; b.type = 'button'; b.setAttribute('aria-pressed', 'false');
  b.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="10.5" cy="10.5" r="6.5"/><path d="M15.5 15.5L21 21"/></svg><span>Ciencia</span>';
  b.onclick = function () { cienciaOn(!sci.on); };
  $('stage').appendChild(b);
}
cienciaBtn();
function cienciaOn(v) {
  sci.on = v; var b = $('sciBtn'); b.setAttribute('aria-pressed', v ? 'true' : 'false'); b.classList.toggle('on', v);
  b.querySelector('span').textContent = v ? 'Listo' : 'Ciencia';
  if (!v) { cienciaQuita(); cancelAnimationFrame(sci.raf); return; }
  var s = cur(); if (s.vis === 0) { say(s.name + ': Cuando me transforme podrás ver mis partes. ¡Sigue repasando!'); sci.on = false; b.classList.remove('on'); b.setAttribute('aria-pressed', 'false'); b.querySelector('span').textContent = 'Ciencia'; return; }
  say(s.name + ': Toca una etiqueta para saber qué hace esa parte.'); cienciaPinta(); cienciaLoop();
}
function cienciaQuita() { var g = $('sciG'); if (g) g.remove(); var d = $('sciDim'); if (d) d.remove(); }
/* punto del dibujo al que apunta una etiqueta, en las medidas de la escena (se calcula del dibujo real: sigue a la mascota cuando se mueve) */
function cienciaPunto(sp, hacia) {
  var pet = $('pet'), sc = $('scene'), m = sc.getScreenCTM(); if (!m) return null;
  if (sp.fijo) { var pm = pet.getScreenCTM(), pt0 = sc.createSVGPoint(); pt0.x = sp.fijo[0]; pt0.y = sp.fijo[1]; var c0 = pt0.matrixTransform(pm).matrixTransform(m.inverse()); return [c0.x, c0.y]; }
  var els = pet.querySelectorAll(sp.sel), e = els[sp.i || 0];
  if (sp.anillo) { e = pet.querySelectorAll(sp.sel); var vis = cur().vis; e = sp.anillo === 1 ? (vis >= 3 ? e[2] : e[1]) : e[3]; }
  if (!e) return null;
  var inv = m.inverse(), pt = sc.createSVGPoint();
  function aEscena(x, y) { pt.x = x; pt.y = y; var q = pt.matrixTransform(inv); return [q.x, q.y]; }
  if (sp.t != null && e.getTotalLength) {
    var L = e.getTotalLength(), q = e.getPointAtLength(L * sp.t), cm = e.getScreenCTM(); pt.x = q.x; pt.y = q.y; var c = pt.matrixTransform(cm); return aEscena(c.x, c.y);
  }
  var r = e.getBoundingClientRect(); if (!r.width && !r.height) return null;
  var cx = r.left + r.width / 2, cy = r.top + r.height / 2;
  if (sp.at === 'edge') {
    var h = aEscena(cx, cy), dx = hacia[0] - h[0], dy = hacia[1] - h[1], d = Math.hypot(dx, dy) || 1, rad = (r.width / m.a) / 2 * .94;
    return [h[0] + dx / d * rad, h[1] + dy / d * rad * (r.height / r.width)];
  }
  return aEscena(cx, cy);
}
function cienciaPinta() {
  cienciaQuita(); var s = cur(), mat = MAT[ST.activa], vis = s.vis, lista = CIENCIA[mat.creature] || [];
  var sc = $('scene'), NS = 'http://www.w3.org/2000/svg';
  var dim = document.createElementNS(NS, 'rect'); dim.setAttribute('id', 'sciDim'); dim.setAttribute('x', -300); dim.setAttribute('y', -40); dim.setAttribute('width', 800); dim.setAttribute('height', 300); dim.setAttribute('fill', '#fff'); dim.setAttribute('opacity', '.45');
  sc.insertBefore(dim, $('pet'));
  var g = document.createElementNS(NS, 'g'); g.setAttribute('id', 'sciG'); var h = '';
  lista.forEach(function (p, k) {
    var bloq = vis < p.et, nom = typeof p.n === 'function' ? p.n(vis) : p.n, txt = bloq ? '? Etapa ' + p.et : nom;
    var w = Math.round(txt.length * 5.2 + 16), x = p.lado === 'l' ? -34 : 236 - w, y = p.y, cx = p.lado === 'l' ? x + w : x;
    p._cx = cx; p._y = y;
    if (!bloq) h += '<line class="sciLn" data-k="' + k + '" x1="' + cx + '" y1="' + y + '" x2="' + cx + '" y2="' + y + '"/><circle class="sciDot" data-k="' + k + '" cx="' + cx + '" cy="' + y + '" r="3.2"/>';
    h += '<g class="sciChip' + (bloq ? ' lock' : '') + '" data-p="' + p.id + '" tabindex="0" role="button" aria-label="' + esc(bloq ? 'Parte bloqueada: se desbloquea en la etapa ' + p.et : nom) + '"><rect x="' + x + '" y="' + (y - 8) + '" width="' + w + '" height="16" rx="8"/><text x="' + (x + w / 2) + '" y="' + (y + 3.4) + '" text-anchor="middle">' + esc(txt) + '</text></g>';
  });
  g.innerHTML = h; sc.appendChild(g); sci.key = petKey; sci.lista = lista;
  g.querySelectorAll('.sciChip').forEach(function (c) {
    function act() {
      var p = lista.filter(function (q) { return q.id === c.getAttribute('data-p'); })[0], bloq = vis < p.et;
      g.querySelectorAll('.sciChip').forEach(function (o) { o.classList.remove('sel'); }); c.classList.add('sel');
      if (bloq) { SFX.no(); say(s.name + ': Esta parte aparece en la etapa ' + p.et + ' (' + ETAPAS[p.et] + '). ¡Sigue repasando!'); return; }
      SFX.voz(mat.creature); say(s.name + ': ' + (typeof p.n === 'function' ? p.n(vis) : p.n) + '. ' + p.e);
    }
    c.onclick = act; c.onkeydown = function (e) { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); act(); } };
  });
  cienciaSigue();
}
function cienciaSigue() {
  var g = $('sciG'); if (!g || !sci.lista) return;
  sci.lista.forEach(function (p, k) {
    var ln = g.querySelector('line[data-k="' + k + '"]'), dt = g.querySelector('circle[data-k="' + k + '"]'); if (!ln) return;
    var q = cienciaPunto(p.ax, [p._cx, p._y]); if (!q) { ln.style.visibility = dt.style.visibility = 'hidden'; return; }
    ln.style.visibility = dt.style.visibility = 'visible';
    ln.setAttribute('x2', q[0].toFixed(1)); ln.setAttribute('y2', q[1].toFixed(1)); dt.setAttribute('cx', q[0].toFixed(1)); dt.setAttribute('cy', q[1].toFixed(1));
  });
}
function cienciaLoop() {
  cancelAnimationFrame(sci.raf);
  (function paso() {
    if (!sci.on) return;
    if (petKey !== sci.key) { if (cur().vis === 0) { cienciaOn(false); return; } cienciaPinta(); }
    cienciaSigue(); sci.raf = requestAnimationFrame(paso);
  })();
}
/* al salir del inicio o cambiar de materia, se apaga */
(function () {
  var go0 = go;
  go = function (v) { if (sci.on && v !== 'home') cienciaOn(false); go0(v); };
})();

/* =========================================================
   2 · PREGUNTAS CON VIDA: camino de progreso, globo de ánimo y letras A, B, C, D
   ========================================================= */
var ANIMO_INI = ['¡Tú puedes! Piénsalo con calma.', 'Mira bien las opciones.', 'Te estoy echando porras.', 'Respira y elige.', 'Esta te la sabes.'];
var ANIMO_OK = ['¡Eso es!', '¡Lo sabías!', '¡Qué bien lo haces!', '¡Excelente!'];
var ANIMO_NO = ['Casi. Lee por qué y la próxima sale.', 'No pasa nada, así se aprende.', 'Buen intento. Mira la explicación.'];
function qExtras() {
  if ($('q-path')) return;
  var v = $('v-quiz'), head = v.querySelector('.qhead');
  var path = el('div', 'qpath'); path.id = 'q-path'; path.setAttribute('aria-hidden', 'true'); head.insertAdjacentElement('afterend', path);
  var bub = el('div', 'qbub'); bub.id = 'q-bub'; bub.setAttribute('role', 'status'); bub.innerHTML = '<span class="qav" id="q-av"></span><span class="qtx" id="q-btx"></span>';
  path.insertAdjacentElement('afterend', bub);
}
function qCamino() {
  qExtras(); var n = quiz.qs.length, h = '';
  for (var i = 0; i < n; i++) {
    var est = quiz.res && quiz.res[i] !== undefined ? (quiz.res[i] ? 'ok' : 'no') : i === quiz.i ? 'now' : i < quiz.i ? 'ok' : '';
    h += '<i class="qd ' + est + '"></i><b class="ql' + (i < quiz.i ? ' on' : '') + '"></b>';
  }
  h += '<span class="qstar' + (quiz.i === n ? ' on' : '') + '"><svg viewBox="0 0 24 24"><path d="M12 2.5l2.9 6 6.6.8-4.9 4.5 1.3 6.5L12 17l-5.9 3.3 1.3-6.5L2.5 9.3l6.6-.8z" fill="currentColor"/></svg></span>';
  $('q-path').innerHTML = h;
}
function qGlobo(txt, tono) {
  qExtras(); $('q-av').innerHTML = glifo(MAT[ST.activa].creature); var b = $('q-bub'); b.className = 'qbub ' + (tono || ''); $('q-btx').textContent = cur().name + ': ' + txt;
}
(function () {
  var m0 = mostrarQ, r0 = responderQ;
  mostrarQ = function () {
    quiz.res = quiz.res || []; m0(); qCamino(); qGlobo(pick(ANIMO_INI));
    var box = $('q-opts'); box.classList.toggle('lt', box.querySelectorAll('.opt').length >= 3);
    var sh = $('q-sheet'); if (sh) sh.classList.remove('up');
  };
  responderQ = function (q, bien, elegido, conf) {
    quiz.res = quiz.res || []; quiz.res[quiz.i] = !!bien; r0(q, bien, elegido, conf); qCamino();
    qGlobo(bien ? pick(ANIMO_OK) : pick(ANIMO_NO), bien ? 'ok' : 'no');
    var sh = $('q-sheet'); if (sh) { sh.classList.add('up'); }
  };
})();

/* =========================================================
   6 · MASCOTA CON VIDA PROPIA: ventana con cielo según la hora, miradas, bostezos y ánimo
   ========================================================= */
function momentoDia() { var h = new Date().getHours(); if (temaNoche() || h >= 20 || h < 6) return 'noche'; if (h >= 18) return 'tarde'; return 'dia'; }
var vida = { t: 0, ocupado: false };
function ojosA(dx, dy) {
  ['gEyes', 'gLash', 'gBrow'].forEach(function (id) { var g = $(id); if (g) g.setAttribute('transform', 'translate(' + dx + ',' + dy + ')'); });
}
function vidaPaso(forzar) {
  if (vida.ocupado || sci.on || vistaActual !== 'home' || (typeof dormido !== 'undefined' && dormido)) return;
  var s = cur(); if (!s || !s.vis || !$('gEyes')) return;
  vida.ocupado = true; var m = momentoDia(), n = s.name, fin = function (ms) { setTimeout(function () { ojosA(0, 0); setMouth('smile'); vida.ocupado = false; }, ms); };
  var op = forzar || pick(['ventana', 'mirar', 'bostezo', 'saludo', 'nota', 'animo']);
  if (op === 'ventana') { ojosA(5, -4); say(n + ': ' + (m === 'noche' ? 'Mira por la ventana: ya es de noche y se ven las estrellas.' : m === 'tarde' ? 'Mira por la ventana: ya está atardeciendo.' : 'Mira por la ventana: ¡qué día tan bonito!')); fin(3200); }
  else if (op === 'mirar') { var d = pick([-4, 4]); ojosA(d, 1); setTimeout(function () { ojosA(-d, 0); }, 900); fin(1900); }
  else if (op === 'bostezo') { setMouth('open'); ojosA(0, 3); say(n + ': Aaaah… ' + (m === 'noche' ? 'ya me da sueño.' : '¿repasamos un poquito?')); fin(2200); }
  else if (op === 'saludo') { anim('jump'); say(n + ': ¡Hola! Qué bueno que estás aquí.'); fin(1500); }
  else if (op === 'nota') { vidaNotas(); say(n + ': ♪ la la la ♪'); setMouth('open'); fin(2600); }
  else { vida.ocupado = false; vidaAnimo(); }
}
function vidaAnimo() {
  var s = cur(); if (!s.vis) return;
  if (s.feli < 40) say(s.name + ': Me siento un poquito sola… ¿jugamos?');
  else if (s.hamb < 40) say(s.name + ': Tengo hambre de conocimiento. ¿Repasamos?');
  else if (s.feli > 85) say(s.name + ': ¡Estoy feliz! Hoy es un gran día para aprender.');
}
function vidaNotas() {
  var st = $('stage');
  ['♪', '♫', '♪'].forEach(function (c, i) { setTimeout(function () { var d = el('div', 'heart', c); d.style.left = (58 + i * 11) + '%'; d.style.top = (28 + (i % 2) * 8) + '%'; d.style.color = 'var(--brand)'; st.appendChild(d); setTimeout(function () { d.remove(); }, 1300); }, i * 300); });
}
setInterval(function () { if (Math.random() < .7) vidaPaso(); }, 9000);
