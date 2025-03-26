import { $ } from '@wdio/globals'
import Page from './page.js';

class CartPage extends Page {
    get yourCartLogo() {
        return $('//span[text()="Your Cart"]')
    }

    get continueShoppingBtn() {
        return $('#continue-shopping')
    }

    get quantity() {
        return $('//div[@class="cart_quantity"][text()="1"]')
    }
    get description() {
        return $('//div[@class="inventory_item_desc"]')
    }

    get checkOutBtn() {
        return $('button#checkout')
    }

    get removeBtnList() {
        return $$('//button[text()="Remove"]')
    }
    get backPack() {
        return $('[id="item_4_title_link"]')
    }

    async removeitem() {
        for (let i = 0; i < this.removeBtnList.length; i++) {
            const nameItem = await this.removeBtnList[i].getText();
            if (nameItem === 'Sauce Labs Backpack') {
                await this.nameItem.click();
                expect(backPack).to.equal(false);
            }

        }

    }

    async yourCartDisplay() {
        await this.yourCartLogo.waitForDisplayed({ timeout: 2000 })
        await expect(this.yourCartLogo).toBeDisplayed();
    }

    async clickContinueShoppingBtn() {
        await this.continueShoppingBtn.click();
    }

    async quantityText() {
        await expect(this.quantity).toBeDisplayed();
    }

    async descriptionText() {
        await expect(this.description).toBeDisplayed();
    }

    async clickOnCheckOutBtn() {
        await this.checkOutBtn.click();

}
}

export default new CartPage();