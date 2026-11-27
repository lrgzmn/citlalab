/* APP: pantallas y juegos. No necesitas tocar este archivo para agregar fichas. */
function $(id) { return document.getElementById(id); }
function el(tag, cls, txt) { var e = document.createElement(tag); if (cls) e.className = cls; if (txt != null) e.textContent = txt; return e; }
function esc(t) { return String(t).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); }
function pick(a) { return a[Math.floor(Math.random() * a.length)]; }
var tab = 'color', quiz = null, bloqueo = false;

/* ============ ESCENA: cuarto + mascota ============ */
function colorDe(s) { return COLORES.filter(function (c) { return c.id === s.color; })[0] || COLORES[0]; }
var petKey = '';
function renderEscena() {
  var s = cur(), w = cuartoCol(paredDe(s.pared));
  $('stage').style.background = 'linear-gradient(180deg,' + w.a + ',' + w.b + ')';
  $('roomG').innerHTML = roomMk(s);
}
function renderPet() {
  var s = cur(), m = MAT[ST.activa], col = colorDe(s), svg = $('pet'), vis = s.vis;
  if ($('nm') && document.activeElement !== $('nm')) $('nm').value = s.name;   /* el nombre siempre es el de la mascota que se está viendo */
  svg.style.setProperty('--bc', col.c === 'galaxia' ? '#8b4fd8' : col.c);
  renderEscena();
  if (vis === 0) {
    var p = Math.min(1, s.xp / XP_ETAPA[1]), k = 'egg|' + ST.activa + '|' + origenNivel(p);
    if (k !== petKey) { svg.innerHTML = origenMk(m.creature, p); petKey = k; }
    $('etapaB').textContent = 'Etapa 0';
    svg.setAttribute('aria-label', m.orig.n + ' de ' + s.name + '. Tócalo para que reaccione');
    if (dormido) aplicaSueno();
    return;
  }
  $('etapaB').textContent = 'Etapa ' + vis;
  var key = 'pet|' + ST.activa + '|' + vis;
  if (key !== petKey) { svg.innerHTML = buildPet(m.creature, vis); petKey = key; }
  svg.setAttribute('aria-label', s.name + ', etapa ' + ETAPAS[vis] + '. Tócalo para que reaccione');
  var body = $('body');
  if (col.c === 'galaxia') body.setAttribute('fill', 'url(#gGalaxy)');
  else { body.setAttribute('fill', 'url(#gBody)'); $('gb1').setAttribute('stop-color', col.l); $('gb2').setAttribute('stop-color', col.c); }
  $('gEyes').innerHTML = ojosMarkup(s.ojos);
  $('gLash').innerHTML = s.gender === 'f' ? LASH : '';
  $('gBrow').innerHTML = s.gender === 'm' ? BROW : '';
  setMouth('smile');
  function vv(id, on) { var e = $(id); if (e) e.setAttribute('visibility', on ? 'visible' : 'hidden'); }
  var r = s.ropa, cubre = r.indexOf('gorro') > -1 || r.indexOf('corona') > -1;
  vv('gGafas', r.indexOf('gafas') > -1); vv('gMono', r.indexOf('mono') > -1); vv('gGorro', r.indexOf('gorro') > -1);
  vv('gBata', r.indexOf('bata') > -1); vv('gCorona', r.indexOf('corona') > -1); vv('gAureola', r.indexOf('aureola') > -1);
  vv('gMonito', r.indexOf('monito') > -1 && !cubre);
  vv('gAud', r.indexOf('audifonos') > -1 && !cubre);
  var sc = vis === 1 ? .9 : vis === 3 ? 1.03 : 1;
  $('gScale').setAttribute('transform', 'translate(100,176) scale(' + sc + ') translate(-100,-176)');
  vv('gSpark', vis === 3);
  if (dormido) aplicaSueno();
}
function setMouth(k) {
  var g = $('gMouth'); if (!g) return;
  g.innerHTML = k === 'open' ? '<ellipse cx="100" cy="124" rx="9" ry="10" fill="#7a2a3a"/><ellipse cx="100" cy="129" rx="5" ry="3.5" fill="#ff8fa3"/>'
    : k === 'wow' ? '<ellipse cx="100" cy="124" rx="6" ry="7" fill="#7a2a3a"/>'
    : k === 'dorm' ? '<path d="M93 122 Q100 126 107 122" fill="none" stroke="#2a2f45" stroke-width="3.5" stroke-linecap="round"/>'
    : '<path d="M89 120 Q100 132 111 120" fill="none" stroke="#2a2f45" stroke-width="4" stroke-linecap="round"/>';
}
function anim(cls) {
  var g = $('gReact'); if (!g) return;
  ['jump', 'spin', 'squish', 'pop'].forEach(function (c) { g.classList.remove(c); });
  void g.getBoundingClientRect(); g.classList.add(cls);
}
function reaccion() { anim('jump'); }
function flotar(txt, color) {
  var d = el('div', 'fl', txt); if (color) d.style.color = color;
  $('stage').appendChild(d); setTimeout(function () { d.remove(); }, 1200);
}
function corazones() {
  var st = $('stage');
  for (var i = 0; i < 3; i++) (function (i) {
    setTimeout(function () {
      var d = el('div', 'heart', '♥'); d.style.left = (38 + Math.random() * 24) + '%'; d.style.top = (36 + Math.random() * 12) + '%';
      st.appendChild(d); setTimeout(function () { d.remove(); }, 1200);
    }, i * 140);
  })(i);
}
function say(t) { if (typeof dormido !== 'undefined' && dormido && t !== 'Zzzz') return; $('say').textContent = t; }
function destello() { var d = el('div', 'flash'); $('stage').appendChild(d); setTimeout(function () { d.remove(); }, 1000); }

/* ---- Ceremonias: transformarse y evolucionar ---- */
function eclosion() {
  if (bloqueo) return;   /* ya hay una ceremonia en marcha */
  var s = cur(); bloqueo = true;
  petKey = ''; $('pet').innerHTML = origenMk(MAT[ST.activa].creature, 1); petKey = 'egg|ceremonia';
  function golpe() { var e = $('egg'); if (e) { e.classList.remove('wob'); void e.getBoundingClientRect(); e.classList.add('wob'); } SFX.pop(); vibra(15); }
  setTimeout(golpe, 150); setTimeout(golpe, 700); setTimeout(golpe, 1250);
  setTimeout(function () {
    s.vis = etapa(s); guardar(); petKey = ''; renderPet(); renderTop();
    destello(); confeti(140); SFX.up(); vibra([40, 50, 40, 50, 90]); anim('pop');
    flotar('¡Se transformó!', '#d6457f'); say(s.name + ': ¡Hola! Gracias por repasar conmigo. Ya me transformé.');
    bloqueo = false;
  }, 1900);
}
function evolucionar() {
  var s = cur(); bloqueo = true; var nueva = etapa(s);
  destello(); SFX.up(); vibra([40, 50, 40, 50, 90]);
  setTimeout(function () {
    s.vis = nueva; guardar(); petKey = ''; renderPet(); renderTop(); anim('pop'); confeti(170);
    flotar('¡Evolucionó!', '#d6457f'); say(s.name + ': ¡Mira cómo he crecido! Ahora soy ' + ETAPAS[nueva] + '.');
    bloqueo = false;
  }, 450);
}
/* Si la persona cerró la app justo antes de la ceremonia, se celebra al volver. */
function chequearEvolucion() {
  var s = cur(); if (!s || bloqueo) return;
  if (etapa(s) > s.vis) { if (s.vis === 0) eclosion(); else evolucionar(); }
}

/* ============ MASCOTA: TOQUES ============ */
var toques = [], FRASES = ['¡Ja, cosquillas!', '¿Repasamos un poquito?', '¡Hoy aprendí algo nuevo!', '¡Qué bien lo haces!', 'Me da gusto que vengas.', '¡Otra vez!'];
function tocarMascota() { if (typeof dormido !== 'undefined' && dormido) return;
  var s = cur(); if (bloqueo) return;
  if (s.vis === 0) {
    var e = $('egg'); if (e) { e.classList.remove('wob'); void e.getBoundingClientRect(); e.classList.add('wob'); }
    SFX.voz(MAT[ST.activa].creature); vibra(12);
    var falta = Math.max(0, XP_ETAPA[1] - s.xp);
    var o = MAT[ST.activa].orig; say(s.name + ': ' + (origenNivel(s.xp / XP_ETAPA[1]) >= 2 ? o.mid.replace('{f}', falta) : o.ini));
    return;
  }
  var now = Date.now(); toques = toques.filter(function (t) { return now - t < 2000; }); toques.push(now);
  if (toques.length >= 5) {
    toques = []; anim('spin'); setMouth('wow'); say(s.name + ': ¡Uy, me mareo! Jaja.'); SFX.up(); vibra([20, 30, 20]);
    setTimeout(function () { renderPet(); }, 950); return;
  }
  anim(pick(['jump', 'squish', 'jump']));
  var eyes = $('gEyes'), old = s.ojos;
  if (old === 'redondos' || old === 'dormilones') { eyes.innerHTML = ojosMarkup('felices'); setTimeout(function () { if ($('gEyes')) $('gEyes').innerHTML = ojosMarkup(cur().ojos); }, 800); }
  corazones(); SFX.voz(MAT[ST.activa].creature); vibra(12); say(s.name + ': ' + pick(FRASES));
}
function iniciaToques() {
  var pet = $('pet');
  pet.addEventListener('click', tocarMascota);
  pet.addEventListener('keydown', function (e) { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); tocarMascota(); } });
  $('stage').addEventListener('pointermove', function (e) {
    var g = $('gEyes'); if (!g || cur().vis === 0) return;
    var r = pet.getBoundingClientRect(), cx = r.left + r.width / 2, cy = r.top + r.height * .55;
    var dx = Math.max(-1, Math.min(1, (e.clientX - cx) / (r.width / 2))), dy = Math.max(-1, Math.min(1, (e.clientY - cy) / (r.height / 2)));
    g.setAttribute('transform', 'translate(' + (dx * 3).toFixed(1) + ',' + (dy * 2.5).toFixed(1) + ')');
  });
  $('stage').addEventListener('pointerleave', function () { var g = $('gEyes'); if (g) g.removeAttribute('transform'); });
}

/* ============ NAVEGACIÓN ============ */
var VISTAS = {
  ob0: {}, home: { rt: 1, pills: 1, stage: 'l', name: 1, lvl: 1, say: 1, nav: 1 }, room: { rt: 1, pills: 1, stage: 'm', nav: 1 },
  custom: { rt: 1, pills: 1, stage: 'm', name: 1, nav: 1 }, prog: { rt: 1, pills: 1, stage: 's', nav: 1 }, set: {},
  quiz: { rt: 1, stage: 's' }, res: { rt: 1, stage: 'm' }, games: { rt: 1 }, cards: { rt: 1, stage: 's' }, atom: { rt: 1 }, boss: { rt: 1, stage: 's' },
  lecturas: { rt: 1 }, fichas: { rt: 1 }, lect: { rt: 1 }, lluvia: { rt: 1 }, vasos: { rt: 1 }, sleep: { rt: 1, stage: 'l', say: 1 }
};
var vistaActual = 'home';
function go(v) {
  var c = VISTAS[v], ph = $('phone');
  if (v !== 'lluvia') pararLluvia(); if (v !== 'vasos' && vs) vs.token++; if (v !== 'sleep') finDormir(); callar();
  vistaActual = v;
  ['rt', 'pills', 'stage', 'name', 'lvl', 'say', 'nav'].forEach(function (id) { $(id).hidden = !c[id]; });
  ph.setAttribute('data-size', c.stage || 'l'); ph.setAttribute('data-view', v);
  document.querySelectorAll('.view').forEach(function (x) { x.classList.toggle('on', x.id === 'v-' + v); });
  document.querySelectorAll('.nav button').forEach(function (b) { b.setAttribute('aria-current', b.dataset.v === v ? 'page' : 'false'); });
  if (tieneMascotas()) { renderTop(); }
  if (v === 'home') { actualizarTiempo(cur()); renderHome(); }
  if (v === 'room') renderRoom(); if (v === 'custom') renderCustom(); if (v === 'prog') renderProg(); if (v === 'games') renderGames(); if (v === 'lecturas') renderLecturas(); if (v === 'fichas') renderFichas(); if (v === 'set') renderSet();
  window.scrollTo(0, 0);
  histGo(v);
}
/* Botón "atrás" del celular: desde cualquier pantalla interna regresa al inicio de la app (no la cierra);
   desde el inicio sí sale, como siempre. Solo se agrega una entrada al historial cuando se sale del inicio. */
var navPop = false;
function esRaiz(v) { return v === 'home' || v === 'ob0'; }
function histGo(v) {
  if (navPop) return;
  try {
    var st = history.state;
    if (st && st.s) history.replaceState({ s: 1 }, '');
    else if (!esRaiz(v)) history.pushState({ s: 1 }, '');
  } catch (e) {}
}
window.addEventListener('popstate', function (e) {
  try {
    if (e.state && e.state.s) return;
    if (esRaiz(vistaActual)) { history.back(); return; }
    navPop = true; go('home'); navPop = false;
  } catch (x) { navPop = false; }
});
function aplicarTema() {
  var m = MAT[ST.activa], ph = $('phone');
  if (temaNoche()) {   /* de noche, el color de la materia se aclara para el texto y se oscurece para los fondos */
    var base = '#1e2447';
    ph.style.setProperty('--brand', m.brand); ph.style.setProperty('--brand-d', mezclaHex(m.brand, '#ffffff', .55));
    ph.style.setProperty('--brand-soft', mezclaHex(m.brand, base, .78)); ph.style.setProperty('--brand-line', mezclaHex(m.brand, base, .5));
  } else {
    ph.style.setProperty('--brand', m.brand); ph.style.setProperty('--brand-d', m.dk); ph.style.setProperty('--brand-soft', m.soft); ph.style.setProperty('--brand-line', m.line);
  }
}
/* Tema: automático (sigue al celular), neutro (crema), claro o noche. Con alto contraste siempre se usa fondo blanco. */
var mqNoche = window.matchMedia ? window.matchMedia('(prefers-color-scheme: dark)') : null;
function temaResuelto() {
  if (ST && ST.cfg && ST.cfg.contraste) return 'claro';
  var t = (ST && ST.cfg && ST.cfg.tema) || 'auto';
  if (t === 'auto') return mqNoche && mqNoche.matches ? 'noche' : 'neutro';
  return t;
}
function hintTema() {
  var h = $('th-hint'); if (!h || !ST) return;
  h.textContent = ST.cfg.contraste ? 'Con alto contraste siempre se ve con fondo blanco.' : 'Automático sigue el modo de tu celular (claro o noche). Neutro es un fondo crema, más suave para la vista.';
}
var TEMA_COLOR = { neutro: '#faf8f3', claro: '#ffffff', noche: '#141831' };
function aplicarModo() {
  var t = temaResuelto(), h = document.documentElement, antes = h.getAttribute('data-tema');
  h.setAttribute('data-tema', t);
  var mt = document.querySelector('meta[name=theme-color]'); if (mt) mt.setAttribute('content', TEMA_COLOR[t]);
  try { localStorage.setItem('repaso.tema', ST.cfg.tema || 'auto'); } catch (x) {}
  if (antes !== t && ST && ST.activa) { aplicarTema(); petKey = ''; if (typeof renderEscena === 'function' && cur()) { renderEscena(); } }
}
if (mqNoche) { var cambioMq = function () { if (ST && ST.cfg && ST.cfg.tema === 'auto') { aplicarModo(); if (vistaActual === 'room' || vistaActual === 'home') todo(); } }; if (mqNoche.addEventListener) mqNoche.addEventListener('change', cambioMq); else if (mqNoche.addListener) mqNoche.addListener(cambioMq); }
function renderTop() {
  var s = cur(); $('c-racha').textContent = 'Racha ' + rachaVisible(); $('c-dom').textContent = dominados(s, ST.activa) + ' temas';
  var pills = $('pills'); pills.innerHTML = '';
  ORDEN.forEach(function (id) {
    var b = el('button', 'pill'); b.style.setProperty('--c', MAT[id].brand);
    b.setAttribute('aria-pressed', id === ST.activa ? 'true' : 'false');
    b.innerHTML = '<i></i>' + MAT[id].n;
    b.onclick = function () { if (id === ST.activa) return; if (dormido) finDormir(); ST.activa = id; tab = 'color'; petKey = ''; guardar(); todo(); chequearEvolucion(); };
    pills.appendChild(b);
  });
}
function todo() {
  aplicarTema(); renderPet();
  var v = vistaActual; go(['quiz', 'res', 'cards', 'atom', 'boss', 'games', 'lect', 'lecturas', 'ob0'].indexOf(v) > -1 ? 'home' : v);
}

