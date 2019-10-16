import {FlightRepository} from "../src/FlightRepository";
import {Flight} from "../src/Flight";
import {FlightService} from "../src/FlightService";
import { expect } from "chai";
import * as sinon from "sinon";


describe.only('FindFlight Unit Test', function() {
    let flightRepository = new FlightRepository();
    const airline = 'airline';
    it('should return a set of flights for a provided flight', function() {
        sinon.stub(flightRepository, 'findFlights').callsFake(() => {
            return createDumySet(airline, 1);
        });
        let flightService = new FlightService(flightRepository);
        let flights = flightService.findFlight(airline);
        expect(flights.size).to.eq(1);
    })
});

function createDumySet(airline: String, index : number):Set<Flight> {
    let set = new Set<Flight>();
    for (let i = 0; i < index; i++) {
        set.add(new Flight("TXL" + i, 'AAA', airline, "", ""));
    }
    return set;
}