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
  [-17.9642, -67.1061],
  [-17.9644, -67.1063],
  [-17.9647, -67.1066],
  [-17.9651, -67.1073],

  // Segment 2: Museo Histórico → Colegio Nacional Simón Bolívar
  [-17.9653, -67.1075],
  [-17.9657, -67.1078],
  [-17.9662, -67.1082],

  // Segment 3: Colegio Bolívar → Museo Madre Nazaria
  [-17.9665, -67.1084],
  [-17.9669, -67.1087],
  [-17.9674, -67.1091],

  // Segment 4: Museo Madre Nazaria → Playa de Estacionamiento
  [-17.9677, -67.1092],
  [-17.9680, -67.1093],
  [-17.9683, -67.1094],

  // Segment 5: Playa de Estacionamiento → Estación de Trenes
  [-17.9686, -67.1095],
  [-17.9690, -67.1097],
  [-17.9695, -67.1099],
  [-17.9700, -67.1100],

  // Segment 6: Estación de Trenes → Baño cercano al Cementerio
  [-17.9704, -67.1103],
  [-17.9709, -67.1107],
  [-17.9715, -67.1111],
  [-17.9722, -67.1116],
  [-17.9728, -67.1120],

  // Segment 7: Baño cercano → Cementerio General
  [-17.9730, -67.1121],
  [-17.9731, -67.1122],

  // Segment 8: Cementerio General → Plaza Ángel Mendizábal
  [-17.9733, -67.1125],
  [-17.9736, -67.1128],
  [-17.9740, -67.1130],
];