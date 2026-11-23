/* ESTADO Y GUARDADO
   Todo el avance de cada alumno se guarda en su propio navegador (localStorage), sin cuentas ni servidores.
   Cada vez que algo cambia se llama a guardar(). Al abrir la app se vuelve a cargar con cargarEstado(). */
var META = 'repaso.perfiles';    // lista de perfiles de este dispositivo y cuál está activo
var PERFIL = 'p1';               // perfil activo (el primero conserva la clave original 'repaso.v1')
function keyDe(id) { return id === 'p1' ? 'repaso.v1' : 'repaso.v1.' + id; }
function leerMeta() {
  try { var m = JSON.parse(localStorage.getItem(META)); if (m && m.lista && m.lista.length) return m; } catch (e) {}
  return { activo: 'p1', lista: [{ id: 'p1', nombre: '' }] };
}
function guardarMeta(m) { try { localStorage.setItem(META, JSON.stringify(m)); } catch (e) { guardadoOK = false; } }
var ST = null;               // estado completo
var guardadoOK = true;       // pasa a false si el navegador no deja guardar (modo privado)
var DIA_OFFSET = 0;          // solo lo usa el panel de demostración (?demo=1) para simular otro día

function pad(n) { return n < 10 ? '0' + n : '' + n; }
function fechaDe(d) { return d.getFullYear() + '-' + pad(d.getMonth() + 1) + '-' + pad(d.getDate()); }
function fechaHoy() { var d = new Date(); if (DIA_OFFSET) d.setDate(d.getDate() + DIA_OFFSET); return fechaDe(d); }
function fechaMas(f, n) { var p = f.split('-'), d = new Date(+p[0], +p[1] - 1, +p[2]); d.setDate(d.getDate() + n); return fechaDe(d); }
function difDias(a, b) {
  function t(s) { var p = s.split('-'); return Date.UTC(+p[0], +p[1] - 1, +p[2]); }
  return Math.round((t(b) - t(a)) / 86400000);
}

