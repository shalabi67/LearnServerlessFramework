import 'source-map-support/register';
import {Flight} from "./src/Flight";
import {FlightSearchRequest} from "./src/FlightSearchRequest";
import {FlightService} from "./src/FlightService";
import {FlightRepository} from "./src/FlightRepository";
let flightRepository = FlightRepository.create();
export const findFlight = async (event: FlightSearchRequest, _context) => {
  let flightService = new FlightService(flightRepository);
  let flights: Set<Flight> = flightService.findFlight(event.airline);
  return JSON.stringify(Array.from(flights));
};
