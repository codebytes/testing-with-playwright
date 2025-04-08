import { test, expect, type Page } from '@playwright/test';

/**
 * Test file for Todo application
 * Tests core functionality including adding, toggling, and deleting todos
 */

// Sample todo items to use in tests
const TODO_ITEMS = [
  'Learn Playwright',
  'Write automated tests',
  'Enjoy testing!'
];

test.beforeEach(async ({ page }) => {
  // Navigate to the todo app for each test
  await page.goto('/');
});

test.describe('Todo App Tests', () => {
  test('should have the correct title', async ({ page }) => {
    await expect(page).toHaveTitle(/Vite \+ React \+ TS/);
  });

  test('should allow adding new todo items', async ({ page }) => {
    // Get the input field
    const inputField = page.locator('input[type="text"]');
    
    // Add a todo item
    await inputField.fill(TODO_ITEMS[0]);
    await page.keyboard.press('Enter');
    
    // Verify the todo was added
    const todoItems = page.locator('.todo-list li');
    await expect(todoItems).toHaveCount(1);
    await expect(todoItems.first()).toContainText(TODO_ITEMS[0]);
    
    // Add another todo item
    await inputField.fill(TODO_ITEMS[1]);
    await page.keyboard.press('Enter');
    
    // Verify both todos are present
    await expect(todoItems).toHaveCount(2);
    await expect(todoItems.nth(1)).toContainText(TODO_ITEMS[1]);
  });

  test('should clear the input field after adding a todo', async ({ page }) => {
    const inputField = page.locator('input[type="text"]');
    
    // Add a todo and verify the input is cleared
    await inputField.fill(TODO_ITEMS[0]);
    await page.keyboard.press('Enter');
    
    // Input should be empty after adding a todo
    await expect(inputField).toHaveValue('');
  });

  test('should allow marking a todo as completed', async ({ page }) => {
    // Add a todo
    const inputField = page.locator('input[type="text"]');
    await inputField.fill(TODO_ITEMS[0]);
    await page.keyboard.press('Enter');
    
    // Mark the todo as completed
    const checkboxes = page.locator('.todo-list li input[type="checkbox"]');
    await checkboxes.first().check();
    
    // Verify the todo has the 'completed' class
    const todoItem = page.locator('.todo-list li').first();
    await expect(todoItem).toHaveClass(/completed/);
  });

  test('should allow deleting a todo', async ({ page }) => {
    // Add two todos
    const inputField = page.locator('input[type="text"]');
    
    await inputField.fill(TODO_ITEMS[0]);
    await page.keyboard.press('Enter');
    
    await inputField.fill(TODO_ITEMS[1]);
    await page.keyboard.press('Enter');
    
    // Verify there are two todos
    const todoItems = page.locator('.todo-list li');
    await expect(todoItems).toHaveCount(2);
    
    // Delete the first todo
    await page.locator('.todo-list li').first().locator('button').click();
    
    // Verify there's only one todo left and it's the correct one
    await expect(todoItems).toHaveCount(1);
    await expect(todoItems.first()).toContainText(TODO_ITEMS[1]);
  });

  test('should persist todos after page reload', async ({ page }) => {
    // Add a todo
    const inputField = page.locator('input[type="text"]');
    await inputField.fill(TODO_ITEMS[0]);
    await page.keyboard.press('Enter');
    
    // Mark the todo as completed
    const checkbox = page.locator('.todo-list li input[type="checkbox"]').first();
    await checkbox.check();
    
    // Reload the page
    await page.reload();
    
    // Verify the todo still exists and is still marked as completed
    const todoItems = page.locator('.todo-list li');
    await expect(todoItems).toHaveCount(1);
    await expect(todoItems.first()).toContainText(TODO_ITEMS[0]);
    
    // Verify checkbox is still checked
    const reloadedCheckbox = page.locator('.todo-list li input[type="checkbox"]').first();
    await expect(reloadedCheckbox).toBeChecked();
  });
});

// Tests for edge cases
test.describe('Edge Cases', () => {
  test('should not add empty todos', async ({ page }) => {
    // Try to add an empty todo
    const inputField = page.locator('input[type="text"]');
    await inputField.fill('');
    await page.keyboard.press('Enter');
    
    // Verify no todo was added
    const todoItems = page.locator('.todo-list li');
    await expect(todoItems).toHaveCount(0);
  });
  
  test('should not add todos with only whitespace', async ({ page }) => {
    // Try to add a todo with only spaces
    const inputField = page.locator('input[type="text"]');
    await inputField.fill('   ');
    await page.keyboard.press('Enter');
    
    // Verify no todo was added
    const todoItems = page.locator('.todo-list li');
    await expect(todoItems).toHaveCount(0);
  });
});
