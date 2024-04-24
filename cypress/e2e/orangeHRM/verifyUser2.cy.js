describe('Verify Candidate Details Tests - Recruitment', () => {
    
    beforeEach(() => {
        
        cy.fixture('logindata').then((data1) => {
            cy.visit("https://opensource-demo.orangehrmlive.com/")
            cy.get("input[name='username']").type(data1.username);
            cy.get("input[name='password']").type(data1.password);
            cy.get("button[type='submit']").click()
            cy.get(".oxd-topbar-header-breadcrumb > .oxd-text").should('be.visible');
        })
    })


    it('Verify new Admin user details are correct and delete the user', () => {
        
        cy.fixture('adduser').then((data2) => {
            cy.get(':nth-child(1) > .oxd-main-menu-item').click()
            cy.get(':nth-child(2) > .oxd-input').type(data2.usernameAdmin)
            cy.get('.oxd-form-actions > .oxd-button--secondary').click() //unable to search with partial text (must enter exact text)
            cy.get('.oxd-table-body .oxd-table-card:first-child .oxd-table-row .oxd-table-cell:nth-child(2)').should('have.text', data2.usernameAdmin)
        })
    });


    it('Verify new ESS user details are correct and delete the user', () => {
        
        cy.fixture('adduser').then((data2) => {
            cy.get(':nth-child(1) > .oxd-main-menu-item').click()
            cy.get(':nth-child(2) > .oxd-input').type(data2.usernameEss)
            cy.get('.oxd-form-actions > .oxd-button--secondary').click() //unable to search with partial text (must enter exact text)
            cy.get('.oxd-table-body .oxd-table-card:first-child .oxd-table-row .oxd-table-cell:nth-child(2)').should('have.text', data2.usernameEss)
        })
    });

    afterEach(() => {
        cy.get(".oxd-table-body .oxd-table-card:first-child > .oxd-table-row > .oxd-table-cell:nth-child(6) > .oxd-table-cell-actions button:first-child").click({force : true})
        cy.get("button[class='oxd-button oxd-button--medium oxd-button--label-danger orangehrm-button-margin']").click()
        cy.get(".oxd-toast-container").should('be.visible')//.contains('Success')
    });


});