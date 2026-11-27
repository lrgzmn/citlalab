/* =========================================================
   CIELO VIVO · MUSEO DE ERRORES · CUADERNO DE LA MASCOTA
   Cada ficha es una estrella; las fichas de cada materia forman una constelación.
   Las estrellas brillan más cuando se repasan a tiempo y se atenúan si pasan los días, pero nunca se apagan.
   Todo se calcula en el dispositivo: la fase de la luna sale de la fecha, sin ubicación ni permisos.
   ========================================================= */

/* ---------- Una frase de valor por estrella (una por ficha) ---------- */
var VALOR = {
  b1: ['Estudia', 'Tu cerebro cambia con lo que practicas. Pregunta, investiga y hazlo más fuerte.'],
  b2: ['Apoya', 'Las neuronas se pasan mensajes: nadie aprende solo. Apoya a quien se atore.'],
  b3: ['Protege', 'Cuida tu cerebro y el de quienes quieres. Pedir ayuda es de valientes.'],
  b4: ['Cultiva', 'Cultiva hábitos que te hagan bien, como una planta: poco a poco y con paciencia.'],
  b5: ['Ayuda', 'Una buena relación se construye escuchando y ayudando, sin pedir nada a cambio.'],
  b6: ['Libertad', 'Nadie vale menos que otra persona. Sé libre y deja libres a los demás.'],
  b7: ['Conócete', 'Conocerte también es ciencia: observa lo que sientes con curiosidad, sin juzgarte.'],
  b8: ['Cuida', 'Decidir con información es cuidarte. Pregunta a fuentes confiables.'],
  b9: ['Protege', 'Protegerte es proteger a los demás. Habla con una persona adulta de confianza si tienes dudas.'],
  b10: ['Cultiva', 'La tierra nos alimenta: cuídala, cultívala y comparte lo que da.'],
  f1: ['Estudia', 'Duda con respeto y pide pruebas: así se hace la ciencia. Nunca sabremos bastante.'],
  f2: ['Ayuda', 'La ciencia es de todas y todos. Cada descubrimiento nació de muchas manos.'],
  f3: ['Labora', 'Medir bien es trabajo paciente. Cada medida cuidadosa suma al conocimiento.'],
  f4: ['Apoya', 'Si algo no te sale, pide ayuda y ofrece la tuya. Medimos mejor entre varias personas.'],
  f5: ['Admira', 'Del átomo a las galaxias, todo es escala. Mira lo pequeño y lo enorme con asombro.'],
  f6: ['Cuida', 'Todo lo que nos rodea es materia: cuídala y no la desperdicies.'],
  f7: ['Estudia', 'Cada modelo atómico mejoró al anterior. Equivocarse y corregir también es avanzar.'],
  f8: ['Admira', 'Hay mundos dentro de lo invisible. Admira lo que aún no puedes ver.'],
  f9: ['Ayuda', 'Un modelo se mejora entre muchas personas. Comparte tu explicación y escucha la de otras.'],
  f10: ['Cultiva', 'Todo cambia con paciencia y la energía justa, igual que aprender.'],
  q1: ['Cultiva', 'Los saberes de abuelas y abuelos también son ciencia. Escúchalos y cuídalos.'],
  q2: ['Admira', 'México también hace ciencia. Tú puedes ser quien descubra algo nuevo.'],
  q3: ['Protege', 'Cada decisión cuenta. Cuida el planeta que compartimos.'],
  q4: ['Estudia', 'Observa con atención: lo que parece igual puede ser distinto. Investiga por ti misma o por ti mismo.'],
  q5: ['Labora', 'Trabajar con cuidado en el laboratorio nos protege a todas y todos.'],
  q6: ['Apoya', 'Una mezcla funciona cuando todos sus componentes se integran. Que nadie se quede fuera.'],
  q7: ['Ayuda', 'Separar bien exige paciencia y equipo. Pide ayuda y ofrécela.'],
  q8: ['Cuida', 'La cantidad cambia el efecto. Con productos y medicinas, siempre con cuidado.'],
  q9: ['Estudia', 'Antes de creer, comprueba: la evidencia es la mejor guía.'],
  q10: ['Protege', 'Lo que fabricamos deja huella. Protege el agua, el aire y la tierra.']
};

/* ---------- Constelaciones reales: una estrella por ficha ----------
   Cada materia tiene una constelación de 10 estrellas con su posición real en el cielo (ascensión recta en horas y declinación en grados).
   La figura es simplificada: las líneas solo ayudan a reconocerla. Meses: cuándo se ve mejor al anochecer desde México. */
