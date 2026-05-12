import type { RouteMoment } from "../types/route";

const BASE_URL = import.meta.env.BASE_URL;

/**
 * Full route itinerary moments
 *
 * This array includes:
 * - Meeting points
 * - Introductory moments
 * - Interpretive stops
 * - Rest points
 * - Transitions
 * - Service points
 * - Closing points
 *
 * Coordinates are currently reference values.
 * Replace them with exact coordinates when you confirm the final route.
 */
export const routeMoments: RouteMoment[] = [
  {
    id: "encuentro-parque-magdalena",
    order: 1,
    type: "meeting",
    startTime: "08:30",
    endTime: "08:45",
    duration: "15 min",
    place: "Parque Magdalena Postel",
    activity: "Encuentro y bienvenida",
    theme: "Punto de encuentro",
    description:
      "Recepción de participantes, registro, presentación del guía o responsable de la ruta, explicación general del recorrido y recomendaciones básicas de seguridad, puntualidad y convivencia.",
    coordinates: [-17.9642, -67.1061],
    googleMapsUrl: "https://www.google.com/maps?q=-17.9642,-67.1061",
    image: `${BASE_URL}images/parque-magdalena.jpg`,
    markerLabel: "E",
    hasInterpretiveContent: false,
    hasAudio: false,
    hasAR: false,
    isMapPoint: true,
  },
  {
    id: "introduccion-parque-magdalena",
    order: 2,
    type: "intro",
    startTime: "08:45",
    endTime: "09:00",
    duration: "15 min",
    place: "Parque Magdalena Postel",
    activity: "Introducción temática",
    theme: "Contextualización inicial",
    description:
      "Contextualización breve sobre Oruro y la memoria histórica de la Guerra del Chaco. Presentación del mapa de la ruta, explicación del objetivo del recorrido y uso del primer código QR introductorio.",
    coordinates: [-17.9642, -67.1061],
    googleMapsUrl: "https://www.google.com/maps?q=-17.9642,-67.1061",
    image: `${BASE_URL}images/parque-magdalena.jpg`,
    audioUrl: `${BASE_URL}audios/01-bienvenida.mp3`,
    arUrl: "https://example.com/ar/intro",
    markerImage: `${BASE_URL}markers/marker-parque.jpg`,
    hasInterpretiveContent: false,
    hasAudio: true,
    hasAR: true,
    isMapPoint: false,
  },
  {
    id: "museo-historico",
    order: 3,
    type: "interpretive",
    startTime: "09:00",
    endTime: "09:40",
    duration: "40 min",
    place: "Museo Histórico de Oruro “Ildefonso Murguía Anze”",
    activity: "Visita interpretativa",
    theme: "Memoria documental",
    description:
      "Explicación sobre la memoria documental e histórica de la Guerra del Chaco, con apoyo en objetos, fotografías, documentos o referencias museográficas vinculadas al conflicto.",
    coordinates: [-17.9651, -67.1073],
    googleMapsUrl: "https://www.google.com/maps?q=-17.9651,-67.1073",
    image: `${BASE_URL}images/museo-historico.jpg`,
    audioUrl: `${BASE_URL}audios/02-museo.mp3`,
    arUrl: "https://example.com/ar/museo-historico",
    markerImage: `${BASE_URL}markers/marker-museo.jpg`,
    routeStopNumber: 1,
    markerLabel: "1",
    hasInterpretiveContent: true,
    hasAudio: true,
    hasAR: true,
    isMapPoint: true,
  },
  {
    id: "colegio-bolivar",
    order: 4,
    type: "interpretive",
    startTime: "09:40",
    endTime: "10:00",
    duration: "20 min",
    place: "Colegio Nacional Simón Bolívar",
    activity: "Interpretación externa o coordinada",
    theme: "Memoria educativa y cívica",
    description:
      "Explicación sobre la dimensión educativa, cívica y generacional vinculada a la Guerra del Chaco, destacando el papel de la formación patriótica y la memoria institucional.",
    coordinates: [-17.9662, -67.1082],
    googleMapsUrl: "https://www.google.com/maps?q=-17.9662,-67.1082",
    image: `${BASE_URL}images/colegio-bolivar.jpg`,
    audioUrl: `${BASE_URL}audios/03-colegio.mp3`,
    arUrl: "https://example.com/ar/colegio-bolivar",
    markerImage: `${BASE_URL}markers/marker-colegio.jpg`,
    routeStopNumber: 2,
    markerLabel: "2",
    hasInterpretiveContent: true,
    hasAudio: true,
    hasAR: true,
    isMapPoint: true,
  },
  {
    id: "museo-nazaria",
    order: 5,
    type: "interpretive",
    startTime: "10:00",
    endTime: "10:35",
    duration: "35 min",
    place: "Museo Madre Nazaria Ignacia March",
    activity: "Visita interpretativa",
    theme: "Asistencia social y humanitaria",
    description:
      "Desarrollo de la dimensión social, espiritual y humanitaria del periodo chaqueño, resaltando la asistencia a heridos, huérfanos, familias afectadas y sectores vulnerables.",
    coordinates: [-17.9674, -67.1091],
    googleMapsUrl: "https://www.google.com/maps?q=-17.9674,-67.1091",
    image: `${BASE_URL}images/museo-nazaria.jpg`,
    audioUrl: `${BASE_URL}audios/04-nazaria.mp3`,
    arUrl: "https://example.com/ar/museo-nazaria",
    markerImage: `${BASE_URL}markers/marker-nazaria.jpg`,
    routeStopNumber: 3,
    markerLabel: "3",
    hasInterpretiveContent: true,
    hasAudio: true,
    hasAR: true,
    isMapPoint: true,
  },
  {
    id: "descanso-estacionamiento",
    order: 6,
    type: "rest",
    startTime: "10:35",
    endTime: "11:05",
    duration: "30 min",
    place: "Playa de Estacionamiento",
    activity: "Parada técnica, recreativa y alimentaria",
    theme: "Descanso y refrigerio",
    description:
      "Descanso breve de los participantes, desarrollo de una actividad recreativa relacionada con la memoria histórica de la ruta y distribución de refrigerio. Este punto funciona como espacio de apoyo logístico, no como atractivo turístico histórico.",
    coordinates: [-17.9683, -67.1094],
    googleMapsUrl: "https://www.google.com/maps?q=-17.9683,-67.1094",
    markerLabel: "D",
    hasInterpretiveContent: false,
    hasAudio: false,
    hasAR: false,
    isMapPoint: true,
  },
  {
    id: "transicion-estacion-trenes",
    order: 7,
    type: "transition",
    startTime: "11:05",
    endTime: "11:20",
    duration: "15 min",
    place: "Desplazamiento hacia la Estación de Trenes",
    activity: "Transición interpretativa",
    theme: "Movilidad y despedida",
    description:
      "Durante el traslado se introduce el tema de la movilidad, la despedida de los soldados, el viaje hacia el frente de guerra y el papel del ferrocarril en el contexto chaqueño.",
    hasInterpretiveContent: false,
    hasAudio: false,
    hasAR: false,
    isMapPoint: false,
  },
  {
    id: "estacion-trenes",
    order: 8,
    type: "interpretive",
    startTime: "11:20",
    endTime: "11:55",
    duration: "35 min",
    place: "Estación de Trenes de Oruro",
    activity: "Interpretación histórica y musical",
    theme: "Movilización, despedida y memoria musical",
    description:
      "Explicación sobre el transporte de soldados, víveres y recursos, además de las despedidas familiares. Se incorpora la referencia a la memoria musical de “Adiós Oruro del alma”.",
    coordinates: [-17.9700, -67.1100],
    googleMapsUrl: "https://www.google.com/maps?q=-17.9700,-67.1100",
    image: `${BASE_URL}images/estacion-trenes.jpg`,
    audioUrl: `${BASE_URL}audios/05-estacion.mp3`,
    arUrl: "https://example.com/ar/estacion-trenes",
    markerImage: `${BASE_URL}markers/marker-estacion.jpg`,
    routeStopNumber: 4,
    markerLabel: "4",
    hasInterpretiveContent: true,
    hasAudio: true,
    hasAR: true,
    isMapPoint: true,
  },
  {
    id: "transicion-cementerio",
    order: 9,
    type: "transition",
    startTime: "11:55",
    endTime: "12:10",
    duration: "15 min",
    place: "Desplazamiento hacia el Cementerio General",
    activity: "Transición reflexiva",
    theme: "Preparación del cierre memorial",
    description:
      "Traslado hacia el Cementerio General e introducción al cierre simbólico del recorrido, destacando la importancia del homenaje a los combatientes de la Guerra del Chaco.",
    hasInterpretiveContent: false,
    hasAudio: false,
    hasAR: false,
    isMapPoint: false,
  },
  {
    id: "bano-cementerio",
    order: 10,
    type: "service",
    startTime: "12:10",
    endTime: "12:20",
    duration: "10 min",
    place: "Baño público cercano al Cementerio General",
    activity: "Parada técnica breve",
    theme: "Pausa técnica",
    description:
      "Pausa corta para uso de baño, hidratación si corresponde y reorganización del grupo. Además, se explican las normas de respeto para el ingreso al Cementerio General.",
    coordinates: [-17.9728, -67.1120],
    googleMapsUrl: "https://www.google.com/maps?q=-17.9728,-67.1120",
    markerLabel: "B",
    hasInterpretiveContent: false,
    hasAudio: false,
    hasAR: false,
    isMapPoint: true,
  },
  {
    id: "cementerio-general",
    order: 11,
    type: "interpretive",
    startTime: "12:20",
    endTime: "12:45",
    duration: "25 min",
    place: "Cementerio General de Oruro",
    activity: "Homenaje y reflexión histórica",
    theme: "Homenaje y memoria",
    description:
      "Visita al espacio conmemorativo relacionado con los combatientes de la Guerra del Chaco. Reflexión sobre sacrificio, memoria, identidad, patrimonio y reconocimiento a los soldados.",
    coordinates: [-17.9731, -67.1122],
    googleMapsUrl: "https://www.google.com/maps?q=-17.9731,-67.1122",
    image: `${BASE_URL}images/cementerio-general.jpg`,
    audioUrl: `${BASE_URL}audios/06-cementerio.mp3`,
    arUrl: "https://example.com/ar/cementerio-general",
    markerImage: `${BASE_URL}markers/marker-cementerio.jpg`,
    routeStopNumber: 5,
    markerLabel: "5",
    hasInterpretiveContent: true,
    hasAudio: true,
    hasAR: true,
    isMapPoint: true,
  },
  {
    id: "transicion-plaza-mendizabal",
    order: 12,
    type: "transition",
    startTime: "12:45",
    endTime: "13:00",
    duration: "15 min",
    place: "Desplazamiento hacia Plaza Ángel Mendizábal",
    activity: "Transición de cierre",
    theme: "Recapitulación final",
    description:
      "Traslado final del grupo hacia el punto de cierre. Se realiza una breve recapitulación del recorrido y se prepara la actividad final de retroalimentación.",
    hasInterpretiveContent: false,
    hasAudio: false,
    hasAR: false,
    isMapPoint: false,
  },
  {
    id: "cierre-plaza-mendizabal",
    order: 13,
    type: "closing",
    startTime: "13:00",
    endTime: "13:15",
    duration: "15 min",
    place: "Plaza Ángel Mendizábal",
    activity: "Cierre de la ruta",
    theme: "Encuesta, fotografía y despedida",
    description:
      "Agradecimiento a los participantes, reflexión final, retroalimentación breve, aplicación de encuesta de satisfacción si corresponde, fotografía grupal y despedida.",
    coordinates: [-17.9740, -67.1130],
    googleMapsUrl: "https://www.google.com/maps?q=-17.9740,-67.1130",
    markerLabel: "F",
    hasInterpretiveContent: false,
    hasAudio: false,
    hasAR: false,
    isMapPoint: true,
  },
];

/**
 * Moments that should appear as markers on the map.
 */
export const mapRouteMoments = routeMoments.filter(
  (moment) => moment.isMapPoint && moment.coordinates
);

/**
 * Only the main interpretive stops.
 * These moments are used in the stop cards and detailed stop sections.
 */
export const interpretiveRouteMoments = routeMoments.filter(
  (moment) => moment.type === "interpretive"
);

/**
 * Operational support points.
 * These moments help organize the visitor experience.
 */
export const supportRouteMoments = routeMoments.filter((moment) =>
  ["meeting", "intro", "rest", "service", "closing"].includes(moment.type)
);