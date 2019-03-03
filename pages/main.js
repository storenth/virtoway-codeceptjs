const I = actor();

module.exports = {

  // main page locators
  filter: {
    brandAsus: '#collectionFilters > div > div:nth-child(1) > ul'
  },
  mobileList: '.large--four-fifths > div',
  modal: '.modal-dialog',
  cart: {
    disabled: 'button#addToCart[disabled=disabled]'

  },


  // main page methods
  chooseMobile(mobileName) {
    within({ frame: this.mobileList }, () => {
      I.retry({ retries: 5, minTimeout: 150 }).click(mobileName);
  });
  },

  addToCart() {
    I.dontSeeElementInDOM(this.cart.disabled);
    I.wait(2);
    I.retry({ retries: 5, minTimeout: 150 }).click('Add to Cart');
    within({ frame: this.modal }, () => {
        I.retry({ retries: 5, minTimeout: 150 }).click('Go to cart');
    });
  }
}