var CONSTEL = {
  biologia: { n: 'Leo', d: 'el león', mes: 'de marzo a mayo', sur: 'hacia el este y el sur',
    st: [['Régulo', 10.139, 11.967], ['Denébola', 11.818, 14.572], ['Algieba', 10.333, 19.842], ['Zosma', 11.235, 20.524], ['Chertan', 11.237, 15.430], ['Adhafera', 10.278, 23.417], ['Rasalas', 9.879, 26.007], ['Algenubi', 9.764, 23.774], ['Eta Leonis', 10.122, 16.763], ['Iota Leonis', 11.399, 10.529]],
    lin: [[0, 8], [8, 2], [2, 5], [5, 6], [6, 7], [2, 3], [3, 1], [3, 4], [4, 1], [4, 9], [9, 1]] },
  fisica: { n: 'Orión', d: 'el cazador', mes: 'de diciembre a marzo', sur: 'hacia el sur',
    st: [['Betelgeuse', 5.919, 7.407], ['Rigel', 5.242, -8.202], ['Alnilam', 5.603, -1.202], ['Alnitak', 5.679, -1.943], ['Mintaka', 5.533, -0.299], ['Bellatrix', 5.419, 6.350], ['Saiph', 5.796, -9.670], ['Meissa', 5.586, 9.934], ['Hatysa', 5.590, -5.910], ['Tabit', 4.831, 6.961]],
    lin: [[7, 0], [7, 5], [0, 3], [5, 4], [4, 2], [2, 3], [3, 6], [4, 1], [2, 8], [5, 9]] },
  quimica: { n: 'Escorpio', d: 'el escorpión', mes: 'de junio a agosto', sur: 'hacia el sur, bajito',
    st: [['Antares', 16.490, -26.432], ['Acrab', 16.090, -19.805], ['Dschubba', 16.005, -22.622], ['Pi Scorpii', 15.981, -26.114], ['Tau Scorpii', 16.598, -28.216], ['Épsilon Scorpii', 16.836, -34.293], ['Zeta Scorpii', 16.909, -42.362], ['Eta Scorpii', 17.202, -43.239], ['Sargas', 17.622, -42.998], ['Shaula', 17.560, -37.104]],
    lin: [[1, 2], [2, 3], [2, 0], [0, 4], [4, 5], [5, 6], [6, 7], [7, 8], [8, 9]] }
};
function formaConst(mat) {
  var C = CONSTEL[mat], ra0 = 0, d0 = 0, i; C.st.forEach(function (s) { ra0 += s[1]; d0 += s[2]; }); ra0 /= C.st.length; d0 /= C.st.length;
  var cs = Math.cos(d0 * Math.PI / 180), P = C.st.map(function (s) { return [-(s[1] - ra0) * 15 * cs, -(s[2] - d0)]; });   /* el este queda a la izquierda y el norte arriba, como en un mapa del cielo */
  var minx = 1e9, maxx = -1e9, miny = 1e9, maxy = -1e9; P.forEach(function (p) { minx = Math.min(minx, p[0]); maxx = Math.max(maxx, p[0]); miny = Math.min(miny, p[1]); maxy = Math.max(maxy, p[1]); });
  var k = Math.min(230 / (maxx - minx || 1), 160 / (maxy - miny || 1)), ox = 150 - (minx + maxx) / 2 * k, oy = 120 - (miny + maxy) / 2 * k;
  var Q = P.map(function (p) { return [p[0] * k + ox, p[1] * k + oy]; }), it, a, b, dx, dy, dd, mv, MIN = 30;
  /* separa suavemente las estrellas que quedan muy juntas (por ejemplo el cinturón de Orión) para que se puedan tocar con el dedo */
  for (it = 0; it < 60; it++) for (a = 0; a < Q.length; a++) for (b = a + 1; b < Q.length; b++) {
    dx = Q[b][0] - Q[a][0]; dy = Q[b][1] - Q[a][1]; dd = Math.sqrt(dx * dx + dy * dy) || .01;
    if (dd < MIN) { mv = (MIN - dd) / 2 + .2; Q[a][0] -= dx / dd * mv; Q[a][1] -= dy / dd * mv; Q[b][0] += dx / dd * mv; Q[b][1] += dy / dd * mv; }
  }
  minx = 1e9; maxx = -1e9; miny = 1e9; maxy = -1e9; Q.forEach(function (p) { minx = Math.min(minx, p[0]); maxx = Math.max(maxx, p[0]); miny = Math.min(miny, p[1]); maxy = Math.max(maxy, p[1]); });
  var k2 = Math.min(1, 250 / (maxx - minx || 1), 190 / (maxy - miny || 1)), cx = (minx + maxx) / 2, cy = (miny + maxy) / 2;
  return { pts: Q.map(function (p) { return [Math.round((p[0] - cx) * k2 + 150), Math.round((p[1] - cy) * k2 + 120)]; }), lin: C.lin };
}

