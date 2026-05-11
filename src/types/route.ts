/**
 * RouteStop type
 *
 * Defines the data structure for each stop of the tourism route.
 * This keeps the project clean, scalable, and easier to maintain.
 */
export type RouteStop = {
  id: string;
  number: number;
  title: string;
  shortTitle: string;
  theme: string;
  description: string;
  coordinates: [number, number];
  image: string;
  audioUrl: string;
  arUrl: string;
  markerImage?: string;
  googleMapsUrl: string;
  duration: string;
};