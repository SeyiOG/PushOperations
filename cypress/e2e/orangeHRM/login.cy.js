describe('Login Tests', () => {

    it('User can only login with valid credentials', () => {
        cy.fixture('logindata').then((data) => {                                        //Access data from the logindata.json file
            
            cy.visit('https://opensource-demo.orangehrmlive.com/');                     //Launch the application
            cy.title().should('eq','OrangeHRM')                                         

            data.forEach((userdata) => {                                                //for loop to go iterate through the different login datasets
                cy.get("input[placeholder='Username']").type(userdata.username);
                cy.get("input[placeholder='Password']").type(userdata.password);
                cy.get("button[type='submit']").click();

                if(userdata.username=='Admin' && userdata.password=='admin123'){
                    cy.get(".oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module")
                        .should('have.text', userdata.expected)
                        .and('be.visible')                                              //will verify the user is logged in for valid dataset

                    cy.get(".oxd-icon.bi-caret-down-fill.oxd-userdropdown-icon").click() 
                    cy.get(':nth-child(4) > .oxd-userdropdown-link').click()            //will logout of the system
                
                } else {
                    cy.get(".oxd-text.oxd-text--p.oxd-alert-content-text")
                    .should('have.text', userdata.expected)
                    .and('be.visible')                                                  //will verify that the user was not logged into the system with invalid dataset
                }
            });
        })
    });




})


