import pageObjects from "../page_objects/pages.js";                                         //import pageObjects class from pages.js file into spec file

describe('Verify User Details Tests - Admin', () => {
    
    beforeEach(() => {
        
        cy.fixture('loginData').then((data1) => {                                           //Access data from logindata.json file
            cy.visit("https://opensource-demo.orangehrmlive.com/")                          //Launch application
            pageObjects.validLoginHook(data1.username, data1.password)                      //login to the application
        })
    })


    it('Verify new Admin user details are correct and delete the user', () => {
        
        cy.fixture('addUser').then((data2) => {                                             //Access data from the AddUser.json file
            pageObjects.openAdmin()                                                         //go to admin page
            pageObjects.verifyUser(data2.usernameAdmin)                                     //verify the admin user details are correct
        })
    });


    it('Verify new ESS user details are correct and delete the user', () => {
        
        cy.fixture('addUser').then((data2) => {                                             //Access data from the addUser.json file
            pageObjects.openAdmin()                                                         //go to admin page
            pageObjects.verifyUser(data2.usernameEss)                                       //verify the ESS user details are correct
        })
    });

    afterEach(() => {
        pageObjects.deleteUser()                                                            //Delete the user after verifying
        pageObjects.assertSuccess()                                                         //confirm the deletion
    });


});