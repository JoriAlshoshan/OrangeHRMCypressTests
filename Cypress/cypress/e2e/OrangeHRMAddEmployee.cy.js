it.only('OrangeHRMAddEmployee',function(){

// cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login'); // Visit The Website
// cy.wait(2000);
// cy.get('[name="username"]').type("Admin",{delay:200}); // Enter  UserName
// cy.wait(2000);
// cy.get('[name="password"]').type('admin123',{delay:200}); //  Enter  Password
// cy.wait(2000);
// cy.get('.oxd-button').click();// Click Login
cy.wait(4000);
cy.get(':nth-child(1) > .oxd-main-menu-item').click(); // Click Admin
cy.wait(4000)

cy.get('.orangehrm-header-container > .oxd-button').click(); // Click Add
cy.wait(4000);
cy.get(':nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text').click();// Click Role
cy.wait(4000);
cy.get('.oxd-select-dropdown > :nth-child(2)').click(); // Click Admin
cy.wait(4000);
cy.get('.oxd-autocomplete-text-input > input').type("t",{delay:200}); //search EmployeeName
cy.wait(3000);
cy.get('.oxd-autocomplete-dropdown > :nth-child(2) > span').click() // Click EmployeeName
cy.wait(3000);
cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text').click(); // click status
cy.wait(4000);
cy.get('.oxd-select-dropdown > :nth-child(2)').click(); // click Enable
cy.wait(4000);
cy.get(':nth-child(4) > .oxd-input-group > :nth-child(2) > .oxd-input').type("TimothyTesting",{delay:200}); //type UserName
cy.wait(4000);
cy.get('.user-password-cell > .oxd-input-group > :nth-child(2) > .oxd-input').type("TimothyTesting@2025",{delay:200}); //type Passwords
cy.wait(4000);
cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type("TimothyTesting@2025",{delay:200}); //type ConfirmPasswords
cy.wait(4000);
cy.get('.oxd-button--secondary').click(); // Click Svae
cy.wait(4000);


// Delete 1 -assertion-
// assertion
cy.get('.oxd-table-body')
  .should('contain', 'TimothyTesting')
  .then(() => cy.log('Job title verified'));
cy.wait(5000); // First find the exact row containing your job title and scrollview

cy.contains('.oxd-table-row', 'TimothyTesting')
  .scrollIntoView({ duration: 300 })
  .should('exist')
  .within(() => {
    // checkbox click
    cy.get(':nth-child(1) > .oxd-table-card-cell-checkbox .oxd-icon')
      .click({ force: true });

    // click trash
    cy.get(':nth-child(1) > .oxd-icon')
      .should('be.visible')
      .click({ force: true, multiple: true });
      });

cy.wait(4000);
cy.get('.orangehrm-modal-footer > .oxd-button--label-danger').click(); // confirm delete
cy.wait(4000);


// Delete 2- search and then delete 
/*cy.get('.oxd-table-filter').click();// clickContainer
cy.wait(3000);
cy.get(':nth-child(2) > .oxd-input').type("TimothyTesting#",{delay:200}); //type UserName
cy.wait(3000);
cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text--after > .oxd-icon').click();//ClickRole
cy.wait(3000);
cy.get('.oxd-select-dropdown > :nth-child(2)').click(); //AdminClick
cy.wait(3000);
cy.get('.oxd-autocomplete-text-input > input').type("t",{delay:200}); //type EmployyName
cy.wait(3000);
cy.get('.oxd-autocomplete-dropdown > :nth-child(2) > span').click();//clickName
cy.wait(3000);
cy.get(':nth-child(4) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text--after > .oxd-icon').click();//status
cy.wait(3000);
cy.get('.oxd-select-dropdown > :nth-child(2)').click(); //enable
cy.wait(3000);
cy.get('.oxd-form-actions > .oxd-button--secondary').click();//search
cy.wait(3000);
cy.get('.oxd-table-card-cell-checkbox > .oxd-checkbox-wrapper > label > .oxd-checkbox-input > .oxd-icon').click();//select
cy.wait(3000);
cy.get('.orangehrm-horizontal-padding > div > .oxd-button').click(); //delete 
cy.wait(3000);
cy.get('.orangehrm-modal-footer > .oxd-button--label-danger').click(); //confirm
cy.wait(3000);
*/
});