function nuevoMat(id, g) {
  var m = MAT[id];
  return { name: m.names[g] || m.names.n, gender: g, color: m.col, ojos: 'redondos', ropa: [], pared: 'cielo',
    decor: { A: null, B: null, C: null, D: null }, xp: 0, vis: 0, hamb: 75, feli: 75, t: Date.now(),
    box: {}, ult: {}, n: 0, c: 0, tm: {}, qs: {}, hab: {}, lect: {}, jefes: {}, cofre: { dia: '', ganados: [] }, desb: {}, nuevos: {},
    due: {}, prim: {}, xpd: { d: '', n: 0 }, cal: { s: [0, 0], d: [0, 0], a: [0, 0] }, sf: {}, ruta: { d: '', veces: 0 }, sellos: {} };
}
function normalizar(s) {
  if (!s || typeof s !== 'object' || s.v !== 1) s = { v: 1, genero: null, activa: 'fisica', racha: 0, ultimo: '', dias: [], cfg: {}, m: {} };
  var reduce = false; try { reduce = !!(window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches); } catch (e) {}
  s.cfg = Object.assign({ snd: true, vib: true, mov: reduce, grande: false, conf: true, contraste: false, fuente: 'normal', tema: 'auto', voz: false, lento: false, elegir: false, dib: true }, s.cfg || {});
  if (['normal', 'facil', 'dislexia'].indexOf(s.cfg.fuente) < 0) s.cfg.fuente = 'normal';
  if (['auto', 'neutro', 'claro', 'noche'].indexOf(s.cfg.tema) < 0) s.cfg.tema = 'auto';   /* si el dispositivo pide menos movimiento, se respeta desde el inicio */
  s.dias = s.dias || []; s.m = s.m || {}; s.alumno = typeof s.alumno === 'string' ? s.alumno : '';
  ORDEN.forEach(function (id) {
    if (!s.m[id]) return;
    var d = nuevoMat(id, s.m[id].gender || 'n'), x = Object.assign(d, s.m[id]);
    x.decor = Object.assign({ A: null, B: null, C: null, D: null }, x.decor);
    x.cofre = Object.assign({ dia: '', ganados: [] }, x.cofre);
    x.box = x.box || {}; x.ult = x.ult || {}; x.tm = x.tm || {}; x.qs = x.qs || {}; x.hab = x.hab || {}; x.lect = x.lect || {}; x.due = x.due || {}; x.prim = x.prim || {}; x.xpd = Object.assign({ d: '', n: 0 }, x.xpd || {}); x.sf = x.sf || {}; x.sellos = (x.sellos && typeof x.sellos === 'object') ? x.sellos : {}; x.cal = Object.assign({ s: [0, 0], d: [0, 0], a: [0, 0] }, x.cal || {}); x.ruta = Object.assign({ d: '', veces: 0 }, x.ruta || {}); x.n = x.n || 0; x.c = x.c || 0; x.jefes = x.jefes || {}; x.desb = x.desb || {}; x.nuevos = x.nuevos || {};
    s.m[id] = x;
  });
  if (ORDEN.indexOf(s.activa) < 0) s.activa = 'fisica';
  return s;
}
function cargarEstado() {
  var raw = null, s = null, m = leerMeta();
  if (!m.lista.some(function (x) { return x.id === m.activo; })) m.activo = m.lista[0].id;
  PERFIL = m.activo;
  try { raw = localStorage.getItem(keyDe(PERFIL)); } catch (e) { guardadoOK = false; }
  if (raw) { try { s = JSON.parse(raw); } catch (e) { s = null; } }
  ST = normalizar(s);
}
function guardar() {
  try { localStorage.setItem(keyDe(PERFIL), JSON.stringify(ST)); } catch (e) { guardadoOK = false; }
}
function borrarTodo() {
  try { localStorage.removeItem(keyDe(PERFIL)); } catch (e) {}
  ST = normalizar(null);
}
/* Respaldo: guarda el avance de TODOS los perfiles de este dispositivo en un archivo (o en un código de texto) y lo restaura.
   No se envía a ningún lado: el archivo se descarga a tu propio dispositivo y tú decides qué hacer con él. */
function exportarCodigo() { return btoa(unescape(encodeURIComponent(JSON.stringify(ST)))); }
function exportarTodo() {
  guardar();
  var m = leerMeta(), o = { app: 'repaso', tipo: 'respaldo', v: 2, fecha: fechaHoy(), meta: m, perfiles: {} };
  m.lista.forEach(function (x) { try { var r = localStorage.getItem(keyDe(x.id)); if (r) o.perfiles[x.id] = JSON.parse(r); } catch (e) {} });
  return JSON.stringify(o);
}
/* Revisa un respaldo (archivo .json o código) sin tocar nada. Devuelve null si no sirve. */
function leerRespaldo(txt) {
  txt = String(txt || '').trim(); if (!txt) return null;
  var o = null;
  try { o = JSON.parse(txt); } catch (e) {
    try { o = JSON.parse(decodeURIComponent(escape(atob(txt.replace(/\s+/g, ''))))); } catch (e2) { return null; }
  }
  if (!o || typeof o !== 'object') return null;
  if (o.tipo === 'respaldo' && o.v === 2 && o.perfiles && o.meta && o.meta.lista) {
    var ids = Object.keys(o.perfiles).filter(function (k) { return /^p[a-z0-9]{1,12}$/.test(k) && o.perfiles[k] && o.perfiles[k].v === 1 && o.perfiles[k].m; });
    if (!ids.length) return null;
    return { v: 2, o: o, ids: ids, fecha: o.fecha || '' };
  }
  if (o.v === 1 && o.m) return { v: 1, o: o, ids: ['p1'], fecha: '' };
  return null;
}
function aplicarRespaldo(r) {
  try {
    if (r.v === 1) { ST = normalizar(r.o); guardar(); return true; }
    var lista = r.o.meta.lista.filter(function (x) { return r.ids.indexOf(x.id) > -1; }).map(function (x) { return { id: x.id, nombre: String(x.nombre || '').slice(0, 40) }; });
    var m = { activo: r.ids.indexOf(r.o.meta.activo) > -1 ? r.o.meta.activo : lista[0].id, lista: lista };
    var viejos = leerMeta().lista; viejos.forEach(function (x) { if (r.ids.indexOf(x.id) < 0) { try { localStorage.removeItem(keyDe(x.id)); } catch (e) {} } });
    r.ids.forEach(function (id) { localStorage.setItem(keyDe(id), JSON.stringify(r.o.perfiles[id])); });
    guardarMeta(m); cargarEstado(); return true;
  } catch (e) { return false; }
}
function importarCodigo(c) { var r = leerRespaldo(c); return !!r && aplicarRespaldo(r); }

