/* JUEGOS NUEVOS DE BIOLOGÍA Y QUÍMICA
   Biología: "Plato del Bien Comer" y "Neurona y sinapsis".
   Química: "Separar la mezcla" y "Preparar la disolución".
   Se apoyan en las funciones de app.js (go, fin, SFX, etc.) y se cargan después de ella.
   Los datos están en data/biologia/juegos.js y data/quimica/juegos.js. */

VISTAS.plato = { rt: 1 }; VISTAS.neuro = { rt: 1 }; VISTAS.sep = { rt: 1 }; VISTAS.dis = { rt: 1 };

/* ---- ayudas comunes ---- */
function premio2(clave, pts) {
  var s = cur(), k = 'g2|' + clave, hoy = fechaHoy();
  if (s.ult[k] === hoy) return 0;
  s.ult[k] = hoy; return darXP(s, pts);
}
function cierra2() { var s = cur(); marcarDia(); actualizarTiempo(s); s.feli = Math.min(100, s.feli + 5); guardar(); renderPet(); }
function barra2(pre, i, n) { $(pre + '-cnt').textContent = (i + 1) + '/' + n; $(pre + '-pr').style.width = (i / n * 100) + '%'; }
function aviso2(fb, ok, titulo, texto) {
  fb.hidden = false; fb.className = 'fb ' + (ok ? 'good' : 'nope'); fb.innerHTML = '';
  fb.appendChild(el('strong', '', titulo)); fb.appendChild(document.createTextNode(texto || ''));
}
function sacude2(nodo) { nodo.classList.remove('shk'); void nodo.offsetWidth; nodo.classList.add('shk'); setTimeout(function () { nodo.classList.remove('shk'); }, 650); }

/* =========================================================
   PLATO DEL BIEN COMER
   ========================================================= */
var GR_PL = { vf: 'Verduras y frutas', ce: 'Cereales', la: 'Leguminosas y alimentos de origen animal', fu: 'De vez en cuando' };
var pl = null;
function iniciarPlato(j) {
  var s = cur(), todos = mezclar(j.alimentos), sel = [];
  ['vf', 'ce', 'la', 'fu'].forEach(function (g) { var d = todos.filter(function (a) { return a.g === g; }); if (d.length) sel.push(d[0]); });
  var resto = mezclar(todos.filter(function (a) { return sel.indexOf(a) < 0; })).slice(0, 3);
  var pasos = mezclar(sel.concat(resto)).map(function (a) { return { k: 'a', a: a }; });
  mezclar(j.menus).slice(0, 2).forEach(function (m) { pasos.push({ k: 'm', m: m }); });
  pl = { j: j, pasos: pasos, i: 0, okA: 0, nA: 0, okM: 0, nM: 0, xp: 0, et0: etapa(s), hecho: false };
  pl.nA = pasos.filter(function (p) { return p.k === 'a'; }).length; pl.nM = pasos.length - pl.nA;
  go('plato'); pintaPlato();
}
function platoSVG() {
  return '<svg viewBox="0 0 80 80" width="76" height="76" aria-hidden="true"><circle cx="40" cy="40" r="34" fill="#fff" stroke="var(--brand)" stroke-width="4"/><circle cx="40" cy="40" r="23" fill="var(--brand-soft)" stroke="var(--line)" stroke-width="2"/></svg>';
}
function grupoDe(j, nombre) {
  for (var i = 0; i < j.alimentos.length; i++) if (j.alimentos[i].n === nombre) return j.alimentos[i].g;
  return null;
}
function pintaPlato() {
  var p = pl.pasos[pl.i], card = $('pl-card'), bins = $('pl-bins'); pl.hecho = false;
  barra2('pl', pl.i, pl.pasos.length); bins.innerHTML = ''; $('pl-fb').hidden = true; $('pl-next').hidden = true;
  if (p.k === 'a') {
    $('pl-tag').textContent = 'Clasifica el alimento';
    card.innerHTML = platoSVG() + '<b>' + esc(p.a.n) + '</b>'; $('pl-q').textContent = '¿En qué grupo va?';
    ['vf', 'ce', 'la', 'fu'].forEach(function (g) {
      var b = el('button', 'opt', GR_PL[g]); b.dataset.g = g; b.onclick = function () { respondePlatoA(g, b); }; bins.appendChild(b);
    });
  } else {
    var presentes = {}; p.m.a.forEach(function (n) { var g = grupoDe(pl.j, n); if (g) presentes[g] = 1; });
    var falta = ['vf', 'ce', 'la'].filter(function (g) { return !presentes[g]; });
    p.resp = falta.length === 0 ? 'ok' : falta.length === 1 ? falta[0] : 'dos'; p.falta = falta;
    $('pl-tag').textContent = '¿Está balanceado el día?';
    card.innerHTML = '<b>' + esc(p.m.t) + '</b><div class="plchips">' + p.m.a.map(function (n) { return '<span>' + esc(n) + '</span>'; }).join('') + '</div>';
    $('pl-q').textContent = '¿Qué grupo le falta a este menú?';
    var ops = [['vf', GR_PL.vf], ['ce', GR_PL.ce], ['la', GR_PL.la], ['dos', 'Le faltan dos grupos'], ['ok', 'Nada: está completo']];
    ops.forEach(function (o) { var b = el('button', 'opt', o[1]); b.dataset.g = o[0]; b.onclick = function () { respondePlatoM(o[0], b); }; bins.appendChild(b); });
  }
}
function marcaOpts(cont, elegida, correcta) {
  Array.prototype.forEach.call(cont.querySelectorAll('.opt'), function (b) {
    b.disabled = true;
    if (b.dataset.g === correcta) b.classList.add('ok'); else if (b.dataset.g === elegida) b.classList.add('bad');
  });
}
function respondePlatoA(g, b) {
  if (pl.hecho) return; pl.hecho = true;
  var p = pl.pasos[pl.i], bien = g === p.a.g; marcaOpts($('pl-bins'), g, p.a.g);
  var txt = p.a.n + ' va en: ' + GR_PL[p.a.g] + '.' + (p.a.g === 'fu' ? ' Tienen mucha azúcar, grasa o sal: no forman parte de los tres grupos del plato.' : '');
  if (bien) { pl.okA++; var x = premio2('plato|' + p.a.n, PTS.plato); pl.xp += x; SFX.ok(); vibra(20); cierra2(); if (x) flotar('+' + x + ' XP'); }
  else { SFX.no(); vibra(30); }
  aviso2($('pl-fb'), bien, bien ? '¡Muy bien!' : 'Casi', txt); finPasoPlato();
}
function respondePlatoM(g, b) {
  if (pl.hecho) return; pl.hecho = true;
  var p = pl.pasos[pl.i], bien = g === p.resp; marcaOpts($('pl-bins'), g, p.resp);
  var txt;
  if (p.resp === 'ok') txt = 'Este menú tiene alimentos de los tres grupos: verduras y frutas, cereales, y leguminosas o alimentos de origen animal.';
  else if (p.resp === 'dos') txt = 'Faltan: ' + p.falta.map(function (x) { return GR_PL[x]; }).join(' y ') + '. Un menú balanceado combina alimentos de los tres grupos.';
  else txt = 'Falta: ' + GR_PL[p.resp] + '. Un menú balanceado combina alimentos de los tres grupos.';
  if (bien) { pl.okM++; var x = premio2('pmenu|' + p.m.t + '|' + p.m.a.join(','), PTS.pmenu); pl.xp += x; SFX.ok(); vibra(20); confeti(14); cierra2(); if (x) flotar('+' + x + ' XP'); }
  else { SFX.no(); vibra(30); }
  aviso2($('pl-fb'), bien, bien ? '¡Muy bien!' : 'Casi', txt); finPasoPlato();
}
function finPasoPlato() {
  var n = $('pl-next'); n.hidden = false; n.textContent = pl.i === pl.pasos.length - 1 ? 'Ver resultado' : 'Siguiente'; n.scrollIntoView({ block: 'nearest' });
}
$('pl-next').onclick = function () {
  if (pl.i < pl.pasos.length - 1) { pl.i++; pintaPlato(); return; }
  var perf = pl.okA === pl.nA && pl.okM === pl.nM;
  fin({ titulo: perf ? '¡Plato perfecto!' : '¡Buen plato!', et0: pl.et0, festejo: perf,
    filas: [['Alimentos bien clasificados', pl.okA + ' de ' + pl.nA], ['Menús bien revisados', pl.okM + ' de ' + pl.nM], ['Puntos ganados', '+' + pl.xp + ' XP']] });
};
$('pl-exit').onclick = function () { go('home'); };

