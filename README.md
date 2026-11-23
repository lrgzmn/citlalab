# Citlalab · Cuida a tu mascota repasando ciencias

App web para repasar Biología, Física y Química. Cada materia tiene su mascota (Atomín, Neurín y Matracín, con versión niña y niño). Cada una empieza como algo real de su materia (Física: un átomo de hidrógeno; Biología: una célula madre neural; Química: un matraz con un cristal semilla), se transforma en su primer repaso y evoluciona poco a poco mientras el cuarto se llena con lo que van desbloqueando. El avance se guarda solo en el dispositivo de cada estudiante.

No tiene cuentas, anuncios, compras ni rastreadores. Funciona sin internet después de la primera visita y se puede "instalar" en el celular desde el navegador.

## Cómo se publica en GitHub Pages (todo desde el navegador)

1. Entra a github.com, crea un repositorio nuevo (por ejemplo `repaso`) y márcalo como **Public**.
2. En el repositorio pulsa **Add file → Upload files**. Descomprime este zip y arrastra **todo su contenido** (las carpetas `css`, `js`, `data`, `icons` y los archivos sueltos, incluido `.nojekyll`). Pulsa **Commit changes**.
3. Ve a **Settings → Pages**. En *Source* elige **Deploy from a branch**, rama **main**, carpeta **/ (root)** y guarda.
4. En uno o dos minutos la app queda en `https://TU-USUARIO.github.io/repaso/`. Comparte esa dirección con los estudiantes.

## Cómo agregar una ficha (pasada o futura)

1. Copia `data/PLANTILLA_ficha.js`, cámbiale el nombre (por ejemplo `data/biologia/ficha3.js`) y llena las preguntas. Se escribe una pregunta por línea; las instrucciones están dentro del archivo.
2. Abre `data/lista.js` y agrega **una línea** con la ruta del archivo nuevo.
3. Sube los dos archivos a GitHub (Add file → Upload files, o el lápiz para editar). En `sw.js` cambia el número de `VERSION` para que los celulares reciban la actualización.
4. Comprueba que todo esté bien abriendo la app con `?revisar=1` al final de la dirección: muestra cuántas preguntas tiene cada ficha y avisa de cualquier error de escritura.

Las fichas nuevas aparecen solas en el repaso, en el progreso de cada estudiante y con su propio reto final. Si cambias las preguntas de una ficha, el avance de los estudiantes se conserva.

## Tema de la semana

En `data/semana.js` pones, para cada materia, el tema que vieron en clase esta semana (por ejemplo `fisica: 'f7.t3'`). Ese tema vale puntos dobles. Para quitarlo, déjalo en `null`.

## Cómo avanzan los estudiantes

- **Forma inicial → Brote → Joven → Sabiduría** con 15, 300 y 1200 puntos. La primera transformación es rápida a propósito (3 aciertos, en el primer minuto) para llamar la atención; después cuesta más: una ruta de hoy completa da unos 50 a 60 puntos, así que Joven llega en aproximadamente una semana de uso diario y Sabio en cerca de un mes. Hay un tope de 150 puntos por materia y por día (`XP_DIA_MAX`) para que nadie «cultive» puntos repitiendo preguntas. Los números se ajustan en `js/catalogo.js` (`XP_ETAPA`, `XP_DIA_MAX` y `PTS`). En la forma inicial el avance se ve así: el electrón del átomo salta a órbitas mayores (modelo de Bohr), a la célula le brotan dendritas y un axón, y el cristal del matraz crece. Los textos de cada una están en `MAT[materia].orig` (`js/catalogo.js`) y el dibujo en `origenMk` (`js/art.js`). Los números se ajustan en `js/catalogo.js` (`XP_ETAPA` y `PTS`).
- Cada pregunta acertada sube su "caja" de dominio. Un **tema dominado** es aquel donde se domina al menos el 80 % de sus preguntas. Dominar temas desbloquea objetos del cuarto, ropa, colores y el reto final de la ficha.
- Lo desbloqueado **no se pierde**. Los objetos del cuarto se colocan solos al ganarlos.
- La racha aguanta un día sin entrar. La mascota nunca se enferma ni muere: con los días solo baja un poco su hambre y su felicidad hasta un mínimo.
- En Ajustes cada estudiante puede copiar un **código de respaldo** para pasar su avance a otro dispositivo o recuperarlo.

## Lectura científica (comprensión lectora)

