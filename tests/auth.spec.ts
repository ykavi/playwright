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
    await page.locator('[data-test-id="header-username-input"]').fill(process.env.USER_NAME || "");
    await page.locator('[data-test-id="header-password-input"]').click();
    await page.locator('[data-test-id="header-password-input"]').fill(process.env.PASSWORD || "");
    await page.locator('[data-test-id="header-login-btn"]').click();

    await page.waitForTimeout(2000);

    const isBetMinuteEnabled = await page.evaluate(() => {
      return window.BetMinuteEnabled;
    });

    console.log('isBetMinuteEnabled:', isBetMinuteEnabled);

    const username = page.locator('[data-testid="header-username"]');
    await expect(username).toHaveText('KKK');
  });
});
