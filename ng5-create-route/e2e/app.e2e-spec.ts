import { AppPage } from './app.po';
import { browser, by, element } from 'protractor';
describe('ng5-create-route App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display Home Page', () => {
    //navigate to default route
    page.navigateTo();
    //browser.pause();
    expect(page.getParagraphText()).toEqual('Home Page');
  });
});
