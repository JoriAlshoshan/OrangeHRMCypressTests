it.only('OrangeHRMAddJobTitle',function(){

// cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login'); // Visit The Website
// cy.wait(2000);
// cy.get('[name="username"]').type("Admin",{delay:200}); // Enter  UserName
// cy.wait(2000);
// cy.get('[name="password"]').type('admin123',{delay:200}); //  Enter  Password
// cy.wait(2000);
// cy.get('.oxd-button').click();// Click Login
cy.get(':nth-child(1) > .oxd-main-menu-item').click(); // click Admin
cy.wait(4000);
cy.get('.oxd-topbar-body-nav > ul > :nth-child(2)').click(); // click job
cy.wait(4000);
cy.get('.oxd-dropdown-menu > :nth-child(1)').click(); // job title
cy.wait(4000);
cy.get('.oxd-button').click(); // click add 
cy.wait(4000);
cy.get(':nth-child(2) > .oxd-input').type("Software Testing",{delay:200}); //Enter job title 
cy.wait(4000);
cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-textarea').type("Software Testing",{delay:200}); //Enter job Describtion 
cy.wait(4000);
// Uploading file 
cy.log("uploading file");
cy.get('[type="file"]').selectFile('cypress/fixtures/MyResume.pdf',{force:true}); // Upload file 
cy.wait(4000);
cy.get(':nth-child(4) > .oxd-input-group > :nth-child(2) > .oxd-textarea').type("Good Luck",{delay:200}); //Enter Note 
cy.wait(4000);
cy.get('.oxd-button--secondary').click(); // Click Save
cy.wait(4000);

//Delete Job Title - Assertion

cy.get('.oxd-table-body')
  .should('contain', 'Software Testing')
  .then(() => cy.log('Job title verified'));
cy.wait(4000); // First find the exact row containing your job title and scrollview

cy.contains('.oxd-table-row', 'Software Testing')
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



});