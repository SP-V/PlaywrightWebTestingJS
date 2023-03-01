# Introduction 
The scope of this project it to automate the regression test plan for EuroWeekly News web page.  

# Getting Started
To get this project up and running, make sure to follow nex steps on your own system:   
1. Download latest version of Node.js and install it.
2. Open command prompt and verify Node.js version with 'node --version' and npm version with 'npm --version'.
2. Create system variable 'NODE_HOME' with the path where node.js has been installed.
3. Install PlayWright: 
    1. Open an empty folder with Visual Studio Code.
    2. Open terminal and enter 'npm init playwright'.
    3. When asked to install some PlayWright package, accept. 
    4. Set JavaScript as the programming language.
    5. Indicate 'tests' as the location for end-to-end tests.
    6. When asked to add GitHub Actions workflow, accept.
    7. When asked to install PlayWright browsers, accept. 
4.	Execute 

# Test
To execute tests under folder 'tests': 
    1. Add this line to playwright.config.js file: 'testDir: './tests''
    2. Execute following command in VSC terminal to execute tests in the background 'npx playwright test' or 'npx playwright test --headed' to execute them on a launched browser.

# Contribute
Any use can contribute to this project by creating a PR to master branch.  
