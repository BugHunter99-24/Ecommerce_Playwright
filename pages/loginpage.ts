import { Page, Locator } from '@playwright/test';

export class LoginPage {

    private readonly page: Page;

    private readonly emailaddress: Locator;

    private readonly password: Locator;

    private readonly btnlogin: Locator;

    private readonly loginerrormsg: Locator;

    //Constructor

    constructor(page: Page) {

        this.page = page;
        this.emailaddress = page.locator("//input[@id='input-email']");
        this.password = page.locator("//input[@id='input-password']");
        this.btnlogin = page.locator("//input[@type='submit']");

        this.loginerrormsg = page.locator("//div[@class='alert alert-danger alert-dismissible']");
    }

    //action methods

    async setEmail(email: string): Promise<void> {

        await this.emailaddress.fill(email);
    }

    async setPassword(Pwd: string): Promise<void> {

        await this.password.fill(Pwd);
    }

    async clickloginbtn() {

        await this.btnlogin.click();
    }

    async loginprocess(email: string, Pwd: string) {

        await this.setEmail(email);
        await this.setPassword(Pwd);
        await this.clickloginbtn();

    }

    async getloginErrorMessage(): Promise<null | string> {

        return (this.loginerrormsg.textContent());
    }





}