/* DIBUJO: mascotas, su forma inicial, cuarto, jefe e iconos (todo vectorial, sin imágenes). */
function shade(hex,f){ var h=hex.replace('#',''); var r=parseInt(h.substr(0,2),16),g=parseInt(h.substr(2,2),16),b=parseInt(h.substr(4,2),16); function m(x){return Math.round(x*(1-f)+30*f);} return 'rgb('+m(r)+','+m(g)+','+m(b)+')'; }
function ojosMarkup(id){
  if(id==='redondos') return '<g class="blink"><ellipse cx="82" cy="102" rx="8" ry="10" fill="#232a40"/><ellipse cx="118" cy="102" rx="8" ry="10" fill="#232a40"/><circle cx="85" cy="98" r="3" fill="#fff"/><circle cx="121" cy="98" r="3" fill="#fff"/></g>';
  if(id==='felices') return '<path d="M72 106 Q82 94 92 106" fill="none" stroke="#232a40" stroke-width="5" stroke-linecap="round"/><path d="M108 106 Q118 94 128 106" fill="none" stroke="#232a40" stroke-width="5" stroke-linecap="round"/>';
  if(id==='dormilones') return '<path d="M72 102 Q82 112 92 102" fill="none" stroke="#232a40" stroke-width="5" stroke-linecap="round"/><path d="M108 102 Q118 112 128 102" fill="none" stroke="#232a40" stroke-width="5" stroke-linecap="round"/>';
  return '<path d="M82 90 L85 99 L94 99 L87 105 L90 114 L82 108 L74 114 L77 105 L70 99 L79 99 Z" fill="#ffd84d" stroke="#232a40" stroke-width="2.5" stroke-linejoin="round"/><path d="M118 90 L121 99 L130 99 L123 105 L126 114 L118 108 L110 114 L113 105 L106 99 L115 99 Z" fill="#ffd84d" stroke="#232a40" stroke-width="2.5" stroke-linejoin="round"/>';
}
var LASH='<g stroke="#232a40" stroke-width="3.5" stroke-linecap="round"><path d="M72 96 L65 92"/><path d="M74 91 L69 85"/><path d="M128 96 L135 92"/><path d="M126 91 L131 85"/></g>';
var BROW='<g fill="none" stroke="#232a40" stroke-width="5" stroke-linecap="round"><path d="M70 87 Q81 80 92 84"/><path d="M108 84 Q119 80 130 87"/></g>';
var FLASK='M86 44 L86 86 C 86 100, 40 132, 40 160 Q 40 174, 56 174 L144 174 Q 160 174, 160 160 C 160 132, 114 100, 114 86 L114 44 Z';
var TUBE='M64 56 L64 150 Q64 174 88 174 L112 174 Q136 174 136 150 L136 56 Z';
function cfg(type,st){
  if(type==='matraz' && st===1) return {fdy:30,ch:[74,126],head:'translate(100,50) scale(.62) translate(-100,-54)',neck:'translate(100,100) scale(.45) translate(-100,-150)',bataY:150,collar:false};
  if(type==='matraz') return {fdy:34,ch:[68,132],head:'translate(100,40) scale(.58) translate(-100,-54)',neck:'translate(100,84) scale(.45) translate(-100,-150)',bataY:150,collar:false};
  return {fdy:0,ch:[68,132],head:'',neck:'',bataY:128,collar:true};
}
function ringMk(rx,b,dur,delay,col){
  var x0=100-rx, x1=100+rx, y=112;
  var back='M'+x0+' '+y+' C '+x0+' '+(y-b)+', '+x1+' '+(y-b)+', '+x1+' '+y;
  var front='M'+x0+' '+y+' C '+x0+' '+(y+b)+', '+x1+' '+(y+b)+', '+x1+' '+y;
  var full=back+' C '+x1+' '+(y+b)+', '+x0+' '+(y+b)+', '+x0+' '+y+' Z';
  function el(){ return '<circle r="8" fill="'+col+'" stroke="#fff" stroke-width="3"><animateMotion dur="'+dur+'s" begin="-'+delay+'s" repeatCount="indefinite" path="'+full+'"/></circle>'; }
  return {
    back:'<path d="'+back+'" fill="none" stroke="rgba(255,255,255,.9)" stroke-width="5" stroke-linecap="round" opacity=".6"/>'+el(),
    front:'<path d="'+front+'" fill="none" stroke="#fff" stroke-width="5" stroke-linecap="round"/><g clip-path="url(#clipFront)">'+el()+'</g>'
  };
}
function buildPet(type,st){
  var C=cfg(type,st), back='', body='', front='', clipShape='', extra='';
  var aura = st===3 ? '<circle class="aura" cx="100" cy="112" r="92" fill="url(#gAura)"/>' : '';
  if(type==='atomo'){
    clipShape='<circle cx="100" cy="108" r="54"/>';
    if(st>=2){ var r1=ringMk(86,32,5,0,'#ffd84d'); back+=r1.back; front+=r1.front; }
    if(st>=3){ var r2=ringMk(97,46,8,3,'#ff9f43'); back=r2.back+back; front+=r2.front; }
    body='<circle id="body" cx="100" cy="108" r="54" fill="url(#gBody)"/><ellipse cx="80" cy="82" rx="16" ry="9" fill="#fff" opacity=".35" transform="rotate(-25 80 82)"/>';
  } else if(type==='neurona'){
    clipShape='<circle cx="100" cy="108" r="54"/>';
    /* dendritas: ramas que salen de la parte superior derecha del cuerpo */
    var dA='<path d="M123 62 C 128 50, 128 42, 124 34"/><path d="M124 34 L115 25"/><path d="M124 34 L134 27"/>';
    var dB='<path d="M140 78 C 152 72, 160 66, 164 56"/><path d="M164 56 L162 44"/><path d="M164 56 L175 52"/>';
    var dC='<path d="M150 96 C 162 96, 170 92, 176 84"/><path d="M176 84 L186 80"/><path d="M176 84 L182 94"/>';
    var dE='<path d="M124 40 L128 31"/><path d="M164 60 L172 66"/>';
    var den = st===1 ? dA+dB : st===2 ? dA+dB+dC : dA+dB+dC+dE;
    /* axón: sale por el costado izquierdo, con vainas de mielina y botones terminales */
    var fin = st===1 ? 6 : st===2 ? -4 : -12;
    var ax = '<path d="M54 93 L38 103 L38 109 L54 121 Z" style="fill:var(--bc)"/>'+
             '<path d="M40 106 L'+fin+' 106" style="stroke:var(--bc)" fill="none" stroke-width="7" stroke-linecap="round"/>';
    if(st===1){ ax+='<circle cx="'+fin+'" cy="106" r="6" style="fill:var(--bc)"/>'; }
    else {
      ax+='<g fill="#fff8e1" stroke="#e8c97a" stroke-width="2"><rect x="25" y="96" width="11" height="20" rx="5.5"/><rect x="11" y="96" width="11" height="20" rx="5.5"/>'+(st===3?'<rect x="-3" y="96" width="11" height="20" rx="5.5"/>':'')+'</g>'+
          '<path d="M'+fin+' 106 L'+(fin-8)+' 98 M'+fin+' 106 L'+(fin-8)+' 114" style="stroke:var(--bc)" fill="none" stroke-width="5" stroke-linecap="round"/>'+
          '<g style="fill:var(--bc)"><circle cx="'+(fin-10)+'" cy="97" r="5.5"/><circle cx="'+(fin-10)+'" cy="115" r="5.5"/></g>';
    }
    back='<g transform="translate(200,0) scale(-1,1)"><g style="stroke:var(--bc);fill:none" stroke-width="6" stroke-linecap="round" stroke-linejoin="round">'+den+'</g>'+ax+'</g>';   /* espejo: axón a la derecha, dendritas arriba a la izquierda */
    body='<circle id="body" cx="100" cy="108" r="54" fill="url(#gBody)"/><ellipse cx="80" cy="82" rx="16" ry="9" fill="#fff" opacity=".35" transform="rotate(-25 80 82)"/>';
  } else {
    var shape = st===1 ? TUBE : FLASK;
    clipShape='<path d="'+shape+'"/>';
    var liq = st===1 ? 'M56 132 Q78 123 100 132 T144 132 L144 184 L56 184 Z' : 'M30 120 Q55 111 80 120 T130 120 T170 120 L170 184 L30 184 Z';
    var rim = st===1 ? '<rect x="58" y="49" width="84" height="11" rx="5.5" fill="#e7edfb" stroke="#b6c4e6" stroke-width="3"/>' : '<rect x="78" y="35" width="44" height="11" rx="5.5" fill="#e7edfb" stroke="#b6c4e6" stroke-width="3"/>';
    var hl = st===1 ? '<path d="M72 80 L72 140" fill="none" stroke="#fff" stroke-width="5" stroke-linecap="round" opacity=".8"/>' : '<path d="M50 150 C 52 138, 60 128, 68 122" fill="none" stroke="#fff" stroke-width="5" stroke-linecap="round" opacity=".8"/>';
    var bub='<g fill="#fff" opacity=".6"><circle class="rise" cx="74" cy="158" r="4"/><circle class="rise" style="animation-delay:-1s" cx="128" cy="150" r="3"/><circle class="rise" style="animation-delay:-2s" cx="104" cy="140" r="5"/>'+(st===3?'<circle class="rise" style="animation-delay:-.5s" cx="92" cy="165" r="3.5"/><circle class="rise" style="animation-delay:-1.6s" cx="118" cy="162" r="4"/>':'')+'</g>';
    body='<path d="'+shape+'" fill="rgba(255,255,255,.62)" stroke="#b6c4e6" stroke-width="4" stroke-linejoin="round"/><g clip-path="url(#clipB)"><path id="body" d="'+liq+'" fill="url(#gBody)"/>'+bub+'</g>'+hl+rim;
    if(st===3) extra='<g fill="none" stroke="#fff" stroke-width="4" stroke-linecap="round" opacity=".85"><path class="rise" d="M92 28 C 84 20, 100 12, 92 4"/><path class="rise" style="animation-delay:-1s" d="M108 30 C 100 22, 116 14, 108 6"/></g>';
  }
  var defs='<defs><radialGradient id="gBody" cx="38%" cy="30%" r="80%"><stop offset="0" id="gb1" stop-color="#9db3ff"/><stop offset="1" id="gb2" stop-color="#6c8cff"/></radialGradient>'+
    '<linearGradient id="gGalaxy" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#3b2a8f"/><stop offset=".55" stop-color="#8b4fd8"/><stop offset="1" stop-color="#ff7ac3"/></linearGradient>'+
    '<radialGradient id="gAura"><stop offset="0" stop-color="#ffe58a" stop-opacity=".9"/><stop offset=".6" stop-color="#ffe58a" stop-opacity=".25"/><stop offset="1" stop-color="#ffe58a" stop-opacity="0"/></radialGradient>'+
    '<clipPath id="clipFront"><rect x="0" y="112" width="200" height="80"/></clipPath><clipPath id="clipB">'+clipShape+'</clipPath></defs>';
  var bata='<path d="M30 '+C.bataY+' Q100 '+(C.bataY-9)+' 170 '+C.bataY+' L180 200 L20 200 Z" fill="#fff"/><path d="M100 '+(C.bataY-2)+' L100 200" stroke="#d6dcea" stroke-width="2"/>'+
    (C.collar?'<path d="M82 124 L100 146 L92 126 Z M118 124 L100 146 L108 126 Z" fill="#eef2fa" stroke="#d6dcea" stroke-width="1.5"/>':'')+
    '<rect x="116" y="'+(C.bataY+22)+'" width="18" height="12" rx="3" fill="none" stroke="#d6dcea" stroke-width="2"/>';
  var head='<g id="gMonito" visibility="hidden" transform="rotate(-14 128 62)"><path d="M128 62 L105 49 Q100 62 105 75 Z M128 62 L151 49 Q156 62 151 75 Z" fill="#ff6fa5" stroke="#e03c80" stroke-width="2.5" stroke-linejoin="round"/><circle cx="128" cy="62" r="7" fill="#e03c80"/></g>'+
   '<g id="gAud" visibility="hidden"><path d="M46 104 C 40 40, 160 40, 154 104" fill="none" stroke="#2f3858" stroke-width="7" stroke-linecap="round"/><rect x="36" y="94" width="18" height="30" rx="8" fill="#ff6b6b"/><rect x="146" y="94" width="18" height="30" rx="8" fill="#ff6b6b"/></g>'+
   '<g id="gGorro" visibility="hidden"><path d="M72 62 L100 48 L128 62 L128 72 Q100 82 72 72 Z" fill="#232a40"/><path d="M44 56 L100 30 L156 56 L100 80 Z" fill="#2f3858"/><path d="M100 56 L146 62 L146 82" fill="none" stroke="#ffd84d" stroke-width="3" stroke-linecap="round"/><circle cx="146" cy="85" r="5" fill="#ffd84d"/></g>'+
   '<g id="gCorona" visibility="hidden"><path d="M70 62 L76 34 L90 50 L100 28 L110 50 L124 34 L130 62 Z" fill="#ffc933" stroke="#e6a400" stroke-width="3" stroke-linejoin="round"/><circle cx="100" cy="46" r="4" fill="#ff5d8f"/></g>'+
   '<g id="gAureola" visibility="hidden"><ellipse cx="100" cy="46" rx="30" ry="8" fill="none" stroke="#ffd84d" stroke-width="6"/></g>';
  return defs+'<ellipse cx="100" cy="178" rx="52" ry="8" fill="rgba(30,40,80,.14)"/>'+aura+
   '<g id="gScale"><g id="gReact"><g class="bob">'+(type==='neurona'?'<g transform="translate(-8,0)">':'')+back+body+
   '<g clip-path="url(#clipB)"><g id="gBata" visibility="hidden">'+bata+'</g></g>'+
   '<g transform="translate(0,'+C.fdy+')"><ellipse cx="'+C.ch[0]+'" cy="118" rx="9" ry="6" fill="#ff8fb3" opacity=".6"/><ellipse cx="'+C.ch[1]+'" cy="118" rx="9" ry="6" fill="#ff8fb3" opacity=".6"/>'+
   '<g id="gEyes"></g><g id="gLash"></g><g id="gBrow"></g><g id="gMouth"></g>'+
   '<g id="gGafas" visibility="hidden"><circle cx="80" cy="102" r="15" fill="rgba(255,255,255,.28)" stroke="#232a40" stroke-width="4"/><circle cx="120" cy="102" r="15" fill="rgba(255,255,255,.28)" stroke="#232a40" stroke-width="4"/><path d="M95 102 H105" stroke="#232a40" stroke-width="4" stroke-linecap="round"/></g></g>'+
   front+'<g transform="'+C.neck+'"><g id="gMono" visibility="hidden"><path d="M100 150 L80 140 L80 162 Z M100 150 L120 140 L120 162 Z" fill="#2f3858"/><circle cx="100" cy="150" r="6" fill="#1d2440"/></g></g>'+
   '<g transform="'+C.head+'">'+head+'</g>'+extra+(type==='neurona'?'</g>':'')+'</g></g></g>'+
   '<g id="gSpark" visibility="hidden" fill="#ffd84d"><path class="twinkle" d="M24 40 l4 10 10 4 -10 4 -4 10 -4 -10 -10 -4 10 -4z"/><path class="twinkle" style="animation-delay:-.6s" d="M170 30 l3 8 8 3 -8 3 -3 8 -3 -8 -8 -3 8 -3z"/><path class="twinkle" style="animation-delay:-1.2s" d="M176 120 l3 8 8 3 -8 3 -3 8 -3 -8 -8 -3 8 -3z"/></g>';
}
/* FORMA INICIAL (etapa 0) de cada mascota. Cada una empieza como algo real de su materia, no como un huevo:
   - Física: un átomo de hidrógeno (1 protón y 1 electrón). Al ganar energía, el electrón salta a órbitas mayores (modelo de Bohr).
   - Biología: una célula madre neural, de las que dan origen a las neuronas. Le brotan dendritas y un axón.
   - Química: un matraz con una solución y un cristal semilla, que va creciendo.
   p = avance de 0 a 1 hacia la siguiente etapa. Los id y las clases (egg, eggidle, gReact) se conservan porque el CSS y las animaciones los usan. */
