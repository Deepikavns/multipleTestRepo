import { $ } from '@wdio/globals'
import Page from './page.js';


class LoginPage extends Page {

    get inputUsername() {
        return $('#user-name');
    }


    get inputPassword() {
        return $('#password');
    }


    get btnSubmit() {
        return $('#login-button');
    }

    get loginLogo() {
        return $('.login_logo');
    }


    get errorMessage() {
        return $('//h3[@data-test="error"]//button');
    }



    async login(username, password) {
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.btnSubmit.click();
        await browser.pause(3000);
       
    }
    async loginLogoDisplay (){
        await expect(this.loginLogo).toBeExisting();
    }
     


    

    async errorMessageDisplay (){
        await expect(this.errorMessage).toBeExisting();
    }
     

  open() {
        return super.open('');
    }
}


export default new LoginPage();


