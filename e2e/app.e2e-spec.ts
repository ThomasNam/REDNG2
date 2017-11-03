import { RedNg2Page } from './app.po';

describe('red-ng2 App', function() {
  let page: RedNg2Page;

  beforeEach(() => {
    page = new RedNg2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
