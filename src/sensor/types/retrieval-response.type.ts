export default interface RetrievalResponse {
  location: Location;
  area: Area;
  coordinates: Coordinates;
}

interface Location {
  lastLocationTime: string;
  area: Area;
  civicAddress: CivicAddress;
}

interface Area {
  areaType: 'Circle';
  center: Coordinates;
  radius: number;
}

interface Coordinates {
  latitude: number;
  longitude: number;
}

interface CivicAddress {
  country: string;
  A1: string; // Podrías querer renombrar esta propiedad para que tenga un nombre más descriptivo.
  A2: string; // Igualmente aquí, considera renombrar para mejorar la claridad.
}
