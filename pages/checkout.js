const I = actor();

module.exports = {

  // checkout page locators

  price: {
    total: '.total .list-price span'
  },
  coupon: {
    input: '#CouponCode',
    disabled: "//button[@disabled = 'disabled']/span[contains(text(), 'Apply')]",
    enabled: "//span[contains(text(), 'Apply')]",
    remove: "//span[contains(text(), 'Remove')]",
  },


  // checkout page methods
  fillCustomerInfo(mobileName) {

  },

  async getTotalPrice() {
    let price = await I.grabTextFrom(this.price.total);
    return price
  },

  applyCoupon(coupon) {
    I.seeElement(this.coupon.disabled);
    I.retry({ retries: 5, minTimeout: 150 }).fillField(this.coupon.input, coupon);
    I.retry({ retries: 5, minTimeout: 170 }).dontSeeElement(this.coupon.disabled);
    I.click('Apply');
    I.retry({ retries: 5, minTimeout: 170 }).seeElement(this.coupon.remove);
  },

}

