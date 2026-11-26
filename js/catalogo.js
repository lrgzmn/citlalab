/* CATÁLOGO: materias, colores, ropa, paredes y decoración del cuarto, y cómo se desbloquean.
   req = condición de progreso:  k = 'racha' | 'dominados' | 'etapa' | 'jefe'   v = valor mínimo
   cofre:true = solo se consigue en el cofre diario. */
var MAT = {
  fisica:   { id: 'fisica',   n: 'Física',   g: '2.º', creature: 'atomo',   brand: '#4a67ee', dk: '#3a54d6', soft: '#eef1ff', line: '#d4dcff', col: 'azul',  names: { f: 'Atomina',  m: 'Atomín',  n: 'Atomi' },
    orig: { n: 'Átomo de hidrógeno', ini: 'Soy un átomo de hidrógeno: un protón y un electrón. Repasa conmigo y mi electrón saltará a órbitas más grandes.', mid: '¡Mi electrón ya saltó a una órbita mayor! Faltan {f} puntos para transformarme.' } },
  biologia: { id: 'biologia', n: 'Biología', g: '1.º', creature: 'neurona', brand: '#167a4c', dk: '#0f6a40', soft: '#e8f7ef', line: '#bfe8d3', col: 'menta', names: { f: 'Neurina',  m: 'Neurín',  n: 'Neuri' },
    orig: { n: 'Célula madre neural', ini: 'Soy una célula madre neural, de las que se convierten en neuronas. Repasa conmigo y me brotarán dendritas y un axón.', mid: '¡Ya me brotan las primeras ramitas! Faltan {f} puntos para convertirme en neurona.' } },
  quimica:  { id: 'quimica',  n: 'Química',  g: '3.º', creature: 'matraz',  brand: '#8a55d6', dk: '#6d3bb8', soft: '#f2eafc', line: '#dcc8f5', col: 'uva',   names: { f: 'Matracina', m: 'Matracín', n: 'Matraci' },
    orig: { n: 'Matraz con cristal semilla', ini: 'Soy un matraz con un cristal semilla en mi solución. Repasa conmigo y mi cristal irá creciendo.', mid: '¡Mi cristal ya creció! Faltan {f} puntos para terminar de transformarme.' } }
};
var ORDEN = ['biologia', 'fisica', 'quimica'];
/* Títulos por sellos ganados (un sello = una ficha dominada). Ajusta los números cuando sepas cuántas fichas tendrá cada materia. */
var TITULOS = [
  { n: 'Aprendiz', v: 0 }, { n: 'Mente curiosa', v: 1 }, { n: 'Mente investigadora', v: 2 }, { n: 'Mente experimental', v: 4 },
  { n: 'Mente científica', v: 6 }, { n: 'Gran mente científica', v: 9 }, { n: 'Leyenda de la ciencia', v: 12 }
];
var ETAPAS = ['Origen', 'Brote', 'Joven', 'Sabiduría'];   // la etapa 0 de cada mascota tiene su propio nombre en MAT[materia].orig
/* PUNTOS Y RITMO (puedes ajustar estos números)
   XP_ETAPA = puntos para transformarse de su forma inicial en Brote (15), ser Joven (300) y llegar a Sabiduría (1200).
   La primera transformación es rápida a propósito (3 aciertos, en el primer minuto) para llamar la atención; después cuesta más.
   Una ruta de hoy completa da unos 50 a 60 puntos, así que Joven llega en aproximadamente una semana de uso diario y Sabiduría en cerca de un mes.
   XP_DIA_MAX = tope de puntos por materia y por día (evita que se "cultive" puntos repitiendo preguntas). */
var XP_ETAPA = [0, 15, 300, 1200];
var XP_DIA_MAX = 150;
var PTS = { acierto: 5, carta: 3, atomo: 10, jefe: 30, cofre: 8, lluvia: 4, lectura: 3, ruta: 10, plato: 2, pmenu: 4, nparte: 3, nsyn: 8, sep: 4, dis: 8, conv: 3, est: 3, tl: 3 };   // puntos por tipo de actividad
var DOMINIO_MIN = 0.8;                  // un tema cuenta como dominado cuando se domina el 80 % de sus preguntas
var HAMBRE_MIN = 35, FELIZ_MIN = 40;    // la mascota nunca baja de estos valores (nunca se enferma ni muere)
var DIAS_GRACIA = 2;                    // la racha aguanta 1 día sin entrar (2 = hoy y ayer o antes de ayer)

