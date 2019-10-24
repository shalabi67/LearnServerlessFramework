import {Given, Then, When} from 'cucumber';
import {Flight} from "../../src/Flight";
import {FlightRepository} from "../../src/FlightRepository";
import {FlightSearchRequest} from "../../src/FlightSearchRequest";
import {findFlight} from "../../handler";
import {expect} from "chai";


let dataTableRead = false;
let airline: string = '';
let nonExistAirline: string = '';
// @ts-ignore
Given('The following flights are defined in the system', function (dataTable: DataTable) {
    if(dataTableRead) {
        //ignore first row since it is header
        return;
    }

    let table: Array<Array<string>> = dataTable.rawTable;
    for(let i=1;i<table.length; i++) {
        let row = table[i];
        let flight = new Flight(row[0], row[1], row[2], row[3], row[4]);
        FlightRepository.addFlight(flight);
    }

    dataTableRead = true;

});
//@ts-ignore
When(/^user provide an airline (.*)$/, function (providedAirline: string) {
    airline = providedAirline;
});

//@ts-ignore
When(/^user provide a non exiting airline (.*)$/, function (airline: string) {
    nonExistAirline = airline;
});

Then('system provides an empty set', function () {
    findFlightsByAirline(nonExistAirline)
        .then(flights => {
            expect(flights.length).be.eq(0);
        });
});
Then(/^system provides a set of flights for that airline (.*)$/, function (count: string) {
    findFlightsByAirline(airline)
        .then(flights => {
            expect(flights.length).be.eq(parseInt(count));
        });
});

async function findFlightsByAirline(airline: string): Promise<Array<Flight>> {
    let findSearchRequest = new FlightSearchRequest("", "", airline, '', '');

    let flightsString: string = await findFlight(findSearchRequest, {});
    let flights = JSON.parse(flightsString);

    return flights;
}