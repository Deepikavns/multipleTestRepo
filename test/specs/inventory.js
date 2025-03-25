import LoginPage from '../pageobjects/login.page.js'
import InventoryPage from '../pageobjects/inventory.page.js';


describe('Test hamburger menu button ', () => {

   beforeEach('login functionality', async () => {
      await LoginPage.open();
      await LoginPage.login('standard_user', 'secret_sauce');
      await InventoryPage.logoDisplay()
   });

   it('Verify hamburger menu functionality', async () => {
      await InventoryPage.hamburgereMenu();
      await InventoryPage.clickCloseMenubtn();
      await InventoryPage.hamburgereMenuIconDisplayed();

   });

   it('Verify all the options of the hamburger menu button', async () => {
      await InventoryPage.hamburgereMenu();
      await InventoryPage.clickOnAboutBtn();
      await InventoryPage.sauceLabLogoDisplayed();
      await browser.back();
      await InventoryPage.addTOCartBtn1();
      await browser.pause(3000);
      await InventoryPage.cartBtnDisplay();
      await InventoryPage.hamburgereMenu();
      await InventoryPage.resetBtnclick();


   })
});