function origenNivel(p){ return p>=.6 ? 3 : p>=.3 ? 2 : 1; }   /* cada acierto de los primeros cambia la imagen: 3 aciertos y se transforma */
function origenMk(type,p){
  var lv = origenNivel(p), g='';
  var sombra='<ellipse cx="100" cy="178" rx="46" ry="8" fill="rgba(30,40,80,.14)"/>';
  if(type==='atomo'){
    var R=[0,28,50,72], rc=R[lv], orb='';
    for(var i=1;i<=3;i++) orb+='<circle cx="100" cy="108" r="'+R[i]+'" fill="none" stroke="#9fb0e6" stroke-width="'+(i===lv?3:2)+'"'+(i===lv?'':' stroke-dasharray="5 7"')+' opacity="'+(i===lv?.95:.5)+'"/>';
    g=orb+'<circle cx="100" cy="108" r="'+(lv===1?24:20)+'" fill="#ffd9d9" opacity=".55"/>'+
      '<circle cx="100" cy="108" r="15" fill="#e5484d" stroke="#fff" stroke-width="3"/><ellipse cx="95" cy="102" rx="5" ry="3" fill="#fff" opacity=".5" transform="rotate(-30 95 102)"/>'+
      '<path d="M100 101 V115 M93 108 H107" stroke="#fff" stroke-width="3.5" stroke-linecap="round" fill="none"/>'+
      '<g class="orb" style="animation-duration:'+(2.2+lv*1.3)+'s"><circle cx="'+(100+rc)+'" cy="108" r="8" style="fill:var(--bc)" stroke="#fff" stroke-width="3"/></g>';
  } else if(type==='neurona'){
    var tr='';
    if(lv===2) tr='<path d="M68 80 L60 72"/><path d="M146 112 L158 112"/><circle cx="59" cy="71" r="3.5" style="fill:var(--bc)"/><circle cx="159" cy="112" r="3.5" style="fill:var(--bc)"/>';
    if(lv===3) tr='<path d="M68 80 C 62 74, 57 66, 55 56"/><path d="M55 56 L46 50"/><path d="M55 56 L59 45"/><path d="M146 112 L172 112"/><circle cx="176" cy="112" r="6" style="fill:var(--bc)"/>';
    g='<defs><radialGradient id="gOrigN" cx="38%" cy="30%" r="80%"><stop offset="0" stop-color="#ffffff"/><stop offset="1" stop-color="#e3f4ea"/></radialGradient></defs>'+
      '<g style="stroke:var(--bc)" fill="none" stroke-width="6" stroke-linecap="round" stroke-linejoin="round">'+tr+'</g>'+
      '<circle cx="100" cy="112" r="46" fill="url(#gOrigN)" stroke="#bfe0cf" stroke-width="4"/><circle cx="100" cy="112" r="46" style="fill:var(--bc)" opacity=".16"/>'+
      '<circle cx="97" cy="116" r="20" fill="#fff" opacity=".92" style="stroke:var(--bc)" stroke-width="3"/><circle cx="102" cy="112" r="6.5" style="fill:var(--bc)"/>'+
      '<g style="fill:var(--bc)" opacity=".55"><circle cx="126" cy="136" r="3.5"/><circle cx="74" cy="142" r="3"/><circle cx="124" cy="92" r="3"/><circle cx="82" cy="92" r="2.5"/></g>'+
      '<ellipse cx="80" cy="90" rx="12" ry="6" fill="#fff" opacity=".5" transform="rotate(-30 80 90)"/>';
  } else {
    var cr=function(cx,w,h,rot,fill){ return '<g transform="rotate('+rot+' '+cx+' 170)"><path d="M'+(cx-w/2)+' 170 L'+(cx-w/2)+' '+(170-h*.7)+' L'+cx+' '+(170-h)+' L'+(cx+w/2)+' '+(170-h*.7)+' L'+(cx+w/2)+' 170 Z" fill="'+fill+'" stroke="#6f93c9" stroke-width="2.5" stroke-linejoin="round"/><path d="M'+cx+' '+(170-h)+' L'+cx+' 170" stroke="#6f93c9" stroke-width="1.8" opacity=".7"/></g>'; };
    var cs = lv===1 ? cr(100,14,24,0,'#eaf6ff') : lv===2 ? cr(88,12,22,-22,'#d8ecff')+cr(100,18,38,0,'#eaf6ff') : cr(84,14,32,-24,'#d8ecff')+cr(116,14,30,22,'#d8ecff')+cr(100,22,50,0,'#eaf6ff');
    g='<defs><clipPath id="clipOrigQ"><path d="'+FLASK+'"/></clipPath></defs>'+
      '<g transform="translate(100,176) scale(.9) translate(-100,-176)">'+
      '<path d="'+FLASK+'" fill="rgba(255,255,255,.62)" stroke="#b6c4e6" stroke-width="4" stroke-linejoin="round"/>'+
      '<g clip-path="url(#clipOrigQ)"><path d="M30 128 Q55 120 80 128 T130 128 T170 128 L170 184 L30 184 Z" style="fill:var(--bc)" opacity=".5"/>'+cs+
      '<g fill="#fff" opacity=".6"><circle cx="66" cy="152" r="3.5"/><circle cx="136" cy="146" r="3"/></g></g>'+
      '<path d="M50 150 C 52 138, 60 128, 68 122" fill="none" stroke="#fff" stroke-width="5" stroke-linecap="round" opacity=".8"/>'+
      '<rect x="78" y="35" width="44" height="11" rx="5.5" fill="#e7edfb" stroke="#b6c4e6" stroke-width="3"/></g>';
  }
  return sombra+'<g id="gReact"><g class="eggidle"><g id="egg">'+g+'</g></g></g>';
}


