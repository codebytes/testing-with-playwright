# Testing with Playwright Repository

React + TypeScript + Vite application with comprehensive Playwright testing setup for demonstrating end-to-end testing best practices. Includes a Todo application and presentation slides built with Marp.

Always reference these instructions first and fallback to search or bash commands only when you encounter unexpected information that does not match the info here.

## Working Effectively

### Bootstrap, Build, and Test the Repository
- Install dependencies: `npm install` -- takes ~30 seconds. Always succeeds.
- Build the application: `npm run build` -- takes ~3 seconds. Creates optimized production build in `dist/` directory.
- Install Playwright browsers: `npx playwright install --with-deps` -- NEVER CANCEL: Can take 5-10 minutes. Often fails on first attempt due to download issues. Retry 2-3 times if needed. Set timeout to 15+ minutes.

### Development Workflow
- Start development server: `npm run dev` -- starts in <1 second on http://localhost:5173
- Start production preview: `npm run preview` -- starts production build preview on http://localhost:4173
- Run linting: `npm run lint` -- takes ~1 second. Currently has linting errors in test files that need fixing.

### Testing
- Run all Playwright tests: `npm run test` -- NEVER CANCEL: Takes 5-10 minutes for full test suite (102 tests). Set timeout to 15+ minutes.
- Run tests with UI: `npm run test:ui` -- opens Playwright test UI for interactive testing
- Debug tests: `npm run test:debug` -- runs tests in debug mode with browser DevTools
- Run Chromium tests only: `npm run test:chromium` -- runs tests only in Chromium browser

## Validation

### Manual Testing Requirements
ALWAYS manually validate any changes to the application through these scenarios:
1. **Add Todo Items**: Type in input field, press Enter or click Add button
2. **Toggle Completion**: Click checkboxes to mark todos as complete/incomplete
3. **Delete Todos**: Click Delete button to remove items
4. **Persistence**: Reload page and verify todos are preserved in localStorage
5. **Empty Input Handling**: Verify empty or whitespace-only inputs are rejected

### Pre-Commit Validation
- ALWAYS run `npm run lint` before committing. The CI pipeline (.github/workflows/playwright.yml) will fail if linting errors exist.
- ALWAYS run `npm run build` to ensure production build succeeds.
- When Playwright browsers are installed, run `npm run test` to ensure all tests pass.

### Known Issues
- Linting currently fails with 3 errors in test files:
  - `/tests/demo-todo-app.spec.ts`: Lines 429, 435 - Remove `any` type usage
  - `/tests/todo-app.spec.ts`: Line 1 - Remove unused `Page` import
- Playwright browser installation can fail due to network issues. Retry multiple times if needed.

## Application Structure

### Key Directories
- `src/` - React application source code
- `tests/` - Playwright test suites
- `slides/` - Marp presentation slides
- `public/` - Static assets
- `dist/` - Production build output (created by `npm run build`)

### Test Suites
- `tests/todo-app.spec.ts` - Tests for the local Todo application (118 tests)
- `tests/demo-todo-app.spec.ts` - Tests against external demo TodoMVC site 
- `tests/example.spec.ts` - Basic Playwright example tests

### Configuration Files
- `playwright.config.ts` - Playwright test configuration with webServer setup
- `vite.config.ts` - Vite build tool configuration
- `eslint.config.js` - ESLint linting configuration
- `tsconfig.json` - TypeScript configuration

## Common Tasks

### Repo Structure
```
.
├── .devcontainer/          # Dev container configurations
├── .github/                # GitHub Actions workflows
├── public/                 # Static assets
├── slides/                 # Presentation slides (Marp)
├── src/                    # Application source
├── tests/                  # Playwright tests
├── package.json            # Dependencies and scripts
├── playwright.config.ts    # Playwright configuration
├── vite.config.ts         # Vite build configuration
└── README.md              # Project documentation
```

### Package.json Scripts
```json
{
  "dev": "vite",                    // Start dev server
  "build": "tsc -b && vite build", // Build for production  
  "lint": "eslint .",              // Run ESLint
  "preview": "vite preview",       // Preview production build
  "test": "playwright test",       // Run all tests
  "test:ui": "playwright test --ui", // Test with UI
  "test:debug": "playwright test --debug", // Debug tests
  "test:chromium": "playwright test --project=chromium" // Chromium only
}
```

### Development URLs
- Development server: http://localhost:5173
- Production preview: http://localhost:4173
- Playwright test report: `playwright-report/index.html` (after test run)

## CI/CD Pipeline

### GitHub Actions
- `.github/workflows/playwright.yml` - Runs Playwright tests on push/PR
- `.github/workflows/marp-pages.yml` - Builds and deploys slides to GitHub Pages

### Pipeline Requirements
- Node.js LTS version
- All linting errors must be resolved
- All Playwright tests must pass
- Production build must succeed

## Troubleshooting

### Common Issues
1. **Playwright install fails**: Retry `npx playwright install --with-deps` multiple times
2. **Tests timeout**: Ensure development server is running before tests start
3. **Linting failures**: Fix the 3 known linting errors before committing
4. **Build failures**: Run `npm run build` locally to identify TypeScript errors

### Browser Installation Alternative
If `npx playwright install --with-deps` continues to fail, try:
- `npx playwright install chromium firefox webkit` (without deps)
- Install system dependencies manually if needed
- Use devcontainer configuration in `.devcontainer/playwright/`

NEVER CANCEL long-running commands. Playwright installation and test execution require patience and appropriate timeouts.