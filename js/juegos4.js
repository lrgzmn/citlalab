/* JUEGOS NUEVOS: Alimentar arrastrando y Mini laboratorio (uno por materia). */
PTS.dar = 2;
VISTAS.dar = { rt: 1, stage: 'm' }; VISTAS.lab = { rt: 1 }; VISTAS.album = { rt: 1 };

/* los juegos nuevos entran a la lista de Jugar de cada materia */
(function () {
  var jd0 = juegosDe;
  juegosDe = function (mat) {
    var r = jd0(mat), k = r.map(function (j) { return j.tipo; }).indexOf('vasos');
    var ex = [];
    if (preguntasDe(mat).filter(function (q) { return q.k === 'opcion' && !q.m && q.o.length >= 3; }).length >= 4) ex.push({ tipo: 'dar' });
    ex.push({ tipo: 'lab' }); ex.push({ tipo: 'album' });
    r.splice.apply(r, [k < 0 ? r.length : k, 0].concat(ex)); return r;
  };
})();
NUEVOS_J.dar = 1; NUEVOS_J.lab = 1; NUEVOS_J.album = 1;

/* =========================================================
   3 · ALIMENTAR ARRASTRANDO
   ========================================================= */
var dar = null, darDrag = null;
function iniciarDar() {
  var s = cur(), pool = preguntasDe(ST.activa).filter(function (q) { return q.k === 'opcion' && !q.m && q.o.length >= 3; });
  if (pool.length < 4) { say('Todavía no hay suficientes preguntas para este juego.'); return; }
  dar = { qs: elegir(pool, s, Math.min(6, pool.length)), i: 0, ok: 0, xp: 0, et0: etapa(s), fall: 0, hecho: false };
  go('dar'); pintaDar();
}
function pintaDar() {
  var q = dar.qs[dar.i], box = $('dar-foods'); dar.fall = 0; dar.hecho = false;
  $('dar-cnt').textContent = (dar.i + 1) + '/' + dar.qs.length; $('dar-pr').style.width = (dar.i / dar.qs.length * 100) + '%';
  $('dar-tag').textContent = temaNombre(q.tema); $('dar-q').textContent = q.q.replace('{m}', cur().name);
  $('dar-fb').hidden = true; $('dar-next').hidden = true; $('dar-hint').hidden = false; box.innerHTML = '';
  var c = correcta(q), ops = mezclar([c].concat(mezclar(q.o.filter(function (x) { return x !== c; })).slice(0, 3)));
  ops.forEach(function (t) {
    var f = el('button', 'food'); f.type = 'button'; f.dataset.c = t === c ? '1' : '';
    f.innerHTML = '<svg class="grip" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><circle cx="9" cy="6" r="1.8"/><circle cx="15" cy="6" r="1.8"/><circle cx="9" cy="12" r="1.8"/><circle cx="15" cy="12" r="1.8"/><circle cx="9" cy="18" r="1.8"/><circle cx="15" cy="18" r="1.8"/></svg><span></span>';
    f.lastChild.textContent = t; f.setAttribute('aria-label', 'Respuesta: ' + t + '. Arrástrala a tu mascota o tócala para dársela.');
    f.addEventListener('pointerdown', function (e) { darInicia(f, e); });
    f.addEventListener('keydown', function (e) { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); darDa(f); } });
    box.appendChild(f);
  });
  setMouth('smile'); say(cur().name + ': ¡Tengo hambre! Dame la respuesta correcta.');
}
function darSobre(x, y) { var r = $('pet').getBoundingClientRect(); var cx = r.left + r.width / 2, cy = r.top + r.height * .55; return Math.hypot(x - cx, y - cy) < Math.max(70, r.width * .42); }
function darInicia(f, e) {
  if (dar.hecho || f.disabled || f.classList.contains('bad')) return;
  e.preventDefault(); var r = f.getBoundingClientRect();
  darDrag = { f: f, id: e.pointerId, x0: e.clientX, y0: e.clientY, mov: false, w: r.width, l: r.left, t: r.top };
  try { f.setPointerCapture(e.pointerId); } catch (x) {}
  f.addEventListener('pointermove', darMueve); f.addEventListener('pointerup', darSuelta); f.addEventListener('pointercancel', darCancela);
}
function darMueve(e) {
  var d = darDrag; if (!d) return; var dx = e.clientX - d.x0, dy = e.clientY - d.y0;
  if (!d.mov && Math.hypot(dx, dy) > 8) { d.mov = true; d.f.classList.add('drag'); SFX.tick(); }
  if (d.mov) {
    d.f.style.transform = 'translate(' + dx + 'px,' + dy + 'px) scale(.96) rotate(' + Math.max(-6, Math.min(6, dx / 20)) + 'deg)';
    var sobre = darSobre(e.clientX, e.clientY); $('stage').classList.toggle('over', sobre);
    if (sobre !== d.sobre) { d.sobre = sobre; setMouth(sobre ? 'open' : 'smile'); if (sobre) SFX.tick(); }
  }
}
function darFin() { var d = darDrag; if (!d) return; d.f.removeEventListener('pointermove', darMueve); d.f.removeEventListener('pointerup', darSuelta); d.f.removeEventListener('pointercancel', darCancela); $('stage').classList.remove('over'); darDrag = null; return d; }
function darSuelta(e) {
  var d = darDrag; if (!d) return; var sobre = d.mov && darSobre(e.clientX, e.clientY), mov = d.mov, f = d.f; darFin();
  f.classList.remove('drag');
  if (!mov || sobre) darDa(f, sobre ? { x: e.clientX, y: e.clientY } : null);
  else { f.style.transition = 'transform .25s'; f.style.transform = ''; setTimeout(function () { f.style.transition = ''; }, 260); setMouth('smile'); }
}
function darCancela() { var d = darFin(); if (d) { d.f.classList.remove('drag'); d.f.style.transform = ''; setMouth('smile'); } }
/* la respuesta llega a la boca */
function darDa(f) {
  if (dar.hecho || f.classList.contains('bad')) return;
  var q = dar.qs[dar.i], bien = f.dataset.c === '1', pr = $('pet').getBoundingClientRect(), fr = f.getBoundingClientRect();
  var dx = pr.left + pr.width / 2 - (fr.left + fr.width / 2), dy = pr.top + pr.height * .55 - (fr.top + fr.height / 2);
  if (bien) {
    dar.hecho = true; document.querySelectorAll('#dar-foods .food').forEach(function (x) { x.disabled = true; });
    f.classList.add('eaten'); f.style.transform = 'translate(' + dx + 'px,' + dy + 'px) scale(.1)';
    setMouth('open'); SFX.nam(); vibra(20); anim('squish');
    setTimeout(function () { setMouth('smile'); SFX.nam2(); var ch = el('div', 'chomp', '¡ñam!'); $('stage').appendChild(ch); setTimeout(function () { ch.remove(); }, 1000); }, 380);
    setTimeout(function () { f.hidden = true; darResuelve(q, !dar.fall); }, 700);
  } else {
    dar.fall++; f.classList.add('bad', 'rech'); f.style.transform = ''; f.disabled = true; setMouth('wow'); SFX.no(); vibra(30); anim('squish');
    say(cur().name + ': ¡Puaj! Eso no es. Prueba con otra.'); setTimeout(function () { setMouth('smile'); }, 700);
  }
}
function darResuelve(q, primera) {
  var s = cur(), got = registrar(q, primera, PTS.acierto, undefined);
  if (primera) { dar.ok++; var x = premio2('dar|' + q.id, PTS.dar); dar.xp += x + got; flotar('+' + (x + got) + ' XP'); confeti(18); SFX.ok(); reaccion(); }
  cierra2(); renderPet();
  $('dar-hint').hidden = true; var fb = $('dar-fb'); fb.hidden = false; fb.className = 'fb ' + (primera ? 'good' : 'nope'); fb.innerHTML = '';
  fb.appendChild(el('strong', '', primera ? '¡Ñam, justo lo que quería!' : 'Eso era: ' + correcta(q))); fb.appendChild(document.createTextNode(q.e || '')); fb.appendChild(el('div', 'ref', q.r || ''));
  say(s.name + ': ' + (primera ? '¡Qué rico! Gracias.' : 'Ahora sí. ¡Gracias!'));
  var n = $('dar-next'); n.hidden = false; n.textContent = dar.i === dar.qs.length - 1 ? 'Ver resultado' : 'Siguiente'; n.scrollIntoView({ block: 'nearest' });
}
$('dar-next').onclick = function () {
  if (dar.i < dar.qs.length - 1) { dar.i++; pintaDar(); return; }
  var perf = dar.ok === dar.qs.length;
  fin({ titulo: perf ? '¡Mascota feliz y llena!' : '¡Buena comida!', et0: dar.et0, festejo: perf, filas: [['A la primera', dar.ok + ' de ' + dar.qs.length], ['Puntos ganados', '+' + dar.xp + ' XP']] });
};
$('dar-exit').onclick = function () { go('home'); renderPet(); };
JUEGOS.dar = { titulo: 'Alimenta a tu mascota', sub: 'Arrastra la respuesta correcta hasta su boca.', iniciar: function () { iniciarDar(); },
  ico: '<svg viewBox="0 0 48 48"><circle cx="24" cy="26" r="15" fill="var(--brand-soft)" stroke="var(--brand)" stroke-width="2.5"/><ellipse cx="24" cy="31" rx="6" ry="4.5" fill="#7a2a3a"/><circle cx="18" cy="22" r="2.2" fill="var(--ink)"/><circle cx="30" cy="22" r="2.2" fill="var(--ink)"/><circle cx="38" cy="8" r="5" fill="#ff8f1f"/><path d="M36 14 L31 20" stroke="#ff8f1f" stroke-width="2.5" stroke-linecap="round" stroke-dasharray="1 4"/></svg>' };

