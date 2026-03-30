How to run the tests locally:

1. Installation:
Install Visual Studio Code and Playwright.

2. Headless Mode Setup:

- UI Settings: Click the Testing icon (Flask) in the Activity Bar. In the Playwright sidebar, ensure the "Show browser" checkbox is unselected.

- Timeouts: Headless runs can sometimes hit delays. Use the playwright.config.ts file provided in the repository, as it already has increased timeouts. If using your own, manually increase the timeouts.

3. Running Tests:
Go to the Testing (Flask) menu.
Click the Play button next to a specific test or the entire suite to start the execution.
