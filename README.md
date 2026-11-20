# Charrúa Gaming — sitio estático de torneos

Sitio HTML/CSS/JS sin servidor, cuentas ni base de datos. Compatible con GitHub Pages.

## Publicar en GitHub Pages
1. Creá un repositorio público en GitHub.
2. Subí **todos los archivos y la carpeta `assets`** a la raíz del repositorio (no subas el ZIP sin extraer).
3. Entrá a **Settings → Pages**.
4. En **Build and deployment**, elegí **Deploy from a branch**; seleccioná `main` y `/ (root)`; guardá.
5. Esperá la publicación y abrí la URL que te muestre GitHub Pages.

## Configurar
Editá `config.js`:
- `instagram`: URL completa de tu perfil de Instagram, por ejemplo `https://www.instagram.com/usuario/`.
- `instagramUsername`: tu usuario de Instagram (solo informativo).
- `whatsappChannel`: enlace real a tu canal de WhatsApp.
- `email`: correo de contacto.
- `tournaments`: lista de torneos. `status` puede ser `abierto` o `proximo`.
- `game`: `fortnite`, `clash`, `minecraft`, `valorant`. Cada valor selecciona automáticamente una ilustración y colores para el flyer.

Para añadir otro juego, agregá su SVG en `assets` y una entrada en los objetos `artwork` y `palettes` de `app.js`.

## Flujo de inscripción
El formulario crea un texto con los datos, que el participante copia y pega en un mensaje privado de Instagram. **Instagram no permite prerrellenar de forma fiable mensajes directos desde una web estática**. El usuario debe enviarlo manualmente. No se guardan datos en servidores de Charrúa Gaming ni en almacenamiento local.

## Importante
- Los torneos, fechas, cupos y premios incluidos son **ejemplos**; actualizalos antes de publicar.
- Las imágenes SVG son **ilustraciones originales temáticas**, no arte oficial ni logos de los juegos.
- Reemplazá los enlaces y el correo de ejemplo antes de publicar.
- Los cupos son datos informativos: sin base de datos no se actualizan automáticamente ni se impiden inscripciones duplicadas.
- Al solicitar datos personales, publicá una política de privacidad apropiada y pedí solo lo necesario, especialmente si participan menores.
