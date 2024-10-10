const { test, expect } = require('@playwright/test');

test('basic test', async ({ page }) => {
    // Dinamik olarak URL'yi ayarla (TeamCity'den veya local ortamdan alınır)
    const baseURL = process.env.TEST_URL || 'http://localhost:3000';

    // Sayfayı ziyaret et
    await page.goto(baseURL);

    // Sayfa başlığının doğru olup olmadığını test et
    const title = await page.title();
    expect(title).toBe('Example Domain');
});
