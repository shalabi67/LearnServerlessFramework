'use strict';

module.exports.calc = async event => {
    let {number1, number2} = event;
    return number1 + number2;
};
