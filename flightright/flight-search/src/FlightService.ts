import {Flight} from "./Flight";
import {FlightRepository} from "./FlightRepository";

export class FlightService {
    private flightRepository: FlightRepository;

    constructor(flightRepository: FlightRepository) {
        this.flightRepository = flightRepository;
    }

    findFlight(airline:String): Set<Flight> {
        return this.flightRepository.findFlights(airline);
    }
}