/* =========================================================
   4 · MINI LABORATORIOS (uno por materia, ligado a sus fichas)
   Biología: tiempo de reacción (ficha 1, sistema nervioso). Física: modelo de partículas del agua (fichas 9 y 10).
   Química: mezclas homogéneas y heterogéneas (ficha 6).
   ========================================================= */
var LABNOM = { biologia: 'Reflejos', fisica: 'Partículas del agua', quimica: 'Mezclas en el vaso' };
var labT = null;
function abreLab() {
  labParar(); var m = ST.activa; $('lab-tit').textContent = 'Mini laboratorio · ' + LABNOM[m]; $('lab-box').innerHTML = '';
  go('lab'); ({ biologia: labBio, fisica: labFis, quimica: labQuim })[m]();
}
function labParar() { if (labT) { cancelAnimationFrame(labT.raf); clearTimeout(labT.to); labT = null; } }
$('lab-exit').onclick = function () { labParar(); go('home'); renderPet(); };
(function () { var g0 = go; go = function (v) { if (v !== 'lab') labParar(); g0(v); }; })();
function labPremio(clave, pts) { var x = premio2('lab|' + clave, pts || 4); if (x) { flotar('+' + x + ' XP'); SFX.up(); confeti(26); } cierra2(); return x; }
function labRetos(lista, hechos) {
  return '<div class="labret">' + lista.map(function (t, i) { return '<span class="' + (hechos[i] ? 'ok' : '') + '">' + (hechos[i] ? '✓ ' : '') + esc(t) + '</span>'; }).join('') + '</div>';
}