/* ============ INICIO ============ */
function card2(cls, ico, t, sub, tag, fn, disabled) {
  var b = el('button', 'cc ' + cls); if (disabled) b.disabled = true;
  b.innerHTML = '<span class="ico">' + ico + '</span><span><b>' + t + '</b><small>' + sub + '</small></span>' + (tag ? '<span class="tag2">' + tag + '</span>' : '');
  if (fn) b.onclick = fn; return b;
}
var ICO_RUTA = '<svg viewBox="0 0 40 40" aria-hidden="true"><circle cx="10" cy="30" r="4.5" fill="var(--brand)"/><circle cx="30" cy="10" r="4.5" fill="var(--brand)"/><path d="M10 30 C10 18 22 24 22 18 C22 14 26 14 30 10" fill="none" stroke="var(--brand)" stroke-width="3" stroke-dasharray="2 5" stroke-linecap="round"/></svg>';
var ICO_FICHAS = '<svg viewBox="0 0 40 40" aria-hidden="true"><rect x="8" y="9" width="24" height="27" rx="4" fill="#fff" stroke="var(--brand)" stroke-width="3"/><path d="M14 18h12M14 24h12M14 30h7" stroke="var(--brand)" stroke-width="3" stroke-linecap="round"/><path d="M13 5h14" stroke="var(--brand)" stroke-width="3" stroke-linecap="round"/></svg>';
var ICO_CAL = '<svg viewBox="0 0 40 40" aria-hidden="true"><rect x="6" y="8" width="28" height="26" rx="5" fill="#fff" stroke="var(--brand)" stroke-width="3"/><path d="M6 16 H34" stroke="var(--brand)" stroke-width="3"/><path d="M13 5 V11 M27 5 V11" stroke="var(--brand)" stroke-width="3" stroke-linecap="round"/><circle cx="20" cy="26" r="4" fill="var(--brand)"/></svg>';
function jefeDe(mat) {
  var s = cur(), fs = fichasDe(mat).filter(function (f) { return f.ficha.jefe; });
  if (!fs.length) return null;
  function req(f) { return reqSello(f); }
  function puede(f) { return dominados(s, mat, f.ficha.id) >= req(f); }
  var f = fs.filter(function (f) { return puede(f) && !s.jefes[f.ficha.id]; })[0] || fs.filter(puede)[0] || fs[0];
  return { f: f, puede: puede(f), vencido: !!s.jefes[f.ficha.id], req: req(f), llevas: dominados(s, mat, f.ficha.id) };
}
function renderCards2() {
  var s = cur(), c = $('cards2'), mat = ST.activa, hoy = s.cofre.dia === fechaHoy(); c.innerHTML = '';
  c.appendChild(card2(hoy ? '' : 'ready', chestSVG(false), 'Cofre diario', hoy ? 'Ya abriste el de hoy. Mañana habrá otro.' : 'Tu premio de hoy está listo.', hoy ? '' : 'Abrir', abrirCofre, hoy));
  var rt = rutaDe(s, mat);
  if (preguntasDe(mat).length) {
    if (rt.total) {
      var nv = rt.nuevas.length, rc = rt.venc.length;
      c.insertBefore(card2('ready', ICO_RUTA, 'Ruta de hoy', rt.total + (rt.total === 1 ? ' pregunta' : ' preguntas') + ': ' + (rc ? rc + ' para recordar' : '') + (rc && nv ? ' y ' : '') + (nv ? nv + (nv === 1 ? ' nueva' : ' nuevas') : '') + '.', 'Empezar', iniciarRuta), c.firstChild);
    } else c.insertBefore(card2('', ICO_RUTA, 'Ruta de hoy', rt.hecha ? '¡Completada! ' + (rt.prox ? 'Lo siguiente toca ' + textoDias(rt.prox) + '.' : 'Vuelve mañana.') : (rt.prox ? 'Hoy no toca repasar. Lo siguiente toca ' + textoDias(rt.prox) + '.' : 'Hoy no hay nada pendiente.'), rt.hecha ? 'Lista' : '', null, true), c.firstChild);
  }
  if (fichasDe(mat).length && preguntasDe(mat).length)
    c.insertBefore(card2('', ICO_FICHAS, 'Repasar fichas anteriores', 'Elige una ficha o un tema que quieras repasar.', 'Elegir', function () { go('fichas'); }), c.children[rt.total || rt.hecha || rt.prox ? 1 : 0] || null);
  var sem = REPASO.semanas[mat], semN = sem ? temaNombre(sem) : '';
  if (semN && preguntasDe(mat).some(function (q) { return q.tema === sem; }))
    c.appendChild(card2('', ICO_CAL, 'Tema de la semana', esc(semN) + ' · puntos dobles', 'x2', function () { iniciarQuiz({ tema: sem }); }));
  var nl = lecturasDe(mat).length;
  if (nl) { var hechas = lecturasDe(mat).filter(function (L) { return s.lect[L.id] && s.lect[L.id].d === fechaHoy(); }).length;
    c.appendChild(card2('', ICO_LIBRO, 'Lectura científica', hechas === nl ? 'Hoy ya leíste todo. Puedes seguir practicando.' : 'Lee, busca pruebas en el texto y responde.', hechas === nl ? '' : 'Nuevo', function () { go('lecturas'); })); }
  var j = jefeDe(mat);
  if (j) {
    var tit = 'Reto final de la ' + esc(j.f.ficha.titulo.split('·')[0].trim());
    c.appendChild(card2(j.puede ? 'ready' : 'lockd', jefeMini(), tit,
      j.puede ? (j.vencido ? 'Ya lo superaste. ¿Otra vez?' : esc(j.f.ficha.jefe) + ' te espera.') : 'Domina ' + j.req + ' temas de esa ficha para desbloquear el reto final (llevas ' + j.llevas + ').',
      j.puede ? (j.vencido ? 'Revancha' : 'Desafiar') : 'Bloqueado',
      j.puede ? function () { iniciarJefe(j.f.ficha.id); } : function () { say('Domina ' + j.req + ' temas de esa ficha para que aparezca el reto final.'); SFX.tick(); }));
  }
  if (ST.dias.length >= 3 && (!ST.respaldo || difDias(ST.respaldo, fechaHoy()) >= 14))
    c.appendChild(card2('', ICO_CAL.replace(/var\(--brand\)/g, '#9aa5bb'), 'Guarda tu avance', ST.respaldo ? 'Hace ' + difDias(ST.respaldo, fechaHoy()) + ' días que no lo respaldas.' : 'Descarga un archivo por si se borra el navegador.', 'Respaldar', function () { go('set'); }));
  if (!fichasDe(mat).length)
    c.appendChild(card2('lockd', ICO_CAL.replace(/var\(--brand\)/g, '#9aa5bb'), 'Fichas de ' + MAT[mat].n, 'Tu docente las agregará muy pronto.', '', null, true));
}
function barra(host, lbl, pct, color, txt) {
  var d = el('div', 'bar'); d.innerHTML = '<span>' + lbl + '</span><span class="t"><i style="background:' + color + ';width:' + Math.max(0, Math.min(100, pct)) + '%"></i></span><span>' + txt + '</span>'; host.appendChild(d);
}
function renderHome() {
  var s = cur(), m = MAT[ST.activa], vis = s.vis, mat = ST.activa, hay = preguntasDe(mat).length > 0;
  $('nm').value = s.name;
  $('lvl').textContent = (vis === 0 ? m.orig.n + ' · Etapa 0' : 'Etapa ' + vis + ' · ' + ETAPAS[vis]) + '\n' + tituloDe(s).n + ' · ' + sellosDe(s) + (sellosDe(s) === 1 ? ' sello' : ' sellos');
  var b = $('bars'); b.innerHTML = '';
  if (vis === 0) barra(b, 'Para transformarse', s.xp / XP_ETAPA[1] * 100, 'var(--brand)', Math.min(s.xp, XP_ETAPA[1]) + '/' + XP_ETAPA[1]);
  else {
    barra(b, 'Hambre', s.hamb, '#f59e0b', Math.round(s.hamb) + '%'); barra(b, 'Felicidad', s.feli, 'var(--pink)', Math.round(s.feli) + '%');
    if (vis >= 3) barra(b, 'Nivel', 100, 'var(--brand)', 'Máximo');
    else barra(b, 'Nivel', (s.xp - XP_ETAPA[vis]) / (XP_ETAPA[vis + 1] - XP_ETAPA[vis]) * 100, 'var(--brand)', s.xp + '/' + XP_ETAPA[vis + 1]);
  }
  var msg, sem = REPASO.semanas[mat], semN = sem ? temaNombre(sem) : '';
  if (!hay) msg = 'Tu docente agregará las fichas de ' + m.n + ' muy pronto. Mientras tanto, ¡arregla mi cuarto!';
  else if (vis === 0) msg = origenNivel(s.xp / XP_ETAPA[1]) >= 2 ? m.orig.mid.replace('{f}', Math.max(0, XP_ETAPA[1] - s.xp)) : m.orig.ini;
  else if (semN) msg = '¿Repasamos "' + semN + '"? Esta semana vale doble.';
  else if (s.hamb < 55) msg = 'Tengo ganas de repasar contigo.';
  else msg = pick(['Me gusta cuando vienes a repasar.', '¿Qué repasamos hoy?', 'Cada repaso me hace crecer.']);
  say(s.name + ': ' + msg);
  $('a-feed').querySelector('.lb').textContent = vis === 0 ? 'Repasar para crecer' : 'Alimentar';
  var rr = hay ? rutaDe(s, mat) : null;
  $('a-sub').textContent = !hay ? 'Próximamente' : rr.total ? 'Ruta de hoy · ' + rr.total + (rr.total === 1 ? ' pregunta' : ' preguntas') : 'Hoy ya repasaste · 5 extra';
  var hayJuego = juegosDe(mat).length > 0;
  $('a-feed').disabled = !hay; $('a-play').disabled = !hayJuego;
  $('a-play-sub').textContent = hayJuego ? 'Tarjetas y más' : 'Próximamente';
  $('guardaaviso').hidden = guardadoOK;
  renderCards2();
}

