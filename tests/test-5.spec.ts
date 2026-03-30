import { test, expect } from '@playwright/test';

test('no results through filtering', async ({ page }) => {
  await page.goto('https://staging.estate.btc-city.com');
  await page.getByRole('button').filter({ hasText: /^$/ }).click();
  await page.getByRole('button', { name: 'Namembnost' }).click();
  await page.getByRole('menuitem', { name: 'Pisarna' }).click();
  await page.getByRole('button', { name: 'Velikost' }).click();
  await page.getByRole('menuitem', { name: '> 1000 m²' }).click();
  const noResultsMessage = page.getByText(/Noben prostor ne ustreza/i);
  await expect(noResultsMessage).toBeVisible();
  });