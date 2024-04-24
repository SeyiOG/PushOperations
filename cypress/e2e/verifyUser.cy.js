import pageObjects from "../page_objects/pages.js";

describe('Verify Candidate Details Tests - Recruitment', () => {
    
    beforeEach(() => {
        
        cy.fixture('logindata').then((data1) => {
            cy.visit("https://opensource-demo.orangehrmlive.com/")
            pageObjects.loginHook(data1.username, data1.password)
        })
    })


    it('Verify new Admin user details are correct and delete the user', () => {
        
        cy.fixture('adduser').then((data2) => {
            pageObjects.openAdmin()
            pageObjects.verifyUser(data2.usernameAdmin)
        })
    });


    it('Verify new ESS user details are correct and delete the user', () => {
        
        cy.fixture('adduser').then((data2) => {
            pageObjects.openAdmin()
            pageObjects.verifyUser(data2.usernameEss)
        })
    });

    afterEach(() => {
        pageObjects.deleteUser()
        pageObjects.assertSuccess()
    });


});