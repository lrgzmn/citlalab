/* JUEGOS PROPIOS DE FÍSICA
   "Convierte la unidad" (prefijos del SI), "Cambios de estado" (partículas) y "Línea del tiempo del átomo".
   Solo aparecen en Física: se registran con data/fisica/juegos.js. Usan ayudas de juegos2.js (premio2, cierra2, barra2, aviso2, marcaOpts). */

VISTAS.conv = { rt: 1 }; VISTAS.est = { rt: 1 }; VISTAS.tl = { rt: 1 };

/* ---------- motor de opción múltiple (conv y est) ---------- */
var mc = null;
function mcInicia(pre, vista, pasos, titulo) {
  mc = { pre: pre, pasos: pasos, i: 0, ok: 0, xp: 0, et0: etapa(cur()), hecho: false, titulo: titulo };
  go(vista); mcPinta();
}
function mcPinta() {
  var p = mc.pasos[mc.i], pre = mc.pre, bins = $(pre + '-bins'); mc.hecho = false;
  barra2(pre, mc.i, mc.pasos.length);
  $(pre + '-tag').textContent = p.tag; $(pre + '-card').innerHTML = p.card; $(pre + '-q').textContent = p.q;
  bins.innerHTML = ''; $(pre + '-fb').hidden = true; $(pre + '-next').hidden = true;
  mezclar(p.opts.map(function (o, k) { return { t: o.t, ok: o.ok, k: k }; })).forEach(function (o) {
    var b = el('button', 'opt', o.t); b.dataset.g = o.ok ? 'ok' : 'x' + o.k;
    b.onclick = function () { mcResponde(o, b); }; bins.appendChild(b);
  });
}
function mcResponde(o, b) {
  if (mc.hecho) return; mc.hecho = true;
  var p = mc.pasos[mc.i], pre = mc.pre;
  marcaOpts($(pre + '-bins'), b.dataset.g, 'ok');
  if (o.ok) { mc.ok++; var x = premio2(pre + '|' + mc.i, PTS[pre]); mc.xp += x; SFX.ok(); vibra(20); cierra2(); if (x) flotar('+' + x + ' XP'); }
  else { SFX.no(); vibra(30); }
  aviso2($(pre + '-fb'), o.ok, o.ok ? '¡Muy bien!' : 'Casi', p.expl);
  var n = $(pre + '-next'); n.hidden = false; n.textContent = mc.i === mc.pasos.length - 1 ? 'Ver resultado' : 'Siguiente'; n.scrollIntoView({ block: 'nearest' });
}
function mcSigue() {
  if (mc.i < mc.pasos.length - 1) { mc.i++; mcPinta(); return; }
  var perf = mc.ok === mc.pasos.length;
  fin({ titulo: perf ? '¡Todo correcto!' : mc.titulo, et0: mc.et0, festejo: perf, filas: [['Respuestas correctas', mc.ok + ' de ' + mc.pasos.length], ['Puntos ganados', '+' + mc.xp + ' XP']] });
}
$('conv-next').onclick = mcSigue; $('est-next').onclick = mcSigue;
$('conv-exit').onclick = function () { go('home'); }; $('est-exit').onclick = function () { go('home'); };

/* =========================================================
   CONVIERTE LA UNIDAD  (ficha 5: múltiplos, submúltiplos y notación científica)
   Las cuentas se hacen con potencias de diez enteras, sin decimales de computadora.
   ========================================================= */
var PRE_SI = { T: { n: 'tera', e: 12 }, G: { n: 'giga', e: 9 }, M: { n: 'mega', e: 6 }, k: { n: 'kilo', e: 3 }, h: { n: 'hecto', e: 2 }, '': { n: '', e: 0 },
  c: { n: 'centi', e: -2 }, m: { n: 'mili', e: -3 }, 'µ': { n: 'micro', e: -6 }, n: { n: 'nano', e: -9 } };