/* ---------- La luna de hoy (fase aproximada, calculada con la fecha) ---------- */
var LUNA_P = 29.530588853;
function lunaEdad(d) { var jd = d.getTime() / 86400000 + 2440587.5, e = (jd - 2451550.1) % LUNA_P; return e < 0 ? e + LUNA_P : e; }
function lunaInfo(d) {
  var e = lunaEdad(d), n, txt;
  if (e < 1.85 || e >= 27.68) { n = 'Luna nueva'; txt = 'Hoy casi no se ve: su parte iluminada mira hacia el Sol y no hacia nosotros.'; }
  else if (e < 5.54) { n = 'Luna creciente'; txt = 'La luna está creciendo: cada noche vemos más parte iluminada. Búscala al atardecer.'; }
  else if (e < 9.23) { n = 'Cuarto creciente'; txt = 'Vemos iluminada la mitad de su cara. Se ve a media tarde y por la noche.'; }
  else if (e < 12.92) { n = 'Gibosa creciente'; txt = 'Casi llena: ya vemos más de la mitad iluminada. Búscala después del atardecer.'; }
  else if (e < 16.61) { n = 'Luna llena'; txt = 'Vemos completa su cara iluminada. Sale cuando el Sol se oculta.'; }
  else if (e < 20.30) { n = 'Gibosa menguante'; txt = 'Empieza a menguar. Sale más tarde cada noche.'; }
  else if (e < 23.99) { n = 'Cuarto menguante'; txt = 'Otra vez vemos la mitad. Se ve de madrugada y por la mañana.'; }
  else { n = 'Luna menguante'; txt = 'Queda una uña iluminada. La verás de madrugada, antes de que salga el Sol.'; }
  return { e: e, n: n, t: txt };
}
function lunaSVG(e, R) {
  var k = Math.cos(2 * Math.PI * e / LUNA_P), rx = Math.max(.01, Math.abs(k) * R), cx = R, cy = R, W = 2 * R;
  var d = 'M' + cx + ' ' + (cy - R) + ' A' + R + ' ' + R + ' 0 0 1 ' + cx + ' ' + (cy + R) + ' A' + rx + ' ' + R + ' 0 0 ' + (k > 0 ? 0 : 1) + ' ' + cx + ' ' + (cy - R) + ' Z';
  var tr = e > LUNA_P / 2 ? ' transform="translate(' + W + ',0) scale(-1,1)"' : '';
  return '<svg viewBox="0 0 ' + W + ' ' + W + '" aria-hidden="true"><circle cx="' + cx + '" cy="' + cy + '" r="' + R + '" fill="#232b57" stroke="#3b4580" stroke-width="1.5"/><path d="' + d + '" fill="#f6f0d4"' + tr + '/></svg>';
}

/* ---------- Estado de cada estrella ---------- */
function fichasOrden(mat) { return fichasDe(mat).slice().sort(function (a, b) { return numFicha(a, 0) - numFicha(b, 0); }); }
/* nivel: 0 aún no descubierta, 1 tenue (toca repasar), 2 brilla, 3 radiante (con sello y al día) */
function estrellasDe(s, mat) {
  var hoy = fechaHoy();
  return fichasOrden(mat).map(function (f, i) {
    var id = f.ficha.id, qs = preguntasDe(mat, id), vistas = qs.filter(function (q) { return s.qs[q.id]; }), pend = vistas.filter(function (q) { var d = dueDe(s, q); return d && d <= hoy; }).length;
    var dom = f.temas.length ? dominados(s, mat, id) / f.temas.length : 0, sello = !!s.sellos[id], nivel;
    if (!vistas.length) nivel = 0; else if (pend / vistas.length > .5) nivel = 1; else nivel = sello ? 3 : 2;
    var br = nivel === 0 ? .25 : Math.max(.4, (.45 + .55 * dom) * (nivel === 1 ? .6 : pend ? .85 : 1));
    return { i: i, f: f, id: id, num: numFicha(f, i), titulo: f.ficha.titulo.replace(/^Ficha \d+ · /, ''), dom: dom, vistas: vistas.length, pend: pend, sello: sello, nivel: nivel, br: br };
  });
}
function estadoTxt(n) { return ['Aún no la descubres: repasa esta ficha para encenderla.', 'Está tenue: quiere que la repases para volver a brillar.', 'Brilla. Cada repaso a tiempo la hace brillar más.', 'Radiante: tienes el sello de esta ficha y la repasas a tiempo.'][n]; }

