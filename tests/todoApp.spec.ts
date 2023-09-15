import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/React App/);
});

test('has 2 todos', async ({ page }) => {
  await page.goto('/');
  const todoItems = page.locator('li');
  await expect(todoItems).toHaveCount(2);
});

test('can add todos', async ({ page }) => {
  await page.goto('/');
  const todoItems = page.locator('li');
  await expect(todoItems).toHaveCount(2);
  await page.getByRole('textbox').fill('buy dog food');
  await page.getByRole('button', { name: 'Add Todo' }).click();
  const updatedTodoItems = page.locator('li');
  await expect(updatedTodoItems).toHaveCount(3);
});

test('validate ui of todos', async ({ page }) => {
  await page.goto('/');
  await page.screenshot({ path: 'screenshot.png' });
});

