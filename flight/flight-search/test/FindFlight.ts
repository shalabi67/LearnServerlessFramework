import {FlightService} from "../src/FlightService";
import {Flight} from "../src/Flight";
import {expect} from 'chai';
import {FlightRepository} from "../src/FlightRepository";
var flightRepository: FlightRepository;
var flightService: FlightService;
before(() => {
    flightRepository = FlightRepository.create();
});
beforeEach(() => {
    flightService = new FlightService(flightRepository);
})
describe('FindFlight', () => {
    it('should return a set of flight for provided airline', () => {
        let flights: Set<Flight>  = flightService.findFlight("airline1");
        expect(flights.size).to.eq(1);
    });
    it('should return a set of flight for provided airline', () => {
        let flights: Set<Flight>  = flightService.findFlight("airline3");
        expect(flights.size).to.eq(3);
    });
    it('should return empty collection if the airline not exist.', () => {
        let flights: Set<Flight>  = flightService.findFlight("notExist");
        expect(flights.size).to.eq(0);
    })
    it('should return empty collection if the airline has no flights.', () => {
        let flights: Set<Flight>  = flightService.findFlight("airline4");
        expect(flights.size).to.eq(0);
    })
})