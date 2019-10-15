import 'source-map-support/register';
import {Flight} from "./Flight";
import {FlightSearchRequest} from "./FlightSearchRequest";
import {FlightService} from "./FlightService";
FlightService.initFlightsMap();
export const findFlight = async (event: FlightSearchRequest, _context) => {
  let flights: Set<Flight> = FlightService.findFlight(event.airline);
  return JSON.stringify(Array.from(flights));
};
