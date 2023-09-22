import { chromium, Browser, test } from '@playwright/test';

test.describe('Formulaire', () => {
  test.beforeEach(async ({ page }) => {
    // Accéder à l'URL de votre formulaire HTML
    await page.goto('http://localhost:3000');
  });

  test('has title', async ({ page }) => {
    // Ouvrir un navigateur Chromium avec Playwright
    const browser: Browser = await chromium.launch();

    // Remplir le champ "Nom"
    await page.fill('#nom', 'John Doe');

  // Remplir le champ "Nom"
  await page.fill('#nom', 'John Doe');

  // Remplir le champ "Email"
  await page.fill('#email', 'jules@email.com');

  // Remplir le champ "Message"
  await page.fill('#message', 'Ceci est un message de test.');

  // Cliquer sur le bouton "Envoyer"
  await page.click('button[type=submit]');

    // Fermer le navigateur
    await browser.close();
  });
});
