import { defineConfig, devices } from '@playwright/test';
import type { AzureReporterOptions } from '@alex_neo/playwright-azure-reporter/dist/playwright-azure-reporter';

/**
 * See https://playwright.dev/docs/test-configuration.
 */
export default defineConfig({
  testDir: './tests',
  /* Run tests in files in parallel */
  fullyParallel: true,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: process.env.CI ? 1 : 1,
  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 1 : 2,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: [
    ['html', { outputFolder: 'playwright-report' }],
    ['junit', { outputFile: 'test-results/results.xml' }],
    [
      '@alex_neo/playwright-azure-reporter',
      {
        orgUrl: 'https://dev.azure.com/jhonatanpereira0088',
        token: 'Afp5FO0sBznsZzyMbkLnGvGLR0AviGyeZW9u9uD2pQRzPV4SGQQdJQQJ99BDACAAAAAHPvqVAAASAZDOyw3p',
        planId: 1032,
        projectName: 'Demo Project',
        environment: 'QA',
        logging: true,
        testRunTitle: 'Playwright Test Run',
        publishTestResultsMode: 'testRun',
        uploadAttachments: true,
        attachmentsType: ['screenshot', 'video', 'trace'],
        testCaseIdMatcher: /\[(\d+)\]/,
        testRunConfig: {
          owner: {
            displayName: 'Jhonatan da Silva Pereira',
          },
          comment: 'Playwright Test Run',
          configurationIds: [3],
        },
      } as AzureReporterOptions,
    ],
  ],
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    /* Base URL to use in actions like `await page.goto('/')`. */
    baseURL: 'https://www.saucedemo.com',

    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: 'on', // Collect trace for all tests
    video: 'on', // Record videos for all tests
    screenshot: 'on', // Enable screenshots on failure or always

  },

  /* Default timeout for all tests */
  timeout: 20000,  // Set the default timeout to 20 seconds for all tests

  /* Configure projects for major browsers */
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],

  /* Run your local dev server before starting the tests */
  // webServer: {
  //   command: 'npm run start',
  //   url: 'http://127.0.0.1:3000',
  //   reuseExistingServer: !process.env.CI,
  // },
});
