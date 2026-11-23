/* LECTURA CIENTÍFICA
   Un texto corto se queda a la vista mientras el alumno responde. Se practican cinco habilidades de comprensión lectora:
   entender lo que dice el texto, deducir, palabras en contexto, encontrar pruebas y ordenar ideas.
   Al corregir se marcan en el texto las oraciones que respaldan la respuesta. */

var HAB = {
  literal: 'Entender lo que dice el texto', inferencia: 'Deducir lo que no está escrito', vocabulario: 'Palabras en contexto',
  evidencia: 'Encontrar pruebas en el texto', secuencia: 'Ordenar ideas', explicar: 'Explicar con tus palabras (tú te revisas)'
};
var HAB_CORTO = { literal: 'Entender el texto', inferencia: 'Deducir', vocabulario: 'Vocabulario', evidencia: 'Buscar pruebas', secuencia: 'Ordenar ideas', explicar: 'Explicar (tú te revisas)' };
var HAB_ORDEN = ['literal', 'inferencia', 'vocabulario', 'evidencia', 'secuencia', 'explicar'];
var lc = null;

function lecturasDe(mat) { return REPASO.lecturas.filter(function (l) { return l.materia === mat; }); }
function habPct(s, h) { var x = s.hab[h]; return x && x.n ? Math.round(x.c / x.n * 100) : null; }

/* ---------- Lista de lecturas ---------- */
var ICO_LIBRO = '<svg viewBox="0 0 48 48" aria-hidden="true"><path d="M7 10 H22 A4 4 0 0 1 24 13 V40 A4 4 0 0 0 21 38 H7 Z" fill="var(--brand-soft)" stroke="var(--brand)" stroke-width="2.5" stroke-linejoin="round"/><path d="M41 10 H26 A4 4 0 0 0 24 13 V40 A4 4 0 0 1 27 38 H41 Z" fill="#fff" stroke="var(--brand)" stroke-width="2.5" stroke-linejoin="round"/><path d="M12 18 H19 M12 24 H19 M30 18 H36 M30 24 H36" stroke="var(--brand)" stroke-width="2.5" stroke-linecap="round"/></svg>';
function renderLecturas() {
  var s = cur(), c = $('lc-list'), hoy = fechaHoy(); c.innerHTML = '';
  var ls = lecturasDe(ST.activa);
  if (!ls.length) { c.appendChild(el('p', 'p', 'Tu docente agregará lecturas de ' + MAT[ST.activa].n + ' muy pronto.')); return; }
  ls.forEach(function (L) {
    var rec = s.lect[L.id], b = el('button', 'gcard');
    var meta = '<span class="lcard-meta"><i>' + L.items.length + ' preguntas</i>' + (rec && rec.veces ? '<i>Mejor: ' + rec.best + ' de ' + L.items.length + '</i>' : '') + (rec && rec.d === hoy ? '<i>Puntos de hoy ganados</i>' : '<i>Puntos disponibles hoy</i>') + '</span>';
    b.innerHTML = '<span class="ico">' + ICO_LIBRO + '</span><span><b>' + esc(L.titulo) + '</b><small>' + esc(temaNombre(L.ficha + '.' + L.tema)) + '</small>' + meta + '</span>';
    b.onclick = function () { iniciarLectura(L); }; c.appendChild(b);
  });
}
$('lc-back').onclick = function () { go('home'); };

/* ---------- Leer en voz alta (solo si el dispositivo lo permite) ---------- */
var TTS = (function () { try { return 'speechSynthesis' in window && 'SpeechSynthesisUtterance' in window; } catch (e) { return false; } })();
/* Solo se usan voces en español que viven DENTRO del dispositivo (localService). Algunas voces de navegador funcionan en línea y mandarían el texto a un servidor;
   esas se descartan. Si el dispositivo no tiene una voz local en español, los botones de escuchar no aparecen. */
