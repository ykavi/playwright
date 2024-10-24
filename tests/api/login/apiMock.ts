import { Page } from '@playwright/test';
import { membershipInfoSuccessResponse } from './memberMockData';
import { getUpdatedCookiesAfterLogin } from '../../utils';


export async function mockLoginAPI(page: Page) {

    const cookies = await getUpdatedCookiesAfterLogin();

    await page.route('https://www.nesine.com/Auth/Login', async route => {
        await route.fulfill({
            status: 200,
            contentType: 'application/json',
            body: JSON.stringify(membershipInfoSuccessResponse),
        });
        await page.context().addCookies(cookies);
    });

    // // TODO: login olduktan sonra sayfa yenilenince hangi data gelecek bir bak.Sonra bu scope'u ac.
    // await page.route('https://www.nesine.com/Auth/GetMemberInfo', async route => {
    //     await route.fulfill({
    //         status: 200,
    //         contentType: 'application/json',
    //         body: JSON.stringify(membershipInfoSuccessResponse.membershipInfo),
    //     });
    //     await page.context().addCookies(cookies);
    // });
}
