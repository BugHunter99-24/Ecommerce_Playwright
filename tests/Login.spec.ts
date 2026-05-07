import { test, expect } from '@playwright/test'
import { HomePage } from '../pages/Homepage'
import { LoginPage } from '../pages/loginpage'
import { TestConfig } from '../test.config'
import { MyAccountPage } from '../pages/MyAccountPage';

let config: TestConfig;
let homepage: HomePage;
let loginpage: LoginPage;
let myAccountPage: MyAccountPage;

// This hook runs before each test
test.beforeEach(async ({ page }) => {


    config = new TestConfig();
    await page.goto(config.appUrl);//Launching application

    homepage = new HomePage(page);
    loginpage = new LoginPage(page);
    myAccountPage=new MyAccountPage(page);

})

test.afterEach(async ({ page }) => {

    await page.close();
})

test('Verify user Login @master', async () => {

    await homepage.clickMyAccount();
    await homepage.clickLogin();

    await loginpage.loginprocess(config.email, config.password);

    //Verify successful login by checking 'My Account' page presence

    const isLoggedIn=await myAccountPage.isMyAccountPageExists();
    expect(isLoggedIn).toBeTruthy();


})
