import { GrcPage } from './app.po';

describe('grc App', () => {
  let page: GrcPage;

  beforeEach(() => {
    page = new GrcPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
