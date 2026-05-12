/** * RouteStop type * * Defines the data structure for each stop of the tourism route. * This keeps the project clean, scalable, and easier to maintain. */ export type RouteStop = { id: string; number: number; title: string; shortTitle: string; theme: string; description: string; coordinates: [number, number]; image: string; audioUrl: string; arUrl: string; markerImage?: string; googleMapsUrl: string; duration: string; };

/**
 * RouteMomentType
 *
 * Defines the functional category of each moment in the route.
 * This helps separate historical stops from operational points,
 * transitions, rest points, service points and closing moments.
 */
export type RouteMomentType =
  | "meeting"
  | "intro"
  | "interpretive"
  | "rest"
  | "transition"
  | "service"
  | "closing";

/**
 * RouteMoment
 *
 * Represents every moment of the tourism route itinerary.
 * It can be an interpretive stop, operational point, rest point,
 * transition, service point or closing point.
 */
export type RouteMoment = {
  id: string;
  order: number;
  type: RouteMomentType;

  startTime: string;
  endTime: string;
  duration: string;

  place: string;
  activity: string;
  theme: string;
  description: string;

  coordinates?: [number, number];
  googleMapsUrl?: string;

  image?: string;
  audioUrl?: string;
  arUrl?: string;
  markerImage?: string;

  /**
   * Used for the main interpretive stops.
   * Example: 1, 2, 3, 4, 5.
   */
  routeStopNumber?: number;

  /**
   * Used for map markers.
   * Example: "E", "1", "D", "B", "F".
   */
  markerLabel?: string;

  hasInterpretiveContent: boolean;
  hasAudio: boolean;
  hasAR: boolean;
  isMapPoint: boolean;
};

/**
 * RoutePathCoordinate
 *
 * Represents a technical coordinate used only to draw the route line.
 * These points do not appear as map markers.
 */
export type RoutePathCoordinate = [number, number];