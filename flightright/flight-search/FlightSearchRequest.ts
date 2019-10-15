export class FlightSearchRequest {
    fromAirport: String;
    toAirport: String;
    airline: String;
    flightStartDate: String;
    flightEndDate: String;


    constructor(fromAirport: String, toAirport: String, airline: String, flightStartDate: String, flightEndDate: String) {
        this.fromAirport = fromAirport;
        this.toAirport = toAirport;
        this.airline = airline;
        this.flightStartDate = flightStartDate;
        this.flightEndDate = flightEndDate;
    }
}