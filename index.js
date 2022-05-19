const {Builder, By, Key, util} = require('selenium-webdriver');
async function example() {
  let driver = await new Builder().forBrowser('firefox').build();
    await driver.get('https://beta.eliona.io/login?redirect=/');
    await driver.findElement(By.name('username')).sendKeys('eduard')
    await driver.findElement(By.name('password')).sendKeys('12345',Key.RETURN);

    var title = await driver.getTitle();
    console.log('Title is:',title);
    
    await driver.quit();
  }
example();