var MAG_SI = [
  { u: 'm', pre: ['k', 'h', '', 'c', 'm', 'µ', 'n'] },
  { u: 'g', pre: ['M', 'k', 'h', '', 'm', 'µ'] },
  { u: 's', pre: ['', 'm', 'µ', 'n'] },
  { u: 'Hz', pre: ['', 'k', 'M', 'G'] },
  { u: 'A', pre: ['', 'm', 'µ'] }
];
var MANT_SI = ['2', '3', '4', '5', '7', '8', '1.5', '2.5', '4.5', '0.5', '12', '25'];
var SUP = { '-': '⁻', '0': '⁰', '1': '¹', '2': '²', '3': '³', '4': '⁴', '5': '⁵', '6': '⁶', '7': '⁷', '8': '⁸', '9': '⁹' };
function supe(n) { return String(n).split('').map(function (c) { return SUP[c]; }).join(''); }
/* mantisa en texto (p. ej. "2.5") por 10^e -> dígitos y exponente del primer dígito */
function digitosDe(mant, e) {
  var q = mant.split('.'), dec = q[1] ? q[1].length : 0, dig = (q[0] + (q[1] || '')).replace(/^0+/, '');
  if (!dig) dig = '0'; dig = dig.replace(/0+$/, '') || '0';
  return { d: dig, p: (q[0] + (q[1] || '')).replace(/^0+/, '').length - 1 + (e - dec) };   /* p = exponente del primer dígito */
}
function esSci(mant, e) { var p = digitosDe(mant, e).p; return p >= 8 || p <= -5; }
function numTxt(mant, e, sci) {
  var x = digitosDe(mant, e), d = x.d, p = x.p;
  if (sci === undefined) sci = esSci(mant, e);
  if (sci) return (d.length > 1 ? d[0] + '.' + d.slice(1) : d) + ' × 10' + supe(p);
  var s;
  if (p >= 0) { s = d.length - 1 <= p ? d + new Array(p - d.length + 2).join('0') : d.slice(0, p + 1) + '.' + d.slice(p + 1); }
  else s = '0.' + new Array(-p).join('0') + d;
  var q = s.split('.'); if (q[0].length >= 4) q[0] = q[0].replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
  return q.join('.');
}
function uni(pr, u) { return pr + u; }
function generaConv() {
  var pasos = [], usados = {}, t = 0;
  while (pasos.length < 8 && t++ < 200) {
    var M = MAG_SI[Math.floor(Math.random() * MAG_SI.length)], a = elegirUno(M.pre), b = elegirUno(M.pre);
    if (a === b) continue;
    var d = PRE_SI[a].e - PRE_SI[b].e; if (Math.abs(d) > 9 || Math.abs(d) < 1) continue;
    var m = elegirUno(MANT_SI), clave = m + a + b + M.u; if (usados[clave]) continue; usados[clave] = 1;
    var UA = uni(a, M.u), UB = uni(b, M.u);
    var cand = mezclar([-d, d + 1, d - 1, d + 2, d - 2, d + 3, d - 3]), sci = esSci(m, d);
    if (!sci) { var llanos = cand.filter(function (s) { return !esSci(m, s); }); if (llanos.length >= 3) cand = llanos; else sci = true; }
    cand = cand.slice(0, 5);
    var res = numTxt(m, d, sci), correcta = res + ' ' + UB;
    var distr = [], vistos = {}; vistos[correcta] = 1;
    cand.forEach(function (s) { var tx = numTxt(m, s, sci) + ' ' + UB; if (!vistos[tx] && distr.length < 3) { vistos[tx] = 1; distr.push(tx); } });
    if (distr.length < 3) continue;
    var f1 = numTxt('1', Math.abs(d), false), expl;
    if (d > 0) expl = '1 ' + UA + ' = ' + f1 + ' ' + UB + ', así que se multiplica por ' + f1 + ': ' + m + ' ' + UA + ' = ' + res + ' ' + UB + '.';
    else expl = '1 ' + UB + ' = ' + f1 + ' ' + UA + ', así que se divide entre ' + f1 + ': ' + m + ' ' + UA + ' = ' + res + ' ' + UB + '.';
    var pa = PRE_SI[a], pb = PRE_SI[b];
    var chips = [pa, pb].map(function (pp, k) { var sim = k ? b : a; return '<span>' + (sim === '' ? 'sin prefijo = 10⁰' : sim + ' = ' + pp.n + ' = 10' + supe(pp.e)) + '</span>'; }).join('');
    pasos.push({ tag: 'Convierte la unidad', card: '<b>' + m + ' ' + UA + ' = ? ' + UB + '</b><div class="plchips">' + chips + '</div>', q: '¿Cuál es el resultado?',
      opts: [{ t: correcta, ok: true }].concat(distr.map(function (x) { return { t: x, ok: false }; })), expl: expl });
  }
  return pasos;
}
function elegirUno(a) { return a[Math.floor(Math.random() * a.length)]; }
function iniciarConv() { mcInicia('conv', 'conv', generaConv(), '¡Buenas conversiones!'); }

