import type { RoutePathCoordinate } from "../types/route";

/**
 * Route path coordinates
 *
 * These coordinates are used only to draw the route line on the map.
 * They do not represent route stops or operational points.
 *
 * Add as many intermediate points as needed to simulate the real streets
 * followed by the route.
 */
export const routePathCoordinates: RoutePathCoordinate[] = [
  // Segment 1: Parque Magdalena Postel → Museo Histórico
  [-17.970818, -67.1179976],
  [-17.9714081, -67.1161356],

  // Segment 2: Museo Histórico → Colegio Nacional Simón Bolívar
  [-17.9716389,-67.1154738], 
  [-17.9719164, -67.1154738], //Colegio Bolívar

  // Segment 3: Colegio Bolívar → Museo Madre Nazaria
  [-17.9716389,-67.1154738],
  [-17.971951, -67.114150],
  [-17.9716662, -67.1141334], //Museo Madre Nazaria

  // Segment 4: Museo Madre Nazaria → Playa de Estacionamiento
  [-17.971951, -67.114150],
  [-17.973086, -67.110290],
  [-17.974017, -67.110515],
  [-17.974129, -67.110729],
  

  // Segment 5: Playa de Estacionamiento → Estación de Trenes
  [-17.974017, -67.110515],
  [-17.9740178, -67.1100848],
  [-17.974017, -67.110515],

  // Segment 6: Estación de Trenes → Baño cercano al Cementerio
  [-17.979130, -67.111885],
  [-17.9791962, -67.1115039],
  

  // Segment 7: Baño cercano → Cementerio General
  [-17.980001, -67.111407],
  [-17.9810867, -67.1102934],

  // Segment 8: Cementerio General → Plaza Ángel Mendizábal
  [-17.980001, -67.111407],
  [-17.9798538, -67.1118257],
];