function cur() { return ST.m[ST.activa]; }
function tieneMascotas() { return !!(ST && ST.genero && ST.m.fisica); }

/* ---------- Banco de preguntas ---------- */
var PREG = {}, PORID = {};
function indexar() {
  PREG = {}; PORID = {};
  REPASO.fichas.forEach(function (f) { (PREG[f.materia] = PREG[f.materia] || []); f.preguntas.forEach(function (q) { PREG[f.materia].push(q); PORID[q.id] = q; }); });
  Object.keys(REPASO.porques).forEach(function (id) { if (PORID[id]) PORID[id].d = REPASO.porques[id]; });
}
function fichasDe(mat) { return REPASO.fichas.filter(function (f) { return f.materia === mat; }); }
function preguntasDe(mat, fichaId) { return (PREG[mat] || []).filter(function (q) { return !fichaId || q.ficha === fichaId; }); }
function temaNombre(key) {
  var r = '';
  REPASO.fichas.forEach(function (f) { f.temas.forEach(function (t) { if (t.key === key) r = t.nombre; }); });
  return r;
}

/* ---------- Dominio de temas (cajas de Leitner) ---------- */
function caja(s, q) { return s.box[q.id] || 0; }
function dominioTema(s, key) {
  var n = 0, suma = 0;
  (PREG[ST.activa] || []).forEach(function (q) { if (q.tema === key) { n++; suma += Math.min(caja(s, q), 2) / 2; } });
  return n ? suma / n : 0;
}
function temasDeMateria(mat) {
  var r = [];
  fichasDe(mat).forEach(function (f) { f.temas.forEach(function (t) { r.push({ key: t.key, nombre: t.nombre, ficha: f.ficha }); }); });
  return r;
}
function temaDominado(s, mat, key) {
  var n = 0, suma = 0;
  (PREG[mat] || []).forEach(function (q) { if (q.tema === key) { n++; suma += Math.min(caja(s, q), 2) / 2; } });
  return n > 0 && suma / n >= DOMINIO_MIN - 1e-9;
}
function dominados(s, mat, fichaId) {
  var c = 0;
  temasDeMateria(mat).forEach(function (t) { if ((!fichaId || t.ficha.id === fichaId) && temaDominado(s, mat, t.key)) c++; });
  return c;
}
function totalJefes(s) { var c = 0; Object.keys(s.jefes).forEach(function (k) { c += s.jefes[k]; }); return c; }
function etapa(s) { return s.xp >= XP_ETAPA[3] ? 3 : s.xp >= XP_ETAPA[2] ? 2 : s.xp >= XP_ETAPA[1] ? 1 : 0; }
function rachaVisible() { return ST.ultimo && difDias(ST.ultimo, fechaHoy()) > DIAS_GRACIA ? 0 : ST.racha; }
function prog(s, mat) { return { racha: rachaVisible(), dominados: dominados(s, mat), etapa: etapa(s), jefe: totalJefes(s) }; }

