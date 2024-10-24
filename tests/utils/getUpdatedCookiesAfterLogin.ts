import { Cookie, chromium } from 'playwright';

export const getUpdatedCookiesAfterLogin = async (): Promise<Cookie[]> => {
    const browser = await chromium.launch({ headless: false });
    const context = await browser.newContext();
    const loginPage = await context.newPage();
    await loginPage.goto('https://www.nesine.com/uyelik/giris');
    await loginPage.click('a.btn-close[title="kapat"]');
    await loginPage.getByRole('button', { name: 'Kabul Et' }).click();
    await loginPage.getByRole('textbox', { name: 'Üye No, TC No, YKN, Kullanıc' }).click();
    await loginPage.getByRole('textbox', { name: 'Üye No, TC No, YKN, Kullanıc' }).fill('12105134030');
    await loginPage.locator('#realpassLP').click();
    await loginPage.locator('#realpassLP').fill('qaz123');
    await loginPage.getByRole('link', { name: 'GİRİŞ' }).click();
    await loginPage.reload();
    await loginPage.close();

    return context.cookies();
}
