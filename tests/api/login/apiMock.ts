import { Page } from '@playwright/test';
import { membershipInfoSuccessResponse } from './memberMockData';

const cookies = [
    {
        name: 'lx',
        value: '0%2b%2fkNm6hpI%2fMpV5T0JHhXX2lUbB7kWkVQjabTvR%2fBfrikY3rgDNXPAgxHSCgRGIkZFznp8kQMoMij2%2f8hYRAeUyUCXvzK%2f9SwVRdH3XpiUKc0lM%2bpoCJVYflLCnIMUCo7Xc%2bzDIBJNx%2fbEfsZq2siaXpFB5hlaaBr6o9JSMcdDWIFG9pGReeDxm%2fe4CANGKOO4vtl69zcLXKyw2BmpEQ6378HdujaQHXDdhasBrHjesL0DWIMZLKRAXn8CW%2bPKRhjFb11liuLyEsKF4Add6upTh25ufhFyBMqtHH%2bYRvsCDCer7HSse9Zeqtm8Fz4iVKY0MfPhkuQGJSBIwB%2bbYQPFb%2fkgF9WIpv4vucdRGi%2fR1rpxmgrY0kxAkNFEpZSIqGQ1graiNkLuK3SRxqEf8G7w7m9TRfTuvgOTviFfU8GG8hnEmIUZL85S4%2fuOlvsG7XEjt5cu57cK3bSQTEYQDBVQ9375x%2bZZaZS0dw%2f07zLZ1QYJSGza8grTHIemXnC7S7xN6H6UV3M1VQYQZvXFuaIdDg9v%2b0m6PtU0foABjnt6WwxYysjt7xqoF6QttDi5MreFfA4VVMKZFoKlu%2brvw3bg%3d%3d',
        url: 'https://nesine.com',
    },
];

export async function mockLoginAPI(page: Page) {
    await page.route('https://nesine.com/Auth/Login', async route => {
        await route.fulfill({
            status: 200,
            contentType: 'application/json',
            body: JSON.stringify(membershipInfoSuccessResponse),
        });
    });
    // await page.route('https://nesine.com/Auth/GetMemberInfo', async route => {
    //     await route.fulfill({
    //         status: 200,
    //         contentType: 'application/json',
    //         body: JSON.stringify(membershipInfoSuccessResponse),
    //     });
    // });
    await page.context().addCookies(cookies);
}
