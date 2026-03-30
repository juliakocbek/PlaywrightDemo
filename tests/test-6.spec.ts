import { test, expect } from '@playwright/test';

test('no results through wizard', async ({ page }) => {
  await page.goto('https://staging.estate.btc-city.com');
  await page.getByRole('button', { name: 'Začni' }).click();
  await page.getByRole('button', { name: 'Pisarna' }).click();
  await page.getByRole('button', { name: '> 1000 m²' }).click();
  await page.getByRole('button', { name: 'Naprej' }).click();
  await page.getByRole('button', { name: 'Naravna svetloba' }).click();
  await page.getByRole('button', { name: 'Klimatska naprava' }).click();
  await page.getByRole('button', { name: 'Naprej' }).click();
  const noResultsMessage = page.getByText(/Noben prostor ne ustreza/i);
  await expect(noResultsMessage).toBeVisible();
});