/* ---------- Dibujo del cielo (sirve para el tuyo y para el del grupo) ---------- */
function destello(R) { var r = R * .28; return 'M0 ' + -R + ' Q' + r + ' ' + -r + ' ' + R + ' 0 Q' + r + ' ' + r + ' 0 ' + R + ' Q' + -r + ' ' + r + ' ' + -R + ' 0 Q' + -r + ' ' + -r + ' 0 ' + -R + 'Z'; }
function fondoCielo(mat, svg) {
  var b = MAT[mat].brand, top = '#0a0e2c', bot = mezclaHex('#0a0e2c', b, .32), g = '', i, sd = mat.length * 97;
  for (i = 0; i < 46; i++) { sd = (sd * 9301 + 49297) % 233280; var x = sd / 233280 * 300; sd = (sd * 9301 + 49297) % 233280; var y = sd / 233280 * 240; g += '<circle cx="' + x.toFixed(1) + '" cy="' + y.toFixed(1) + '" r="' + (i % 5 === 0 ? 1.3 : .7) + '" fill="#fff" opacity="' + (i % 3 ? .35 : .6) + '"/>'; }
  return '<defs><linearGradient id="cg-' + svg + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bot + '"/></linearGradient><radialGradient id="cgl-' + svg + '"><stop offset="0" stop-color="#fff" stop-opacity=".95"/><stop offset="1" stop-color="' + b + '" stop-opacity="0"/></radialGradient></defs><rect width="300" height="240" fill="url(#cg-' + svg + ')"/>' + g;
}
function dibujaCielo(host, mat, est, onTap, sel) {
  var F = formaConst(mat), b = MAT[mat].brand, luz = mezclaHex(b, '#ffffff', .72), h = fondoCielo(mat, host.id || 'x');
  F.lin.forEach(function (l) {
    var a = est[l[0]], c = est[l[1]]; if (!a || !c) return;
    var vivo = a.nivel > 0 && c.nivel > 0, op = vivo ? Math.min(a.br, c.br) * .85 : .34;
    h += '<line x1="' + F.pts[l[0]][0] + '" y1="' + F.pts[l[0]][1] + '" x2="' + F.pts[l[1]][0] + '" y2="' + F.pts[l[1]][1] + '" stroke="' + (vivo ? luz : '#b4bce6') + '" stroke-width="' + (vivo ? 1.6 : 1.1) + '"' + (vivo ? '' : ' stroke-dasharray="3 4"') + ' opacity="' + op.toFixed(2) + '"/>';
  });
  est.forEach(function (e, i) {
    var p = F.pts[i]; if (!p) return; var R = 8 + 8 * (e.nivel ? e.br : .2), o = e.br;
    h += '<g class="stl' + (i === sel ? ' sel' : '') + (e.nivel === 1 ? ' tenue' : '') + '" data-i="' + i + '" transform="translate(' + p[0] + ',' + p[1] + ')" role="button" tabindex="0" aria-label="Estrella de la ficha ' + e.num + ', ' + esc(e.titulo) + '. ' + estadoTxt(e.nivel) + '">';
    h += '<circle r="16" fill="transparent"/>';
    if (e.nivel === 0) h += '<circle r="6.5" fill="none" stroke="#8d97c9" stroke-width="1.4" stroke-dasharray="2 3" opacity=".8"/><circle r="1.8" fill="#8d97c9" opacity=".7"/>';
    else {
      h += '<circle r="' + (R * 1.9).toFixed(1) + '" fill="url(#cgl-' + (host.id || 'x') + ')" opacity="' + (o * .75).toFixed(2) + '"/>';
      h += '<path class="spk" d="' + destello(R) + '" fill="' + luz + '" opacity="' + Math.min(1, o + .1).toFixed(2) + '" style="animation-delay:' + (i * .37).toFixed(2) + 's"/>';
      if (e.sello) h += '<circle r="' + (R + 5).toFixed(1) + '" fill="none" stroke="#ffd84d" stroke-width="1.6" stroke-dasharray="2.5 3" opacity=".95"/>';
    }
    h += '<text y="' + (R + 14).toFixed(0) + '" text-anchor="middle" font-size="9" font-weight="800" fill="#cfd6ff" opacity=".85">' + e.num + '</text>';
    if (i === sel) h += '<circle r="' + (R + 11).toFixed(1) + '" fill="none" stroke="#fff" stroke-width="1.6" opacity=".9"/>';
    h += '</g>';
  });
  host.innerHTML = h;
  host.querySelectorAll('.stl').forEach(function (g) {
    var i = +g.dataset.i, f = function (ev) { ev.preventDefault(); onTap(i); };
    g.addEventListener('click', f); g.addEventListener('keydown', function (ev) { if (ev.key === 'Enter' || ev.key === ' ') f(ev); });
  });
}

/* ---------- Pantalla del cielo ---------- */
var cieloSel = -1;
function renderCielo() {
  var s = cur(), mat = ST.activa, m = MAT[mat], est = estrellasDe(s, mat), hoy = est.filter(function (e) { return e.vistas && e.pend; }).length;
  $('ci-t').textContent = 'Tu cielo de ' + m.n;
  var sin = !est.length;
  $('ci-sub').textContent = sin ? 'Tu docente agregará las fichas muy pronto.' : est.every(function (e) { return !e.nivel; }) ? 'Cada ficha es una estrella. Repasa la Ficha 1 y enciende la primera.' : hoy ? hoy + (hoy === 1 ? ' estrella quiere' : ' estrellas quieren') + ' brillar hoy. Nunca se apagan: solo esperan.' : 'Tu cielo está brillando. Vuelve cuando quieras.';
  $('ci-svg').style.display = sin ? 'none' : '';
  if (!sin) dibujaCielo($('ci-svg'), mat, est, function (i) { cieloSel = i; tono(PE[i % 8], .5, 'sine', .09, 0, 1); renderCielo(); mostrarEstrella(est[i]); }, cieloSel);
  if (cieloSel < 0) $('ci-star').innerHTML = '<p class="p" style="text-align:center;margin:4px 0">Toca una estrella para ver su frase y su ficha.</p>';
  var C = CONSTEL[mat]; $('ci-const').innerHTML = '<b>' + C.n + ', ' + C.d + '.</b> Estas estrellas existen de verdad. Mejor época para verla al anochecer desde México: ' + C.mes + ', ' + C.sur + '. Las líneas son una figura simplificada.';
  var L = lunaInfo(new Date());
  $('ci-luna').innerHTML = '<span class="mn">' + lunaSVG(L.e, 22) + '</span><span><b>' + L.n + ' de hoy</b><small>' + L.t + ' La luna no tiene luz propia: refleja la del Sol. Si hoy está despejado, mírala y dibuja su forma en tu cuaderno.</small><small class="fn">Fase aproximada, calculada con la fecha (no usa tu ubicación).</small></span>';
  var hub = $('ci-hub'); hub.innerHTML = '';
  var mu = museoCuenta(s);
  hub.appendChild(card2('', ICO_MUSEO, 'Museo de errores', mu.t ? mu.ok + ' de ' + mu.t + ' hipótesis superadas.' : 'Aquí vivirán tus errores convertidos en descubrimientos.', 'Ver', function () { go('museo'); }));
  hub.appendChild(card2('', ICO_CUAD, 'Cuaderno de ' + esc(s.name), esc(s.name) + ' guarda lo que le enseñas.', 'Ver', function () { go('cuaderno'); }));
  var MD = metaDatos(); hub.appendChild(card2('', ICO_GRUPO, 'Banco del grupo', 'Meta de la semana: ' + MD.tot + ' de ' + MD.meta + ' estrellas. Escribe preguntas y enciendan juntas el cielo.', 'Entrar', function () { go('grupo'); }));
}
function mostrarEstrella(e) {
  var v = VALOR[e.id] || ['Aprende', 'Cada estrella es una idea que ya es tuya.'], c = $('ci-star'); c.innerHTML = '';
  var t = el('div', 'stc-h'); t.innerHTML = '<span class="stc-n">' + e.num + '</span><b>' + esc(e.titulo) + '</b>'; c.appendChild(t);
  var C = CONSTEL[ST.activa]; if (C && C.st[e.i]) c.appendChild(el('p', 'stc-real', 'Estrella real: ' + C.st[e.i][0] + ', de ' + C.n + '.'));
  var q = el('p', 'stc-v'); q.innerHTML = '<span class="stc-tag">' + esc(v[0]) + '</span> ' + esc(v[1]); c.appendChild(q);
  c.appendChild(el('p', 'stc-e', estadoTxt(e.nivel) + (e.vistas ? ' Por repasar hoy: ' + e.pend + ' de ' + e.vistas + ' preguntas que ya viste.' : '')));
  if (preguntasDe(ST.activa, e.id).length) { var b = el('button', 'cta', e.vistas ? 'Repasar esta ficha' : 'Encender esta estrella'); b.type = 'button'; b.onclick = function () { iniciarQuiz({ ficha: e.id }); }; c.appendChild(b); }
}

