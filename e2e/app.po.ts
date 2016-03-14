export class TwitterwallPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('twitterwall-app p')).getText();
  }
}
