#First serverless framework example
This example shows how to create a simple lambda function, and test it.

##create app
serverless create -t aws-nodejs -p first


##run locally
- serverless invoke local -f hello
- serverless invoke local -f hello -d "{'key':'value'}"


##deploy
- serverless deploy
- sls invoke -f hello
- sls invoke -f hello -d "{'key':'value'}"

- sls deploy --stage prod
- sls invoke -f hello -d "{'key':'value'}" --stage prod

##remove
sls remove 
sls remove --stage prod
