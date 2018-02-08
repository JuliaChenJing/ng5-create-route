import { browser, by, element } from 'protractor';

export class AppPage {
  //navitage to default route
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('app-home h2')).getText();
  }
}
