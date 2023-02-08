/// <reference types = "Cypress"/>

import pageObjectsModal from "../pageObjects/4linkPageObject.cy"
const pageObject = new pageObjectsModal();


describe('4 link sample test cases',()=> {

  it('Validate user should be able to set sensor config', function() {

    pageObject.navigateToLoginScreen()   //navigate to login screen
    pageObject.enterloginData(this.userData.email , this.userData.password) // enter login name and passsword after reading data from fixture
    pageObject.submitLogin()   // press submit button
    pageObject.validateScreenAfterLogin() // validate user should be logged in successfully
    pageObject.navigateToCandidateScreen() // to naviagte to sensor setting screen
    pageObject.scrollThePage() // scroll the page till config section
    pageObject.selectDropDownValue(this.userData.sensorConfig) // select sensor config value from dropdown
    pageObject.enterCaliborationValue(this.userData.caliboration)  // enter caliboration value
    pageObject.clickSave() // save button clicked
    pageObject.validateDataSavedSuccessfully() // validate data saved successfully
  })
})