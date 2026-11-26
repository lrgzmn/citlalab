/* SONIDO, VIBRACIÓN Y CONFETI. Todo se genera con código: no hay archivos de audio ni de imagen. */
var AC = null;
function ac() {
  if (!AC) { try { AC = new (window.AudioContext || window.webkitAudioContext)(); } catch (e) {} }
  if (AC && AC.state === 'suspended') { try { AC.resume(); } catch (e) {} }
  return AC;
}
/* Bus con un eco suave (como un cuarto pequeño) para que todo suene redondo y no seco */
var BUS = null;
function bus() {
  var a = ac(); if (!a) return null;
  if (BUS && BUS.ctx === a) return BUS.in;
  try {
    var ent = a.createGain(), seco = a.createGain(), eco = a.createDelay(.5), fb = a.createGain(), lp = a.createBiquadFilter(), hum = a.createGain();
    seco.gain.value = .9; eco.delayTime.value = .17; fb.gain.value = .3; lp.type = 'lowpass'; lp.frequency.value = 2400; hum.gain.value = .35;
    ent.connect(seco); seco.connect(a.destination);
    ent.connect(eco); eco.connect(lp); lp.connect(fb); fb.connect(eco); lp.connect(hum); hum.connect(a.destination);
    BUS = { ctx: a, in: ent };
    return ent;
  } catch (e) { return a.destination; }
}
/* una nota: onda suave con ataque corto y caída natural; 'campana' añade un armónico agudo que se apaga rápido */
function tono(f, d, tipo, vol, delay, cam) {
  if (!ST || !ST.cfg.snd) return;
  var a = ac(); if (!a) return; var out = bus() || a.destination;
  var t = a.currentTime + (delay || 0), o = a.createOscillator(), g = a.createGain();
  o.type = tipo || 'sine'; o.frequency.setValueAtTime(f, t);
  g.gain.setValueAtTime(0.0001, t); g.gain.exponentialRampToValueAtTime(vol || .1, t + .012); g.gain.exponentialRampToValueAtTime(0.0001, t + d);
  o.connect(g); g.connect(out); o.start(t); o.stop(t + d + .05);
  if (cam) {
    var o2 = a.createOscillator(), g2 = a.createGain();
    o2.type = 'sine'; o2.frequency.setValueAtTime(f * 3.99, t);
    g2.gain.setValueAtTime(0.0001, t); g2.gain.exponentialRampToValueAtTime((vol || .1) * .28, t + .008); g2.gain.exponentialRampToValueAtTime(0.0001, t + d * .35);
    o2.connect(g2); g2.connect(out); o2.start(t); o2.stop(t + d * .35 + .05);
  }
}
/* notas que se deslizan (burbujas, electrones) */
function barrido(f0, f1, d, vol, delay, tipo) {
  if (!ST || !ST.cfg.snd) return;
  var a = ac(); if (!a) return; var out = bus() || a.destination;
  var t = a.currentTime + (delay || 0), o = a.createOscillator(), g = a.createGain();
  o.type = tipo || 'sine'; o.frequency.setValueAtTime(f0, t); o.frequency.exponentialRampToValueAtTime(f1, t + d * .8);
  g.gain.setValueAtTime(0.0001, t); g.gain.exponentialRampToValueAtTime(vol || .1, t + .015); g.gain.exponentialRampToValueAtTime(0.0001, t + d);
  o.connect(g); g.connect(out); o.start(t); o.stop(t + d + .05);
}
/* escala pentatónica (do re mi sol la): todo combina y nada suena desafinado */
var PE = [523.25, 587.33, 659.25, 783.99, 880, 1046.5, 1174.7, 1318.5];
var SFX = {
  ok: function () { tono(PE[2], .35, 'sine', .11, 0, 1); tono(PE[4], .5, 'sine', .11, .1, 1); },
  no: function () { tono(392, .3, 'sine', .07, 0); tono(330, .4, 'sine', .06, .16); },          /* error amable: dos notas suaves que bajan */
  pop: function () { var k = Math.floor(Math.random() * 5); tono(PE[k], .22, 'sine', .11, 0, 1); tono(PE[k + 1] || PE[5], .2, 'sine', .07, .06, 1); },
  up: function () { [0, 2, 3, 5].forEach(function (k, i) { tono(PE[k], .5, 'sine', .1, i * .1, 1); }); tono(PE[7], .9, 'sine', .07, .42, 1); },
  chest: function () { [0, 1, 2, 3, 4, 5].forEach(function (k, i) { tono(PE[k], .32, 'sine', .08, i * .06, 1); }); },
  hit: function () { barrido(260, 110, .22, .1); tono(196, .25, 'sine', .06, .03); },
  win: function () { [0, 2, 3, 2, 3, 5, 7].forEach(function (k, i) { tono(PE[k], .38, 'sine', .1, i * .12, 1); }); },
  tick: function () { tono(PE[3], .09, 'sine', .06, 0, 1); },
  nana: function () { [392, 330, 294, 330, 392, 392, 392].forEach(function (f, i) { tono(f, .6, 'sine', .05, i * .45, 1); }); },
  ronca: function () { tono(150, .55, 'sine', .05); tono(115, .75, 'sine', .05, .65); },
  crack: function () { tono(PE[5], .08, 'sine', .07, 0, 1); tono(PE[3], .08, 'sine', .06, .05, 1); tono(PE[1], .12, 'sine', .06, .1, 1); },
  /* comer: lengüetazo que sube, "glup" que cae y un "ñam" alegre (sonido original, hecho con código) */
  nam: function () {
    barrido(420, 1500, .08, .09, 0, 'triangle');
    barrido(900, 330, .09, .12, .09, 'sine'); tono(196, .1, 'sine', .08, .1);
    barrido(760, 280, .09, .1, .2, 'sine');
    tono(PE[2], .12, 'triangle', .07, .3, 1); tono(PE[4], .22, 'triangle', .07, .38, 1);
  },
  /* un bocado chiquito (para el segundo mordisco) */
  nam2: function () { barrido(800, 300, .08, .1, 0, 'sine'); tono(PE[3], .14, 'triangle', .06, .08, 1); },
  /* la voz de cada criatura al tocarla */
  voz: function (c) {
    if (c === 'neurona') { var k = Math.floor(Math.random() * 3); tono(PE[k + 1], .16, 'sine', .11, 0, 1); tono(PE[k + 3], .22, 'sine', .1, .09, 1); }     /* chispa neuronal: dos notitas que suben */
    else if (c === 'atomo') { barrido(500, 1250, .2, .1); tono(PE[5], .3, 'sine', .07, .17, 1); }                                                         /* electrón que salta de órbita */
    else if (c === 'matraz') { var b = 330 + Math.random() * 90; barrido(b, b * 2, .13, .11); barrido(b * 1.3, b * 2.6, .12, .08, .09); }                  /* burbujitas */
    else SFX.pop();
  }
};
function vibra(p) { if (ST && ST.cfg.vib && navigator.vibrate) { try { navigator.vibrate(p); } catch (e) {} } }

