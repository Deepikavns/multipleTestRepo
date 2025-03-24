import { $ } from '@wdio/globals'
import Page from './page.js';


class InventoryPage extends Page {

    get logo() {
        return $('//div[text()="Swag Labs"]');
    }

    get hamburgereMenuIcon() {
        return $(' button[id="react-burger-menu-btn"]');
    }
    get allItemsbtn(){
        return $('//a[text()="All Items"]');
    }

    get aboutbtn(){
        return $('//a[text()="About"]');
    }
    get SauceLabLogo(){
        return $('[src="/images/logo.svg"]');
    }
   get addTOCart(){
    return $('button[id="add-to-cart-sauce-labs-backpack"]')
   }
   get cartBtn(){
    return $('//span[text()="1"]')
   }

    get resetBtn(){
        return $('#reset_sidebar_link');
    }

    get closeMenuBtn() {
        return $('//button[text()="Close Menu"]');
    }

    get logOutBtn() {
        return $('//a[text()="Logout"]');
    }

    async hamburgereMenu() {
        await this.hamburgereMenuIcon.click();
    }

    async hamburgereMenuIconDisplayed() {
        await this.hamburgereMenuIcon.isDisplayed()
    }

    async logoutBtn() {
        await this.logOutBtn.click();
    }
    async clickCloseMenubtn(){
        await this.closeMenuBtn.click();

    }
    async clickOnAboutBtn(){
       if( await this.aboutbtn.isDisplayed())
        await this.aboutbtn.click();
    }
    async sauceLabLogoDisplayed(){
        await this.SauceLabLogo.isDisplayed();
    }
    async addTOCartBtn(){
        await this.addTOCart.click();
    }
    async resetBtnclick(){
        await this.resetBtn.click();
    }

}


export default new InventoryPage();