function vozLocal() {
  try {
    var v = speechSynthesis.getVoices().filter(function (x) { return /^es/i.test(x.lang) && x.localService === true; });
    v.sort(function (a, b) { return (/^es[-_]mx/i.test(b.lang) ? 1 : 0) - (/^es[-_]mx/i.test(a.lang) ? 1 : 0); });
    return v[0] || null;
  } catch (e) { return null; }
}
function hayVozEs() { return TTS && !!vozLocal(); }
try { if (TTS && speechSynthesis.addEventListener) speechSynthesis.addEventListener('voiceschanged', function () {
  var v = hayVozEs(); document.querySelectorAll('.esc-btn').forEach(function (b) { b.hidden = !v; });
  if (typeof vistaActual !== 'undefined' && vistaActual === 'lect' && lc && lc.fase !== 'explica') { $('l-voz-t').hidden = !v; $('l-voz-q').hidden = !v; }
}); } catch (e) {}
function callar() {
  if (!TTS) return;
  try { speechSynthesis.cancel(); } catch (e) {}
  var b = $('l-voz-t'); if (b) b.setAttribute('aria-pressed', 'false');
  document.querySelectorAll('.pasaje .or.say').forEach(function (x) { x.classList.remove('say'); });
}
function hablar(frases, marcar, fin) {
  callar(); var vz = TTS ? vozLocal() : null; if (!vz) return;
  frases.forEach(function (t, i) {
    var u = new SpeechSynthesisUtterance(t); u.voice = vz; u.lang = vz.lang; u.rate = (typeof ST !== 'undefined' && ST.cfg && ST.cfg.lento) ? .8 : .92;
    u.onstart = function () { if (marcar) { document.querySelectorAll('.pasaje .or.say').forEach(function (x) { x.classList.remove('say'); }); var o = document.querySelector('.pasaje .or[data-i="' + i + '"]'); if (o) o.classList.add('say'); } };
    if (i === frases.length - 1) u.onend = function () { if (marcar) callar(); if (fin) fin(); };
    try { speechSynthesis.speak(u); } catch (e) {}
  });
}
$('l-voz-t').onclick = function () {
  if (this.getAttribute('aria-pressed') === 'true') { callar(); return; }
  var L = lc.L; callar(); this.setAttribute('aria-pressed', 'true'); hablar(L.texto, true);
};
$('l-voz-q').onclick = function () { var it = lc.L.items[lc.i]; hablar([it.q], false); };

