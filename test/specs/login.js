
import LoginPage from '../pageobjects/login.page.js'
import InventoryPage from '../pageobjects/inventory.page.js'


describe('My Login application', () => {

    it('login with valid credentials using standard_user', async () => {
        await LoginPage.open();
        await LoginPage.login('standard_user', 'secret_sauce');
        await InventoryPage.hamburgereMenu();
        await InventoryPage.logoutBtn();
        await LoginPage.loginLogoDisplay();

    })

    it('login with valid credentials using standard_user and Invalid password', async () => {
        await LoginPage.open();
        await LoginPage.login('standard_user', 'xyz');
        await LoginPage.errorMessageDisplay()

    })

})