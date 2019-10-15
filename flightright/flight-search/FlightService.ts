import {Flight} from "./Flight";

export class FlightService {
    private static flightsMap: Map<String, Set<Flight>>;
    static initFlightsMap() {
        FlightService.flightsMap = new Map<String, Set<Flight>>();

        function createDumySet(airline: String, index : number) {
            let set = new Set<Flight>();
            for (let i = 0; i < index; i++) {
                set.add(new Flight("TXL" + i, 'AAA', airline, "", ""));
            }
            return set;
        }

        FlightService.flightsMap.set("airline1", createDumySet("airline1", 1));
        FlightService.flightsMap.set("airline2", createDumySet("airline2", 2));
        FlightService.flightsMap.set("airline3", createDumySet("airline3", 3));
    }

    static findFlight(airline:String) {
        if(FlightService.flightsMap.has(airline)) {
            return FlightService.flightsMap.get(airline);
        } else {
            return new Set<Flight>();
        }
    }
}