/* =========================================================
   CAMBIOS DE ESTADO  (ficha 10: los seis cambios y las partículas)
   ========================================================= */
var CAMBIOS = {
  fusion: { n: 'Fusión', de: 'sólido', a: 'líquido', abs: true },
  solid: { n: 'Solidificación', de: 'líquido', a: 'sólido', abs: false },
  vapor: { n: 'Vaporización', de: 'líquido', a: 'gas', abs: true },
  conden: { n: 'Condensación', de: 'gas', a: 'líquido', abs: false },
  subli: { n: 'Sublimación', de: 'sólido', a: 'gas', abs: true },
  depos: { n: 'Deposición', de: 'gas', a: 'sólido', abs: false }
};
var ESCENAS = [
  ['El hielo de un vaso se convierte en agua a temperatura ambiente.', 'fusion'],
  ['Una vela encendida se derrite.', 'fusion'],
  ['El agua de una charola en el congelador se convierte en hielo.', 'solid'],
  ['La lava de un volcán se enfría y se vuelve roca.', 'solid'],
  ['El agua de una olla pasa a vapor al hervir.', 'vapor'],
  ['La ropa mojada se seca al sol: el agua pasa a vapor.', 'vapor'],
  ['El vapor de agua de la regadera se vuelve gotitas en el espejo frío.', 'conden'],
  ['Aparecen gotas de agua por fuera de un vaso con agua muy fría.', 'conden'],
  ['El hielo seco (dióxido de carbono sólido) pasa directo a gas sin volverse líquido.', 'subli'],
  ['Una bolita de naftalina se hace más pequeña porque pasa directo de sólido a gas.', 'subli'],
  ['El vapor de agua del aire pasa directo a escarcha (hielo) sobre un vidrio muy frío.', 'depos']
];
function particulasSVG(estado) {
  var W = 150, H = 100, c = '', pts = [], i, j;
  if (estado === 'solido') { for (j = 0; j < 4; j++) for (i = 0; i < 6; i++) pts.push([22 + i * 21, 20 + j * 21]); }
  else if (estado === 'liquido') {
    for (j = 0; j < 3; j++) for (i = 0; i < 6; i++) pts.push([22 + i * 21 + (j % 2) * 9 + (Math.random() - .5) * 7, 44 + j * 19 + (Math.random() - .5) * 7]);
  } else {
    var t = 0; while (pts.length < 6 && t++ < 400) {
      var x = 16 + Math.random() * (W - 32), y = 16 + Math.random() * (H - 32), ok = true;
      pts.forEach(function (q) { if (Math.hypot(q[0] - x, q[1] - y) < 38) ok = false; }); if (ok) pts.push([x, y]);
    }
  }
  pts.forEach(function (p) { c += '<circle cx="' + p[0].toFixed(1) + '" cy="' + p[1].toFixed(1) + '" r="8.5" fill="var(--brand)" stroke="#fff" stroke-width="2"/><ellipse cx="' + (p[0] - 2.5).toFixed(1) + '" cy="' + (p[1] - 3).toFixed(1) + '" rx="2.6" ry="1.6" fill="#fff" opacity=".6"/>'; });
  if (estado === 'gas') pts.forEach(function (p, k) { var a = k * 1.1; c += '<path d="M' + (p[0] + 11 * Math.cos(a)).toFixed(1) + ' ' + (p[1] + 11 * Math.sin(a)).toFixed(1) + ' l' + (9 * Math.cos(a)).toFixed(1) + ' ' + (9 * Math.sin(a)).toFixed(1) + '" stroke="#e08a2e" stroke-width="2.4" stroke-linecap="round"/>'; });
  return '<svg viewBox="0 0 ' + W + ' ' + H + '" class="spsvg" role="img" aria-label="Dibujo de partículas"><rect x="2" y="2" width="' + (W - 4) + '" height="' + (H - 4) + '" rx="8" fill="var(--surf)" stroke="var(--line)" stroke-width="2.5"/>' + c + '</svg>';
}
var EXPL_EST = {
  solido: 'En un sólido las partículas están muy juntas, ordenadas, y solo vibran en su lugar.',
  liquido: 'En un líquido las partículas están juntas pero desordenadas, y se deslizan unas sobre otras.',
  gas: 'En un gas las partículas están muy separadas y se mueven libremente en todas direcciones.'
};
function generaEstados() {
  var pasos = [], N = { solido: 'Sólido', liquido: 'Líquido', gas: 'Gas' };
  mezclar(['solido', 'liquido', 'gas']).slice(0, 2).forEach(function (e) {
    pasos.push({ tag: 'Mira las partículas', card: particulasSVG(e), q: '¿Qué estado de la materia representa el dibujo?',
      opts: ['solido', 'liquido', 'gas'].map(function (k) { return { t: N[k], ok: k === e }; }), expl: EXPL_EST[e] });
  });
  var vistos = {}, esc4 = [];
  mezclar(ESCENAS).forEach(function (x) { if (esc4.length < 4 && !vistos[x[1]]) { vistos[x[1]] = 1; esc4.push(x); } });
  esc4.forEach(function (x) {
    var c = CAMBIOS[x[1]], otros = mezclar(Object.keys(CAMBIOS).filter(function (k) { return k !== x[1]; })).slice(0, 3);
    pasos.push({ tag: '¿Qué cambio es?', card: '<b style="font-size:1.1rem;line-height:1.35">' + esc(x[0]) + '</b>', q: '¿Cómo se llama el cambio de estado?',
      opts: [{ t: c.n, ok: true }].concat(otros.map(function (k) { return { t: CAMBIOS[k].n, ok: false }; })), expl: c.n + ': de ' + c.de + ' a ' + c.a + '.' });
  });
  mezclar(Object.keys(CAMBIOS)).slice(0, 2).forEach(function (k) {
    var c = CAMBIOS[k];
    pasos.push({ tag: 'Energía y partículas', card: '<b>' + c.n + '</b><span style="color:var(--soft);font-weight:700">de ' + c.de + ' a ' + c.a + '</span>', q: 'En este cambio, ¿la materia absorbe o libera energía (calor)?',
      opts: [{ t: 'Absorbe energía', ok: c.abs }, { t: 'Libera energía', ok: !c.abs }],
      expl: c.abs ? 'En la ' + c.n.toLowerCase() + ' se agrega energía: las partículas se mueven más y se separan.' : 'En la ' + c.n.toLowerCase() + ' se libera energía: las partículas se mueven menos y se acercan.' });
  });
  return mezclar(pasos);
}
function iniciarEstados() { mcInicia('est', 'est', generaEstados(), '¡Buen trabajo con los estados!'); }

