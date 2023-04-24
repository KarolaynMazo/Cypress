const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {

    viewportWidth:1920,
    viewportHeight: 1080,
    baseUrl:"https://demoqa.com/",
    testIsolation:false,    
    setupNodeEvents(on, config) {
      // implement node event listeners here

      on('task',{
        log(message){
          console.log('Soy el mensaje del console log, task '+message)
        return null
        }
      })
    },
    excludeSpecPattern:[
      "**/1-getting-started/*.js",
      "**/2-advanced-examples/*.js"
  ]
  },
  

});
