describe('Login Tests', () => {

    it('User can only login with valid credentials', () => {
        cy.fixture('logindata').then((data) => {                                        //Access data from the logindata.json file
            
            cy.visit('https://opensource-demo.orangehrmlive.com/');                     //Launch the application
            //cy.title().should('eq','OrangeHRM')                                         
                                                    
            cy.get("input[name='username']").type(data.username);
            cy.get("input[name='password']").type(data.password);
            cy.get("button[type='submit']").click();
            cy.get(".oxd-topbar-header-breadcrumb > .oxd-text").should('be.visible');             
        })
    });




})


