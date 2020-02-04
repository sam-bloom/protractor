var basepage = function() {

    var chai = require('chai');
    var chaiAsPromised = require('chai-as-promised');

    chai.use(chaiAsPromised);
    var expect = chai.expect;

    // page locators
    var todoInput = element(by.model('todoList.todoText'));
    var addButton = element(by.css('[value="add"]'));

    this.launchBrowser = function(url) {
        browser.ignoreSynchronization = true;
        browser.get(url);
        browser.sleep(3000)
    };

    this.verifyPageTitle = function(title) {
        expect(browser.getTitle()).to.eventually.equal(title);
    };

    this.enterTodoItem = function(text) {
        return todoInput.sendKeys(text);
    };

    this.verifyAddedTodoItem = function (todoItem) {
        var todoList = element.all(by.repeater('todo in todoList.todos'));
        //expect(todoList.count()).to.eventually.equal(3);

        var todoItemActual = todoList.get(2).getText();
        return expect(todoItemActual).to.eventually.equal(todoItem);
    }

    this.clickAddButton = function() {
        element(by.css('[value="add"]')).click();
    };

    this.verifyTodoItem = function() {

    };
};

module.exports = new basepage();