# Cypress Automation Test - Matching Engine

This project contains an automation test for the Matching Engine website, built using Cypress. The test ensures that various UI elements, such as modules and product lists, are displayed correctly on the website.

Features
Visit the Matching Engine website: The test opens the website https://www.matchingengine.com/.
Module Interaction: Expands the 'Modules' section and clicks on the 'Repertoire Management Module' link.
Scroll and Click: Scrolls to the 'Additional Features' section and clicks on the 'Products Supported' button.
Assertion: Validates that the list of supported products is displayed correctly.

# Prerequisites

To run the tests, make sure you have the following installed:

Node.js (preferably the latest version)
npm (Node Package Manager)
Cypress (Test Automation Framework)

# Setup Instructions

Clone the repository: Clone this repository to your local machine using:

git clone https://github.com/himanshurathee/spanishpoint_Assesment.git

Install dependencies: Navigate to the project folder and install the necessary dependencies:
cd spanishpoint_Assesment
npm install

Open Cypress: Once the installation is complete, open Cypress:

npx cypress open
Run Tests: When the Cypress test runner opens, it will show the available test files. You can run the test by clicking on the respective test file.

# Project Structure

cypress/integration: Contains the test files.
cypress/support: Contains helper functions and configurations for Cypress tests.
package.json: Contains project metadata and npm scripts.
package-lock.json: Ensures consistent installation of dependencies across environments.
