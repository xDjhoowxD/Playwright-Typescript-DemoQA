import { test, expect } from '@playwright/test';
import fs from 'fs';
import { HandoffPage } from '../pages/HandoffPage';

const COOKIE_FILE = 'cookies.json';  // File to store cookies

test.beforeAll(async ({ page }) => {
  const handoffPage = new HandoffPage(page);

  // If cookies file doesn't exist, log in, set restaurant and save cookies
  if (!fs.existsSync(COOKIE_FILE)) {
    await handoffPage.selectValidRestaurant();  // Select the restaurant, or other necessary actions
    
    await handoffPage.goToMenu();  // Perform the login and setup flow
    
    // Save cookies to the file
    const cookies = await page.context().cookies();
    fs.writeFileSync(COOKIE_FILE, JSON.stringify(cookies));  // Save cookies in a JSON file
  }
});

test.beforeEach(async ({ page }) => {
  // If cookies file exists, restore the cookies
  if (fs.existsSync(COOKIE_FILE)) {
    const cookies = JSON.parse(fs.readFileSync(COOKIE_FILE, 'utf-8'));
    await page.context().addCookies(cookies);  // Add cookies to the context
  }

  // Navigate to the page (the session will be restored with cookies)
  await page.goto('https://test.potbelly.com/menu', { waitUntil: 'domcontentloaded' });
});

test('Potbelly test 1', async ({ page }) => {
  const handoffPage = new HandoffPage(page);

  // Verify the menu link is visible
// Wait for the element to be visible with a specific timeout
await handoffPage.menuLink.waitFor({ state: 'visible'});  // Timeout increased to 10 seconds
});

test('Potbelly test 2', async ({ page }) => {
  const handoffPage = new HandoffPage(page);

  // Verify the menu link is visible
// Wait for the element to be visible with a specific timeout
await handoffPage.menuLink.waitFor({ state: 'visible'});  // Timeout increased to 10 seconds
});

test('Potbelly test 3', async ({ page }) => {
  const handoffPage = new HandoffPage(page);

  // Verify the menu link is visible
// Wait for the element to be visible with a specific timeout
await handoffPage.menuLink.waitFor({ state: 'visible'});  // Timeout increased to 10 seconds
});
