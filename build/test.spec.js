"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const test_1 = require("playwright/test");
(0, test_1.test)('has title', ({ page }) => __awaiter(void 0, void 0, void 0, function* () {
    // Ouvrir un navigateur Chromium avec Playwright
    const browser = yield test_1.chromium.launch();
    // Accéder à l'URL de votre formulaire HTML
    yield page.goto('http://localhost:5500');
    // Remplir le champ "Nom"
    yield page.fill('#nom', 'John Doe');
    // Remplir le champ "Email"
    yield page.fill('#email', 'jules@email.com');
    // Remplir le champ "Message"
    yield page.fill('#message', 'Ceci est un message de test.');
    // Cliquer sur le bouton "Envoyer"
    yield page.click('button[type=submit]');
    // Attendre un peu pour voir les résultats (facultatif)
    yield page.waitForTimeout(2000); // Attendez 2 secondes, ajustez si nécessaire
    // Fermer le navigateur
    yield browser.close();
}));
