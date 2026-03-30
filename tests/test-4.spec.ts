import { test, expect } from '@playwright/test';

test('required fields error', async ({ page }) => { 
  await page.goto('https://staging.estate.btc-city.com');
  await page.getByRole('button').filter({ hasText: /^$/ }).click();
  await page.getByRole('img', { name: 'Naslovna fotografija' }).first().click();
  await page.getByRole('textbox', { name: 'Novak', exact: true }).click();
  await page.getByRole('textbox', { name: 'Novak', exact: true }).fill('Test');
  await page.getByRole('textbox', { name: 'janja.novak@trgovina.si' }).click();
  await page.getByRole('textbox', { name: 'janja.novak@trgovina.si' }).fill('hello@test');
  await page.getByRole('button', { name: 'Oddaj povpraševanje' }).click();
  const errorMessages = page.getByText('Obvezno polje');
  await expect(errorMessages.first()).toBeVisible();
});