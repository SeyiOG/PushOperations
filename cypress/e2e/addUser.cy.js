import pageObjects  from "../page_objects/pages.js";                                    //import pageObjects class from pages.js file into this spec file

describe('Add User Tests - Admin', () => {
    
    beforeEach(() => {
        
        cy.fixture('loginData').then((data1) => {
            cy.visit('https://opensource-demo.orangehrmlive.com/');                     //Launch the application                                       
            pageObjects.validLoginHook(data1.username, data1.password)                  //login to the application
        })
    })


    it('Validate new user creation - Admin', () => {
        cy.fixture('addUser').then((data2) => {
            pageObjects.openAdmin()                                                     //navigate to admin page
            pageObjects.createAdminUser(data2.usernameAdmin, data2.passwordAdmin)       //create admin user
            pageObjects.assertSuccess()                                                 //assert successful creation
        })
    });


    it('Validate new user creation - ESS', () => {
        cy.fixture('addUser').then((data2) => {
            pageObjects.openAdmin()                                                     //navigate to the admin page
            pageObjects.createEssUser(data2.usernameEss, data2.passwordEss)             //create admin user
            pageObjects.assertSuccess()                                                 //assert successful creation
        })
    });
});