/* ============ PREGUNTAS (sirven para repaso y jefe) ============ */
function esSemana(q) { return REPASO.semanas[q.materia] === q.tema; }
/* Lleva el foco al enunciado de la nueva pregunta para quien usa teclado o lector de pantalla. */
function enfocar(id) { var e = $(id); if (e) { e.tabIndex = -1; try { e.focus({ preventScroll: true }); } catch (x) {} } }
function correcta(q) { return q.ok != null ? q.o[q.ok] : q.o[0]; }
function respuestaTexto(q) { return q.k === 'vf' ? (q.v ? 'Verdadero' : 'Falso') : q.k === 'orden' ? q.items.join(' → ') : correcta(q); }
/* Pregunta "¿qué tan seguro estás?" ANTES de mostrar si la respuesta fue correcta. Es lo que permite distinguir saber de adivinar. */
function pedirSeguridad(host, fn) {
  var d = el('div', 'conf'); d.setAttribute('role', 'group'); d.setAttribute('aria-label', '¿Cuánta seguridad tienes en tu respuesta?');
  var t = el('div', 'conf-t', '¿Cuánta seguridad tienes en tu respuesta?'); t.id = 'conf-t'; d.appendChild(t);
  var r = el('div', 'conf-b'); d.appendChild(r);
  [['s', 'Lo sé'], ['d', 'Dudo'], ['a', 'Adiviné']].forEach(function (p) {
    var b = el('button', 'conf-o c-' + p[0], p[1]); b.onclick = function () { d.remove(); fn(p[0]); }; r.appendChild(b);
  });
  host.appendChild(d); try { r.firstChild.focus({ preventScroll: true }); d.scrollIntoView({ block: 'nearest' }); } catch (e) {}
}
/* Apoyos bajo la pregunta: dibujo del tema (si hay) y botón para escucharla. Nada de esto cambia cómo se responde. */
function ayudas(q, ids, box) {
  var par = box.parentNode; par.querySelectorAll('.qextra').forEach(function (x) { x.remove(); });
  var d = el('div', 'qextra'), img = ST.cfg.dib !== false && q.ic ? iconoMk(q.ic) : '';
  if (img) { var w = el('div', 'qimg'); w.innerHTML = img; d.appendChild(w); }
  if (TTS) {
    var b = el('button', 'esc-btn', 'Escuchar la pregunta'); b.type = 'button'; b.hidden = !hayVozEs();
    b.onclick = function () { hablar(textosPregunta(ids, box)); }; d.appendChild(b);
    if (ST.cfg.voz && hayVozEs()) setTimeout(function () { if (vistaActual && box.isConnected) hablar(textosPregunta(ids, box)); }, 400);
  }
  if (d.childNodes.length) par.insertBefore(d, box);
}
function textosPregunta(ids, box) {
  var r = [$(ids.text).textContent], ops = box.querySelectorAll('.opt');
  if (ops.length === 2 && ops[0].textContent === 'Verdadero') r.push('¿Verdadero o falso?');
  else if (ops.length) { r.push('Las opciones son:'); ops.forEach(function (o, i) { r.push('Opción ' + (i + 1) + ': ' + o.textContent); }); }
  else { var ch = box.querySelectorAll('.chip2'); if (ch.length) { r.push('Los elementos son:'); ch.forEach(function (c) { r.push(c.textContent.replace(/^\d+/, '')); }); } }
  return r;
}
function pintarPregunta(q, ids, cb, op) {
  $(ids.tag).textContent = temaNombre(q.tema) + (esSemana(q) ? ' · Tema de la semana x2' : '');
  $(ids.text).textContent = q.q.replace('{m}', cur().name);
  var box = $(ids.opts); box.innerHTML = ''; var hecho = false;
  if (ids.text !== 'l-text') ayudas(q, ids, box);
  function listo(bien, elegido, revela) {
    if (hecho) return; hecho = true;
    if (op && op.conf && ST.cfg.conf) pedirSeguridad(box, function (c) { if (revela) revela(); cb(bien, elegido, c); });
    else { if (revela) revela(); cb(bien, elegido); }
  }
  if (q.k === 'opcion' || q.k === 'vf') {
    var ops = q.k === 'vf' ? [['Verdadero', true], ['Falso', false]] : (q.fijo ? q.o : mezclar(q.o)).map(function (t) { return [t, t === correcta(q)]; });
    ops.forEach(function (o) {
      var b = el('button', 'opt', o[0]); b.dataset.c = o[1] ? '1' : '';
      b.onclick = function () {
        if (hecho) return; var bien = q.k === 'vf' ? (o[1] === q.v) : o[1];
        box.querySelectorAll('.opt').forEach(function (x) { x.disabled = true; }); b.classList.add('pick');
        listo(bien, o[0], function () {
          b.classList.remove('pick');
          if (q.k === 'vf') { if (!bien) b.classList.add('bad'); box.querySelectorAll('.opt').forEach(function (x) { if ((x.textContent === 'Verdadero') === q.v) x.classList.add('ok'); }); }
          else { box.querySelectorAll('.opt').forEach(function (x) { if (x.textContent === correcta(q)) x.classList.add('ok'); }); if (!bien) b.classList.add('bad'); }
        });
      };
      box.appendChild(b);
    });
  } else if (q.k === 'orden') {
    var items = mezclar(q.items); if (items.join('|') === q.items.join('|') && items.length > 1) items.reverse();
    var elegidos = [];
    var hint = el('div', 'ordhint', 'Toca los elementos en el orden correcto. Para quitar uno, tócalo otra vez.'); box.appendChild(hint);
    var chips = el('div', 'chips2'); box.appendChild(chips);
    var chk = el('button', 'cta', 'Comprobar'); chk.disabled = true; chk.style.margin = '6px 0 0'; box.appendChild(chk);
    function pinta() {
      chips.innerHTML = '';
      items.forEach(function (t) {
        var n = elegidos.indexOf(t), b = el('button', 'chip2' + (n > -1 ? ' sel' : ''));
        b.innerHTML = (n > -1 ? '<em>' + (n + 1) + '</em>' : '') + esc(t);
        b.onclick = function () { if (hecho) return; if (n > -1) elegidos.splice(n, 1); else elegidos.push(t); SFX.tick(); pinta(); };
        chips.appendChild(b);
      });
      chk.disabled = elegidos.length !== items.length;
    }
    chk.onclick = function () {
      if (hecho) return; var bien = elegidos.join('|') === q.items.join('|');
      function pintaFin(marcar) {   /* se muestran en el orden que eligió la persona; al revelar, se marca cuáles quedaron bien */
        chips.innerHTML = '';
        elegidos.forEach(function (t, pos) { var b = el('button', 'chip2' + (marcar ? ' ' + (q.items[pos] === t ? 'ok' : 'bad') : ' sel')); b.disabled = true; b.innerHTML = '<em>' + (pos + 1) + '</em>' + esc(t); chips.appendChild(b); });
      }
      pintaFin(false); chk.hidden = true; hint.hidden = true;
      listo(bien, undefined, function () { pintaFin(true); });
    };
    pinta();
  }
}
/* Lupa: abre una búsqueda en internet con la afirmación o la respuesta, para que cada estudiante verifique el dato por su cuenta. */
function urlBusqueda(q) {
  var t = q.q || '';
  if (q.m) { var m = /dice: "(.*)"\. /.exec(t); t = m ? m[1] : (q.e || t); }
  else if (q.k === 'opcion') t = t + ' ' + correcta(q);
  else if (q.k === 'orden' && q.items) t = t + ' ' + q.items[0];
  t = t.replace(/\s+/g, ' ').trim().slice(0, 180);
  return 'https://www.google.com/search?q=' + encodeURIComponent(t);
}
function feedback(fb, q, bien, extra, elegido) {
  fb.hidden = false; fb.className = 'fb ' + (bien ? 'good' : 'nope'); fb.innerHTML = '';
  fb.appendChild(el('strong', '', bien ? '¡Correcto!' : 'Casi. La respuesta es: ' + respuestaTexto(q)));
  if (!bien && elegido && q.d && q.d[elegido]) { var pq = el('div', 'porque'); pq.innerHTML = '<b>Sobre "' + esc(elegido) + '":</b> ' + esc(q.d[elegido]); fb.appendChild(pq); }
  fb.appendChild(document.createTextNode(q.e || '')); fb.appendChild(el('div', 'ref', q.r || ''));
  if (extra) fb.appendChild(el('div', 'ref', extra));
  var lp = el('a', 'lupa'); lp.href = urlBusqueda(q); lp.target = '_blank'; lp.rel = 'noopener noreferrer';
  lp.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="10.5" cy="10.5" r="6.5"/><path d="M15.5 15.5L21 21"/></svg>Verificar en internet';
  lp.setAttribute('aria-label', 'Verificar esta respuesta en internet (abre una pestaña nueva)'); fb.appendChild(lp);
  if (TTS) {
    var be = el('button', 'esc-btn', 'Escuchar la explicación'); be.type = 'button'; be.hidden = !hayVozEs();
    be.onclick = function () { hablar([textoFb(fb)]); }; fb.appendChild(be);
    if (ST.cfg.voz && hayVozEs()) setTimeout(function () { if (!fb.hidden) hablar([textoFb(fb)]); }, 250);
  }
}
function textoFb(fb) { var r = []; fb.childNodes.forEach(function (n) { if (n.nodeType === 1 && (n.classList.contains('esc-btn') || n.classList.contains('lupa') || n.classList.contains('ref'))) return; var s = (n.textContent || '').replace(/\s+/g, ' ').trim(); if (s) r.push(/[.!?:]$/.test(s) ? s : s + '.'); }); return r.join(' '); }

/* ============ REPASO (ALIMENTAR / TEMA / FICHA) ============ */
function iniciarQuiz(op) {
  op = op || {}; var mat = ST.activa, s = cur(), pool = preguntasDe(mat, op.ficha);
  if (op.corrige) pool = pool.filter(function (q) { return q.m; });
  if (op.tema) pool = pool.filter(function (q) { return q.tema === op.tema; });
  if (!pool.length) { say('Todavía no hay preguntas aquí.'); return; }
  var sem = REPASO.semanas[mat], qs;
  var sp = (!op.tema && sem) ? pool.filter(function (q) { return q.tema === sem; }) : [];
  var a = elegir(sp, s, Math.min(2, sp.length)), rest = pool.filter(function (q) { return a.indexOf(q) < 0; });
  qs = op.corrige ? elegir(pool, s, Math.min(6, pool.length)) : mezclar(a.concat(elegir(rest, s, Math.min(5, pool.length) - a.length)));
  quiz = { i: 0, ok: 0, xp: 0, qs: qs, et0: etapa(s), corrige: !!op.corrige };
  go('quiz'); mostrarQ();
}
/* La ruta de hoy: primero lo que toca recordar (según las fechas de repaso) y un poco de lo nuevo, todo mezclado. */
function iniciarRuta() {
  var s = cur(), r = rutaDe(s, ST.activa);
  if (!r.total) { iniciarQuiz(); return; }
  quiz = { i: 0, ok: 0, xp: 0, qs: mezclar(r.venc.concat(r.nuevas)), et0: etapa(s), corrige: false, ruta: true, nu: r.nuevas.map(function (q) { return q.id; }) };
  go('quiz'); mostrarQ();
}
function mostrarQ() {
  var q = quiz.qs[quiz.i];
  $('q-cnt').textContent = (quiz.i + 1) + '/' + quiz.qs.length; $('q-pr').style.width = (quiz.i / quiz.qs.length * 100) + '%';
  $('q-fb').hidden = true; $('q-next').hidden = true;
  pintarPregunta(q, { tag: 'q-tag', text: 'q-text', opts: 'q-opts' }, function (bien, elegido, conf) { responderQ(q, bien, elegido, conf); }, { conf: true });
  if (quiz.corrige) $('q-tag').textContent = 'Ayuda a ' + cur().name + ' · ' + temaNombre(q.tema);
  else if (quiz.ruta) $('q-tag').textContent += quiz.nu.indexOf(q.id) > -1 ? ' · Nueva' : ' · Para recordar';
  window.scrollTo(0, 0); enfocar('q-text');
}
function responderQ(q, bien, elegido, conf) {
  var s = cur(), mult = esSemana(q) ? 2 : 1, g = PTS.acierto * mult;
  var got = registrar(q, bien, g, conf);
  var notas = [];
  if (bien && !got) notas.push(topeHoy(s) ? 'Hoy ' + s.name + ' ya recibió toda la energía que puede. Mañana seguirás sumando.' : 'Esta pregunta ya te dio puntos hoy. Mañana volverá a sumar.');
  if (conf === 's' && !bien) notas.push('Tenías mucha seguridad y no era esa: justo así se aprende más. Mañana te la vuelvo a preguntar.');
  else if (conf === 'a' && bien) notas.push('Acertaste, pero fue por suerte. Los puntos son tuyos; mañana la repasamos para que sea por saber.');
  else if (conf === 'd' && bien) notas.push('Bien, aunque dudabas. Te la vuelvo a preguntar pronto.');
  if (s.due[q.id]) notas.push('Volverá a salir ' + textoDias(s.due[q.id]) + '.');
  feedback($('q-fb'), q, bien, notas.join(' '), elegido);
  if (bien) { quiz.ok++; quiz.xp += got; setMouth('open'); reaccion(); flotar(quiz.corrige ? '¡Gracias!' : got ? '+' + got + ' XP' : '¡Bien!'); SFX.ok(); vibra(25); setTimeout(function () { setMouth('smile'); }, 700); renderPet(); }
  else { flotar(quiz.corrige ? 'Sigo con dudas' : 'Sigue intentando', '#b45309'); SFX.no(); vibra(40); }
  if (s.vis === 0 && etapa(s) > 0) setTimeout(eclosion, 900);   /* la primera transformación ocurre en cuanto se alcanza, sin esperar al final del repaso */
  var n = $('q-next'); n.hidden = false; n.textContent = quiz.i === quiz.qs.length - 1 ? 'Ver resultado' : 'Siguiente'; n.focus({ preventScroll: false });
}
$('q-next').onclick = function () {
  if (quiz.i < quiz.qs.length - 1) { quiz.i++; mostrarQ(); return; }
  var perfecto = quiz.ok === quiz.qs.length, bono = 0;
  if (quiz.ruta) {
    var s0 = cur(), h0 = fechaHoy();
    if (s0.ruta.d !== h0) { s0.ruta.d = h0; s0.ruta.veces++; bono = darXP(s0, PTS.ruta, true); quiz.xp += bono; guardar(); }
    var man = quiz.qs.filter(function (q) { return s0.due[q.id] && s0.due[q.id] <= fechaMas(h0, 1); }).length;
    fin({ titulo: perfecto ? '¡Ruta de hoy perfecta!' : '¡Ruta de hoy completa!', festejo: perfecto,
      filas: [['Aciertos', quiz.ok + ' de ' + quiz.qs.length], ['Puntos ganados', '+' + quiz.xp + ' XP' + (bono ? ' (incluye +' + bono + ' por completar la ruta)' : '')]].concat(man ? [['Para volver a ver mañana', man]] : [['Próxima ruta', 'mañana o cuando toque']]) });
    return;
  }
  fin({ titulo: quiz.corrige ? (perfecto ? '¡Le enseñaste muy bien a ' + cur().name + '!' : quiz.ok ? cur().name + ' aprendió contigo' : cur().name + ' sigue con dudas. ¡Intenta otra vez!') : perfecto ? '¡Repaso perfecto!' : quiz.ok ? '¡Buen repaso!' : 'Hoy toca repasar otra vez', et0: quiz.et0, festejo: perfecto,
    filas: [[quiz.corrige ? 'Correcciones acertadas' : 'Aciertos', quiz.ok + ' de ' + quiz.qs.length], ['Puntos ganados', '+' + quiz.xp + ' XP']] });
};
$('q-exit').onclick = function () { go('home'); renderPet(); };
$('a-feed').onclick = function () { iniciarRuta(); };

/* ============ RESULTADOS ============ */
function fin(o) {
  var s = cur(), et1 = etapa(s), nuevos = sincronizar(s, ST.activa), antes = s.vis, tit0 = tituloDe(s), sel = sincronizarSellos(s, ST.activa), tit1 = tituloDe(s);
  actualizarTiempo(s); guardar();
  $('r-t').textContent = o.titulo;
  var rl = $('r-list'); rl.innerHTML = '';
  (o.filas || []).forEach(function (f) { var d = el('div', 'res-item'); d.appendChild(el('span', '', f[0])); d.appendChild(el('span', '', String(f[1]))); rl.appendChild(d); });
  var u = $('r-unl'), c = $('r-custom'), partes = [], hayDecor = false, hayOtro = false, primero = '';
  if (et1 > antes) partes.push(antes === 0 ? '<b>¡' + esc(s.name) + ' está por transformarse!</b>' : '<b>' + esc(s.name) + ' evolucionó a ' + ETAPAS[et1] + '.</b> Fíjate cómo cambia.');
  if (nuevos.length) {
    nuevos.forEach(function (x) { if (x.k === 'decor') hayDecor = true; else { hayOtro = true; if (!primero) primero = x.k; } });
    partes.push('Desbloqueaste: <b>' + nuevos.map(function (x) { return esc(x.it.n) + (x.puesto ? ' (ya está en tu cuarto)' : ''); }).join(', ') + '</b>.');
  }
  if (sel.length) {
    var nsel = sel.map(function (f) { return 'Ficha ' + numFicha(f, fichasDe(ST.activa).indexOf(f)); }).join(' y ');
    partes.push('<b>¡Ganaste el sello de la ' + esc(nsel) + '!</b> Ya dominas lo principal de esa ficha.');
    if (tit1.n !== tit0.n) partes.push('Nuevo título: <b>' + esc(tit1.n) + '</b>.');
  }
  if (partes.length) {
    u.hidden = false; u.innerHTML = partes.join('<br>');
    c.hidden = false;
    if (sel.length && !hayDecor && !hayOtro) { c.textContent = 'Ver mis sellos'; c.onclick = function () { go('prog'); }; }
    else if (hayDecor) { c.textContent = 'Ver mi cuarto'; c.onclick = function () { go('room'); }; }
    else { c.textContent = 'Estrenar lo nuevo'; c.onclick = function () { tab = primero || 'ropa'; go('custom'); }; }
  } else { u.hidden = true; c.hidden = true; }
  if (antes === 0 && et1 >= 1) { petKey = ''; $('pet').innerHTML = origenMk(MAT[ST.activa].creature, 1); petKey = 'egg|ceremonia'; renderEscena(); } else renderPet();
  renderTop(); go('res');
  if (et1 > s.vis) { if (s.vis === 0) eclosion(); else evolucionar(); }
  else if (sel.length) { confeti(80); SFX.up(); }
  else if (o.festejo) { confeti(60); SFX.ok(); }
}
$('r-home').onclick = function () { go('home'); };

