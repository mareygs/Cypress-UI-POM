const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {

    excludeSpecPattern: ['**/1-getting-started','**/2-advanced-examples'],

    //Agrego la URL del site sobre el cual se van a ejecutar las pruebas
    baseUrl: 'https://conduit.bondaracademy.com',
    watchForFileChanges: false,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});