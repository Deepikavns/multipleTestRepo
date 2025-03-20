import { $ } from '@wdio/globals'
import Page from './page.js';




class InventoryPage extends Page {
   
    get logo () {
        return $('//div[text()="Swag Labs"]');
    }
}


export default new InventoryPage();


