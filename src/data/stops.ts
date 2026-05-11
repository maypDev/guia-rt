import type { RouteStop } from "../types/route";
const BASE_URL = import.meta.env.BASE_URL;



/**
 * Tourism route stops
 *
 * This file stores all route information in one place.
 * Later, these data will feed the map, timeline cards, stop details,
 * audio players, and AR buttons.
 *
 * Important:
 * Replace coordinates, image paths, audio paths, and AR links
 * with the final real data when available.
 */
export const routeStops: RouteStop[] = [
  {
    id: "parque-magdalena",
    number: 1,
    title: "Parque Magdalena Postel",
    shortTitle: "Parque Magdalena",
    theme: "Inicio de la ruta",
    description:
      "Punto de encuentro e introducción a la memoria histórica de la Guerra del Chaco en Oruro.",
    coordinates: [-17.970818, -67.1179976],
    image: `${BASE_URL}/images/parque-magdalena.jpg`,
    audioUrl: `${BASE_URL}/audios/01-bienvenida.wav`,
    arUrl: "https://www.kivicube.com/scenes/laiK1053QlHBiurufv2hvUDuES5Z8dXU",
    markerImage: `${BASE_URL}/markers/marker-parque.jpg`,
    googleMapsUrl: "https://www.google.com/maps/place/Parque+M.+Postel/@-17.970818,-67.1179976,17z",
    duration: "15 min",
  },
  {
    id: "museo-historico",
    number: 2,
    title: "Museo Histórico de Oruro “Ildefonso Murguía Anze”",
    shortTitle: "Museo Histórico",
    theme: "Memoria documental",
    description:
      "Espacio que permite contextualizar la Guerra del Chaco mediante objetos, fotografías, documentos y relatos históricos.",
    coordinates: [-17.9714081, -67.1161356],
    image: `${BASE_URL}/images/museo-historico.jpg`,
    audioUrl: `${BASE_URL}/audios/02-museo.mp3`,
    arUrl: "https://www.kivicube.com/scenes/laiK1053QlHBiurufv2hvUDuES5Z8dXU",
    markerImage: `${BASE_URL}/markers/marker-museo.jpg`,
    googleMapsUrl: "https://www.google.com/maps/place/Museo+Historico+Ildefonso+Murguia+Anze/@-17.9714081,-67.1161356,17z",
    duration: "40 min",
  },
  {
    id: "colegio-bolivar",
    number: 3,
    title: "Colegio Nacional Simón Bolívar",
    shortTitle: "Colegio Bolívar",
    theme: "Memoria educativa y cívica",
    description:
      "Este punto recuerda cómo la guerra también impactó en la juventud, la educación y la vida cívica de Oruro.",
    coordinates: [-17.9719164, -67.1154738],
    image: `${BASE_URL}/images/colegio-bolivar.jpg`,
    audioUrl: `${BASE_URL}/audios/03-colegio.mp3`,
    arUrl: "https://www.kivicube.com/scenes/laiK1053QlHBiurufv2hvUDuES5Z8dXU",
    markerImage: `${BASE_URL}/markers/marker-colegio.jpg`,
    googleMapsUrl: "https://www.google.com/maps/place/Colegio+Nacional+%22Sim%C3%B3n+Bol%C3%ADvar%22/@-17.9719164,-67.1154738,17z",
    duration: "20 min",
  },
  {
    id: "museo-nazaria",
    number: 4,
    title: "Museo Madre Nazaria Ignacia March",
    shortTitle: "Museo Madre Nazaria",
    theme: "Asistencia social y humanitaria",
    description:
      "La memoria de la Guerra del Chaco también se expresa en la solidaridad, el cuidado y la asistencia a quienes sufrieron sus consecuencias.",
    coordinates: [-17.9716662, -67.1141334],
    image: `${BASE_URL}/images/museo-nazaria.png`,
    audioUrl: `${BASE_URL}/audios/04-nazaria.mp3`,
    arUrl: "https://www.kivicube.com/scenes/laiK1053QlHBiurufv2hvUDuES5Z8dXU",
    markerImage: `${BASE_URL}/markers/marker-nazaria.jpg`,
    googleMapsUrl: "https://www.google.com/maps/place/Museo+Madre+Nazaria+Ignacia+March/@-17.9716662,-67.1141334,17z",
    duration: "35 min",
  },
  {
    id: "estacion-trenes",
    number: 5,
    title: "Estación de Trenes de Oruro",
    shortTitle: "Estación de Trenes",
    theme: "Movilización, despedida y memoria musical",
    description:
      "La estación representa la partida de soldados, la conexión territorial y la memoria emocional de las familias orureñas.",
    coordinates: [-17.9740178, -67.1100848],
    image: `${BASE_URL}/images/estacion-trenes.png`,
    audioUrl: `${BASE_URL}/audios/05-estacion.mp3`,
    arUrl: "https://www.kivicube.com/scenes/laiK1053QlHBiurufv2hvUDuES5Z8dXU",
    markerImage: `${BASE_URL}/markers/marker-estacion.jpg`,
    googleMapsUrl: "https://www.google.com/maps/place/Estaci%C3%B3n+de+Trenes/@-17.9740178,-67.1100848,17z",
    duration: "35 min",
  },
  {
    id: "cementerio-general",
    number: 6,
    title: "Cementerio General de Oruro",
    shortTitle: "Cementerio General",
    theme: "Homenaje y memoria",
    description:
      "Este espacio invita al respeto, la memoria y el reconocimiento de quienes formaron parte de este acontecimiento histórico.",
    coordinates: [-17.9810816, -67.1128683],
    image: `${BASE_URL}/images/cementerio-general.jpg`,
    audioUrl: `${BASE_URL}/audios/06-cementerio.mp3`,
    arUrl: "https://www.kivicube.com/scenes/laiK1053QlHBiurufv2hvUDuES5Z8dXU",
    markerImage: `${BASE_URL}/markers/marker-cementerio.jpg`,
    googleMapsUrl: "https://www.google.com/maps/place/Cementerio+General/@-17.9810816,-67.1128683,17z",
    duration: "25 min",
  },
];