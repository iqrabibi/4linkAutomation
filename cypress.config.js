const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    reportDir: 'cypress/results',
    overwrite: true,
    charts: true,
    reportPageTitle: '4 Link Automation Results',
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,
  },
  defaultCommandTimeout: 40000,
  video: false,
  screenshotsFolder: 'failureScreenShot',
  viewportWidth: 2000,
  viewportHeight: 1000,
  // execTimeout: 6000,
  // taskTimeout: 60000,
  // pageLoadTimeout: 200000,
  // requestTimeout: 40000,
  responseTimeout: 40000,
  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
      // implement node event listeners here
    },
  },
});
