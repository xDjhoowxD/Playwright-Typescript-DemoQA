import { Page,test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { ProductsPage } from '../pages/ProductsPage';

export class PageManager {
    private readonly page:Page
    private readonly loginPage: LoginPage
    private readonly productsPage: ProductsPage

    constructor(page:Page) {
        this.page = page
        this.loginPage = new LoginPage(this.page)
        this.productsPage = new ProductsPage(this.page)
    }
}