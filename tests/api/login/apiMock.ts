import { Page } from '@playwright/test';
import { membershipInfoSuccessResponse } from './memberMockData';

const cookies = [
    {
        name: 'lx',
        value: '0%2b%2fkNm6hpI%2fMpV5T0JHhXX2lUbB7kWkVQjabTvR%2fBfrikY3rgDNXPAgxHSCgRGIkZFznp8kQMoMij2%2f8hYRAeUyUCXvzK%2f9SwVRdH3XpiUKc0lM%2bpoCJVYflLCnIMUCo7Xc%2bzDIBJNx%2fbEfsZq2siaXpFB5hlaaBr6o9JSMcdDWIFG9pGReeDxm%2fe4CANGKOO4vtl69zcLXKyw2BmpEQ6378HdujaQHXDdhasBrHjesL0DWIMZLKRAXn8CW%2bPKRhjFb11liuLyEsKF4Add6upTh25ufhFyBMqtHH%2bYRvsCDCer7HSse9Zeqtm8Fz4iVKY0MfPhkuQGJSBIwB%2bbYQPFb%2fkgF9WIpv4vucdRGi%2fR1rpxmgrY0kxAkNFEpZSIqGQ1graiNkLuK3SRxqEf8G7w7m9TRfTuvgOTviFfU8GG8hnEmIUZL85S4%2fuOlvsG7XEjt5cu57cK3bSQTEYQDBVQ9375x%2bZZaZS0dw%2f07zLZ1QYJSGza8grTHIemXnC7S7xN6H6UV3M1VQYQZvXFuaIdDg9v%2b0m6PtU0foABjnt6WwxYysjt7xqoF6QttDi5MreFfA4VVMKZFoKlu%2brvw3bg%3d%3d',
        url: 'https://www.nesine.com',
    },
    {
        name: 'ls',
        value: 'n7vHVIYRLAzgSJzNLmmw4Wb5wGTVbjystJmVbDZqzh517o0a3Ar6WX06%2fdVeRPPsza0tkN%2fMGXhvyHnEJ0%2fcNqpc33GbK4kwJWR4wppMMtgUxJaYFinateahljwMjtf6EjaZZXgz8EpQKpZagJE2klz1QwyYqFBckF7NVvJsafNgPxBPR8jeEWVVoAYsGOjr%2bIu66CeuPVAUrwKJxVKA5SRsq3YRSym2mMPxN%2b0TtPzyvxPRNUzFQ6erct1O2GEOaZzYaI%2fqfTdiyKng6dgI5S5l699wRusiL8RWHzW%2b3DcyQRg0U6q7Jd0NvjDOpf4YZLGxPPbL1ccej%2bqMFyyQjYyjAoyszW%2fWAtPfR0qjreDZlLQYSKNFl4m9KwGNc%2fMA9xX4eMN%2bLwdWT%2flSdfMSMVAZuJ2Zv4lMepCyE4xF0I0Ts4ClOygdMaedmdUJw3fHwo8AnHYS7yRXT762N94V%2f20Uwa0N9hDgyxJyO2XmWpqqV%2f9X2WoAx90xCWwGPxMh9nd1cLCms8L3Ymu%2bCSEteod5OyOeoWeQlVr%2byAB99bxuckpN4P%2bvE%2fk%2f2CvHCehzptdFvfiuyn1umEs8ZXwUiw%3d%3d',
        url: 'https://www.nesine.com',
    },
];

export async function mockLoginAPI(page: Page) {
    await page.route('https://www.nesine.com/Auth/Login', async route => {
        await route.fulfill({
            status: 200,
            contentType: 'application/json',
            body: JSON.stringify(membershipInfoSuccessResponse),
        });
        await page.context().addCookies(cookies);
    });

    // TODO: login olduktan sonra sayfa yenilenince hangi data gelecek bir bak. Sonra bu scope'u ac.
    // await page.route('https://www.nesine.com/Auth/GetMemberInfo', async route => {
    //     await route.fulfill({
    //         status: 200,
    //         contentType: 'application/json',
    //         body: JSON.stringify(membershipInfoSuccessResponse),
    //     });
    // });
}
