var {Before,BeforeAll,After,AfterAll} = require('cucumber');

BeforeAll(function(){
    //console.log('Inside BeforeAll hooks')
});

Before("@regression",function(){
    //console.log('Inside Before hooks')
});

After(function (scenarioResult) {
    let self = this;
  
  //  if (scenarioResult.result.status === 'failed') {
      return browser.takeScreenshot()
        .then(function (screenshot) {
          const decodedImage = new Buffer(screenshot.replace(/^data:image\/png;base64,/, ''), 'base64');
          self.attach(decodedImage, 'image/png');
          console.log("scenarioResult = ", scenarioResult.result.status);
        });
  
  //  }
  
  });


AfterAll(function(){
    //console.log('Inside AfterAll hooks')
});