/* ---------- Sellos y títulos (se guardan: un sello ganado nunca se pierde) ---------- */
function reqSello(f) { return Math.max(1, Math.ceil(f.temas.length / 2)); }
function numFicha(f, i) { var m = /(\d+)/.exec(f.ficha.titulo || ''); return m ? +m[1] : (i + 1); }
function sellosDe(s) { return Object.keys(s.sellos || {}).length; }
function tituloDe(s) { var n = sellosDe(s), r = TITULOS[0]; TITULOS.forEach(function (t) { if (n >= t.v) r = t; }); return r; }
function siguienteTitulo(s) { var n = sellosDe(s); return TITULOS.filter(function (t) { return t.v > n; })[0] || null; }
/* Devuelve los sellos recién ganados (lista de fichas). */
function sincronizarSellos(s, mat) {
  var nuevos = [];
  fichasDe(mat).forEach(function (f) {
    if (s.sellos[f.ficha.id]) return;
    if (dominados(s, mat, f.ficha.id) >= reqSello(f)) { s.sellos[f.ficha.id] = fechaHoy(); nuevos.push(f); }
  });
  return nuevos;
}

/* ---------- Desbloqueos (se guardan: una vez ganado, nunca se pierde) ---------- */
function abierto(s, k, it) { return !!s.desb[k + '|' + it.id] || (!it.req && !it.cofre); }
function falta(s, it) {
  if (it.cofre) return 'Se encuentra en el cofre diario. Ábrelo cuando quieras.';
  return 'Te falta: ' + it.req.t + ' (llevas ' + prog(s, ST.activa)[it.req.k] + ').';
}
/* Revisa qué se acaba de ganar. Los objetos del cuarto se colocan solos en su lugar si está libre. */
function sincronizar(s, mat) {
  var pr = prog(s, mat), nuevos = [];
  Object.keys(LISTAS).forEach(function (k) {
    LISTAS[k].forEach(function (it) {
      if (!it.req || s.desb[k + '|' + it.id]) return;
      if (pr[it.req.k] >= it.req.v) {
        s.desb[k + '|' + it.id] = 1; s.nuevos[k + '|' + it.id] = 1;
        var puesto = false;
        if (k === 'decor' && (!s.decor[it.slot] || it.premio)) { s.decor[it.slot] = it.id; puesto = true; }  /* los premios (trofeo) se exhiben siempre */
        nuevos.push({ k: k, it: it, puesto: puesto });
      }
    });
  });
  return nuevos;
}

/* ---------- Tiempo y racha ---------- */
function actualizarTiempo(s) {
  var ahora = Date.now(), h = Math.max(0, (ahora - (s.t || ahora)) / 3600000);
  s.hamb = Math.max(HAMBRE_MIN, Math.min(s.hamb, 100) - 1.2 * h);
  s.feli = Math.max(FELIZ_MIN, Math.min(s.feli, 100) - .8 * h);
  s.t = ahora;
}
function marcarDia() {
  var h = fechaHoy();
  if (ST.ultimo === h) return;
  if (!ST.ultimo) ST.racha = 1;
  else { var d = difDias(ST.ultimo, h); if (d <= 0) return; ST.racha = d <= DIAS_GRACIA ? ST.racha + 1 : 1; }
  ST.ultimo = h; ST.dias.push(h); if (ST.dias.length > 40) ST.dias = ST.dias.slice(-40);
}

/* ---------- Registrar una respuesta ---------- */
/* Una pregunta solo sube de caja y da puntos una vez por día: así el dominio exige repasar en días distintos
   (práctica espaciada) y no se logra solo repitiendo la misma pregunta seguida. Fallar siempre baja de caja.
   Cada respuesta también fija la FECHA en que conviene volver a verla (s.due): mañana, en 3, 7 o 14 días según la caja.
   conf es opcional: 's' (seguro), 'd' (dudo) o 'a' (adiviné). Decir la verdad sobre lo que se sabe nunca cuesta puntos:
   un acierto adivinado da los mismos puntos, pero no sube de caja y la pregunta vuelve mañana; un acierto con dudas
   vuelve en la mitad del tiempo; fallar estando seguro se anota como una idea confundida y vuelve mañana.
   Devuelve los puntos que realmente se dieron (0 si esa pregunta ya los dio hoy). */