/* ================= ICONOS ================= */
function chestSVG(open){
  return '<svg viewBox="0 0 60 60" aria-hidden="true"'+(open?' class="open"':'')+'><circle class="glow" cx="30" cy="30" r="22" fill="#ffe58a" opacity=".0"/>'+
   '<rect x="10" y="30" width="40" height="24" rx="4" fill="#b9763f" stroke="#7a4a22" stroke-width="2"/><rect x="26" y="30" width="8" height="24" fill="#e8b923"/>'+
   '<g class="lid" style="transform-origin:10px 32px"><path d="M8 32 Q8 14 30 14 Q52 14 52 32 Z" fill="#d28a4c" stroke="#7a4a22" stroke-width="2"/><rect x="26" y="15" width="8" height="17" fill="#e8b923"/></g>'+
   '<rect x="27" y="36" width="6" height="8" rx="2" fill="#7a4a22"/></svg>';
}
function decorMk(id){
  var m={
   pizarra:'<rect x="-22" y="-16" width="44" height="32" rx="3" fill="#2d4a3e" stroke="#c8a165" stroke-width="3"/><ellipse cx="-6" cy="0" rx="11" ry="4.5" fill="none" stroke="#fff" stroke-width="1.6"/><circle cx="-6" cy="0" r="2.6" fill="#fff"/><path d="M7 -6 h10 M7 0 h13 M7 6 h8" stroke="#fff" stroke-width="1.6" stroke-linecap="round"/>',
   reloj:'<circle r="17" fill="#fff" stroke="#2f3858" stroke-width="3"/><path d="M0 -10 V0 L7 4" fill="none" stroke="#2f3858" stroke-width="2.4" stroke-linecap="round"/><ellipse rx="22" ry="7" fill="none" stroke="#ff9f43" stroke-width="1.8" transform="rotate(-25)"/><circle cx="19" cy="-9" r="2.6" fill="#ff9f43"/>',
   microscopio:'<rect x="-16" y="12" width="32" height="6" rx="3" fill="#2f3858"/><path d="M8 12 C 22 8, 22 -14, 6 -18" fill="none" stroke="#6f7fa6" stroke-width="5" stroke-linecap="round"/><rect x="-10" y="-26" width="9" height="26" rx="3" transform="rotate(-18 -6 -13)" fill="#8a9bc2"/><rect x="-12" y="4" width="20" height="3" rx="1.5" fill="#2f3858"/>',
   planta:'<path d="M-11 4 L11 4 L8 20 L-8 20 Z" fill="#e07a5f"/><path d="M0 4 C -4 -8, -14 -10, -16 -20 C -6 -18, 0 -10, 0 4 Z" fill="#3fbf7f"/><path d="M0 4 C 4 -10, 14 -12, 16 -22 C 6 -20, 0 -12, 0 4 Z" fill="#2fa56c"/><path d="M0 4 C -1 -10, 1 -16, 0 -26" stroke="#3fbf7f" stroke-width="4" fill="none" stroke-linecap="round"/>',
   planeta:'<circle r="13" fill="#ff9f43"/><path d="M-12 -4 Q0 -8 12 -4" fill="none" stroke="#ffc78a" stroke-width="3"/><ellipse rx="22" ry="6" fill="none" stroke="#ffd8a8" stroke-width="3" transform="rotate(-20)"/><path d="M-22 4 A22 6 0 0 0 4 6" fill="none" stroke="#ffd8a8" stroke-width="0"/>',
   cohete:'<path d="M0 -24 C 11 -12, 11 8, 7 16 L-7 16 C -11 8, -11 -12, 0 -24 Z" fill="#fff" stroke="#c7cfe4" stroke-width="2"/><circle cy="-6" r="5" fill="#5aa9ff" stroke="#c7cfe4" stroke-width="1.5"/><path d="M-7 8 L-16 18 L-7 16 Z M7 8 L16 18 L7 16 Z" fill="#ff6b6b"/><path d="M-4 18 Q0 28 4 18 Z" fill="#ffb830"/>',
   telescopio:'<path d="M0 6 L-14 22 M0 6 L14 22 M0 6 L0 22" stroke="#7a5a3a" stroke-width="3" stroke-linecap="round"/><rect x="-22" y="-14" width="40" height="11" rx="4" transform="rotate(-30 0 0)" fill="#4f6df5"/><rect x="-26" y="-16" width="9" height="15" rx="2" transform="rotate(-30 0 0)" fill="#2f3858"/><circle r="4" fill="#2f3858"/>',
   trofeo:'<path d="M-12 -18 H12 V-6 C 12 4, 6 8, 0 8 C -6 8, -12 4, -12 -6 Z" fill="#ffc933" stroke="#e6a400" stroke-width="2"/><path d="M-12 -14 C -22 -14, -20 -2, -11 -2 M12 -14 C 22 -14, 20 -2, 11 -2" fill="none" stroke="#e6a400" stroke-width="2.4"/><rect x="-3" y="8" width="6" height="8" fill="#e6a400"/><rect x="-9" y="16" width="18" height="5" rx="2" fill="#7a5a3a"/>'
  };
  return m[id]||'';
}
function itemIcono(k,id){
  if(k==='ropa') return iconoRopa(id);
  if(k==='pared'){ var f=PAREDES.filter(function(x){return x.id===id;})[0]; return '<span class="sw" style="border-radius:10px;width:46px;height:46px;box-shadow:0 0 0 2px #c9d4ea;background:linear-gradient(180deg,'+f.a+','+f.b+')"></span>'; }
  return '<svg class="dec" viewBox="-28 -30 56 56" aria-hidden="true">'+decorMk(id)+'</svg>';
}
function iconoOjos(id){
  var m={redondos:'<ellipse cx="12" cy="20" rx="4" ry="5.5" fill="#232a40"/><ellipse cx="28" cy="20" rx="4" ry="5.5" fill="#232a40"/>',
   felices:'<path d="M7 24 Q12 16 17 24" fill="none" stroke="#232a40" stroke-width="3" stroke-linecap="round"/><path d="M23 24 Q28 16 33 24" fill="none" stroke="#232a40" stroke-width="3" stroke-linecap="round"/>',
   dormilones:'<path d="M7 18 Q12 24 17 18" fill="none" stroke="#232a40" stroke-width="3" stroke-linecap="round"/><path d="M23 18 Q28 24 33 18" fill="none" stroke="#232a40" stroke-width="3" stroke-linecap="round"/>',
   estrellas:'<path d="M12 11 L14 18 L21 18 L15.5 22 L17.5 29 L12 25 L6.5 29 L8.5 22 L3 18 L10 18 Z" fill="#ffd84d" stroke="#232a40" stroke-width="1.6"/><path d="M29 11 L31 18 L38 18 L32.5 22 L34.5 29 L29 25 L23.5 29 L25.5 22 L20 18 L27 18 Z" fill="#ffd84d" stroke="#232a40" stroke-width="1.6"/>'};
  return '<svg viewBox="0 0 40 40" aria-hidden="true">'+m[id]+'</svg>';
}
function iconoRopa(id){
  var m={gafas:'<circle cx="12" cy="20" r="8" fill="none" stroke="#232a40" stroke-width="3"/><circle cx="28" cy="20" r="8" fill="none" stroke="#232a40" stroke-width="3"/>',
   monito:'<path d="M20 20 L7 12 Q4 20 7 28 Z M20 20 L33 12 Q36 20 33 28 Z" fill="#ff6fa5" stroke="#e03c80" stroke-width="2" stroke-linejoin="round"/><circle cx="20" cy="20" r="4.5" fill="#e03c80"/>',
   mono:'<path d="M20 22 L8 14 L8 30 Z M20 22 L32 14 L32 30 Z" fill="#2f3858"/><circle cx="20" cy="22" r="4" fill="#1d2440"/>',
   gorro:'<path d="M4 16 L20 8 L36 16 L20 24 Z" fill="#2f3858"/><path d="M12 21 V28 Q20 32 28 28 V21" fill="#232a40"/>',
   bata:'<path d="M8 10 L20 18 L32 10 L34 34 L6 34 Z" fill="#e9eefa" stroke="#aab6d3" stroke-width="2"/>',
   audifonos:'<path d="M7 24 C 5 6, 35 6, 33 24" fill="none" stroke="#2f3858" stroke-width="3.5" stroke-linecap="round"/><rect x="3" y="20" width="8" height="14" rx="4" fill="#ff6b6b"/><rect x="29" y="20" width="8" height="14" rx="4" fill="#ff6b6b"/>',
   corona:'<path d="M6 28 L8 12 L15 20 L20 9 L25 20 L32 12 L34 28 Z" fill="#ffc933" stroke="#e6a400" stroke-width="2" stroke-linejoin="round"/>',
   aureola:'<ellipse cx="20" cy="20" rx="14" ry="6" fill="none" stroke="#ffd84d" stroke-width="4"/>',
   nada:'<circle cx="20" cy="20" r="12" fill="none" stroke="#9aa5bb" stroke-width="3"/><path d="M11 29 L29 11" stroke="#9aa5bb" stroke-width="3"/>'};
  return '<svg viewBox="0 0 40 40" aria-hidden="true">'+m[id]+'</svg>';
}
function jefeMini(){ return '<svg viewBox="0 0 150 110" aria-hidden="true">'+bossMk('n')+'</svg>'; }
function bossMk(est){
  var sp=''; for(var a=0;a<8;a++){ var an=a*Math.PI/4+Math.PI/8, x1=75+36*Math.cos(an), y1=58+36*Math.sin(an), x2=75+53*Math.cos(an), y2=58+53*Math.sin(an), nx=-Math.sin(an)*8, ny=Math.cos(an)*8;
    sp+='<path d="M'+(x1+nx)+' '+(y1+ny)+' L'+x2+' '+y2+' L'+(x1-nx)+' '+(y1-ny)+' Z" fill="#5a2f99"/>'; }
  var eyes = est==='d' ? '<path d="M52 50 l12 12 M64 50 l-12 12 M86 50 l12 12 M98 50 l-12 12" stroke="#fff" stroke-width="4" stroke-linecap="round"/>'
    : '<circle cx="58" cy="54" r="9" fill="#fff"/><circle cx="92" cy="54" r="9" fill="#fff"/><circle cx="'+(est==='h'?60:60)+'" cy="55" r="4.5" fill="#1d1830"/><circle cx="'+(est==='h'?90:90)+'" cy="55" r="4.5" fill="#1d1830"/><path d="M46 42 L68 48 M104 42 L82 48" stroke="#1d1830" stroke-width="5" stroke-linecap="round"/>';
  var mouth = est==='h' ? '<ellipse cx="75" cy="76" rx="8" ry="6" fill="#1d1830"/>' : est==='d' ? '<path d="M62 78 Q75 72 88 78" fill="none" stroke="#fff" stroke-width="4" stroke-linecap="round"/>' : '<path d="M58 74 L65 80 L72 73 L79 80 L86 73 L92 78" fill="#fff" stroke="#1d1830" stroke-width="2.5" stroke-linejoin="round"/>';
  return '<ellipse cx="75" cy="104" rx="40" ry="6" fill="rgba(60,30,100,.15)"/>'+sp+'<circle cx="75" cy="58" r="38" fill="#7a49c7"/><ellipse cx="62" cy="40" rx="12" ry="6" fill="#fff" opacity=".25" transform="rotate(-25 62 40)"/>'+eyes+mouth+
    '<ellipse cx="75" cy="58" rx="62" ry="16" fill="none" stroke="#e5484d" stroke-width="2.5" stroke-dasharray="3 7" opacity=".7"/>';
}

