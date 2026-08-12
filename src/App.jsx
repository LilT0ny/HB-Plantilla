import { useState, useEffect, useRef } from 'react'
import { birthdayName, texts, phrases, questions, mediaItems, backgroundMusic } from './data/content'
import './App.css'

// Importar todos los archivos de media dinámicamente
const mediaModules = import.meta.glob('./assets/media/*', { eager: true })

// Las claves del glob conservan el casing real del disco (foto1.JPG), pero en
// content.js los nombres se escriben a mano (foto1.jpg). Sin este índice, esas
// fotos se resuelven a '' y desaparecen de la galería sin ningún error visible.
const mediaByLowerKey = new Map(
  Object.entries(mediaModules).map(([path, mod]) => [path.toLowerCase(), mod])
)

function getMediaUrl(filename) {
  const path = `./assets/media/${filename}`
  const mod = mediaModules[path] ?? mediaByLowerKey.get(path.toLowerCase())
  return mod?.default || ''
}

// Los SVG de esta app son decorativos: el nombre accesible siempre lo aporta
// el texto del botón o su aria-label. Marcarlos así evita que el lector de
// pantalla anuncie ruido.
const decorativeSvg = { 'aria-hidden': true, focusable: 'false' }

// Nombre accesible de cada pieza de la galería. Si content.js trae un `alt`
// escrito a mano se usa ese, porque describe la foto de verdad; si no, al menos
// se dice qué es y en qué posición está, que es mucho mejor que un alt vacío.
function mediaLabel(media, position) {
  const tipo = media.type === 'video' ? 'Video' : 'Foto'
  if (media.alt) return `${tipo}: ${media.alt}`
  return position ? `${tipo} ${position} de la galería` : tipo
}

// Botón de música. Vive FUERA de App a propósito: definido adentro, React lo
// trataría como un tipo de componente nuevo en cada render y lo desmontaría y
// volvería a montar, perdiendo foco y estado.
function MusicButton({ isPlaying, onToggle }) {
  return (
    <button
      type="button"
      className="music-control"
      onClick={onToggle}
      aria-label={isPlaying ? 'Pausar música' : 'Reproducir música'}
    >
      {isPlaying ? (
        <svg viewBox="0 0 24 24" fill="currentColor" {...decorativeSvg}>
          <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/>
        </svg>
      ) : (
        <svg viewBox="0 0 24 24" fill="currentColor" {...decorativeSvg}>
          <path d="M8 5v14l11-7z"/>
        </svg>
      )}
    </button>
  )
}

// Componente para video con autoplay en scroll (móvil)
function VideoCard({ src }) {
  const videoRef = useRef(null)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            video.play()
          } else {
            video.pause()
            video.currentTime = 0
          }
        })
      },
      { threshold: 0.5 }
    )

    observer.observe(video)
    return () => observer.disconnect()
  }, [])

  return (
    // Sin `controls`: el <video> no es contenido interactivo, por eso puede ir
    // dentro del <button> de la tarjeta. El click y el teclado los maneja ese
    // botón; el hover de acá es solo un extra para mouse.
    <video
      ref={videoRef}
      muted
      playsInline
      loop
      onMouseEnter={(e) => e.target.play()}
      onMouseLeave={(e) => {
        e.target.pause()
        e.target.currentTime = 0
      }}
    >
      <source src={src} type="video/mp4" />
    </video>
  )
}

