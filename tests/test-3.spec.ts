import { test, expect } from '@playwright/test';

test('details', async ({ page }) => {
  await page.goto('https://staging.nepremicnine.btc-city.com/ljubljana');
  await page.getByRole('button').filter({ hasText: /^$/ }).click();
  await page.goto('https://staging.nepremicnine.btc-city.com/ljubljana/storitvena-dejavnost-multi-3125m2-067/289');
  await expect(page.getByRole('img', { name: 'Velika fotografija prostora' })).toBeVisible();
  await expect(page.getByRole('heading', { name: /Oglas ŠIFRA:/i })).toBeVisible();
  await expect(page.getByText('Povprečna cena:')).toBeVisible();
  const polja = ['Ime*', 'Priimek*', 'E-naslov*', 'Podjetje*'];
  for (const polje of polja) {
    await expect(page.getByText(polje)).toBeVisible();
  }
  await expect(page.getByRole('heading', { name: 'Tehnični podatki' })).toBeVisible();
});