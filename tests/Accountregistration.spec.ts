import { test, expect } from '@playwright/test'
import { HomePage } from '../pages/Homepage'
import { Registrationpage } from '../pages/Registrationpg'
import { RandomDataUtil } from '../utils/randomDataGenerator'
import { TestConfig } from '../test.config'

let homepage: HomePage;
let registrationpage: Registrationpage;
let config: TestConfig;

test.beforeEach(async ({ page }) => {

    config = new TestConfig();
    await page.goto(config.appUrl);//Launching application

    homepage = new HomePage(page);
    registrationpage = new Registrationpage(page);
})

test.afterEach(async ({ page }) => {
    await page.waitForTimeout(3000);
    await page.close();
})

test('Verify user registration process @sanity @regression', async ({ page }) => {


    await homepage.isHomePageExists();
    await homepage.clickMyAccount();
    await homepage.clickRegister();

    //Fill in registration details with random data
    await registrationpage.setFirstName(RandomDataUtil.getFirstName());
    await registrationpage.setLastName(RandomDataUtil.getlastName());
    await registrationpage.setemail(RandomDataUtil.getEmail());
    await registrationpage.setTelephone(RandomDataUtil.getPhoneNumber());

    const password = RandomDataUtil.getPassword();
    await registrationpage.setPassword(password);
    await registrationpage.setConfirmPassword(password);

    await registrationpage.setPolicy();
    await registrationpage.continue();

    //Verify confirmation message
    const confmsg = await registrationpage.getConfirmationmsg();
    expect(confmsg).toContain("Your Account Has Been Created!");









})