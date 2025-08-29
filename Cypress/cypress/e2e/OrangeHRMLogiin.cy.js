it.only('Login-OrangeHRM',function(){

cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login'); // Visit The Website
cy.wait(2000);
cy.get('[name="username"]').type("Admin",{delay:200}); // Enter  UserName
cy.wait(2000);
cy.get('[name="password"]').type('admin123',{delay:200}); //  Enter  Password
cy.wait(2000);
cy.get('.oxd-button').click();// Click Login
cy.wait(2000);
cy.get('.oxd-userdropdown-tab').click();//logout
cy.wait(3000);
cy.get(':nth-child(4) > .oxd-userdropdown-link').click();
cy.wait(3000);

});