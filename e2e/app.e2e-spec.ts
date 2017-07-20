import { Angular2StarterAppPage } from './app.po';

describe('angular2-starter-app App', () => {
  let page: Angular2StarterAppPage;

  beforeEach(() => {
    page = new Angular2StarterAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
