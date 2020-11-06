# Nx Monorepo: Cypress, Cucumber and ReportPortal/agent-js-cypress 

### NOTE: THIS IS A KNOWN FAILING REPOSITORY FOR A CURRENT BUG WITH REPORTPORTAL INTEGRATION

This repository is to reproduce a bug with ReportPortal/agent-js-cypress while using Cypress with Cucumber in an Nx monorepo. The referenced bug can be found here: https://github.com/reportportal/agent-js-cypress/issues/61

**To reproduce the error:**
1. Clone the repository: `git clone https://github.com/kpmck/nx-workspace-cypress-cucumber.git`
1. Install all dependencies: `npm install`
1. Build application and execute tests: `ng e2e`
