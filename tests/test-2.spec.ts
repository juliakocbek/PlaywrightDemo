import { test, expect } from '@playwright/test';

test('filtering', async ({ page }) => {
  await page.goto('https://staging.estate.btc-city.com');
  await page.getByRole('button').filter({ hasText: /^$/ }).click();
  await page.getByRole('button', { name: 'Namembnost' }).click();
  await page.getByRole('menuitem', { name: 'Trgovina' }).click();
  await page.getByRole('button', { name: 'Stavba' }).click();
  await page.getByRole('menuitem', { name: 'Dvorana A' }).click();
  await page.getByRole('button', { name: 'Velikost' }).click();
  await page.getByRole('menuitem', { name: '↔ 200 m²' }).click();
  await page.locator('span').filter({ hasText: 'Trgovina' }).click();
});