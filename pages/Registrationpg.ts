import {Page, expect, Locator} from '@playwright/test';

export class Registrationpage{

    private readonly page:Page;
    //Locators
    private readonly Firstname:Locator;
    private readonly Lastname:Locator;
    private readonly email:Locator;
    private readonly telephone:Locator;
    private readonly Password:Locator;
    private readonly Passwordconfirm:Locator;
    private readonly subscriberadiobtn:Locator;
    private readonly Checkpolicy:Locator;
    private readonly Continue:Locator;
    private readonly Confirmmsg:Locator;

    //constructors

    constructor(page:Page){
        this.page=page;
        this.Firstname=page.getByPlaceholder('First Name');
        this.Lastname=page.getByPlaceholder('Last Name');
        this.email=page.getByPlaceholder('E-Mail');
        this.telephone=page.getByPlaceholder('Telephone');
        this.Password=page.locator("//input[@id='input-password']");
        this.Passwordconfirm=page.getByPlaceholder('Password Confirm');
        this.subscriberadiobtn=page.getByLabel('No');
        this.Checkpolicy=page.getByRole('checkbox');
        this.Continue=page.locator('input[type="submit"]');
        this.Confirmmsg=page.locator("//h1[text()='Your Account Has Been Created!']");

    }

    //Action methods
    async setFirstName(fname:string):Promise<void>{
        await this.Firstname.fill(fname);
    }

    async setLastName(lname:string):Promise<void>{
        await this.Lastname.fill(lname);
    }

    async setemail(email:string):Promise<void>{
        await this.email.fill(email);
    }

    async setTelephone(tel:string):Promise<void>{
        await this.telephone.fill(tel);
    }

    async setPassword(pwd:string):Promise<void>{
        await this.Password.fill(pwd);
    }

    async setConfirmPassword(pwdconfirm:string):Promise<void>{
        await this.Passwordconfirm.fill(pwdconfirm);
    }

    /*async setSubscription():Promise<void>{
        await this.subscriberadiobtn.check();
    }*/

    async setPolicy():Promise<void>{
        await this.Checkpolicy.click();
    }

    async continue():Promise<void>{
        await this.Continue.click();
    }

    async getConfirmationmsg():Promise<string>{
        return await this.Confirmmsg.textContent() ?? '';
    }

    
    async completeRegistration(userData: {
        
        firstName: string;
        lastName: string;
        email: string;
        telephone: string;
        password: string;

     }): Promise<void>{

        await this.setFirstName(userData.firstName);
        await this.setLastName(userData.lastName);
        await this.setemail(userData.email);
        await this.setTelephone(userData.telephone);
        await this.setPassword(userData.password);
        await this.setConfirmPassword(userData.password);
        //await this.setSubscription();
        await this.setPolicy();
        await this.continue();

     }
}