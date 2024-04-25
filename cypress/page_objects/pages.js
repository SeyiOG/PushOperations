class pageObjects 
{
    enterUsername(username){
        cy.get("input[name='username']").type(username)
    }

    enterPassword(password){
        cy.get("input[name='password']").type(password)
    }

    clickSubmit(){
        cy.get("button[type='submit']").click()
    }

    verifyLogin(){
        cy.get(".oxd-topbar-header-breadcrumb > .oxd-text").should('be.visible')
    }
    
    validLoginHook(username, password){
        this.enterUsername(username)
        this.enterPassword(password)
        this.clickSubmit()
        this.verifyLogin()
    }
    
    openAdmin(){
        cy.get(':nth-child(1) > .oxd-main-menu-item').click()
    }

    createAdminUser(username, password){
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
            cy.get(':nth-child(4) > .oxd-input-group > :nth-child(2) > .oxd-input').type(username)
            cy.get('.user-password-cell > .oxd-input-group > :nth-child(2) > .oxd-input').type(password)
            cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type(password)
            cy.get('.oxd-button--secondary').click()
    }

    assertSuccess(){                                        
        cy.get(".oxd-toast-container").should('be.visible')//.contains('Success')
    }

    createEssUser(username, password){
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
            cy.get(':nth-child(4) > .oxd-input-group > :nth-child(2) > .oxd-input').type(username)
            cy.get('.user-password-cell > .oxd-input-group > :nth-child(2) > .oxd-input').type(password)
            cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type(password)
            cy.get('.oxd-button--secondary').click()
    }

    verifyUser(username){
        cy.get(':nth-child(2) > .oxd-input').type(username)
        cy.get('.oxd-form-actions > .oxd-button--secondary').click() //unable to search with partial text (must enter exact text)
        cy.get('.oxd-table-body .oxd-table-card:first-child .oxd-table-row .oxd-table-cell:nth-child(2)').should('have.text', username)
    }

    deleteUser(){
        cy.get(".oxd-table-body .oxd-table-card:first-child > .oxd-table-row > .oxd-table-cell:nth-child(6) > .oxd-table-cell-actions button:first-child").click({force : true})
        cy.get("button[class='oxd-button oxd-button--medium oxd-button--label-danger orangehrm-button-margin']").click()
    }

    openTimeSection(){
        cy.get(':nth-child(4) > .oxd-main-menu-item').click()
    }

    generateProjectReport(){
        cy.get('.oxd-topbar-body-nav > ul > :nth-child(3)').click()
        cy.get(':nth-child(1) > .oxd-topbar-body-nav-tab-link').click()
        cy.get("input[placeholder='Type for hints...']").type('ASF')
        cy.contains('Apache Software Foundation - ASF - Phase 1').click()
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-date-wrapper > .oxd-date-input > .oxd-input').type("2023-31-12")
        cy.get(':nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-date-wrapper > .oxd-date-input > .oxd-input').type("2021-01-01")
        cy.get('.oxd-button').click()
    }

    assertProjectActivities(){
        cy.get(".inner-content-table .vertical-inner .rgRow:first-child .cell-action").should('be.visible').and('have.text', 'Bug Fixes')
        cy.get(".inner-content-table .vertical-inner .rgRow:nth-child(2) .cell-action").should('be.visible').and('have.text', 'Feature Development')
        cy.get(".inner-content-table .vertical-inner .rgRow:nth-child(3) .cell-action").should('be.visible').and('have.text', 'Implementation')
        cy.get(".inner-content-table .vertical-inner .rgRow:nth-child(4) .cell-action").should('be.visible').and('have.text', 'QA Testing')
        cy.get(".inner-content-table .vertical-inner .rgRow:nth-child(5) .cell-action").should('be.visible').and('have.text', 'Requirement Gathering')
        cy.get(".inner-content-table .vertical-inner .rgRow:nth-child(6) .cell-action").should('be.visible').contains('Support &')  //Typo on this element as Maintenance is not correctly spelt
    }
    confirmNoLogin(){
        cy.get(".oxd-text.oxd-text--p.oxd-alert-content-text").should('be.visible')
    }
}

module.exports = new pageObjects();