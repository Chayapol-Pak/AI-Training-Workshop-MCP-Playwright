# Playwright Project

This is a Playwright end-to-end testing project using JavaScript.

## Installation

1. Install dependencies:
```bash
npm install
```

2. Install Playwright browsers:
```bash
npx playwright install
```

## Running Tests

- Run all tests: `npm test`
- Run tests in headed mode: `npm run test:headed`
- Run tests with UI mode: `npm run test:ui`
- Debug tests: `npm run test:debug`
- Show test report: `npm run report`

## Project Structure

- `tests/` - Test files
- `playwright.config.js` - Playwright configuration
- `package.json` - Project dependencies and scripts

## Example Tests

The project includes example tests that:
- Check if Playwright website has the correct title
- Navigate to the "Get started" page and verify content

## Documentation

For more information, visit the [Playwright documentation](https://playwright.dev/docs/intro).
