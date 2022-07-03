Installation commands

    $ npm init -y

    $ npm i -D cypress

To Run the scripts use below command if you didn't configure in package.json

    $ npx cypress --e2e --browser chrome

if you added below changes in package.json 

    "scripts": {
        "test": "npx cypress open --e2e --browser chrome"
    },

then you can use below command to run

    $npm test

To Run the test cases in an order we need provide the configuration as below

         e2e: {
            <other configurations>
            .
            .
            .
            specPattern: "cypress/e2e/allTestcase.spec.cy.js",
        }

once the browser is open, it will show the **allTestcase.spec.js** file

click on that, it will run all 3 test cases at a time.


To get Video of all executed cases and screenshots for failed scenarios we need to run from CLI using below command 

    $ ./node_modules/.bin/cypress run


To clone the project use the below command

    $ git clone https://github.com/satyagy/cy-gerimedica-pom-class.git

Then follow the installation steps as given above
