
it.only('OrangeHRMLogout',function(){
cy.get('.oxd-userdropdown-tab').click();//logout
cy.wait(4000);
cy.get(':nth-child(4) > .oxd-userdropdown-link').click();
cy.wait(4000);
});
