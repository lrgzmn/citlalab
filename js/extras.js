/* HERRAMIENTAS DEL MAESTRO
   ?revisar=1  → muestra un reporte para comprobar que las fichas nuevas están bien escritas.
   ?demo=1     → panel para probar la app (transformar, evolucionar, cambiar de día...). Los alumnos no lo necesitan. */

function validar() {
  var avisos = (typeof ERRORES_ARCHIVO !== 'undefined' ? ERRORES_ARCHIVO.slice() : []), resumen = [], ids = {};
  REPASO.fichas.forEach(function (f) {
    var etq = f.ficha && f.ficha.id ? f.ficha.id : '(sin id)', r = { id: etq, titulo: f.ficha ? f.ficha.titulo : '', mat: f.materia, op: 0, vf: 0, ord: 0, temas: {} };
    if (!MAT[f.materia]) avisos.push('Ficha ' + etq + ': la materia «' + f.materia + '» no existe (usa fisica, biologia o quimica).');
    if (!f.ficha || !f.ficha.id || !f.ficha.titulo) avisos.push('Ficha ' + etq + ': falta id o título.');
    (f.temas || []).forEach(function (tm) { if (tm.icono && typeof ICONOS !== 'undefined' && !ICONOS[tm.icono]) avisos.push('Ficha ' + etq + ', tema ' + tm.id + ': el dibujo «' + tm.icono + '» no existe (revisa los nombres en la plantilla).'); });
    (typeof REPASO !== 'undefined' ? REPASO.lecturas : []).forEach(function () {});
    var tk = {}; f.temas.forEach(function (t) { tk[t.id] = 1; r.temas[t.id] = 0; });
    f.preguntas.forEach(function (q) {
      var w = function (m) { avisos.push(q.id + ': ' + m); };
      if (!q.id) w('falta el id.'); else if (ids[q.id]) w('el id está repetido.'); ids[q.id] = 1;
      if (!tk[q.t]) w('el tema «' + q.t + '» no está en la lista de temas de la ficha.'); else r.temas[q.t]++;
      if (!q.q) w('falta el texto de la pregunta.');
      if (!q.e) w('falta la explicación.'); if (!q.r) w('falta la página del libro.');
      if (q.k === 'opcion') { r.op++; if (q.m) r.cm = (r.cm || 0) + 1; if (!q.o || q.o.length < 2) w('necesita al menos 2 opciones.'); else if (q.o.length > 5) w('tiene demasiadas opciones.'); else if (new Set(q.o).size !== q.o.length) w('tiene opciones repetidas.'); }
      else if (q.k === 'vf') { r.vf++; if (typeof q.v !== 'boolean') w('el valor debe ser true o false (sin comillas).'); }
      else if (q.k === 'orden') { r.ord++; if (!q.items || q.items.length < 2) w('necesita al menos 2 elementos.'); }
      else w('tipo de pregunta desconocido.');
    });
    resumen.push(r);
  });
  Object.keys(REPASO.porques).forEach(function (id) {
    var q = null; REPASO.fichas.forEach(function (f) { f.preguntas.forEach(function (x) { if (x.id === id) q = x; }); });
    if (!q) { avisos.push('Por qué no «' + id + '»: esa pregunta no existe.'); return; }
    if (q.k !== 'opcion') { avisos.push('Por qué no «' + id + '»: solo sirve en preguntas de opción múltiple.'); return; }
    Object.keys(REPASO.porques[id]).forEach(function (op) { if (q.o.indexOf(op) < 1) avisos.push('Por qué no «' + id + '»: «' + op + '» no coincide con ninguna opción incorrecta (debe estar escrita exactamente igual).'); });
  });
  var lects = [], lids = {};
  REPASO.lecturas.forEach(function (L) {
    var w = function (m) { avisos.push('Lectura ' + (L.id || '(sin id)') + ': ' + m); }, ficha = null;
    REPASO.fichas.forEach(function (f) { if (f.ficha.id === L.ficha && f.materia === L.materia) ficha = f; });
    if (!L.id) w('falta el id.'); else if (lids[L.id]) w('el id está repetido.'); lids[L.id] = 1;
    if (!MAT[L.materia]) w('la materia «' + L.materia + '» no existe.');
    if (!ficha) w('la ficha «' + L.ficha + '» no existe (la lectura debe ir ligada a una ficha cargada).');
    else if (!ficha.temas.some(function (x) { return x.id === L.tema; })) w('el tema «' + L.tema + '» no está en la ficha.');
    if (!L.titulo) w('falta el título.');
    if (!L.texto || !L.texto.length) { w('falta el texto.'); return; }
    var pal = L.texto.join(' ').split(/\s+/).length;
    if (pal < 35) w('el texto es muy corto (' + pal + ' palabras); lo ideal son 60 a 90.'); else if (pal > 120) w('el texto es largo (' + pal + ' palabras). Para empezar poco a poco, lo ideal son 60 a 90; los textos largos desaniman.');
    var hab = {}, v = {}, hayN = false;
    L.items.forEach(function (it, i) {
      var q = 'pregunta ' + (i + 1);
      if (!it.q) w(q + ': falta el enunciado.'); if (!it.e) w(q + ': falta la explicación.');
      if (!HAB[it.hab]) w(q + ': la habilidad «' + it.hab + '» no existe (literal, inferencia, vocabulario, evidencia o secuencia).'); hab[it.hab] = (hab[it.hab] || 0) + 1;
      (it.ev || []).forEach(function (n) { if (typeof n !== 'number' || n < 0 || n >= L.texto.length) w(q + ': la oración ' + n + ' no existe en el texto (van de 0 a ' + (L.texto.length - 1) + ').'); });
      if (it.k === 'opcion') {
        if (!it.o || it.o.length < 2) w(q + ': necesita al menos 2 opciones.'); else if (new Set(it.o).size !== it.o.length) w(q + ': tiene opciones repetidas.');
        if (it.vfn) { v[it.o[it.ok]] = 1; if (it.ok < 0) w(q + ': la respuesta debe ser \'v\', \'f\' o \'n\'.'); if (it.ok === 2) hayN = true; }
      } else if (it.k === 'evid') { if (!it.ev || !it.ev.length) w(q + ': debe indicar la oración que sirve de prueba.'); }
      else if (it.k === 'orden') { if (!it.items || it.items.length < 3) w(q + ': necesita al menos 3 pasos.'); }
      else w(q + ': tipo desconocido.');
    });
    if (L.explica) {
      var E = L.explica;
      if (!E.q || !E.modelo) w('«explica» necesita q (la pregunta) y modelo (la respuesta modelo).');
      if (!E.claves || E.claves.length < 2) w('«explica» necesita al menos 2 ideas clave.');
      else E.claves.forEach(function (cl, i) { if (!cl.t || !cl.k || !cl.k.length) w('idea clave ' + (i + 1) + ': necesita t (texto) y k (lista de palabras clave).'); });
    }
    if (L.items.length < 5) w('conviene tener al menos 5 preguntas (tiene ' + L.items.length + ').');
    if (Object.keys(hab).length < 3) w('conviene mezclar al menos 3 habilidades distintas.');
    lects.push({ id: L.id, titulo: L.titulo, mat: L.materia, pal: pal, n: L.items.length, hab: hab, hayN: hayN });
  });
  return { avisos: avisos, resumen: resumen, lecturas: lects };
}
function revisar() {
  var v = validar(), d = el('div', 'revisar'), h = '<div class="rv"><h2>Revisión de fichas</h2>';
  h += v.avisos.length ? '<p class="rvbad">' + v.avisos.length + ' aviso(s) por corregir:</p><ul>' + v.avisos.map(function (a) { return '<li>' + esc(a) + '</li>'; }).join('') + '</ul>' : '<p class="rvok">Todo en orden: no se encontraron errores.</p>';
  h += '<h3>Fichas cargadas</h3>';
  if (!v.resumen.length) h += '<p>No se cargó ninguna ficha. Revisa data/lista.js.</p>';
  v.resumen.forEach(function (r) {
    h += '<p><b>' + esc(r.titulo) + '</b> (' + r.mat + ')<br>' + (r.op + r.vf + r.ord) + ' preguntas: ' + r.op + ' de opción, ' + r.vf + ' de verdadero o falso, ' + r.ord + ' de ordenar' + (r.cm ? ' (incluye ' + r.cm + ' de «Corrige a tu mascota»)' : '') + '.<br>Por tema: ' +
      Object.keys(r.temas).map(function (t) { return t + ' = ' + r.temas[t]; }).join(' · ') + '</p>';
    Object.keys(r.temas).forEach(function (t) { if (r.temas[t] < 4) h += '<p class="rvbad">El tema ' + t + ' tiene solo ' + r.temas[t] + (r.temas[t] === 1 ? ' pregunta' : ' preguntas') + '; conviene tener al menos 4.</p>'; });
  });
  if (v.lecturas.length) {
    h += '<h3>Lecturas científicas</h3>';
    v.lecturas.forEach(function (L) { h += '<p><b>' + esc(L.titulo) + '</b> (' + L.mat + ')<br>' + L.pal + ' palabras · ' + L.n + ' preguntas · ' + Object.keys(L.hab).map(function (k) { return k + ' = ' + L.hab[k]; }).join(' · ') + '</p>'; });
  }
  h += '<button class="cta" id="rv-x">Cerrar</button></div>'; d.innerHTML = h; document.body.appendChild(d);
  $('rv-x').onclick = function () { d.remove(); };
}
function demo() {
  var p = el('div', 'demo'); p.innerHTML = '<b>Panel de pruebas</b>';
  function b(t, fn) { var x = el('button', '', t); x.onclick = function () { fn(); }; p.appendChild(x); }
  function refresca() { guardar(); petKey = ''; if (vistaActual === 'ob0') return; renderPet(); renderTop(); if (vistaActual === 'home') renderHome(); else go(vistaActual); chequearEvolucion(); }
  b('Reiniciar todo', function () { borrarTodo(); petKey = ''; primeraVez(); });
  b('+10 XP', function () { cur().xp += 10; refresca(); });
  b('Siguiente etapa', function () { var s = cur(), e = etapa(s); s.xp = Math.max(s.xp, XP_ETAPA[Math.min(3, e + 1)]); refresca(); });
  b('Día siguiente', function () { DIA_OFFSET++; ORDEN.forEach(function (id) { var s = ST.m[id]; if (s) actualizarTiempo(s); }); refresca(); say('Un día después...'); });
  b('Dominar 5 temas', function () {
    var s = cur(), n = 0; temasDeMateria(ST.activa).slice(0, 5).forEach(function (t) { preguntasDe(ST.activa).forEach(function (q) { if (q.tema === t.key) s.box[q.id] = 3; }); n++; });
    var nu = sincronizar(s, ST.activa), sl = sincronizarSellos(s, ST.activa); refresca(); if (sl.length) say('¡Ganaste un sello! Mira Progreso.'); else if (nu.length) say('Se desbloqueó: ' + nu.map(function (x) { return x.it.n; }).join(', '));
  });
  b('Revisar fichas', revisar);
  document.body.appendChild(p);
}


