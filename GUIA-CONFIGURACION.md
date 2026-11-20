# Cómo configurar Charrúa Gaming sin programar

Todo se cambia desde **`config.js`**. No necesitás editar `index.html`, `app.js` ni `styles.css`.

## Cambiar contactos

Buscá al principio de `config.js`:

```js
instagram: 'https://www.instagram.com/TU_USUARIO/',
whatsappChannel: 'https://www.whatsapp.com/channel/TU_CANAL',
email: 'TU_CORREO@ejemplo.com',
```

Reemplazá los ejemplos por tus datos reales, manteniendo las comillas.

## Añadir un torneo

Dentro de `tournaments: [ ... ]`, copiá un bloque completo de torneo, poné una coma entre bloques y cambiá sus datos. Ejemplo:

```js
{
  id: 'nuevo-torneo-2027',
  game: 'fortnite',
  title: 'COPA CHARRÚA',
  subtitle: 'Competencia individual',
  date: '2027-02-14',
  time: '20:00',
  slots: 64,
  prize: 'A confirmar',
  status: 'abierto',
  format: 'Solo',
  edition: 'EDICIÓN 02'
}
```

**Importante:** `id` debe ser diferente en cada torneo. Las opciones de `game` son `fortnite`, `clash`, `minecraft`, `valorant` u `otro`. Los cuatro primeros usan ilustraciones incluidas en la web; `otro` utiliza una ilustración genérica. `status: 'abierto'` habilita la inscripción y `status: 'proximo'` la deshabilita.

## Eliminar un torneo

Borrá el bloque entero desde `{` hasta `}` y corregí la coma entre los bloques. Para dejar la web sin torneos, poné:

```js
tournaments: []
```

## Editar desde GitHub

1. Abrí el repositorio y entrá a `config.js`.
2. Hacé clic en el lápiz **Edit this file**.
3. Cambiá los datos y pulsá **Commit changes**.
4. GitHub Pages publicará la versión nueva después de unos minutos.

## Límites de esta versión

- Los flyers se componen automáticamente usando el juego y los textos del torneo; las ilustraciones están en `assets/`.
- Los cupos son informativos, **no** se descuentan automáticamente.
- No se guardan inscripciones. El jugador copia el mensaje y lo envía manualmente por Instagram.
- Los torneos y contactos son públicos en GitHub; nunca agregues contraseñas o tokens.
