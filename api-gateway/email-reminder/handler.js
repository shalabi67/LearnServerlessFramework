'use strict';

module.exports.sendDailyReminder = async event => {
    var AWS = require('aws-sdk');
    AWS.config.update({region:'us-east-1'});
    var ses = new AWS.SES();
    var fs = require('fs');

    var emailHtml = fs.readFileSync('./dailyReminder.html', 'utf-8');

    var toAndFromAdress = 'shalabicloud@gmail.com'
    var params = {
        Destination: {
            ToAddresses: [toAndFromAdress]
        },
        Message: {
            Body: {
                Html: {
                    Charset: "UTF-8",
                    Data: emailHtml
                },
                Text: {
                    Charset: "UTF-8",
                    Data: "Remember to continue helping the Woof Garden in your Pluralsight course!"
                }
            },
            Subject: {
                Charset: "UTF-8",
                Data: "Woof Garden Reminder"
            }
        },
        ReplyToAddresses: [toAndFromAdress],
        Source: toAndFromAdress,
    };

    ses.sendEmail(params, function(err, data) {
        console.log(data);
        // an error occurred
        if (err) console.log(err, err.stack);
        // successful response
        else callback(null, data);
    });

};

module.exports.sendWeekendReminder = async event => {
    var AWS = require('aws-sdk');
    AWS.config.update({region:'us-east-1'});
    var ses = new AWS.SES();
    var fs = require('fs');

    var emailHtml = fs.readFileSync('./weekendReminder.html', 'utf-8');

    var toAndFromAdress = 'shalabicloud@gmail.com'
    var params = {
        Destination: {
            ToAddresses: [toAndFromAdress]
        },
        Message: {
            Body: {
                Html: {
                    Charset: "UTF-8",
                    Data: emailHtml
                },
                Text: {
                    Charset: "UTF-8",
                    Data: "Here's a weekend Remember that puppies are adorable!!"
                }
            },
            Subject: {
                Charset: "UTF-8",
                Data: "Woof Garden Reminder"
            }
        },
        ReplyToAddresses: [toAndFromAdress],
        Source: toAndFromAdress,
    };

    ses.sendEmail(params, function(err, data) {
        console.log(data);
        // an error occurred
        if (err) console.log(err, err.stack);
        // successful response
        else callback(null, data);
    });
};