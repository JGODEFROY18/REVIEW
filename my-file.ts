import { test, expect } from '@playwright/test';

test('a un titre', async ({ page }) => {
  await page.goto('http://localhost:5500');

  // S'attend à ce que le titre "contienne" une sous-chaîne.
  await expect(page).toHaveTitle(/Playwright/);
});

test('lien pour commencer', async ({ page }) => {
  await page.goto('http://localhost:5500');

  // Clique sur le lien pour commencer.
  await page.getByRole('button').click();

  // S'attend à ce que la page contienne un titre avec le nom Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});

