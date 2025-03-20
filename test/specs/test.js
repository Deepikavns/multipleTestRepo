import { expect } from '@wdio/globals'
import LoginPage from '../pageobjects/login.page.js'


import InventoryPage from '../pageobjects/inventory.page.js'


describe('My Login application', () => {


    it('should login with Invalid userName', async () => {
        await LoginPage.open();
        await LoginPage.login('ABC', 'secret_sauce');
        await browser.pause(2000);
        await expect(LoginPage.errorMessage).toBeExisting()

    })
    it('should login with Invalid password', async () => {
        await LoginPage.open();
        await LoginPage.login('standard_user', 'xyz');
        await browser.pause(2000);
        await expect(LoginPage.errorMessage).toBeExisting();

    })

    it('should login with Invalid credentials', async () => {
        await LoginPage.open();
        await LoginPage.login('ABC', 'xyz');
        await browser.pause(2000);
        await expect(LoginPage.errorMessage).toBeExisting();

    })

    it('should login with blank username and blank password field', async () => {
        await LoginPage.open();
        await LoginPage.login('', '');
        await browser.pause(2000);
        await expect(LoginPage.errorMessage).toBeExisting();

    })

    it('should login with valid credentials using standard_user', async () => {
        await LoginPage.open();
        await LoginPage.login('standard_user', 'secret_sauce');
        await browser.pause(3000);
        await expect(InventoryPage.logo).toBeExisting();
        await InventoryPage.hamburgereMenu();
        await browser.pause(3000);
        await InventoryPage.logoutBtn();
        await expect(LoginPage.loginLogo).toBeDisplayed();

    })

    it('should login with locked_out_user credentials ', async () => {
        await LoginPage.open();
        await LoginPage.login('locked_out_user', 'secret_sauce');
        await browser.pause(3000);
        await expect(LoginPage.errorMessage).toBeExisting();


    })
    it('should login with problem_user credentials ', async () => {
        await LoginPage.open();
        await LoginPage.login('problem_user', 'secret_sauce');
        await browser.pause(3000);
        await expect(InventoryPage.logo).toBeExisting();
        await InventoryPage.hamburgereMenu();
        await browser.pause(3000);
        await InventoryPage.logoutBtn();
        await expect(LoginPage.loginLogo).toBeDisplayed();

    })

    it('should login with performance_glitch_user credentials', async () => {
        await LoginPage.open();
        await LoginPage.login('performance_glitch_user', 'secret_sauce');
        await browser.pause(3000);
        await expect(InventoryPage.logo).toBeExisting();
        await InventoryPage.hamburgereMenu();
        await browser.pause(3000);
        await InventoryPage.logoutBtn();
        await expect(LoginPage.loginLogo).toBeDisplayed();

    })

    it('should login with error_user credentials', async () => {
        await LoginPage.open();
        await LoginPage.login('error_user', 'secret_sauce');
        await browser.pause(3000);
        await expect(InventoryPage.logo).toBeExisting();
        await InventoryPage.hamburgereMenu();
        await browser.pause(3000);
        await InventoryPage.logoutBtn();
        await expect(LoginPage.loginLogo).toBePresent();

    })






})





