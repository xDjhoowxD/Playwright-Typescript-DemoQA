import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';


test.beforeEach (async({page}) => {

  await page.goto('https://www.saucedemo.com/');
})


test('test', async ({ page }) => {
  await expect(page.locator('#root')).toContainText('Swag Labs');
  await page.locator('[data-test="username"]').click();
  await page.locator('[data-test="username"]').fill('wrongUser');
  await page.locator('[data-test="username"]').press('Tab');
  await page.locator('[data-test="password"]').fill('wrongPassword');
  await page.locator('[data-test="login-button"]').click();
  await expect(page.locator('[data-test="error"]')).toContainText('Epic sadface: Username and password do not match any user in this service');
  await page.locator('[data-test="username"]').click();
  await page.locator('[data-test="username"]').fill('standard_user');
  await page.locator('[data-test="username"]').press('Tab');
  await page.locator('[data-test="password"]').fill('secret_sauce');
  await page.locator('[data-test="login-button"]').click();
  await page.getByRole('button', { name: 'Open Menu' }).click();
  await page.locator('[data-test="inventory-sidebar-link"]').click();
  await page.getByRole('button', { name: 'Close Menu' }).click();
  await expect(page.locator('[data-test="title"]')).toContainText('Products');
  await expect(page.locator('[data-test="item-3-title-link"] [data-test="inventory-item-name"]')).toContainText('Test.allTheThings() T-Shirt (Red)');
  await page.locator('[data-test="add-to-cart-test\\.allthethings\\(\\)-t-shirt-\\(red\\)"]').click();
  await expect(page.locator('[data-test="remove-test\\.allthethings\\(\\)-t-shirt-\\(red\\)"]')).toContainText('Remove');
  await page.locator('[data-test="shopping-cart-link"]').click();
  await expect(page.locator('[data-test="title"]')).toContainText('Your Cart');
  await expect(page.locator('[data-test="inventory-item-name"]')).toContainText('Test.allTheThings() T-Shirt (Red)');
  await expect(page.locator('[data-test="remove-test\\.allthethings\\(\\)-t-shirt-\\(red\\)"]')).toContainText('Remove');
  await expect(page.locator('[data-test="continue-shopping"]')).toContainText('Continue Shopping');
  await expect(page.locator('[data-test="checkout"]')).toContainText('Checkout');
  await page.locator('[data-test="checkout"]').click();
  await page.locator('[data-test="firstName"]').click();
  await page.locator('[data-test="firstName"]').fill('firstName');
  await page.locator('[data-test="firstName"]').press('Tab');
  await page.locator('[data-test="lastName"]').fill('lastName');
  await page.locator('[data-test="lastName"]').press('Tab');
  await page.locator('[data-test="postalCode"]').fill('08555660');
  await expect(page.locator('[data-test="title"]')).toContainText('Checkout: Your Information');
  await expect(page.locator('[data-test="cancel"]')).toContainText('Cancel');
  await expect(page.locator('[data-test="continue"]')).toContainText('Continue');
  await page.locator('[data-test="continue"]').click();
  await expect(page.locator('[data-test="title"]')).toContainText('Checkout: Overview');
  await expect(page.locator('[data-test="cancel"]')).toContainText('Cancel');
  await page.locator('[data-test="finish"]').click();
  await expect(page.locator('[data-test="complete-header"]')).toContainText('Thank you for your order!');
  await expect(page.locator('[data-test="complete-text"]')).toContainText('Your order has been dispatched, and will arrive just as fast as the pony can get there!');
  await expect(page.locator('[data-test="back-to-products"]')).toContainText('Back Home');
  await expect(page.locator('[data-test="title"]')).toContainText('Checkout: Complete!');
});