function App() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [showIntro, setShowIntro] = useState(true)
  const [showQuiz, setShowQuiz] = useState(false)
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [showHint, setShowHint] = useState(false)
  const [showCorrect, setShowCorrect] = useState(false)
  const [loadedMedia, setLoadedMedia] = useState([])
  const [selectedMedia, setSelectedMedia] = useState(null)
  const audioRef = useRef(null)
  const hasInteracted = useRef(false)
  const modalCloseRef = useRef(null)
  const lastFocusedRef = useRef(null)
  
  const musicUrl = getMediaUrl(backgroundMusic)

  const handleAnswer = (answerIndex) => {
    if (answerIndex === questions[currentQuestion].correct) {
      setShowHint(false)
      setShowCorrect(true)
      
      // Esperar un momento para mostrar el feedback y luego avanzar
      setTimeout(() => {
        setShowCorrect(false)
        if (currentQuestion < questions.length - 1) {
          setCurrentQuestion(currentQuestion + 1)
        } else {
          // Todas las preguntas correctas: la galería se muestra sola cuando
          // ni la intro ni el quiz están activos.
          setShowQuiz(false)
        }
      }, 1000)
    } else {
      setShowHint(true)
    }
  }

  const goBackQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1)
      setShowHint(false)
      setShowCorrect(false)
    } else {
      // Volver al inicio
      setShowQuiz(false)
      setShowIntro(true)
    }
  }

  const startQuiz = () => {
    setShowIntro(false)
    setShowQuiz(true)
    setCurrentQuestion(0)
    setShowHint(false)
    setShowCorrect(false)
    // Intentar reproducir música cuando el usuario interactúa
    tryPlayAudio()
  }

  // Función para intentar reproducir audio
  const tryPlayAudio = () => {
    if (audioRef.current && !isPlaying) {
      audioRef.current.play().then(() => {
        setIsPlaying(true)
        hasInteracted.current = true
      }).catch(() => {
        setIsPlaying(false)
      })
    }
  }

  useEffect(() => {
    // Filtrar solo los items que existen
    const validMedia = mediaItems.filter(item => getMediaUrl(item.src))
    setLoadedMedia(validMedia)
  }, [])

  // Intentar autoplay cuando el audio esté listo
  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return

    const handleCanPlayThrough = () => {
      // Intentar reproducir automáticamente
      audio.play().then(() => {
        setIsPlaying(true)
      }).catch(() => {
        // Autoplay bloqueado - esperaremos interacción del usuario
        setIsPlaying(false)
      })
    }

    const handleEnded = () => {
      // Forzar repetición si el loop nativo no funciona
      if (audio.loop && isPlaying) {
        audio.currentTime = 0
        audio.play().catch(() => {})
      }
    }

    audio.addEventListener('canplaythrough', handleCanPlayThrough)
    audio.addEventListener('ended', handleEnded)
    
    // Si ya está cargado, intentar reproducir
    if (audio.readyState >= 4) {
      handleCanPlayThrough()
    }

    return () => {
      audio.removeEventListener('canplaythrough', handleCanPlayThrough)
      audio.removeEventListener('ended', handleEnded)
    }
  }, [musicUrl, isPlaying])

  // Detectar cualquier interacción para iniciar audio (fallback)
  useEffect(() => {
    const handleFirstInteraction = () => {
      if (!hasInteracted.current && audioRef.current) {
        audioRef.current.play().then(() => {
          setIsPlaying(true)
          hasInteracted.current = true
        }).catch(() => {})
      }
      // Remover todos los listeners después de la primera interacción
      removeListeners()
    }

    const removeListeners = () => {
      document.removeEventListener('click', handleFirstInteraction)
      document.removeEventListener('touchstart', handleFirstInteraction)
      document.removeEventListener('touchmove', handleFirstInteraction)
      document.removeEventListener('scroll', handleFirstInteraction)
      document.removeEventListener('keydown', handleFirstInteraction)
      document.removeEventListener('mousedown', handleFirstInteraction)
    }

    // Escuchar múltiples tipos de interacción
    document.addEventListener('click', handleFirstInteraction)
    document.addEventListener('touchstart', handleFirstInteraction)
    document.addEventListener('touchmove', handleFirstInteraction)
    document.addEventListener('scroll', handleFirstInteraction)
    document.addEventListener('keydown', handleFirstInteraction)
    document.addEventListener('mousedown', handleFirstInteraction)

    return removeListeners
  }, [])

  // Manejo de foco y Escape del modal. Sin esto, quien navega con teclado abre
  // el modal y queda varado: el foco se queda atrás, en la galería, y no hay
  // forma de cerrarlo sin mouse.
  useEffect(() => {
    if (!selectedMedia) return

    // Guardar quién tenía el foco para devolvérselo al cerrar
    lastFocusedRef.current = document.activeElement
    modalCloseRef.current?.focus()

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setSelectedMedia(null)
    }
    document.addEventListener('keydown', handleKeyDown)

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      lastFocusedRef.current?.focus?.()
    }
  }, [selectedMedia])

  const toggleMusic = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause()
      } else {
        audioRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  // Mezclar fotos con frases
  const getGridItems = () => {
    const items = []
    let phraseIndex = 0
    
    loadedMedia.forEach((media, index) => {
      items.push({ type: 'media', data: media, id: `media-${index}`, position: index + 1 })
      
      // Agregar una frase cada 3-4 fotos
      if ((index + 1) % 4 === 0 && phraseIndex < phrases.length) {
        items.push({ type: 'phrase', data: phrases[phraseIndex], id: `phrase-${phraseIndex}` })
        phraseIndex++
      }
    })
    
    return items
  }

  return (
    <>
      {/* Audio GLOBAL - siempre montado, nunca se desmonta */}
      {musicUrl && (
        <audio ref={audioRef} loop preload="auto" autoPlay>
          <source src={musicUrl} type="audio/mpeg" />
        </audio>
      )}

      {/* Botón de música GLOBAL - siempre visible */}
      <MusicButton isPlaying={isPlaying} onToggle={toggleMusic} />

      {/* Pantalla de Intro */}
      {showIntro && (
        <div className="intro-screen">
          <div className="intro-content">
            <p className="intro-subtitle">{texts.introSubtitle}</p>
            <h1 className="intro-title">{birthdayName}</h1>
            <div className="intro-line"></div>
            <p className="intro-message">
              {texts.introMessage}
              {texts.introMessageRef && (
                <><br/><span className="verse-ref">{texts.introMessageRef}</span></>
              )}
            </p>

            <button type="button" className="enter-button" onClick={startQuiz}>
              <span>{texts.enterButton}</span>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" {...decorativeSvg}>
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </button>
          </div>
        </div>
      )}

      {/* Pantalla del Quiz */}
      {showQuiz && (
        <div className="intro-screen quiz-screen">
          {/* Botón volver */}
          <button type="button" className="quiz-back" onClick={goBackQuestion}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" {...decorativeSvg}>
              <path d="M19 12H5M12 19l-7-7 7-7"/>
            </svg>
            <span>{currentQuestion === 0 ? 'volver' : 'anterior'}</span>
          </button>

          <div className="intro-content quiz-content">
            <p className="quiz-subtitle">{texts.quizSubtitle}</p>
            <p className="quiz-progress">{currentQuestion + 1} / {questions.length}</p>
            
            <h2 className="quiz-question">{questions[currentQuestion].question}</h2>
            
            {/* Región viva persistente: tiene que existir en el DOM ANTES de
                que cambie su contenido, o el lector de pantalla no anuncia nada.
                Por eso no se monta y desmonta junto con el feedback visual. */}
            <p className="sr-only" role="status">
              {showCorrect && '¡Correcto!'}
              {showHint && `Respuesta incorrecta. Pista: ${questions[currentQuestion].hint}`}
            </p>

            {showCorrect ? (
              <div className="quiz-correct">
                <span className="quiz-correct-icon" aria-hidden="true">✓</span>
                <p>¡Correcto!</p>
              </div>
            ) : (
              <>
                <div className="quiz-options">
                  {questions[currentQuestion].options.map((option, index) => (
                    <button
                      type="button"
                      key={option}
                      className="quiz-option"
                      onClick={() => handleAnswer(index)}
                    >
                      {option}
                    </button>
                  ))}
                </div>

                {showHint && (
                  <div className="quiz-hint">
                    <p><span aria-hidden="true">💡</span> Pista: {questions[currentQuestion].hint}</p>
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      )}

      {/* Galería */}
      {!showIntro && !showQuiz && (
        <div className="app">
          {/* Header minimalista */}
          <header className="header">
            <h1>{birthdayName}</h1>
            <p>{texts.headerSubtitle}</p>
          </header>

          {/* Galería Masonry */}
          <div className="gallery">
            {getGridItems().map((item) => {
              if (item.type === 'phrase') {
                return (
                  <div key={item.id} className="gallery-item phrase-card">
                    <div className="phrase-content">
                      <p className="phrase-text">{item.data.text}</p>
                      <span className="phrase-author">— {item.data.author}</span>
                    </div>
                  </div>
                )
              }
              
              const mediaUrl = getMediaUrl(item.data.src)
              if (!mediaUrl) return null

              // Botón real, no un div con onClick: así se llega con Tab, se
              // activa con Enter y Espacio, y el lector de pantalla lo anuncia
              // como control. El alt de la imagen va vacío a propósito — el
              // nombre accesible lo aporta el aria-label del botón y repetirlo
              // haría que se anuncie dos veces.
              return (
                <button
                  type="button"
                  key={item.id}
                  className="gallery-item media-card"
                  onClick={() => setSelectedMedia(item.data)}
                  aria-label={`Ampliar. ${mediaLabel(item.data, item.position)}`}
                >
                  {item.data.type === 'video' ? (
                    <VideoCard src={mediaUrl} />
                  ) : (
                    <img src={mediaUrl} alt="" loading="lazy" />
                  )}
                </button>
              )
            })}
          </div>

          {/* Mensaje final */}
          <footer className="footer">
            <div className="footer-content">
              <p className="footer-quote">{texts.footerQuote}</p>
              <p className="footer-signature">{texts.footerSignature}</p>
            </div>
          </footer>

          {/* Modal para ver media en grande */}
          {selectedMedia && (
            <div
              className="modal"
              role="dialog"
              aria-modal="true"
              aria-label={mediaLabel(selectedMedia)}
            >
              {/* El fondo cierra al hacer click: es una comodidad de mouse, no
                  un control. role="presentation" lo declara como tal — el cierre
                  de verdad son el botón X y la tecla Escape. */}
              <div
                className="modal-backdrop"
                role="presentation"
                onClick={() => setSelectedMedia(null)}
              />

              <button
                type="button"
                ref={modalCloseRef}
                className="modal-close"
                onClick={() => setSelectedMedia(null)}
                aria-label="Cerrar"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...decorativeSvg}>
                  <path d="M18 6L6 18M6 6l12 12"/>
                </svg>
              </button>

              <div className="modal-content">
                {selectedMedia.type === 'video' ? (
                  <video controls autoPlay aria-label={mediaLabel(selectedMedia)}>
                    <source src={getMediaUrl(selectedMedia.src)} type="video/mp4" />
                  </video>
                ) : (
                  <img src={getMediaUrl(selectedMedia.src)} alt={mediaLabel(selectedMedia)} />
                )}
              </div>
            </div>
          )}
        </div>
      )}
    </>
  )
}

export default App