/* ---------- Resumen para la familia (la persona se lo pasa a su familia; ellos lo mandan al docente si lo pide) ---------- */
function resumenMaestro() {
  var L = [], nom = (ST.alumno || '').trim(), f = fechaHoy().split('-');
  L.push('REPORTE DE REPASO DE CIENCIAS');
  L.push('Estudiante: ' + (nom || '(sin nombre)'));
  L.push('Fecha: ' + f[2] + '/' + f[1] + '/' + f[0]);
  var sem = 0, hoy = new Date(); if (DIA_OFFSET) hoy.setDate(hoy.getDate() + DIA_OFFSET);
  for (var i = 0; i < 7; i++) { var d = new Date(hoy); d.setDate(d.getDate() - i); if (ST.dias.indexOf(fechaDe(d)) > -1) sem++; }
  L.push('Constancia: repasó ' + sem + ' de los últimos 7 días' + (rachaVisible() > 1 ? ' (lleva ' + rachaVisible() + ' días seguidos)' : '') + '.');
  var alguna = false, ideas = [];
  ORDEN.forEach(function (mat) {
    var s = ST.m[mat]; if (!s) return;
    var hayHab = HAB_ORDEN.some(function (h) { return s.hab[h] && s.hab[h].n; });
    if (!(s.n || s.xp || hayHab)) return;
    alguna = true;
    L.push(''); L.push(MAT[mat].n.toUpperCase());
    if (s.n) L.push('- Ha respondido ' + s.n + ' preguntas de repaso y acierta el ' + Math.round(s.c / s.n * 100) + ' %.');
    var tem = temasDeMateria(mat);
    if (tem.length) {
      L.push('- Temas que ya domina: ' + dominados(s, mat) + ' de ' + tem.length + '.');
      var deb = [], sin = [];
      tem.forEach(function (t) {
        if (temaDominado(s, mat, t.key)) return;
        var x = s.tm[t.key];
        if (x && x.n) deb.push({ n: t.nombre, c: x.c, t: x.n, acc: x.c / x.n }); else sin.push(t.nombre);
      });
      deb.sort(function (a, b) { return a.acc - b.acc; });
      if (deb.length) { L.push('- Conviene apoyarle en: ' + deb.slice(0, 3).map(function (x) { return x.n + ' (' + x.c + ' de ' + x.t + ' bien)'; }).join('; ') + '.'); ideas.push(deb[0].n); }
      if (sin.length) L.push('- Aún no ha practicado: ' + sin.slice(0, 4).join(', ') + (sin.length > 4 ? ' y ' + (sin.length - 4) + ' más' : '') + '.');
    }
    var cs = s.cal.s[0] + s.cal.s[1], cd = s.cal.d[0] + s.cal.d[1], ca = s.cal.a[0] + s.cal.a[1];
    if (cs + cd + ca >= 5) {
      var cc = 'Al responder marcó «Lo sé» ' + cs + ' veces (acertó ' + s.cal.s[0] + '), marcó «Dudo» ' + cd + ' y «Adiviné» ' + ca + (s.cal.a[0] ? ' (acertó ' + s.cal.a[0] + ' por suerte)' : '') + '.';
      L.push('- ' + cc);
      var Tsf = {}; Object.keys(s.sf).forEach(function (id) { if (PORID[id]) Tsf[PORID[id].tema] = (Tsf[PORID[id].tema] || 0) + s.sf[id]; });
      var tt = Object.keys(Tsf).sort(function (a, b) { return Tsf[b] - Tsf[a]; }).slice(0, 2).map(temaNombre).filter(Boolean);
      if (tt.length) { L.push('- Ideas que marcó «Lo sé» pero eran incorrectas (las mejores para conversar en casa): ' + tt.join('; ') + '.'); if (!ideas.length) ideas.push(tt[0]); }
    }
    if (fichasDe(mat).length) L.push('- Sellos de ficha ganados: ' + sellosDe(s) + ' de ' + fichasDe(mat).length + ' (título actual: ' + tituloDe(s).n + ').');
    if (s.ruta.veces) L.push('- Rutas diarias de repaso completadas: ' + s.ruta.veces + '.');
    var ls = lecturasDe(mat);
    if (ls.length) L.push('- Lecturas científicas completadas: ' + ls.filter(function (x) { return s.lect[x.id] && s.lect[x.id].veces; }).length + ' de ' + ls.length + '.');
    if (hayHab) {
      var hs = HAB_ORDEN.filter(function (h) { return s.hab[h] && s.hab[h].n >= 2; }).sort(function (a, b) { return habPct(s, b) - habPct(s, a); });
      if (hs.length >= 2 && habPct(s, hs[0]) !== habPct(s, hs[hs.length - 1])) L.push('- Comprensión de lectura: le va mejor en «' + HAB_CORTO[hs[0]].toLowerCase() + '» (' + habPct(s, hs[0]) + ' %) y puede reforzar «' + HAB_CORTO[hs[hs.length - 1]].toLowerCase() + '» (' + habPct(s, hs[hs.length - 1]) + ' %).');
      else if (hs.length) L.push('- Comprensión de lectura: ' + habPct(s, hs[0]) + ' % de aciertos en «' + HAB_CORTO[hs[0]].toLowerCase() + '».');
    }
  });
  if (!alguna) { L.push(''); L.push('Todavía no hay actividad de repaso registrada.'); }
  if (ideas.length) { L.push(''); L.push('Para conversar en casa: pídale que les explique con sus palabras «' + ideas[0] + '». Explicar es una de las mejores formas de aprender.'); }
  L.push(''); L.push('Este reporte lo genera la app Citlalab con datos guardados solo en el dispositivo de quien lo usa. Se comparte con docentes únicamente cuando lo solicitan.');
  if (alguna) { L.push(''); L.push('Código para docentes (por favor no lo borre; sirve para sumar el reporte al análisis del grupo):'); L.push(codigoMaestro()); }
  return L.join('\n');
}
$('al-nombre').oninput = function () { ST.alumno = this.value.slice(0, 40); guardar(); nombrarPerfil(ST.alumno); if (typeof renderPerfiles === 'function') renderPerfiles(); };
$('rs-copiar').onclick = function () {
  var txt = resumenMaestro(), ta = $('rs'); ta.hidden = false; ta.value = txt; ta.rows = Math.min(14, txt.split('\n').length + 1);
  copiarTexto(txt, ta, function (ok) {
    $('rs-msg').textContent = ok ? 'Reporte copiado. Pásaselo a tu familia o tutores para que lo manden cuando tu docente lo pida.' : 'Selecciona el texto del recuadro, cópialo y pásaselo a tu familia.';
  });
};

