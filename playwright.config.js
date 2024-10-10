const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
    use: {
        baseURL: process.env.TEST_URL || 'http://localhost:3000', // Dinamik URL (varsayılan: localhost)
        headless: true,  // Testleri headless modda çalıştır
    },
    reporter: [['junit', { outputFile: 'test-results/results.xml' }]], // JUnit raporu
    testDir: './tests', // Testlerin olduğu dizin
});
