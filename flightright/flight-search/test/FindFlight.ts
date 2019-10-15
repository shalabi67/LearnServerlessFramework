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
describe('Find flight based on airline', () => {
    it('test airline1 airline ', () => {
        let flights: Set<Flight>  = flightService.findFlight("airline1");
        expect(flights.size).to.eq(1);
    });
    it('find non exiting flight', () => {
        let flights: Set<Flight>  = flightService.findFlight("notExist");
        expect(flights.size).to.eq(0);
    })
})