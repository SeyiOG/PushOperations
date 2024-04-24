describe('Add User Tests - Admin', () => {
    
    beforeEach(() => {
        
        cy.fixture('logindata').then((data1) => {
            cy.visit("https://opensource-demo.orangehrmlive.com/")
            cy.get("input[name='username']").type(data1.username);
            cy.get("input[name='password']").type(data1.password);
            cy.get("button[type='submit']").click()
            cy.get(".oxd-topbar-header-breadcrumb > .oxd-text").should('be.visible');
        })
    })


    /*
    afterEach(() => {
        cy.get('.oxd-userdropdown-tab > .oxd-icon').click(); 
        cy.get(':nth-child(4) > .oxd-userdropdown-link').click(); 
    });*/



    it('Validate new user creation - Admin', () => {
        cy.fixture('adduser').then((data2) => {
            cy.get(':nth-child(1) > .oxd-main-menu-item').click()
            cy.get("button[class='oxd-button oxd-button--medium oxd-button--secondary']").click()
            cy.get(".oxd-grid-item:first-child .oxd-input-group .oxd-select-text--arrow").click({force : true})
            cy.get(".oxd-grid-item:first-child .oxd-input-group .oxd-select-wrapper .oxd-select-dropdown").should('be.visible')
            cy.get(".oxd-grid-item:first-child .oxd-input-group .oxd-select-wrapper .oxd-select-dropdown .oxd-select-option:nth-child(2)").click()
            //cy.get(".oxd-grid-item:first-child .oxd-input-group .oxd-select-wrapper .oxd-select-text").should('have.text', 'Admin')
            cy.get(":nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text-input").click({force : true})
            cy.get(".oxd-grid-item:nth-child(3) .oxd-input-group .oxd-select-text--arrow").click({force : true})
            cy.get(".oxd-grid-item:nth-child(3) .oxd-input-group .oxd-select-wrapper .oxd-select-dropdown .oxd-select-option").should('be.visible')
            cy.get(".oxd-grid-item:nth-child(3) .oxd-input-group .oxd-select-wrapper .oxd-select-dropdown .oxd-select-option:nth-child(2)").click()
            //cy.get(".oxd-grid-item:nth-child(3) .oxd-input-group .oxd-select-wrapper .oxd-select-text").should('have.text', 'Enabled')
            
            cy.get('.oxd-autocomplete-text-input > input').type('Amelia')   //no way to confirm which employee name is available so went with most common                         
            cy.contains('Amelia').click()
            cy.get(':nth-child(4) > .oxd-input-group > :nth-child(2) > .oxd-input').type(data2.usernameAdmin)
            cy.get('.user-password-cell > .oxd-input-group > :nth-child(2) > .oxd-input').type(data2.passwordAdmin)
            cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type(data2.passwordAdmin)
            cy.get('.oxd-button--secondary').click()
            cy.get(".oxd-toast-container").should('be.visible')//.contains('Success')
        })
    });

    it('Validate new user creation - ESS', () => {
        cy.fixture('adduser').then((data2) => {
            cy.get(':nth-child(1) > .oxd-main-menu-item').click()
            cy.get("button[class='oxd-button oxd-button--medium oxd-button--secondary']").click()
            cy.get(':nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text-input').click()
            cy.get(".oxd-grid-item:first-child .oxd-input-group .oxd-select-wrapper .oxd-select-dropdown").should('be.visible')
            cy.get(".oxd-grid-item:first-child .oxd-input-group .oxd-select-wrapper .oxd-select-dropdown .oxd-select-option:nth-child(3)").click()
            //cy.get(".oxd-grid-item:first-child .oxd-input-group .oxd-select-wrapper .oxd-select-text").should('have.text', 'ESS')
            cy.get(":nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text-input").click({force : true})
            cy.get(".oxd-grid-item:nth-child(3) .oxd-input-group .oxd-select-text--arrow").click({force : true})
            cy.get(".oxd-grid-item:nth-child(3) .oxd-input-group .oxd-select-wrapper .oxd-select-dropdown .oxd-select-option").should('be.visible')
            cy.get(".oxd-grid-item:nth-child(3) .oxd-input-group .oxd-select-wrapper .oxd-select-dropdown .oxd-select-option:nth-child(2)").click()
            //cy.get(".oxd-grid-item:nth-child(3) .oxd-input-group .oxd-select-wrapper .oxd-select-text").should('have.text', 'Enabled')
            
            cy.get('.oxd-autocomplete-text-input > input').type('Amelia')   //no way to confirm which employee name is available so went with most common                         
            cy.contains('Amelia').click()
            cy.get(':nth-child(4) > .oxd-input-group > :nth-child(2) > .oxd-input').type(data2.usernameEss)
            cy.get('.user-password-cell > .oxd-input-group > :nth-child(2) > .oxd-input').type(data2.passwordEss)
            cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type(data2.passwordEss)
            cy.get('.oxd-button--secondary').click()
            cy.get(".oxd-toast-container").should('be.visible')//.contains('Success')
        })
    });
});