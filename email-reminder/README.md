#Email Reminder
This project will create an email reminder using servreless framework.

##create project
 serverless create --template aws-nodejs --path email-reminder
 
##node
- npm init -yes
- npm install aws-sdk

##run
- serverless deploy
- serverless invoke --function dailyReminder --log
- serverless deploy --function dailyReminder