En el inicio de cada materia aparece la tarjeta **Lectura científica**. Cada lectura es un texto muy corto (60 a 90 palabras) para empezar poco a poco; se queda a la vista mientras el estudiante responde. Se practican cinco habilidades: entender lo que dice el texto, deducir lo que no está escrito, palabras en contexto, encontrar la oración que prueba algo y ordenar ideas. Hay preguntas de «verdadero, falso o el texto no lo dice», que enseñan a responder solo con lo que el texto afirma. Al corregir, la app resalta en el texto las oraciones que respaldan la respuesta.

- Al final de cada lectura hay un paso opcional, **Explícalo con tus palabras**: el estudiante tiene que escribir con sus propias palabras (aquí no hay botón de escuchar ni se puede saltar), compara con una respuesta modelo y se autoevalúa con tus ideas clave. No da puntos y lo que escribe no se guarda.
- Los puntos de una lectura se ganan **una vez por día**; practicar de nuevo es libre pero sin puntos, para que nadie se "agote" repitiendo.
- Si el dispositivo tiene voz en español, aparece el botón **Escuchar** (lee el texto oración por oración, marcando la que va leyendo). No usa micrófono ni permisos.
- El progreso por habilidad aparece en **Progreso → Mi comprensión lectora** y en el resumen para docentes.
- Para agregar una lectura: copia `data/PLANTILLA_lectura.js`, llénala y agrega su archivo a `data/lista.js` (después del archivo de su ficha). Las instrucciones están dentro de la plantilla. Las lecturas se cuentan aparte del banco de preguntas: no afectan el dominio de los temas.

## Reporte para la familia y panel docente

En **Ajustes → Reporte para mi familia**, cada estudiante puede escribir su nombre y grupo (opcional, se guarda solo en su dispositivo) y copiar un texto escrito para sus papás o tutores: constancia de la semana, porcentaje de aciertos, temas que domina, temas en los que conviene apoyarle, avance en comprensión lectora y una sugerencia para conversar en casa. El tono es positivo y sin tecnicismos. El estudiante se lo pasa a su familia y, cuando tú lo solicites, la familia te lo manda por WhatsApp. La app no envía nada por sí sola.

Al final del reporte va una línea que empieza con `R1:` (el código para docentes). Abre `maestro.html` (en tu computadora, o en la misma dirección de GitHub Pages) y pega varios reportes: la página arma el mapa de dominio por estudiante y tema, las preguntas que más se fallan, la comprensión lectora del grupo y los estudiantes a quienes dar seguimiento, y puede descargar todo en CSV. Los reportes se guardan solo en tu navegador; no se sube nada a internet. Si una familia te manda un reporte más reciente del mismo estudiante, se queda el nuevo.

## Perfiles en un mismo dispositivo

En **Ajustes → ¿Quién está usando la app?** se pueden agregar varios perfiles (por ejemplo, hermanos que comparten un celular). Cada perfil tiene su mascota, su cuarto y su avance. El primer perfil conserva el avance que ya existía.

## Explicaciones por opción incorrecta

Cuando un estudiante se equivoca, además de la respuesta correcta puede ver por qué su opción no era. Se escribe en un archivo aparte (`data/fisica/ficha7_porque.js` es el ejemplo) y es opcional.

## Corrige a tu mascota

Un juego (y un tipo de pregunta, `CM` y `CMOK`) donde la mascota dice algo con un error típico y el estudiante la corrige. Explicar el error de otro es una de las formas de aprender más eficaces. Aparece en la pestaña Jugar cuando una ficha tiene al menos 4 de estas preguntas.

## Accesibilidad

La app se revisó con la herramienta automática axe-core en todas sus pantallas (contraste, estructura, nombres de botones y tamaños táctiles de al menos 44 px sin hallazgos), y con teclado: todo se puede hacer sin ratón, el foco pasa a la nueva pregunta y lo correcto/incorrecto se marca también con símbolos, no solo con color. Respeta la preferencia de «menos movimiento» del dispositivo, tiene letra grande y las lecturas se pueden escuchar. Dos juegos dependen de la vista y del movimiento (Dónde está la mascota y Hora de dormir); son opcionales y todo el contenido de estudio se puede hacer sin ellos. Falta probar con un lector de pantalla real (TalkBack o VoiceOver) y con estudiantes con necesidades específicas.

## Accesibilidad y apoyos para todos (Ajustes → Accesibilidad)

