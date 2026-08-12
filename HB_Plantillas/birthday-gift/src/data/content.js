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
export const birthdayName = "Bonita";

// ═══════════════════════════════════════════════════════════════════════════
// FRASES ESPECIALES (aparecerán entre las fotos)
// ═══════════════════════════════════════════════════════════════════════════
export const phrases = [
  {
    text: "Amar no es mirarse el uno al otro, sino mirar juntos en la misma dirección.",
    author: "Antoine de Saint-Exupéry",
  },
  {
    text: "Lo que haces hoy puede mejorar todos tus mañanas.",
    author: "Ralph Marston",
  },
  {
    text: "La felicidad no es algo hecho. Proviene de tus propias acciones.",
    author: "Dalai Lama",
  },
  {
    text: "El secreto de la existencia no consiste solamente en vivir, sino en saber para qué se vive.",
    author: "Fiódor Dostoyevski",
  },
  { text: "Donde hay amor, hay vida.", 
    author: "Mahatma Gandhi" },
  {
    text: "La vida es lo que pasa mientras estás ocupado haciendo otros planes.",
    author: "John Lennon",
  },
  {
    text: "Sé tú mismo; todos los demás ya están ocupados.",
    author: "Oscar Wilde",
  },
  {
    text: "El tiempo que disfrutas perdiéndolo no es tiempo perdido.",
    author: "Bertrand Russell",
  },
];

// ═══════════════════════════════════════════════════════════════════════════
// CONFIGURACIÓN DE MEDIA
// Fotos y videos mezclados para una experiencia dinámica
// type: 'image' o 'video'
// src: nombre del archivo en src/assets/media/
// ═══════════════════════════════════════════════════════════════════════════
export const mediaItems = [
  // Más imágenes al inicio, luego alternando sin videos consecutivos
  { type: "image", src: "foto1.jpg" },
  { type: "image", src: "foto2.jpg" },
  { type: "image", src: "foto3.jpg" },
  { type: "image", src: "foto4.jpg" },
  { type: "image", src: "foto5.jpg" },
  { type: "video", src: "video1.mp4" },
  { type: "image", src: "foto6.jpg" },
  { type: "image", src: "foto7.jpg" },
  { type: "image", src: "foto8.jpg" },
  { type: "video", src: "video2.mp4" },
  { type: "image", src: "foto9.jpg" },
  { type: "image", src: "foto10.jpg" },
  { type: "image", src: "foto11.jpg" },
  { type: "video", src: "video3.mp4" },
  { type: "image", src: "foto12.jpg" },
  { type: "image", src: "foto13.jpg" },
  { type: "image", src: "foto14.jpg" },
  { type: "video", src: "video4.mp4" },
  { type: "image", src: "foto15.jpg" },
  { type: "image", src: "foto16.jpg" },
  { type: "image", src: "foto17.jpg" },
  { type: "video", src: "video5.mp4" },
  { type: "image", src: "foto18.jpg" },
  { type: "image", src: "foto19.jpg" },
  { type: "image", src: "foto20.jpg" },
  { type: "video", src: "video6.mp4" },
  { type: "image", src: "foto21.jpg" },
  { type: "image", src: "foto22.jpg" },
  { type: "video", src: "video7.mp4" },
  { type: "video", src: "video8.mp4" },
  { type: "video", src: "video9.mp4" },
  { type: "video", src: "video10.mp4" },
];

// ═══════════════════════════════════════════════════════════════════════════
// CANCIÓN DE FONDO
// Coloca tu archivo de música en: src/assets/media/cancion.mp3
// ═══════════════════════════════════════════════════════════════════════════
export const backgroundMusic = "cancion.mp3";
