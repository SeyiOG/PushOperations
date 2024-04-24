import pageObjects  from "../page_objects/pages.js";

describe('Login Tests', () => {

    it('User can only login with valid credentials', () => {
        cy.fixture('logindata').then((data) => {                                        //Access data from the logindata.json file
            
            cy.visit('https://opensource-demo.orangehrmlive.com/');                     //Launch the application                                      
            pageObjects.enterUsername(data.username)
            pageObjects.enterPassword(data.password)
            pageObjects.clickSubmit()
            pageObjects.verifyLogin()

        })
    });

})