/* =========================================================
   NEURONA Y SINAPSIS
   ========================================================= */
var PARTES_NEU = {
  dend: { n: 'Dendritas', q: 'Toca la parte que recibe las señales de otras neuronas.', e: 'Las dendritas son prolongaciones cortas y ramificadas que reciben señales.' },
  soma: { n: 'Cuerpo celular (soma)', q: 'Toca la parte que contiene el núcleo.', e: 'El cuerpo celular, o soma, contiene el núcleo.' },
  axon: { n: 'Axón', q: 'Toca la prolongación larga por donde viaja el impulso.', e: 'El axón es la prolongación larga por donde viaja el impulso nervioso.' },
  miel: { n: 'Vaina de mielina', q: 'Toca la capa que envuelve al axón y acelera el impulso.', e: 'La mielina envuelve el axón y acelera la conducción del impulso.' },
  term: { n: 'Terminal axónico', q: 'Toca el final de la neurona, donde se liberan los neurotransmisores.', e: 'En el terminal axónico se liberan los neurotransmisores hacia la sinapsis.' }
};
var ANCLA_NEU = { dend: [22, 72], soma: [82, 85], axon: [190, 85], term: [294, 85] };
var RUTA_NEU = ['dend', 'soma', 'axon', 'term'];
var PASOS_SIN = [
  'El impulso llega al final del axón',
  'La neurona libera neurotransmisores',
  'Los neurotransmisores cruzan el espacio de la sinapsis',
  'Se unen a los receptores de la célula siguiente',
  'La célula receptora responde'
];
var nu = null;
function neuronaSVG(conPunto) {
  var z = function (p, n, cont) { return '<g class="z" data-p="' + p + '" tabindex="0" role="button" aria-label="Parte ' + n + ' de la neurona">' + cont + '</g>'; };
  var col = '#e08a2e', h = '';
  h += z('dend', 1, '<g fill="none" stroke="' + col + '" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"><path d="M60 74 L38 56 L16 60 M38 56 L28 38"/><path d="M56 85 L22 86 L8 98"/><path d="M60 98 L40 122 L22 130 M40 122 L46 146"/><path d="M70 64 L58 38 L62 20"/></g><rect x="4" y="14" width="50" height="142" fill="transparent"/>');
  h += z('soma', 2, '<circle cx="82" cy="85" r="28" fill="#ffe2bd" stroke="' + col + '" stroke-width="4"/><circle cx="82" cy="85" r="10" fill="#c9772a"/>');
  h += z('axon', 3, '<line x1="108" y1="85" x2="252" y2="85" stroke="' + col + '" stroke-width="5" stroke-linecap="round"/><rect x="108" y="70" width="144" height="30" fill="transparent"/>');
  h += z('miel', 4, [124, 166, 208].map(function (x) { return '<rect x="' + x + '" y="72" width="34" height="26" rx="12" fill="#fff3c4" stroke="#d9a400" stroke-width="2.5"/>'; }).join(''));
  h += z('term', 5, '<g fill="none" stroke="' + col + '" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"><path d="M252 85 L276 62 L290 54"/><path d="M252 85 L286 85"/><path d="M252 85 L276 108 L290 116"/></g><g fill="#ff8f6b" stroke="' + col + '" stroke-width="3"><circle cx="294" cy="52" r="9"/><circle cx="298" cy="85" r="9"/><circle cx="294" cy="118" r="9"/></g><rect x="250" y="40" width="68" height="90" fill="transparent"/>');
  if (conPunto) h += '<g id="nu-dot" style="transform:translate(22px,72px)"><circle r="8" fill="#ffd84d" stroke="#e6a400" stroke-width="2.5"/></g>';
  return h;
}
function sinapsisSVG() {
  var tx = function (x, y, t) { return '<text x="' + x + '" y="' + y + '" font-size="11" font-weight="700" text-anchor="middle" fill="var(--ink)">' + t + '</text>'; };
  var h = '<ellipse cx="72" cy="78" rx="64" ry="48" fill="#ffe2bd" stroke="#e08a2e" stroke-width="4"/>';
  h += '<path class="sn" data-d="1" data-h="1" d="M14 80 L40 62 L52 92 L84 66" fill="none" stroke="#e6a400" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>';
  [[96, 56], [100, 78], [96, 100]].forEach(function (p) { h += '<circle class="sn" data-d="2" data-h="2" cx="' + p[0] + '" cy="' + p[1] + '" r="5" fill="#ff8f6b" stroke="#c9772a" stroke-width="1.5"/>'; });
  h += '<ellipse cx="256" cy="78" rx="64" ry="48" fill="#cfe3ff" stroke="#4f8cff" stroke-width="4"/>';
  [52, 78, 104].forEach(function (y) { h += '<rect x="184" y="' + (y - 7) + '" width="9" height="14" rx="3" fill="#4f8cff"/>'; });
  [[140, 56], [144, 78], [140, 100]].forEach(function (p) { h += '<circle class="sn" data-d="3" data-h="3" cx="' + p[0] + '" cy="' + p[1] + '" r="5" fill="#ff8f6b" stroke="#c9772a" stroke-width="1.5"/>'; });
  [[177, 52], [177, 78], [177, 104]].forEach(function (p) { h += '<circle class="sn" data-d="4" data-h="9" cx="' + p[0] + '" cy="' + p[1] + '" r="5" fill="#ff8f6b" stroke="#c9772a" stroke-width="1.5"/>'; });
  h += '<path class="sn" data-d="5" data-h="9" d="M214 82 L240 64 L252 94 L284 68" fill="none" stroke="#e6a400" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>';
  h += '<ellipse class="sn" data-d="5" data-h="9" cx="256" cy="78" rx="66" ry="52" fill="none" stroke="#ffd84d" stroke-width="3" stroke-dasharray="6 5"/>';
  h += tx(72, 150, 'Neurona que envía') + tx(160, 150, 'Sinapsis') + tx(256, 150, 'Célula que recibe');
  return h;
}
function iniciarNeurona() {
  var s = cur(), orden = mezclar(['dend', 'soma', 'axon', 'miel', 'term']);
  nu = { fase: 'A', orden: orden, i: 0, errA: false, okA: 0, errR: 0, errS: 0, ruta: 0, sin: 0, xp: 0, et0: etapa(s), hecho: false };
  go('neuro'); pintaNeurona();
}
function totalNeu() { return nu.orden.length + 2; }
function pintaNeurona() {
  var svg = $('nu-svg'), opts = $('nu-opts'); svg.setAttribute('viewBox', '0 0 320 170'); $('nu-fb').hidden = true; $('nu-next').hidden = true; opts.innerHTML = ''; nu.hecho = false;
  if (nu.fase === 'A') {
    var k = nu.orden[nu.i]; nu.errA = false; barra2('nu', nu.i, totalNeu());
    $('nu-tag').textContent = 'Conoce la neurona'; $('nu-q').textContent = PARTES_NEU[k].q;
    svg.innerHTML = neuronaSVG(); svg.setAttribute('aria-label', 'Dibujo de una neurona. Toca la parte que se pide.');
  } else if (nu.fase === 'B') {
    barra2('nu', nu.orden.length, totalNeu());
    $('nu-tag').textContent = 'Lleva el impulso'; svg.innerHTML = neuronaSVG(true); nu.ruta = 0; nu.errR = 0;
    $('nu-q').textContent = 'El impulso va a recorrer la neurona. Toca las partes en el orden en que pasa: primero, ¿por dónde entra?';
  } else {
    barra2('nu', nu.orden.length + 1, totalNeu()); nu.sin = 0; nu.errS = 0;
    $('nu-tag').textContent = 'La sinapsis'; $('nu-q').textContent = 'El impulso llegó al final del axón. Toca los pasos en el orden en que ocurren.';
    svg.setAttribute('viewBox', '-8 0 336 170'); svg.innerHTML = sinapsisSVG(); svg.setAttribute('aria-label', 'Dibujo de una sinapsis entre dos células'); sinVer(0);
    mezclar(PASOS_SIN.map(function (t, i) { return { t: t, i: i }; })).forEach(function (o) {
      var b = el('button', 'opt', o.t); b.dataset.i = o.i; b.onclick = function () { respondeSinapsis(o.i, b); }; opts.appendChild(b);
    });
  }
}
function sinVer(paso) {
  Array.prototype.forEach.call($('nu-svg').querySelectorAll('.sn'), function (n) {
    var d = +n.dataset.d, h = +n.dataset.h; n.style.opacity = (paso >= d && paso <= h) ? 1 : 0;
  });
}
function tocaParteNeu(e) {
  if (!nu || nu.hecho && nu.fase === 'A') return;
  var g = e.target.closest ? e.target.closest('[data-p]') : null; if (!g) return;
  if (e.type === 'keydown') { if (e.key !== 'Enter' && e.key !== ' ') return; e.preventDefault(); }
  var p = g.dataset.p;
  if (nu.fase === 'A') {
    var k = nu.orden[nu.i], bien = p === k || (k === 'axon' && p === 'miel');
    if (bien) {
      nu.hecho = true; g.classList.add('okz'); SFX.ok(); vibra(20);
      if (!nu.errA) { nu.okA++; var x = premio2('nparte|' + k, PTS.nparte); nu.xp += x; if (x) flotar('+' + x + ' XP'); cierra2(); }
      aviso2($('nu-fb'), true, '¡Eso es! ' + PARTES_NEU[k].n, PARTES_NEU[k].e);
      var n = $('nu-next'); n.hidden = false; n.textContent = 'Siguiente'; n.scrollIntoView({ block: 'nearest' });
    } else {
      nu.errA = true; sacude2(g); SFX.no(); vibra(30);
      aviso2($('nu-fb'), false, 'Casi', 'Tocaste: ' + PARTES_NEU[p].n + '. ' + PARTES_NEU[k].q.replace('Toca', 'Busca'));
    }
  } else if (nu.fase === 'B') {
    if (nu.ruta >= RUTA_NEU.length) return;
    var esp = RUTA_NEU[nu.ruta], ok2 = p === esp || (esp === 'axon' && p === 'miel');
    if (ok2) {
      nu.ruta++; SFX.tick(); vibra(8); g.classList.add('okz');
      var a = ANCLA_NEU[esp]; $('nu-dot').style.transform = 'translate(' + a[0] + 'px,' + a[1] + 'px)';
      if (nu.ruta < RUTA_NEU.length) $('nu-q').textContent = 'Muy bien. ¿Por dónde sigue el impulso?';
      else {
        SFX.ok(); confeti(16); if (!nu.errR) { var y = premio2('nparte|ruta', PTS.nsyn - 3); nu.xp += y; if (y) flotar('+' + y + ' XP'); cierra2(); }
        aviso2($('nu-fb'), true, '¡Llegó al final!', 'El impulso entra por las dendritas, pasa por el cuerpo celular, viaja por el axón (la mielina lo acelera) y sale por el terminal axónico.');
        var n2 = $('nu-next'); n2.hidden = false; n2.textContent = 'Ir a la sinapsis'; n2.scrollIntoView({ block: 'nearest' });
      }
    } else {
      nu.errR++; sacude2(g); SFX.no(); vibra(30);
      aviso2($('nu-fb'), false, 'Todavía no', 'Piensa por dónde entra la señal, por dónde pasa y por dónde sale de la neurona.');
    }
  }
}
function respondeSinapsis(i, b) {
  if (i === nu.sin) {
    nu.sin++; b.disabled = true; b.classList.add('ok'); b.textContent = (i + 1) + '. ' + PASOS_SIN[i]; sinVer(nu.sin); SFX.tick(); vibra(10);
    $('nu-fb').hidden = true;
    if (nu.sin === PASOS_SIN.length) {
      SFX.ok(); confeti(24); vibra(25);
      if (!nu.errS) { var x = premio2('nsyn|sinapsis', PTS.nsyn); nu.xp += x; if (x) flotar('+' + x + ' XP'); }
      cierra2();
      aviso2($('nu-fb'), true, '¡Mensaje entregado!', 'Así se comunican las neuronas: llega el impulso, se liberan los neurotransmisores, cruzan el espacio, se unen a los receptores y la célula receptora responde.');
      var n = $('nu-next'); n.hidden = false; n.textContent = 'Ver resultado'; n.scrollIntoView({ block: 'nearest' });
    }
  } else {
    nu.errS++; b.classList.add('bad'); sacude2(b); SFX.no(); vibra(30); setTimeout(function () { b.classList.remove('bad'); }, 700);
    aviso2($('nu-fb'), false, 'Todavía no', 'Ese paso ocurre en otro momento. Piensa qué pasa primero cuando el impulso llega al final del axón.');
  }
}
$('nu-svg').addEventListener('click', tocaParteNeu);
$('nu-svg').addEventListener('keydown', tocaParteNeu);
$('nu-next').onclick = function () {
  if (nu.fase === 'A') { if (nu.i < nu.orden.length - 1) { nu.i++; } else { nu.fase = 'B'; } pintaNeurona(); }
  else if (nu.fase === 'B') { nu.fase = 'C'; pintaNeurona(); }
  else {
    var perf = nu.okA === nu.orden.length && nu.errR === 0 && nu.errS === 0;
    fin({ titulo: perf ? '¡Neurona perfecta!' : '¡Mensaje entregado!', et0: nu.et0, festejo: perf,
      filas: [['Partes a la primera', nu.okA + ' de ' + nu.orden.length], ['Recorrido del impulso', nu.errR === 0 ? 'Sin errores' : nu.errR + (nu.errR === 1 ? ' error' : ' errores')], ['Pasos de la sinapsis', nu.errS === 0 ? 'Sin errores' : nu.errS + (nu.errS === 1 ? ' error' : ' errores')], ['Puntos ganados', '+' + nu.xp + ' XP']] });
  }
};
$('nu-exit').onclick = function () { go('home'); };

