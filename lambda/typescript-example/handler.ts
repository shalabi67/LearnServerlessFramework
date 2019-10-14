import { APIGatewayProxyHandler } from 'aws-lambda';
import 'source-map-support/register';
import {Person} from "./Person";
/*
simple example shows how to use type script and set some type compile configurations
    "strict": true,
    "removeComments": true,
 */
export const hello: APIGatewayProxyHandler = async (_event, _context) => {
  let person: Person = new Person('Mohammad', 'Shalabi');
  return {
    statusCode: 200,
    body: JSON.stringify(person, null, 2),
  };
}
