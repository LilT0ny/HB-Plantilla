# 🎂 Birthday Gift

Página-regalo de cumpleaños. React 19 + Vite (`rolldown-vite`), sin backend.

El recorrido es: **intro** → **quiz de preguntas personales** → **galería** de fotos y
videos mezclada con frases, con música de fondo.

## Correrlo

```bash
npm install
npm run dev      # http://localhost:5173
```

Otros comandos: `npm run build` (genera `dist/`), `npm run preview` (sirve el build),
`npm run lint`.

## Re-usarlo para otra persona

Todo el contenido vive en **`src/data/content.js`**. Salvo las preguntas del quiz,
no hace falta tocar el JSX.

1. **Nombre** → `birthdayName`
2. **Frases** → array `phrases` (`{ text, author }`). Se intercala una cada 4 items.
3. **Fotos y videos** → poné los archivos en `src/assets/media/` y listalos en
   `mediaItems` con `{ type: "image" | "video", src: "nombre-del-archivo" }`.
   - **Un archivo que no esté en `mediaItems` no aparece.** No hay auto-descubrimiento.
   - Las mayúsculas del nombre no importan: si el archivo es `foto1.JPG` podés
     escribir `"foto1.jpg"`. `getMediaUrl()` en `App.jsx` resuelve exacto primero y
     cae a comparación case-insensitive.
   - Formatos: jpg, jpeg, png, webp, heic, mov, mp4, webm. Verticales o cuadradas
     quedan mejor en el masonry.
4. **Música** → `backgroundMusic` apunta a un archivo dentro de `src/assets/media/`.
5. **Preguntas del quiz** → array `questions` en `src/App.jsx`. Cada una es
   `{ question, options, correct, hint }`, donde `correct` es el **índice** de la
   opción correcta (base 0). Si el usuario falla, se le muestra `hint` y reintenta:
   no se puede avanzar sin acertar.

## Cosas que conviene saber

- **La música no arranca sola, y está bien.** Los navegadores bloquean el autoplay
  con sonido. `App.jsx` intenta reproducir en `canplaythrough` y, si lo bloquean,
  engancha listeners de `click / touch / scroll / keydown` para arrancar en la
  primera interacción del usuario. No lo "arregles", es el comportamiento correcto.
- **La media pesa y va commiteada al repo.** Vite la importa en tiempo de build vía
  `import.meta.glob`, así que tiene que estar en el repo para que Vercel pueda
  compilar. Antes de commitear fotos nuevas, comprimilas — 34 MB ya es mucho para
  un repo de git.
- **Los videos se auto-reproducen en scroll** (`IntersectionObserver`, umbral 0.5)
  en mobile y por hover en desktop. Van siempre `muted` — es requisito del navegador
  para permitir autoplay.

## Deploy en Vercel

El proyecto vive en la **raíz del repo**, así que no hay nada que configurar:
Vercel detecta Vite solo y el `vercel.json` ya trae el rewrite de SPA
(todo a `/index.html`, necesario para que la SPA no tire 404).

> Si en el panel de Vercel quedó un **Root Directory** apuntando a una subcarpeta
> de cuando el proyecto estaba anidado, **borralo** — ahora tiene que estar vacío.
>
> Y ojo: `rootDirectory` **no** es una clave válida de `vercel.json`. Si la ponés
> ahí, Vercel la ignora y el deploy falla sin decirte por qué.
