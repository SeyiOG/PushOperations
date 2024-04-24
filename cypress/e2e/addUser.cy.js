import pageObjects  from "../page_objects/pages.js";

describe('Add User Tests - Admin', () => {
    
    beforeEach(() => {
        
        cy.fixture('logindata').then((data1) => {
            cy.visit('https://opensource-demo.orangehrmlive.com/');                     //Launch the application                                       
            pageObjects.loginHook(data1.username, data1.password)
        })
    })


    it('Validate new user creation - Admin', () => {
        cy.fixture('adduser').then((data2) => {
            pageObjects.openAdmin()
            pageObjects.createAdminUser(data2.usernameAdmin, data2.passwordAdmin)
            pageObjects.assertSuccess()
        })
    });


    it('Validate new user creation - ESS', () => {
        cy.fixture('adduser').then((data2) => {
            pageObjects.openAdmin()
            pageObjects.createEssUser(data2.usernameEss, data2.passwordEss)
            pageObjects.assertSuccess()
        })
    });
});