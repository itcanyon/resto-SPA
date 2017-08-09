import { RestoSpaPage } from './app.po';

describe('resto-spa App', () => {
  let page: RestoSpaPage;

  beforeEach(() => {
    page = new RestoSpaPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
