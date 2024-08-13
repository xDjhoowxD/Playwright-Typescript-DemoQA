import {Locator, Page, expect} from "@playwright/test";

export class LoginPage {
    readonly page:Page
    readonly userNameField: Locator
    readonly passwordField: Locator
    readonly loginButton: Locator
    readonly errorMessage: Locator

    constructor(page: Page) {
        this.page = page
        this.userNameField = page.locator('[data-test="username"]')
        this.passwordField = page.locator('[data-test="password"]')
        this.loginButton = page.locator('[data-test="login-button"]')
        this.errorMessage = page.locator('[data-test="error"]')
    }

    async login(username,password) {
        await this.userNameField.fill(username)
        await this.passwordField.fill(password)
        await this.loginButton.click()
    }

    async validLogin() {
        const validUsername = "standard_user"
        const validPassword = "secret_sauce"

        await this.userNameField.fill(validUsername)
        await this.passwordField.fill(validPassword)
        await this.loginButton.click() 
    }

    async validateErrorMessage(errorMessage) {
        await expect(this.errorMessage).toContainText(errorMessage);    
    }
}