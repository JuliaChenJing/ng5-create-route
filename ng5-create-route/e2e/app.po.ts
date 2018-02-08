import { browser, by, element } from 'protractor';

export class AppPage {
  //navitage to default route
  navigateTo() {
    return browser.get('/');
  }

  getHomePageText() {
    return element(by.css('app-home h2')).getText();
  }

  getAboutButton() {
    return element(by.css('[routerlink="/about"]')).getText();
  }
}