/* ---------- Biología: reflejos ---------- */
function labBio() {
  var box = $('lab-box'), R = 5, tiempos = [], est = 'ini', t0 = 0;
  labT = { raf: 0, to: 0 };
  box.innerHTML = '<p class="labp">Cuando la zona se ponga verde, toca lo más rápido que puedas. Tu cerebro recibe la señal, decide y manda la orden a tu dedo.</p>' +
    '<svg class="labsvg" viewBox="0 0 320 70" role="img" aria-label="Camino de la señal: ojo, neurona sensitiva, cerebro, neurona motora, mano"><path d="M24 36 H296" stroke="var(--line)" stroke-width="5" stroke-linecap="round"/><path id="lb-ruta" d="M24 36 H296" stroke="var(--brand)" stroke-width="5" stroke-linecap="round" stroke-dasharray="272" stroke-dashoffset="272"/>' +
    '<circle cx="24" cy="36" r="16" fill="var(--surf)" stroke="var(--brand)" stroke-width="3"/><text x="24" y="40" text-anchor="middle" font-size="10" font-weight="800" fill="var(--brand-d)">Ojo</text>' +
    '<circle cx="160" cy="36" r="20" fill="var(--surf)" stroke="var(--brand)" stroke-width="3"/><text x="160" y="40" text-anchor="middle" font-size="9" font-weight="800" fill="var(--brand-d)">Cerebro</text>' +
    '<circle cx="296" cy="36" r="16" fill="var(--surf)" stroke="var(--brand)" stroke-width="3"/><text x="296" y="40" text-anchor="middle" font-size="9" font-weight="800" fill="var(--brand-d)">Mano</text>' +
    '<text x="92" y="22" text-anchor="middle" font-size="8" fill="var(--soft)">neurona sensitiva</text><text x="228" y="22" text-anchor="middle" font-size="8" fill="var(--soft)">neurona motora</text><circle id="lb-pulso" cx="24" cy="36" r="6" fill="#ffd84d" stroke="#e6a400" stroke-width="2" opacity="0"/></svg>' +
    '<button class="labpad" id="lb-pad" type="button">Toca para empezar</button><div class="labres" id="lb-res"></div><div class="labinfo" id="lb-info" hidden></div>';
  var pad = $('lb-pad'), res = $('lb-res');
  function pulso() {
    var c = $('lb-pulso'), r = $('lb-ruta'); if (!c || ST.cfg.mov) return; c.setAttribute('opacity', 1); var t1 = performance.now(), dur = 600;
    (function an(n) { var k = Math.min(1, (n - t1) / dur); c.setAttribute('cx', 24 + 272 * k); r.setAttribute('stroke-dashoffset', 272 * (1 - k)); if (k < 1 && labT) requestAnimationFrame(an); else { c.setAttribute('opacity', 0); r.setAttribute('stroke-dashoffset', 272); } })(t1);
  }
  function ronda() {
    est = 'espera'; pad.className = 'labpad wait'; pad.textContent = 'Espera… (ronda ' + (tiempos.length + 1) + ' de ' + R + ')';
    labT.to = setTimeout(function () { est = 'go'; pad.className = 'labpad go'; pad.textContent = '¡TOCA!'; t0 = performance.now(); SFX.tick(); }, 1400 + Math.random() * 2600);
  }
  pad.addEventListener('pointerdown', function (e) {
    e.preventDefault();
    if (est === 'ini' || est === 'fin') { tiempos = []; res.innerHTML = ''; $('lb-info').hidden = true; ronda(); return; }
    if (est === 'espera') { clearTimeout(labT.to); est = 'early'; pad.className = 'labpad early'; pad.textContent = '¡Muy pronto! Toca para repetir esta ronda'; SFX.no(); return; }
    if (est === 'early') { ronda(); return; }
    if (est === 'go') {
      var ms = Math.round(performance.now() - t0); tiempos.push(ms); SFX.ok(); pulso(); est = 'pausa';
      res.innerHTML = tiempos.map(function (t, i) { return '<span>' + (i + 1) + ': ' + t + ' ms</span>'; }).join('');
      if (tiempos.length < R) { pad.className = 'labpad'; pad.textContent = ms + ' ms · toca para la siguiente'; est = 'sig'; }
      else termina();
      return;
    }
    if (est === 'sig') ronda();
  });
  function termina() {
    est = 'fin'; var prom = Math.round(tiempos.reduce(function (a, b) { return a + b; }, 0) / R), mejor = Math.min.apply(null, tiempos);
    pad.className = 'labpad'; pad.innerHTML = 'Promedio: <b>' + prom + ' ms</b><small>Toca para volver a intentar</small>';
    var inf = $('lb-info'); inf.hidden = false;
    inf.innerHTML = '<b>Lo que pasó en tu cuerpo</b><p>Tu mejor tiempo fue ' + mejor + ' ms. La señal de luz viaja por el nervio óptico hasta el cerebro, el cerebro decide y manda la orden por neuronas motoras hasta los músculos de tu dedo.</p>' +
      '<p>Las neuronas con mielina conducen el impulso hasta unos 100 m/s. A esa rapidez, una señal recorrería ' + Math.round(prom / 1000 * 100) + ' metros en ' + prom + ' ms. Tu tiempo incluye también procesar y decidir, no solo el viaje.</p>' +
      '<p class="labfn">El tiempo cambia con el sueño, la atención y la práctica. No es una prueba para compararte con nadie.</p>';
    labPremio('bio|1', 6);
  }
}

