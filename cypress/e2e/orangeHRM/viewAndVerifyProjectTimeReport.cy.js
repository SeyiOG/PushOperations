describe('viewAndVerifyProjectTimeReport Tests', () => {
    beforeEach(() => {
        

        cy.fixture('logindata').then((data) => {
            cy.visit("https://opensource-demo.orangehrmlive.com/")
            cy.get("input[name='username']").type(data.username);
            cy.get("input[name='password']").type(data.password);
            cy.get("button[type='submit']").click();
            cy.get(".oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module").should('be.visible');
        })
    })

    /*
    after(() => {
        cy.get('.oxd-userdropdown-tab > .oxd-icon').click(); 
        cy.get(':nth-child(4) > .oxd-userdropdown-link').click(); 
    });*/
    
    it('Validate that the expected activities are listed', () => {
        cy.get(':nth-child(4) > .oxd-main-menu-item').click()
        cy.get('.oxd-topbar-body-nav > ul > :nth-child(3)').click()
        cy.get(':nth-child(1) > .oxd-topbar-body-nav-tab-link').click()
        cy.get("input[placeholder='Type for hints...']").type('ASF')
        cy.contains('Apache Software Foundation - ASF - Phase 1').click()
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-date-wrapper > .oxd-date-input > .oxd-input').type("2023-31-12")
        cy.get(':nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-date-wrapper > .oxd-date-input > .oxd-input').type("2021-01-01")
        cy.get('.oxd-button').click()

        cy.get(".inner-content-table .vertical-inner .rgRow:first-child .cell-action").should('be.visible').and('have.text', 'Bug Fixes')
        cy.get(".inner-content-table .vertical-inner .rgRow:nth-child(2) .cell-action").should('be.visible').and('have.text', 'Feature Development')
        cy.get(".inner-content-table .vertical-inner .rgRow:nth-child(3) .cell-action").should('be.visible').and('have.text', 'Implementation')
        cy.get(".inner-content-table .vertical-inner .rgRow:nth-child(4) .cell-action").should('be.visible').and('have.text', 'QA Testing')
        cy.get(".inner-content-table .vertical-inner .rgRow:nth-child(5) .cell-action").should('be.visible').and('have.text', 'Requirement Gathering')
        cy.get(".inner-content-table .vertical-inner .rgRow:nth-child(6) .cell-action").should('be.visible').contains('Support')  //Typo on this element as Maintenance is not correctly spelt
    });
});