/* ---------- Una lectura ---------- */
function iniciarLectura(L) {
  var s = cur(), hoy = fechaHoy();
  var rec = s.lect[L.id] = s.lect[L.id] || { d: '', best: 0, veces: 0 };
  lc = { L: L, i: 0, ok: 0, xp: 0, xpHoy: rec.d !== hoy, hab: {}, et0: etapa(s) };
  if (lc.xpHoy) rec.d = hoy;   /* los puntos se ganan una vez al día por lectura; seguir practicando es libre */
  guardar();
  go('lect'); $('l-tit').textContent = L.titulo;
  var v = TTS && hayVozEs(); $('l-voz-t').hidden = !v; $('l-voz-q').hidden = !v;
  mostrarL();
}
function pintaPasaje(modo, onTap) {
  var p = $('l-txt'); p.innerHTML = '';
  lc.L.texto.forEach(function (t, i) {
    var o = el('span', 'or' + (modo === 'tap' ? ' tap' : ''), t); o.dataset.i = i;
    if (modo === 'tap') {   /* cada oración es tocable (también con teclado) sin romper el párrafo */
      o.setAttribute('role', 'button'); o.tabIndex = 0;
      o.onclick = function () { onTap(i, o); };
      o.onkeydown = function (e) { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); onTap(i, o); } };
    }
    p.appendChild(o); p.appendChild(document.createTextNode(' '));
  });
}
function mostrarL() {
  callar();
  var L = lc.L, it = L.items[lc.i];
  $('l-cnt').textContent = (lc.i + 1) + '/' + L.items.length; $('l-pr').style.width = (lc.i / L.items.length * 100) + '%';
  $('l-fb').hidden = true; $('l-next').hidden = true;
  var tag = it.vfn ? 'Verdadero, falso o el texto no lo dice' : HAB[it.hab];
  var opts = $('l-opts'); opts.innerHTML = '';
  if (it.k === 'evid') {
    $('l-tag').textContent = tag; $('l-text').textContent = it.q;
    pintaPasaje('tap', function (i, o) {
      var bien = it.ev.indexOf(i) > -1;
      document.querySelectorAll('.pasaje .or').forEach(function (x) { x.onclick = null; x.onkeydown = null; x.removeAttribute('role'); x.removeAttribute('tabindex'); x.classList.remove('tap'); });
      if (!bien) o.classList.add('bad');
      responderL(it, bien);
    });
    opts.appendChild(el('div', 'ordhint', 'Toca la oración del texto que da la prueba.'));
  } else {
    pintaPasaje('lee');
    var q = Object.assign({}, it, { tema: 'lectura' });
    pintarPregunta(q, { tag: 'l-tag', text: 'l-text', opts: 'l-opts' }, function (bien) { responderL(it, bien); });
    $('l-tag').textContent = tag;
    if (it.vfn) $('l-text').textContent = '"' + it.q + '"';
  }
  window.scrollTo(0, 0); enfocar('l-text');
}
function respL(it) {
  if (it.k === 'evid') return '"' + lc.L.texto[it.ev[0]] + '"';
  if (it.k === 'orden') return it.items.join(' → ');
  return correcta(it);
}
function responderL(it, bien) {
  var s = cur(), h = it.hab;
  marcarDia(); actualizarTiempo(s);
  var x = s.hab[h] = s.hab[h] || { n: 0, c: 0 }; x.n++; if (bien) x.c++;
  var y = lc.hab[h] = lc.hab[h] || { n: 0, c: 0 }; y.n++; if (bien) y.c++;
  var g = 0;
  if (bien) { lc.ok++; if (lc.xpHoy) { g = darXP(s, PTS.lectura); lc.xp += g; s.hamb = Math.min(100, s.hamb + 6); s.feli = Math.min(100, s.feli + 3); } }
  guardar();
  var fb = $('l-fb'); fb.hidden = false; fb.className = 'fb ' + (bien ? 'good' : 'nope'); fb.innerHTML = '';
  fb.appendChild(el('strong', '', bien ? '¡Correcto!' + (g ? ' +' + g + ' XP' : '') : (it.k === 'evid' ? 'Casi. La prueba está en las oraciones marcadas.' : 'Casi. La respuesta es: ' + respL(it))));
  fb.appendChild(document.createTextNode(it.e || ''));
  if (it.ev && it.ev.length) {
    it.ev.forEach(function (i) {
      var o = document.querySelector('.pasaje .or[data-i="' + i + '"]');
      if (o) { o.classList.add('ev'); o.classList.remove('bad'); if (!o.querySelector('.num')) { var n = el('span', 'num', '★'); n.setAttribute('aria-hidden', 'true'); o.insertBefore(n, o.firstChild); } }
    });
    fb.appendChild(el('div', 'evnota', 'La prueba está en el texto, en la parte marcada.'));
  } else if (it.vfn) fb.appendChild(el('div', 'evnota', 'Esta idea no aparece en el texto.'));
  if (bien) { setMouth && setMouth('open'); SFX.ok(); vibra(25); if (g) { reaccion(); } setTimeout(function () { setMouth && setMouth('smile'); }, 700); } else { SFX.no(); vibra(40); }
  var n = $('l-next'); n.hidden = false; n.textContent = lc.i === lc.L.items.length - 1 ? 'Ver resultado' : 'Siguiente';
  try { fb.scrollIntoView({ block: 'nearest', behavior: ST.cfg.mov ? 'auto' : 'smooth' }); } catch (e) {}
  n.focus({ preventScroll: true });
}
$('l-next').onclick = function () {
  callar();
  if (lc.fase === 'explica') { terminarLectura(); return; }
  if (lc.i < lc.L.items.length - 1) { lc.i++; mostrarL(); return; }
  if (lc.L.explica) { mostrarExplica(); return; }
  terminarLectura();
};
function terminarLectura() {
  var s = cur(), L = lc.L, rec = s.lect[L.id], tot = L.items.length, ex = null;
  if (lc.checks) {   /* autoevaluación de "explícalo con tus palabras": no da puntos, solo registra cómo le fue */
    var c = lc.checks.filter(function (k) { return k.checked; }).length, n = lc.checks.length;
    var h = s.hab.explicar = s.hab.explicar || { n: 0, c: 0 }; h.n += n; h.c += c; ex = [c, n];
  }
  rec.veces++; rec.best = Math.max(rec.best || 0, lc.ok); guardar();
  var filas = [['Aciertos', lc.ok + ' de ' + tot], [lc.xpHoy ? 'Puntos ganados' : 'Puntos', lc.xpHoy ? '+' + lc.xp + ' XP' : 'Hoy ya los ganaste. ¡Mañana vuelven!']];
  HAB_ORDEN.forEach(function (h) { if (lc.hab[h]) filas.push([HAB[h], lc.hab[h].c + ' de ' + lc.hab[h].n]); });
  if (ex) filas.push(['Ideas de tu explicación', ex[0] + ' de ' + ex[1]]);
  var perfecto = lc.ok === tot;
  fin({ titulo: perfecto ? '¡Lectura perfecta!' : lc.ok >= tot / 2 ? '¡Buena lectura!' : 'Vuelve a leer con calma', et0: lc.et0, festejo: perfecto, filas: filas });
}

