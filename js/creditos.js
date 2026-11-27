/* =========================================================
   QUIÉNES HICIMOS CITLALAB
   Pantalla completa de los créditos: dos estrellas del mismo tamaño unidas por una línea. Ninguna nombre va por encima de la otra.
   Se abre al tocar la tarjeta de Ajustes o el pie del Inicio. Los datos se editan en js/catalogo.js (objeto CREDITOS).
   ========================================================= */
var credDesde = 'set';
function pintaCred() {
  var C = window.CREDITOS || {}, eq = (C.equipo || []).filter(function (p) { return p && p.nombre; }).slice(0, 2), host = $('cr-host'), i, fondo = '';
  if (!host) return;
  for (i = 0; i < 26; i++) fondo += '<circle cx="' + ((i * 47 + 13) % 300) + '" cy="' + ((i * 29 + 7) % 150) + '" r="' + (.6 + (i % 3) * .4) + '" fill="#fff" opacity="' + (.35 + (i % 4) * .15) + '"/>';
  var xs = eq.length === 1 ? [150] : [70, 230], estr = '';
  eq.forEach(function (p, k) {
    estr += '<g class="cr-st" data-i="' + k + '" transform="translate(' + xs[k] + ',70)" tabindex="0" role="button" aria-label="' + esc(p.nombre + (p.corto ? ', ' + p.corto : '')) + '"><circle r="26" fill="url(#crGl)"/><path d="M0 -16 L4.6 -4.6 L16 0 L4.6 4.6 L0 16 L-4.6 4.6 L-16 0 L-4.6 -4.6 Z" fill="#fff6c9" stroke="#fff" stroke-width="1"/><circle r="30" fill="transparent"/></g>';
  });
  var cap = eq.map(function (p) { return '<div><small>' + esc(p.corto ? p.corto.charAt(0).toUpperCase() + p.corto.slice(1) : p.rol || '') + '</small><b>' + esc(p.nombre) + '</b></div>'; }).join('');
  host.innerHTML = '<svg viewBox="0 0 300 150" role="group" aria-label="Dos estrellas unidas por una línea"><defs><linearGradient id="crBg" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#141a45"/><stop offset="1" stop-color="#3b3f86"/></linearGradient><radialGradient id="crGl"><stop offset="0" stop-color="#fff6c9" stop-opacity=".9"/><stop offset="1" stop-color="#fff6c9" stop-opacity="0"/></radialGradient></defs><rect width="300" height="150" fill="url(#crBg)"/>' + fondo +
    (eq.length > 1 ? '<line x1="' + (xs[0] + 8) + '" y1="70" x2="' + (xs[1] - 8) + '" y2="70" stroke="#fff6c9" stroke-width="1.6" stroke-dasharray="2 5" stroke-linecap="round" opacity=".9"/>' : '') + estr + '</svg>' +
    '<div class="cr-cap"><h3>' + esc(C.titulo || 'Hecho en el laboratorio por…') + '</h3><div class="cr-dos">' + cap + '</div><p id="cr-fr">Toca una estrella.</p></div>';
  var F = ['De aquí nació la idea de Citlalab.', 'Aquí la idea se volvió una app.'];
  host.querySelectorAll('.cr-st').forEach(function (g) {
    var f = function () { $('cr-fr').textContent = F[+g.dataset.i] || ''; try { tono(PE[2 + (+g.dataset.i) * 2], .5, 'sine', .09, 0, 1); } catch (e) {} };
    g.onclick = f; g.onkeydown = function (e) { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); f(); } };
  });
  $('cr-fam').textContent = $('quien-t').textContent;
}
(function () {
  VISTAS.cred = { rt: 1 };
  var g0 = go; go = function (v) { if (v === 'cred' && vistaActual !== 'cred') credDesde = vistaActual === 'home' ? 'home' : 'set'; g0(v); if (v === 'cred') pintaCred(); };
  $('creditos').onclick = function () { go('cred'); }; $('cr-pie').onclick = function () { go('cred'); };
  $('cr-back').onclick = function () { go(credDesde); };
})();
