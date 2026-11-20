/*
╔══════════════════════════════════════════════════════════════════╗
║          CHARRÚA GAMING — CONFIGURACIÓN DE LA WEB               ║
╚══════════════════════════════════════════════════════════════════╝

EDITÁ SOLO ESTE ARCHIVO para cambiar contactos y torneos.
Podés editarlo directamente desde GitHub (botón del lápiz).

REGLAS:
- Conservá las comillas, comas, llaves { } y corchetes [ ].
- Para eliminar un torneo, borrá su bloque completo { ... } y la coma
  que lo separa del siguiente torneo (si corresponde).
- Para añadir uno, copiá un bloque y pegalo dentro de tournaments: [ ].
- Cada torneo debe tener un "id" diferente.
- Los juegos con ilustración incluida son: fortnite, clash,
  minecraft y valorant. Para otro juego, usá game: 'otro'
  (mostrará una ilustración genérica).
- Estado: 'abierto' permite inscribirse; 'proximo' desactiva el botón.
- Fechas en formato AAAA-MM-DD, por ejemplo 2027-02-14.
- Los datos son públicos: no pongas contraseñas ni información privada.
*/

window.SITE_CONFIG = {
  // ── TUS CONTACTOS ───────────────────────────────────────────────
  instagram: 'https://www.instagram.com/TU_USUARIO/',
  whatsappChannel: 'https://whatsapp.com/channel/0029VbDoYJsK0IBcCXnQW62W',
  email: 'lignaciotachini@gmail.com',

  // ── TORNEOS ─────────────────────────────────────────────────────
  // Podés dejar tournaments: [] si no hay torneos activos.
  tournaments: [
    {
      id: 'clash-1',
      game: 'clash',
      title: 'CLASH ROYALE CUP',
      subtitle: 'Duelo competitivo · 1 vs 1',
      date: '2026-12-19',
      time: '18:00',
      slots: 64,
      prize: 'A anunciar',
      status: 'abierto',
      format: '1 vs 1',
      edition: 'TEMPORADA 01'
    }
