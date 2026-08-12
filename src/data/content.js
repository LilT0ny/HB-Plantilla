// ═══════════════════════════════════════════════════════════════════════════
// CONFIGURACIÓN DEL REGALO DE CUMPLEAÑOS
// ═══════════════════════════════════════════════════════════════════════════

// INSTRUCCIONES PARA AGREGAR FOTOS Y VIDEOS:
// 1. Coloca tus archivos en: src/assets/media/
// 2. Nombra las fotos: foto1.jpg, foto2.jpg, foto3.jpg...
// 3. Nombra los videos: video1.mp4, video2.mp4...
// 4. Formatos soportados: jpg, jpeg, png, webp, heic, mov, mp4, webm
// 5. Recomendación: fotos cuadradas o verticales se ven mejor
// 6. Las mayúsculas del nombre no importan: si el archivo es foto1.JPG podés
//    escribir "foto1.jpg" acá igual. Lo que SÍ importa es que el archivo exista
//    y que esté listado en mediaItems; si no, no aparece en la galería.

// ═══════════════════════════════════════════════════════════════════════════
// NOMBRE DE LA PERSONA
// ═══════════════════════════════════════════════════════════════════════════
export const birthdayName = "Nao";

// ═══════════════════════════════════════════════════════════════════════════
// TEXTOS DE LA PÁGINA
// Cada texto que se lee en pantalla vive acá. Antes estaban hardcodeados en el
// JSX, lo que obligaba a tocar código para reusar la plantilla con otra persona.
// ═══════════════════════════════════════════════════════════════════════════
export const texts = {
  // Pantalla de inicio
  introSubtitle: "para ti",
  introMessage: "Cada kilómetro, cada canción y cada teoría loca me traen acá.",
  introMessageRef: "", // línea chica debajo del mensaje; dejalo "" si no querés
  enterButton: "entrar",

  // Quiz
  quizSubtitle: "¿En realidad eres tú?",

  // Galería
  headerSubtitle: "feliz cumpleaños",
  footerQuote: "FELIZ CUMPLEAÑOS, NAO",
  footerSignature: "Te amo mucho ♡",
};

// ═══════════════════════════════════════════════════════════════════════════
// FRASES ESPECIALES (aparecerán entre las fotos)
//
// Temática: Cars, The Big Bang Theory y The Beatles.
// Se muestra una cada 4 items de la galería: con 43 items entran 10. Si sumás
// o quitás fotos, ajustá la cantidad de frases o van a quedar huecos sin nada.
// Están traducidas al español para que combinen con el resto de la página;
// si preferís las líneas originales en inglés, es cambiar el campo `text`.
// ═══════════════════════════════════════════════════════════════════════════
export const phrases = [
  {
    text: "Los autos no manejaban por ella para hacer buen tiempo. Manejaban para pasarla bien.",
    author: "Sally Carrera, Cars",
  },
  {
    text: "Y al final, el amor que recibes es igual al amor que das.",
    author: "The Beatles, «The End»",
  },
  {
    text: "Estamos hechos de partículas que existen desde el momento en que empezó el universo. Me gusta pensar que esos átomos viajaron catorce mil millones de años por el tiempo y el espacio para crearnos, para que pudiéramos estar juntos y completarnos.",
    author: "Leonard Hofstadter, The Big Bang Theory",
  },
  {
    text: "Gira a la derecha para ir a la izquierda.",
    author: "Doc Hudson, Cars",
  },
  {
    text: "Todo lo que necesitas es amor.",
    author: "The Beatles, «All You Need Is Love»",
  },
  {
    text: "No le temas al fracaso. Témele a no tener la oportunidad.",
    author: "Sally Carrera, Cars",
  },
  {
    text: "No estoy loco. Mi madre me hizo examinar.",
    author: "Sheldon Cooper, The Big Bang Theory",
  },
  {
    text: "Toma una canción triste y hazla mejor.",
    author: "The Beatles, «Hey Jude»",
  },
  {
    text: "Provoco en los demás sentimientos que ni ellos mismos entienden.",
    author: "Rayo McQueen, Cars",
  },
  {
    text: "Déjalo ser, susurra palabras de sabiduría, déjalo ser.",
    author: "The Beatles, «Let It Be»",
  },
];

