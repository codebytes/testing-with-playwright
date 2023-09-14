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