/* ============ JUGAR ============ */
function juegosDe(mat) {
  var r = [];
  if (preguntasDe(mat).filter(function (q) { return q.k === 'vf'; }).length >= 4) r.push({ tipo: 'cartas' });
  if (preguntasDe(mat).filter(function (q) { return q.k === 'opcion' && !q.m && q.o.length >= 3; }).length >= 4) r.push({ tipo: 'lluvia' });
  if (preguntasDe(mat).filter(function (q) { return q.m; }).length >= 4) r.push({ tipo: 'corrige' });
  (REPASO.juegos[mat] || []).forEach(function (j) { if (JUEGOS[j.tipo]) r.push(j); });
  r.push({ tipo: 'vasos' });
  return r;
}
var JUEGOS = {
  corrige: { titulo: 'Corrige a tu mascota', sub: 'Tu mascota se equivocó. Ayúdala a corregirse.', iniciar: function () { iniciarQuiz({ corrige: true }); },
    ico: '<svg viewBox="0 0 48 48"><path d="M6 8 H34 A4 4 0 0 1 38 12 V26 A4 4 0 0 1 34 30 H18 L10 38 V30 H10 A4 4 0 0 1 6 26 Z" fill="var(--brand-soft)" stroke="var(--brand)" stroke-width="2.5" stroke-linejoin="round"/><path d="M14 18 L18 22 L26 14" fill="none" stroke="var(--ok)" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/><circle cx="38" cy="38" r="7" fill="#ffd84d" stroke="#e6a400" stroke-width="2.5"/></svg>' },
  lluvia: { titulo: 'Lluvia de respuestas', sub: 'Mueve a tu mascota para atrapar la respuesta correcta.', iniciar: function () { iniciarLluvia(); },
    ico: '<svg viewBox="0 0 48 48"><circle cx="14" cy="12" r="7" fill="var(--brand-soft)" stroke="var(--brand)" stroke-width="2.5"/><circle cx="33" cy="20" r="7" fill="#e9f8f0" stroke="var(--ok)" stroke-width="2.5"/><circle cx="21" cy="30" r="4" fill="var(--brand-soft)" stroke="var(--brand)" stroke-width="2"/><path d="M8 44 Q24 36 40 44" fill="none" stroke="var(--brand)" stroke-width="3" stroke-linecap="round"/></svg>' },
  vasos: { titulo: 'Dónde está la mascota', sub: 'Sigue los vasos y adivina dónde se escondió.', iniciar: function () { iniciarVasos(); },
    ico: '<svg viewBox="0 0 48 48"><path d="M8 40 L12 14 H26 L30 40 Z" fill="var(--brand)" /><path d="M22 40 L25 22 H37 L40 40 Z" fill="var(--brand-soft)" stroke="var(--brand)" stroke-width="2.5"/><circle cx="31" cy="12" r="5" fill="#ffd84d"/></svg>' },
  sleep: { titulo: 'Hora de dormir', sub: 'Apaga la luz y deja que tu mascota descanse.', iniciar: function () { iniciarDormir(); },
    ico: '<svg viewBox="0 0 48 48"><path d="M30 8 A16 16 0 1 0 40 32 A13 13 0 0 1 30 8 Z" fill="#ffd84d" stroke="#e6a400" stroke-width="2.5" stroke-linejoin="round"/><path d="M34 10 h6 l-6 7 h6" fill="none" stroke="var(--brand)" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/></svg>' },
  cartas: { titulo: 'Verdadero o falso', sub: 'Desliza las tarjetas a la derecha o a la izquierda.', iniciar: function () { iniciarCartas(); },
    ico: '<svg viewBox="0 0 48 48"><rect x="8" y="10" width="26" height="30" rx="5" fill="#fff" stroke="var(--brand)" stroke-width="3" transform="rotate(-10 21 25)"/><rect x="16" y="8" width="26" height="30" rx="5" fill="var(--brand-soft)" stroke="var(--brand)" stroke-width="3" transform="rotate(8 29 23)"/><path d="M24 24 l5 5 l9 -10" fill="none" stroke="var(--ok)" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/></svg>' },
  armar: { titulo: 'Armar el átomo', sub: 'Pon protones, neutrones y electrones para formar un elemento.', iniciar: function (j) { iniciarAtomo(j); },
    ico: '<svg viewBox="0 0 48 48"><circle cx="24" cy="24" r="8" fill="#ff6b6b"/><circle cx="21" cy="22" r="3" fill="#aab4c8"/><ellipse cx="24" cy="24" rx="20" ry="8" fill="none" stroke="var(--brand)" stroke-width="2.5" transform="rotate(35 24 24)"/><circle cx="38" cy="31" r="3.4" fill="#4f8cff"/></svg>' }
};
var NUEVOS_J = { plato: 1, neurona: 1, separar: 1, disolucion: 1, conv: 1, estados: 1, linea: 1 };
function renderGames() {
  var c = $('gcards'); c.innerHTML = '';
  juegosDe(ST.activa).forEach(function (j) {
    var d = JUEGOS[j.tipo], b = el('button', 'gcard' + (NUEVOS_J[j.tipo] ? ' nuevo' : '')); b.innerHTML = '<span class="ico">' + d.ico + '</span><span><b>' + esc(j.titulo || d.titulo) + '</b><small>' + d.sub + '</small></span>';
    b.onclick = function () { d.iniciar(j); }; c.appendChild(b);
  });
}
$('a-play').onclick = function () { go('games'); };
/* ---- Repasar fichas anteriores: lista de fichas, cada una con sus temas ---- */
function renderFichas() {
  var s = cur(), mat = ST.activa, c = $('fi-list'); c.innerHTML = '';
  var fs = fichasDe(mat);
  if (!fs.length) { c.appendChild(el('p', 'p', 'Tu docente agregará las fichas de ' + MAT[mat].n + ' muy pronto.')); return; }
  fs.forEach(function (f) {
    var d = el('details', 'fdet'), sm = el('summary', ''), dom = dominados(s, mat, f.ficha.id);
    sm.innerHTML = '<span class="fn"><b>' + esc(f.ficha.titulo) + '</b><small>' + dom + ' de ' + f.temas.length + ' temas dominados</small></span>';
    d.appendChild(sm);
    var all = el('button', 'cta', 'Repasar toda la ficha'); all.onclick = function () { iniciarQuiz({ ficha: f.ficha.id }); }; d.appendChild(all);
    f.temas.forEach(function (tm) {
      var dm = temaDominado(s, mat, tm.key), p = Math.round(dominioTema(s, tm.key) * 100);
      var r = el('div', 'ftema'), b = el('button', 'cta sec', 'Repasar');
      r.innerHTML = '<span class="fn"><b>' + esc(tm.nombre) + '</b><small>' + (dm ? 'Dominado' : p + '%') + '</small></span>';
      b.setAttribute('aria-label', 'Repasar el tema ' + tm.nombre); b.onclick = function () { iniciarQuiz({ tema: tm.key }); };
      r.appendChild(b); d.appendChild(r);
    });
    c.appendChild(d);
  });
}
$('fi-back').onclick = function () { go('home'); };
$('seg2-todas').onclick = function () {
  var g = cur().gender;
  ORDEN.forEach(function (id) { var s = ST.m[id], m = MAT[id]; if (!s) return; var esDef = Object.keys(m.names).some(function (k) { return m.names[k] === s.name; }); s.gender = g; if (esDef) s.name = m.names[g]; });
  guardar(); petKey = ''; renderPet(); renderCustom(); say(cur().name + ': ¡Listo, las tres mascotas tienen esta versión!');
};
$('g-back').onclick = function () { go('home'); };

/* ---- Tarjetas verdadero o falso ---- */
var cg = null;
function iniciarCartas() {
  var s = cur(), pool = preguntasDe(ST.activa).filter(function (q) { return q.k === 'vf'; });
  cg = { qs: elegir(pool, s, 8), i: 0, xp: 0, ok: 0, combo: 0, best: 0, lock: false, et0: etapa(s) };
  go('cards'); renderPet(); dibujaDeck(); infoCartas();
}
function infoCartas() {
  $('c-cnt').textContent = Math.min(cg.i + 1, cg.qs.length) + '/' + cg.qs.length; $('c-pr').style.width = (cg.i / cg.qs.length * 100) + '%';
  $('combo').textContent = cg.combo >= 2 ? 'Racha de aciertos: ' + cg.combo : '';
  var qc = cg.qs[cg.i], vzc = hayVozEs() && !!qc; $('c-voz').hidden = !vzc;
  $('c-voz').onclick = function () { if (qc) hablar([qc.q.replace('{m}', cur().name) + ' ¿Verdadero o falso?']); };
  if (vzc && ST.cfg.voz) setTimeout(function () { if (vistaActual === 'cards' && cg && cg.qs[cg.i] === qc) hablar([qc.q.replace('{m}', cur().name) + ' ¿Verdadero o falso?']); }, 350);
}
function tarjeta(q, back) {
  var d = el('div', 'sw-card' + (back ? ' back' : ''));
  d.appendChild(el('div', 'tt', temaNombre(q.tema))); d.appendChild(el('div', 'qq', q.q));
  d.appendChild(el('div', 'lab v', 'VERDADERO')); d.appendChild(el('div', 'lab f', 'FALSO')); return d;
}
function dibujaDeck() {
  var deck = $('deck'); deck.innerHTML = ''; var q = cg.qs[cg.i], q2 = cg.qs[cg.i + 1];
  if (q2) deck.appendChild(tarjeta(q2, true));
  var top = tarjeta(q, false); deck.appendChild(top); arrastrable(top);
  $('d-f').disabled = false; $('d-v').disabled = false;
}
function arrastrable(e) {
  var x0 = null, dx = 0;
  e.addEventListener('pointerdown', function (ev) { if (cg.lock) return; x0 = ev.clientX; dx = 0; e.setPointerCapture(ev.pointerId); e.style.transition = 'none'; });
  e.addEventListener('pointermove', function (ev) {
    if (x0 === null) return; dx = ev.clientX - x0; e.style.transform = 'translateX(' + dx + 'px) rotate(' + (dx / 16) + 'deg)';
    e.querySelector('.lab.v').style.opacity = Math.max(0, Math.min(1, dx / 90)); e.querySelector('.lab.f').style.opacity = Math.max(0, Math.min(1, -dx / 90));
  });
  function suelta() {
    if (x0 === null) return; x0 = null;
    if (dx > 90) responderCarta(true); else if (dx < -90) responderCarta(false);
    else { e.style.transition = 'transform .25s'; e.style.transform = ''; e.querySelector('.lab.v').style.opacity = 0; e.querySelector('.lab.f').style.opacity = 0; }
  }
  e.addEventListener('pointerup', suelta); e.addEventListener('pointercancel', suelta);
}
function responderCarta(valor) {
  if (cg.lock) return; cg.lock = true; var q = cg.qs[cg.i], bien = valor === q.v, top = $('deck').lastChild;
  $('d-f').disabled = true; $('d-v').disabled = true;
  top.style.transition = 'transform .35s ease, opacity .35s'; top.style.transform = 'translateX(' + (valor ? 460 : -460) + 'px) rotate(' + (valor ? 28 : -28) + 'deg)'; top.style.opacity = 0;
  var got = registrar(q, bien, PTS.carta); cg.xp += got;
  if (bien) {
    cg.ok++; cg.combo++; cg.best = Math.max(cg.best, cg.combo);
    SFX.ok(); vibra(20); reaccion(); flotar(got ? '+' + got + ' XP' : '¡Bien!'); if (cg.combo === 3 || cg.combo === 5) { flotar('¡Racha x' + cg.combo + '!', '#d97706'); confeti(30); }
    renderPet(); setTimeout(sigCarta, 300);
  } else {
    cg.combo = 0; SFX.no(); vibra(40);
    var fb = $('c-fb'); fb.hidden = false; fb.className = 'fb nope'; fb.innerHTML = '';
    fb.appendChild(el('strong', '', 'Casi. Era ' + (q.v ? 'verdadero' : 'falso') + '.')); fb.appendChild(document.createTextNode(q.e || '')); fb.appendChild(el('div', 'ref', q.r || ''));
    $('c-ok').hidden = false;
  }
  infoCartas();
}
function sigCarta() {
  $('c-fb').hidden = true; $('c-ok').hidden = true; cg.lock = false; cg.i++;
  if (cg.i >= cg.qs.length) { fin({ titulo: cg.ok === cg.qs.length ? '¡Todas bien!' : '¡Buena partida!', et0: cg.et0, festejo: cg.ok >= 6, filas: [['Aciertos', cg.ok + ' de ' + cg.qs.length], ['Mejor racha', cg.best], ['Puntos ganados', '+' + cg.xp + ' XP']] }); return; }
  dibujaDeck(); infoCartas();
}
$('c-ok').onclick = sigCarta;
$('d-f').onclick = function () { responderCarta(false); }; $('d-v').onclick = function () { responderCarta(true); };
$('c-exit').onclick = function () { go('home'); };
document.addEventListener('keydown', function (e) {
  if (vistaActual !== 'cards' || !cg || cg.lock) return;
  if (e.key === 'ArrowRight') responderCarta(true); if (e.key === 'ArrowLeft') responderCarta(false);
});

