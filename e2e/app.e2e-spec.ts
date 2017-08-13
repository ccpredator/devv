import { DevAppPage } from './app.po';

describe('dev-app App', () => {
  let page: DevAppPage;

  beforeEach(() => {
    page = new DevAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
