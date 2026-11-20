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
  whatsappChannel: 'https://www.whatsapp.com/channel/TU_CANAL',
  email: 'TU_CORREO@ejemplo.com',

  // ── TORNEOS ─────────────────────────────────────────────────────
  // Podés dejar tournaments: [] si no hay torneos activos.
  tournaments: [
    {
      id: 'fortnite-1',             // Identificador único
      game: 'fortnite',            // fortnite | clash | minecraft | valorant | otro
      title: 'FORTNITE OPEN',      // Título del flyer
      subtitle: 'Battle Royale · Individual',
      date: '2026-12-12',          // AAAA-MM-DD
      time: '19:00',              // Hora local de Uruguay
      slots: 100,                 // Cantidad de cupos (informativa)
      prize: 'A anunciar',
      status: 'abierto',           // abierto | proximo
      format: 'Solo',
      edition: 'TEMPORADA 01'
    },
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
    },
    {
      id: 'minecraft-1',
      game: 'minecraft',
      title: 'MINECRAFT PVP',
      subtitle: 'Combate en la arena',
      date: '2027-01-09',
      time: '17:00',
      slots: 32,
      prize: 'A anunciar',
      status: 'proximo',
      format: 'PvP',
      edition: 'PRÓXIMAMENTE'
    },
    {
      id: 'valorant-1',
      game: 'valorant',
      title: 'VALORANT SHOWDOWN',
      subtitle: 'Táctica por equipos',
      date: '2027-01-16',
      time: '20:00',
      slots: 16,
      prize: 'A anunciar',
      status: 'proximo',
      format: '5 vs 5',
      edition: 'PRÓXIMAMENTE'
    }
  ]
};
