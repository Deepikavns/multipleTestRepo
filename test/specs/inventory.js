import{expect} from '@wdio/globals'
import LoginPage from '../pageobjects/login.page.js'
import InventoryPage from '../pageobjects/inventory.page.js';


describe('Test hamburger menu button ', () => {

   beforeEach('login functionality',async() => {
     await LoginPage.open();
            await LoginPage.login('standard_user', 'secret_sauce');
            await browser.pause(3000);
            await expect(InventoryPage.logo).toBeExisting();
         });

    it('Verify hamburger menu functionality', async() => {
       await InventoryPage.hamburgereMenu();
       await browser.pause(3000);
       await InventoryPage.clickCloseMenubtn();
       await expect(InventoryPage.hamburgereMenuIconDisplayed);
      
        
})
it.only('Verify all the options of the hamburger menu button', async() => {
    await InventoryPage.hamburgereMenu();
    await browser.pause(1000);
    await InventoryPage.clickOnAboutBtn();
    await expect(InventoryPage.sauceLabLogoDisplayed);
    await browser.back();
    await browser.pause(1000);
    await InventoryPage.addTOCartBtn();
    await expect(InventoryPage.cartBtn).toBeDisplayed();
    await InventoryPage.hamburgereMenu();
    await InventoryPage.resetBtnclick();
   
   
     })
});