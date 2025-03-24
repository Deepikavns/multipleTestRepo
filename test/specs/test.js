import { expect } from '@wdio/globals'
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

    it('login with locked_out_user credentials ', async () => {
        await LoginPage.open();
        await LoginPage.login('locked_out_user', 'secret_sauce');
        await LoginPage.errorMessageDisplay()
    })


    it('login with locked_out_user credentials and blank password field', async () => {
        await LoginPage.open();
        await LoginPage.login('locked_out_user', '');
        await LoginPage.errorMessageDisplay();

    })

    it('login with problem_user credentials ', async () => {
        await LoginPage.open();
        await LoginPage.login('problem_user', 'secret_sauce');
        await InventoryPage.hamburgereMenu();
        await browser.pause(3000);
        await InventoryPage.logoutBtn();
        await LoginPage.loginLogoDisplay();

    })

    it('login with wrong username and valid password', async () => {
        await LoginPage.open();
        await LoginPage.login('problem', 'secret_sauce');
        await browser.pause(2000);
        await LoginPage.errorMessageDisplay();
    })

   it('login with performance_glitch_user credentials', async () => {
        await LoginPage.open();
        await LoginPage.login('performance_glitch_user', 'secret_sauce');
        await InventoryPage.hamburgereMenu();
        await InventoryPage.logoutBtn();
        await LoginPage.loginLogoDisplay();


    })
    it('login by removing underscores from username and valid password', async () => {
        await LoginPage.open();
        await LoginPage.login('performanceglitchuser', 'secret_sauce');
        await LoginPage.errorMessageDisplay();
    })

    it('login with error_user credentials', async () => {
        await LoginPage.open();
        await LoginPage.login('error_user', 'secret_sauce');
        await InventoryPage.hamburgereMenu();
        await InventoryPage.logoutBtn();
        await LoginPage.loginLogoDisplay();

    })

    it('login with white space in username and valid password', async () => {
        await LoginPage.open();
        await LoginPage.login('error_   user', 'secret_sauce');
        await LoginPage.errorMessageDisplay();

    })

    it('login with visual_user credentials', async () => {
        await LoginPage.open();
        await LoginPage.login('visual_user', 'secret_sauce');
        await InventoryPage.hamburgereMenu();
        await InventoryPage.logoutBtn();
        await LoginPage.loginLogoDisplay();

    })
    it('login with special characters in username and valid password', async () => {
        await LoginPage.open();
        await LoginPage.login('visual_user$##', 'secret_sauce');
        await LoginPage.errorMessageDisplay();

     })


})





