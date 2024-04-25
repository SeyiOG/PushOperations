import pageObjects  from "../page_objects/pages.js";                                 //import pageObjects class from pages.js file into spec file

describe('Login Tests', () => {

    beforeEach(() => {
        cy.visit('https://opensource-demo.orangehrmlive.com/');                     //Launch the application  
    });

    it('Validate that user can login with valid credentials', () => {
        cy.fixture('loginData').then((data) => {                                        //Access data from the logindata.json file                              
            pageObjects.enterUsername(data.username)                                    //Enter username
            pageObjects.enterPassword(data.password)                                    //Enter password
            pageObjects.clickSubmit()                                                   //Click submit
            pageObjects.verifyLogin()                                                   //Confirm user is logged in

        })
    });

    it('Validate that user cannot login with invalid username', () => {
        cy.fixture('loginData').then((data) => {                                        //Access data from the logindata.json file                                
            pageObjects.enterUsername(data.invalidUsername)                             //Enter username
            pageObjects.enterPassword(data.password)                                    //Enter password
            pageObjects.clickSubmit()                                                   //Click Submit
            pageObjects.confirmNoLogin()                                                //Confirm user is not logged in and sees error message

        })
    });

    it('Validate that user cannot login with invalid password', () => {
        cy.fixture('loginData').then((data) => {                                        //Access data from the logindata.json file                                  
            pageObjects.enterUsername(data.username)                                    //Enter username
            pageObjects.enterPassword(data.invalidPassword)                             //Enter password
            pageObjects.clickSubmit()                                                   //Click Submit
            pageObjects.confirmNoLogin()                                                //Confirm user is not logged in and sees error message
        })
    });

})