/* =========================================================
   SEPARAR LA MEZCLA
   ========================================================= */
var sp = null;
var COL_SEP = {
  tamiz: ['#8a8f98', '#d9b26f', 0], iman: ['#9aa4b5', '#ffffff', 0], filtro: ['#c2185b', '#e57399', 1], capas: ['#f4c430', '#6fb3ff', 1],
  alcohol: ['#9b6bff', '#6fb3ff', 1], sal: ['#ffffff', '#6fb3ff', 0], tinta: ['#e53935', '#1e88e5', 0], tubo: ['#c62828', '#ffe28a', 1], yodo: ['#6a1b9a', '#d9b26f', 0]
};
function beaker(x, y, w, h, relleno) {
  return '<path d="M' + x + ' ' + y + ' V' + (y + h) + ' H' + (x + w) + ' V' + y + '" fill="#fff" fill-opacity=".6" stroke="#7a8599" stroke-width="3" stroke-linejoin="round"/>' + (relleno || '');
}
function puntos(cx, cy, w, h, n, r, color, borde, sem) {
  var s = '', i, a = sem || 3;
  for (i = 0; i < n; i++) {
    a = (a * 9301 + 49297) % 233280; var px = cx + (a / 233280) * w;
    a = (a * 9301 + 49297) % 233280; var py = cy + (a / 233280) * h;
    s += '<circle cx="' + px.toFixed(1) + '" cy="' + py.toFixed(1) + '" r="' + r + '" fill="' + color + '" stroke="' + (borde || 'rgba(0,0,0,.25)') + '" stroke-width="1"/>';
  }
  return s;
}
function antesSep(v) {
  var c = COL_SEP[v], h = '';
  if (v === 'tamiz') {
    h += '<rect x="36" y="64" width="128" height="8" rx="3" fill="#b9c2d4"/><path d="M40 72 H160" stroke="#7a8599" stroke-width="2" stroke-dasharray="3 3"/>' + puntos(48, 40, 100, 20, 10, 6, c[0], '#5b6270', 7) + puntos(48, 44, 100, 18, 14, 2.4, c[1], '#a07b3a', 11) + '<rect x="30" y="104" width="140" height="8" rx="3" fill="#cfd6e6"/>';
  } else if (v === 'iman') {
    h += '<path d="M70 12 V34 A16 16 0 0 0 102 34 V12" fill="none" stroke="#d63b3b" stroke-width="10"/><rect x="65" y="8" width="10" height="8" fill="#c8cfdc"/><rect x="97" y="8" width="10" height="8" fill="#c8cfdc"/><rect x="30" y="100" width="140" height="10" rx="4" fill="#cfd6e6"/>';
    [[62, 92], [84, 94], [106, 90], [130, 94]].forEach(function (p) { h += '<rect x="' + p[0] + '" y="' + p[1] + '" width="16" height="5" rx="2.5" fill="' + c[0] + '" stroke="#5b6270" stroke-width="1"/>'; });
    h += puntos(42, 92, 116, 6, 14, 2.6, c[1], '#aab4c8', 5);
  } else if (v === 'filtro') {
    h += '<path d="M52 14 H148 L112 62 H88 Z" fill="#fff" stroke="#7a8599" stroke-width="3" stroke-linejoin="round"/>' + puntos(68, 22, 62, 22, 8, 5, c[0], '#7d0f3d', 4) + '<path d="M92 66 V74 M100 66 V78 M108 66 V74" stroke="' + c[1] + '" stroke-width="3" stroke-linecap="round"/>' + beaker(70, 80, 60, 34, '<rect x="73" y="98" width="54" height="13" fill="' + c[1] + '" opacity=".9"/>');
  } else if (v === 'capas') {
    h += beaker(56, 14, 88, 98, '<rect x="59" y="62" width="82" height="47" fill="' + c[1] + '" opacity=".8"/><rect x="59" y="38" width="82" height="24" fill="' + c[0] + '" opacity=".9"/>');
  } else if (v === 'alcohol') {
    h += beaker(56, 14, 88, 98, '<rect x="59" y="40" width="82" height="69" fill="#cdbbff" opacity=".7"/>' + puntos(64, 46, 72, 58, 14, 3.4, c[0], '#4b2b94', 13) + puntos(64, 46, 72, 58, 14, 3.4, c[1], '#1d5aa6', 21));
  } else if (v === 'sal') {
    h += beaker(56, 14, 88, 98, '<rect x="59" y="40" width="82" height="69" fill="' + c[1] + '" opacity=".6"/>' + puntos(64, 46, 72, 58, 9, 2.6, c[0], '#7a8599', 17));
  } else if (v === 'tinta') {
    h += '<rect x="86" y="10" width="28" height="94" fill="#fff" stroke="#7a8599" stroke-width="2"/><circle cx="100" cy="88" r="6" fill="#3b3f58"/><rect x="50" y="94" width="100" height="18" rx="4" fill="#9fcfff" opacity=".8" stroke="#7a8599" stroke-width="2"/>';
  } else if (v === 'tubo') {
    h += '<path d="M78 12 V92 A22 22 0 0 0 122 92 V12" fill="#fff" fill-opacity=".6" stroke="#7a8599" stroke-width="3"/>' + '<rect x="82" y="30" width="36" height="62" fill="' + c[0] + '" opacity=".85"/>' + puntos(84, 40, 32, 60, 6, 2, '#fff', '#8c1c1c', 3);
  } else if (v === 'yodo') {
    h += '<rect x="30" y="100" width="140" height="10" rx="4" fill="#cfd6e6"/>' + puntos(46, 86, 108, 12, 18, 3, c[1], '#a07b3a', 9) + puntos(70, 82, 56, 14, 8, 3.2, c[0], '#3a0f55', 15);
  }
  return h;
}
function despuesSep(v) {
  var c = COL_SEP[v], liq = c[2], h = '';
  [[18, c[0]], [112, c[1]]].forEach(function (p, i) {
    h += '<path d="M' + p[0] + ' 62 H' + (p[0] + 70) + ' L' + (p[0] + 62) + ' 106 H' + (p[0] + 8) + ' Z" fill="' + (liq ? p[1] : '#eef2fa') + '" fill-opacity="' + (liq ? .85 : 1) + '" stroke="#7a8599" stroke-width="3" stroke-linejoin="round"/>';
    if (!liq) h += puntos(p[0] + 12, 76, 46, 22, 9, 3.2, p[1], 'rgba(0,0,0,.35)', 6 + i * 4);
  });
  h += '<path d="M92 36 L102 36 M96 30 L104 36 L96 42" fill="none" stroke="var(--ok)" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>';
  return h;
}
function iniciarSeparar(j) {
  var s = cur(), n = Math.min(6, j.mezclas.length);
  sp = { j: j, qs: mezclar(j.mezclas).slice(0, n), i: 0, ok: 0, xp: 0, et0: etapa(s), hecho: false };
  go('sep'); pintaSep();
}
function pintaSep() {
  var m = sp.qs[sp.i], svg = $('sp-svg'), opts = $('sp-opts'); sp.hecho = false;
  barra2('sp', sp.i, sp.qs.length); $('sp-fb').hidden = true; $('sp-next').hidden = true; opts.innerHTML = '';
  $('sp-tag').textContent = 'Elige el método';
  svg.setAttribute('class', 'spsvg'); svg.innerHTML = '<g class="ant">' + antesSep(m.vis) + '</g><g class="des">' + despuesSep(m.vis) + '</g>';
  svg.setAttribute('aria-label', 'Dibujo de la mezcla: ' + m.t);
  $('sp-q').textContent = '¿Cómo separas: ' + m.t.charAt(0).toLowerCase() + m.t.slice(1) + '?';
  mezclar([m.ok].concat(m.no)).forEach(function (t) {
    var b = el('button', 'opt', t); b.dataset.g = t; b.onclick = function () { respondeSep(t); }; opts.appendChild(b);
  });
}
function respondeSep(t) {
  if (sp.hecho) return; sp.hecho = true;
  var m = sp.qs[sp.i], bien = t === m.ok; marcaOpts($('sp-opts'), t, m.ok);
  $('sp-svg').setAttribute('class', 'spsvg sepok');
  if (bien) { sp.ok++; var x = premio2('sep|' + m.vis, PTS.sep); sp.xp += x; SFX.ok(); vibra(20); confeti(16); cierra2(); if (x) flotar('+' + x + ' XP'); }
  else { SFX.no(); vibra(30); }
  aviso2($('sp-fb'), bien, bien ? '¡Correcto!' : 'Casi. El método es: ' + m.ok, m.e);
  var n = $('sp-next'); n.hidden = false; n.textContent = sp.i === sp.qs.length - 1 ? 'Ver resultado' : 'Siguiente'; n.scrollIntoView({ block: 'nearest' });
}
$('sp-next').onclick = function () {
  if (sp.i < sp.qs.length - 1) { sp.i++; pintaSep(); return; }
  var perf = sp.ok === sp.qs.length;
  fin({ titulo: perf ? '¡Mezclas separadas!' : '¡Buen trabajo en el laboratorio!', et0: sp.et0, festejo: sp.ok >= sp.qs.length - 1,
    filas: [['Métodos correctos', sp.ok + ' de ' + sp.qs.length], ['Puntos ganados', '+' + sp.xp + ' XP']] });
};
$('sp-exit').onclick = function () { go('home'); };