var COLORES = [
  { id: 'azul', n: 'Azul', c: '#6c8cff', l: '#9db3ff' }, { id: 'menta', n: 'Menta', c: '#37c9a0', l: '#7fe3c6' },
  { id: 'coral', n: 'Coral', c: '#ff7a6b', l: '#ffab9f' }, { id: 'uva', n: 'Uva', c: '#9a6cff', l: '#c0a2ff' }, { id: 'sol', n: 'Sol', c: '#ffb830', l: '#ffd37a' },
  { id: 'dorado', n: 'Dorado', c: '#e8b923', l: '#fff0a8', req: { k: 'racha', v: 7, t: 'una racha de 7 días' } },
  { id: 'noche', n: 'Noche', c: '#34406b', l: '#5d6bb0', req: { k: 'dominados', v: 4, t: 'dominar 4 temas' } },
  { id: 'galaxia', n: 'Galaxia', c: 'galaxia', l: '', req: { k: 'etapa', v: 3, t: 'llegar a la etapa Sabiduría' } }
];
var OJOS = [
  { id: 'redondos', n: 'Redondos' }, { id: 'felices', n: 'Felices' },
  { id: 'dormilones', n: 'Dormilones', req: { k: 'racha', v: 3, t: 'una racha de 3 días' } },
  { id: 'estrellas', n: 'Estrellas', req: { k: 'dominados', v: 2, t: 'dominar 2 temas' } }
];
var ROPA = [
  { id: 'nada', n: 'Ninguna' }, { id: 'gafas', n: 'Gafas' }, { id: 'monito', n: 'Moño rosa' }, { id: 'mono', n: 'Corbatín' },
  { id: 'gorro', n: 'Gorro de graduación', req: { k: 'racha', v: 3, t: 'una racha de 3 días' } },
  { id: 'bata', n: 'Bata de laboratorio', req: { k: 'dominados', v: 1, t: 'dominar 1 tema' } },
  { id: 'audifonos', n: 'Audífonos', cofre: true },
  { id: 'corona', n: 'Corona', req: { k: 'dominados', v: 5, t: 'dominar 5 temas' } },
  { id: 'aureola', n: 'Aureola de sabiduría', req: { k: 'etapa', v: 3, t: 'llegar a la etapa Sabiduría' } }
];
var PAREDES = [
  { id: 'cielo', n: 'Cielo', a: '#e5ecff', b: '#f7f9ff', d: '#d3ddf6' },
  { id: 'lab', n: 'Laboratorio', a: '#dff6ee', b: '#f4fcf8', d: '#bfe6d6', req: { k: 'dominados', v: 1, t: 'dominar 1 tema' } },
  { id: 'atardecer', n: 'Atardecer', a: '#ffe3d1', b: '#fff6ee', d: '#f6c9ae', req: { k: 'racha', v: 5, t: 'una racha de 5 días' } },
  { id: 'espacio', n: 'Espacio', a: '#2b3563', b: '#4a5aa6', d: '#7d8ad0', req: { k: 'dominados', v: 3, t: 'dominar 3 temas' } },
  { id: 'bosque', n: 'Bosque', a: '#d3f1d9', b: '#f1fbf3', d: '#b3dfbd', cofre: true }
];
/* OBJETOS DEL CUARTO: cada materia tiene los suyos (mat). Los de mat 'todas' (el trofeo) son de cualquier materia.
   Cada materia tiene 2 objetos por lugar (A pared izquierda, B piso izquierdo, C pared derecha, D piso derecho). */