/* ---------- Íconos ---------- */
var ICO_CIELO = '<svg viewBox="0 0 40 40" aria-hidden="true"><path d="M20 4 L24 16 L36 20 L24 24 L20 36 L16 24 L4 20 L16 16Z" fill="var(--brand)" stroke="#fff" stroke-width="1.5" stroke-linejoin="round"/><circle cx="33" cy="8" r="2" fill="#ffc933"/><circle cx="7" cy="32" r="1.6" fill="#ffc933"/></svg>';
var ICO_MUSEO = '<svg viewBox="0 0 40 40" aria-hidden="true"><path d="M5 15 L20 6 L35 15Z" fill="var(--brand)"/><rect x="8" y="17" width="4" height="14" fill="var(--brand-soft)" stroke="var(--brand)" stroke-width="1.8"/><rect x="18" y="17" width="4" height="14" fill="var(--brand-soft)" stroke="var(--brand)" stroke-width="1.8"/><rect x="28" y="17" width="4" height="14" fill="var(--brand-soft)" stroke="var(--brand)" stroke-width="1.8"/><rect x="5" y="32" width="30" height="4" rx="1.5" fill="var(--brand)"/></svg>';
var ICO_CUAD = '<svg viewBox="0 0 40 40" aria-hidden="true"><rect x="9" y="5" width="23" height="30" rx="4" fill="#fff" stroke="var(--brand)" stroke-width="3"/><path d="M9 11 H5 M9 18 H5 M9 25 H5" stroke="var(--brand)" stroke-width="3" stroke-linecap="round"/><path d="M15 14 H26 M15 20 H26 M15 26 H21" stroke="var(--brand)" stroke-width="2.6" stroke-linecap="round"/></svg>';
var ICO_GRUPO = '<svg viewBox="0 0 40 40" aria-hidden="true"><circle cx="14" cy="15" r="5.5" fill="var(--brand-soft)" stroke="var(--brand)" stroke-width="2.6"/><circle cx="27" cy="15" r="5.5" fill="var(--brand-soft)" stroke="var(--brand)" stroke-width="2.6"/><path d="M4 33 Q4 24 14 24 Q20 24 20 28 Q20 24 27 24 Q36 24 36 33" fill="none" stroke="var(--brand)" stroke-width="2.6" stroke-linecap="round"/></svg>';

/* =========================================================
   MUSEO DE ERRORES
   ========================================================= */
