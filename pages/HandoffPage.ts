import { Locator, Page, expect } from "@playwright/test";

export class HandoffPage {
    readonly page: Page;
    readonly startOrderButton: Locator;
    readonly pickupButton: Locator;
    readonly mapSearchField: Locator;
    readonly addressButton: Locator;
    readonly heatingText: Locator;
    readonly potbellyLabButton: Locator;
    readonly inShopPickupButton: Locator;
    readonly asapLabel: Locator;
    readonly continueToMenuButton: Locator;
    readonly menuLink: Locator;

    constructor(page: Page) {
        this.page = page;
        this.startOrderButton = page.locator('[data-testid="header-start-order-button"]');
        this.pickupButton = page.locator('[data-testid="pickup-button"]');
        this.mapSearchField = page.locator('[data-testid="map-search-field"]');
        this.addressButton = page.locator('button', { hasText: /North Canal Street, Chicago, (IL|Illinois), (USA|EUA)/ });
        this.heatingText = page.locator('text=Heating up...');
        this.potbellyLabButton = page.locator('button', { hasText: 'Potbelly Lab 888 UAT Open' });
        this.inShopPickupButton = page.locator('button', { hasText: 'In-Shop Pick Up' });
        this.asapLabel = page.locator('label', { hasText: 'Get it ASAP' }).locator('div');
        this.continueToMenuButton = page.locator('[data-testid="continue-to-menu-button"]');
        this.menuLink = page.locator('[data-testid="menu-link-menu"]');
    }

    async goToMenu() {
        await this.page.goto('https://test.potbelly.com/', { waitUntil: 'domcontentloaded' });
        await this.startOrderButton.click();
        await this.pickupButton.click();
        await this.mapSearchField.click();
        await this.mapSearchField.fill('111 n canal st');
        await this.addressButton.click();
        //await this.heatingText.click();
        //await this.potbellyLabButton.click();
        await this.inShopPickupButton.click();
        await this.asapLabel.click();
        await this.continueToMenuButton.click();
        await expect(this.menuLink).toBeVisible();
    }

    async selectValidRestaurant() {
        await this.page.goto('https://test.potbelly.com/', { waitUntil: 'domcontentloaded' });
        await this.startOrderButton.click();
        await this.pickupButton.click();
        await this.mapSearchField.click();
        await this.mapSearchField.fill('111 n canal st');
        await this.addressButton.click();
        //await this.heatingText.click();
        //await this.potbellyLabButton.click();
        await this.inShopPickupButton.click();
        await this.asapLabel.click();
        await this.continueToMenuButton.click();
    }


}