// ═══════════════════════════════════════════════════════════════════════════
// PREGUNTAS DEL QUIZ
//
// Funciona como un candado: hay que acertar para pasar. Si se falla, se muestra
// la pista y se puede reintentar.
//
// question : la pregunta
// options  : las opciones que se muestran
// correct  : ÍNDICE de la opción correcta, empezando en 0
//            (0 = la primera opción, 1 = la segunda, 2 = la tercera)
// hint     : la pista que aparece al fallar
//
// La respuesta correcta cae en una posición distinta en cada pregunta (3ª, 1ª,
// 2ª) a propósito: si siempre fuera la primera, se nota el patrón y se puede
// acertar sin saber la respuesta.
// ═══════════════════════════════════════════════════════════════════════════
export const questions = [
  {
    question: "¿Cuál es tu animal favorito?",
    options: ["Perritos", "Mono", "Jirafa"],
    correct: 2,
    hint: "Aparece en The Last of Us...",
  },
  {
    question: "¿Cómo se llaman tus mascotas?",
    options: ["Rebeca y Theo", "Angel y Ares", "Kira y Eva"],
    correct: 0,
    hint: "Te los dejó tu tío favorito...",
  },
  {
    question: "¿Cuál es tu comida favorita?",
    options: ["Fritada", "Choclomote", "Sushi"],
    correct: 1,
    hint: "Lo comimos una vez en Otavalo...",
  },
];