/* ================= CUARTO ================= */
var SLOTS = {A:[-14,58],B:[-12,146],C:[214,58],D:[212,146]};
function paredDe(id){ return PAREDES.filter(function(x){return x.id===id;})[0]||PAREDES[0]; }
function roomMk(s){
  var w=paredDe(s.pared), h='<defs><linearGradient id="gWall" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="'+w.a+'"/><stop offset="1" stop-color="'+w.b+'"/></linearGradient></defs>'+
    '<rect x="-300" y="-40" width="800" height="202" fill="url(#gWall)"/><g fill="'+w.d+'" opacity=".7">';
  for(var i=0;i<14;i++) for(var j=0;j<6;j++) h+='<circle cx="'+(-100+i*32+(j%2)*16)+'" cy="'+(6+j*28)+'" r="2.4"/>';
  h+='</g><rect x="-300" y="150" width="800" height="12" fill="#c9d6f3"/><rect x="-300" y="162" width="800" height="120" fill="#e4d6c0"/>'+
     '<path d="M-300 178 H500 M-300 190 H500" stroke="#d3c3aa" stroke-width="1.5"/><ellipse cx="100" cy="182" rx="78" ry="12" fill="#ff9fb8" opacity=".75"/><ellipse cx="100" cy="182" rx="62" ry="8" fill="#ffc0d2" opacity=".8"/>';
  ['A','B','C','D'].forEach(function(k){
    var id=s.decor[k]; if(!id) return;
    var it=DECOR.filter(function(d){return d.id===id;})[0];
    if(it && it.req && it.req.k==='etapa' && (s.vis||0)<it.req.v) return;   /* los objetos de etapa aparecen con la ceremonia */
    var p=SLOTS[k]; h+='<g transform="translate('+p[0]+','+p[1]+')">'+decorMk(id)+'</g>';
  });
  return h;
}

