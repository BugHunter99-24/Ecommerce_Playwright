import {Page, expect, Locator} from '@playwright/test';

export class HomePage{

    //Locators

    private readonly page: Page;
    private readonly linkMyAccount: Locator;
    private readonly Register: Locator;
    private readonly Login: Locator;
    private readonly Searchbox: Locator;
    private readonly SearchBtn: Locator;

    //Constructors

    constructor(page:Page){

        this.page=page;
        this.linkMyAccount= page.locator("//a[@title='My Account']");
        this.Register= page.getByRole('link', { name: 'Register' });
        this.Login= page.getByRole('link', { name: 'Login' });
        this.Searchbox= page.getByPlaceholder('Search', { exact: true });
        this.SearchBtn= page.getByRole('button');
    }

    //action methods

      // Check if HomePage exists
    async isHomePageExists(){

        let title:string = await this.page.title();
        if(title)
        {
            return true;
        }
        return false;
    }

 // Click "My Account" link
    async clickMyAccount(){
        try {
            await this.linkMyAccount.click();
        } catch (error) {
            console.log(`Exception occurred while clicking 'My Account': ${error}`);
            throw error;
        }
    }

 // Click "Register" link
    async clickRegister(){
        try {
            await this.Register.click();
        } catch (error) {
            console.log(`Exception occurred while clicking 'Register': ${error}`);
            throw error;
        }
    }

    // Click "Login" link
    async clickLogin(){
        try {
            await this.Login.click();
        } catch (error) {
            console.log(`Exception occurred while clicking 'Login': ${error}`);
            throw error;
        }
    }

    // Enter product name in the search box
    async enterProductName(pName: string){
        try {
            await this.Searchbox.fill(pName);
        } catch (error) {
            console.log(`Exception occurred while entering product name: ${error}`);
            throw error;
        }
    }

    // Click the search button
    async clickSearch(){
        try {
            await this.SearchBtn.click();
        } catch (error) {
            console.log(`Exception occurred while clicking 'Search': ${error}`);
            throw error;
        }
    }
    



}