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
//
// type: 'image' o 'video'
// src:  nombre del archivo en src/assets/media/
// alt:  (opcional) descripción de la foto para lectores de pantalla.
//       Si no la ponés, se usa "Foto N de la galería", que funciona pero no
//       dice nada. Escribí qué se ve: { alt: "los dos en la playa al atardecer" }
// ═══════════════════════════════════════════════════════════════════════════
export const mediaItems = [
  // Más imágenes al inicio, luego alternando sin videos consecutivos
  {
    type: "image",
    src: "foto1.jpg",
    alt: "selfie en el espejo del parasol del auto, con el parqueadero de fondo",
  },
  {
    type: "image",
    src: "foto2.jpg",
    alt: "los dos en el comedor de casa, uno asomado a la cámara y la otra mirando de reojo",
  },
  {
    type: "image",
    src: "foto3.jpg",
    alt: "los dos con gorros de Papá Noel frente a un espejo, cargando una bolsa de regalos",
  },
  {
    type: "image",
    src: "foto4.jpg",
    alt: "selfie de los dos en un espejo de noche, ella con buzo blanco y audífonos al cuello",
  },
  {
    type: "image",
    src: "foto5.jpg",
    alt: "los dos muy juntos en el gimnasio",
  },
  {
    type: "video",
    src: "video1.mp4",
    alt: "los dos en el auto, ella con un abrigo rosado en el asiento de atrás",
  },
  {
    type: "image",
    src: "foto6.jpg",
    alt: "los dos tomados de las manos en la calle de noche, junto a una parada de bus",
  },
  {
    type: "image",
    src: "foto7.jpg",
    alt: "selfie de los dos dentro de un bus",
  },
  {
    type: "image",
    src: "foto8.jpg",
    alt: "selfie en el espejo del gimnasio, él con guantes de entrenamiento",
  },
  {
    type: "video",
    src: "video2.mp4",
    alt: "selfie de los dos con filtro de cámara antigua, con la fecha 19 de febrero de 2023 sobreimpresa",
  },
  {
    type: "image",
    src: "foto9.jpg",
    alt: "un día al aire libre con amigos, con una carpa amarilla y el cielo nublado de fondo",
  },
  {
    type: "image",
    src: "foto10.jpg",
    alt: "los dos entre la gente en un lugar concurrido",
  },
  {
    type: "image",
    src: "foto11.jpg",
    alt: "los dos de noche, bajo luces rosadas",
  },
  {
    type: "video",
    src: "video3.mp4",
    alt: "los dos de noche en un lugar con luces rojas",
  },
  {
    type: "image",
    src: "foto12.jpg",
    alt: "los dos en el gimnasio, con las luces moradas del lugar",
  },
  {
    type: "image",
    src: "foto13.jpg",
    alt: "ella con gorro blanco mirando por la ventana de una cafetería, con un café con leche y algo para comer en la mesa",
  },
  {
    type: "image",
    src: "foto14.jpg",
    alt: "los dos sonriendo en la cafetería, con el letrero 'La vida empieza después del café' en la pared de ladrillo",
  },
  {
    type: "video",
    src: "video4.mp4",
    alt: "los dos con la camiseta roja de la carrera, de noche en la calle",
  },
  {
    type: "image",
    src: "foto15.jpg",
    alt: "los dos con gafas de sol junto a una piscina, en un día nublado",
  },
  {
    type: "image",
    src: "foto16.jpg",
    alt: "los dos con camiseta roja, dorsal y medalla al terminar una carrera nocturna",
  },
  {
    type: "image",
    src: "foto17.jpg",
    alt: "los dos en un lugar con luces azules y moradas de neón",
  },
  {
    type: "video",
    src: "video5.mp4",
    alt: "los dos muy cerca de la cámara, de noche",
  },
  {
    type: "image",
    src: "foto18.jpg",
    alt: "los dos en una fiesta de Halloween, frente a un mural que dice 'Halloween Fest II'",
  },
  {
    type: "image",
    src: "foto19.jpg",
    alt: "selfie en un espejo redondo colgado en la pared de la sala",
  },
  {
    type: "image",
    src: "foto20.jpg",
    alt: "los dos en el auto de noche, él con gafas de sol",
  },
  {
    type: "video",
    src: "video6.mp4",
    alt: "ella mirando a la cámara, con aretes de argolla",
  },
  {
    type: "image",
    src: "foto21.jpg",
    alt: "él dándole un beso en la mejilla mientras ella sonríe a la cámara",
  },
  {
    type: "image",
    src: "foto22.jpg",
    alt: "selfie de los dos muy cerca de la cámara, con luz cálida",
  },
  {
    type: "video",
    src: "video7.mp4",
    alt: "ella tapándose la boca de la risa, bajo una luz rosada",
  },
  {
    type: "video",
    src: "video8.mp4",
    alt: "él haciendo una mueca frente a la cámara y ella detrás, en casa",
  },
  {
    type: "video",
    src: "video9.mp4",
    alt: "los dos en el auto de noche",
  },
  {
    type: "video",
    src: "video10.mp4",
    alt: "él con gafas de sol y filtro de cámara antigua, con la fecha 1 de abril de 2023 sobreimpresa",
  },
];

// ═══════════════════════════════════════════════════════════════════════════
// CANCIÓN DE FONDO
// Coloca tu archivo de música en: src/assets/media/cancion.mp3
// ═══════════════════════════════════════════════════════════════════════════
export const backgroundMusic = "cancion.mp3";