/* Suma puntos respetando el tope diario por materia (XP_DIA_MAX). Los premios de una vez al día (cofre, bono de la ruta) pasan con libre = true. */
function darXP(s, pts, libre) {
  var h = fechaHoy(); if (!s.xpd || s.xpd.d !== h) s.xpd = { d: h, n: 0 };
  var g = libre ? pts : Math.max(0, Math.min(pts, XP_DIA_MAX - s.xpd.n));
  s.xpd.n += g; s.xp += g; return g;
}
function topeHoy(s) { return !!s.xpd && s.xpd.d === fechaHoy() && s.xpd.n >= XP_DIA_MAX; }
var INTERVALO = [1, 3, 7, 14];   // días hasta el próximo repaso, según la caja a la que llegó la pregunta
function registrar(q, bien, pts, conf) {
  var s = cur(), hoy = fechaHoy(), dado = 0;
  marcarDia(); actualizarTiempo(s);
  s.n++; if (bien) s.c++;
  var tt = s.tm[q.tema] = s.tm[q.tema] || { n: 0, c: 0 }; tt.n++; if (bien) tt.c++;
  var zz = s.qs[q.id] = s.qs[q.id] || [0, 0]; zz[0]++; if (bien) zz[1]++; if (zz[0] === 1) s.prim[q.id] = hoy;   /* día en que se vio por primera vez */
  if (conf === 's' || conf === 'd' || conf === 'a') {
    s.cal[conf][bien ? 0 : 1]++;
    if (!bien && conf === 's') s.sf[q.id] = (s.sf[q.id] || 0) + 1;
  }
  var antes = caja(s, q);
  if (bien) {
    if (s.ult[q.id] !== hoy) {
      if (conf !== 'a') s.box[q.id] = Math.min(3, antes + 1);
      s.ult[q.id] = hoy; dado = darXP(s, pts);
      var dias = INTERVALO[caja(s, q)];
      if (conf === 'a') dias = 1; else if (conf === 'd') dias = Math.max(1, Math.ceil(dias / 2));
      s.due[q.id] = fechaMas(hoy, dias);
    }
    s.hamb = Math.min(100, s.hamb + 10); s.feli = Math.min(100, s.feli + 3);
  } else { s.box[q.id] = Math.max(0, antes - 1); s.due[q.id] = fechaMas(hoy, 1); }
  guardar();
  return dado;
}
/* Fecha en que toca volver a ver una pregunta ('' si nunca se ha visto). Los avances guardados antes de que existieran las fechas se calculan solos. */
function dueDe(s, q) {
  if (s.due[q.id]) return s.due[q.id];
  if (s.ult[q.id]) return fechaMas(s.ult[q.id], INTERVALO[Math.min(3, caja(s, q))]);
  if (s.qs[q.id]) return fechaHoy();
  return '';
}
/* ---------- Ruta de hoy: lo que toca recordar + un poco de lo nuevo ---------- */
var RUTA_MAX = 12, NUEVAS_MAX = 6, NUEVAS_MIN = 4;   /* la ruta siempre deja lugar para al menos 4 preguntas nuevas, aunque haya muchas por recordar */
function rutaDe(s, mat) {
  var hoy = fechaHoy(), venc = [], nue = [], prox = '';
  (PREG[mat] || []).forEach(function (q) {
    var d = dueDe(s, q);
    if (!d) nue.push(q); else if (d <= hoy) venc.push(q); else if (!prox || d < prox) prox = d;
  });
  venc.sort(function (a, b) { return caja(s, a) - caja(s, b) || (dueDe(s, a) < dueDe(s, b) ? -1 : 1); });
  nue = mezclar(nue); var sem = REPASO.semanas[mat];
  /* Lo nuevo se presenta tema por tema (primero el de la semana, luego en el orden de la ficha) para que cada tema se vaya completando y se vean avances pronto.
     Lo que se repasa sí va revuelto. Dentro de cada tema el orden es al azar. */
  var orden = {}; temasDeMateria(mat).forEach(function (tm, i) { orden[tm.key] = i; });
  nue.sort(function (a, b) { return ((b.tema === sem ? 1 : 0) - (a.tema === sem ? 1 : 0)) || ((orden[a.tema] || 0) - (orden[b.tema] || 0)); });
  var hoyN = 0; Object.keys(s.prim).forEach(function (k) { if (s.prim[k] === hoy) hoyN++; });   /* preguntas nuevas que ya vio hoy */
  var cupo = s.ruta.d === hoy ? 0 : Math.max(0, NUEVAS_MAX - hoyN);   /* una vez completada la ruta, no se agregan más preguntas nuevas hoy */
  var cn = nue.length && cupo ? Math.min(nue.length, cupo, Math.max(NUEVAS_MIN, RUTA_MAX - venc.length)) : 0;
  var cv = Math.min(venc.length, RUTA_MAX - cn);
  return { venc: venc.slice(0, cv), nuevas: nue.slice(0, cn), total: cv + cn, hayMas: venc.length > cv, prox: prox, hecha: s.ruta.d === hoy };
}
function textoDias(f) { var d = difDias(fechaHoy(), f); return d <= 1 ? 'mañana' : 'en ' + d + ' días'; }
function mezclar(a) { a = a.slice(); for (var i = a.length - 1; i > 0; i--) { var j = Math.floor(Math.random() * (i + 1)), t = a[i]; a[i] = a[j]; a[j] = t; } return a; }
var PESO = [3, 2, 1.2, .5];
/* Elige n preguntas distintas dando más probabilidad a las que menos se saben. */
function elegir(pool, s, n) {
  var res = [], rest = pool.slice();
  while (res.length < n && rest.length) {
    var tot = 0, w = rest.map(function (q) { var x = PESO[Math.min(3, caja(s, q))]; tot += x; return x; });
    var r = Math.random() * tot, i = 0;
    while (i < rest.length - 1 && r > w[i]) { r -= w[i]; i++; }
    res.push(rest.splice(i, 1)[0]);
  }
  return res;
}


