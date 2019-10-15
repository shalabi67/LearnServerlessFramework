#API using body mapping
This example shows how to create a flight search microservice using serverless framework and typescript.
the example will shows how to use API gate way with body templates, and uses shared models, 

##create app
serverless create --template aws-nodejs-typescript -p flight-search


##run locally
- npm install --save-dev serverless-offline
- on serverless.yaml file add the offline plugin
- serverless invoke local -f clac
- serverless invoke local -f calc -d "{'key':'value'}"


##deploy
- serverless deploy
- sls deploy --stage prod

##get function logs
sls logs -f searchFlight

###TODO: i need to know how to do this
- sls invoke -f calc
- sls invoke -f calc 
- sls invoke -f calc -d "{'key':'value'}" --stage prod


##calling api
curl --request POST \
  --url https://gciyjk2d1k.execute-api.us-east-1.amazonaws.com/dev/flights/search \
  --header 'Content-Type: application/json' \
  --data "{'flight' : {'fromAirport': 'fromAirport 1','toAirport': 'toAirport 1','airline' : 'airline3','flightStartDate': 'flightStartDate','flightEndDate': 'flightEndDate'}}"


##remove
sls remove 
sls remove --stage prod
