var learningPage = function() {

var bootstrappingLink = element(by.css('[href="tutorial/step_00"]'));


this.clickBootstrappingLink = function() {
    bootstrappingLink.click();
};

}

module.exports = new learningPage();