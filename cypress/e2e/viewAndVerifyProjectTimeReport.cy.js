import pageObjects from "../page_objects/pages.js"

describe('viewAndVerifyProjectTimeReport Tests', () => {
    beforeEach(() => {
        cy.fixture('logindata').then((data) => {
            cy.visit("https://opensource-demo.orangehrmlive.com/")
            pageObjects.loginHook(data.username, data.password)
        })
    })

    
    
    it('Validate that the expected activities are listed', () => {
        pageObjects.openTimeSection()
        pageObjects.generateReport()
        pageObjects.assertActivities()
    });
});

