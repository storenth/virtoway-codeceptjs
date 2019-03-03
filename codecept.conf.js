exports.config = {
  tests: './*_test.js',
  output: './output',
  helpers: {
    Puppeteer: {
      url: 'https://demo.virtocommerce.com',
      show: true,
      smartWait: 5000,
      windowSize: "1366x768",
      fullPageScreenshots: true,
      waitForNavigation: [
        "load",
        "domcontentloaded",
        "networkidle0"
      ]
    }
  },
  include: {
    I: './steps_file.js',
    mainPage: "./pages/main.js",
    cartPage: './pages/cart.js',
    checkoutPage: './pages/checkout.js'
  },
  bootstrap: null,
  mocha: {},
  plugins: {
    screenshotOnFail: {
      enabled: true,
      uniqueScreenshotNames: true
    },
  },
  name: 'virtoway-codeceptjs',
  timeout: 10000,
}