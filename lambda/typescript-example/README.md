#typescript-example
this is a simple example on how to use tpescript with serverless framework.

##create project
- serverless create --template aws-nodejs-typescript -p typescript-example
- cd typescript-example
- npm install

##deploy
- serverless deploy

##tsconfig.json
- force strict compilation "strict": true
- remove comments "removeComments": true