/* ---- Armar el átomo (mismo molde sirve después para célula o ecuaciones) ---- */
var at = null, ELEMS = [];
function iniciarAtomo(j) {
  ELEMS = mezclar(j.elementos).slice(0, 5); at = { i: 0, p: 0, n: 0, e: 0, ok: 0, xp: 0, et0: etapa(cur()) }; go('atom'); pintaAtomo();
}
function pintaAtomo() {
  var e = ELEMS[at.i];
  $('at-cnt').textContent = (at.i + 1) + '/' + ELEMS.length; $('at-pr').style.width = (at.i / ELEMS.length * 100) + '%';
  $('at-task').innerHTML = 'Arma el átomo de ' + esc(e.n) + ' (' + esc(e.s) + ')<small>Número atómico ' + e.Z + ' · Masa atómica ' + e.A + '</small>';
  var parts = [['p', 'Protones', '#ff6b6b', '+'], ['n', 'Neutrones', '#aab4c8', '0'], ['e', 'Electrones', '#4f8cff', '−']], box = $('at-parts'); box.innerHTML = '';
  parts.forEach(function (p) {
    var r = el('div', 'part');
    r.innerHTML = '<span class="dot" style="background:' + p[2] + '">' + p[3] + '</span><b>' + p[1] + '</b><span class="ctr"><button aria-label="Quitar ' + p[1] + '">−</button><span id="v-' + p[0] + '">' + at[p[0]] + '</span><button aria-label="Agregar ' + p[1] + '">+</button></span>';
    var bs = r.querySelectorAll('button'); bs[0].onclick = function () { cambia(p[0], -1); }; bs[1].onclick = function () { cambia(p[0], 1); };
    box.appendChild(r);
  });
  $('at-check').hidden = false; $('at-next').hidden = true;
  $('at-fb').className = 'atfb'; $('at-fb').textContent = 'Toca + y − para agregar o quitar partículas.';
  dibujaAtomo();
}
function cambia(k, d) {
  var max = k === 'e' ? 10 : 12, v = Math.max(0, Math.min(max, at[k] + d)); if (v === at[k]) { SFX.no(); return; }
  at[k] = v; SFX.tick(); vibra(6); $('v-' + k).textContent = v;
  $('at-fb').className = 'atfb'; $('at-fb').textContent = 'Toca + y − para agregar o quitar partículas.'; dibujaAtomo();
}
function dibujaAtomo() {
  var h = '<circle cx="100" cy="100" r="48" fill="none" stroke="#d6def0" stroke-width="2" stroke-dasharray="4 5"/><circle cx="100" cy="100" r="82" fill="none" stroke="#d6def0" stroke-width="2" stroke-dasharray="4 5"/>';
  var n = Math.max(at.p, at.n), arr = []; for (var i = 0; i < n; i++) { if (i < at.p) arr.push('p'); if (i < at.n) arr.push('n'); }
  arr.forEach(function (t, i) {
    var rr = 6.4 * Math.sqrt(i), an = i * 2.39996, x = 100 + rr * Math.cos(an), y = 100 + rr * Math.sin(an);
    h += '<circle cx="' + x.toFixed(1) + '" cy="' + y.toFixed(1) + '" r="7" fill="' + (t === 'p' ? '#ff6b6b' : '#aab4c8') + '" stroke="#fff" stroke-width="1.6"/>' + (t === 'p' ? '<text x="' + x.toFixed(1) + '" y="' + (y + 3).toFixed(1) + '" font-size="9" font-weight="900" fill="#fff" text-anchor="middle">+</text>' : '');
  });
  function orbita(cant, r, dur, rev, ini) {
    var s = '<g class="orb" style="animation:orb ' + dur + 's linear infinite' + (rev ? ' reverse' : '') + '">';
    for (var i = 0; i < cant; i++) { var an = ini + i * 2 * Math.PI / cant, x = 100 + r * Math.cos(an), y = 100 + r * Math.sin(an); s += '<circle cx="' + x.toFixed(1) + '" cy="' + y.toFixed(1) + '" r="7.5" fill="#4f8cff" stroke="#fff" stroke-width="2"/><text x="' + x.toFixed(1) + '" y="' + (y + 3.4).toFixed(1) + '" font-size="11" font-weight="900" fill="#fff" text-anchor="middle">−</text>'; }
    return s + '</g>';
  }
  h += orbita(Math.min(at.e, 2), 48, 9, false, .5) + orbita(Math.max(0, Math.min(at.e - 2, 8)), 82, 15, true, .2);
  $('atomSvg').innerHTML = h;
  var ch = at.p - at.e, c = $('at-chg'); c.className = 'chg' + (ch === 0 ? ' neu' : '');
  c.textContent = ch === 0 ? 'Carga total: 0 · átomo neutro' : ch > 0 ? 'Carga total: +' + ch + ' · sobran protones' : 'Carga total: −' + (-ch) + ' · sobran electrones';
}
$('at-check').onclick = function () {
  var e = ELEMS[at.i], fb = $('at-fb');
  if (at.p !== e.Z) { fb.className = 'atfb'; fb.textContent = 'Los protones son el número atómico: ' + e.Z + '. Revisa cuántos pusiste.'; SFX.no(); vibra(30); return; }
  if (at.n !== e.A - e.Z) { fb.className = 'atfb'; fb.textContent = 'Neutrones = masa atómica − protones. ¿Cuánto es ' + e.A + ' − ' + e.Z + '?'; SFX.no(); vibra(30); return; }
  if (at.e !== e.Z) { fb.className = 'atfb'; fb.textContent = 'Un átomo neutro tiene tantos electrones como protones.'; SFX.no(); vibra(30); return; }
  fb.className = 'atfb good'; fb.textContent = '¡Perfecto! ' + e.n + ' tiene ' + e.Z + ' protones, ' + (e.A - e.Z) + ' neutrones y ' + e.Z + ' electrones.'; SFX.ok(); vibra(25); confeti(28);
  at.ok++; var s = cur(); marcarDia(); actualizarTiempo(s); var ka = 'atomo|' + e.n; if (s.ult[ka] !== fechaHoy()) { s.ult[ka] = fechaHoy(); at.xp += darXP(s, PTS.atomo); } s.feli = Math.min(100, s.feli + 5); guardar(); renderPet();
  $('at-check').hidden = true; $('at-next').hidden = false; $('at-next').textContent = at.i === ELEMS.length - 1 ? 'Ver resultado' : 'Siguiente átomo';
};
$('at-next').onclick = function () {
  if (at.i < ELEMS.length - 1) { at.i++; at.p = 0; at.n = 0; at.e = 0; pintaAtomo(); }
  else fin({ titulo: '¡Átomos armados!', et0: at.et0, festejo: true, filas: [['Átomos correctos', at.ok + ' de ' + ELEMS.length], ['Puntos ganados', '+' + at.xp + ' XP']] });
};
$('at-exit').onclick = function () { go('home'); };

