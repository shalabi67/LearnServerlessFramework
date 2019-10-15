#API using body mapping
This example shows how to create an API using body mapping integration, 
calls a simple lambda function to add to numbers, and return results.

##create app
serverless create -t aws-nodejs -p body-mapping-api


##run locally
- npm install --save-dev serverless-offline
- on serverless.yaml file add the offline plugin
- serverless invoke local -f clac
- serverless invoke local -f calc -d "{'key':'value'}"

###intellij
create a node.js configuration on the configuration set
- working directory = ~/learn/LearnServerlessFramework/flightright/flight-search
- javascript file = /usr/local/bin/sls
- application parameters = offline start


##deploy
- serverless deploy
- sls deploy --stage prod

##get function logs
sls logs -f calc


##calling api
curl --request POST \
  --url https://2v3eorex0g.execute-api.us-east-1.amazonaws.com/dev/calc/add \
  --header "Content-Type: application/json" \
  --data "{'input':{'operand1': 10,'operand2': 20}}"
  
curl --request POST --url http://localhost:3000/calc/add --header "Content-Type: application/json" --header "Accept: */*"  --data "{'input':{'operand1': 10,'operand2': 20}}"  
##remove
sls remove 
sls remove --stage prod
