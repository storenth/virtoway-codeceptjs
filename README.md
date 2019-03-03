# acceptance tests using CodeceptJS with Puppeteer
E2E testing demo with CodeceptJS and Puppeteer helper

#### dependencies:
* Node v10 or greater
* npm
* codeceptjs@2.0.6
* Puppeteer@1.11.0
    ```
    apt install npm
    npm install npm -g
    npm install codeceptjs puppeteer --save-dev
    ```
#### invoke:
1. executing test-suits:
    ```
    cd virtoway-codeceptjs
    ./node_modules/.bin/codeceptjs run --steps
    ```