function museoError(q, elegido) {
  if (!q || q.sinXP) return; var s = cur(), x = s.err[q.id] = s.err[q.id] || { n: 0, e: '', d: fechaHoy(), ok: '' };
  x.n++; if (typeof elegido === 'string' && elegido) x.e = elegido.slice(0, 90); x.ok = ''; guardar();
}
function museoAcierto(q) {   /* devuelve true si con este acierto se supera una hipótesis */
  if (!q || q.sinXP) return false; var s = cur(), x = s.err[q.id]; if (!x || x.ok) return false;
  x.ok = fechaHoy(); guardar(); return true;
}
function museoCuenta(s) {
  var t = 0, ok = 0; Object.keys(s.err).forEach(function (id) { var q = PORID[id]; if (!q || q.materia !== ST.activa) return; t++; if (s.err[id].ok) ok++; });
  return { t: t, ok: ok };
}
/* errores famosos: se abren al superar 1, 3 y 6 hipótesis propias */
var FAMOSOS = {
  biologia: [
    { n: 'El cerebro como radiador', f: 1, req: 1, a: 'Aristóteles (siglo IV a. C.) pensaba que el pensamiento vivía en el corazón y que el cerebro solo enfriaba la sangre.',
      b: 'Siglos después, Galeno observó que dañar el cerebro o los nervios de un animal afectaba su movimiento y sus sentidos.', c: 'El cerebro, la médula y los nervios forman el sistema nervioso, que coordina todo el cuerpo.' },
    { n: 'Una red continua o neuronas separadas', f: 2, req: 3, a: 'Camillo Golgi defendía que el sistema nervioso era una red continua, sin espacios entre sus partes.',
      b: 'Santiago Ramón y Cajal usó la tinción de Golgi y dibujó con el microscopio neuronas separadas que se comunican. Ambos recibieron el Nobel en 1906, y después se confirmó que casi todas se comunican por sinapsis.', c: 'Las neuronas son células separadas que se pasan mensajes con neurotransmisores. Un error y una corrección impulsaron la neurociencia.' },
    { n: 'Gusanos que nacían de la carne', f: 9, req: 6, a: 'Durante siglos se creyó que moscas y gusanos nacían solos de la materia podrida (generación espontánea).',
      b: 'Francesco Redi (1668) tapó frascos con gasa y no aparecieron gusanos. Luego Louis Pasteur (1860s) usó matraces de cuello de cisne y mostró que los microbios vienen de otros microbios.', c: 'Los seres vivos vienen de otros seres vivos. Por eso la higiene y la prevención evitan muchas infecciones.' }
  ],
  fisica: [
    { n: 'El átomo como pastel de pasas', f: 7, req: 1, a: 'J. J. Thomson imaginó el átomo como una esfera con carga positiva y electrones incrustados, como pasas en un pastel.',
      b: 'Rutherford, Geiger y Marsden lanzaron partículas alfa contra una lámina de oro (1909 a 1911): casi todas pasaban y algunas rebotaban.', c: 'El átomo tiene un núcleo diminuto y mucho espacio vacío. El modelo se corrigió con evidencia.' },
    { n: 'El calor como un fluido', f: 10, req: 3, a: 'En el siglo XVIII se creía que el calor era un fluido invisible, el calórico, que pasaba de un cuerpo a otro.',
      b: 'Benjamin Thompson (1798) notó que al taladrar cañones se producía calor sin parar, y más tarde James Joule midió cuánto trabajo se convierte en calor.', c: 'El calor es energía en tránsito, ligada al movimiento de las partículas.' },
    { n: 'Lo pesado cae más rápido', f: 1, req: 6, a: 'Aristóteles sostenía que los objetos más pesados caían más rápido que los ligeros.',
      b: 'Galileo razonó y experimentó con planos inclinados. En 1971, en la Luna (sin aire), el astronauta David Scott soltó un martillo y una pluma: cayeron juntos.', c: 'Sin resistencia del aire, todos los cuerpos caen igual. Una idea muy respetada también se pone a prueba.' }
  ],
  quimica: [
    { n: 'El flogisto', f: 10, req: 1, a: 'En el siglo XVIII se creía que lo que arde liberaba una sustancia llamada flogisto.',
      b: 'Antoine Lavoisier midió las masas en recipientes cerrados y mostró que al quemarse algo se combina con oxígeno del aire; la masa total se conserva.', c: 'En una reacción química los átomos se reacomodan y la masa total se conserva.' },
    { n: 'Los cuatro elementos', f: 6, req: 3, a: 'Se pensaba que todo estaba hecho de tierra, agua, aire y fuego.',
      b: 'Robert Boyle y después Lavoisier pidieron pruebas y definieron elemento como una sustancia que no se puede descomponer en otras. En 1869 Mendeleev ordenó los elementos en su tabla.', c: 'El aire es una mezcla de gases y el agua es un compuesto: ninguno es un elemento.' },
    { n: 'Convertir plomo en oro', f: 7, req: 6, a: 'Las alquimistas y los alquimistas buscaron durante siglos transformar plomo en oro.',
      b: 'No lo lograron, pero en el camino perfeccionaron la destilación, la filtración y el material de laboratorio. Se aprendió que los cambios químicos no convierten un elemento en otro.', c: 'Muchos métodos de separación nacieron de intentos que no salieron como se esperaba.' }
  ]
};
function renderMuseo() {
  var s = cur(), mat = ST.activa, ids = Object.keys(s.err).filter(function (id) { return PORID[id] && PORID[id].materia === mat; }), mu = museoCuenta(s);
  $('mu-kpi').innerHTML = '<div><b>' + mu.t + '</b><span>hipótesis puestas a prueba</span></div><div><b>' + mu.ok + '</b><span>ya superadas</span></div>';
  var box = $('mu-lista'); box.innerHTML = '';
  ids.sort(function (a, b) { return (s.err[a].ok ? 1 : 0) - (s.err[b].ok ? 1 : 0) || (s.err[a].d < s.err[b].d ? 1 : -1); });
  if (!ids.length) box.appendChild(el('p', 'p', 'Todavía no tienes errores guardados. Cuando una respuesta no salga como esperabas, la guardo aquí como una hipótesis puesta a prueba. Equivocarse es parte de descubrir.'));
  ids.slice(0, 40).forEach(function (id) {
    var q = PORID[id], x = s.err[id], c = el('div', 'muc' + (x.ok ? ' ok' : ''));
    var h = el('div', 'muc-h'); h.appendChild(el('span', 'muc-t', temaNombre(q.tema))); h.appendChild(el('span', 'muc-s', x.ok ? 'Superada' : 'Por probar de nuevo')); c.appendChild(h);
    c.appendChild(el('p', 'muc-q', q.q.replace('{m}', s.name)));
    if (x.e) { var p1 = el('p', 'muc-p'); p1.innerHTML = '<b>Pensaste:</b> '; p1.appendChild(document.createTextNode('"' + x.e + '"')); c.appendChild(p1); }
    var p2 = el('p', 'muc-p'); p2.innerHTML = '<b>Resultó ser:</b> '; p2.appendChild(document.createTextNode(respuestaTexto(q))); c.appendChild(p2);
    if (q.e) c.appendChild(el('p', 'muc-p soft', q.e));
    if (!x.ok) { var b = el('button', 'cta sec', 'Probar otra vez'); b.type = 'button'; b.onclick = function () { quiz = { i: 0, ok: 0, xp: 0, qs: [q], et0: etapa(s), corrige: false }; go('quiz'); mostrarQ(); }; c.appendChild(b); }
    box.appendChild(c);
  });
  var fam = $('mu-fam'); fam.innerHTML = '';
  (FAMOSOS[mat] || []).forEach(function (f) {
    var abre = mu.ok >= f.req, d = el('details', 'mf' + (abre ? '' : ' lock')); var sm = el('summary'); sm.innerHTML = '<span class="mf-i">' + (abre ? '★' : '?') + '</span><span><b>' + esc(abre ? f.n : 'Error famoso por descubrir') + '</b><small>' + (abre ? 'Ficha ' + f.f : 'Supera ' + f.req + (f.req === 1 ? ' hipótesis tuya' : ' hipótesis tuyas') + ' para abrirlo (llevas ' + mu.ok + ')') + '</small></span>'; d.appendChild(sm);
    if (abre) { d.appendChild(el('p', '', '')); d.lastChild.innerHTML = '<b>Se creía:</b> ' + esc(f.a); d.appendChild(el('p', '')); d.lastChild.innerHTML = '<b>Cómo se puso a prueba:</b> ' + esc(f.b); d.appendChild(el('p', '')); d.lastChild.innerHTML = '<b>Lo que aprendimos:</b> ' + esc(f.c); d.appendChild(el('p', 'mf-n', 'Equivocarse no fue un fracaso: fue un paso del camino. Tus hipótesis puestas a prueba funcionan igual.')); }
    else { d.addEventListener('click', function (e) { e.preventDefault(); say('Supera ' + f.req + (f.req === 1 ? ' hipótesis' : ' hipótesis') + ' de tu Museo para abrir este error famoso.'); SFX.tick(); }); }
    fam.appendChild(d);
  });
}