function glifo(id){
  if(id==='atomo') return '<svg viewBox="0 0 64 64"><ellipse cx="32" cy="34" rx="28" ry="9" fill="none" stroke="#9db3ff" stroke-width="3"/><circle cx="32" cy="34" r="16" fill="#6c8cff"/><circle cx="26" cy="31" r="2.6" fill="#232a40"/><circle cx="38" cy="31" r="2.6" fill="#232a40"/><path d="M27 38 Q32 43 37 38" fill="none" stroke="#232a40" stroke-width="2.4" stroke-linecap="round"/><circle cx="59" cy="34" r="4" fill="#ffd84d"/></svg>';
  if(id==='neurona') return '<svg viewBox="0 0 64 64"><g transform="translate(64,0) scale(-1,1)"><g stroke="#37c9a0" stroke-width="3" stroke-linecap="round" fill="none"><path d="M42 22 C46 16 48 12 48 7 M48 7 L44 4 M48 7 L53 6"/><path d="M48 28 C54 28 58 26 60 22"/><path d="M18 32 L4 32 M4 32 L1 28 M4 32 L1 36"/></g><circle cx="34" cy="34" r="16" fill="#37c9a0"/><rect x="9" y="28" width="5" height="8" rx="2.5" fill="#fff8e1" stroke="#e8c97a" stroke-width="1.2"/><circle cx="28" cy="31" r="2.6" fill="#232a40"/><circle cx="40" cy="31" r="2.6" fill="#232a40"/><path d="M29 38 Q34 43 39 38" fill="none" stroke="#232a40" stroke-width="2.4" stroke-linecap="round"/></g></svg>';
  return '<svg viewBox="0 0 64 64"><path d="M27 8 H37 V24 C37 30 54 40 54 52 Q54 58 48 58 H16 Q10 58 10 52 C10 40 27 30 27 24 Z" fill="#fff" stroke="#b6c4e6" stroke-width="3"/><path d="M13 44 Q22 41 32 44 T51 44 V52 Q51 56 47 56 H17 Q13 56 13 52 Z" fill="#9a6cff"/><circle cx="26" cy="49" r="2" fill="#232a40"/><circle cx="38" cy="49" r="2" fill="#232a40"/></svg>';
}

