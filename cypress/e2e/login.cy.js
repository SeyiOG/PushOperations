import pageObjects  from "../page_objects/pages.js";

describe('Login Tests', () => {

    beforeEach(() => {
        cy.visit('https://opensource-demo.orangehrmlive.com/');                     //Launch the application  
    });

    it('Validate that user can login with valid credentials', () => {
        cy.fixture('loginData').then((data) => {                                        //Access data from the logindata.json file                              
            pageObjects.enterUsername(data.username)
            pageObjects.enterPassword(data.password)
            pageObjects.clickSubmit()
            pageObjects.verifyLogin()

        })
    });

    it('Validate that user cannot login with invalid username', () => {
        cy.fixture('loginData').then((data) => {                                        //Access data from the logindata.json file                                
            pageObjects.enterUsername(data.invalidUsername)
            pageObjects.enterPassword(data.password)
            pageObjects.clickSubmit()
            pageObjects.confirmNoLogin()

        })
    });

    it('Validate that user cannot login with invalid password', () => {
        cy.fixture('loginData').then((data) => {                                        //Access data from the logindata.json file                                  
            pageObjects.enterUsername(data.username)
            pageObjects.enterPassword(data.invalidPassword)
            pageObjects.clickSubmit()
            pageObjects.confirmNoLogin()

        })
    });

})


