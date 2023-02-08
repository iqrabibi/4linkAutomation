class pageObjectsModal{
    //Locators
    loginLocators = {
        Url : "https://c2.link4cloud.com/",
        email: '#if-email',
        password: '#if-password',
        loginButton : "#login-button",
        mainHeading : "h1"
    }
    mainScreenLocators= {
        mainScreenBoard: "//*[@id='siteTiles']/div/a",
        mainCandidateName: "h2 > a",
        sideBarArrow: "#sidebar-arrow",
        insideTemprature: "[aria-label='Inside Temperature']",
        sensorConfig : "//select[contains(@id,'cmd')]",
        caliborationValue : "//label[text()='Calibration']/following-sibling::input",
        saveButton: "//button[text()='Save']",
        saveAlert : "//*[@id='save-notification-slideout']"
    }

    //Mthods
    navigateToLoginScreen(){
        cy.visit(this.loginLocators.Url)
    }

    enterloginData(userName , password){
        cy.get(this.loginLocators.email).type(userName)
        cy.get(this.loginLocators.password).type(password)
    }

    submitLogin() 
    {
        cy.get(this.loginLocators.loginButton).click()
    }

    validateScreenAfterLogin()
    {
        cy.get(this.loginLocators.mainHeading).should('be.visible')
    }

    navigateToCandidateScreen()
    {
        cy.xpath(this.mainScreenLocators.mainScreenBoard).click()   // click on sit
        cy.get(this.mainScreenLocators.mainCandidateName).click()  // click on candidate name
        cy.get(this.mainScreenLocators.sideBarArrow).click()       // close the sidebar
        cy.get(this.mainScreenLocators.insideTemprature).click() // click on inside temprature
    }

    scrollThePage(){
        cy.scrollTo('bottom')
    }

    selectDropDownValue(value){
        cy.xpath(this.mainScreenLocators.sensorConfig).select(value)
    }
   
    enterCaliborationValue(value)
    {
        cy.xpath(this.mainScreenLocators.caliborationValue).type(value)
    }

    clickSave()
    {
        cy.xpath(this.mainScreenLocators.saveButton).click()
    }

    validateDataSavedSuccessfully()
    {
        cy.xpath(this.mainScreenLocators.saveAlert).should('be.visible')
    }

}
export default pageObjectsModal