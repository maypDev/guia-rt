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
    markerImage: `${BASE_URL}/markers/marker-parque.jpeg`,
    googleMapsUrl: "https://www.google.com/maps/place/Parque+M.+Postel/@-17.970818,-67.1179976,17z/data=!4m14!1m7!3m6!1s0x93e2b0961d8fffff:0xdca37ba55d12e377!2sParque+M.+Postel!8m2!3d-17.970818!4d-67.1179976!16s%2Fg%2F11y02gnh8g!3m5!1s0x93e2b0961d8fffff:0xdca37ba55d12e377!8m2!3d-17.970818!4d-67.1179976!16s%2Fg%2F11y02gnh8g?entry=ttu&g_ep=EgoyMDI2MDUwNi4wIKXMDSoASAFQAw%3D%3D",
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
    markerImage: `${BASE_URL}/markers/marker-museo.jpeg`,
    googleMapsUrl: "https://www.google.com/maps/place/Museo+Historico+Ildefonso+Murguia+Anze/@-17.9714081,-67.1161356,17z/data=!4m14!1m7!3m6!1s0x93e2b1e769025d4b:0xbc509b5b57d6061d!2sMuseo+Historico+Ildefonso+Murguia+Anze!8m2!3d-17.9714081!4d-67.1161356!16s%2Fg%2F11hzl_mmtt!3m5!1s0x93e2b1e769025d4b:0xbc509b5b57d6061d!8m2!3d-17.9714081!4d-67.1161356!16s%2Fg%2F11hzl_mmtt?entry=ttu&g_ep=EgoyMDI2MDUwNi4wIKXMDSoASAFQAw%3D%3D",
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
    markerImage: `${BASE_URL}/markers/marker-colegio.jpeg`,
    googleMapsUrl: "https://www.google.com/maps/place/Colegio+Nacional+%22Sim%C3%B3n+Bol%C3%ADvar%22/@-17.9719164,-67.1154738,17z/data=!4m14!1m7!3m6!1s0x93e2b0be70b66429:0x11ed60e177390670!2sColegio+Nacional+%22Sim%C3%B3n+Bol%C3%ADvar%22!8m2!3d-17.9719164!4d-67.1154738!16s%2Fg%2F1tm6b0jt!3m5!1s0x93e2b0be70b66429:0x11ed60e177390670!8m2!3d-17.9719164!4d-67.1154738!16s%2Fg%2F1tm6b0jt?entry=ttu&g_ep=EgoyMDI2MDUwNi4wIKXMDSoASAFQAw%3D%3D",
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
    markerImage: `${BASE_URL}/markers/marker-nazaria.jpeg`,
    googleMapsUrl: "https://www.google.com/maps/place/Museo+Madre+Nazaria+Ignacia+March/@-17.9716662,-67.1141334,17z/data=!4m14!1m7!3m6!1s0x93e2b196ca092499:0xf37613633c391082!2sMuseo+Madre+Nazaria+Ignacia+March!8m2!3d-17.9716662!4d-67.1141334!16s%2Fg%2F11h79z_1wc!3m5!1s0x93e2b196ca092499:0xf37613633c391082!8m2!3d-17.9716662!4d-67.1141334!16s%2Fg%2F11h79z_1wc?entry=ttu&g_ep=EgoyMDI2MDUwNi4wIKXMDSoASAFQAw%3D%3D",
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
    markerImage: `${BASE_URL}/markers/marker-estacion.jpeg`,
    googleMapsUrl: "https://www.google.com/maps/place/Estaci%C3%B3n+de+Trenes/@-17.9740178,-67.1100848,17z/data=!4m14!1m7!3m6!1s0x93e2b0b8e7583359:0x519d777361ae5745!2sEstaci%C3%B3n+de+Trenes!8m2!3d-17.9740178!4d-67.1100848!16s%2Fg%2F1tdrydf5!3m5!1s0x93e2b0b8e7583359:0x519d777361ae5745!8m2!3d-17.9740178!4d-67.1100848!16s%2Fg%2F1tdrydf5?entry=ttu&g_ep=EgoyMDI2MDUwNi4wIKXMDSoASAFQAw%3D%3D",
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
    markerImage: `${BASE_URL}/markers/marker-cementerio.jpeg`,
    googleMapsUrl: "https://www.google.com/maps/place/Cementerio+General/@-17.9810867,-67.1102934,17z/data=!4m14!1m7!3m6!1s0x93e2b0c696073699:0x93f2975bbd4b3be8!2sCementerio+General!8m2!3d-17.9810867!4d-67.1102934!16s%2Fg%2F11fd6dfw_g!3m5!1s0x93e2b0c696073699:0x93f2975bbd4b3be8!8m2!3d-17.9810867!4d-67.1102934!16s%2Fg%2F11fd6dfw_g?entry=ttu&g_ep=EgoyMDI2MDUwNi4wIKXMDSoASAFQAw%3D%3D",
    duration: "25 min",
  },
];