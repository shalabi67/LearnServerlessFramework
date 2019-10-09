#First serverless framework example
This example shows how to create a simple lambda function, and test it.

##create app
serverless create -t aws-nodejs -p sum-api


##run locally
- serverless invoke local -f sum-api
- serverless invoke local -f sum-api -d "{'key':'value'}"


##deploy
- serverless deploy
- sls deploy --stage prod

###TODO: i need to know how to do this
- sls invoke -f calc
- sls invoke -f calc 
- sls invoke -f calc -d "{'key':'value'}" --stage prod


##calling api
curl --request POST \
  --url https://4dnxqlx010.execute-api.us-east-1.amazonaws.com/dev/clac/sum \
  --data '{"number1": 10,"number2": 20}'
  
##remove
sls remove 
sls remove --stage prod
