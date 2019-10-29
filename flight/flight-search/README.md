#API using body mapping
This example shows how to create a flight search microservice using serverless framework and typescript.
the example will shows how to use API gate way with body templates, and uses shared models, 

##create app
serverless create --template aws-nodejs-typescript -p flight-search


##run locally
- npm install --save-dev serverless serverless-offline
- on serverless.yaml file add the offline plugin
- serverless invoke local -f searchFlight -d '{"fromAirport":"fromAirport1", "toAirport":"toAirport1", "airline":"airline1", "flightStartDate":"flightStartDate1", "flightEndDate":"flightEndDate1"}'


##deploy
- serverless deploy
- sls deploy --stage prod

##get function logs
sls logs -f searchFlight

##calling api
curl --request POST \
  --url https://gciyjk2d1k.execute-api.us-east-1.amazonaws.com/dev/flights/search \
  --header 'Content-Type: application/json' \
  --data "{'flight' : {'fromAirport': 'fromAirport 1','toAirport': 'toAirport 1','airline' : 'airline3','flightStartDate': 'flightStartDate','flightEndDate': 'flightEndDate'}}"

##Testing
###setup unit tests
- npm install sinon mocha cucumber chai @types/cucumber @types/sinon @types/chai @types/mocha --save-dev
- npm install --save-dev cucumber-html-reporter
- npm test

###cucumber
- mkdir reports
- npm run-script cucumber

###setup integration tests  
WORKS only with js files this is why we need to build sls webpack
- npm install --save-dev serverless-mocha-plugin
- add to serverless-mocha-plugin plugins section
- create test for your function: sls create test -f searchFlight
- build: sls webpack
- sls invoke test --root .webpack/service




##remove
sls remove 
sls remove --stage prod
