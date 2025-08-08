# GitHub Copilot Instructions for Testing with Playwright

## Repository Overview

This repository demonstrates Playwright testing best practices through a React Todo application. It serves as an educational resource for learning end-to-end testing with Playwright, featuring comprehensive test examples, CI/CD integration, and presentation materials.

## Project Structure

```
├── src/                 # React Todo application source code
├── tests/              # Playwright test files
├── slides/             # Presentation materials
├── .github/            # GitHub workflows and configurations
├── .devcontainer/      # Development container configurations
└── public/             # Static assets
```

## Technology Stack

- **Frontend**: React 19 + TypeScript + Vite
- **Testing**: Playwright with TypeScript
- **Styling**: CSS with modern features
- **Build Tool**: Vite
- **Linting**: ESLint with TypeScript support
- **Package Manager**: npm

## Code Standards and Conventions

### TypeScript/React Conventions
- Use TypeScript strict mode for all code
- Define explicit interfaces for data structures (see `Todo` interface in App.tsx)
- Use functional components with hooks
- Prefer `const` for variables and arrow functions
- Use meaningful variable and function names
- Keep components focused and single-responsibility

### File Organization
- React components in `src/` directory
- Test files use `.spec.ts` extension in `tests/` directory
- Use kebab-case for test file names (e.g., `todo-app.spec.ts`)
- Group related tests using `test.describe()` blocks

### Playwright Testing Patterns

#### Test Structure
- Use descriptive test names that explain the behavior being tested
- Group tests logically with `test.describe()` blocks
- Use `test.beforeEach()` for common setup (navigation, etc.)
- Follow AAA pattern: Arrange, Act, Assert

#### Locator Strategies
- Prefer semantic locators when possible: `page.getByRole()`, `page.getByPlaceholder()`
- Use CSS selectors for specific UI elements: `.todo-list li`, `input[type="text"]`
- Use data-testid attributes for complex elements when needed
- Chain locators for precision: `page.locator('.todo-list li').first().locator('button')`

#### Common Patterns
```typescript
// Navigation setup
test.beforeEach(async ({ page }) => {
  await page.goto('/');
});

// Locator patterns
const inputField = page.locator('input[type="text"]');
const todoItems = page.locator('.todo-list li');
const checkboxes = page.locator('.todo-list li input[type="checkbox"]');

// Assertions
await expect(todoItems).toHaveCount(2);
await expect(todoItems.first()).toContainText('expected text');
await expect(inputField).toHaveValue('');
```

#### Test Data
- Define test data constants at the top of test files
- Use meaningful, realistic test data
- Use arrays for multiple test items: `const TODO_ITEMS = ['item1', 'item2']`

### Error Handling and Edge Cases
- Always test both happy path and edge cases
- Test empty inputs, whitespace-only inputs
- Verify state persistence across page reloads
- Test interaction sequences (add, toggle, delete)

## Development Workflow

### Available Scripts
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run lint` - Run ESLint
- `npm run test` - Run Playwright tests
- `npm run test:ui` - Run tests with UI mode
- `npm run test:debug` - Debug tests
- `npm run test:chromium` - Run tests on Chromium only

### Testing Commands
- Always run tests before committing changes
- Use UI mode (`npm run test:ui`) for interactive test development
- Use debug mode for troubleshooting failing tests
- Test across multiple browsers in CI/CD

### Local Storage Considerations
- The Todo app uses localStorage for persistence
- Tests should account for this behavior
- Clean state between tests when needed
- Test persistence scenarios explicitly

## Code Quality Guidelines

### ESLint Rules
- Follow the configured ESLint rules in `eslint.config.js`
- Avoid `any` types - use specific type definitions
- Remove unused imports and variables
- Use consistent code formatting

### TypeScript Best Practices
- Define interfaces for all data structures
- Use type annotations for function parameters and returns
- Avoid implicit `any` types
- Use type guards when working with dynamic data

### Test Quality
- Write clear, descriptive test names
- Keep tests focused and atomic
- Use appropriate wait strategies and assertions
- Cover both positive and negative scenarios
- Test user workflows end-to-end

## Educational Context

This repository is designed for learning and demonstration:
- Tests showcase various Playwright features and patterns
- Code examples are intentionally verbose for clarity
- Comments explain testing strategies and decisions
- Multiple test approaches are demonstrated for comparison

## CI/CD Integration

- GitHub Actions workflows run tests on multiple browsers
- Tests run on pull requests and main branch changes
- Build and test artifacts are preserved
- Consider browser compatibility when making changes

## Contributing Guidelines

When adding new features or tests:
1. Follow existing code patterns and conventions
2. Add comprehensive test coverage
3. Update documentation if needed
4. Ensure all tests pass in multiple browsers
5. Keep changes focused and atomic
6. Write descriptive commit messages

## Common Gotchas

- The Todo app uses React 19, ensure compatibility
- LocalStorage behavior may vary in different test environments
- Vite dev server startup time should be considered in CI
- Playwright auto-wait is helpful but understand when to use explicit waits
- CSS selectors may be fragile - prefer semantic selectors when possible

## Resources

- [Playwright Documentation](https://playwright.dev/)
- [React Documentation](https://react.dev/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Vite Documentation](https://vitejs.dev/)