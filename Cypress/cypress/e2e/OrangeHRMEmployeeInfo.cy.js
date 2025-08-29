it.only('OrangeHRMEmployeeInfo',function(){

// cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login'); // Visit The Website
// cy.wait(2000);
// cy.get('[name="username"]').type("Admin",{delay:200}); // Enter  UserName
// cy.wait(2000);
// cy.get('[name="password"]').type('admin123',{delay:200}); //  Enter  Password
// cy.wait(2000);
// cy.get('.oxd-button').click();// Click Login
// cy.wait(2000);
cy.get(':nth-child(6) > .oxd-main-menu-item').click(); // click myInfo
cy.wait(4000);

cy.get(':nth-child(1) > .orangehrm-tabs-item').click(); // click personalDetails
cy.wait(4000);
cy.get('[name="firstName"]').clear().type("Jori",{delay:200}); // Enter  firstNmae
cy.wait(4000);
cy.get('[name="middleName"]').clear().type("Abdulrahmman",{delay:200}); // Enter  MNmae
cy.wait(4000);
cy.get('[name="lastName"]').clear().type("Alshoshan",{delay:200}); // Enter  LNmae
cy.wait(4000);
cy.get(':nth-child(3) > :nth-child(1) > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input').clear().type("1234567",{delay:200}); // Enter  id
cy.wait(4000);
cy.get(':nth-child(3) > :nth-child(1) > :nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').clear().type("789654",{delay:200}); // Enter  otherid
cy.wait(4000);
cy.get(':nth-child(2) > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input').clear().type("123456",{delay:200}); // Enter  LisNumber
cy.wait(4000);
cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-date-wrapper > .oxd-date-input > .oxd-input').clear().type('2023-05-19'); //LinExpDate
cy.wait(4000);
cy.get('.--close').click();
cy.wait(4000);

cy.get(':nth-child(5) > :nth-child(1) > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text').click(); //Nationality
cy.wait(4000);
cy.get(':nth-child(154)').click(); //click Saudi
cy.wait(4000);

cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text').click(); // status
cy.wait(4000);
cy.get('.oxd-select-dropdown > :nth-child(2)').click();//single
cy.wait(4000);

cy.get(':nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-date-wrapper > .oxd-date-input > .oxd-input').click(); //click DateBirth
cy.wait(4000);
cy.get('.oxd-calendar-selector-year').click(); //year 
cy.wait(4000);
cy.get(':nth-child(33)').click(); //2002
cy.wait(4000);

cy.get('.oxd-calendar-selector-month').click(); //Month
cy.wait(4000);
cy.get('.oxd-calendar-dropdown > :nth-child(9)').click(); //sep
cy.wait(4000);

cy.get(':nth-child(8) > .oxd-calendar-date').click(); // Day:8
cy.wait(4000);

cy.get(':nth-child(2) > :nth-child(2) > .oxd-radio-wrapper > label').click(); //Gender 
cy.wait(4000);

cy.get(':nth-child(1) > .oxd-form > .oxd-form-actions > .oxd-button').click(); //Save 
cy.wait(4000);

cy.get('.orangehrm-card-container > .oxd-form > .oxd-form-row > .oxd-grid-3 > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text').click();//blood type
cy.wait(4000);
cy.get('.--selected').click(); //O+
cy.wait(4000);
cy.get('.orangehrm-card-container > .oxd-form > .oxd-form-row > .oxd-grid-3 > :nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').clear().type("123456",{delay:200}); // Enter  TextField
cy.wait(4000);
cy.get(':nth-child(1) > .oxd-form > .oxd-form-actions > .oxd-button').click();//SAve
cy.wait(4000);

cy.get('.orangehrm-action-header > .oxd-button').click(); //Add
cy.wait(4000);
// Uploading file 
cy.log("uploading file");
cy.get('[type="file"]').selectFile('cypress/fixtures/MyResume.pdf',{force:true}); 
cy.wait(3000);

cy.get('.oxd-textarea').type("Resume",{delay:200}); // Enter  LisNumber
cy.wait(4000);
cy.get('.orangehrm-attachment > .orangehrm-card-container > .oxd-form > .oxd-form-actions > .oxd-button--secondary').click(); //save
cy.wait(4000);

cy.get('.employee-image').click();
cy.wait(4000);

// Uploading image 
cy.log("uploading file");
cy.get('[type="file"]').selectFile('cypress/fixtures/ProfileImage.jpeg',{force:true}); 
cy.wait(3000);
cy.get('.oxd-button').click(); //save
cy.wait(4000);

//Contact Info
cy.get(':nth-child(2) > .orangehrm-tabs-item').click();
cy.wait(4000);
cy.get(':nth-child(3) > .oxd-grid-3 > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input').clear().type("King Fahd Road",{delay:200}); // Enter  st1
cy.wait(4000);
cy.get(':nth-child(3) > .oxd-grid-3 > :nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').clear().type("Building 25, Apt 12",{delay:200}); // Enter  st2
cy.wait(4000);
cy.get(':nth-child(3) > .oxd-grid-3 > :nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').clear().type("Riyadh",{delay:200}); // Enter  city
cy.wait(4000);
cy.get(':nth-child(4) > .oxd-input-group > :nth-child(2) > .oxd-input').clear().type("Riyadh Province",{delay:200}); // Enter  state
cy.wait(4000);
cy.get(':nth-child(5) > .oxd-input-group > :nth-child(2) > .oxd-input').clear().type("123456",{delay:200}); // Enter  LisNumber
cy.wait(4000);
cy.get('.oxd-select-text').click(); // Enter  Lcounry
cy.wait(4000);
cy.get(':nth-child(188)').click();
cy.wait(4000);
cy.get(':nth-child(6) > .oxd-grid-3 > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input').clear().type("0112345678",{delay:200}); // Enter  homePhone
cy.wait(4000);
cy.get(':nth-child(6) > .oxd-grid-3 > :nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').clear().type("0563363781",{delay:200}); // Enter  mobile
cy.wait(4000);
cy.get(':nth-child(6) > .oxd-grid-3 > :nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').clear().type("0534242442",{delay:200}); // Enter  work
cy.wait(4000);
cy.get(':nth-child(9) > .oxd-grid-3 > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input').clear().type("jori.alshoshan@gmail.com",{delay:200}); // Enter  email
cy.wait(4000);
cy.get(':nth-child(9) > .oxd-grid-3 > :nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').clear(); // other email
cy.wait(4000);
cy.get('.oxd-form-actions > .oxd-button').click();
cy.wait(4000);
cy.get(':nth-child(3) > .orangehrm-tabs-item').click();
cy.wait(4000);
cy.get(':nth-child(1) > .orangehrm-action-header > .oxd-button').click();
cy.wait(4000);
cy.get(':nth-child(1) > .oxd-grid-3 > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input').clear().type("Abdulrahmman",{delay:200}); // Enter  name
cy.wait(4000);
cy.get(':nth-child(1) > .oxd-grid-3 > :nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').clear().type("Father",{delay:200}); // Enter  rel
cy.wait(4000);
cy.get(':nth-child(2) > .oxd-grid-3 > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input').clear().type("05644456778",{delay:200}); // Enter  home
cy.wait(4000);
cy.get(':nth-child(2) > .oxd-grid-3 > :nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').clear().type("08765555666",{delay:200}); // Enter  mobile
cy.wait(4000);
cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').clear().type("08765555666",{delay:200}); // Enter  workphone
cy.wait(4000);
cy.get('.oxd-button--secondary').click();// Enter  save
cy.wait(4000);
cy.get(':nth-child(9) > .orangehrm-tabs-item').click();
cy.wait(4000);
cy.get(':nth-child(2) > :nth-child(1) > .orangehrm-action-header > .oxd-button').click();
cy.wait(4000);
cy.get(':nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input').clear().type("Ejadah Company",{delay:200}); //comp
cy.wait(4000);
cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').clear().type("Full Stack Developer",{delay:200});//title
cy.wait(4000);
cy.get(':nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-date-wrapper > .oxd-date-input > .oxd-input').clear().type('2025-06-22');//from
cy.wait(4000);
cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-date-wrapper > .oxd-date-input > .oxd-input').clear().type('2025-14-08');//to
cy.wait(4000);
cy.get('.--close').click(); //close 
cy.wait(4000);
cy.get('.oxd-textarea').clear().type('Developed and maintained web applications using ASP.NET Core',{delay:200});//com
cy.wait(4000);
cy.get('.oxd-button--secondary').click();//save
cy.wait(4000);

cy.get(':nth-child(3) > :nth-child(1) > .orangehrm-action-header > .oxd-button').click();
cy.wait(4000);
cy.get('.oxd-select-text').click(); //level
cy.wait(4000);
cy.get('.oxd-select-dropdown > :nth-child(2) > span').click();
cy.wait(4000);
cy.get(':nth-child(3) > .orangehrm-top-padding > .oxd-form > :nth-child(1) > .oxd-grid-3 > :nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').clear().type("Qassim University",{delay:200}); //ins
cy.wait(4000);
cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').clear().type("Computer Science",{delay:200}); //maj
cy.wait(4000);
cy.get(':nth-child(4) > .oxd-input-group > :nth-child(2) > .oxd-input').type("2025",{delay:200});//year
cy.wait(4000);
cy.get(':nth-child(5) > .oxd-input-group > :nth-child(2) > .oxd-input').type("4.9 / 5.0",{delay:200});//gpa
cy.wait(4000);
cy.get(':nth-child(3) > .orangehrm-top-padding > .oxd-form > :nth-child(2) > .oxd-grid-3 > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-date-wrapper > .oxd-date-input > .oxd-input').click();//cal
cy.wait(4000);
cy.get('.oxd-calendar-selector-year').click();
cy.wait(4000);
cy.get(':nth-child(51)').click();//2020
cy.wait(4000);
cy.get('.oxd-calendar-selector-month').click();//m
cy.wait(4000);
cy.get('.oxd-calendar-dropdown > :nth-child(4)').click();
cy.wait(4000);
cy.get(':nth-child(23) > .oxd-calendar-date').click();
cy.wait(4000);
cy.get(':nth-child(3) > .orangehrm-top-padding > .oxd-form > :nth-child(2) > .oxd-grid-3 > :nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-date-wrapper > .oxd-date-input > .oxd-input').clear().type('2026-05-22');//end
cy.wait(4000);
cy.get(':nth-child(3) > .orangehrm-top-padding > .oxd-form > .oxd-form-actions > .oxd-button--secondary').click();
cy.wait(4000);

cy.get(':nth-child(4) > :nth-child(1) > .orangehrm-action-header > .oxd-button').click();//skill
cy.wait(4000);
cy.get('.oxd-select-text').click();
cy.wait(4000);
cy.get('.oxd-select-dropdown > :nth-child(6)').click();
cy.wait(4000);
cy.get(':nth-child(4) > .orangehrm-top-padding > .oxd-form > :nth-child(1) > .oxd-grid-3 > :nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').clear().type('4');
cy.wait(4000);
cy.get(':nth-child(4) > .orangehrm-top-padding > .oxd-form > .oxd-form-actions > .oxd-button--secondary').click();
cy.wait(4000);
cy.get(':nth-child(5) > :nth-child(1) > .orangehrm-action-header > .oxd-button').click(); //lan
cy.wait(4000);

cy.get(':nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text').click();
cy.wait(4000);
cy.get('.oxd-select-dropdown > :nth-child(4)').click();
cy.wait(4000);

cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text').click();
cy.wait(4000);
cy.get('.oxd-select-dropdown > :nth-child(2)').click();
cy.wait(4000);

cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text').click();
cy.wait(4000);
cy.get('.oxd-select-dropdown > :nth-child(4)').click();
cy.wait(4000);

cy.get(':nth-child(5) > .orangehrm-top-padding > .oxd-form > .oxd-form-actions > .oxd-button--secondary').click();
cy.wait(4000);
});