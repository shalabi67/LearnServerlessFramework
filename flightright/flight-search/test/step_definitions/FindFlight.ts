import {Given, Then, When} from 'cucumber';



// @ts-ignore
Given('The following flights are defined in the system', function (dataTable) {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
});
When(/^user provide an airline (.*)$/, function () {

});
Then(/^system provides a set of flights for that airline (.*) (.*) (.*) (.*) (.*)$/, function () {

});
When(/^user provide a non exiting airline (.*)$/, function () {

});

Then('system provides an empty set', function () {
    // Write code here that turns the phrase above into concrete actions
    //return 'pending';
});