/* ---------- Perfiles: varios alumnos pueden compartir un mismo dispositivo ---------- */
function listaPerfiles() { var m = leerMeta(); return m.lista.map(function (x, i) { return { id: x.id, nombre: x.nombre || ('Perfil ' + (i + 1)), activo: x.id === PERFIL }; }); }
function nombrarPerfil(nombre) {
  var m = leerMeta(); m.lista.forEach(function (x) { if (x.id === PERFIL) x.nombre = nombre; }); guardarMeta(m);
}
function elegirPerfil(id) { var m = leerMeta(); m.activo = id; guardarMeta(m); cargarEstado(); }
function crearPerfil() {
  var cfg = ST ? ST.cfg : null, m = leerMeta(), id = 'p' + Date.now().toString(36);
  m.lista.push({ id: id, nombre: '' }); m.activo = id; guardarMeta(m); cargarEstado();
  if (cfg) ST.cfg = Object.assign({}, cfg);   /* conserva sonido, vibración y letra grande del dispositivo */
  return id;
}
function quitarPerfil(id) {
  var m = leerMeta(); if (m.lista.length < 2 || id === PERFIL) return;
  try { localStorage.removeItem(keyDe(id)); } catch (e) {}
  m.lista = m.lista.filter(function (x) { return x.id !== id; }); guardarMeta(m);
}