// ═══════════════════════════════════════════════════════════════════════════
// CONFIGURACIÓN DE MEDIA
// Fotos y videos mezclados para una experiencia dinámica
//
// type: 'image' o 'video'
// src:  nombre del archivo en src/assets/media/
// alt:  (opcional) descripción de la foto para lectores de pantalla.
//       Si no la ponés, se usa "Foto N de la galería", que funciona pero no
//       dice nada. Escribí qué se ve: { alt: "los dos en la playa al atardecer" }
// ═══════════════════════════════════════════════════════════════════════════
export const mediaItems = [
  {
    type: "image",
    src: "foto1.jpg",
    alt: "primer plano en picado, ella mirando a la cámara con sus lentes redondos",
  },
  {
    type: "image",
    src: "foto2.jpg",
    alt: "ella posando frente a una vitrina llena de máscaras andinas pintadas de colores",
  },
  {
    type: "image",
    src: "foto3.jpg",
    alt: "los dos con máscaras pintadas puestas, una negra y una de payaso",
  },
  {
    type: "image",
    src: "foto4.jpg",
    alt: "ella en una terraza del centro de Quito, con El Panecillo y la Virgen al fondo",
  },
  {
    type: "image",
    src: "foto5.jpg",
    alt: "selfie de los dos muy juntos, él con lentes y camisa blanca",
  },
  {
    type: "image",
    src: "foto6.jpg",
    alt: "ella haciendo la V en un sendero de montaña, con el valle y las nubes detrás",
  },
  {
    type: "image",
    src: "foto7.jpg",
    alt: "los dos abrigados en la cima de una montaña, con el cielo nublado detrás",
  },
  {
    type: "image",
    src: "foto8.jpg",
    alt: "selfie de los dos en el metro, ella con audífonos",
  },
  {
    type: "image",
    src: "foto9.jpg",
    alt: "selfie de los dos en el espejo de un ascensor",
  },
  {
    type: "image",
    src: "foto10.jpg",
    alt: "ella con los palillos en la mano y una tabla de sushi servida en la mesa",
  },
  {
    type: "video",
    src: "video1.mp4",
    alt: "ella mirando a la cámara, con top de cuadros y la mochila puesta",
  },
  {
    type: "image",
    src: "foto11.jpg",
    alt: "ella apoyada en la vitrina de un museo, con una maqueta enorme de un templo detrás",
  },
  {
    type: "image",
    src: "foto12.jpg",
    alt: "ella de noche frente a una iglesia colonial iluminada",
  },
  {
    type: "image",
    src: "foto13.jpg",
    alt: "ella al tope de una escalinata, con el cielo bien azul detrás",
  },
  {
    type: "image",
    src: "foto14.jpg",
    alt: "ella de negro apoyada en una pared blanca",
  },
  {
    type: "image",
    src: "foto15.jpg",
    alt: "ella en la escalera de un edificio antiguo, con columnas y claraboya",
  },
  {
    type: "image",
    src: "foto16.jpg",
    alt: "ella frente al monumento de la Mitad del Mundo iluminado de noche",
  },
  {
    type: "image",
    src: "foto17.jpg",
    alt: "ella con poncho y el casco en la mano, con globos aerostáticos en el cielo",
  },
  {
    type: "image",
    src: "foto18.jpg",
    alt: "señalando los globos aerostáticos que se elevan sobre las montañas",
  },
  {
    type: "image",
    src: "foto19.jpg",
    alt: "los dos festejando con una porción de torta de chocolate y una vela",
  },
  {
    type: "image",
    src: "foto20.jpg",
    alt: "ella sentada dentro de una casa tradicional de techo de paja",
  },
  {
    type: "image",
    src: "foto21.jpg",
    alt: "los dos en un sendero entre la vegetación, con vinchas iguales",
  },
  {
    type: "image",
    src: "foto22.jpg",
    alt: "selfie de los dos frente a una cascada",
  },
  {
    type: "video",
    src: "video2.mp4",
    alt: "la vela encendida sobre la porción de torta de chocolate",
  },
  {
    type: "image",
    src: "foto23.jpg",
    alt: "ella en un puente colgante al pie de una cascada enorme",
  },
  {
    type: "image",
    src: "foto24.jpg",
    alt: "ella con vincha de reno y una caja de caramelos al lado",
  },
  {
    type: "image",
    src: "foto25.jpg",
    alt: "los dos en un mirador de madera, con las montañas entre la neblina",
  },
  {
    type: "image",
    src: "foto26.jpg",
    alt: "ella al pie de una cascada alta, con el sol asomando entre las rocas",
  },
  {
    type: "image",
    src: "foto27.jpg",
    alt: "selfie de los dos frente a una cascada, ella con sombrero de paja",
  },
  {
    type: "image",
    src: "foto28.jpg",
    alt: "ella sobre las rocas de un cañón verde, haciendo la V",
  },
  {
    type: "image",
    src: "foto29.jpg",
    alt: "selfie de los dos de noche, con una estructura roja iluminada detrás",
  },
  {
    type: "image",
    src: "foto30.jpg",
    alt: "primer plano de ella con buzo blanco",
  },
  {
    type: "image",
    src: "foto31.jpg",
    alt: "los dos muy juntos, con la luz del sol entrando de costado",
  },
  {
    type: "image",
    src: "foto32.jpg",
    alt: "ella riéndose junto al corral de una cabra",
  },
  {
    type: "image",
    src: "foto33.jpg",
    alt: "ella señalando unas avestruces en un campo verde",
  },
  {
    type: "video",
    src: "video3.mp4",
    alt: "ella caminando hacia una llama en un campo verde",
  },
  {
    type: "image",
    src: "foto34.jpg",
    alt: "ella con gorra, tomándose una foto en un pasillo de azulejos",
  },
  {
    type: "image",
    src: "foto35.jpg",
    alt: "ella con la camiseta número 30 al borde de una cancha",
  },
  {
    type: "image",
    src: "foto36.jpg",
    alt: "selfie de los dos bajo un cielo cargado de nubes",
  },
  {
    type: "image",
    src: "foto37.jpg",
    alt: "los dos en la playa, mostrando algo frito con queso encima",
  },
  {
    type: "image",
    src: "foto38.jpg",
    alt: "foto vieja: ella de chiquita, sentada en la cama abrazando un peluche",
  },
  {
    type: "image",
    src: "foto39.jpg",
    alt: "foto vieja: ella de bebé, con un buzo deportivo azul",
  },
  {
    type: "image",
    src: "foto40.jpg",
    alt: "primer plano de ella al aire libre, con el pelo suelto",
  },
];

// ═══════════════════════════════════════════════════════════════════════════
// CANCIÓN DE FONDO
// Coloca tu archivo de música en: src/assets/media/cancion.mp3
// ═══════════════════════════════════════════════════════════════════════════
export const backgroundMusic = "cancion.mp3";
