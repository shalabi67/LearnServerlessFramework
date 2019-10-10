'use strict';

module.exports.sum = async event => {
    let {number1, number2} = JSON.parse(event.body);
    return {
        statusCode: 200,
        body: JSON.stringify(
          {
            num1: number1,
              num2: number2,
              sum: number1 + number2
          },
          null,
          2
        ),
    };

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};