- **Alto contraste**: texto negro sobre blanco, bordes marcados y un azul fuerte para todas las materias (cumple el contraste reforzado 7:1 en las pantallas principales).
- **Tipo de letra**: Normal, «Fácil de leer» (Atkinson Hyperlegible, con más espacio entre letras y palabras) y «Dislexia» (OpenDyslexic, con más espacio). La evidencia sobre las letras especiales es mixta; lo que más ayuda es el espacio, y por eso las dos opciones lo aumentan. Las fuentes van dentro de la app (`fonts/`, licencia SIL Open Font) y funcionan sin internet.
- **Leer preguntas en voz alta**: botón «Escuchar la pregunta» y «Escuchar la explicación», y un ajuste para que se lean solas. Solo se usan voces en español que ya viven en el dispositivo (nada se manda a ningún servidor); si no hay una, los botones no aparecen.
- **Juegos tranquilos**: en «Lluvia de respuestas» todo va más lento y se elige tocando; en «Dónde está la mascota» hay menos cambios y más despacio. La voz también habla más lento.
- **Elegir en vez de escribir**: en «Explícalo con tus palabras» el estudiante puede tocar las ideas correctas (entre ideas falsas) en lugar de teclear. Siempre hay un enlace para cambiar de modo. Requiere agregar `falsas` en cada lectura (ver `data/PLANTILLA_lectura.js`).
- **Dibujos en las preguntas**: cada tema puede llevar un dibujo (`icono` en la plantilla de ficha). Son decorativos: la pregunta se entiende solo con el texto. Se pueden quitar en Ajustes.
- El acierto y el error nunca dependen solo del color (llevan ✓/✗ y texto).
- Esto aplica varios principios del Diseño Universal para el Aprendizaje (DUA), pero no sustituye la valoración de un especialista ni los apoyos que cada estudiante con NEE necesite.

## Ruta de hoy y práctica espaciada
Cada pregunta tiene una **fecha de próximo repaso**: si se contesta bien, vuelve en 3, 7 o 14 días según la caja a la que llegó; si se falla, vuelve mañana. El botón principal de la pantalla de inicio (y la tarjeta «Ruta de hoy») arma una ruta de hasta 12 preguntas: primero lo que toca recordar y, además, un poco de lo nuevo (entre 4 y 6 preguntas nuevas al día, aunque haya muchas por recordar; lo nuevo se presenta tema por tema: primero el de la semana y luego en el orden de la ficha). Al completarla se gana un bono de 10 XP una vez al día y la ruta queda «Completada» hasta que haya algo que repasar. Si ya no toca nada, el botón ofrece 5 preguntas extra de práctica libre. Para probarlo sin esperar días, usa el botón «Día siguiente» del panel de pruebas (`?demo=1`).

## Seguridad al responder (lo sé, dudo, adiviné)
En el repaso y la ruta, después de elegir una respuesta y **antes** de ver si fue correcta, el estudiante marca «Lo sé», «Dudo» o «Adiviné». Decir la verdad nunca cuesta puntos. Acertar adivinando da los mismos puntos pero no sube de caja y la pregunta vuelve mañana; acertar con dudas vuelve en la mitad del tiempo; fallar estando seguro se anota como una idea confundida y vuelve mañana (ver «hipercorrección»). El reporte familiar y el panel docente (`maestro.html`) muestran cuántas veces estuvo seguro y se equivocó, y en qué preguntas. Se puede apagar en Ajustes. No se pregunta en los juegos ni en el reto final, para no presionar.

## Sellos y títulos
Cada ficha tiene un sello (una medalla con su número). Se gana cuando el estudiante domina la mitad de los temas de esa ficha (el mismo requisito que para desbloquear el reto final). Un sello ganado nunca se pierde. Según cuántos sellos junta en una materia, el estudiante recibe un título: Aprendiz, Explorador, Investigador, Experimentador, Científico, Gran científico y Leyenda de la ciencia. Los títulos y cuántos sellos pide cada uno están en `js/catalogo.js` (`TITULOS`); ajústalos cuando sepas cuántas fichas tendrá cada materia. Se ven en Inicio (debajo del nombre) y en Progreso (sección «Mis sellos»). El reporte para la familia y el panel docente incluyen el número de sellos.

## Ícono de la app
El ícono es un átomo sonriente sobre fondo azul marino (`icons/`). Hay versión normal, versión adaptable para Android (`icon-maskable-512.png`) y la de iPhone (`apple-touch-icon.png`).

## Respaldo del avance
En Ajustes, «Descargar mi respaldo» baja un archivo `.json` a **tu propio dispositivo** (incluye a todos los perfiles del dispositivo). «Restaurar desde archivo» lo recupera, mostrando antes un resumen y pidiendo confirmación. También existe la opción de copiar un código de texto. La app recuerda la fecha del último respaldo y, si pasan más de 14 días, ofrece una tarjeta amable para respaldar (sin culpas).

