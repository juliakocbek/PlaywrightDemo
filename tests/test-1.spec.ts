import { test, expect } from '@playwright/test';

test('listings', async ({ page }) => {
  await page.goto('https://staging.estate.btc-city.com');
  await page.getByRole('button').filter({ hasText: /^$/ }).click();
});