import {FlightService} from "../FlightService";
import {Flight} from "../Flight";
import {expect} from 'chai';

before(() => {
    FlightService.initFlightsMap()
})
describe('Find flight based on airline', () => {
    it('test airline1 airline ', () => {
        let flights: Set<Flight>  = FlightService.findFlight("airline1");
        expect(flights.size).to.eq(1);
    });
    it('find non exiting flight', () => {
        let flights: Set<Flight>  = FlightService.findFlight("notExist");
        expect(flights.size).to.eq(0);
    })
})