var CF = [], cfRun = false;
function confeti(n) {
  if (ST && ST.cfg.mov) return;
  var c = document.getElementById('cf'); if (!c) return;
  var W = window.innerWidth, H = window.innerHeight, dpr = window.devicePixelRatio || 1;
  c.width = W * dpr; c.height = H * dpr;
  var cols = ['#ff6b6b', '#ffd84d', '#4cc38a', '#4f8cff', '#ff6fa5', '#9a6cff'];
  var host = document.getElementById('stage'), r = host ? host.getBoundingClientRect() : { top: H * .3, height: 200 };
  var oy = r.top + r.height * .45;
  for (var i = 0; i < n; i++) {
    CF.push({ x: W / 2 + (Math.random() - .5) * Math.min(W, 420) * .6, y: oy, vx: (Math.random() - .5) * 9, vy: -Math.random() * 10 - 2, g: .3, r: Math.random() * 5 + 3,
      c: cols[i % cols.length], rot: Math.random() * 6, vr: (Math.random() - .5) * .4, life: 0 });
  }
  if (!cfRun) {
    cfRun = true;
    requestAnimationFrame(function paso() {
      var x = c.getContext('2d'); x.setTransform(dpr, 0, 0, dpr, 0, 0); x.clearRect(0, 0, W, H);
      CF = CF.filter(function (p) { p.life++; p.vy += p.g; p.x += p.vx; p.y += p.vy; p.vx *= .99; p.rot += p.vr; return p.y < H + 20 && p.life < 120; });
      CF.forEach(function (p) { x.save(); x.translate(p.x, p.y); x.rotate(p.rot); x.fillStyle = p.c; x.globalAlpha = Math.max(0, 1 - p.life / 120); x.fillRect(-p.r, -p.r / 2, p.r * 2, p.r); x.restore(); });
      if (CF.length) requestAnimationFrame(paso); else { x.clearRect(0, 0, W, H); cfRun = false; }
    });
  }
}