/* ---------- Explícalo con tus palabras (paso final opcional) ----------
   El alumno escribe su explicación, la compara con una respuesta modelo y se autoevalúa con una lista de ideas clave.
   La app sugiere qué ideas detectó (por palabras clave) pero el alumno decide. Lo que escribe no se guarda ni se envía. */
function normaliza(t) { return String(t).toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, ''); }
/* Alternativa a escribir: el alumno toca las ideas que sí explican la respuesta (hay ideas falsas mezcladas). Misma revisión y mismos registros. */
function mostrarExplicaElegir() {
  var L = lc.L, E = L.explica; lc.fase = 'explica'; lc.checks = null; callar();
  $('l-voz-t').hidden = true; $('l-voz-q').hidden = true;
  $('l-pr').style.width = '100%'; $('l-cnt').textContent = 'Extra';
  $('l-fb').hidden = true; $('l-next').hidden = true; pintaPasaje('lee');
  $('l-tag').textContent = 'Explicar eligiendo ideas'; $('l-text').textContent = E.q;
  var box = $('l-opts'); box.innerHTML = '';
  var info = el('p', 'p', 'Toca las ideas que sí explican la respuesta. Ojo: hay algunas que no son ciertas. Puedes mirar el texto.'); info.style.cssText = 'margin:0 0 6px;text-align:left'; box.appendChild(info);
  var cards = mezclar(E.claves.map(function (c) { return { t: c.t, ok: true }; }).concat(E.falsas.map(function (f) { return { t: f, ok: false }; })));
  var pick = {}, lista = el('div', 'idl'); lista.setAttribute('role', 'group'); lista.setAttribute('aria-label', 'Ideas');
  cards.forEach(function (c, i) {
    var b = el('button', 'idea', c.t); b.type = 'button'; b.setAttribute('aria-pressed', 'false');
    b.onclick = function () { if (lc.checks) return; pick[i] = !pick[i]; b.setAttribute('aria-pressed', pick[i] ? 'true' : 'false'); b.classList.toggle('sel', !!pick[i]); SFX.tick(); cmp.disabled = !Object.keys(pick).some(function (k) { return pick[k]; }); };
    c.el = b; lista.appendChild(b);
  });
  box.appendChild(lista);
  var cmp = el('button', 'cta', 'Comparar con la respuesta modelo'); cmp.disabled = true; cmp.style.margin = '8px 0 0'; box.appendChild(cmp);
  var alt = el('button', 'link', 'Prefiero escribir'); alt.type = 'button'; alt.onclick = function () { var v = ST.cfg.elegir; ST.cfg.elegir = false; mostrarExplica(); ST.cfg.elegir = v; }; box.appendChild(alt);
  cmp.onclick = function () {
    lc.checks = []; cmp.hidden = true; alt.hidden = true;
    cards.forEach(function (c, i) { c.el.disabled = true; c.el.classList.remove('sel'); if (c.ok) c.el.classList.add(pick[i] ? 'ok' : 'falto'); else if (pick[i]) c.el.classList.add('bad'); });
    var res = el('div', 'fb good'); res.style.margin = '12px 0 0'; res.appendChild(el('strong', '', 'Respuesta modelo')); res.appendChild(document.createTextNode(E.modelo)); box.appendChild(res);
    var mal = cards.filter(function (c, i) { return !c.ok && pick[i]; }).length, bien = cards.filter(function (c, i) { return c.ok && pick[i]; }).length;
    box.appendChild(el('p', 'p', bien + ' de ' + E.claves.length + ' ideas correctas' + (mal ? '. Elegiste ' + mal + (mal === 1 ? ' idea que no es cierta.' : ' ideas que no son ciertas.') : '.'))); box.lastChild.style.cssText = 'margin:8px 0 0;text-align:left;font-weight:700';
    E.claves.forEach(function (cl, i) { var k = cards.filter(function (c) { return c.ok && c.t === cl.t; })[0]; lc.checks.push({ checked: !!pick[cards.indexOf(k)] }); });
    var fin_ = el('button', 'cta', 'Ver resultado'); fin_.style.margin = '10px 0 0'; fin_.onclick = function () { terminarLectura(); }; box.appendChild(fin_); fin_.focus();
  };
  enfocar('l-text');
}
function mostrarExplica() {
  var L = lc.L, E = L.explica; lc.fase = 'explica'; lc.checks = null; callar();
  if (E.falsas && E.falsas.length && ST.cfg.elegir) return mostrarExplicaElegir();
  $('l-voz-t').hidden = true; $('l-voz-q').hidden = true;   /* aquí no se escucha nada: el alumno lee y escribe con sus propias palabras */
  $('l-pr').style.width = '100%'; $('l-cnt').textContent = 'Extra';
  $('l-fb').hidden = true; $('l-next').hidden = true; pintaPasaje('lee');
  $('l-tag').textContent = 'Explicar con tus palabras'; $('l-text').textContent = E.q;
  var box = $('l-opts'); box.innerHTML = '';
  var lab = el('label', 'lbl', 'Escribe tu explicación con tus propias palabras (mínimo 2 oraciones). Puedes mirar el texto.'); lab.htmlFor = 'l-ta'; lab.style.margin = '0 0 4px';
  var ta = el('textarea', 'inp'); ta.id = 'l-ta'; ta.rows = 5; ta.maxLength = 600; ta.style.width = '100%'; ta.style.margin = '0';
  ta.setAttribute('autocomplete', 'off'); ta.setAttribute('spellcheck', 'true');
  var falta = el('p', 'hint', ''); falta.style.cssText = 'margin:4px 0 0;min-height:0;text-align:left'; falta.setAttribute('aria-live', 'polite');
  var cmp = el('button', 'cta', 'Comparar con la respuesta modelo'); cmp.disabled = true; cmp.style.margin = '8px 0 0';
  box.appendChild(lab); box.appendChild(ta); box.appendChild(falta); box.appendChild(cmp);
  if (E.falsas && E.falsas.length) { var alt = el('button', 'link', 'Prefiero elegir ideas en vez de escribir'); alt.type = 'button'; alt.onclick = function () { mostrarExplicaElegir(); }; box.appendChild(alt); }
  var MIN = 10;   /* palabras mínimas para poder comparar */
  ta.oninput = function () {
    var n = ta.value.trim() ? ta.value.trim().split(/\s+/).length : 0;
    cmp.disabled = n < MIN; falta.textContent = n < MIN ? 'Escribe un poco más (' + n + ' de ' + MIN + ' palabras).' : '¡Ya puedes comparar con la respuesta modelo!';
  };
  cmp.onclick = function () {
    var txt = normaliza(ta.value); ta.readOnly = true; cmp.hidden = true; falta.hidden = true; lc.checks = [];
    var res = el('div', 'fb good'); res.style.margin = '12px 0 0'; res.appendChild(el('strong', '', 'Respuesta modelo')); res.appendChild(document.createTextNode(E.modelo)); box.appendChild(res);
    box.appendChild(el('div', 'qtag', 'Tu revisión')); box.lastChild.style.margin = '12px 0 4px';
    box.appendChild(el('p', 'p', 'Marca las ideas que sí incluiste en tu explicación. Ya marcamos las que parece que mencionaste; corrígelo tú si hace falta.')); box.lastChild.style.cssText = 'margin:0 0 6px;text-align:left';
    E.claves.forEach(function (cl, i) {
      var hallas = cl.k.filter(function (w) { return txt.indexOf(normaliza(w)) > -1; }).length;
      var row = el('label', 'chk'), cb = el('input'); cb.type = 'checkbox'; cb.checked = hallas >= (cl.min || 1); cb.id = 'l-ck' + i;
      row.appendChild(cb); row.appendChild(el('span', '', cl.t)); box.appendChild(row); lc.checks.push(cb);
    });
    var fin_ = el('button', 'cta', 'Ver resultado'); fin_.style.margin = '10px 0 0'; fin_.onclick = function () { terminarLectura(); }; box.appendChild(fin_); fin_.focus();
  };
  enfocar('l-text');
}
$('l-exit').onclick = function () { callar(); go('lecturas'); };
