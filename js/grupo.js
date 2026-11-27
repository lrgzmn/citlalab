/* =========================================================
   BANCO DEL GRUPO Y CIELO DEL GRUPO
   Las preguntas y los cielos se comparten con códigos de texto (se copian y se pegan): no hay servidor, cuentas ni internet.
   Todo lo que se pega se revisa y se limpia antes de guardarlo, y se muestra siempre como texto.
   ========================================================= */
function limpia(t, max) { return String(t == null ? '' : t).replace(/[\u0000-\u001f\u007f<>]/g, '').replace(/\s+/g, ' ').trim().slice(0, max); }
function hashTxt(t) { var h = 5381, i; for (i = 0; i < t.length; i++) h = ((h << 5) + h + t.charCodeAt(i)) | 0; return (h >>> 0).toString(36); }
function nickPropio() { var n = limpia((ST.alumno || '').split(/\s+/)[0], 16); return n || 'Anónimo'; }
function idPropio() { if (!ST.banco.id) { ST.banco.id = Math.random().toString(36).slice(2, 8); guardar(); } return ST.banco.id; }
function bancoCod(o) { return 'CTL:' + btoa(unescape(encodeURIComponent(JSON.stringify(o)))).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, ''); }
function bancoLee(txt) {
  var t = String(txt || '').replace(/\s+/g, '').replace(/^["'`]+|["'`]+$/g, ''); if (t.indexOf('CTL:') !== 0 || t.length > 90000) return null;
  try { var b = t.slice(4).replace(/-/g, '+').replace(/_/g, '/'); while (b.length % 4) b += '='; var o = JSON.parse(decodeURIComponent(escape(atob(b)))); return o && o.app === 'citlalab' && (o.t === 'q' || o.t === 's') ? o : null; } catch (e) { return null; }
}
function fichaValida(m, f) { return ORDEN.indexOf(m) > -1 && fichasDe(m).some(function (x) { return x.ficha.id === f; }); }
function preguntaLimpia(x, autorDef) {
  if (!x || typeof x !== 'object' || !fichaValida(x.m, x.f) || !Array.isArray(x.o) || x.o.length !== 4) return null;
  var q = limpia(x.q, 160), o = x.o.map(function (t) { return limpia(t, 80); }), e = limpia(x.e, 180);
  if (q.length < 8 || o.some(function (t) { return !t; })) return null;
  var vistos = {}, dup = false; o.forEach(function (t) { var k = t.toLowerCase(); if (vistos[k]) dup = true; vistos[k] = 1; }); if (dup) return null;
  return { id: 'u-' + hashTxt(x.m + x.f + q + o[0]), m: x.m, f: x.f, q: q, o: o, e: e, a: limpia(x.a, 16) || autorDef || 'Anónimo' };
}
function qDeBanco(it) {
  var n = numFicha(fichasDe(it.m).filter(function (f) { return f.ficha.id === it.f; })[0], 0);
  return { id: it.id, t: 'u', k: 'opcion', q: it.q, o: it.o.slice(), e: it.e || '', r: 'Pregunta de ' + it.a + ' · Ficha ' + n, materia: it.m, ficha: it.f, tema: it.f + '.u', sinXP: true };
}
/* las preguntas del banco no dan puntos ni cambian el progreso: son para aprender juntas y juntos */
(function () {
  var rg0 = registrar; registrar = function (q) { if (q && q.sinXP) return 0; return rg0.apply(this, arguments); };
  var mq0 = mostrarQ; mostrarQ = function () { mq0(); var q = quiz.qs[quiz.i]; if (q && q.sinXP) $('q-tag').textContent = q.r; };
})();
function jugarBanco(lista) {
  if (!lista.length) { $('gr-msg1').textContent = 'Todavía no hay preguntas para jugar.'; return; }
  var s = cur(); quiz = { i: 0, ok: 0, xp: 0, qs: mezclar(lista).slice(0, 8).map(qDeBanco), et0: etapa(s), corrige: false }; go('quiz'); mostrarQ();
}
function bancoCopia(txt, msgId, ok) { var ta = $('gr-out'); ta.value = txt; copiarTexto(txt, ta, function (r) { $(msgId).textContent = r ? ok : 'Selecciona el texto del recuadro y cópialo.'; if (r) ta.hidden = true; }); }


/* ---------- Meta semanal del grupo ----------
   Cada semana (de lunes a domingo) cuenta cuántas estrellas distintas repasó cada quien con al menos un acierto.
   La suma entre todas y todos se compara con una meta que crece con el tamaño del grupo. No hay ranking ni nombres. */
function semKey() {
  var p = fechaHoy().split('-'), d = new Date(Date.UTC(+p[0], +p[1] - 1, +p[2])), dia = d.getUTCDay() || 7;
  d.setUTCDate(d.getUTCDate() + 4 - dia); var ini = new Date(Date.UTC(d.getUTCFullYear(), 0, 1));
  return d.getUTCFullYear() + '-W' + ('0' + Math.ceil(((d - ini) / 86400000 + 1) / 7)).slice(-2);
}
function semActual() { var B = ST.banco, k = semKey(); if (!B.sem || B.sem.k !== k) B.sem = { k: k, s: {}, fest: B.sem ? B.sem.fest : '' }; return B.sem; }
function semCuenta() { return Object.keys(semActual().s).length; }
function metaDatos() {
  var B = ST.banco, k = semKey(), tot = semCuenta(), N = 1;
  Object.keys(B.cielos).forEach(function (u) { var w = B.cielos[u].w; N++; if (w && w.k === k) tot += w.n; });
  return { tot: tot, N: N, meta: Math.max(10, Math.min(150, 5 * N)) };
}
(function () {
  var rg1 = registrar;
  registrar = function (q, bien) {
    var r = rg1.apply(this, arguments);
    if (bien && q && !q.sinXP && q.tema) { var f = String(q.tema).split('.')[0]; if (fichaValida(ST.activa, f)) { var S = semActual(); if (!S.s[ST.activa + ':' + f]) { S.s[ST.activa + ':' + f] = 1; guardar(); } } }
    return r;
  };
})();
function pintaMeta(host) {
  var D = metaDatos(), pct = Math.min(100, Math.round(D.tot / D.meta * 100)), listo = D.tot >= D.meta; host.innerHTML = '';
  host.className = 'metacard' + (listo ? ' listo' : '');
  host.appendChild(el('h3', '', listo ? '¡Meta de la semana cumplida!' : 'Meta de la semana'));
  host.appendChild(el('p', 'meta-n', D.tot + ' de ' + D.meta + ' estrellas'));
  var b = el('div', 'meta-bar'); b.setAttribute('role', 'progressbar'); b.setAttribute('aria-valuemin', '0'); b.setAttribute('aria-valuemax', D.meta); b.setAttribute('aria-valuenow', Math.min(D.tot, D.meta));
  var i = el('i'); i.style.width = pct + '%'; b.appendChild(i); host.appendChild(b);
  host.appendChild(el('p', 'hint', listo ? 'Entre todas y todos lo lograron. La semana que viene empieza una meta nueva.' : (D.N === 1 ? 'Repasa fichas distintas para encender estrellas. Si pegas los códigos de tu grupo, la meta se suma entre todas y todos.' : 'Cada estrella cuenta una vez por persona y por semana. Para sumar a alguien, pega su código de cielo (se actualiza cuando lo copia otra vez).')));
  if (listo && ST.banco.sem.fest !== ST.banco.sem.k) { ST.banco.sem.fest = ST.banco.sem.k; guardar(); try { confeti(24); SFX.up(); } catch (e) {} }
}

/* ---------- Pantalla ---------- */
function renderGrupo() {
  pintaMeta($('gr-meta'));
  var mat = ST.activa, B = ST.banco, sel = $('gr-f'); sel.innerHTML = '';
  fichasOrden(mat).forEach(function (f) { var o = el('option', '', 'Ficha ' + numFicha(f, 0) + ' · ' + f.ficha.titulo.replace(/^Ficha \d+ · /, '')); o.value = f.ficha.id; sel.appendChild(o); });
  var mias = B.mias.filter(function (x) { return x.m === mat; }), gr = B.grupo.filter(function (x) { return x.m === mat; });
  $('gr-mt').textContent = 'Mis preguntas de ' + MAT[mat].n + ' (' + mias.length + ')';
  function lista(host, arr, fuente) {
    host.innerHTML = '';
    if (!arr.length) { host.appendChild(el('p', 'p', fuente === 'mias' ? 'Aún no has escrito preguntas de esta materia.' : 'Todavía no hay preguntas del grupo en esta materia.')); return; }
    arr.slice(0, 30).forEach(function (x) {
      var d = el('div', 'grit'), tx = el('span'); tx.appendChild(el('b', '', x.q)); tx.appendChild(el('small', '', 'Ficha ' + numFicha(fichasDe(x.m).filter(function (f) { return f.ficha.id === x.f; })[0], 0) + ' · ' + x.a)); d.appendChild(tx);
      var b = el('button', 'grx', '×'); b.type = 'button'; b.setAttribute('aria-label', 'Quitar esta pregunta'); b.onclick = function () { B[fuente] = B[fuente].filter(function (y) { return y.id !== x.id; }); guardar(); renderGrupo(); }; d.appendChild(b); host.appendChild(d);
    });
    if (arr.length > 30) host.appendChild(el('p', 'hint', 'Se muestran las primeras 30.'));
  }
  lista($('gr-mias'), mias, 'mias'); lista($('gr-grupo'), gr, 'grupo');
  $('gr-jm').disabled = !mias.length; $('gr-cm').disabled = !mias.length; $('gr-jg').disabled = !gr.length; $('gr-cg').disabled = !(gr.length || mias.length);
  var ncie = Object.keys(B.cielos).length; $('gr-vc').textContent = 'Ver el cielo del grupo' + (ncie ? ' (' + (ncie + 1) + ')' : '');
}
$('gr-save').onclick = function () {
  var m1 = $('gr-msg1'), mat = ST.activa, o = [0, 1, 2, 3].map(function (i) { return $('gr-o' + i).value; });
  var it = preguntaLimpia({ m: mat, f: $('gr-f').value, q: $('gr-q').value, o: o, e: $('gr-e').value, a: nickPropio() }, nickPropio());
  if (!it) { m1.textContent = 'Escribe la pregunta (mínimo 8 letras) y cuatro respuestas distintas, una correcta y tres incorrectas.'; SFX.no(); return; }
  var B = ST.banco; if (B.mias.some(function (x) { return x.id === it.id; })) { m1.textContent = 'Esa pregunta ya la tienes.'; SFX.no(); return; }
  if (B.mias.length >= 60) { m1.textContent = 'Ya tienes 60 preguntas. Quita alguna para escribir otra.'; SFX.no(); return; }
  B.mias.unshift(it); guardar(); ['gr-q', 'gr-o0', 'gr-o1', 'gr-o2', 'gr-o3', 'gr-e'].forEach(function (id) { $(id).value = ''; });
  m1.textContent = '¡Pregunta guardada! Ya puedes jugarla o compartirla.'; SFX.ok(); confeti(14); renderGrupo();
};
$('gr-jm').onclick = function () { jugarBanco(ST.banco.mias.filter(function (x) { return x.m === ST.activa; })); };
$('gr-jg').onclick = function () { jugarBanco(ST.banco.grupo.filter(function (x) { return x.m === ST.activa; })); };
$('gr-cm').onclick = function () {
  var l = ST.banco.mias.filter(function (x) { return x.m === ST.activa; });
  bancoCopia(bancoCod({ app: 'citlalab', t: 'q', qs: l.map(function (x) { return { m: x.m, f: x.f, q: x.q, o: x.o, e: x.e, a: x.a }; }) }), 'gr-msg', 'Código copiado. Pásalo a tu docente o a tu grupo para que lo peguen en su Banco.');
};
$('gr-cg').onclick = function () {
  var B = ST.banco, l = B.grupo.concat(B.mias).filter(function (x) { return x.m === ST.activa; });
  bancoCopia(bancoCod({ app: 'citlalab', t: 'q', qs: l.slice(0, 80).map(function (x) { return { m: x.m, f: x.f, q: x.q, o: x.o, e: x.e, a: x.a }; }) }), 'gr-msg', 'Banco copiado. Quienes lo peguen recibirán estas preguntas.');
};
$('gr-add').onclick = function () {
  var msg = $('gr-msg'), o = bancoLee($('gr-in').value), B = ST.banco;
  if (!o) { msg.textContent = 'No reconozco ese código. Debe empezar con CTL: y haberse copiado completo.'; SFX.no(); return; }
  if (o.t === 'q') {
    var ids = {}; B.grupo.concat(B.mias).forEach(function (x) { ids[x.id] = 1; }); var nuevos = 0, mias = idPropio();
    (Array.isArray(o.qs) ? o.qs.slice(0, 80) : []).forEach(function (x) { var it = preguntaLimpia(x); if (it && !ids[it.id] && B.grupo.length < 120) { B.grupo.push(it); ids[it.id] = 1; nuevos++; } });
    guardar(); msg.textContent = nuevos ? 'Agregué ' + nuevos + (nuevos === 1 ? ' pregunta' : ' preguntas') + ' al grupo.' : 'No había preguntas nuevas (o no son de fichas de esta app).';
  } else {
    var u = limpia(o.u, 10) || hashTxt(JSON.stringify(o.n || {})), n = {}, ok = false;
    ORDEN.forEach(function (m) { var a = o.n && o.n[m]; if (Array.isArray(a) && a.length === 10) { n[m] = a.map(function (v) { v = +v; return v >= 0 && v <= 3 ? Math.round(v) : 0; }); ok = true; } });
    if (!ok) { msg.textContent = 'Ese cielo no tiene estrellas que pueda leer.'; SFX.no(); return; }
    if (u === idPropio()) { msg.textContent = 'Ese es tu propio cielo; ya cuenta en el del grupo.'; return; }
    if (!B.cielos[u] && Object.keys(B.cielos).length >= 40) { msg.textContent = 'El cielo del grupo ya tiene 40 personas.'; return; }
    B.cielos[u] = { n: n, d: fechaHoy(), w: (o.w && /^\d{4}-W\d{2}$/.test(String(o.w.k)) && +o.w.n >= 0) ? { k: String(o.w.k), n: Math.min(30, Math.round(+o.w.n)) } : null }; guardar(); msg.textContent = 'Cielo agregado. ¡Ya brilla un poco más el del grupo!';
  }
  $('gr-in').value = ''; SFX.ok(); renderGrupo();
};
function nivelesPropios() {
  var o = {}; ORDEN.forEach(function (m) { var s = ST.m[m]; if (!s || !fichasDe(m).length) return; o[m] = estrellasDe(s, m).map(function (e) { return e.nivel === 0 ? 0 : e.nivel === 1 ? 1 : e.nivel === 3 ? 3 : 2; }); });
  return o;
}
$('gr-cc').onclick = function () { bancoCopia(bancoCod({ app: 'citlalab', t: 's', u: idPropio(), a: nickPropio(), n: nivelesPropios(), w: { k: semKey(), n: semCuenta() } }), 'gr-msg', 'Código de tu cielo copiado. Quien lo pegue sumará tus estrellas al cielo del grupo (sin tu nombre).'); };
$('gr-vc').onclick = function () { go('cgrupo'); };
$('gr-back').onclick = function () { go('cielo'); };
$('cg-back').onclick = function () { go('grupo'); };

/* ---------- Cielo del grupo: estrellas promedio, sin nombres ni posiciones ---------- */
function renderCGrupo() {
  pintaMeta($('cg-meta'));
  var B = ST.banco, parts = [nivelesPropios()].concat(Object.keys(B.cielos).map(function (k) { return B.cielos[k].n; })), N = parts.length, host = $('cg-skies'); host.innerHTML = '';
  $('cg-sub').textContent = N === 1 ? 'Por ahora solo brilla tu cielo. Pega los códigos de tus compañeras y compañeros para sumarlos.' : 'Cielo de ' + N + ' personas. Entre todas y todos brilla más.';
  ORDEN.forEach(function (m) {
    var fs = fichasOrden(m); if (!fs.length) return;
    var est = fs.map(function (f, i) {
      var vals = parts.map(function (p) { return p[m] ? p[m][i] || 0 : 0; }), enc = vals.filter(function (v) { return v > 0; }).length, rad = vals.filter(function (v) { return v === 3; }).length, avg = vals.reduce(function (a, b) { return a + b; }, 0) / N;
      return { i: i, id: f.ficha.id, num: numFicha(f, i), titulo: f.ficha.titulo.replace(/^Ficha \d+ · /, ''), nivel: enc ? (avg >= 2.4 ? 3 : 2) : 0, br: enc ? .4 + .6 * (avg / 3) : .25, sello: avg >= 2.4, enc: enc, rad: rad, vistas: enc, pend: 0 };
    });
    var tot = est.reduce(function (a, e) { return a + (e.nivel ? 1 : 0); }, 0);
    var sec = el('div', 'cgs'), h = el('div', 'cgs-h'); h.innerHTML = '<b>' + esc(MAT[m].n) + '</b><small>' + tot + ' de 10 estrellas encendidas</small>'; sec.appendChild(h);
    var w = el('div', 'cielo'); var sv = document.createElementNS('http://www.w3.org/2000/svg', 'svg'); sv.setAttribute('viewBox', '0 0 300 240'); sv.id = 'cgsv-' + m; sv.setAttribute('role', 'group'); sv.setAttribute('aria-label', 'Cielo del grupo de ' + MAT[m].n); w.appendChild(sv); sec.appendChild(w);
    var inf = el('div', 'stcard'); inf.appendChild(el('p', 'p', 'Toca una estrella para ver cuántas personas la encendieron.')); inf.style.textAlign = 'center'; sec.appendChild(inf);
    host.appendChild(sec);
    dibujaCielo(sv, m, est, function (i) {
      var e = est[i], v = VALOR[e.id] || ['', '']; tono(PE[i % 8], .5, 'sine', .09, 0, 1); inf.style.textAlign = 'left'; inf.innerHTML = '';
      var t = el('div', 'stc-h'); t.innerHTML = '<span class="stc-n">' + e.num + '</span><b>' + esc(e.titulo) + '</b>'; inf.appendChild(t);
      inf.appendChild(el('p', 'stc-real', 'Estrella real: ' + CONSTEL[m].st[i][0] + ', de ' + CONSTEL[m].n + '.'));
      var q = el('p', 'stc-v'); q.innerHTML = '<span class="stc-tag">' + esc(v[0]) + '</span> ' + esc(v[1]); inf.appendChild(q);
      inf.appendChild(el('p', 'stc-e', e.enc + ' de ' + N + (N === 1 ? ' persona la encendió' : ' personas la encendieron') + (e.rad ? ' y ' + e.rad + ' la tienen radiante.' : '.')));
    }, -1);
  });
}
(function () {
  VISTAS.grupo = { rt: 1 }; VISTAS.cgrupo = { rt: 1 };
  var g0 = go; go = function (v) { g0(v); if (v === 'grupo') renderGrupo(); else if (v === 'cgrupo') renderCGrupo(); };
})();
