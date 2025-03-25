import LoginPage from "../pageobjects/login.page.js";
import InventoryPage from "../pageobjects/inventory.page.js";
import CartPage from "../pageobjects/cart.page.js";


describe('my cart application ', () => {

    beforeEach('login functionality', async () => {
        await LoginPage.open();
        await LoginPage.login('standard_user', 'secret_sauce');
        await InventoryPage.logoDisplay()
    });


    it('Verify "Your Cart"functionality without additing item in the cart', async () => {
        await InventoryPage.cartBtnClick();
        await CartPage.yourCartDisplay();
        await CartPage.clickContinueShoppingBtn();
        await InventoryPage.logoDisplay()
        await InventoryPage.cartBtnClick();
        await CartPage.yourCartDisplay();
        await CartPage.clickOnCheckOutBtn();

    });

    it('Testing the "Your cart"functionality by adding one or multiple items to the cart', async () => {
        await InventoryPage.addTOCartBtn1();
        await InventoryPage.cartItemContains();
        await InventoryPage.cartBtnClick();
        await CartPage.yourCartDisplay();
        await CartPage.clickContinueShoppingBtn();
        await InventoryPage.logoDisplay();
        await InventoryPage.addTOCartBtn2();
        await InventoryPage.addTOCartBtn3();
        await InventoryPage.cartBtnClick();
        await CartPage.removeitem();

    });
});