/* =========================================================
   PREPARAR LA DISOLUCIÓN
   ========================================================= */
var ds = null;
function nf(x) { return String(Math.round(x * 100) / 100); }
function iniciarDisolucion(j) {
  var s = cur(), n = Math.min(4, j.retos.length), m = mezclar(j.retos.filter(function (r) { return r.modo === 'm'; })), v = mezclar(j.retos.filter(function (r) { return r.modo === 'v'; }));
  var qs = m.slice(0, Math.ceil(n / 2)).concat(v.slice(0, Math.floor(n / 2)));
  ds = { j: j, qs: qs, i: 0, ok: 0, xp: 0, et0: etapa(s), sol: 0, agua: 0, hecho: false, err: false };
  go('dis'); pintaDis();
}
function filaDis(id, etiqueta, max, paso, fija, onCambio) {
  var r = el('div', 'dsrow'), v = fija != null ? fija : 0;
  r.innerHTML = '<b>' + esc(etiqueta) + '</b><span class="dsv" id="' + id + '-v">' + nf(v) + '</span>' +
    (fija != null ? '' : '<div class="dsctl"><button type="button" aria-label="Quitar">−</button><input type="range" id="' + id + '-r" min="0" max="' + max + '" step="' + paso + '" value="0" aria-label="' + esc(etiqueta) + '"><button type="button" aria-label="Agregar">+</button></div>');
  if (fija == null) {
    var inp = r.querySelector('input'), bs = r.querySelectorAll('button');
    var pon = function (x) { x = Math.max(0, Math.min(max, x)); inp.value = x; r.querySelector('.dsv').textContent = nf(x); onCambio(x); SFX.tick(); };
    inp.oninput = function () { pon(+inp.value); };
    bs[0].onclick = function () { pon(+inp.value - paso); }; bs[1].onclick = function () { pon(+inp.value + paso); };
  }
  return r;
}
function pintaDis() {
  var r = ds.qs[ds.i], u = r.modo === 'm' ? 'g' : 'mL', meta = r.total * r.pct / 100, box = $('ds-parts'); ds.hecho = false; ds.err = false; ds.sol = 0; ds.agua = 0;
  ds.r = r; ds.meta = meta; ds.u = u;
  barra2('ds', ds.i, ds.qs.length); box.innerHTML = '';
  $('ds-task').innerHTML = 'Prepara ' + nf(r.total) + ' ' + u + ' de disolución de ' + esc(r.sust) + ' al ' + nf(r.pct) + ' % ' + (r.modo === 'm' ? 'en masa' : 'en volumen') +
    '<small>' + (r.modo === 'm' ? 'Mide el soluto y el agua (disolvente) en gramos.' : 'Mide el soluto y completa con agua hasta la marca de ' + nf(r.total) + ' mL.') + '</small>';
  var maxSol = r.modo === 'v' ? r.total : Math.max(meta * 3, 10), pasoSol = meta >= 100 ? 5 : (r.modo === 'v' ? .5 : 1);
  if (r.modo === 'v') maxSol = Math.min(r.total, Math.max(meta * 3, 10));
  box.appendChild(filaDis('ds-s', 'Soluto: ' + r.sust + ' (' + u + ')', maxSol, pasoSol, null, function (x) { ds.sol = x; if (r.modo === 'v') ds.agua = Math.max(0, r.total - x); actDis(); }));
  if (r.modo === 'm') box.appendChild(filaDis('ds-a', 'Agua (' + u + ')', r.total, 5, null, function (x) { ds.agua = x; actDis(); }));
  else { var ra = el('div', 'dsrow'); ra.innerHTML = '<b>Agua para completar (' + u + ')</b><span class="dsv" id="ds-a-v">' + nf(r.total) + '</span>'; box.appendChild(ra); ds.agua = r.total; }
  var fb = $('ds-fb'); fb.className = 'atfb'; fb.textContent = 'Mueve las barras o toca + y − para preparar la disolución.';
  $('ds-check').hidden = false; $('ds-next').hidden = true; $('ds-hint').hidden = false; actDis();
}
function actDis() {
  var r = ds.r, tot = ds.sol + ds.agua, nivel = r.modo === 'v' ? 1 : Math.min(1.12, tot / r.total), frac = tot > 0 ? ds.sol / tot : 0;
  if (r.modo === 'v') { var av = $('ds-a-v'); if (av) av.textContent = nf(Math.max(0, r.total - ds.sol)); }
  var alto = 92 * nivel, y = 118 - alto, h = '<path d="M66 20 V118 H134 V20" fill="#fff" fill-opacity=".55" stroke="#7a8599" stroke-width="3" stroke-linejoin="round"/>';
  if (nivel > 0 && tot > 0) h += '<rect x="69" y="' + Math.max(8, y).toFixed(1) + '" width="62" height="' + Math.min(alto, 108).toFixed(1) + '" fill="' + (r.modo === 'v' ? '#9b6bff' : '#e0902b') + '" opacity="' + (.25 + Math.min(.6, frac * 2.2)).toFixed(2) + '"/>';
  h += puntos(72, 100, 56, 14, Math.min(26, Math.round(ds.sol / ds.meta * 8)), 2.6, '#fff', '#7a8599', 5);
  h += '<path d="M60 28 H140" stroke="var(--ok)" stroke-width="2.5" stroke-dasharray="5 4"/><text x="146" y="32" font-size="10" font-weight="800" fill="var(--ok-ink)">meta</text>';
  if (tot > r.total + 0.001 && r.modo === 'm') h += '<text x="100" y="12" font-size="10" font-weight="800" text-anchor="middle" fill="var(--bad-ink)">¡Se pasó!</text>';
  $('ds-svg').innerHTML = h;
  $('ds-tot').textContent = r.modo === 'm' ? 'Masa de la disolución: ' + nf(tot) + ' g (meta: ' + nf(r.total) + ' g)' : 'Soluto ' + nf(ds.sol) + ' mL + agua ' + nf(Math.max(0, r.total - ds.sol)) + ' mL = ' + nf(r.total) + ' mL';
  if (!ds.hecho) { var fb = $('ds-fb'); fb.className = 'atfb'; fb.textContent = 'Mueve las barras o toca + y − para preparar la disolución.'; }
}
$('ds-hint').onclick = function () {
  var r = ds.r, fb = $('ds-fb'); fb.className = 'atfb';
  fb.textContent = r.modo === 'm'
    ? 'Porcentaje en masa = (masa del soluto ÷ masa de la disolución) × 100. La masa de la disolución es soluto + disolvente. Tu meta: ' + nf(r.total) + ' g de disolución.'
    : 'Porcentaje en volumen = (volumen del soluto ÷ volumen de la disolución) × 100. El soluto se mide aparte y se completa con agua hasta el volumen total.';
};
$('ds-check').onclick = function () {
  if (ds.hecho) return;
  var r = ds.r, fb = $('ds-fb'), tot = ds.sol + ds.agua, solOk = Math.abs(ds.sol - ds.meta) < 0.001, totOk = Math.abs(tot - r.total) < 0.001, pct = tot > 0 ? ds.sol / tot * 100 : 0;
  if (solOk && totOk) {
    ds.hecho = true; fb.className = 'atfb good';
    fb.textContent = '¡Perfecto! ' + nf(ds.meta) + ' ' + ds.u + ' de ' + r.sust + (r.modo === 'm' ? ' + ' + nf(r.total - ds.meta) + ' g de agua' : ' completados con agua hasta ' + nf(r.total) + ' mL') + '. Comprobación: ' + nf(ds.meta) + ' ÷ ' + nf(r.total) + ' × 100 = ' + nf(r.pct) + ' %.';
    SFX.ok(); vibra(25); confeti(26); ds.ok += ds.err ? 0 : 1;
    var x = ds.err ? 0 : premio2('dis|' + r.modo + r.sust + r.total + r.pct, PTS.dis); ds.xp += x; if (x) flotar('+' + x + ' XP'); cierra2();
    $('ds-check').hidden = true; $('ds-hint').hidden = true; var n = $('ds-next'); n.hidden = false; n.textContent = ds.i === ds.qs.length - 1 ? 'Ver resultado' : 'Siguiente'; n.scrollIntoView({ block: 'nearest' });
    return;
  }
  ds.err = true; fb.className = 'atfb'; SFX.no(); vibra(30);
  if (!totOk) fb.textContent = r.modo === 'm' ? 'La masa de la disolución es soluto + agua y debe ser ' + nf(r.total) + ' g. Ahora suma ' + nf(tot) + ' g.' : 'Revisa el volumen: debe completarse hasta ' + nf(r.total) + ' mL.';
  else fb.textContent = 'Con ' + nf(ds.sol) + ' ' + ds.u + ' de soluto en ' + nf(tot) + ' ' + ds.u + ' de disolución tienes ' + nf(pct) + ' %. La meta es ' + nf(r.pct) + ' %: ' + (pct > r.pct ? 'te pasaste de soluto.' : 'te falta soluto.');
};
$('ds-next').onclick = function () {
  if (ds.i < ds.qs.length - 1) { ds.i++; pintaDis(); return; }
  fin({ titulo: ds.ok === ds.qs.length ? '¡Disoluciones perfectas!' : '¡Disoluciones listas!', et0: ds.et0, festejo: ds.ok >= ds.qs.length - 1,
    filas: [['Disoluciones a la primera', ds.ok + ' de ' + ds.qs.length], ['Puntos ganados', '+' + ds.xp + ' XP']] });
};
$('ds-exit').onclick = function () { go('home'); };

