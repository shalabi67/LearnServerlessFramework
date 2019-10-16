import {findFlight} from "../handler";
import {FlightSearchRequest} from "../src/FlightSearchRequest";
import { expect } from "chai";

describe('findFlightHandler', () => {
    it("should return a set of flight for exiting airline.", async () => {
        let findSearchRequest = new FlightSearchRequest("", "", 'airline1', '', '');

        let flightsString: string = await findFlight(findSearchRequest, {});
        let flights = JSON.parse(flightsString);

        expect(flights.length).be.eq(1);
    })
});