/* =========================================================
   LÍNEA DEL TIEMPO DEL ÁTOMO  (ficha 7)
   ========================================================= */
var HITOS = [
  { n: 'Demócrito', i: 'La materia está hecha de átomos indivisibles y vacío.', y: 'hace más de 2 000 años' },
  { n: 'Dalton', i: 'Retomó la idea del átomo, como una esfera indivisible.', y: '1803' },
  { n: 'Thomson', i: 'Descubrió el electrón.', y: '1897' },
  { n: 'Rutherford', i: 'Descubrió que el átomo tiene un núcleo.', y: '1911' },
  { n: 'Bohr', i: 'Propuso que los electrones giran en órbitas.', y: '1913' },
  { n: 'Chadwick', i: 'Descubrió el neutrón.', y: '1932' }
];
var tl = null;
function iniciarLinea() {
  tl = { k: 0, fallos: {}, ok: 0, xp: 0, et0: etapa(cur()), orden: mezclar(HITOS.map(function (h, i) { return i; })) };
  go('tl'); pintaLinea();
}
function pintaLinea() {
  var line = $('tl-line'), hand = $('tl-hand'); line.innerHTML = ''; hand.innerHTML = ''; $('tl-fb').hidden = true;
  barra2('tl', Math.min(tl.k, HITOS.length - 1), HITOS.length); $('tl-pr').style.width = (tl.k / HITOS.length * 100) + '%'; $('tl-cnt').textContent = tl.k + '/' + HITOS.length;
  for (var i = 0; i < tl.k; i++) { var li = el('li', 'tlok'); li.innerHTML = '<span class="yr">' + HITOS[i].y + '</span><span><b>' + HITOS[i].n + '</b><br>' + esc(HITOS[i].i) + '</span>'; line.appendChild(li); }
  if (tl.k < HITOS.length) { var nx = el('li', 'tlnext'); nx.innerHTML = '<span class="yr">¿?</span><span>Aquí va el más antiguo de los que faltan</span>'; line.appendChild(nx); }
  tl.orden.filter(function (i) { return i >= tl.k; }).forEach(function (i) {
    var b = el('button', 'opt tlcard'); b.innerHTML = '<b>' + HITOS[i].n + '</b><small>' + esc(HITOS[i].i) + '</small>'; b.onclick = function () { eligeHito(i, b); }; hand.appendChild(b);
  });
}
function eligeHito(i, b) {
  if (i === tl.k) {
    var h = HITOS[i], primera = !tl.fallos[i], x = 0; if (primera) { tl.ok++; x = premio2('tl|' + h.n, PTS.tl); tl.xp += x; }
    SFX.ok(); vibra(20); cierra2(); if (x) flotar('+' + x + ' XP'); tl.k++; pintaLinea();
    if (tl.k === HITOS.length) {
      var perf = tl.ok === HITOS.length; confeti(perf ? 40 : 18);
      setTimeout(function () { fin({ titulo: perf ? '¡Línea perfecta!' : '¡Línea completa!', et0: tl.et0, festejo: perf, filas: [['Colocados a la primera', tl.ok + ' de ' + HITOS.length], ['Puntos ganados', '+' + tl.xp + ' XP']] }); }, 900);
    }
  } else {
    tl.fallos[tl.k] = 1; SFX.no(); vibra(30); sacude2(b);
    aviso2($('tl-fb'), false, 'Todavía no', 'Ese fue después. Piensa qué se propuso o descubrió primero.');
  }
}
$('tl-exit').onclick = function () { go('home'); };