/* ---- se registran en el menú de juegos ---- */
JUEGOS.plato = { titulo: 'Plato del Bien Comer', sub: 'Clasifica alimentos y revisa si el día está balanceado.', iniciar: function (j) { iniciarPlato(j); },
  ico: '<svg viewBox="0 0 48 48"><circle cx="24" cy="24" r="19" fill="#fff" stroke="var(--brand)" stroke-width="3"/><path d="M24 24 L24 9 A15 15 0 0 1 37 31.5 Z" fill="#7bc96f"/><path d="M24 24 L37 31.5 A15 15 0 0 1 11 31.5 Z" fill="#ffd166"/><path d="M24 24 L11 31.5 A15 15 0 0 1 24 9 Z" fill="#ef8354"/></svg>' };
JUEGOS.neurona = { titulo: 'Neurona y sinapsis', sub: 'Arma la neurona, lleva el impulso y cruza la sinapsis.', iniciar: function (j) { iniciarNeurona(j); },
  ico: '<svg viewBox="0 0 48 48"><path d="M5 12 L13 20 M4 26 L13 24 M8 40 L15 30" stroke="var(--brand)" stroke-width="3" stroke-linecap="round" fill="none"/><circle cx="18" cy="24" r="7" fill="#ffe2bd" stroke="var(--brand)" stroke-width="2.5"/><path d="M25 24 H40" stroke="var(--brand)" stroke-width="3" stroke-linecap="round"/><circle cx="43" cy="24" r="3.4" fill="#ffd84d" stroke="#e6a400" stroke-width="2"/></svg>' };
