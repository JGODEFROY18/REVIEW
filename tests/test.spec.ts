import { chromium, Browser, test } from '@playwright/test';

test.describe('Formulaire', () => {
  let browser: Browser; // Déclarez une variable pour le navigateur afin de pouvoir le fermer à la fin

  test.beforeAll(async () => {
    // Ouvrir un navigateur Chromium avec Playwright au début de la suite de tests
    browser = await chromium.launch();
  });

  test.beforeEach(async ({ page }) => {
    // Accéder à l'URL de votre formulaire HTML à chaque début de test
    await page.goto('http://localhost:3000');
  });

  test('has title', async ({ page }) => {
    // Remplir le champ "Nom"
    await page.fill('#nom', 'John Doe');

    // Remplir le champ "Email"
    await page.fill('#email', 'jules@email.com');

    // Remplir le champ "Message"
    await page.fill('#message', 'Ceci est un message de test.');

    // Cliquer sur le bouton "Envoyer"
    await page.click('button[type=submit]');
  });

  test.afterAll(async () => {
    // Fermez le navigateur à la fin de la suite de tests
    await browser.close();
  });
});