## Privacidad y seguridad para niñas y niños
- No hay cuentas, anuncios, compras, cookies, rastreadores ni enlaces a otros sitios.
- La app **no se conecta a internet para nada**: la política de seguridad del navegador (`Content-Security-Policy`, en `index.html` y `maestro.html`) bloquea cualquier conexión externa (`connect-src 'none'`), formularios, marcos y objetos incrustados.
- **Respaldo y archivos**: la app solo guarda un archivo de respaldo (.json) o lee uno que el estudiante elige. Antes de leerlo comprueba que sea .json o .txt y de menos de 1 MB; fotos, videos, audios u otros tipos se rechazan sin abrirse, y la app no puede ver ningún otro archivo del dispositivo.
- **Quién aloja la página**: GitHub Pages. La app no envía datos a nadie, pero GitHub, como cualquier sitio web, puede registrar visitas técnicas (como la dirección IP); no ve nombres ni avance.
- **No pide permisos**: no usa ubicación, cámara, micrófono, notificaciones, contactos, sensores, portapapeles de lectura ni almacenamiento persistente. Solo guarda el avance en el propio navegador (`localStorage`). El único acceso a archivos es el que el estudiante inicia al elegir «Restaurar desde archivo».
- La lectura en voz alta usa únicamente voces en español que están instaladas en el propio dispositivo; las voces que funcionan en línea se descartan y, si no hay una local, los botones de escuchar no aparecen.
- Los datos viven solo en el dispositivo. El nombre del estudiante es opcional y solo aparece en el reporte que la familia decide compartir.
- Revisión automática: una prueba recorre la app registrando cualquier llamada a ubicación, cámara, micrófono, permisos, notificaciones, almacenamiento persistente, portapapeles, red o cookies. En la última revisión hubo cero.
- Esto no sustituye el aviso de privacidad de tu escuela; si tu escuela lo pide, la información de arriba sirve para redactarlo.

## Juegos

Cada materia tiene su lista de juegos en la pestaña **Jugar**. No necesitan datos extra, salvo "Armar el átomo":

- **Verdadero o falso** (tarjetas que se arrastran): usa las preguntas de verdadero o falso de las fichas.
- **Lluvia de respuestas**: el estudiante mueve a su mascota para atrapar la respuesta correcta de las preguntas de opción. Nadie pierde: si la burbuja baja sin atraparse, vuelve a subir.
- **Armar el átomo**: se configura en `data/fisica/juegos.js`.
- **Dónde está la mascota** y **Hora de dormir**: juegos de descanso que funcionan siempre, incluso antes de que haya fichas. Solo dan felicidad, no puntos de nivel.

Ningún juego usa cámara, micrófono ni ubicación: todo se juega tocando la pantalla.

## Probar la app (para ti)

Agrega `?demo=1` al final de la dirección para ver un panel con botones: sumar puntos, saltar de etapa, pasar al día siguiente, dominar temas o reiniciar. Los estudiantes no ven ese panel.

## Estructura

```
index.html            página principal
maestro.html          panel docente (junta los reportes de las familias)
css/styles.css        estilos
js/core.js            registro de fichas y lecturas (REPASO.agregar, REPASO.lectura, O, VF, ORD, LO, LV, LE, LS)
js/catalogo.js        materias, ropa, colores, cuarto, desbloqueos y ritmo de puntos
js/art.js             dibujo de las mascotas, su forma inicial y el cuarto (todo vectorial)
js/store.js           guardado del avance, dominio de temas y racha
js/app.js             pantallas y juegos (lluvia, vasos, dormir, tarjetas, átomo y reto final)
js/lectura.js         lecturas científicas (texto, preguntas, voz)
js/extras.js          panel de pruebas, revisión de fichas y resumen para docentes
data/lista.js         lista de fichas que se cargan
data/semana.js        tema de la semana
data/<materia>/       las fichas, lecturas y juegos de cada materia
data/PLANTILLA_*.js   plantillas para fichas y lecturas nuevas
sw.js, manifest.*     para que funcione sin internet y se pueda instalar
```

Creada por Uriel Lara Guzmán, docente de Ciencias.

## Créditos
Se editan en un solo lugar: el objeto `CREDITOS` al final de `js/catalogo.js`. Cada persona es un renglón con su `rol` (lo que hizo), su `nombre` (como quiere aparecer) y un `icono` (`idea`, `codigo` o `estrella`). En Ajustes se muestran como una tarjeta «El equipo de Citlalab», en el orden de la lista, y el mismo texto se usa en «Información para familias» (ahí puedes poner un `familias` con más detalle, por ejemplo «Uriel Lara Guzmán, docente de Ciencias»). Si un renglón no tiene nombre, no se muestra. Después de cambiarlo, sube `js/catalogo.js` y cambia `VERSION` en `sw.js`.
