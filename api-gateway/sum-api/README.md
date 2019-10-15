#First serverless framework example
This example shows how to create a simple lambda function, and test it.

##create app
serverless create -t aws-nodejs -p sum-api


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
  --url https://4dnxqlx010.execute-api.us-east-1.amazonaws.com/dev/clac/sum \
  --data '{"number1": 10,"number2": 20}'
  
##remove
sls remove 
sls remove --stage prod
