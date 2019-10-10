# greeting lambda
this example shows how to pass query string parameters and validate them at Api Gateway. 
it also shows how to have a path parameter.
####notice reqValidatorName: queryStringValidator in serverless.yaml file.

##setup
- sls create -t aws-nodejs -p greeting
- cd greeting
- npm init -yes
- npm install moment

## deploy
- sls deploy


## creating manual api gateway.
- api-gateway-lambda.png
- api-gateway-test.png
