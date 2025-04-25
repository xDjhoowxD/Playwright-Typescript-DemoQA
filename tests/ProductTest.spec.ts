import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { ProductsPage } from '../pages/ProductsPage';

test.beforeEach(async ({ page }) => {
  await page.goto('/');
});

test.describe('Product', () => {

  test("[1034] Product - Add Backpack to the Cart", async ({ page }) => { 
    const loginPage = new LoginPage(page);
    const productsPage = new ProductsPage(page);
    const product = "Sauce Labs Backpack";

    await loginPage.validLogin();
    await productsPage.addProductToCart(product);
    await productsPage.validateCartQuantity("1");

    // Capture screenshot at the end of the test
    await page.screenshot({ path: 'screenshots/backpack-to-cart.png' });
  });

  test("[1035] Product - Add Bike Light to the Cart", async ({ page }) => { 
    const loginPage = new LoginPage(page);
    const productsPage = new ProductsPage(page);
    const product = "Sauce Labs Bike Light";

    await loginPage.validLogin();
    await productsPage.addProductToCart(product);
    await productsPage.validateCartQuantity("1");

    // Capture screenshot at the end of the test
    await page.screenshot({ path: 'screenshots/bike-light-to-cart.png' });
  });

  test("[1036] Product - Add Bolt T-Shirt to the Cart", async ({ page }) => { 
    const loginPage = new LoginPage(page);
    const productsPage = new ProductsPage(page);
    const product = "Sauce Labs Bolt T-Shirt";

    await loginPage.validLogin();
    await productsPage.addProductToCart(product);
    await productsPage.validateCartQuantity("1");

    // Capture screenshot at the end of the test
    await page.screenshot({ path: 'screenshots/bolt-tshirt-to-cart.png' });
  });

  test("[1037] Product - Add Fleece Jacket to the Cart", async ({ page }) => { 
    const loginPage = new LoginPage(page);
    const productsPage = new ProductsPage(page);
    const product = "Sauce Labs Fleece Jacket";

    await loginPage.validLogin();
    await productsPage.addProductToCart(product);
    await productsPage.validateCartQuantity("1");

    // Capture screenshot at the end of the test
    await page.screenshot({ path: 'screenshots/fleece-jacket-to-cart.png' });
  });

  test("[1038] Product - Add Onesie to the Cart", async ({ page }) => { 
    const loginPage = new LoginPage(page);
    const productsPage = new ProductsPage(page);
    const product = "Sauce Labs Onesie";

    await loginPage.validLogin();
    await productsPage.addProductToCart(product);
    await productsPage.validateCartQuantity("1");

    // Capture screenshot at the end of the test
    await page.screenshot({ path: 'screenshots/onesie-to-cart.png' });
  });

  test("[1039] Product - Add Red T-Shirt to the Cart", async ({ page }) => { 
    const loginPage = new LoginPage(page);
    const productsPage = new ProductsPage(page);
    const product = "Test.allTheThings() T-Shirt (Red)";

    await loginPage.validLogin();
    await productsPage.addProductToCart(product);
    await productsPage.validateCartQuantity("1");

    // Capture screenshot at the end of the test
    await page.screenshot({ path: 'screenshots/red-tshirt-to-cart.png' });
  });

  test("[1040] Product - Add All Products to the Cart", async ({ page }) => { 
    const loginPage = new LoginPage(page);
    const productsPage = new ProductsPage(page);
    const product1 = "Sauce Labs Backpack";
    const product2 = "Sauce Labs Bike Light";
    const product3 = "Sauce Labs Bolt T-Shirt";
    const product4 = "Sauce Labs Fleece Jacket";
    const product5 = "Sauce Labs Onesie";
    const product6 = "Test.allTheThings() T-Shirt (Red)";

    await loginPage.validLogin();

    await productsPage.addProductToCart(product1);
    await productsPage.validateCartQuantity("1");

    await productsPage.addProductToCart(product2);
    await productsPage.validateCartQuantity("2");

    await productsPage.addProductToCart(product3);
    await productsPage.validateCartQuantity("3");

    await productsPage.addProductToCart(product4);
    await productsPage.validateCartQuantity("4");

    await productsPage.addProductToCart(product5);
    await productsPage.validateCartQuantity("5");

    await productsPage.addProductToCart(product6);
    await productsPage.validateCartQuantity("6");

    // Capture screenshot at the end of the test
    await page.screenshot({ path: 'screenshots/all-products-to-cart.png' });
  });

});
