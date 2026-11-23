/* NÚCLEO: registro de contenido (fichas, juegos, tema de la semana).
   Los archivos de la carpeta data/ llaman a REPASO.agregar(...), REPASO.juego(...) y REPASO.semana(...). */
/* Si un archivo de data/ tiene un error de escritura (coma o comilla que falta) o no existe, la app sigue funcionando con los demás.
   El aviso se ve con ?revisar=1 */
var ERRORES_ARCHIVO = [];
window.addEventListener('error', function (e) {
  var t = e.target, f = '';
  if (t && t.tagName === 'SCRIPT' && t.src) f = t.src; else if (e.filename) f = e.filename;
  var m = /\/(data\/[^?#]*)/.exec(f); if (!m) return;
  ERRORES_ARCHIVO.push(m[1] + (t && t.tagName === 'SCRIPT' ? ': no se encontró el archivo. Revisa que el nombre en data/lista.js sea igual al del archivo.' : ': tiene un error de escritura' + (e.lineno ? ' cerca de la línea ' + e.lineno : '') + ' (suele ser una coma, comilla o paréntesis que falta). Esa ficha no se cargó; el resto de la app sigue funcionando.'));
}, true);
var REPASO = {
  fichas: [],      // [{materia, ficha:{id,titulo,...}, temas:[...], preguntas:[...]}]
  juegos: {},      // juegos['fisica'] = [{tipo:'armar', ...}]
  porques: {},     // porques['f7-33'] = { 'opción incorrecta': 'por qué está mal' }  (explicación por distractor, opcional)
  lecturas: [],    // lecturas científicas: [{materia, ficha, id, tema, titulo, texto:[oraciones], items:[...]}]
  semanas: {},     // semanas['fisica'] = 'f7.t3'
  agregar: function (d) {
    d.preguntas.forEach(function (q) { q.tema = d.ficha.id + '.' + q.t; q.ficha = d.ficha.id; q.materia = d.materia; });
    d.temas.forEach(function (t) { t.key = d.ficha.id + '.' + t.id; });
    REPASO.fichas.push(d);
  },
  porque: function (m) { Object.keys(m).forEach(function (id) { REPASO.porques[id] = m[id]; }); },
  lectura: function (d) { d.items.forEach(function (it, i) { it.n = i; }); REPASO.lecturas.push(d); },
  juego: function (d) { (REPASO.juegos[d.materia] = REPASO.juegos[d.materia] || []).push(d); },
  semana: function (d) { REPASO.semanas = d; },
  cargar: function (lista) { lista.forEach(function (f) { document.write('<script src="' + f + '"><\/script>'); }); }
};
/* Formas de escribir preguntas (la PRIMERA opción de O es la correcta; la app las mezcla sola). */
function O(id, t, q, o, e, r) { return { id: id, t: t, k: 'opcion', q: q, o: o, e: e, r: r }; }
function VF(id, t, q, v, e, r) { return { id: id, t: t, k: 'vf', q: q, v: v, e: e, r: r }; }
function ORD(id, t, q, items, e, r) { return { id: id, t: t, k: 'orden', q: q, items: items, e: e, r: r }; }

/* Formas de escribir las preguntas de una LECTURA CIENTÍFICA. «ev» = números de las oraciones del texto que prueban la respuesta
   (la primera oración es la 0). La app las resalta al corregir.
     LO(habilidad, pregunta, [opciones], ev, explicación)       -> la PRIMERA opción es la correcta (la app las mezcla)
     LV(habilidad, afirmación, 'v'|'f'|'n', ev, explicación)    -> verdadero, falso o «el texto no lo dice»
     LE(instrucción, ev, explicación)                           -> el alumno toca la oración que prueba algo
     LS(instrucción, [pasos en orden], explicación)             -> ordenar un proceso o secuencia
   Habilidades: 'literal', 'inferencia', 'vocabulario' (evidencia y secuencia las ponen LE y LS solas). */
function LO(h, q, o, ev, e) { return { k: 'opcion', hab: h, q: q, o: o, ev: ev || [], e: e }; }
function LV(h, q, r, ev, e) { return { k: 'opcion', hab: h, q: q, o: ['Verdadero', 'Falso', 'El texto no lo dice'], ok: 'vfn'.indexOf(r), fijo: true, vfn: true, ev: ev || [], e: e }; }
function LE(q, ev, e) { return { k: 'evid', hab: 'evidencia', q: q, ev: ev, e: e }; }
function LS(q, items, e) { return { k: 'orden', hab: 'secuencia', q: q, items: items, e: e, ev: [] }; }

/* CORRIGE A TU MASCOTA: la mascota dice algo (con un error típico) y el alumno la corrige. Sirven en el repaso y en el juego.
     CM(id, tema, lo que dice la mascota, [corrección correcta, otras opciones incorrectas], explicación, página)
     CMOK(id, tema, lo que dice la mascota (esta vez está bien), explicación, página)   -> el alumno debe decir «Tienes razón»
   Para que no siempre se equivoque, mezcla algunas CMOK. */
function CM(id, t, claim, o, e, r) { return { id: id, t: t, k: 'opcion', m: 1, q: '{m} dice: «' + claim + '». ¿Cómo la corriges?', o: o, e: e, r: r }; }
function CMOK(id, t, claim, e, r) { return { id: id, t: t, k: 'opcion', m: 1, q: '{m} dice: «' + claim + '». ¿Qué le respondes?', o: ['Tienes razón', 'Te equivocas'], e: e, r: r }; }