/* =========================================================
   CUADERNO DE LA MASCOTA (tu mascota es tu estudiante)
   ========================================================= */
function aprendidoDe(s, mat) {
  var corr = [], temas = [];
  preguntasDe(mat).forEach(function (q) { if (q.m && correcta(q) !== 'Tienes razón' && correcta(q) !== 'Te equivocas' && s.qs[q.id] && s.qs[q.id][1] > 0) corr.push(q); });
  temasDeMateria(mat).forEach(function (t) { if (temaDominado(s, mat, t.key)) temas.push(t); });
  return { corr: corr, temas: temas };
}
function renderCuaderno() {
  var s = cur(), mat = ST.activa, A = aprendidoDe(s, mat), tot = temasDeMateria(mat).length, n = A.corr.length + A.temas.length;
  $('cu-t').textContent = 'Cuaderno de ' + s.name;
  $('cu-sub').textContent = n ? s.name + ' ya anotó ' + n + (n === 1 ? ' idea' : ' ideas') + ' gracias a ti.' : 'Mi cuaderno está en blanco. Corrígeme y lo lleno contigo.';
  $('cu-pr').style.width = (tot ? Math.min(100, A.temas.length / tot * 100) : 0) + '%'; $('cu-prt').textContent = A.temas.length + ' de ' + tot + ' temas que ya sé';
  var c = $('cu-corr'); c.innerHTML = '';
  A.corr.slice(0, 30).forEach(function (q) {
    var cl = (q.q.match(/dice: "(.*)"\./) || [])[1] || '', d = el('div', 'cuc');
    var a = el('p', 'cuc-a'); a.innerHTML = '<b>Antes creía:</b> '; a.appendChild(document.createTextNode('"' + cl + '"')); d.appendChild(a);
    var b = el('p', 'cuc-b'); b.innerHTML = '<b>Ahora sé:</b> '; b.appendChild(document.createTextNode(correcta(q))); d.appendChild(b);
    if (q.e) d.appendChild(el('p', 'cuc-e', q.e)); c.appendChild(d);
  });
  if (!A.corr.length) c.appendChild(el('p', 'p', 'Aquí aparecerán las ideas equivocadas que ' + s.name + ' tenía y que tú le corriges.'));
  var t = $('cu-temas'); t.innerHTML = '';
  A.temas.forEach(function (x) { t.appendChild(el('span', 'chipt', x.nombre)); });
  if (!A.temas.length) t.appendChild(el('p', 'p', 'Cuando domines un tema, ' + s.name + ' lo escribe aquí.'));
  var b = $('cu-go'), hay = preguntasDe(mat).filter(function (q) { return q.m; }).length >= 4; b.hidden = !hay;
}