/* ---------- registro en la lista de juegos (solo Física los usa, por data/fisica/juegos.js) ---------- */
JUEGOS.conv = { titulo: 'Convierte la unidad', sub: 'Pasa de km a m, de mg a g y más con los prefijos del SI.', iniciar: function () { iniciarConv(); },
  ico: '<svg viewBox="0 0 48 48"><rect x="4" y="18" width="40" height="14" rx="4" fill="var(--brand-soft)" stroke="var(--brand)" stroke-width="2.5"/><path d="M12 18 V25 M20 18 V23 M28 18 V25 M36 18 V23" stroke="var(--brand)" stroke-width="2.5" stroke-linecap="round"/><path d="M10 10 H34 M30 6 L36 10 L30 14" fill="none" stroke="#ff8f6b" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M38 40 H14 M18 36 L12 40 L18 44" fill="none" stroke="#2fbf86" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/></svg>' };
JUEGOS.estados = { titulo: 'Cambios de estado', sub: 'Mira las partículas y descubre qué cambio ocurre.', iniciar: function () { iniciarEstados(); },
  ico: '<svg viewBox="0 0 48 48"><g fill="var(--brand)" stroke="#fff" stroke-width="1.5"><circle cx="9" cy="35" r="4.5"/><circle cx="18" cy="35" r="4.5"/><circle cx="9" cy="43" r="4.5"/><circle cx="18" cy="43" r="4.5"/><circle cx="32" cy="14" r="4.5"/><circle cx="42" cy="22" r="4.5"/><circle cx="26" cy="26" r="4.5"/></g><path d="M22 38 C 30 38, 34 34, 36 30" fill="none" stroke="#e08a2e" stroke-width="2.5" stroke-linecap="round"/><path d="M33 29 L37 29 L36 33" fill="none" stroke="#e08a2e" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/></svg>' };
JUEGOS.linea = { titulo: 'Línea del tiempo del átomo', sub: 'Ordena a los científicos del más antiguo al más reciente.', iniciar: function () { iniciarLinea(); },
  ico: '<svg viewBox="0 0 48 48"><path d="M4 24 H44" stroke="var(--brand)" stroke-width="3" stroke-linecap="round"/><circle cx="10" cy="24" r="4.5" fill="#ffb830"/><circle cx="24" cy="24" r="4.5" fill="#ff6b6b"/><circle cx="38" cy="24" r="4.5" fill="#4f8cff"/><path d="M10 18 V10 M24 18 V6 M38 18 V12" stroke="#aab4c8" stroke-width="2.5" stroke-linecap="round"/></svg>' };
