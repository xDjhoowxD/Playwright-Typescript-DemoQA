import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

// test.beforeAll (async({page}) => {
// })

test.beforeEach (async({page}) => {

  await page.goto('/');
})

test("Login with invalid username and invalid passowrd", async ({page}) => { 
  const loginPage = new LoginPage(page)
  const username = "aaa"
  const password = "bbb"
  const errorMessage = "Epic sadface: Username and password do not match any user in this service"

  await loginPage.login(username,password)
  await loginPage.validateErrorMessage(errorMessage)
})

test("Login with valid username and invalid password", async ({page}) => { 
  const loginPage = new LoginPage(page)
  const username = "standard_user"
  const password = "bbb"
  const errorMessage = "Epic sadface: Username and password do not match any user in this service"

  await loginPage.login(username,password)
  await loginPage.validateErrorMessage(errorMessage)
})

test("Login with invalid username and valid password", async ({page}) => { 
  const loginPage = new LoginPage(page)
  const username = "aaa"
  const password = "secret_sauce"
  const errorMessage = "Epic sadface: Username and password do not match any user in this service"

  await loginPage.login(username,password)
  await loginPage.validateErrorMessage(errorMessage)
})

test("Login with valid username and valid password", async ({page}) => { 
  const loginPage = new LoginPage(page)
  const username = "standard_user"
  const password = "secret_sauce"

  await loginPage.login(username,password)
})
