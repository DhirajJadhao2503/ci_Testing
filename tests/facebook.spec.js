
import { test, expect } from '@playwright/test';

test('First Playwright test with browser context', async ({ browser }) => {
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto('https://www.google.com');
});

test('Page fixture test', async ({ page }) => {
  await page.goto('https://www.facebook.com');
  console.log(await page.title());

  // Assertion for title
  await expect(page).toHaveTitle(/Facebook/);

  // Click login button (the ID may change dynamically)
  await page.getByRole('button', { name: 'Log in' }).click(); // More reliable locator
});