/* ---------- Conexiones con el resto de la app ---------- */
(function () {
  VISTAS.cielo = { rt: 1, pills: 1, nav: 1 }; VISTAS.museo = { rt: 1 }; VISTAS.cuaderno = { rt: 1, stage: 's' };
  var g0 = go;
  var museoDesdeQuiz = false, erroresSesion = 0;
  go = function (v) {
    if (v !== 'cielo') cieloSel = -1;
    if (v !== 'museo' && v !== 'quiz') museoDesdeQuiz = false;
    g0(v);
    if (v === 'cielo') renderCielo(); else if (v === 'museo') { renderMuseo(); $('mu-back').textContent = museoDesdeQuiz ? 'Volver al repaso' : 'Volver al cielo'; } else if (v === 'cuaderno') renderCuaderno();
    if (v === 'res') $('r-museo').hidden = !erroresSesion;
    else if (v === 'home') erroresSesion = 0;
  };
  /* errores y aciertos al responder el repaso */
  var r0 = responderQ;
  responderQ = function (q, bien, elegido, conf) {
    var fueraRegistro = q && q.sinXP;
    if (!bien) museoError(q, elegido);
    var supero = bien ? museoAcierto(q) : false;
    if (fueraRegistro) { var p0 = PTS.acierto; PTS.acierto = 0; try { r0(q, bien, elegido, conf); } finally { PTS.acierto = p0; } }
    else r0(q, bien, elegido, conf);
    var fb = $('q-fb');
    if (fueraRegistro) { fb.querySelectorAll('.ref').forEach(function (n) { if (/ya te dio puntos|ya recibió toda/.test(n.textContent)) n.textContent = 'Pregunta del grupo: no da puntos, es para aprender juntos.'; }); return; }
    if (!bien) {
      erroresSesion++;
      var nota = el('div', 'ref museo-nota', 'Guardé este error en tu Museo: es una hipótesis puesta a prueba, no un fracaso.'), bt = el('button', 'museo-ver', 'Ver mi Museo');
      bt.type = 'button'; bt.onclick = function () { museoDesdeQuiz = true; go('museo'); }; nota.appendChild(bt); fb.appendChild(nota);
    }
    else if (supero) { fb.appendChild(el('div', 'ref museo-nota ok', '¡Hipótesis superada! Ya la pasé a "Superadas" en tu Museo.')); confeti(14); }
    if (bien && quiz && quiz.corrige) { say(cur().name + ': ¡Lo anoto en mi cuaderno!'); }
  };
  /* tarjeta del cielo en el inicio */
  var rc0 = renderCards2;
  renderCards2 = function () {
    rc0(); var s = cur(), mat = ST.activa; if (!fichasDe(mat).length || !preguntasDe(mat).length) return;
    var est = estrellasDe(s, mat), hoy = est.filter(function (e) { return e.vistas && e.pend; }).length, algo = est.some(function (e) { return e.nivel; });
    var sub = !algo ? 'Cada ficha es una estrella. Enciende la primera.' : hoy ? hoy + (hoy === 1 ? ' estrella quiere' : ' estrellas quieren') + ' brillar hoy.' : 'Tu cielo está brillando.';
    var c = $('cards2'), card = card2(hoy ? 'ready' : '', ICO_CIELO, 'Tu cielo de ' + MAT[mat].n, sub, 'Ver', function () { go('cielo'); });
    c.insertBefore(card, c.children[1] || null);
  };
  /* la mascota recuerda lo que le enseñaste */
  var rh0 = renderHome;
  renderHome = function () {
    rh0(); var s = cur(); if (s.vis < 1 || Math.random() > .4) return;
    var A = aprendidoDe(s, ST.activa), op = [];
    A.temas.forEach(function (t) { op.push('Gracias a ti ya sé sobre "' + t.nombre + '".'); });
    A.corr.forEach(function (q) { var cl = (q.q.match(/dice: "(.*)"\./) || [])[1]; if (cl) op.push('Antes yo creía que "' + cl + '". Tú me corregiste y ahora lo sé.'); });
    if (op.length) say(s.name + ': ' + op[Math.floor(Math.random() * op.length)]);
  };
  $('mu-back').onclick = function () { if (museoDesdeQuiz && quiz && vistaActual === 'museo') { museoDesdeQuiz = false; go('quiz'); } else { museoDesdeQuiz = false; go('cielo'); } };
  $('r-museo').onclick = function () { museoDesdeQuiz = false; go('museo'); }; $('cu-back').onclick = function () { go('cielo'); };
  /* explicar las etiquetas de arriba al tocarlas */
  [['c-racha', 'Racha: los días seguidos que repasaste. Si faltas un día, no pasa nada: solo vuelve a empezar.'], ['c-dom', 'Temas: los que ya dominas, es decir, los que contestaste bien varias veces en días distintos.']].forEach(function (x) {
    var c = $(x[0]); if (!c) return; c.setAttribute('role', 'button'); c.tabIndex = 0; c.style.cursor = 'pointer'; c.setAttribute('aria-label', x[1]);
    var f = function () {
      var o = document.getElementById('chip-tip'); if (o) o.remove();
      var d = el('div', 'chiptip', x[1]); d.id = 'chip-tip'; d.setAttribute('role', 'status'); document.body.appendChild(d);
      setTimeout(function () { if (d.parentNode) d.remove(); }, 5000); d.onclick = function () { d.remove(); };
    };
    c.onclick = f; c.onkeydown = function (e) { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); f(); } };
  });
  $('cu-go').onclick = function () { iniciarQuiz({ corrige: true }); };
})();