JUEGOS.separar = { titulo: 'Separar la mezcla', sub: 'Elige el método para separar cada mezcla.', iniciar: function (j) { iniciarSeparar(j); },
  ico: '<svg viewBox="0 0 48 48"><path d="M8 8 H40 L28 24 V38 L20 42 V24 Z" fill="var(--brand-soft)" stroke="var(--brand)" stroke-width="3" stroke-linejoin="round"/><circle cx="24" cy="13" r="2.2" fill="#e0902b"/><circle cx="17" cy="13" r="2.2" fill="#e0902b"/><circle cx="31" cy="13" r="2.2" fill="#e0902b"/></svg>' };
JUEGOS.disolucion = { titulo: 'Preparar la disolución', sub: 'Mide soluto y agua para llegar al porcentaje pedido.', iniciar: function (j) { iniciarDisolucion(j); },
  ico: '<svg viewBox="0 0 48 48"><path d="M13 6 V40 H35 V6" fill="#fff" stroke="var(--brand)" stroke-width="3" stroke-linejoin="round"/><rect x="15" y="20" width="18" height="18" fill="#9b6bff" opacity=".55"/><circle cx="20" cy="33" r="2" fill="#fff"/><circle cx="27" cy="35" r="2" fill="#fff"/><circle cx="24" cy="28" r="2" fill="#fff"/></svg>' };
