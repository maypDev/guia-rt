````md
# Guía RT - Ruta Turística Interactiva

Proyecto web desarrollado como guía digital interactiva para la ruta turística **“Oruro del alma: Ecos del Infierno Verde”**, una propuesta orientada a la interpretación histórica, cultural y patrimonial de espacios vinculados a la memoria de la Guerra del Chaco en la ciudad de Oruro, Bolivia.

La aplicación está pensada como una página web móvil de una sola página, accesible mediante códigos QR, con mapa interactivo, paradas, audios, enlaces a experiencias de realidad aumentada y formulario de evaluación.

---

## Tecnologías utilizadas

- React
- TypeScript
- Vite
- Tailwind CSS
- Leaflet
- React Leaflet
- Lucide React
- GitHub Pages
- gh-pages

---

## Instalación del proyecto

Clonar el repositorio:

```bash
git clone https://github.com/maypDev/guia-rt.git
````

Ingresar a la carpeta del proyecto:

```bash
cd guia-rt
```

Instalar dependencias:

```bash
npm install
```

Ejecutar en modo desarrollo:

```bash
npm run dev
```

Abrir en el navegador:

```txt
http://localhost:5173/
```

---

## Comandos principales

Ejecutar el proyecto en desarrollo:

```bash
npm run dev
```

Compilar el proyecto para producción:

```bash
npm run build
```

Previsualizar la versión compilada:

```bash
npm run preview
```

Revisar errores con ESLint:

```bash
npm run lint
```

Publicar en GitHub Pages:

```bash
npm run deploy
```

---

## Flujo para actualizar la página publicada

Después de modificar el código, usar el siguiente flujo:

```bash
git status
git add .
git commit -m "feat: update route guide"
git push
npm run deploy
```

Notas:

* `git push` actualiza la rama principal del repositorio.
* `npm run deploy` actualiza la versión publicada en GitHub Pages.
* Después del deploy, esperar unos minutos y refrescar la página.

URL publicada:

```txt
https://maypDev.github.io/guia-rt/
```

---

## Estructura del proyecto

```txt
guia-rt/
├── public/
│   ├── images/
│   │   ├── parque-magdalena.jpg
│   │   ├── museo-historico.jpg
│   │   ├── colegio-bolivar.jpg
│   │   ├── museo-nazaria.jpg
│   │   ├── estacion-trenes.jpg
│   │   └── cementerio-general.jpg
│   │
│   ├── audios/
│   │   ├── 01-bienvenida.mp3
│   │   ├── 02-museo.mp3
│   │   ├── 03-colegio.mp3
│   │   ├── 04-nazaria.mp3
│   │   ├── 05-estacion.mp3
│   │   └── 06-cementerio.mp3
│   │
│   └── markers/
│       ├── marker-parque.jpg
│       ├── marker-museo.jpg
│       ├── marker-colegio.jpg
│       ├── marker-nazaria.jpg
│       ├── marker-estacion.jpg
│       └── marker-cementerio.jpg
│
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   └── Header.tsx
│   │   │
│   │   ├── sections/
│   │   │   ├── AboutSection.tsx
│   │   │   ├── FeedbackSection.tsx
│   │   │   ├── HeroSection.tsx
│   │   │   ├── RouteMapSection.tsx
│   │   │   ├── StopDetailsSection.tsx
│   │   │   └── TimelineStops.tsx
│   │   │
│   │   └── ui/
│   │       ├── ArExperienceCard.tsx
│   │       ├── AudioPlayer.tsx
│   │       └── ImageWithFallback.tsx
│   │
│   ├── data/
│   │   └── stops.ts
│   │
│   ├── types/
│   │   └── route.ts
│   │
│   ├── utils/
│   │
│   ├── App.tsx
│   ├── index.css
│   └── main.tsx
│
├── index.html
├── package.json
├── vite.config.ts
└── README.md
```

---

## Descripción de carpetas principales

### `public/images`

Contiene las imágenes principales de cada parada de la ruta.

### `public/audios`

Contiene los audios interpretativos de cada parada.

### `public/markers`

Contiene las imágenes marcador utilizadas para activar o representar las experiencias de realidad aumentada.

### `src/components/layout`

Contiene componentes generales de estructura, como el encabezado de navegación.

### `src/components/sections`

Contiene las secciones principales de la página:

* Portada
* Sobre la ruta
* Mapa
* Paradas
* Detalles
* Cierre y evaluación

### `src/components/ui`

Contiene componentes reutilizables como reproductor de audio, tarjeta RA e imagen con fallback.

### `src/data`

Contiene los datos de la ruta y sus paradas.

### `src/types`

Contiene las definiciones de tipos TypeScript.

---

## Configuración importante para GitHub Pages

En `vite.config.ts`, el proyecto usa:

```ts
base: "/guia-rt/",
```

Esto es necesario porque el sitio se publica en:

```txt
https://maypDev.github.io/guia-rt/
```

Si el nombre del repositorio cambia, también debe cambiarse esta base.

---

## Datos de las paradas

Los datos principales de la ruta se encuentran en:

```txt
src/data/stops.ts
```

Cada parada tiene esta estructura:

```ts
{
  id: "estacion-trenes",
  number: 5,
  title: "Estación de Trenes de Oruro",
  shortTitle: "Estación de Trenes",
  theme: "Movilización, despedida y memoria musical",
  description: "La estación representa la partida de soldados, la conexión territorial y la memoria emocional de las familias orureñas.",
  coordinates: [-17.9700, -67.1100],
  image: `${BASE_URL}images/estacion-trenes.jpg`,
  audioUrl: `${BASE_URL}audios/05-estacion.mp3`,
  arUrl: "https://example.com/ar/estacion-trenes",
  markerImage: `${BASE_URL}markers/marker-estacion.jpg`,
  googleMapsUrl: "https://www.google.com/maps?q=-17.9700,-67.1100",
  duration: "35 min"
}
```

---

## Actualizar imágenes, audios o enlaces RA

Para cambiar imágenes:

1. Colocar la imagen en `public/images/`.
2. Usar el mismo nombre definido en `stops.ts`.
3. Ejecutar:

```bash
git add .
git commit -m "assets: update route images"
git push
npm run deploy
```

Para cambiar audios:

1. Colocar el audio en `public/audios/`.
2. Usar formato `.mp3`.
3. Mantener los nombres definidos en `stops.ts`.

Para cambiar enlaces de realidad aumentada:

1. Abrir `src/data/stops.ts`.
2. Reemplazar el valor de `arUrl`.
3. Guardar cambios y publicar nuevamente.

---

## Formulario de evaluación

La sección final usa un formulario de Google Forms para recoger opiniones del visitante.

Formulario actual:

```txt
https://docs.google.com/forms/d/e/1FAIpQLSeTCHFlGHJYPLXuk19dp71vUveSkvOYVWKamD1q-KUgn50nyQ/viewform
```

El enlace se configura en:

```txt
src/components/sections/FeedbackSection.tsx
```

---

## Recomendaciones de desarrollo

Antes de publicar cambios:

```bash
npm run build
```

Luego:

```bash
git add .
git commit -m "feat: describe your change"
git push
npm run deploy
```

Para ver cambios recientes en la página publicada, refrescar con:

```txt
Ctrl + F5
```

---

## Estado del proyecto

Versión actual:

* Página web de una sola página.
* Diseño móvil primero.
* Mapa interactivo.
* Seis paradas turísticas.
* Detalle por parada.
* Audios preparados para cada punto.
* Botones para realidad aumentada.
* Formulario final de evaluación.
* Publicación mediante GitHub Pages.

````

Después de agregarlo, ejecuta:

```bash
git add README.md
git commit -m "docs: add project readme"
git push
````
