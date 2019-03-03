/// <reference path="./steps.d.ts" />
const assert = require('assert');
Feature('Coupon');
Before((I) => {
    I.amOnPage('/');
});
After((I) => {
    I.saveScreenshot('finalStep.png');
});
Scenario('Apply coupon ', async (I, mainPage, cartPage, checkoutPage) => {
    I.retry({ retries: 5, minTimeout: 200 }).click('Cell phones');
    within({ frame: mainPage.filter.brandAsus }, () => {
        I.retry({ retries: 5, minTimeout: 150 }).click('Asus');
    });

    mainPage.addToCart(mainPage.chooseMobile('ASUS ZenFone 2 ZE551ML 16GB'));
    I.retry({ retries: 5, minTimeout: 200 }).click('Checkout');
    I.seeElement('#FirstName');
    
    let preTotalPrice = await checkoutPage.getTotalPrice();
    console.log(preTotalPrice);

    checkoutPage.applyCoupon('test');

    let postTotalPrice = await checkoutPage.getTotalPrice();
    console.log(postTotalPrice);

    assert.notEqual(postTotalPrice, preTotalPrice);
});
