import { test, expect } from '@playwright/test';
import { mockLoginAPI } from './api/login/apiMock';

test.describe('Login', () => {
  test.beforeEach(async ({ page }) => {
    await mockLoginAPI(page);
  });

  test('User name check', async ({ page }) => {
    await page.goto('https://nesine.com/');
    await page.waitForTimeout(2000);

    await page.getByRole('button', { name: 'Kabul Et' }).click();
    await page.getByRole('button', { name: '' }).click();
    await page.locator('[data-test-id="header-username-input"]').click();
    await page.locator('[data-test-id="header-username-input"]').fill('12105134030');
    await page.locator('[data-test-id="header-password-input"]').click();
    await page.locator('[data-test-id="header-password-input"]').fill('qaz123');
    await page.locator('[data-test-id="header-login-btn"]').click();


    const isBetMinuteEnabled = await page.evaluate(() => {
      return window.BetMinuteEnabled;
    });

    console.log('isBetMinuteEnabled:', isBetMinuteEnabled);

    const username = page.locator('[data-testid="header-username"]');
    await expect(username).toHaveText('KKK');
  });
});