/* Sello de ficha: medalla con el número. ganado=false lo dibuja apagado (silueta). */
function selloMk(num, color, ganado) {
  var c = ganado ? color : '#b9c2d6', f = ganado ? '#fff' : '#eef1f7', st = ganado ? '#ffd84d' : '#d3d9e6';
  var rayos = ''; for (var i = 0; i < 12; i++) rayos += '<path d="M50 4 L55 16 L45 16 Z" fill="' + c + '" transform="rotate(' + (i * 30) + ' 50 50)"/>';
  return '<svg viewBox="0 0 100 100" aria-hidden="true" class="sello-svg">' + rayos + '<circle cx="50" cy="50" r="34" fill="' + c + '"/><circle cx="50" cy="50" r="28" fill="' + f + '"/><circle cx="50" cy="50" r="24" fill="none" stroke="' + st + '" stroke-width="3" stroke-dasharray="2 4" stroke-linecap="round"/>' +
    (ganado ? '<text x="50" y="60" text-anchor="middle" font-family="Nunito,system-ui,sans-serif" font-weight="900" font-size="' + (String(num).length > 1 ? 26 : 32) + '" fill="' + c + '">' + num + '</text>'
            : '<text x="50" y="60" text-anchor="middle" font-family="Nunito,system-ui,sans-serif" font-weight="900" font-size="' + (String(num).length > 1 ? 24 : 30) + '" fill="#aab4c8">' + num + '</text>') + '</svg>';
}