/* ---------- Física: partículas del agua ---------- */
function labFis() {
  var box = $('lab-box'), W = 300, H = 190, N = 36, hechos = [false, false, false], T = 20, Tprev = 20, aviso = '', avisoT = 0;
  box.innerHTML = '<p class="labp">Mueve el termómetro y mira cómo se comportan las partículas del agua (a la presión del nivel del mar).</p>' +
    '<canvas class="labcv" id="lf-cv" width="' + W * 2 + '" height="' + H * 2 + '" role="img" aria-label="Simulación de partículas de agua"></canvas>' +
    '<div class="labtemp"><b id="lf-t">20 °C</b><input type="range" id="lf-r" min="-20" max="120" step="5" value="20" aria-label="Temperatura en grados Celsius"><span id="lf-e" class="labest"></span></div>' +
    '<div class="labinfo" id="lf-d"></div><div id="lf-ret"></div>';
  var cv = $('lf-cv'), cx = cv.getContext('2d'); cx.scale(2, 2);
  var cols = 6, P = [];
  for (var i = 0; i < N; i++) P.push({ gx: 40 + (i % cols) * 44, gy: 60 + Math.floor(i / cols) * 22, x: 40 + (i % cols) * 44, y: 60 + Math.floor(i / cols) * 22, vx: (Math.random() - .5) * 2, vy: (Math.random() - .5) * 2, f: Math.random() * 6 });
  function estado(t) { return t < 0 ? 's' : t > 100 ? 'g' : 'l'; }
  var DESC = { s: '<b>Sólido (hielo):</b> las partículas están muy juntas y ordenadas, y solo vibran en su lugar.', l: '<b>Líquido (agua):</b> las partículas siguen juntas pero desordenadas, y se deslizan unas sobre otras.', g: '<b>Gas (vapor de agua):</b> las partículas están muy separadas y se mueven libremente en todas direcciones.' };
  function actualiza() {
    $('lf-t').textContent = T + ' °C'; var e = estado(T), nom = { s: 'Sólido', l: 'Líquido', g: 'Gas' }[e];
    var extra = T === 0 ? '<br><em>A 0 °C el hielo se derrite (fusión) y el agua se congela: conviven dos estados y la temperatura no cambia mientras dura el cambio.</em>' : T === 100 ? '<br><em>A 100 °C el agua hierve (vaporización) y se forma vapor: conviven dos estados y la temperatura no cambia mientras dura el cambio.</em>' : '';
    $('lf-e').textContent = nom; $('lf-d').innerHTML = DESC[e] + extra;
    var ant = estado(Tprev);
    if (ant !== e) { var tr = { 'sl': 'Fusión', 'ls': 'Solidificación', 'lg': 'Vaporización', 'gl': 'Condensación' }[ant + e]; if (tr) { aviso = tr; avisoT = 70; SFX.pop(); } }
    Tprev = T; var idx = { s: 0, l: 1, g: 2 }[e];
    if (!hechos[idx]) { hechos[idx] = true; labPremio('fis|' + idx, 4); }
    $('lf-ret').innerHTML = labRetos(['Ver el sólido', 'Ver el líquido', 'Ver el gas'], hechos);
  }
  $('lf-r').oninput = function () { T = parseInt(this.value, 10); actualiza(); };
  labT = { raf: 0, to: 0 };
  (function paso() {
    var e = estado(T), v = Math.sqrt((T + 273) / 293), amp = e === 's' ? 1 + (T + 20) / 40 : 0;
    cx.clearRect(0, 0, W, H);
    cx.fillStyle = e === 'g' ? '#f4f7ff' : '#eaf3ff'; cx.fillRect(0, 0, W, H);
    cx.strokeStyle = '#8aa0cc'; cx.lineWidth = 3; cx.strokeRect(1.5, 1.5, W - 3, H - 3);
    var topL = e === 'g' ? 8 : e === 'l' ? 78 : 40;
    if (e === 'l') { cx.fillStyle = 'rgba(106,170,255,.25)'; cx.fillRect(3, topL, W - 6, H - topL - 3); cx.strokeStyle = '#6aaaff'; cx.beginPath(); cx.moveTo(3, topL); cx.lineTo(W - 3, topL); cx.stroke(); }
    P.forEach(function (p) {
      p.f += .25 * v;
      if (e === 's') { p.x += (p.gx + Math.cos(p.f * 3 + p.gy) * amp - p.x) * .3; p.y += (p.gy + Math.sin(p.f * 2.3 + p.gx) * amp - p.y) * .3; }
      else {
        var sp = e === 'g' ? 3.2 : 1.5; p.vx += (Math.random() - .5) * .35; p.vy += (Math.random() - .5) * .35 + (e === 'l' ? .05 : 0);
        var m = Math.hypot(p.vx, p.vy) || 1, s = sp * v; p.vx = p.vx / m * s; p.vy = p.vy / m * s; p.x += p.vx; p.y += p.vy;
        var t0 = e === 'l' ? topL + 8 : 10; if (p.x < 10) { p.x = 10; p.vx = Math.abs(p.vx); } if (p.x > W - 10) { p.x = W - 10; p.vx = -Math.abs(p.vx); } if (p.y < t0) { p.y = t0; p.vy = Math.abs(p.vy); } if (p.y > H - 10) { p.y = H - 10; p.vy = -Math.abs(p.vy); }
      }
      cx.beginPath(); cx.arc(p.x, p.y, 7, 0, 7); cx.fillStyle = e === 's' ? '#7fb2ff' : e === 'l' ? '#4f8cff' : '#9aa9ff'; cx.fill(); cx.strokeStyle = '#fff'; cx.lineWidth = 1.5; cx.stroke();
    });
    if (avisoT > 0) { cx.fillStyle = 'rgba(29,36,51,.85)'; cx.font = '800 18px Nunito,system-ui,sans-serif'; cx.textAlign = 'center'; cx.fillText(aviso + '…', W / 2, 28); avisoT--; }
    labT.raf = requestAnimationFrame(paso);
  })();
  actualiza();
}

