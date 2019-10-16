import {Flight} from "./Flight";

export class FlightRepository {
    private static flightsMap: Map<String, Set<Flight>>;
    static create():FlightRepository {
        let flightRepository = new FlightRepository();
        FlightRepository.initFlightsMap();
        return flightRepository;
    }
    private static initFlightsMap() {
        FlightRepository.flightsMap = new Map<String, Set<Flight>>();

        function createDumySet(airline: String, index : number) {
            let set = new Set<Flight>();
            for (let i = 0; i < index; i++) {
                set.add(new Flight("TXL" + i, 'AAA', airline, "", ""));
            }
            return set;
        }

        FlightRepository.flightsMap.set("airline1", createDumySet("airline1", 1));
        FlightRepository.flightsMap.set("airline2", createDumySet("airline2", 2));
        FlightRepository.flightsMap.set("airline3", createDumySet("airline3", 3));
        FlightRepository.flightsMap.set("airline4", new Set<Flight>());
    }

    findFlights(airline: String):Set<Flight>  {
        if(FlightRepository.flightsMap.has(airline)) {
            return FlightRepository.flightsMap.get(airline);
        } else {
            return new Set<Flight>();
        }
    }
}