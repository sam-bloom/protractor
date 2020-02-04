require('./cucumber-hooks.js');
var { Given, When, Then } = require('cucumber');
var { Before, BeforeAll, After, AfterAll } = require('cucumber');

var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');

chai.use(chaiAsPromised);
var expect = chai.expect;


let base = require('../pages/basepage.js')
var learningpage = require('../pages/learningPage.js')


//---------------------------------------------------------------------------------


Given(/^I go to "([^"]*)"$/, function (website) {

  return base.launchBrowser(website);
});

When(/^user validate the homepage title as "([^"]*)"$/, function (title) {
  
  browser.sleep(2000);
  return base.verifyPageTitle(title);
  
});

When(/^user adds "([^"]*)" to the todo list$/, function (todoItem) {

  browser.sleep(2000);
  base.enterTodoItem(todoItem);
  browser.sleep(2000);
  return element(by.css('[value="add"]')).click();
});

Then(/^added "([^"]*)" should display sucessfully$/, function (todoItem) {

  browser.sleep(2000);
  return base.verifyAddedTodoItem(todoItem);
});

When(/^user navigate to learning page$/, function () {

  browser.sleep(2000);
  return browser.get("https://docs.angularjs.org/tutorial");
});

Then(/^user should see learning content$/, function () {

  browser.sleep(2000);
  return learningpage.clickBootstrappingLink();
  //return element(by.css('[href="tutorial/step_00"]')).click();
});