/* ---------- Química: mezclas en el vaso ---------- */
var SUST = {
  sal: { n: 'Sal', c: '#f7f7f7', homo: true, tipo: 'disuelve', e: 'La sal se disuelve en el agua: no se distinguen sus granos. Es una disolución.' },
  azucar: { n: 'Azúcar', c: '#fff1cf', homo: true, tipo: 'disuelve', e: 'El azúcar se disuelve en el agua: ya no se ven los cristales.' },
  alcohol: { n: 'Alcohol', c: '#cfe9ff', homo: true, tipo: 'mezcla', e: 'El alcohol etílico se mezcla con el agua por completo: no se ven dos fases.' },
  arena: { n: 'Arena', c: '#d9b26a', homo: false, tipo: 'hunde', e: 'La arena no se disuelve: se hunde y se ve a simple vista.' },
  aceite: { n: 'Aceite', c: '#ffd23f', homo: false, tipo: 'flota', e: 'El aceite no se mezcla con el agua: forma una capa arriba y se ven dos fases.' },
  harina: { n: 'Harina', c: '#f1e6cf', homo: false, tipo: 'turbia', e: 'La harina no se disuelve: enturbia el agua y con el tiempo se asienta.' }
};
function labQuim() {
  var box = $('lab-box'), mez = [], agit = 0, hechos = [false, false, false], ok = 0, resp = false;
  labT = { raf: 0, to: 0 };
  box.innerHTML = '<p class="labp">Agrega sustancias al vaso con agua, agita y decide: ¿la mezcla es homogénea o heterogénea?</p>' +
    '<svg class="labsvg vaso" id="lq-sv" viewBox="0 0 200 170" role="img" aria-label="Vaso de precipitados con agua"></svg>' +
    '<div class="labbtns" id="lq-add"></div><div class="labbtns"><button class="cta sec" id="lq-ag" type="button">Agitar</button><button class="cta sec" id="lq-lim" type="button">Vaciar vaso</button></div>' +
    '<p class="labq" id="lq-q" hidden>¿Qué tipo de mezcla es?</p><div class="labbtns" id="lq-r" hidden><button class="cta" data-r="1" type="button">Homogénea</button><button class="cta" data-r="0" type="button">Heterogénea</button></div>' +
    '<div class="fb" id="lq-fb" hidden role="status"></div><div id="lq-ret"></div>';
  Object.keys(SUST).forEach(function (k) {
    var b = el('button', 'sust', SUST[k].n); b.type = 'button'; b.style.setProperty('--sc', SUST[k].c); b.onclick = function () { if (mez.length >= 3 && mez.indexOf(k) < 0) { say('El vaso ya tiene 3 sustancias. Vacíalo para empezar otra mezcla.'); SFX.no(); return; } if (mez.indexOf(k) > -1) { SFX.no(); return; } mez.push(k); agit = 0; resp = false; SFX.pop(); pinta(); }; $('lq-add').appendChild(b);
  });
  function pinta() {
    var h = '<path d="M50 18 L50 142 Q50 156 64 156 L136 156 Q150 156 150 142 L150 18" fill="rgba(255,255,255,.35)" stroke="#8aa0cc" stroke-width="4" stroke-linejoin="round"/><rect x="53" y="62" width="94" height="91" rx="8" fill="#bfe0ff" opacity=".8"/>';
    var turbia = mez.indexOf('harina') > -1, ac = mez.indexOf('aceite') > -1;
    if (turbia) h += '<rect x="53" y="62" width="94" height="91" rx="8" fill="#f1e6cf" opacity="' + (agit ? .55 : .25) + '"/>';
    if (ac) h += '<rect x="53" y="62" width="94" height="14" fill="#ffd23f" opacity=".9"/><path d="M53 62 H147" stroke="#e6a400" stroke-width="2"/>';
    mez.forEach(function (k, j) {
      var s = SUST[k], g = '';
      if (k === 'arena') for (var i = 0; i < 26; i++) g += '<circle cx="' + (60 + (i * 37) % 80) + '" cy="' + (146 - Math.floor(i / 9) * 4 - (i % 3)) + '" r="2.6" fill="#c99a45"/>';
      if ((k === 'sal' || k === 'azucar') && !agit) for (var i = 0; i < 14; i++) g += '<rect x="' + (72 + (i * 29) % 56) + '" y="' + (132 + (i % 4) * 5) + '" width="4" height="4" fill="' + (k === 'sal' ? '#fff' : '#ffe6a8') + '" stroke="#b9c3d9" stroke-width=".6" transform="rotate(' + (i * 20) + ')" style="transform-box:fill-box;transform-origin:center"/>';
      if (k === 'harina' && !agit) for (var i = 0; i < 10; i++) g += '<circle cx="' + (62 + (i * 31) % 76) + '" cy="' + (68 + (i % 4) * 4) + '" r="2" fill="#fff6e0"/>';
      if (k === 'aceite' && agit) for (var i = 0; i < 8; i++) g += '<circle cx="' + (62 + (i * 23) % 76) + '" cy="' + (84 + (i % 3) * 7) + '" r="' + (2.5 + i % 3) + '" fill="#ffd23f" opacity=".9"/>';
      h += g;
    });
    var disueltos = mez.filter(function (k) { return SUST[k].homo; }).length;
    if (disueltos && agit) h += '<text x="100" y="112" text-anchor="middle" font-size="11" font-weight="800" fill="#2a5a8f">' + (mez.every(function (k) { return SUST[k].homo; }) ? 'una sola fase' : '') + '</text>';
    $('lq-sv').innerHTML = h + '<text x="100" y="14" text-anchor="middle" font-size="10" font-weight="800" fill="var(--soft)">' + (mez.length ? 'Agua + ' + mez.map(function (k) { return SUST[k].n.toLowerCase(); }).join(' + ') : 'Solo agua') + '</text>';
    $('lq-q').hidden = $('lq-r').hidden = !(mez.length && agit); $('lq-fb').hidden = true;
  }
  $('lq-ag').onclick = function () { if (!mez.length) { say('Primero agrega una sustancia.'); SFX.no(); return; } agit = 1; SFX.tick(); setTimeout(function () { SFX.pop(); }, 120); pinta(); };
  $('lq-lim').onclick = function () { mez = []; agit = 0; resp = false; SFX.tick(); pinta(); };
  $('lq-r').querySelectorAll('button').forEach(function (b) {
    b.onclick = function () {
      if (resp || !mez.length) return; var homo = mez.every(function (k) { return SUST[k].homo; }), dijo = b.dataset.r === '1', bien = dijo === homo; resp = true;
      var fb = $('lq-fb'); fb.hidden = false; fb.className = 'fb ' + (bien ? 'good' : 'nope'); fb.innerHTML = '';
      fb.appendChild(el('strong', '', bien ? '¡Correcto! Es una mezcla ' + (homo ? 'homogénea.' : 'heterogénea.') : 'Casi. Es una mezcla ' + (homo ? 'homogénea.' : 'heterogénea.')));
      mez.forEach(function (k) { fb.appendChild(el('div', '', SUST[k].n + ': ' + SUST[k].e)); });
      fb.appendChild(el('div', 'ref', homo ? 'Homogénea: tiene una sola fase y no se distinguen sus componentes.' : 'Heterogénea: se distinguen sus componentes o tiene más de una fase.'));
      if (bien) { SFX.ok(); ok++; var r = homo ? (mez.length > 1 ? 1 : 0) : 2; if (!hechos[r]) { hechos[r] = true; labPremio('quim|' + r, 4); } } else SFX.no();
      $('lq-ret').innerHTML = labRetos(['Homogénea con agua + 1 sustancia', 'Homogénea con 2 o más sustancias', 'Heterogénea'], hechos);
    };
  });
  $('lq-ret').innerHTML = labRetos(['Homogénea con agua + 1 sustancia', 'Homogénea con 2 o más sustancias', 'Heterogénea'], hechos);
  pinta();
}
JUEGOS.lab = { titulo: 'Mini laboratorio', sub: 'Una simulación para experimentar con tu materia.', iniciar: function () { abreLab(); },
  ico: '<svg viewBox="0 0 48 48"><path d="M19 6 H29 M21 6 V20 L10 38 Q8 42 12 42 H36 Q40 42 38 38 L27 20 V6" fill="var(--brand-soft)" stroke="var(--brand)" stroke-width="2.6" stroke-linejoin="round" stroke-linecap="round"/><circle cx="20" cy="34" r="2.4" fill="var(--brand)"/><circle cx="27" cy="31" r="1.8" fill="#ff8f1f"/></svg>' };