/* Copia al portapapeles sin errores si el navegador no lo permite (avisa con ok = false). */
function copiarTexto(txt, area, cb) {
  function plan_b() { var ok = false; try { area.hidden = false; area.focus(); area.select(); ok = document.execCommand('copy'); } catch (e) {} cb(ok); }
  try { if (navigator.clipboard && navigator.clipboard.writeText) { navigator.clipboard.writeText(txt).then(function () { cb(true); }, plan_b); return; } } catch (e) {}
  plan_b();
}


/* Código compacto para el panel del maestro (maestro.html): nombre, constancia y aciertos por tema, por pregunta y por habilidad.
   No incluye nada más. Es texto plano (base64), así que viaja bien en un mensaje de WhatsApp. */
function codigoMaestro() {
  var f = fechaHoy().replace(/-/g, ''), sem = 0, hoy = new Date(); if (DIA_OFFSET) hoy.setDate(hoy.getDate() + DIA_OFFSET);
  for (var i = 0; i < 7; i++) { var d = new Date(hoy); d.setDate(d.getDate() - i); if (ST.dias.indexOf(fechaDe(d)) > -1) sem++; }
  var o = { v: 1, a: (ST.alumno || '').trim(), f: f, d: sem, r: rachaVisible(), m: {} };
  ORDEN.forEach(function (mat) {
    var s = ST.m[mat]; if (!s) return;
    var hayHab = HAB_ORDEN.some(function (h) { return s.hab[h] && s.hab[h].n; });
    if (!(s.n || s.xp || hayHab)) return;
    var x = { x: s.xp, e: etapa(s), t: {}, q: {}, h: {}, l: lecturasDe(mat).filter(function (L) { return s.lect[L.id] && s.lect[L.id].veces; }).length };
    Object.keys(s.tm).forEach(function (k) { x.t[k] = [s.tm[k].n, s.tm[k].c]; });
    Object.keys(s.qs).forEach(function (k) { if (PORID[k] && PORID[k].materia === mat) x.q[k] = s.qs[k]; });
    HAB_ORDEN.forEach(function (h) { if (s.hab[h] && s.hab[h].n) x.h[h] = [s.hab[h].n, s.hab[h].c]; });
    x.k = [s.cal.s[0], s.cal.s[1], s.cal.d[0], s.cal.d[1], s.cal.a[0], s.cal.a[1]];   /* seguro: acertó/falló, dudo: acertó/falló, adiviné: acertó/falló */
    x.z = {}; Object.keys(s.sf).forEach(function (k) { if (PORID[k] && PORID[k].materia === mat) x.z[k] = s.sf[k]; });
    x.u = s.ruta.veces; x.s = sellosDe(s);
    o.m[mat] = x;
  });
  return 'R1:' + btoa(unescape(encodeURIComponent(JSON.stringify(o)))).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
}
