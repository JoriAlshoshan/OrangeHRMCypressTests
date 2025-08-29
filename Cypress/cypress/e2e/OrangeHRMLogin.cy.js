it.only('OrangeHRMLogin',function(){

cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login'); // Visit The Website
cy.wait(4000);
cy.get('[name="username"]').type("Admin",{delay:200}); // Enter  UserName
cy.wait(4000);
cy.get('[name="password"]').type('admin123',{delay:200}); //  Enter  Password
cy.wait(4000);
cy.get('.oxd-button').click();// Click Login
cy.wait(4000);
});