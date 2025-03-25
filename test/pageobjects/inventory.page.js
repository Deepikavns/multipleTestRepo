import { $ } from '@wdio/globals'
import LoginPage from './login.page.js';
import Page from './page.js';


class InventoryPage extends Page {

    get logo() {
        return $('span[class="title"]');
    }

    get hamburgereMenuIcon() {
        return $(' button[id="react-burger-menu-btn"]');
    }

    get allItemsbtn() {
        return $('//a[text()="All Items"]');
    }

    get aboutbtn() {
        return $('//a[text()="About"]');
    }

    get SauceLabLogo() {
        return $('[src="/images/logo.svg"]');
    }

    get addTOCart1() {
        return $('button[id="add-to-cart-sauce-labs-backpack"]')
    }

    get addTOCart2() {
        return $('#add-to-cart-sauce-labs-bike-light')
    }

    get addTOCart3() {
        return $('[name="add-to-cart-sauce-labs-bolt-t-shirt"]')
    }



    get cartItem() {
        return $('//*[@id="shopping_cart_container"]/a/span')
    }

    get cartBtn() {
        return $('//*[@id="shopping_cart_container"]/a')
    }
    get cartItemlist(){
        return $$("//div[@class='inventory_list']//a")

    }
    get resetBtn() {
        return $('#reset_sidebar_link');
    }

    get closeMenuBtn() {
        return $('//button[text()="Close Menu"]');
    }

    get logOutBtn() {
        return $('//a[text()="Logout"]');
    }



    async hamburgereMenu() {
        await this.hamburgereMenuIcon.waitForDisplayed({ timeout: 2000 })
        await this.hamburgereMenuIcon.click();
       
    }
    

   async hamburgereMenuIconDisplayed() {
        await expect(this.hamburgereMenuIcon).toBeDisplayed()
    }

    async logoutBtn() {
        await this.logOutBtn.click();
        await LoginPage.loginLogo.waitForDisplayed({ timeout: 2000 })
        await expect(LoginPage.loginLogo).toBeDisplayed();
    }

    async clickCloseMenubtn() {
        await this.closeMenuBtn.click();

    }

    async clickOnAboutBtn() {
        if (await this.aboutbtn.isDisplayed())
            await this.aboutbtn.click();
    }

    async cartBtnDisplay() {
        await expect(this.cartBtn).toBeDisplayed()
    }

    async sauceLabLogoDisplayed() {
        await expect(this.SauceLabLogo).toBeDisplayed();
    }

    async addTOCartBtn1() {
        await this.logo.waitForDisplayed({ timeout: 2000 })
        await this.addTOCart1.click();
    }
    async addTOCartBtn2() {
        await this.logo.waitForDisplayed({ timeout: 2000 })
        await this.addTOCart2.click();
    }
    async addTOCartBtn3() {
        await this.logo.waitForDisplayed({ timeout: 2000 })
        await this.addTOCart3.click();
    }

    async cartItemContains() {
        await expect(this.cartItem).toHaveText('1');
    }

    async resetBtnclick() {
        await this.resetBtn.click();
    }

    async logoDisplay() {
        await this.logo.waitForDisplayed({ timeout: 3000 })
        await expect(this.logo).toBeExisting();
    }

    async cartBtnClick(){
        await this.cartBtn.waitForDisplayed({ timeout: 3000 })
        await this.cartBtn.click();
    }

}


export default new InventoryPage();


