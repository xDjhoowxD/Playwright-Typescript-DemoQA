import {Locator, Page, expect} from "@playwright/test";

export class ProductsPage {
        readonly page:Page
        readonly categoryTitle: Locator
        readonly productName: Locator
        readonly cart: Locator

    constructor(page: Page) {
        this.page = page
        this.categoryTitle = page.locator('[data-test="title"]')
        this.productName = page.locator('.inventory_list .inventory-item')
        this.cart = page.locator('[data-test="shopping-cart-link"]')
    }

    async addProductToCart(product) {
        const productElement = this.page.locator('.inventory_item')
            .filter({ has: this.page.locator('.inventory_item_name', { hasText: product }) });

        // Ensure the product is visible before interacting with it
        await productElement.waitFor();

        // Click the 'Add to cart' button for the specific product
        const addToCartButton = productElement.getByText("Add to cart");
        await addToCartButton.click();
    } 

    async validateCartQuantity(quantity) {
        await expect(this.cart).toHaveText(quantity)
    }
}