import { TwitterwallPage } from './app.po';

describe('twitterwall App', function() {
  let page: TwitterwallPage;

  beforeEach(() => {
    page = new TwitterwallPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
