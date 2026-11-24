/* SONIDO, VIBRACIÓN Y CONFETI. Todo se genera con código: no hay archivos de audio ni de imagen. */
var AC = null;
function ac() {
  if (!AC) { try { AC = new (window.AudioContext || window.webkitAudioContext)(); } catch (e) {} }
  if (AC && AC.state === 'suspended') { try { AC.resume(); } catch (e) {} }
  return AC;
}
function tono(f, d, tipo, vol, delay) {
  if (!ST || !ST.cfg.snd) return;
  var a = ac(); if (!a) return;
  var t = a.currentTime + (delay || 0), o = a.createOscillator(), g = a.createGain();
  o.type = tipo || 'sine'; o.frequency.setValueAtTime(f, t);
  g.gain.setValueAtTime(0.0001, t); g.gain.exponentialRampToValueAtTime(vol || .1, t + .02); g.gain.exponentialRampToValueAtTime(0.0001, t + d);
  o.connect(g); g.connect(a.destination); o.start(t); o.stop(t + d + .05);
}
var SFX = {
  ok: function () { tono(660, .14, 'sine', .1); tono(880, .22, 'sine', .1, .09); },
  no: function () { tono(250, .22, 'triangle', .07); tono(210, .26, 'triangle', .06, .13); },
  pop: function () { var f = 420 + Math.random() * 260; tono(f, .12, 'sine', .1); tono(f * 1.5, .1, 'sine', .06, .05); },
  up: function () { [523, 659, 784, 1047].forEach(function (f, i) { tono(f, .25, 'sine', .1, i * .11); }); },
  chest: function () { [392, 523, 659, 784, 988].forEach(function (f, i) { tono(f, .2, 'triangle', .08, i * .07); }); },
  hit: function () { tono(140, .14, 'square', .06); tono(90, .2, 'square', .05, .05); },
  win: function () { [523, 523, 659, 784, 659, 784, 1047].forEach(function (f, i) { tono(f, .2, 'triangle', .09, i * .12); }); },
  tick: function () { tono(520, .06, 'sine', .06); },
  nana: function () { [392, 330, 294, 330, 392, 392, 392].forEach(function (f, i) { tono(f, .5, 'sine', .05, i * .45); }); },
  ronca: function () { tono(150, .55, 'triangle', .05); tono(115, .75, 'triangle', .05, .65); },
  crack: function () { tono(180, .05, 'square', .06); tono(300, .05, 'square', .05, .04); tono(120, .08, 'square', .05, .08); }
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
