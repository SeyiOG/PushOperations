# PushOperations Coding Challenge
# OrangeHRM Demo Web App
Documentation:
Setup:

Cypress - version 13.8.1
Cypress Mochawesome Reporter - version 3.8.2
Wrote out test elements in a separate file to make test cases and test steps more readable and to help with code reusability.
To run the tests in headless mode (command line), enter the following in the terminal: npx cypress run 
To run the tests in headed mode (Graphical User interface), enter the following in the terminal: npx cypress run --headed


Test Script for Login: When this test is run, the before each each loop launches the application. The test cases then evaluate different scenarios covering successful login and unsuccessful login when invalid credentials are provided.

Test Script for Adding a New User/Candidate: When this test is run, the before each loop launches the application and logs into the application. The test cases will navigate the system to the admin section and create a user assigned the Admin user role and the ESS user role respectively. Both tests have to successfully assert the creation of user to pass. 

N.B. I observed that the system allows creation of users with "very weak" passwords. I also could not assert the text on the toast that confirms successful creation because of the very random language changes the system was exhibiting.


Test Scripts for Verifying User/Candidate Details: When this test is run, the before each loop runs before each test case in the suite, and it will launch and log into the application. The test cases will then navigate system to the admin section and verify that details for the admin user are correct and delete the user as well as validate that the details on the created ESS user are correct then delete the user.
N.B. In asserting the deletion success, I had to comment out the text bit on the assertion as the system language kept changing between Spanish and English.


Create a Test Script to View and Verify Project Time Report: When this test is run, the before each loop runs before each test case in the suite, and it will launch and log into the application. The test will then navigate the system to the time section and generate the report for the “Apache Software Foundation - ASF - Phase 1” project for the time frame of Jan 1 2021 to Dec 31 2023. 
System then asserts the following activities are listed:
● Bug fixes
● Feature Development
● Implementation
● QA Testing
● Requirement Gathering
● Support & Maintenance
N.B. There is a typographical error in the report  that spells Maintenance as Maintanence thus why I used cy.contains for just "Support &"

Assertions and Reporting:
Assertions are written inside the pageObjects class in the pages.js file. cypress-mochawesome-reporter is used to generate the test reports. HTML Reports are generated for when tests are run in this project. The test report is stored in the index.html file that can be found here: PushOperations/cypress/reports/html/index.html

Test Data Management:
Test data is stored in json files in the fixtures folder. Test data for creating users is in the addUser.json file and data used for login test scripts is in the loginData.json file. Data contained in the files allows for testing different scenarios like positive and negative login scenarios and creation of different user roles.
N.B. Typically, valid login data should not be pushed to the repository however, the data is public already so I chose to leave it in the file.