/* ---------- Dibujos para las preguntas (apoyo visual, DUA) ----------
   En cada tema de una ficha puedes poner  icono: 'nombre'  y sus preguntas mostrarán ese dibujo. Una pregunta puede usar otro con  ic: 'nombre'  (o ic: false para ninguno).
   Nombres disponibles: esfera, panque, hoja_oro, neutron, orbitas, nube, particulas, tiempo, bombilla, atomo, celula, adn, matraz, microscopio, hoja, planeta, gota, iman.
   Son dibujos decorativos: la pregunta siempre se entiende solo con el texto. */
var ICONOS = (function () {
  var B = 'var(--brand)', BS = 'var(--brand-soft)', ROJO = '#ff6b6b', AZ = '#4a67ee', GR = '#aab4c8', ORO = '#ffb830', VD = '#2fbf86', MO = '#9a6cff', TX = '#1d2433';
  function p(n, c, s) { return '<circle cx="' + n[0] + '" cy="' + n[1] + '" r="' + n[2] + '" fill="' + c + '"' + (s ? ' stroke="' + s + '" stroke-width="1.6"' : '') + '/>'; }
  function t(x, y, s, c, sz) { return '<text x="' + x + '" y="' + y + '" text-anchor="middle" font-family="system-ui,sans-serif" font-weight="800" font-size="' + (sz || 11) + '" fill="' + c + '">' + s + '</text>'; }
  var o = {};
  o.esfera = p([32, 32, 22], BS, B) + '<path d="M19 26 A15 15 0 0 1 30 15" fill="none" stroke="#fff" stroke-width="4" stroke-linecap="round"/>';
  o.panque = p([32, 32, 24], '#ffd9e2', ROJO) + [[22, 24], [38, 22], [28, 38], [42, 38], [20, 40], [33, 30]].map(function (c) { return p([c[0], c[1], 3.4], AZ); }).join('');
  o.hoja_oro = '<rect x="4" y="26" width="9" height="12" rx="2" fill="' + GR + '"/><rect x="34" y="8" width="5" height="48" rx="2" fill="' + ORO + '"/>' +
    '<path d="M13 28 H58 M13 32 H58 M13 36 H58" stroke="' + B + '" stroke-width="2" stroke-dasharray="3 3" stroke-linecap="round" fill="none"/>' +
    '<path d="M13 40 H33 L28 52" stroke="' + ROJO + '" stroke-width="2.4" fill="none" stroke-linecap="round" stroke-linejoin="round"/>';
  o.neutron = [[14, 20], [32, 20], [50, 20]].map(function (c) { return p([c[0], c[1], 9], ROJO) + t(c[0], c[1] + 5, '+', '#fff', 15); }).join('') + [[14, 44], [32, 44], [50, 44]].map(function (c) { return p([c[0], c[1], 9], GR, '#8793aa') + t(c[0], c[1] + 4, '0', TX, 12); }).join('');
  o.orbitas = '<circle cx="32" cy="32" r="11" fill="none" stroke="' + GR + '" stroke-dasharray="2 3" stroke-width="1.6"/><circle cx="32" cy="32" r="19" fill="none" stroke="' + GR + '" stroke-dasharray="2 3" stroke-width="1.6"/><circle cx="32" cy="32" r="27" fill="none" stroke="' + GR + '" stroke-dasharray="2 3" stroke-width="1.6"/>' +
    p([32, 32, 5.5], ROJO) + p([43, 32, 3.6], AZ) + p([18.5, 24.5, 3.6], AZ) + p([32, 59, 3.6], AZ);
  o.nube = '<defs><radialGradient id="nb"><stop offset="0" stop-color="#4a67ee" stop-opacity=".55"/><stop offset="1" stop-color="#4a67ee" stop-opacity="0"/></radialGradient></defs><circle cx="32" cy="32" r="30" fill="url(#nb)"/>' +
    [[20, 24], [44, 22], [24, 44], [46, 40], [36, 14], [14, 36], [50, 30], [30, 52]].map(function (c) { return p([c[0], c[1], 1.8], AZ); }).join('') + p([32, 32, 4.5], ROJO);
  o.particulas = p([13, 32, 10.5], ROJO) + t(13, 38, '+', '#fff', 17) + p([32, 32, 10.5], AZ) + t(32, 37.5, '−', '#fff', 17) + p([51, 32, 10.5], GR, '#8793aa') + t(51, 36.5, '0', TX, 13);
  o.tiempo = '<path d="M5 34 H57" stroke="' + B + '" stroke-width="3" stroke-linecap="round"/><path d="M52 29 L58 34 L52 39" fill="none" stroke="' + B + '" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>' +
    p([10, 34, 3.4], ORO) + p([22, 34, 4.2], ROJO) + p([34, 34, 5], AZ) + p([46, 34, 5.8], VD) + '<path d="M10 28 V20 M22 28 V16 M34 28 V20 M46 28 V14" stroke="' + GR + '" stroke-width="2" stroke-linecap="round"/>';
  o.bombilla = '<path d="M32 6 A16 16 0 0 0 22 34 V40 H42 V34 A16 16 0 0 0 32 6 Z" fill="#ffe27a" stroke="' + ORO + '" stroke-width="2.2" stroke-linejoin="round"/><rect x="23" y="42" width="18" height="5" rx="2" fill="' + GR + '"/><rect x="26" y="49" width="12" height="5" rx="2.5" fill="' + GR + '"/><path d="M27 30 L30 22 L34 30 L37 22" fill="none" stroke="' + ORO + '" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>';
  o.atomo = '<g fill="none" stroke="' + B + '" stroke-width="2.4"><ellipse cx="32" cy="32" rx="27" ry="10"/><ellipse cx="32" cy="32" rx="27" ry="10" transform="rotate(60 32 32)"/><ellipse cx="32" cy="32" rx="27" ry="10" transform="rotate(120 32 32)"/></g>' + p([32, 32, 6], ORO);
  o.celula = '<path d="M32 6 C50 6 58 20 56 34 C54 50 42 58 30 57 C14 56 6 44 8 30 C10 16 18 6 32 6 Z" fill="' + BS + '" stroke="' + B + '" stroke-width="2.4"/>' + p([30, 30, 10], MO) + p([30, 30, 4], '#6f45d1') + '<ellipse cx="46" cy="44" rx="5" ry="3" fill="' + VD + '" transform="rotate(-30 46 44)"/><ellipse cx="17" cy="42" rx="5" ry="3" fill="' + VD + '" transform="rotate(25 17 42)"/><ellipse cx="44" cy="18" rx="4" ry="2.6" fill="' + ORO + '"/>';
  o.adn = '<path d="M20 6 C20 22 44 22 44 38 C44 50 20 50 20 58 M44 6 C44 22 20 22 20 38 C20 50 44 50 44 58" fill="none" stroke="' + B + '" stroke-width="3" stroke-linecap="round"/><path d="M26 14 H38 M24 30 H40 M26 46 H38" stroke="' + ORO + '" stroke-width="3" stroke-linecap="round"/>';
  o.matraz = '<path d="M26 6 H38 M28 6 V24 L10 52 A5 5 0 0 0 14 58 H50 A5 5 0 0 0 54 52 L36 24 V6" fill="none" stroke="' + B + '" stroke-width="2.6" stroke-linejoin="round" stroke-linecap="round"/><path d="M17 42 H47 L54 52 A5 5 0 0 1 50 58 H14 A5 5 0 0 1 10 52 Z" fill="' + VD + '" opacity=".75"/>' + p([30, 48, 2.4], '#fff') + p([38, 52, 2], '#fff');
  o.microscopio = '<rect x="12" y="52" width="40" height="6" rx="3" fill="' + GR + '"/><path d="M22 52 A18 18 0 0 0 40 20" fill="none" stroke="' + B + '" stroke-width="4" stroke-linecap="round"/><rect x="26" y="8" width="10" height="22" rx="3" transform="rotate(25 31 19)" fill="' + AZ + '"/><rect x="18" y="44" width="16" height="4" rx="2" fill="' + TX + '"/>';
  o.hoja = '<path d="M10 54 C8 26 28 8 56 8 C58 36 40 56 10 54 Z" fill="' + VD + '"/><path d="M10 54 C24 40 36 28 48 16" fill="none" stroke="#fff" stroke-width="2.4" stroke-linecap="round"/>';
  o.planeta = p([32, 32, 17], ORO) + '<ellipse cx="32" cy="32" rx="29" ry="8" fill="none" stroke="' + MO + '" stroke-width="3.4" transform="rotate(-20 32 32)"/><path d="M22 28 C28 24 36 24 42 28" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round" opacity=".7"/>';
  o.gota = '<path d="M32 6 C32 6 14 28 14 40 A18 18 0 0 0 50 40 C50 28 32 6 32 6 Z" fill="#7ec8ff" stroke="' + AZ + '" stroke-width="2.4"/><path d="M24 40 A8 8 0 0 0 30 49" fill="none" stroke="#fff" stroke-width="3" stroke-linecap="round"/>';
  o.iman = '<path d="M14 8 H26 V34 A6 6 0 0 0 38 34 V8 H50 V34 A18 18 0 0 1 14 34 Z" fill="' + ROJO + '"/><rect x="14" y="8" width="12" height="10" fill="' + GR + '"/><rect x="38" y="8" width="12" height="10" fill="' + GR + '"/>';
  return o;
})();
function iconoMk(k) { return k && ICONOS[k] ? '<svg viewBox="0 0 64 64" class="qimg-svg" aria-hidden="true" focusable="false">' + ICONOS[k] + '</svg>' : ''; }
