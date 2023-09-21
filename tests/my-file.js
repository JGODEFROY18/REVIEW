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
const test_1 = require("@playwright/test");
(0, test_1.test)('a un titre', ({ page }) => __awaiter(void 0, void 0, void 0, function* () {
    yield page.goto('http://localhost:5500');
    // S'attend à ce que le titre "contienne" une sous-chaîne.
    yield (0, test_1.expect)(page).toHaveTitle(/Formulaire/);
}));
(0, test_1.test)('lien pour commencer', ({ page }) => __awaiter(void 0, void 0, void 0, function* () {
    yield page.goto('http://localhost:5500');
    // Clique sur le lien pour commencer.
    yield page.getByRole('button').click();
}));
