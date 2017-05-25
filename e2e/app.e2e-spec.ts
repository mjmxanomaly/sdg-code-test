import { SdgPage } from './app.po';

describe('sdg App', () => {
  let page: SdgPage;

  beforeEach(() => {
    page = new SdgPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
