import pageObjects from "../page_objects/pages.js"                                          //import pageObjects class from pages.js file into spec file

describe('viewAndVerifyProjectTimeReport Tests', () => {
    beforeEach(() => {
        cy.fixture('loginData').then((data) => {                                            //Access data from teh loginData.json file
            cy.visit("https://opensource-demo.orangehrmlive.com/")                          //Launch the application
            pageObjects.validLoginHook(data.username, data.password)                        //login to the application
        })
    })

    
    
    it('Validate that the expected activities are listed', () => {
        pageObjects.openTimeSection()                                                       //go to the time page
        pageObjects.generateProjectReport()                                                 //generate the project report
        pageObjects.assertProjectActivities()                                               //confirm that the activities are listed
    });
});

