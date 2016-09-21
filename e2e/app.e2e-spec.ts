import { WikiSearchPage } from './app.po';

describe('wiki-search App', function() {
  let page: WikiSearchPage;

  beforeEach(() => {
    page = new WikiSearchPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
