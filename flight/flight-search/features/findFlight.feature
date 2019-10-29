@Flight @FindFlight
Feature: Find Flight
  this will find all flights based on a given airline
  Background:
    Given The following flights are defined in the system
    | fromAirport | toAirport |      airline        |     flightStartDate   | flightEndDate        |
    | TXL         | CDG       | france airlines     | 2019/10/10TS10:12:50  | 2019/10/10TS12:12:50 |
    | CDG         | TXL       | france airlines     | 2019/10/10TS10:12:50  | 2019/10/10TS12:12:50 |
    | TXL         | CFR       | berlin airlines     | 2019/07/10TS10:12:50  | 2019/07/10TS12:12:50 |
    | CFR         | TXL       | berlin airlines     | 2019/08/10TS10:12:50  | 2019/08/10TS12:12:50 |
    | TXL         | CDG       | berlin airlines     | 2019/09/10TS10:12:50  | 2019/09/10TS12:12:50 |

  @main
  Scenario Outline: system returns a set of flights for a specified airline.
    When user provide an airline <airline>
    Then system provides a set of flights for that airline <count>
    Examples:
      | airline         | count     |
      | france airlines | 2         |
      | berlin airlines | 3         |
      | france airlines | 2         |


  @alternative
  Scenario Outline: system returns an empty set for a non exiting airline.
    When user provide a non exiting airline <airline>
    Then system provides an empty set
    Examples:
      | airline |
      | aaa     |
