var PropertiesReader = require('properties-reader');
var prop = PropertiesReader('./prop.properties');

exports.config = {

    // set to "custom" instead of cucumber.
    framework: 'custom',
    
    // path relative to the current config file
    frameworkPath: require.resolve('protractor-cucumber-framework'),
  
    cucumberOpts: {
      // require step definitions
      require: [
        prop.get('stepDefinitionsPath') // accepts a glob
      ]
    },
  
    specs: [ prop.get('featurePath')],
    browserstackUser: 'samuelallimuthu1',
    browserstackKey: 'o19qiuwCUkAp2mfYdvfx',
  
    capabilities: {
      build: 'protractor-browserstack',
      name: 'single_test_sam',
      browserName: 'chrome',
      resolution: '1024x768',
      'browserstack.debug': 'true'
    }
    };