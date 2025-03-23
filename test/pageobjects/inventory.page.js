import { $ } from '@wdio/globals'
import Page from './page.js';


class InventoryPage extends Page {

    get logo() {
        return $('//div[text()="Swag Labs"]');
    }

    get hamburgereMenuBtn() {
        return $(' button[id="react-burger-menu-btn"]');
    }


    get logOutBtn() {
        return $('//a[text()="Logout"]');
    }

    async hamburgereMenu() {
        await this.hamburgereMenuBtn.click();
    }

    async logoutBtn() {
        await this.logOutBtn.click();
    }

}


export default new InventoryPage();