/* ============ MINI MASCOTA (copia de la mascota con ids propios, para los juegos) ============ */
function miniPet(px) {
  var inner = $('pet').innerHTML; if (!inner) return '';
  var m = inner.replace(/id="([\w-]+)"/g, 'id="m_$1"').replace(/url\(#([\w-]+)\)/g, 'url(#m_$1)');
  return '<svg viewBox="22 36 156 156" width="' + px + '" height="' + px + '" style="--bc:' + $('pet').style.getPropertyValue('--bc') + '" aria-hidden="true">' + m + '</svg>';
}

/* ============ LLUVIA DE RESPUESTAS ============ */
var ll = null;
function pararLluvia() { if (ll && ll.raf) { cancelAnimationFrame(ll.raf); ll.raf = 0; } }
function iniciarLluvia() {
  var s = cur(), pool = preguntasDe(ST.activa).filter(function (q) { return q.k === 'opcion' && !q.m && q.o.length >= 3; });
  ll = { qs: elegir(pool, s, 6), i: 0, ok: 0, xp: 0, et0: etapa(s), raf: 0 };
  go('lluvia'); preparaLluvia();
}
function preparaLluvia() {
  pararLluvia();
  var q = ll.qs[ll.i], s = cur(), area = $('ll-area'), w = cuartoCol(paredDe(s.pared));
  area.innerHTML = ''; area.style.background = 'linear-gradient(180deg,' + w.a + ',' + w.b + ')';
  $('ll-cnt').textContent = (ll.i + 1) + '/' + ll.qs.length; $('ll-pr').style.width = (ll.i / ll.qs.length * 100) + '%';
  $('ll-tag').textContent = temaNombre(q.tema); $('ll-q').textContent = q.q; $('ll-hint').textContent = ST.cfg.lento ? 'Toca la burbuja con la respuesta correcta. Se mueven despacio.' : 'Arrastra a tu mascota (o toca una burbuja) para atrapar la respuesta correcta.';
  $('ll-voz').hidden = !hayVozEs(); if (ST.cfg.voz && hayVozEs()) setTimeout(function () { if (vistaActual === 'lluvia' && ll && ll.qs[ll.i] === q && !ll.hecho) $('ll-voz').click(); }, 400); $('ll-voz').onclick = function () { hablar([q.q].concat(ll.b.map(function (o, i) { return 'Opción ' + (i + 1) + ': ' + o.t; }))); }; $('ll-fb').hidden = true; $('ll-next').hidden = true;
  var W = area.clientWidth, H = area.clientHeight, bw = Math.floor(W * .47);
  ll.W = W; ll.H = H; ll.hecho = false; ll.fallo = false; ll.cycle = H + 460;
  var pet = el('div', 'llpet'); pet.innerHTML = miniPet(92); area.appendChild(pet);
  ll.pet = pet; ll.px = (W - 92) / 2; ll.tx = ll.px;
  ll.b = mezclar(q.o).map(function (t, k) {
    var b = el('button', 'bub', t); b.style.width = bw + 'px';
    var o = { el: b, t: t, ok: t === q.o[0], x: k % 2 ? W - bw - 6 : 6, y: -60 - k * 110, w: bw, gone: false, fast: false };
    b.onclick = function () { if (ll.hecho || o.gone) return; if (ST.cfg.lento) { atrapa(o); return; } ll.tx = Math.max(0, Math.min(W - 92, o.x + bw / 2 - 46)); o.fast = true; };
    area.appendChild(b); return o;
  });
  function mueve(e) { if (ll.hecho) return; var r = area.getBoundingClientRect(); ll.tx = Math.max(0, Math.min(W - 92, e.clientX - r.left - 46)); }
  area.onpointerdown = function (e) { if (e.target.closest('.bub')) return; ll.drag = true; mueve(e); };
  area.onpointermove = function (e) { if (ll.drag) mueve(e); };
  area.onpointerup = area.onpointercancel = function () { ll.drag = false; };
  var last = 0;
  function tick(t) {
    var dt = last ? Math.min(.05, (t - last) / 1000) : 0; last = t;
    ll.px += (ll.tx - ll.px) * Math.min(1, dt * 9); pet.style.transform = 'translateX(' + ll.px.toFixed(1) + 'px)';
    ll.b.forEach(function (o) {
      if (o.gone) return;
      if (!ll.hecho) { o.y += (o.fast ? 100 : 26) * (ST.cfg.lento ? .45 : 1) * dt; if (o.y > H) { o.y -= ll.cycle; o.fast = false; } }
      o.el.style.transform = 'translate(' + o.x + 'px,' + o.y.toFixed(1) + 'px)';
      if (!ll.hecho && o.y + 52 > H - 84 && o.y < H - 8 && Math.abs(o.x + o.w / 2 - (ll.px + 46)) < o.w / 2 + 22) atrapa(o);
    });
    ll.raf = requestAnimationFrame(tick);
  }
  ll.raf = requestAnimationFrame(tick);
}
function atrapa(o) {
  var q = ll.qs[ll.i];
  if (!o.ok) { o.gone = true; o.el.classList.add('bad'); SFX.no(); vibra(30); ll.fallo = true; setTimeout(function () { o.el.remove(); }, 650); return; }
  ll.hecho = true; var bien = !ll.fallo, g = bien ? PTS.lluvia : 0;
  o.el.classList.add('ok'); ll.b.forEach(function (x) { if (x !== o) x.el.classList.add('off'); });
  o.el.style.transition = 'transform .45s ease'; o.x = (ll.W - o.w) / 2; o.y = ll.H * .3;   /* la respuesta correcta sube al centro para leerla completa */
  var got = registrar(q, bien, g); feedback($('ll-fb'), q, bien);
  if (bien) { ll.ok++; ll.xp += got; SFX.ok(); vibra(25); confeti(18); flotar(got ? '+' + got + ' XP' : '¡Bien!'); renderPet(); } else SFX.pop();
  var n = $('ll-next'); n.hidden = false; n.textContent = ll.i === ll.qs.length - 1 ? 'Ver resultado' : 'Siguiente'; n.scrollIntoView({ block: 'nearest' });
}
$('ll-next').onclick = function () {
  if (ll.i < ll.qs.length - 1) { ll.i++; preparaLluvia(); return; }
  pararLluvia(); fin({ titulo: ll.ok === ll.qs.length ? '¡Lluvia perfecta!' : '¡Buena lluvia!', et0: ll.et0, festejo: ll.ok >= 5, filas: [['Atrapadas a la primera', ll.ok + ' de ' + ll.qs.length], ['Puntos ganados', '+' + ll.xp + ' XP']] });
};
$('ll-exit').onclick = function () { go('home'); };
document.addEventListener('keydown', function (e) {
  if (vistaActual !== 'lluvia' || !ll || ll.hecho) return;
  if (e.key === 'ArrowLeft') ll.tx = Math.max(0, ll.tx - 70); if (e.key === 'ArrowRight') ll.tx = Math.min(ll.W - 92, ll.tx + 70);
});

/* ============ DÓNDE ESTÁ LA MASCOTA ============ */
var vs = null;
var CUP_SVG = '<svg viewBox="0 0 100 120" aria-hidden="true"><path d="M14 112 L26 12 H74 L86 112 Z" fill="var(--brand)"/><path d="M14 112 L26 12 H74 L86 112 Z" fill="url(#cupSh)"/><rect x="20" y="4" width="60" height="14" rx="7" fill="var(--brand-d)"/><path d="M34 30 L30 96" stroke="#fff" stroke-width="6" stroke-linecap="round" opacity=".35"/></svg>';
function iniciarVasos() { vs = { r: 0, total: 5, ok: 0, token: 0, et0: etapa(cur()) }; go('vasos'); rondaVasos(); }
function rondaVasos() {
  var tok = ++vs.token, area = $('vs-area'); area.innerHTML = '';
  $('vs-cnt').textContent = (vs.r + 1) + '/' + vs.total; $('vs-pr').style.width = (vs.r / vs.total * 100) + '%';
  var p = Math.floor(Math.random() * 3); vs.p = p; vs.pos = [0, 1, 2]; vs.fase = 'mostrar'; vs.cups = [];
  area.innerHTML = '<svg width="0" height="0" style="position:absolute"><defs><linearGradient id="cupSh" x1="0" x2="1"><stop offset="0" stop-color="#fff" stop-opacity=".25"/><stop offset="1" stop-color="#000" stop-opacity=".15"/></linearGradient></defs></svg>';
  for (var i = 0; i < 3; i++) (function (i) {
    var c = el('button', 'cupw'); c.disabled = true; c.setAttribute('aria-label', 'Vaso ' + (i + 1));
    c.style.left = (i * 34.5 + 1) + '%';
    c.innerHTML = (i === p ? '<div class="cuppet">' + miniPet(52) + '</div>' : '') + '<div class="cup">' + CUP_SVG + '</div>';
    c.onclick = function () { elige(i); }; area.appendChild(c); vs.cups.push(c);
  })(i);
  $('vs-msg').textContent = 'Mira dónde se esconde...';
  function ok() { return vs && vs.token === tok && vistaActual === 'vasos'; }
  function esp(ms, fn) { setTimeout(function () { if (ok()) fn(); }, ms); }
  esp(500, function () { vs.cups[p].classList.add('lift'); SFX.tick(); });
  esp(1700, function () { vs.cups[p].classList.remove('lift'); });
  esp(2300, function () {
    $('vs-msg').textContent = '¡Sigue los vasos!';
    var n = ST.cfg.lento ? 2 + Math.floor(vs.r / 2) : 3 + vs.r, d = ST.cfg.lento ? 900 : Math.max(300, 560 - vs.r * 55), k = 0;
    (function swap() {
      if (!ok()) return;
      if (k++ >= n) { vs.fase = 'elegir'; vs.cups.forEach(function (c) { c.disabled = false; }); $('vs-msg').textContent = 'Toca el vaso donde está tu mascota'; return; }
      var a = Math.floor(Math.random() * 3), b = (a + 1 + Math.floor(Math.random() * 2)) % 3;
      var ia = vs.pos.indexOf(a), ib = vs.pos.indexOf(b); vs.pos[ia] = b; vs.pos[ib] = a;
      vs.cups.forEach(function (c, i) { c.style.left = (vs.pos[i] * 34.5 + 1) + '%'; }); SFX.tick();
      setTimeout(swap, d + 90);
    })();
  });
}
function elige(i) {
  if (vs.fase !== 'elegir') return; vs.fase = 'fin'; var tok = vs.token, s = cur();
  vs.cups.forEach(function (c) { c.disabled = true; }); vs.cups[i].classList.add('lift'); vs.cups[vs.p].classList.add('lift');
  var bien = i === vs.p;
  if (bien) { vs.ok++; actualizarTiempo(s); s.feli = Math.min(100, s.feli + 4); guardar(); SFX.ok(); vibra(20); confeti(22); reaccion(); $('vs-msg').textContent = '¡Ahí estaba! Tu mascota está feliz'; renderPet(); }
  else { SFX.pop(); $('vs-msg').textContent = 'Casi. Se escondió ahí. ¡Otra vez!'; }
  setTimeout(function () {
    if (!vs || vs.token !== tok || vistaActual !== 'vasos') return;
    vs.r++;
    if (vs.r >= vs.total) fin({ titulo: vs.ok >= 4 ? '¡Qué ojo tienes!' : '¡Buena partida!', et0: vs.et0, festejo: vs.ok >= 4, filas: [['Aciertos', vs.ok + ' de ' + vs.total], ['Felicidad', vs.ok ? 'Tu mascota se divirtió' : 'Intenta otra vez']] });
    else rondaVasos();
  }, 1700);
}
$('vs-exit').onclick = function () { go('home'); };

/* ============ HORA DE DORMIR ============ */
var dormido = false, zzzT = null, zzzDesde = 0;
function pintaZzz() {
  var b = $('b-zzz'); if (!b) return;
  b.setAttribute('aria-pressed', dormido ? 'true' : 'false');
  b.setAttribute('aria-label', dormido ? 'Despertar a la mascota' : 'Poner a dormir a la mascota');
  b.lastChild.textContent = dormido ? 'Despertar' : 'Dormir';
}
function iniciarDormir() {
  var s = cur(); dormido = false; go('sleep'); renderPet();
  $('sl-btn').textContent = 'Apagar la luz'; $('sl-t').textContent = 'Hora de dormir';
  $('sl-p').textContent = 'Apaga la luz para que ' + s.name + ' descanse. Dormir le da felicidad.';
  say(s.name + ': ¿Ya es hora de dormir?');
}
function finDormir() {
  if (!dormido && !$('night').classList.contains('on')) return;
  clearInterval(zzzT); dormido = false; $('night').classList.remove('on'); pintaZzz(); if (tieneMascotas()) { petKey = ''; renderPet(); }
}
/* Dormir y despertar se usan desde el botón del inicio y desde la vista "Hora de dormir". */
function dormirYa() {
  var s = cur(); if (dormido || !tieneMascotas()) return;
  dormido = true; zzzDesde = Date.now(); $('night').classList.add('on'); SFX.nana(); vibra(20);
  aplicaSueno();
  clearInterval(zzzT); zzzT = setInterval(function () { if (dormido && !document.hidden) SFX.ronca(); }, 3600);
  say('Zzzz'); pintaZzz();
}
/* La mascota se ve dormida: ojos cerrados, boca tranquila y respira despacio. Se vuelve a aplicar si la pantalla se redibuja. */
function aplicaSueno() {
  var svg = $('pet'); if (!svg || !cur()) return;
  var g = $('gZ');
  if (!g) { g = document.createElementNS('http://www.w3.org/2000/svg', 'g'); g.id = 'gZ'; while (svg.firstChild) g.appendChild(svg.firstChild); svg.appendChild(g); }
  g.setAttribute('class', 'respira');
  if (cur().vis > 0 && $('gEyes')) { $('gEyes').removeAttribute('transform'); $('gEyes').innerHTML = ojosMarkup('dormilones'); setMouth('dorm'); }
  $('say').textContent = 'Zzzz';
}
/* Al salir de la app (otra app, pantalla apagada o pestaña en segundo plano) se corta todo sonido y la mascota despierta sin ruido. */
function silenciarTodo() {
  clearInterval(zzzT);
  if (dormido) despertarYa(true);
  try { if (AC && AC.close) AC.close(); } catch (e) {} AC = null;
  try { callar(); } catch (e) {}
}
function despertarYa(silencio) {
  var s = cur(); if (!dormido) return false;
  var descanso = Date.now() - zzzDesde >= 8000;
  finDormir();
  if (descanso) {
    actualizarTiempo(s); s.feli = Math.min(100, s.feli + 10); s.hamb = Math.min(100, s.hamb + 3); guardar();
    if (!silencio) { SFX.up(); vibra(20); } if (s.vis > 0 && !silencio) { reaccion(); corazones(); }
    say(s.name + ': ¡Qué bien descansé! Gracias.');
  } else say(s.name + ': Uy, quería dormir un ratito más.');
  renderTop(); return descanso;
}
$('sl-btn').onclick = function () {
  var s = cur();
  if (!dormido) {
    dormirYa();
    $('sl-t').textContent = 'Buenas noches'; $('sl-p').textContent = s.vis === 0 ? 'Shhh. ' + s.name + ' descansa.' : 'Shhh. ' + s.name + ' está soñando con ' + ({ biologia: 'células, plantas y neuronas', fisica: 'átomos, planetas y órbitas', quimica: 'burbujas, cristales y mezclas' })[ST.activa] + '.';
    this.textContent = 'Despertar';
  } else {
    var ok = despertarYa();
    $('sl-t').textContent = '¡Buenos días!'; $('sl-p').textContent = ok ? 'Descansó muy bien. Su felicidad subió.' : 'Despertó pronto. Déjala dormir un poco más para que se recupere.'; this.textContent = 'Volver a dormir';
  }
};
$('b-zzz').onclick = function () { if (dormido) despertarYa(); else dormirYa(); };
$('sl-exit').onclick = function () { go('home'); };

/* ============ JEFE DE LA FICHA ============ */
var bs = null;
function hpHTML() { var h = ''; for (var i = 0; i < bs.max; i++) h += '<i class="' + (i < bs.hp ? 'on' : '') + '"></i>'; $('hp').innerHTML = h; }
function iniciarJefe(fichaId) {
  var s = cur(), f = fichasDe(ST.activa).filter(function (x) { return x.ficha.id === fichaId; })[0]; if (!f) return;
  var pool = f.preguntas.slice();
  bs = { f: f, max: 6, hp: 6, queue: elegir(pool, s, Math.min(pool.length, 9)), pool: pool, ok: 0, fallos: 0, et0: etapa(s) };
  go('boss'); renderPet(); $('bossSvg').innerHTML = bossMk('n'); $('bossSvg').classList.remove('defeat');
  $('bossSvg').setAttribute('aria-label', f.ficha.jefe); $('bname').textContent = f.ficha.jefe + ' · Reto final de la ' + f.ficha.titulo.split('·')[0].trim(); hpHTML(); sigJefe();
  var fb = $('bq-fb'); fb.hidden = false; fb.className = 'fb'; fb.textContent = 'Cada acierto le quita un punto de vida. Si fallas, esa pregunta vuelve más tarde: aquí nadie pierde.';
}
function sigJefe() {
  if (!bs.queue.length) bs.queue = elegir(bs.pool, cur(), Math.min(bs.pool.length, 6));
  var q = bs.queue[0]; bs.q = q;
  $('bq-next').hidden = true;
  pintarPregunta(q, { tag: 'bq-tag', text: 'bq-text', opts: 'bq-opts' }, function (bien, elegido) { responderJefe(q, bien, elegido); });
}
function responderJefe(q, bien, elegido) {
  registrar(q, bien, PTS.acierto);
  var fb = $('bq-fb');
  if (bien) {
    bs.queue.shift(); bs.ok++; bs.hp--; hpHTML(); feedback(fb, q, true); fb.firstChild.textContent = '¡Golpe!';
    var sv = $('bossSvg'); sv.innerHTML = bossMk('h'); sv.classList.remove('shake'); void sv.getBoundingClientRect(); sv.classList.add('shake');
    var d = el('div', 'dmg', '-1'); $('bossbox').appendChild(d); setTimeout(function () { d.remove(); }, 1000);
    SFX.hit(); vibra(35); reaccion(); setMouth('open'); setTimeout(function () { setMouth('smile'); }, 600); renderPet();
    setTimeout(function () { if (bs.hp > 0) sv.innerHTML = bossMk('n'); }, 420);
    if (bs.hp <= 0) { ganaJefe(); return; }
  } else {
    bs.queue.push(bs.queue.shift()); bs.fallos++; feedback(fb, q, false, 'Esta pregunta volverá más tarde.', elegido); SFX.no(); vibra(30);
  }
  var n = $('bq-next'); n.hidden = false; n.textContent = 'Siguiente';
}
$('bq-next').onclick = function () { $('bq-fb').hidden = true; sigJefe(); };
function ganaJefe() {
  var s = cur(), id = bs.f.ficha.id;
  $('bossSvg').innerHTML = bossMk('d'); setTimeout(function () { $('bossSvg').classList.add('defeat'); }, 500);
  SFX.win(); vibra([50, 60, 50, 60, 120]); confeti(180);
  s.jefes[id] = (s.jefes[id] || 0) + 1; darXP(s, PTS.jefe); s.feli = Math.min(100, s.feli + 10); guardar();
  $('bq-next').hidden = true; $('bq-opts').innerHTML = '';
  setTimeout(function () { fin({ titulo: '¡Superaste el reto final!', et0: bs.et0, festejo: false, filas: [['Aciertos', bs.ok], ['Preguntas que volvieron', bs.fallos], ['Puntos ganados', '+' + PTS.jefe + ' XP']] }); }, 1600);
}
$('bq-exit').onclick = function () { go('home'); };

/* ============ COFRE DIARIO ============ */
function abrirCofre() {
  var s = cur(); if (s.cofre.dia === fechaHoy()) return;
  var pend = cofrePool(ST.activa).filter(function (p) { return !s.desb[p[0] + '|' + p[1]]; }), rew, txt;
  if (pend.length) {
    var p = pick(pend), it = LISTAS[p[0]].filter(function (x) { return x.id === p[1]; })[0];
    s.desb[p[0] + '|' + p[1]] = 1; s.nuevos[p[0] + '|' + p[1]] = 1; s.cofre.ganados.push(p[1]);
    rew = { ico: itemIcono(p[0], p[1]), n: it.n };
    if (p[0] === 'decor' && !s.decor[it.slot]) { s.decor[it.slot] = it.id; txt = 'Ya está en tu cuarto.'; }
    else txt = p[0] === 'decor' ? 'Ya puedes ponerlo en el cuarto.' : p[0] === 'pared' ? 'Ya puedes ponerla en el cuarto.' : 'Ya puedes estrenarlo en Personalizar.';
  } else {
    marcarDia(); darXP(s, PTS.cofre, true); s.feli = Math.min(100, s.feli + 5);
    rew = { ico: '<svg viewBox="0 0 40 40"><path d="M20 4 L25 15 L37 16 L28 24 L31 36 L20 30 L9 36 L12 24 L3 16 L15 15 Z" fill="#ffd84d" stroke="#e6a400" stroke-width="2" stroke-linejoin="round"/></svg>', n: '+' + PTS.cofre + ' puntos de nivel' };
    txt = 'Ya tienes todos los objetos del cofre. ¡Qué colección!';
  }
  s.cofre.dia = fechaHoy(); guardar();
  var m = $('modal'), b = $('mbox'); b.innerHTML = chestSVG(false) + '<h3>Cofre diario</h3><p>Toca para abrirlo</p><button class="cta" id="m-open">Abrir</button>'; m.classList.add('on'); $('m-open').focus();
  function revelar() {
    SFX.chest(); vibra([30, 40, 30]); confeti(90);
    b.innerHTML = chestSVG(true) + '<h3>¡Cofre abierto!</h3><div class="rew">' + rew.ico + '<span>' + esc(rew.n) + '</span></div><p>' + txt + '</p><button class="cta" id="m-ok">¡Genial!</button>';
    $('m-ok').onclick = function () { m.classList.remove('on'); renderPet(); renderHome(); renderTop(); chequearEvolucion(); }; $('m-ok').focus();
  }
  $('m-open').onclick = function () { SFX.tick(); b.querySelector('svg').classList.add('open'); setTimeout(revelar, 500); };
}

/* ============ CUARTO ============ */
function renderRoom() {
  var s = cur(); $('room-name').textContent = s.name;
  var gp = $('wallgrid'); gp.innerHTML = '';
  PAREDES.forEach(function (it) {
    var ok = abierto(s, 'pared', it), b = el('button', 'tile' + (ok ? '' : ' lock') + (ok && s.nuevos['pared|' + it.id] ? ' nuevo' : ''));
    b.setAttribute('aria-pressed', s.pared === it.id ? 'true' : 'false'); b.setAttribute('aria-label', it.n + (ok ? '' : ' (bloqueada)'));
    b.innerHTML = itemIcono('pared', it.id) + '<span>' + it.n + '</span>' + (ok ? '' : '<span class="lk" aria-hidden="true">🔒</span>');
    b.onclick = function () {
      var h = $('roomhint');
      if (!ok) { h.textContent = falta(s, it); return; }
      delete s.nuevos['pared|' + it.id]; s.pared = it.id; h.textContent = 'Pared "' + it.n + '" puesta.'; SFX.pop(); vibra(10); guardar(); renderEscena(); renderRoom();
    };
    gp.appendChild(b);
  });
  var g = $('decgrid'); g.innerHTML = '';
  listaDe('decor', ST.activa).forEach(function (it) {
    var ok = abierto(s, 'decor', it), on = s.decor[it.slot] === it.id, b = el('button', 'tile' + (ok ? '' : ' lock') + (ok && s.nuevos['decor|' + it.id] ? ' nuevo' : ''));
    b.setAttribute('aria-pressed', on ? 'true' : 'false'); b.setAttribute('aria-label', it.n + (ok ? '' : ' (bloqueado)') + (on ? ' (puesto)' : ''));
    b.innerHTML = itemIcono('decor', it.id) + '<span>' + it.n + '</span>' + (ok ? '' : '<span class="lk" aria-hidden="true">🔒</span>') + (on ? '<span class="pl">Puesto</span>' : '');
    b.onclick = function () {
      var h = $('roomhint');
      if (!ok) { h.textContent = falta(s, it); return; }
      delete s.nuevos['decor|' + it.id]; s.decor[it.slot] = on ? null : it.id; h.textContent = on ? it.n + ' guardado.' : it.n + ' puesto en el cuarto.';
      SFX.pop(); vibra(10); guardar(); renderEscena(); renderRoom();
    };
    g.appendChild(b);
  });
}

/* ============ PERSONALIZAR ============ */
function segHTML(id, onchange) {
  var e = $(id); e.innerHTML = '';
  [['f', 'Niña'], ['m', 'Niño']].forEach(function (p) {
    var b = el('button', '', p[1]); b.setAttribute('role', 'radio'); b.setAttribute('aria-checked', cur().gender === p[0] ? 'true' : 'false');
    b.onclick = function () {
      var s = cur(), m = MAT[ST.activa], esDef = Object.keys(m.names).some(function (k) { return m.names[k] === s.name; });
      s.gender = p[0]; if (esDef) s.name = m.names[p[0]];
      guardar(); onchange();
    };
    e.appendChild(b);
  });
}
function dibujaGrid() {
  var s = cur(), g = $('grid'); g.innerHTML = '';
  if (s.vis === 0 && tab !== 'color') { var p = el('p', 'hint', 'Los ojos y la ropa se estrenan cuando ' + s.name + ' se transforme. Mientras tanto, elige su color.'); p.style.gridColumn = '1/-1'; g.appendChild(p); return; }
  LISTAS[tab].filter(function (it) { return true; }).forEach(function (it) {
    var ok = abierto(s, tab, it), b = el('button', 'tile' + (ok ? '' : ' lock') + (ok && s.nuevos[tab + '|' + it.id] ? ' nuevo' : ''));
    var on = tab === 'ropa' ? (s.ropa.indexOf(it.id) > -1 || (it.id === 'nada' && s.ropa.length === 0)) : s[tab] === it.id;
    b.setAttribute('aria-pressed', on ? 'true' : 'false');
    var ic = '';
    if (tab === 'color') ic = '<span class="sw" style="background:' + (it.c === 'galaxia' ? 'linear-gradient(135deg,#3b2a8f,#8b4fd8,#ff7ac3)' : it.c) + '"></span>';
    if (tab === 'ojos') ic = iconoOjos(it.id);
    if (tab === 'ropa') ic = iconoRopa(it.id);
    b.innerHTML = ic + '<span>' + it.n + '</span>' + (ok ? '' : '<span class="lk" aria-hidden="true">🔒</span>');
    b.setAttribute('aria-label', it.n + (ok ? '' : ' (bloqueado)'));
    b.onclick = function () {
      var h = $('hint');
      if (!ok) { h.className = 'hint err'; h.textContent = falta(s, it); return; }
      h.className = 'hint'; delete s.nuevos[tab + '|' + it.id];
      if (tab === 'ropa') { if (it.id === 'nada') s.ropa = []; else { var i = s.ropa.indexOf(it.id); if (i > -1) s.ropa.splice(i, 1); else s.ropa.push(it.id); } h.textContent = 'Puedes combinar varias prendas.'; }
      else { s[tab] = it.id; h.textContent = it.n + ' puesto.'; }
      SFX.pop(); vibra(8); guardar(); renderPet(); dibujaGrid(); if (tab === 'ropa') reaccion();
    };
    g.appendChild(b);
  });
}
function renderCustom() {
  segHTML('seg2', function () { petKey = ''; renderPet(); renderCustom(); });
  var dif = ORDEN.some(function (id) { return ST.m[id] && ST.m[id].gender !== cur().gender; }); $('seg2-todas').hidden = !dif;
  document.querySelectorAll('#tabs .tab').forEach(function (t) { t.setAttribute('aria-selected', t.dataset.t === tab ? 'true' : 'false'); });
  $('hint').className = 'hint'; dibujaGrid();
}

/* ============ PROGRESO ============ */
function renderSellos(s, mat) {
  var host = $('sellos'), fs = fichasDe(mat); host.innerHTML = '';
  var ti = tituloDe(s), sg = siguienteTitulo(s), n = sellosDe(s);
  var cab = el('div', 'tit-card'); cab.innerHTML = '<small>Tu título</small><b>' + esc(ti.n) + '</b><span>' + n + (n === 1 ? ' sello' : ' sellos') + (sg ? ' · te faltan ' + (sg.v - n) + ' para ' + esc(sg.n) : ' · ¡el título más alto!') + '</span>';
  host.appendChild(cab);
  if (!fs.length) return;
  var g = el('div', 'sellos-g');
  fs.forEach(function (f, i) {
    var ok = !!s.sellos[f.ficha.id], num = numFicha(f, i), req = reqSello(f), ll = dominados(s, mat, f.ficha.id);
    var d = el('div', 'sello' + (ok ? ' on' : ''));
    d.innerHTML = selloMk(num, MAT[mat].brand, ok) + '<small>' + (ok ? 'Ganado' : Math.min(ll, req) + ' de ' + req + ' temas') + '</small>';
    d.setAttribute('role', 'img'); d.setAttribute('aria-label', 'Sello de la ficha ' + num + (ok ? ': ganado' : ': ' + Math.min(ll, req) + ' de ' + req + ' temas dominados'));
    g.appendChild(d);
  });
  host.appendChild(g);
  var esc2 = el('p', 'p'); esc2.style.cssText = 'text-align:left;margin:6px 0 0';
  esc2.textContent = 'Gana el sello de una ficha dominando la mitad de sus temas. Los sellos que ganas son tuyos para siempre.';
  host.appendChild(esc2);
}
function renderProg() {
  var s = cur(), mat = ST.activa, w = $('week'); w.innerHTML = '';
  var hoy = new Date(); if (DIA_OFFSET) hoy.setDate(hoy.getDate() + DIA_OFFSET);
  for (var i = 6; i >= 0; i--) {
    var d = new Date(hoy); d.setDate(d.getDate() - i); var on = ST.dias.indexOf(fechaDe(d)) > -1;
    var x = el('div', 'day' + (on ? ' on' : '')); x.innerHTML = '<i>' + (on ? '✓' : '') + '</i>' + ['D', 'L', 'M', 'M', 'J', 'V', 'S'][d.getDay()]; w.appendChild(x);
  }
  $('racha-txt').textContent = rachaVisible() ? 'Llevas ' + rachaVisible() + ' día' + (rachaVisible() === 1 ? '' : 's') + ' de racha. Si un día no puedes, tu racha te espera.' : 'Repasa hoy para empezar tu racha.';
  renderSellos(s, mat);
  var t = $('topics'); t.innerHTML = '';
  var fs = fichasDe(mat);
  if (!fs.length) t.appendChild(el('p', 'p', 'Tus temas aparecerán aquí cuando tu docente agregue las fichas de ' + MAT[mat].n + '.'));
  fs.forEach(function (f) {
    var box = el('div', 'fcard'); box.appendChild(el('div', 'ftit', f.ficha.titulo));
    f.temas.forEach(function (tm) {
      var dom = temaDominado(s, mat, tm.key), p = Math.round(dominioTema(s, tm.key) * 100);
      var r = el('div', 'topic'); r.innerHTML = '<div class="tt"><span>' + esc(tm.nombre) + '</span><span>' + (dom ? '<span class="badge">Dominado</span>' : p + '%') + '</span></div><div class="tb"><i style="width:' + (dom ? 100 : p) + '%"></i></div>';
      box.appendChild(r);
    });
    var row = el('div', 'frow'), b1 = el('button', 'cta sec', 'Repasar esta ficha'); b1.onclick = function () { iniciarQuiz({ ficha: f.ficha.id }); }; row.appendChild(b1);
    if (f.ficha.jefe) {
      var req = reqSello(f), puede = dominados(s, mat, f.ficha.id) >= req;
      var b2 = el('button', 'cta' + (puede ? '' : ' sec'), puede ? (s.jefes[f.ficha.id] ? 'Reto final: otra vez' : 'Reto final') : 'Reto final (' + dominados(s, mat, f.ficha.id) + '/' + req + ' temas)');
      b2.onclick = puede ? function () { iniciarJefe(f.ficha.id); } : function () { say(''); b2.textContent = 'Domina ' + req + ' temas para desbloquearlo'; };
      row.appendChild(b2);
    }
    box.appendChild(row); t.appendChild(box);
  });
  var hb = $('habs'); hb.innerHTML = ''; var hayH = HAB_ORDEN.some(function (h) { return habPct(s, h) != null; });
  $('hab-sub').hidden = !hayH; hb.hidden = !hayH;
  HAB_ORDEN.forEach(function (h) { var p = habPct(s, h); if (p != null) barra(hb, HAB_CORTO[h], p, 'var(--brand)', p + '%'); });
  var tot = 0, ab = 0; Object.keys(LISTAS).forEach(function (k) { listaDe(k, ST.activa).forEach(function (it) { tot++; if (abierto(s, k, it)) ab++; }); });
  $('coll').textContent = ab + ' de ' + tot + ' objetos desbloqueados entre colores, ojos, ropa, paredes y decoración del cuarto de ' + s.name + '.';
}

/* ============ AJUSTES ============ */
function renderPerfiles() {
  var h = $('perfiles'); h.innerHTML = ''; var ls = listaPerfiles();
  ls.forEach(function (p) {
    var row = el('div', 'pf' + (p.activo ? ' on' : '')), b = el('button', 'pfb', p.nombre + (p.activo ? ' (este perfil)' : ''));
    b.setAttribute('aria-pressed', p.activo ? 'true' : 'false');
    b.onclick = function () { if (!p.activo) activarPerfil(p.id); };
    row.appendChild(b);
    if (!p.activo && ls.length > 1) {
      var q = el('button', 'pfq', 'Quitar'); q.setAttribute('aria-label', 'Quitar el perfil ' + p.nombre);
      q.onclick = function () { if (q.dataset.seguro !== '1') { q.dataset.seguro = '1'; q.textContent = '¿Seguro? Se borra su avance'; setTimeout(function () { q.dataset.seguro = ''; q.textContent = 'Quitar'; }, 4000); return; } quitarPerfil(p.id); renderPerfiles(); };
      row.appendChild(q);
    }
    h.appendChild(row);
  });
  var ios = /iP(hone|ad|od)/.test(navigator.userAgent) && !navigator.standalone && !(window.matchMedia && matchMedia('(display-mode: standalone)').matches);
  $('ios-aviso').hidden = !ios;
  var instalada = !!navigator.standalone || !!(window.matchMedia && matchMedia('(display-mode: standalone)').matches);
  $('and-aviso').hidden = instalada || /iP(hone|ad|od)/.test(navigator.userAgent);
}
function activarPerfil(id) {
  guardar(); elegirPerfil(id); petKey = ''; aplicarCfg();
  if (!tieneMascotas()) { primeraVez(); return; }
  ORDEN.forEach(function (m) { var s = ST.m[m]; if (s) { actualizarTiempo(s); sincronizar(s, m); sincronizarSellos(s, m); } });
  guardar(); todo(); go('home'); setTimeout(chequearEvolucion, 500);
}
$('pf-nuevo').onclick = function () { guardar(); crearPerfil(); petKey = ''; aplicarCfg(); primeraVez(); };
function renderSet() {
  renderPerfiles();
  $('al-nombre').value = ST.alumno || ''; $('rs').hidden = true; $('rs-msg').textContent = '';
  [['t-snd', 'snd'], ['t-vib', 'vib'], ['t-mov', 'mov'], ['t-big', 'grande'], ['t-conf', 'conf'], ['t-contraste', 'contraste'], ['t-voz', 'voz'], ['t-lento', 'lento'], ['t-elegir', 'elegir'], ['t-dib', 'dib']].forEach(function (p) { $(p[0]).setAttribute('aria-checked', ST.cfg[p[1]] ? 'true' : 'false'); });
  [['f-normal', 'normal'], ['f-facil', 'facil'], ['f-dis', 'dislexia']].forEach(function (p) { $(p[0]).setAttribute('aria-checked', ST.cfg.fuente === p[1] ? 'true' : 'false'); });
  [['th-auto', 'auto'], ['th-neutro', 'neutro'], ['th-claro', 'claro'], ['th-noche', 'noche']].forEach(function (p) { $(p[0]).setAttribute('aria-checked', ST.cfg.tema === p[1] ? 'true' : 'false'); });
  hintTema();
  var vz = hayVozEs(); $('t-voz').disabled = !vz; $('voz-nota').hidden = vz;
  $('set-aviso').hidden = guardadoOK; $('bk-msg').textContent = ''; $('bk-conf').hidden = true; if (window.ultimoRespaldo) window.ultimoRespaldo(); $('bk-borrar').textContent = 'Borrar mi progreso'; $('bk-borrar').dataset.seguro = '';
}
function aplicarCfg() {
  var h = document.documentElement.classList;
  h.toggle('grande', !!ST.cfg.grande); h.toggle('contraste', !!ST.cfg.contraste);
  h.toggle('f-facil', ST.cfg.fuente === 'facil'); h.toggle('f-dis', ST.cfg.fuente === 'dislexia');
  aplicarModo(); hintTema();
  $('phone').classList.toggle('noanim', !!ST.cfg.mov);
}
function tog(id, key) {
  $(id).onclick = function () { ST.cfg[key] = !ST.cfg[key]; this.setAttribute('aria-checked', ST.cfg[key] ? 'true' : 'false'); aplicarCfg(); guardar(); if (key === 'snd' || key === 'vib') { SFX.ok(); if (key === 'vib') vibra(30); } if (key === 'voz' && ST.cfg.voz) hablar(['Ahora leeré las preguntas en voz alta.']); };
}
function iniciaAjustes() {
  tog('t-snd', 'snd'); tog('t-vib', 'vib'); tog('t-mov', 'mov'); tog('t-big', 'grande'); tog('t-conf', 'conf');
  tog('t-contraste', 'contraste'); tog('t-voz', 'voz'); tog('t-lento', 'lento'); tog('t-elegir', 'elegir'); tog('t-dib', 'dib');
  [['f-normal', 'normal'], ['f-facil', 'facil'], ['f-dis', 'dislexia']].forEach(function (p) {
    $(p[0]).onclick = function () { ST.cfg.fuente = p[1]; aplicarCfg(); guardar(); renderSet(); };
  });
  [['th-auto', 'auto'], ['th-neutro', 'neutro'], ['th-claro', 'claro'], ['th-noche', 'noche']].forEach(function (p) {
    $(p[0]).onclick = function () { ST.cfg.tema = p[1]; aplicarCfg(); guardar(); renderSet(); };
  });
  $('b-set').onclick = function () { go('set'); }; $('set-back').onclick = function () { go('home'); };
  /* Respaldo: archivo descargable (lo normal) o código de texto (otra forma). Nada se envía a ningún lado. */
  var pendiente = null;
  function ultimoRespaldo() {
    var e = $('bk-ultimo'); if (!e) return;
    e.textContent = !ST.respaldo ? 'Todavía no has hecho un respaldo.' : ST.respaldo === fechaHoy() ? 'Último respaldo: hoy.' : 'Último respaldo: hace ' + difDias(ST.respaldo, fechaHoy()) + ' días.';
  }
  window.ultimoRespaldo = ultimoRespaldo;
  $('bk-bajar').onclick = function () {
    ST.respaldo = fechaHoy(); var txt = exportarTodo(), ok = false;
    if (!window.REPASO_DEMO) try {   /* en la versión de demostración (dentro de una página que bloquea descargas) se muestra el código en su lugar */
      var blob = new Blob([txt], { type: 'application/json' }), u = URL.createObjectURL(blob), a = document.createElement('a');
      a.href = u; a.download = 'citlalab-respaldo-' + fechaHoy() + '.json'; document.body.appendChild(a); a.click(); a.remove();
      setTimeout(function () { URL.revokeObjectURL(u); }, 4000); ok = true;
    } catch (e) {}
    if (ok) { ST.respaldo = fechaHoy(); guardar(); ultimoRespaldo(); $('bk-msg').textContent = 'Listo: se descargó un archivo. Guárdalo en un lugar seguro (en tu celular lo encuentras en "Archivos" o "Descargas"). Para recuperarlo, usa "Restaurar desde archivo".'; }
    else { var t = $('bk'); t.value = btoa(unescape(encodeURIComponent(txt))); $('bk-det').open = true; $('bk-msg').textContent = 'Este navegador no deja descargar archivos. Copia el código del recuadro y guárdalo en un lugar seguro.'; }
  };
  $('bk-abrir').onclick = function () { $('bk-arch').value = ''; $('bk-arch').click(); };
  $('bk-arch').onchange = function () {
    var f = this.files && this.files[0]; if (!f) return;
    /* Solo se leen archivos de texto de respaldo. Fotos, videos, audios y cualquier otro tipo se rechazan SIN abrirlos. */
    var nom = String(f.name || '').toLowerCase(), tipo = String(f.type || '').toLowerCase();
    var esTexto = /\.(json|txt)$/.test(nom) && (!tipo || tipo === 'application/json' || tipo === 'text/plain');
    if (!esTexto) { $('bk-msg').textContent = 'Ese archivo no es un respaldo. Elige el archivo .json que descargaste desde Citlalab (no fotos ni videos).'; return; }
    if (f.size > 1000000) { $('bk-msg').textContent = 'Ese archivo es demasiado grande para ser un respaldo de Citlalab.'; return; }
    var rd = new FileReader();
    rd.onload = function () { preparaRestaurar(String(rd.result)); };
    rd.onerror = function () { $('bk-msg').textContent = 'No se pudo leer ese archivo.'; };
    rd.readAsText(f);
  };
  function preparaRestaurar(txt) {
    var r = leerRespaldo(txt);
    if (!r) { pendiente = null; $('bk-conf').hidden = true; $('bk-msg').textContent = 'Ese archivo o código no sirve. Revisa que sea un respaldo de Citlalab y que esté completo.'; return; }
    pendiente = r; $('bk-conf').hidden = false;
    $('bk-conf-t').textContent = 'Encontré un respaldo con ' + r.ids.length + (r.ids.length === 1 ? ' perfil' : ' perfiles') + (r.fecha ? ' (hecho el ' + r.fecha.split('-').reverse().join('/') + ')' : '') + '. Al restaurarlo se reemplaza el avance que hay ahora en este dispositivo.';
    $('bk-msg').textContent = ''; $('bk-si').focus();
  }
  $('bk-si').onclick = function () {
    if (!pendiente) return;
    if (aplicarRespaldo(pendiente)) {
      pendiente = null; $('bk-conf').hidden = true; petKey = ''; aplicarCfg();
      if (!tieneMascotas()) { primeraVez(); return; }
      ORDEN.forEach(function (id) { if (ST.m[id]) { sincronizar(ST.m[id], id); sincronizarSellos(ST.m[id], id); } });
      guardar(); todo(); go('home'); chequearEvolucion();
    } else $('bk-msg').textContent = 'No se pudo restaurar. Tu avance actual no se tocó.';
  };
  $('bk-no').onclick = function () { pendiente = null; $('bk-conf').hidden = true; };
  $('bk-copiar').onclick = function () {
    var c = btoa(unescape(encodeURIComponent(exportarTodo()))), t = $('bk'); t.value = c;
    copiarTexto(c, t, function (ok) { ST.respaldo = fechaHoy(); guardar(); ultimoRespaldo(); $('bk-msg').textContent = ok ? 'Código copiado. Guárdalo en un lugar seguro (por ejemplo, mándatelo en un mensaje).' : 'Copia el código del recuadro y guárdalo en un lugar seguro.'; });
  };
  $('bk-restaurar').onclick = function () {
    var c = $('bk').value.trim(); if (!c) { $('bk-msg').textContent = 'Pega primero tu código de respaldo en el recuadro.'; return; }
    preparaRestaurar(c);
  };
  $('bk-borrar').onclick = function () {
    if (this.dataset.seguro !== '1') { this.dataset.seguro = '1'; this.textContent = 'Toca otra vez para borrar todo'; var b = this; setTimeout(function () { b.dataset.seguro = ''; b.textContent = 'Borrar mi progreso'; }, 4000); return; }
    borrarTodo(); petKey = ''; primeraVez();
  };
}

/* ============ PRIMERA VEZ ============ */
function origenMini(m, c) {
  return '<svg viewBox="22 28 156 156" aria-hidden="true" style="--bc:' + c + '">' + origenMk(m.creature, .5) + '</svg>';
}
var generoElegido = null;
/* Vista previa viva de la mascota con la carita del personaje elegido (ids únicos para no chocar con la mascota del cuarto) */
function miniPetVivo(m, g, sx) {
  var suf = '-' + (sx || 'ob') + '-' + m.id, s = buildPet(m.creature, 1), ids = [];
  s.replace(/id="([A-Za-z0-9_]+)"/g, function (x, i) { ids.push(i); return x; });
  ids.forEach(function (i) { s = s.split('id="' + i + '"').join('id="' + i + suf + '"').split('url(#' + i + ')').join('url(#' + i + suf + ')'); });
  var c = COLORES.filter(function (x) { return x.id === m.col; })[0], d = el('div'); d.innerHTML = '<svg viewBox="-12 8 224 190" aria-hidden="true" style="--bc:' + c.c + '">' + s + '</svg>';
  var q = function (i) { return d.querySelector('#' + i + suf); };
  q('gb1').setAttribute('stop-color', c.l); q('gb2').setAttribute('stop-color', c.c);
  q('gEyes').innerHTML = ojosMarkup('redondos'); q('gLash').innerHTML = g === 'f' ? LASH : ''; q('gBrow').innerHTML = g === 'm' ? BROW : '';
  q('gMouth').innerHTML = '<path d="M89 120 Q100 132 111 120" fill="none" stroke="#2a2f45" stroke-width="4" stroke-linecap="round"/>';
  return d.innerHTML;
}
function pintaObEggs() {
  var h = $('ob-eggs'); h.innerHTML = '';
  ORDEN.forEach(function (id) {
    var m = MAT[id], d = el('button', 'obegg' + (generoElegido ? ' vivo' : '')), c = COLORES.filter(function (x) { return x.id === m.col; })[0].c;
    d.type = 'button'; d.style.setProperty('--c', m.brand);
    d.setAttribute('aria-label', m.n + ': ' + (m.names[generoElegido || 'n']) + '. Tócala para saludarla');
    d.innerHTML = (generoElegido ? miniPetVivo(m, generoElegido) : origenMini(m, c)) + '<b>' + m.names[generoElegido || 'n'] + '</b><small>' + m.n + ' · empieza como ' + m.orig.n.toLowerCase() + '</small>';
    d.onclick = function () {
      d.classList.remove('hop'); void d.offsetWidth; d.classList.add('hop'); SFX.pop();
      var n = m.names[generoElegido || 'n'], sy = $('ob-say'); sy.hidden = false; sy.textContent = n + ': ' + m.orig.ini;
    };
    h.appendChild(d);
  });
}
function primeraVez() {
  generoElegido = null; aplicarCfg(); go('ob0');
  $('ob-say').hidden = true; pintaObEggs();
  var sg = $('seg0'); sg.innerHTML = '';
  [['f', 'Niña'], ['m', 'Niño']].forEach(function (p) {
    var b = el('button', '', p[1]); b.setAttribute('role', 'radio'); b.setAttribute('aria-checked', 'false');
    b.onclick = function () {
      var cambio = generoElegido !== p[0]; generoElegido = p[0];
      sg.querySelectorAll('button').forEach(function (x) { x.setAttribute('aria-checked', x === b ? 'true' : 'false'); });
      $('ob-go').disabled = false; SFX.pop();
      if (cambio) { pintaObEggs(); document.querySelectorAll('#ob-eggs .obegg').forEach(function (e, i) { e.style.animationDelay = (i * 90) + 'ms'; e.classList.add('hop'); });
        var sy = $('ob-say'); sy.hidden = false; sy.textContent = MAT[ORDEN[0]].names[p[0]] + ', ' + MAT[ORDEN[1]].names[p[0]] + ' y ' + MAT[ORDEN[2]].names[p[0]] + ' ya te esperan. Toca a cada una para saludarla.'; }
    };
    sg.appendChild(b);
  });
  $('ob-go').disabled = true;
}
$('ob-go').onclick = function () {
  if (!generoElegido) return; ST.genero = generoElegido; ST.activa = ORDEN[0];
  ORDEN.forEach(function (id) { ST.m[id] = nuevoMat(id, generoElegido); });
  guardar(); petKey = ''; todo(); go('home');
  say(cur().name + ': ' + MAT[ST.activa].orig.ini); SFX.pop();
};

/* ============ ARRANQUE ============ */
function eventosBase() {
  $('brand').onclick = function () { if (!tieneMascotas()) return; if (vistaActual === 'home') window.scrollTo(0, 0); else go('home'); };
  document.querySelectorAll('.nav button').forEach(function (b) { b.onclick = function () { go(b.dataset.v); }; });
  document.querySelectorAll('#tabs .tab').forEach(function (t) { t.onclick = function () { tab = t.dataset.t; renderCustom(); }; });
  $('nm').oninput = function () { cur().name = this.value.slice(0, 14); guardar(); };
  $('nm').onchange = function () { if (!this.value.trim()) { this.value = MAT[ST.activa].names[cur().gender] || MAT[ST.activa].names.n; cur().name = this.value; guardar(); } say(cur().name + ': ¡Me gusta mi nombre!'); };
  window.addEventListener('pagehide', function () { silenciarTodo(); guardar(); });
  document.addEventListener('visibilitychange', function () { if (document.hidden) { silenciarTodo(); guardar(); } else if (tieneMascotas() && vistaActual === 'home') { actualizarTiempo(cur()); renderHome(); } });
}
function arrancar() {
  cargarEstado(); indexar(); aplicarCfg(); iniciaToques(); iniciaAjustes(); eventosBase();
  var q = location.search;
  if (!tieneMascotas()) { primeraVez(); }
  else {
    ORDEN.forEach(function (id) { var s = ST.m[id]; actualizarTiempo(s); sincronizar(s, id); sincronizarSellos(s, id); });
    guardar(); todo(); go('home'); setTimeout(chequearEvolucion, 500);
  }
  if (q.indexOf('demo=1') > -1) demo();
  if (q.indexOf('revisar=1') > -1) revisar();
}

/* ============ CRÉDITOS (se editan en js/catalogo.js, objeto CREDITOS) ============ */
var ICO_CRED = {
  idea: '<svg viewBox="0 0 32 32" aria-hidden="true"><path d="M16 4a8 8 0 0 0-4.6 14.5c.9.7 1.4 1.5 1.4 2.5v1h6.4v-1c0-1 .5-1.8 1.4-2.5A8 8 0 0 0 16 4z" fill="#ffd54a" stroke="#c98a00" stroke-width="1.6" stroke-linejoin="round"/><path d="M13 25.5h6M14 28h4" stroke="#7a8599" stroke-width="2" stroke-linecap="round"/><path d="M16 9v4m-2-2h4" stroke="#fff" stroke-width="1.6" stroke-linecap="round"/></svg>',
  codigo: '<svg viewBox="0 0 32 32" aria-hidden="true"><rect x="3" y="6" width="26" height="20" rx="4" fill="#4a67ee"/><path d="M12 12l-4 4 4 4M20 12l4 4-4 4" fill="none" stroke="#fff" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/><path d="M17.5 11l-3 10" stroke="#ffd54a" stroke-width="2" stroke-linecap="round"/></svg>',
  estrella: '<svg viewBox="0 0 32 32" aria-hidden="true"><path d="M16 4l3.6 7.6 8.2 1-6 5.7 1.6 8.2L16 22.4 8.6 26.5l1.6-8.2-6-5.7 8.2-1z" fill="#ffb830" stroke="#d68a00" stroke-width="1.5" stroke-linejoin="round"/></svg>'
};
function unir(l) { return l.length < 2 ? l.join('') : l.slice(0, -1).join(', ') + ' y ' + l[l.length - 1]; }
function pintarCreditos() {
  var C = window.CREDITOS || {}, eq = (C.equipo || []).filter(function (p) { return p && p.nombre; });
  var btn = $('creditos'), q = $('quien-t'), vr = $('ver-app'); if (vr && typeof APP_VERSION !== 'undefined') vr.textContent = 'Citlalab · versión ' + APP_VERSION;
  if (btn) {
    btn.hidden = !eq.length; btn.innerHTML = '';
    var ic = el('span', 'cr-mini'); ic.innerHTML = '<svg viewBox="0 0 44 16" aria-hidden="true"><line x1="9" y1="8" x2="35" y2="8" stroke="currentColor" stroke-width="1.4" stroke-dasharray="1.5 3" stroke-linecap="round"/><path d="M8 1 L9.800 6.200 L15 8 L9.800 9.800 L8 15 L6.200 9.800 L1 8 L6.200 6.200 Z" fill="#ffb830"/><path d="M36 1 L37.800 6.200 L43 8 L37.800 9.800 L36 15 L34.200 9.800 L29 8 L34.200 6.200 Z" fill="#ffb830"/></svg>';
    var tx = el('span', 'cr-tx'); tx.appendChild(document.createTextNode((C.titulo || '').replace(/…$/, '').trim())); tx.appendChild(document.createElement('br'));
    eq.forEach(function (p, i) { var b = el('b', '', p.nombre.replace(/ /g, '\u00a0')); tx.appendChild(b); if (p.corto) tx.appendChild(document.createTextNode(' (' + p.corto.replace(/ /g, '\u00a0') + ')')); if (i < eq.length - 2) tx.appendChild(document.createTextNode(', ')); else if (i === eq.length - 2) tx.appendChild(document.createTextNode(' y ')); });
    btn.appendChild(ic); btn.appendChild(tx); btn.appendChild(el('span', 'cr-ch', '›')); btn.setAttribute('aria-label', 'Quiénes hicimos Citlalab: abrir');
  }
  if (q) {
    var partes = eq.map(function (p) { return (p.rol ? p.rol + ': ' : '') + (p.familias || p.nombre) + '.'; });
    q.textContent = eq.length ? partes.join(' ') + ' La app se hizo para el repaso de sus estudiantes.' : '';
  }
}
pintarCreditos();
