var { Given, When, Then } = require('cucumber');
var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');

chai.use(chaiAsPromised);
var expect = chai.expect;

let base = require('../pages/basepage.js')
var learningpage = require('../pages/learningPage.js')

/*
When(/^user navigate to learning page$/, function () {

    return base.launchBrowser("https://docs.angularjs.org/tutorial");
    // return browser.get("https://docs.angularjs.org/tutorial");
});

Then(/^user should see learning content$/, function () {

    return learningpage.clickBootstrappingLink();
    //return element(by.css('[href="tutorial/step_00"]')).click();
});
*/
