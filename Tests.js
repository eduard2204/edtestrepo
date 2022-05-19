import { browser, by, element, protractor } from "protractor";

describe('Search', () => {
    it('Open google and find a text', async () => {
        // Создаем объект для работы с ожиданиями
        let EC = protractor.ExpectedConditions;

        // выключаем проверку на AngularJS
        await browser.waitForAngularEnabled(false);

        // открываем страницу Google
        await browser.get('https://www.google.com/');
        
        // создаем элемент по css = input[role='combobox']
        let input_button = element(by.css("input[role='combobox']"));

        // ждем появление этого элемента (события presenceOf)
        await browser.wait(EC.presenceOf(input_button), 5000);

        // пишем в элемент текст “protractor”
        await input_button.sendKeys("protractor");

        // создаем элемент кнопки сабмита по css
        let submit_button = element(by.css(".FPdoLc input[type='submit'][name='btnK']"));

        // дожидаемся его появления на странице (не обязательно, ведь мы уже дождались input-элемента, значит страница загрузилась)
        await browser.wait(EC.presenceOf(submit_button), 5000);

        // кликаем по кнопке сабмита
        await submit_button.click();

        // ждем, когда URL будет содержать текст 'protractor'
        await browser.wait(EC.urlContains('protractor'), 5000);
    });
});