var DECOR = [
  /* Biología */
  { id: 'b_pizarra', n: 'Pizarra de neuronas', mat: 'biologia', slot: 'A', req: { k: 'etapa', v: 1, t: 'que tu mascota se transforme' } },
  { id: 'b_cerebro', n: 'Modelo de cerebro', mat: 'biologia', slot: 'A', req: { k: 'racha', v: 5, t: 'una racha de 5 días' } },
  { id: 'microscopio', n: 'Microscopio', mat: 'biologia', slot: 'B', req: { k: 'dominados', v: 1, t: 'dominar 1 tema' } },
  { id: 'planta', n: 'Planta', mat: 'biologia', slot: 'B', cofre: true },
  { id: 'b_manzana', n: 'Manzana', mat: 'biologia', slot: 'C', req: { k: 'etapa', v: 2, t: 'llegar a la etapa Joven' } },
  { id: 'b_corazon', n: 'Corazón', mat: 'biologia', slot: 'C', cofre: true },
  { id: 'b_libro', n: 'Libro de ciencias', mat: 'biologia', slot: 'D', req: { k: 'dominados', v: 3, t: 'dominar 3 temas' } },
  /* Física */
  { id: 'pizarra', n: 'Pizarra del átomo', mat: 'fisica', slot: 'A', req: { k: 'etapa', v: 1, t: 'que tu mascota se transforme' } },
  { id: 'reloj', n: 'Reloj atómico', mat: 'fisica', slot: 'A', req: { k: 'racha', v: 5, t: 'una racha de 5 días' } },
  { id: 'f_iman', n: 'Imán', mat: 'fisica', slot: 'B', req: { k: 'dominados', v: 1, t: 'dominar 1 tema' } },
  { id: 'f_foco', n: 'Foco', mat: 'fisica', slot: 'B', cofre: true },
  { id: 'planeta', n: 'Planeta', mat: 'fisica', slot: 'C', req: { k: 'etapa', v: 2, t: 'llegar a la etapa Joven' } },
  { id: 'cohete', n: 'Cohete', mat: 'fisica', slot: 'C', cofre: true },
  { id: 'telescopio', n: 'Telescopio', mat: 'fisica', slot: 'D', req: { k: 'dominados', v: 3, t: 'dominar 3 temas' } },
  /* Química */
  { id: 'q_pizarra', n: 'Pizarra de fórmulas', mat: 'quimica', slot: 'A', req: { k: 'etapa', v: 1, t: 'que tu mascota se transforme' } },
  { id: 'q_tabla', n: 'Tabla periódica', mat: 'quimica', slot: 'A', req: { k: 'racha', v: 5, t: 'una racha de 5 días' } },
  { id: 'q_tubos', n: 'Tubos de ensayo', mat: 'quimica', slot: 'B', req: { k: 'dominados', v: 1, t: 'dominar 1 tema' } },
  { id: 'q_cristales', n: 'Cristales', mat: 'quimica', slot: 'B', cofre: true },
  { id: 'q_molecula', n: 'Modelo de molécula', mat: 'quimica', slot: 'C', req: { k: 'etapa', v: 2, t: 'llegar a la etapa Joven' } },
  { id: 'q_vaso', n: 'Vaso de precipitados', mat: 'quimica', slot: 'C', cofre: true },
  { id: 'q_balanza', n: 'Balanza', mat: 'quimica', slot: 'D', req: { k: 'dominados', v: 3, t: 'dominar 3 temas' } },
  /* De todas las materias */
  { id: 'trofeo', n: 'Trofeo del reto final', mat: 'todas', slot: 'D', premio: true, req: { k: 'jefe', v: 1, t: 'superar un reto final de ficha' } }
];
var LISTAS = { color: COLORES, ojos: OJOS, ropa: ROPA, pared: PAREDES, decor: DECOR };
/* Lista de objetos de una materia: lo de otras materias no se muestra ni se desbloquea. */
function listaDe(k, mat) {
  return LISTAS[k].filter(function (it) { return !it.mat || it.mat === 'todas' || it.mat === mat; });
}
/* El cofre diario da audífonos, la pared bosque y los objetos de cofre de la materia activa. */
function cofrePool(mat) {
  var r = [['ropa', 'audifonos'], ['pared', 'bosque']];
  DECOR.forEach(function (it) { if (it.cofre && it.mat === mat) r.push(['decor', it.id]); });
  return r;
}

/* CRÉDITOS (se editan aquí, en un solo lugar).
   equipo: una persona por renglón, en el orden en que aparecen.
     rol     = lo que hizo (se muestra tal cual)
     nombre  = cómo quiere aparecer (el nombre que ella o él elija)
     icono   = 'idea' | 'codigo' | 'estrella'
     familias = texto más completo que sale en "Información para familias" (opcional)
   Si un renglón no tiene nombre, no se muestra. */
var CREDITOS = {
  titulo: 'Hecho en el laboratorio por…',
  equipo: [
    { rol: 'Idea y concepto', nombre: 'Soff Escalante', icono: 'idea', familias: 'Soff Escalante, biotecnóloga' },
    { rol: 'Desarrollo', nombre: 'Uriel Lara', icono: 'codigo', familias: 'Uriel Lara Guzmán, docente de Ciencias' }
  ]
};
